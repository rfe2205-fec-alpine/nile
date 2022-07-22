import React from 'react';
import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import QuarterStars from '../../../starRatingFunction';
import GetImage from './relatedImage';
import ProductContext from '../../../ProductContext';
import Comparison from './comparison';

const axios = require('axios');
const { GITHUB_API_KEY } = require('../../../../../config');

function RelatedCard({
  product,
  defaultData,
  setIndex,
  colorScheme,
}) {
  const [productId, setProductId] = useContext(ProductContext);
  const [rating, setRating] = useState(null);
  const [show, setShow] = useState(false);
  const [productImage, useProductImage] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${product.id}`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    })
      .then((ratingData) => {
        let total = 0;
        ratingData.data.results.forEach((eachRating) => {
          total += eachRating.rating;
        });
        setRating(total / ratingData.data.results.length);
      })
      .then(() => axios({
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product.id}/styles`,
        headers: {
          Authorization: GITHUB_API_KEY,
        },
      }))
      .then((imageData) => {
        useProductImage(() => imageData.data.results[0].photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!rating || !productImage) {
    return null;
  }

  return (
    <div>
      <Card colorScheme={colorScheme}>
        <div>
          <StarButton
            colorScheme={colorScheme}
            onClick={() => {
              setShow(!show);
            }}
          />
          <Comparison
            colorScheme={colorScheme}
            product={product}
            defaultData={defaultData}
            show={show}
            setShow={setShow}
          />
        </div>
        <div
          onClick={() => {
            setProductId(product.id);
            setIndex(0);
          }}
        >
          <GetImage productImage={productImage} colorScheme={colorScheme} />
          <StyledCategory colorScheme={colorScheme}>{product.category}</StyledCategory>
          <StyledName colorScheme={colorScheme}>{product.name}</StyledName>
          <StyledPrice colorScheme={colorScheme}>{product.default_price}</StyledPrice>
          <StyledRating>
            <QuarterStars rating={Number.parseFloat(rating).toFixed(2)} />
          </StyledRating>
        </div>
      </Card>
    </div>
  );
}

export default RelatedCard;
const Card = styled.div`
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 0.2);
  background: ${(props) => props.colorScheme.foreground};
  padding: 0.25rem;
  width: 300px;
  height: 450px;
`;

const StyledCategory = styled.div`
  text-align: left;
  font-size: 1em;
  font-family: Arial;
  color: ${(props) => props.colorScheme.textColorForeground};
  padding: 10px 0 10px 10px;
`;

const StyledName = styled.div`
  padding: 0 0 10px 10px;
  color: ${(props) => props.colorScheme.textColorForeground};
  font-size: 1.1em;
  font-family: Arial;
  font-weight: bold;
`;

const StyledPrice = styled.div`
  padding: 0 0 10px 10px;
  color: ${(props) => props.colorScheme.textColorForeground};
  font-size: 0.75em;
  font-family: Arial;
`;

const StyledRating = styled.div`
  padding-left: 10px;
  position: absolute;
  bottom: 10px;
`;

const StarButton = styled(FaStar)`
  position: absolute;
  color: ${(props) => props.colorScheme.foreground};
  font-size: 1.5em;
  top: 10px;
  right: 10px;
  &:hover {
    font-size: 2em;
  }
`;
