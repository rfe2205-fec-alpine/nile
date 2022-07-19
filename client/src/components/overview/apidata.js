const axios = require('axios');
const { GITHUB_API_KEY, CAMPUS_CODE } = require('../../../../config.js');

function getAverageReviewFromData(data) {
  let totalReviewScore = 0;
  const numberOfReviews = data.count;
  const reviews = data.results;

  console.log('number of reviews is', numberOfReviews);
  console.log('reviews is', reviews);

  for (const review of reviews) {
    console.log('reading review');
    totalReviewScore += review.rating;
  }

  console.log('total review score', totalReviewScore);

  const averageReviewRating = totalReviewScore / numberOfReviews;
  return averageReviewRating;
}

function getApiDataFromProductId(productId, setData) {
  const productUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/products/${productId}`;
  const productStylesUrl = `${productUrl}/styles`;
  const productReviewsUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/reviews/meta`;

  let mainSectionData = {};
  let descriptionSectionData = {};

  axios({
    method: 'get',
    url: productUrl,
    headers: {
      Authorization: GITHUB_API_KEY,
    },
  })
    .then((data) => {
      const innerData = data.data;

      mainSectionData = {
        name: innerData.name,
        category: innerData.category,
        price: innerData.default_price,
      };

      descriptionSectionData = {
        slogan: innerData.slogan,
        description: innerData.description,
        features: innerData.features,
      };
    })
    .then(() => {
      axios({
        method: 'get',
        url: productStylesUrl,
        headers: {
          Authorization: GITHUB_API_KEY,
        },
      })
        .then((data) => {
          const innerData = data.data;
          mainSectionData.styles = innerData.results;
        })
        .then(() => {
          const productIntegerId = parseInt(productId);

          axios({
            method: 'get',
            url: productReviewsUrl,
            headers: {
              Authorization: GITHUB_API_KEY,
            },
            params: {
              product_id: productIntegerId,
            },
          })
            .then((data) => {
              let innerData = data.data;
              // console.log('review data:', innerData);

              let averageReview = getAverageReviewFromData(innerData);
              // console.log(averageReview);
              mainSectionData.averageReview = averageReview;
              mainSectionData.numberOfReviews = innerData.results.length;
              setData([mainSectionData, descriptionSectionData]);
            })
            .catch(error => {
              console.log(error);
              setData([mainSectionData, descriptionSectionData]);
            });
        });
    });
}

module.exports = getApiDataFromProductId;
