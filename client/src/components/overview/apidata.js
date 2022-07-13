const axios = require('axios');
const { GITHUB_API_KEY, CAMPUS_CODE } = require('../../../../config.js');

function getApiDataFromProductId(productId, setData) {
  const productUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/products/${productId}`;
  const productStylesUrl = productUrl + '/styles';

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
          setData([mainSectionData, descriptionSectionData]);
        });
    });
}

module.exports = getApiDataFromProductId;
