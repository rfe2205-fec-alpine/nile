import React, { useState, useEffect } from 'react';
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
  closeAnswerPopUp, questionId, setShowAnswerPopUp, refresh,
}) {
  const [answerBody, setAnswerBody] = useState('');
  const [answerName, setAnswerName] = useState('');
  const [answerEmail, setAnswerEmail] = useState('');
  const [images, addImage] = useState([]);
  const [finalImages, addFinalImages] = useState([]);

  function onClickSubmit() {
    return Axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionId}/answers`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      data: {
        body: answerBody,
        name: answerName,
        email: answerEmail,
        photos: finalImages,
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
        <Images
          images={images}
          addImage={addImage}
          finalImages={finalImages}
          addFinalImages={addFinalImages}
        />
      </div>
      <div>
        <p>
          <button
            type="button"
            onClick={() => {
              onClickSubmit().then(() => {
                setShowAnswerPopUp(false);
                refresh();
              });
            }}
          >
            Submit Answer

          </button>
        </p>
      </div>
    </Modal>
  );
}

function Images({
  images, addImage, finalImages, addFinalImages,
}) {
  const [max, changeMax] = useState(false);

  useEffect(() => {
    if (finalImages.length >= 5) {
      changeMax(true);
    }
  }, [finalImages]);

  const cloudName = 'alpinefec';

  function handleClick(e) {
    const img = URL.createObjectURL(e.target.files[0]);
    const reader = new FileReader();

    const toBase64 = (file) => new Promise((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    toBase64(e.target.files[0]).then((converted) => {
      Axios({
        method: 'post',
        url: `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        data: {
          file: converted,
          upload_preset: 'lfcpuaaw',
        },
      }).then((res) => {
        addFinalImages([...finalImages, res.data.secure_url]);
        addImage([...images, img]);
      }).catch((err) => {
        console.log('There was an error with Axios Request: ', err);
      });
    })
      .catch((err) => { console.log('There was an error uploading file to cloudinary: ', err); });
  }

  if (images) {
    return (
      <>
        { !max ? <input type="file" onChange={(e) => { handleClick(e); }} /> : <> </> }
        {images.map((imageUrl) => <img src={imageUrl} alt="test" width="auto" height="60px" />)}
      </>
    );
  }

  return (<input type="file" onChange={(e) => { handleClick(e); }} />);
}

export default AddAnswer;
