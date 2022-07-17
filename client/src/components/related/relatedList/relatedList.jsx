import React, { useState } from 'react';
import styled from 'styled-components';
import { CgArrowLeftO, CgArrowRightO } from 'react-icons/cg';
import RelatedCard from './relatedCard.jsx';

function RelatedList({productList, defaultData}) {
  const [index, setIndex] = useState(0);
  const newProductList = productList.slice(index, index + 3);

  return (
    <CardList>
      {index !== 0 ? <LeftArrow onClick={() => setIndex(index - 1)} /> : ''}
      {newProductList.map((product) => {return <RelatedCard key={product.id} product={product} defaultData={defaultData} />})}
      {index + 3 !== productList.length ? <RightArrow onClick={() => setIndex(index + 1)} /> : ''}
    </CardList>
  );
}
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.25rem;
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
export default RelatedList;
