import React from 'react';
import RelatedProducts from './relatedList/relatedProducts.jsx';
import Outfit from './outfitList/outfit.jsx';
import OutfitList from './outfitList/outfitList.jsx';
import RelatedList from './relatedList/relatedList.jsx';

function RelatedItems() {
  return (
    <div>
      <RelatedProducts />
      <RelatedList />
      <Outfit />
      <OutfitList />
    </div>
  );
}

export default RelatedItems;
