import React from 'react';
import styled from 'styled-components';
import { TbHeartPlus } from 'react-icons/tb';

function AddCard() {
  return (
    <div onClick={() => {console.log('DO A POST'); } }>
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
