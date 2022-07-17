import React from 'react';
import OutfitCard from './outfitCard.jsx'
import AddCard from './addCard.jsx'

function OutfitList({ defaultData }) {
  console.log(defaultData);
  return (
    <div>
      <AddCard />
      <OutfitCard />
    </div>
  );
}

export default OutfitList;

// const OutfitStyle = styled.div`
//   background: #5d6699;
//   padding: 0.25rem;
//   width: 300px;
//   height: 450px;
// `;
