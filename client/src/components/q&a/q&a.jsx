import Axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import SearchQuestions from './searchQuestions/searchQuestions';
import QuestionList from './questionList/questionList';
import ProductContext from '../../ProductContext';
import Buttons from './buttons/buttons';
import AddQuestion from './addQuestion/addQuestion';
import AddAnswer from './addAnswer/addAnswer';
import getApiDataFromProductId from '../overview/apidata';
import { GITHUB_API_KEY } from '../../../../config';

function QAndA() {
  const [productID] = useContext(ProductContext);
  const [questions, setQuestions] = useState(null);
  const [showQuestionPopUp, setShowQuestionPopUp] = useState(false);
  const [showAnswerPopUp, setShowAnswerPopUp] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [apiProductData, setApiProductData] = useState(null);

  const refresh = () => {
    getApiDataFromProductId(productID, setApiProductData);
    Axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      params: {
        product_id: productID,
        count: 5,
      },
    })
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(refresh, [productID]);

  if (!questions) {
    return null;
  }

  const handleAddQuestionClick = () => {
    setShowQuestionPopUp(true);
  };

  const handleAddAnswerClick = (questionId) => {
    setShowAnswerPopUp(questionId);
  };

  const handleMoreQuestionsClick = () => {
  };

  const closeQuestionPopUp = () => {
    setShowQuestionPopUp(false);
  };

  const closeAnswerPopUp = () => {
    setShowAnswerPopUp(false);
  };

  const markQuestionHelpful = (questionId) => {
    Axios({
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionId}/helpful`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    }).then((res) => {
      console.log('Mark question helpful server request sent successfully: ', res);
      refresh();
    }).catch((err) => {
      console.log(err);
    });
  };

  const reportQuestion = (questionId) => {
    Axios({
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionId}/report`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    }).then((res) => {
      console.log('Report question server request sent successfully: ', res);
      refresh();
    }).catch((err) => {
      console.log(err);
    });
  };

  const markAnswerHelpful = (answerId) => {
    Axios({
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answerId}/helpful`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    }).then((res) => {
      console.log('Mark answer helpful request sent successfully: ', res);
      refresh();
    }).catch((err) => {
      console.log(err);
    });
  };

  const reportAnswer = (answerId) => {
    Axios({
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${answerId}/report`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    }).then((res) => {
      console.log('Report answer server request sent successfully: ', res);
      refresh();
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchQuestions
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <QuestionList
        questions={questions}
        handleAddAnswerClick={handleAddAnswerClick}
        markQuestionHelpful={markQuestionHelpful}
        reportQuestion={reportQuestion}
        markAnswerHelpful={markAnswerHelpful}
        reportAnswer={reportAnswer}
        searchString={searchString}
        refresh={refresh}
      />
      <Buttons
        handleAddQuestionClick={handleAddQuestionClick}
        handleMoreQuestionsClick={handleMoreQuestionsClick}
        refresh={refresh}
      />
      {showQuestionPopUp ? (
        <AddQuestion
          closeQuestionPopUp={closeQuestionPopUp}
          productName={apiProductData[0].name}
          productId={productID}
          setShowQuestionPopUp={setShowQuestionPopUp}
          refresh={refresh}
        />
      ) : null}
      {showAnswerPopUp ? (
        <AddAnswer
          closeAnswerPopUp={closeAnswerPopUp}
          questionId={showAnswerPopUp}
          setShowAnswerPopUp={setShowAnswerPopUp}
          refresh={refresh}
        />
      ) : null}
    </div>
  );
}

export default QAndA;
