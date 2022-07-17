import Axios from "axios";
import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";
import SearchQuestions from "./searchQuestions/searchQuestions.jsx";
import QuestionList from "./questionList/questionList.jsx";
import ProductContext from "../../ProductContext.jsx";
import { GITHUB_API_KEY } from "../../../../config.js";

function QAndA() {
  const [productID] = useContext(ProductContext);
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    Axios({
      method: "get",
      url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions",
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

  return (
    <div>
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchQuestions />
      <QuestionList questions={questions} />
    </div>
  );
}

export default QAndA;
