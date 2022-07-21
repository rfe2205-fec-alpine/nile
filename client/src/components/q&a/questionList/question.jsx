import React from 'react';
import styled from 'styled-components';

const QuestionRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
width: auto;
height: 60px;
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

function Question({
  question, handleAddAnswerClick, markQuestionHelpful,
  reportQuestion, markAnswerHelpful, reportAnswer,
}) {
  return (
    <div>
      <QuestionRow>
        <LargeBoldText>{`Q: ${question.question_body}`}</LargeBoldText>
        <SmallText>Helpful?&nbsp;&nbsp; </SmallText>
        <SmallUnderlinedText onClick={() => {
          markQuestionHelpful(question.question_id);
        }}
        >
          Yes
        </SmallUnderlinedText>
        <SmallText>
          &nbsp;
          {`(${question.question_helpfulness})`}
          &nbsp;&nbsp; | &nbsp;&nbsp;
        </SmallText>
        <SmallUnderlinedText onClick={() => {
          handleAddAnswerClick(question.question_id);
        }}
        >
          Add Answer
        </SmallUnderlinedText>
        <SmallText>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        </SmallText>
        <SmallUnderlinedText onClick={() => {
          reportQuestion(question.question_id);
        }}
        >
          Report

        </SmallUnderlinedText>
      </QuestionRow>
      <div>
        {Object.entries(question.answers).map((entry) => (
          <AnswerColumn>
            <LargeText>{`A: ${entry[1].body}`}</LargeText>
            {entry[1].photos.length > 0 ? (
              <ImageRow>
                {entry[1].photos.map((url) => (<Image src={url} />))}
              </ImageRow>
            ) : null}
            <AnswerRow>
              <SmallText>
                {`by ${entry[1].answerer_name}, ${entry[1].date}`}
                &nbsp;&nbsp; | &nbsp;&nbsp;
                {' Helpful? '}
                &nbsp;&nbsp;
              </SmallText>
              <SmallUnderlinedText
                onClick={() => {
                  markAnswerHelpful(entry[0]);
                }}
              >
                Yes
              </SmallUnderlinedText>
              <SmallText>
                &nbsp;
                {`(${entry[1].helpfulness})`}
                &nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
              </SmallText>
              <SmallUnderlinedText onClick={() => {
                reportAnswer(entry[0]);
              }}
              >
                Report
              </SmallUnderlinedText>
            </AnswerRow>
          </AnswerColumn>
        ))}
      </div>
    </div>
  );
}

export default Question;
