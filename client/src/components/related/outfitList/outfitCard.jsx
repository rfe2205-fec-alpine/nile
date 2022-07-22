import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';
import GetImage from '../relatedList/relatedImage';
import QuarterStars from '../../../starRatingFunction';

function OutfitCard({
  eachOutfit,
  setStorageChange,
  storageChange,
  setIndex,
}) {
  const storageOutfit = JSON.parse(localStorage.getItem(eachOutfit));
  useEffect(() => {}, [eachOutfit, storageChange]);
  return (
    <div>
      <Card>
        <DeleteButton
          onClick={() => {
            setStorageChange(() => !storageChange);
            localStorage.removeItem(eachOutfit);
            setIndex(0);
          }}
        />
        <GetImage productImage={storageOutfit[4]} />
        <StyledCategory>{storageOutfit[0]}</StyledCategory>
        <StyledName>{storageOutfit[1]}</StyledName>
        <StyledPrice>{storageOutfit[2]}</StyledPrice>
        <StyledRating>
          <QuarterStars rating={Number.parseFloat(storageOutfit[3]).toFixed(2)} />
        </StyledRating>
      </Card>
    </div>
  );
}

export default OutfitCard;

const Card = styled.div`
  position: relative;
  border-radius: .25rem;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 .2);
  background: #5d6699;
  padding: 0.25rem;
  width: 300px;
  height: 450px;
`;

const StyledCategory = styled.div`
  text-align: left;
  font-size: 1em;
  font-family: Arial;
  color: black;
  padding: 10px 0 10px 10px;
`;

const StyledName = styled.div`
  padding: 0 0 10px 10px;
  color: black;
  font-size: 1.1em;
  font-family: Arial;
  font-weight: bold;
`;

const StyledPrice = styled.div`
  padding: 0 0 10px 10px;
  color: black;
  font-size: 0.75em;
  font-family: Arial;
`;

const StyledRating = styled.div`
  padding-left: 10px;
  position: absolute;
  bottom: 10px;
`;

const DeleteButton = styled(TiDelete)`
  position: absolute;
  color: #5d6699;
  font-size: 2em;
  top: 10px;
  right: 10px;
  &:hover {
    font-size: 2.5em;
  }
`;
