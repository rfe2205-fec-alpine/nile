import React from 'react';
import styled from 'styled-components';

function ProductBreakdown({ ratings }) {
  const all = Object.values(ratings);
  const ratingsSum = all.reduce((prev, current) => parseInt(prev, 10) + parseInt(current, 10), 0);

  function getPercentRating(amount, total) {
    return ((amount / total) * 100);
  }
  return (
    <ProductBrewkdownWrapper>
      <ProgressBar progress={getPercentRating(ratings['5'], ratingsSum)} starRating="Five" />
      <ProgressBar progress={getPercentRating(ratings['4'], ratingsSum)} starRating="Four" />
      <ProgressBar progress={getPercentRating(ratings['3'], ratingsSum)} starRating="Three" />
      <ProgressBar progress={getPercentRating(ratings['2'], ratingsSum)} starRating="Two" />
      <ProgressBar progress={getPercentRating(ratings['1'], ratingsSum)} starRating="One" />
    </ProductBrewkdownWrapper>
  );
}

function ProgressBar({ progress, starRating }) {
  const Wrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const Parentdiv = {
    paddingLeft: '5px',
    height: 7,
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: 'black',
    textAlign: 'right',
  };

  return (
    <div style={Wrapper}>
      <p>{starRating}</p>
      <div style={Parentdiv}>
        <div style={Childdiv} />
      </div>
    </div>
  );
}

const ProductBrewkdownWrapper = styled.div`
border: 1px solid red;
padding 0px;
margin 5px;
`;

export default ProductBreakdown;
