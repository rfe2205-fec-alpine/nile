import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import StarRating from '../starRating/starRating.jsx';

function RelatedCard({product}) {
  return (
    <div>
      <Card>
        <StarButton><FaStar /></StarButton>
        <ul>image</ul>
        <ul>Catergory</ul>
        <ul>Name</ul>
        <ul>price</ul>
        <StarRating />
      </Card>
    </div>
  );
}

const Card = styled.div`
  border: 2px solid;
  width: 20%;
`;

// add click to StarButton
const StarButton = styled.div`
  color: #5d6699;
  float: right;
`;

export default RelatedCard;
