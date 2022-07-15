import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ProductContext from '../../../ProductContext.jsx';

function AddReviewsButton() {
  const [productID] = useContext(ProductContext);
  const [modalStatus, changeModalStatus] = useState(false);

  const modalButton = {
    background: 'green',
    width: '20%',
    borderRadius: '5px',
    justifyContent: 'left',
  };

  if (modalStatus) {
    return (
      <ModalWrapper>
        <FormWrapper>
          <ExitButton toggleStatus={changeModalStatus} />
          <AddReviewForm />
        </FormWrapper>
      </ModalWrapper>
    );
  }
  return (
    <AddReview toggleStatus={changeModalStatus} />
  );
}

function AddReview({ toggleStatus }) {
  return (
    <button type="submit" onClick={() => { toggleStatus(true); }}>Add a Review</button>
  );
}

function ExitButton({ toggleStatus }) {
  return (
    <button type="submit" onClick={() => { toggleStatus(false); }}>X</button>
  );
}

function AddReviewForm(props) {
  const [productID] = useContext(ProductContext);
  const [formState, setFormState] = useState({
    product_id: productID,
    overallRating: 1,
    summary: '',
    body: '',
    doYouRecommend: false,
    name: '',
    email: '',
    photos: '',
    characteristics: { },
  });

  const formStyle = {
    width: '50%',
    height: 'auto',
  };

  return (
    <>
      <h4>Add a New Review</h4>
      <h6>Overall Rating</h6>
      <input style={formStyle} value="test1" />
      <h6>Do You Recommend this Product?</h6>
      <input style={formStyle} value="test2" />
      <h6>Characteristics</h6>
      <input style={formStyle} value="test2" />
      <h6>Review Title</h6>
      <input style={formStyle} value="test2" />
      <h6>Body</h6>
      <input style={formStyle} value="test2" />
      <h6>Upload Your Photos</h6>
      <input style={formStyle} value="test2" />
      <h6>What is Your Nickname?</h6>
      <input style={formStyle} value="test2" />
      <h6>Your Email</h6>
      <input style={formStyle} value="test2" />
      <h6>Submit Your Review</h6>
      <button type="submit">Submit</button>
    </>
  );
}

const ModalWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width 100%;
height: 100vh;
background-color: black;
opacity: 0.9;
display: flex;
align-items: center,
justify-content: center;
`;

const FormWrapper = styled.div`
width 70%;
overflow-y: auto;
height: 100%;
background-color: white;
display: flex-box;
opacity: 1.0;
align-items: center,
justify-content: center;
`;

export default AddReviewsButton;
