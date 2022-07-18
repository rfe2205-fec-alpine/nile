import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-modal';
import getApiDataFromProductId from '../../overview/apidata';

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

function AddAnswer({ closeAnswerPopUp, productName }) {
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
        <textarea style={{ width: '100%' }} placeholder="Enter your question here" />
      </div>
      <div>
        <h3>What is your nickname?</h3>
      </div>
      <div>
        <input type="text" style={{ width: '100%' }} placeholder="Enter you nickname here" />
      </div>
      <div>
        <h3>Your email address:</h3>
      </div>
      <div>
        <input type="text" style={{ width: '100%' }} placeholder="Enter your email address here" />
      </div>
      <div>
        <p>
          <button type="button">Submit Question</button>
        </p>
      </div>
    </Modal>
  );
}

export default AddAnswer;
