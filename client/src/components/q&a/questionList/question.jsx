import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import ThemeContext from '../../../ThemeContext';
import { GITHUB_API_KEY } from '../../../../../config';

function Question({
  question, handleAddAnswerClick, markQuestionHelpful,
  reportQuestion, markAnswerHelpful, reportAnswer,
}) {
  const [answers, setAnswers] = useState([]);
  const [showMoreAnswers, setShowMoreAnswers] = useState(false);
  const [colorScheme] = useContext(ThemeContext);

  const refresh = () => {
    console.log('fetching answers');
    Axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${question.question_id}/answers`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      params: {
        page: 1,
        count: 10000,
      },
    })
      .then((res) => {
        console.log(res.data);
        setAnswers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(refresh, [question]);

  const QuestionContainer = styled.div`
  background-color: ${colorScheme.foreground};
  border-radius: 9px;
  margin-top: 9px;
  margin-bottom: 9px;
  `;

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

  return (
    <QuestionContainer>
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
        {answers.slice(0, !showMoreAnswers ? 4 : undefined).map((answer) => (
          <AnswerColumn>
            <LargeText>{`A: ${answer.body}`}</LargeText>
            {answer.photos.length > 0 ? (
              <ImageRow>
                {answer.photos.map(({ url }) => (<Image src={url} />))}
              </ImageRow>
            ) : null}
            <AnswerRow>
              <SmallText>
                {`by ${answer.answerer_name}, ${answer.date}`}
                &nbsp;&nbsp; | &nbsp;&nbsp;
                {' Helpful? '}
                &nbsp;&nbsp;
              </SmallText>
              <SmallUnderlinedText
                onClick={() => {
                  markAnswerHelpful(answer.answer_id);
                }}
              >
                Yes
              </SmallUnderlinedText>
              <SmallText>
                &nbsp;
                {`(${answer.helpfulness})`}
                &nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
              </SmallText>
              <SmallUnderlinedText onClick={() => {
                reportAnswer(answer.answer_id);
              }}
              >
                Report
              </SmallUnderlinedText>
            </AnswerRow>
          </AnswerColumn>
        ))}
        <button type="button" onClick={() => { setShowMoreAnswers(!showMoreAnswers); }}>{!showMoreAnswers ? 'Show More Answers' : 'Show Less Answers'}</button>
      </div>
    </QuestionContainer>
  );
}

export default Question;
