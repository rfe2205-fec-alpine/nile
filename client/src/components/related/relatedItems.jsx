import React from 'react';
import { useEffect, useState } from 'react';
import RelatedProducts from './relatedList/relatedProducts.jsx';
import Outfit from './outfitList/outfit.jsx';
import OutfitList from './outfitList/outfitList.jsx';
import RelatedList from './relatedList/relatedList.jsx';

const axios = require('axios');
const { GITHUB_API_KEY } = require('../../../../config.js');

function RelatedItems() {
  const [productList, setProductList] = useState(null);

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
            Promise.all(
              related.data.map((relatedList) => {
                return axios({
                  method: 'get',
                  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${relatedList}`,
                  headers: {
                    Authorization: GITHUB_API_KEY,
                  },
                })
                .then((data) => {
                  return data.data;
                })
              }),
            )
              .then((data) => {
                setProductList(data);
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

  if (!productList) {
    return null;
  }
  return (
    <div>
      <RelatedProducts />
      <RelatedList productList={productList} />
      <Outfit />
      <OutfitList />
    </div>
  );
}

export default RelatedItems;
