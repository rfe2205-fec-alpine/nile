import React, { useState } from 'react';
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

function AddAnswer({
  closeAnswerPopUp, questionId,
}) {
  console.log(questionId);
  const [answerBody, setAnswerBody] = useState('');
  const [answerName, setAnswerName] = useState('');
  const [answerEmail, setAnswerEmail] = useState('');

  function onClickSubmit() {
    Axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionId}/answers`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      data: {
        body: answerBody,
        name: answerName,
        email: answerEmail,
      },
    }).then((res) => {
      console.log('Add answer server request sent successfully: ', res);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <Modal
      isOpen
      onRequestClose={closeAnswerPopUp}
      style={customStyles}
      contentLabel="Add an Answer"
    >
      <div>
        <h2>Add your answer</h2>
      </div>
      <div>
        <h3>Your Answer:</h3>
      </div>
      <div>
        <textarea style={{ width: '100%' }} placeholder="Enter your answer here" onChange={(e) => { setAnswerBody(e.currentTarget.value); }} />
      </div>
      <div>
        <h3>What is your nickname?</h3>
      </div>
      <div>
        <input type="text" style={{ width: '100%' }} placeholder="Enter you nickname here" onChange={(e) => { setAnswerName(e.currentTarget.value); }} />
      </div>
      <div>
        <h3>Your email address:</h3>
      </div>
      <div>
        <input type="text" style={{ width: '100%' }} placeholder="Enter your email address here" onChange={(e) => { setAnswerEmail(e.currentTarget.value); }} />
      </div>
      <div>
        <p>
          <button type="button" onClick={onClickSubmit}>Submit Answer</button>
        </p>
      </div>
    </Modal>
  );
}

export default AddAnswer;
