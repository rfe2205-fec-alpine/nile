import React from 'react';
import { useEffect, useState } from 'react';
import RelatedCard from './relatedCard.jsx';

const axios = require('axios');
const { GITHUB_API_KEY } = require('../../../../../config.js');

function RelatedList() {
  const [productList, setProductList] = useState();

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    })
      .then((products) => {
        axios({
          method: 'get',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${products.data[0].id}/related`,
          headers: {
            Authorization: GITHUB_API_KEY,
          },
        })
          .then((related) => {
            console.log(related.data);
            Promise.all(
              related.data.map(relatedList => {
                return axios({
                  method: 'get',
                  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${relatedList}`,
                  headers: {
                    Authorization: GITHUB_API_KEY,
                  },
                });
              }),
            )
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <RelatedCard />
    </div>
  );
}

export default RelatedList;
