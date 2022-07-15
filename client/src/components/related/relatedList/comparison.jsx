import React from 'react';
import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import ProductContext from '../../../ProductContext.jsx';

function Comparison({product, defaultData}) {
  const combineFeatures = product.features.concat(defaultData.features);
  return (
    <div>
      <StarButton onClick={() => { console.log('clicked product: 💊 ', combineFeatures); }} />
    </div>
  );
}

export default Comparison;

// add click to StarButton
const StarButton = styled(FaStar)`
  color: #5d6699;
  font-size: 25px;
  float: right;
`;
