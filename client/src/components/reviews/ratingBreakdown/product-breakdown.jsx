import React from 'react';
import styled from 'styled-components';

function ProductBreakdown({ ratings }) {
  const all = Object.values(ratings);
  const ratingsSum = all.reduce((prev, current) => parseInt(prev, 10) + parseInt(current, 10), 0);

  function getPercentRating(amount, total) {
    return ((amount / total) * 100);
  }
  console.log('Should be a number', ratings['1']);
  return (
    <ProductBreakdownWrapper>
      <ProgressBar progress={getPercentRating(ratings['5'], ratingsSum)} starRating="Five" amount={ratings['5']} />
      <ProgressBar progress={getPercentRating(ratings['4'], ratingsSum)} starRating="Four" amount={ratings['4']} />
      <ProgressBar progress={getPercentRating(ratings['3'], ratingsSum)} starRating="Three" amount={ratings['3']} />
      <ProgressBar progress={getPercentRating(ratings['2'], ratingsSum)} starRating="Two" amount={ratings['2']} />
      <ProgressBar progress={getPercentRating(ratings['1'], ratingsSum)} starRating="One" amount={ratings['1']} />
    </ProductBreakdownWrapper>
  );
}

function ProgressBar({ progress, starRating, amount }) {
  const Wrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const Parentdiv = {
    marginLeft: '5px',
    height: 7,
    width: '65%',
    backgroundColor: 'lightgray',
    // borderRadius: 40,
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: 'green',
    textAlign: 'right',
  };

  const amountStyle = {
    paddingLeft: '3px',
  };

  return (
    <div style={Wrapper}>
      <p>{starRating}</p>
      <div style={Parentdiv}>
        <div style={Childdiv} />
      </div>
      <p style={amountStyle}>{amount} Ratings</p>
    </div>
  );
}

const ProductBreakdownWrapper = styled.div`
padding 0px;
margin 5px;
`;

export default ProductBreakdown;
