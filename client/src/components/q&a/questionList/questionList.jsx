import React from "react";
import Question from "./question.jsx";

function QuestionList({ questions }) {
  console.log(questions);
  return (
    <div>
      {questions.results.map(function (question) {
        return <Question question={question} />;
      })}
    </div>
  );
}

export default QuestionList;
