import React from 'react';
import RelatedCard from './relatedCard.jsx';
import styled from 'styled-components';

function RelatedList({productList, defaultData}) {
  return (
    <CardList>
      {productList.map((product) => {
      return <RelatedCard key={product.id} product={product} defaultData={defaultData} />
    }
  )}
    </CardList>
  );
}
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.25rem;
`;

export default RelatedList;
