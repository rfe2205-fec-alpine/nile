import React from 'react';
import Question from './question';

function QuestionList({
  questions, handleAddAnswerClick, markQuestionHelpful,
  reportQuestion, markAnswerHelpful, reportAnswer, searchString,
}) {
  return (
    <div>
      {questions.filter((question) => question.question_body.toLowerCase()
        .includes(searchString.toLowerCase())).map((question) => (
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
