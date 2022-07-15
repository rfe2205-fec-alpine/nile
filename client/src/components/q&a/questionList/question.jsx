import React from "react";
import styled from "styled-components";

const QuestionRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const AnswerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnswerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const LargeText = styled.p`
  color: red;
  font-size: 1.25em;
`;

const LargeBoldText = styled.p`
  color: red;
  font-size: 1.25em;
  flex-grow: 1;
  font-weight: bold;
`;

const SmallText = styled.p`
  color: red;
  font-size: 1em;
`;

const SmallUnderlinedText = styled.p`
  color: red;
  font-size: 1em;
  text-decoration: underline;
`;

function Question({ question }) {
  return (
    <div>
      <QuestionRow>
        <LargeBoldText>{"Q: " + question.question_body}</LargeBoldText>
        <SmallText>Helpful?</SmallText>
        <SmallUnderlinedText>Yes</SmallUnderlinedText>
        <SmallText>{"(" + question.question_helpfulness + ")  |  "}</SmallText>
        <SmallUnderlinedText>Add Answer</SmallUnderlinedText>
      </QuestionRow>
      <div>
        {Object.entries(question.answers).map(function (entry) {
          return (
            <AnswerColumn>
              <LargeText>{"A: " + entry[1].body}</LargeText>
              <AnswerRow>
                <SmallText>
                  {"by " +
                    entry[1].answerer_name +
                    ", " +
                    entry[1].date +
                    " | Helpful? "}
                </SmallText>
                <SmallUnderlinedText>{" Yes "}</SmallUnderlinedText>
                <SmallText>{"(" + entry[1].helpfulness + ")  |  "}</SmallText>
                <SmallUnderlinedText>Report</SmallUnderlinedText>
              </AnswerRow>
            </AnswerColumn>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
