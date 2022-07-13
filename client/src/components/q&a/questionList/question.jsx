import React from "react";
import Answers from "./answers.jsx";

function Question({ question }) {
  return (
    <div>
      <div>
        <b>{"Question: " + question.question_body}</b>
      </div>
      <div>
        {Object.entries(question.answers).map(function (entry) {
          return <Answers answer={entry[1].body} />;
        })}
      </div>
    </div>
  );
}

export default Question;
