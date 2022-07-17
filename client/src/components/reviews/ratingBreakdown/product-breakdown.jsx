import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import SelectRatingsContext from '../selectedRatingsContext.jsx'

function ProductBreakdown({ ratings }) {
  const all = Object.values(ratings);
  const ratingsSum = all.reduce((prev, current) => parseInt(prev, 10) + parseInt(current, 10), 0);

  function getPercentRating(amount, total) {
    return ((amount / total) * 100);
  }

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
  const [selectedRatings, addSelectedRatings] = useContext(SelectRatingsContext);
  const [selected, toggleSelected] = useState(false);
  const [fresh, changeFresh] = useState(true);

  useEffect(() => {
    if (Object.values(selectedRatings).includes(true)) {
      changeFresh(!fresh);
    }
  }, [selectedRatings]);

  const refObj = {
    Five: 5,
    Four: 4,
    Three: 3,
    Two: 2,
    One: 1,
  };

  function handleClick() {
    addSelectedRatings((current) => {
      return {
      ...current, [refObj[starRating]]: !current[refObj[starRating]], nonToggled: fresh,
      }
    });
    toggleSelected(!selected);
  }

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

  if (selected) {
    return (
      <SelectedWrapper onClick={() => { handleClick(); }}>
        <p>{starRating}</p>
        <div style={Parentdiv}>
          <div style={Childdiv} />
        </div>
        <p style={amountStyle}>{amount} Ratings</p>
      </SelectedWrapper>
    );
  }
  return (
    <Wrapper onClick={() => { handleClick(); }}>
      <p>{starRating}</p>
      <div style={Parentdiv}>
        <div style={Childdiv} />
      </div>
      <p style={amountStyle}>{amount} Ratings</p>
    </Wrapper>
  );
}

const ProductBreakdownWrapper = styled.div`
padding 0px;
margin 5px;
`;

const SelectedWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: lightgreen;
&:hover {
  border: 1px solid green;
  border-radius: 5px;
}
padding-bottom: 10px;
padding-top: 10px;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
&:hover {
  background-color: lightgreen;
}
padding-bottom: 10px;
padding-top: 10px;
`;

export default ProductBreakdown;
