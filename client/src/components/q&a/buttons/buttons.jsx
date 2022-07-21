import React from 'react';
import styled from 'styled-components';

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`;

function Buttons({ handleMoreQuestionsClick, handleAddQuestionClick }) {
  return (
    <ButtonRow>
      <button type="button" onClick={handleMoreQuestionsClick}>More Answered Questions</button>
      <button type="button" onClick={handleAddQuestionClick}> Add a question</button>
    </ButtonRow>
  );
}

export default Buttons;
