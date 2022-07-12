import React from "react";

function Question({ question, answers }) {
  return (
    <div>
      <div>{"Question: " + question.question_body}</div>
      {<div>'test'</div>}
    </div>
  );
}

export default Question;
