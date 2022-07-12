import React from "react";
import Question from "./question.jsx";

function QuestionList({ dummyData }) {
  return (
    <div>
      {dummyData.map(function (question) {
        return <Question question={question} answers={question.answers} />;
      })}
    </div>
  );
}

export default QuestionList;
