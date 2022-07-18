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
  const [apiProductData, setApiProductData] = useState(null);

  useEffect(() => {
    getApiDataFromProductId(productID, setApiProductData);
    Axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      params: {
        product_id: productID,
        count: 2,
      },
    })
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productID]);

  if (!questions) {
    return null;
  }

  const handleAddQuestionClick = () => {
    setShowQuestionPopUp(true);
  };

  const handleAddAnswerClick = () => {
    setShowAnswerPopUp(true);
  };

  const handleMoreQuestionsClick = () => {
  };

  const closeQuestionPopUp = () => {
    setShowQuestionPopUp(false);
  };

  const closeAnswerPopUp = () => {
    setShowAnswerPopUp(false);
  };
  return (
    <div>
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchQuestions />
      <QuestionList
        questions={questions}
        handleAddAnswerClick={handleAddAnswerClick}
      />
      <Buttons
        handleAddQuestionClick={handleAddQuestionClick}
        handleMoreQuestionsClick={handleMoreQuestionsClick}
      />
      {showQuestionPopUp ? (
        <AddQuestion
          closeQuestionPopUp={closeQuestionPopUp}
          productName={apiProductData[0].name}
          productId={productID}
        />
      ) : null}
      {showAnswerPopUp ? (<AddAnswer closeAnswerPopUp={closeAnswerPopUp} />) : null}
    </div>
  );
}

export default QAndA;
