import React from "react";
import Answers from "./answers.jsx";

function Question({ question }) {
  return (
    <div>
      <div>
        <p>
          <b>{"Q: " + question.question_body}</b>
        </p>
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
