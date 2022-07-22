import React from 'react';
import styled from 'styled-components';
import { TbHeartPlus } from 'react-icons/tb';

function AddCard({
  defaultData,
  rating,
  setStorageChange,
  storageChange,
  setIndex,
  productImage,
}) {
  const savedData = [
    defaultData.category,
    defaultData.name,
    defaultData.default_price,
    rating,
    productImage,
  ];
  return (
    <div
      onClick={() => {
        localStorage.setItem(`${defaultData.id}`, JSON.stringify(savedData));
        setStorageChange(() => !storageChange);
        setIndex(0);
      }}
    >
      <AddCardStyle>
        <AddIcon />
        <Text>Add to Outfit</Text>
      </AddCardStyle>
    </div>
  );
}

export default AddCard;

const AddCardStyle = styled.div`
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 0.2);
  background: #5d6699;
  padding: 0.25rem;
  width: 300px;
  height: 450px;
`;

const Text = styled.div`
  font-size: 40px;
  margin: 1em;
`;

const AddIcon = styled(TbHeartPlus)`
  padding-top: 15%;
  padding-left: 15%;
  font-size: 200px;
`;
