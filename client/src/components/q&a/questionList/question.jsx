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
  font-size: 1.25em;
`;

const LargeBoldText = styled.p`
  font-size: 1.25em;
  flex-grow: 1;
  font-weight: bold;
`;

const SmallText = styled.p`
  font-size: 1em;
`;

const SmallUnderlinedText = styled.p`
  font-size: 1em;
  text-decoration: underline;
`;

function Question({ question }) {
  return (
    <div>
      <QuestionRow>
        <LargeBoldText>{"Q: " + question.question_body}</LargeBoldText>
        <SmallText>Helpful?&nbsp;&nbsp; </SmallText>
        <SmallUnderlinedText>Yes</SmallUnderlinedText>
        <SmallText>
          &nbsp;{"(" + question.question_helpfulness + ")"}&nbsp;&nbsp;
          {"|"}&nbsp;&nbsp;
        </SmallText>
        <SmallUnderlinedText>Add Answer</SmallUnderlinedText>
      </QuestionRow>
      <div>
        {Object.entries(question.answers).map(function (entry) {
          return (
            <AnswerColumn>
              <LargeText>{"A: " + entry[1].body}</LargeText>
              <AnswerRow>
                <SmallText>
                  {"by " + entry[1].answerer_name + ", " + entry[1].date}
                  &nbsp;&nbsp;
                  {"|"}
                  &nbsp;&nbsp;
                  {" Helpful? "}
                  &nbsp;&nbsp;
                </SmallText>
                <SmallUnderlinedText>{"Yes"}</SmallUnderlinedText>
                <SmallText>
                  &nbsp;{"(" + entry[1].helpfulness + ")"}&nbsp;&nbsp;
                  {"|"}&nbsp;&nbsp;&nbsp;
                </SmallText>
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
