import React from 'react';
import styled from 'styled-components';
import { TbHeartPlus } from 'react-icons/tb';

function AddCard({
  defaultData, rating, setStorageChange, storageChange, setIndex
}) {
  const savedData = [defaultData.category,defaultData.name, defaultData.default_price, rating];
  return (
    <div onClick={() => {
      localStorage.setItem(`${defaultData.id}`, JSON.stringify(savedData));
      setStorageChange(() => (!storageChange));
      setIndex(0);
    }}>
      <AddCardStyle>
        <AddIcon />
        <Text>Add to Outfit</Text>
      </AddCardStyle>
    </div>
  );
}

export default AddCard;

const AddCardStyle = styled.div`
  background: #5d6699;
  padding: 0.25rem;
  text-align: center;
  width: 300px;
  height: 450px;
`;

const Text = styled.text`
  font-size: 40px;
  margin: 1em;
`;

const AddIcon = styled(TbHeartPlus)`
  font-size: 200px;
`;
