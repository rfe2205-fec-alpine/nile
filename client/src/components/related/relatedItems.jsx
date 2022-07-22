import React from 'react';
import { useEffect, useState, useContext } from 'react';
import RelatedProducts from './relatedList/relatedProducts.jsx';
import Outfit from './outfitList/outfit.jsx';
import OutfitList from './outfitList/outfitList.jsx';
import RelatedList from './relatedList/relatedList.jsx';
import ProductContext from '../../ProductContext.jsx';
import ThemeContext from '../../ThemeContext';

const axios = require('axios');
const { GITHUB_API_KEY } = require('../../../../config.js');

function RelatedItems() {
  const [productList, setProductList] = useState(null);
  const [defaultData, setDefaultData] = useState(null);
  const [productId] = useContext(ProductContext);
  const [colorScheme] = React.useContext(ThemeContext);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    })
      .then((overviewData) => {
        setDefaultData(() => (overviewData.data));
        axios({
          method: 'get',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/related`,
          headers: {
            Authorization: GITHUB_API_KEY,
          },
        })
          .then((related) => {
            Promise.all(
              related.data.map((relatedList) => axios({
                method: 'get',
                url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${relatedList}`,
                headers: {
                  Authorization: GITHUB_API_KEY,
                },
              })
                .then((relatedData) => relatedData.data)),
            )
              .then((data) => {
                setProductList(() => (data));
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
  }, [productId]);

  if (!productList) {
    return null;
  }
  if (!defaultData) {
    return null;
  }
  return (
    <div>
      <RelatedProducts />
      <RelatedList colorScheme={colorScheme} productList={productList} defaultData={defaultData} />
      <Outfit />
      <OutfitList colorScheme={colorScheme} defaultData={defaultData} />
    </div>
  );
}

export default RelatedItems;
