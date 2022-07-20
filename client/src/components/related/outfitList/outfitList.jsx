import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CgArrowLeftO, CgArrowRightO } from 'react-icons/cg';
import OutfitCard from './outfitCard.jsx'
import AddCard from './addCard.jsx'

const axios = require('axios');
const { GITHUB_API_KEY } = require('../../../../../config.js');

function OutfitList({ defaultData }) {
  const [rating, setRating] = useState(null);
  const [index, setIndex] = useState(0);
  const [storageChange, setStorageChange] = useState(false);
  const [productImage, useProductImage] = useState(null);
  const storedOutfits = Object.keys(localStorage);
  // const displayedOutfits = storedOutfits.slice(index, index + 2);

  useEffect(() => {
  }, [storageChange]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${defaultData.id}`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    })
      .then((defaultRating) => {
        let total = 0;
        defaultRating.data.results.forEach((eachRating) => {
          total += eachRating.rating;
        });
        setRating(total / defaultRating.data.results.length);
      })
      .then(() => axios({
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${defaultData.id}/styles`,
        headers: {
          Authorization: GITHUB_API_KEY,
        },
      }))
      .then((imageData) => {
        console.log(imageData.data.results[0].photos);
        useProductImage(() => (imageData.data.results[0].photos));
      })
      .catch((err) => console.log(err));
  }, [defaultData]);

  if (!rating || !productImage) {
    return null;
  }

  return (
    <CardList>
      <AddCard
        defaultData={defaultData}
        rating={rating}
        setStorageChange={setStorageChange}
        storageChange={storageChange}
        setIndex={setIndex}
        productImage={productImage}
      />
      {/* {index !== 0 ? <LeftArrow onClick={() => setIndex(index - 1)} /> : ''} */}
      {storedOutfits.map((eachOutfit) => (
        <OutfitCard
          eachOutfit={eachOutfit}
          setStorageChange={setStorageChange}
          storageChange={storageChange}
          setIndex={setIndex}
        />
      ))}
      {/* {index + 2 !== storedOutfits.length ? <RightArrow onClick={() => setIndex(index + 1)} /> : ''} */}
    </CardList>
  );
}

export default OutfitList;

const CardList = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.25rem;
  overflow-x: scroll;
  max-width: 90%;
`;

const LeftArrow = styled(CgArrowLeftO)`
  height: -100px;
  color: #5d6699;
  font-size: 80px;
`;

const RightArrow = styled(CgArrowRightO)`
  align: center;
  color: #5d6699;
  font-size: 80px;
`;
