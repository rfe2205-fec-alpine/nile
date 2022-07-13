import React from 'react';
import { useEffect, useState } from 'react';
import RelatedCard from './relatedCard.jsx';

function RelatedList({productList}) {
  return (
    <div>
      {console.log(productList)}
      {/* {productList.map((product) => {
      return <RelatedCard key={product.id} product={product} />
    }
  )} */}
    </div>
  );
}

export default RelatedList;
