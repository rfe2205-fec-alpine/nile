import React from 'react';
import { useEffect, useState, useContext } from 'react';
import RelatedProducts from './relatedList/relatedProducts.jsx';
import Outfit from './outfitList/outfit.jsx';
import OutfitList from './outfitList/outfitList.jsx';
import RelatedList from './relatedList/relatedList.jsx';
import ProductContext from '../../ProductContext.jsx';

const axios = require('axios');
const { GITHUB_API_KEY } = require('../../../../config.js');

function RelatedItems() {
  const [productList, setProductList] = useState(null);
  const [productId, setProductId] = useContext(ProductContext);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/related`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    })
      .then((related) => {
        console.log('this is current item: 🦠', productId, 'this is related: 💈', related.data);
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
  }, [productId]);

  if (!productList) {
    return;
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
