import React from 'react';
import styled from 'styled-components';

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`;

function Buttons({ handleMoreQuestionsClick, handleAddQuestionClick, showMoreQuestions }) {
  return (
    <ButtonRow>
      <button type="button" onClick={handleMoreQuestionsClick}>{!showMoreQuestions ? 'More Answered Questions' : 'Show Less Answered Answered Question'}</button>
      <button type="button" onClick={handleAddQuestionClick}> Add a question</button>
    </ButtonRow>
  );
}

export default Buttons;
