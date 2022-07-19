import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-modal';
import Axios from 'axios';
import { GITHUB_API_KEY } from '../../../../../config';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function AddQuestion({ closeQuestionPopUp, productName, productId }) {
  const [questionBody, setQuestionBody] = useState('');
  const [questionName, setQuestionName] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');

  function onClickSubmit() {
    Axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      data: {
        body: questionBody,
        name: questionName,
        email: questionEmail,
        product_id: parseInt(productId),
      },
    }).then((res) => {
      console.log('Add Question server request sent successfully: ', res);
    }).catch((err) => {
      console.log(err);
    });
  }

  console.log(questionBody, questionName, questionEmail, productId);
  return (
    <Modal
      isOpen
      onRequestClose={closeQuestionPopUp}
      style={customStyles}
      contentLabel="Add a Question"
    >
      <div>
        <h2>{`Ask your question about ${productName}`}</h2>
      </div>
      <div>
        <h3>Your Question:</h3>
      </div>
      <div>
        <textarea style={{ width: '100%' }} value={questionBody} placeholder="Enter your question here" onChange={(e) => { setQuestionBody(e.currentTarget.value); }} />
      </div>
      <div>
        <h3>What is your nickname?</h3>
      </div>
      <div>
        <input type="text" style={{ width: '100%' }} value={questionName} placeholder="Enter you nickname here" onChange={(e) => { setQuestionName(e.currentTarget.value); }} />
      </div>
      <div>
        <h3>Your email address:</h3>
      </div>
      <div>
        <input type="text" style={{ width: '100%' }} value={questionEmail} placeholder="Enter your email address here" onChange={(e) => { setQuestionEmail(e.currentTarget.value); }} />
      </div>
      <div>
        <p>
          <button type="button" onClick={onClickSubmit}>Submit Question</button>
        </p>
      </div>
    </Modal>
  );
}

export default AddQuestion;
