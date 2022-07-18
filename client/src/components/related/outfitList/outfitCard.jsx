import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsXCircle } from 'react-icons/bs';
import GetImage from '../relatedList/relatedImage.jsx';
import QuarterStars from '../../../starRatingFunction.jsx';

function OutfitCard({ eachOutfit, setStorageChange, storageChange, setIndex }) {
  const storageOutfit = JSON.parse(localStorage.getItem(eachOutfit));
  const newEachOutfit = {'id': eachOutfit};
  useEffect(() => {
  }, [eachOutfit, storageChange]);
  return (
    <div>
      <Card>
        <DeleteButton onClick={() => {
          setStorageChange(() => !storageChange);
          localStorage.removeItem(eachOutfit);
          setIndex(0);
        }}
        />
        <GetImage product={newEachOutfit} />
        <ul>{storageOutfit[0]}</ul>
        <ul>{storageOutfit[1]}</ul>
        <ul>{storageOutfit[2]}</ul>
        <QuarterStars rating={Number.parseFloat(storageOutfit[3]).toFixed(2)} />
      </Card>
    </div>
  );
}

export default OutfitCard;

const Card = styled.div`
  background: #5d6699;
  padding: 0.25rem;
  width: 300px;
  height: 450px;
`;

const DeleteButton = styled(BsXCircle)`
  float: right;
  font-size: 24px;
  color: red;
`;
