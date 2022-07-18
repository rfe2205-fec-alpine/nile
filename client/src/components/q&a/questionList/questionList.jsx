import React from 'react';
import Question from './question';

function QuestionList({ questions, handleAddAnswerClick }) {
  console.log(questions);
  return (
    <div>
      {questions.results.map((question) => (
        <Question
          question={question}
          handleAddAnswerClick={handleAddAnswerClick}
        />
      ))}
    </div>
  );
}

export default QuestionList;
