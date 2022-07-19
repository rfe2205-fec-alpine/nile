import React from 'react';
import Question from './question';

function QuestionList({
  questions, handleAddAnswerClick, markQuestionHelpful,
  reportQuestion, markAnswerHelpful, reportAnswer,
}) {
  console.log(questions);
  return (
    <div>
      {questions.results.map((question) => (
        <Question
          question={question}
          handleAddAnswerClick={handleAddAnswerClick}
          markQuestionHelpful={markQuestionHelpful}
          reportQuestion={reportQuestion}
          markAnswerHelpful={markAnswerHelpful}
          reportAnswer={reportAnswer}
        />
      ))}
    </div>
  );
}

export default QuestionList;
