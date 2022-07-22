import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import OutfitCard from './outfitCard';
import AddCard from './addCard';

const axios = require('axios');
const { GITHUB_API_KEY } = require('../../../../../config');

function OutfitList({ defaultData }) {
  const [rating, setRating] = useState(null);
  const [storageChange, setStorageChange] = useState(false);
  const [productImage, useProductImage] = useState(null);
  const [slideLeft, setSlideLeft] = useState(0);
  const [showRight, setShowRight] = useState(true);
  const scrollRef = useRef();
  const storedOutfits = Object.keys(localStorage);

  useEffect(() => {}, [storageChange]);

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
      .then(() =>
        axios({
          method: 'get',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${defaultData.id}/styles`,
          headers: {
            Authorization: GITHUB_API_KEY,
          },
        })
      )
      .then((imageData) => {
        useProductImage(() => imageData.data.results[0].photos);
      })
      .catch((err) => console.log(err));
  }, [defaultData]);

  function handleLeft() {
    setShowRight(true);
    let remainder;
    if (slideLeft - 200 < 0) {
      remainder = 200 - slideLeft;
    } else {
      remainder = 200;
    }
    scrollRef.current.scrollLeft -= remainder;
    setSlideLeft((scrollRef.current.scrollLeft -= remainder));
  }

  function handleRight() {
    const width = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    let remainder;
    if (slideLeft + 200 > width) {
      setShowRight(false);
      remainder = slideLeft + 200 - width;
    } else {
      remainder = 200;
    }
    scrollRef.current.scrollLeft += remainder;
    setSlideLeft((scrollRef.current.scrollLeft += remainder));
  }

  if (!rating || !productImage) {
    return null;
  }
  return (
    <div>
      <AddCardContainer>
        <AddCard
          defaultData={defaultData}
          rating={rating}
          setStorageChange={setStorageChange}
          storageChange={storageChange}
          productImage={productImage}
        />
      </AddCardContainer>
      <CardContainer>
        {slideLeft > 0 ? (
          <LeftArrow
            onClick={() => {
              handleLeft();
            }}
          />
        ) : (
          ''
        )}
        <CardList ref={scrollRef}>
          {storedOutfits.map((eachOutfit) => (
            <OutfitCard
              key={eachOutfit}
              eachOutfit={eachOutfit}
              setStorageChange={setStorageChange}
              storageChange={storageChange}
            />
          ))}
        </CardList>
        {showRight ? (
          <RightArrow
            onClick={() => {
              handleRight();
            }}
          />
        ) : (
          ''
        )}
      </CardContainer>
    </div>
  );
}

export default OutfitList;

const CardContainer = styled.div`
  position: relative;
  max-width: 1200px;
  display: flex;
  background: red;
  flex-direction: row;
`;

const AddCardContainer = styled.div`
  display: inline-block;
  flex-direction: row;
  /* background: yellow; */
`;
const CardList = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 0.25rem;
  max-width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LeftArrow = styled(MdArrowLeft)`
  display: inline-block;
  position: absolute;
  top: 40%;
  left: 0;
  color: #black;
  font-size: 80px;
  opacity: 0.4;
  z-index: 2;
  &:hover {
    opacity: 1;
    font-size: 85px;
    transition: 0.2s;
  }
`;

const RightArrow = styled(MdArrowRight)`
  display: inline-block;
  position: absolute;
  top: 40%;
  right: 0;
  color: #black;
  opacity: 0.4;
  font-size: 80px;
  z-index: 2;
  &:hover {
    opacity: 1;
    font-size: 85px;
    transition: 0.2s;
  }
`;
