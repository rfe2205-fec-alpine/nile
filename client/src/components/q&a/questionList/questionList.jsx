import React from "react";

function QuestionList({ dummyData }) {
  return <div>{"Question: " + dummyData[0].results[0].question_body}</div>;
}

export default QuestionList;
