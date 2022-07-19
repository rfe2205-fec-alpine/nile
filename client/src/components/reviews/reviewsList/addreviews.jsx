import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import ProductContext from '../../../ProductContext.jsx';
import ReviewQualitiesContext from '../reviewQualities.jsx';
import { GITHUB_API_KEY } from '../../../../../config.js';

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
          <AddReviewForm toggleStatus={changeModalStatus} />
        </FormWrapper>
      </ModalWrapper>
    );
  }
  return (
    <AddReview toggleStatus={changeModalStatus} />
  );
}

function AddReview({ toggleStatus }) {
  const buttonStyle = {
    padding: '12px',
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid black',
    margin: '0px 15px 15px 15px',
  };
  return (
    <button style={buttonStyle} type="submit" onClick={() => { toggleStatus(true); }}>Add a Review</button>
  );
}

function ExitButton({ toggleStatus }) {
  return (
    <button type="submit" onClick={() => { toggleStatus(false); }}>X</button>
  );
}

function AddReviewForm({ toggleStatus }) {
  const [productID] = useContext(ProductContext);
  const [overallRating, changeOverallRating] = useState(1);
  const [summary, changeSummary] = useState('');
  const [body, changeBody] = useState('');
  const [recommend, changeRecommend] = useState(false);
  const [name, changeName] = useState('');
  const [email, changeEmail] = useState('');
  const [images, addImage] = useState([]);
  const [characteristics, changeCharacteristics] = useState({});
  const [finalImages, addFinalImages] = useState([]);

  const formStyle = {
    width: '50%',
    height: 'auto',
  };

  function sendDataToServer() {
    Axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      data: {
        product_id: parseInt(productID, 10),
        rating: parseInt(overallRating, 10),
        summary: summary,
        body: body,
        recommend: recommend,
        name: name,
        email: email,
        photos: finalImages,
        characteristics: characteristics,
      },
    }).then((res) => {
      console.log('Add Review server request sent successfully: ', res);
      toggleStatus(false);
    }).catch((err) => {
      console.log('There was an ERROR IN PUT request: ', err);
      toggleStatus(false);
    });
  }

  return (
    <>
      <h4>Add a New Review</h4>
      <InputTitle>Overall Rating</InputTitle>
      <DynamicStars changeOverallRating={changeOverallRating} />
      <InputTitle>Do You Recommend this Product?</InputTitle>
      <RecommendReview changeRecommend={changeRecommend} />
      <InputTitle>Characteristics</InputTitle>
      <Char characteristics={characteristics} changeCharacteristics={changeCharacteristics} />
      <InputTitle>Review Title</InputTitle>
      <ReviewTitle summary={summary} changeSummary={changeSummary} />
      <InputTitle>Body</InputTitle>
      <Body body={body} changeBody={changeBody} />
      <InputTitle>Upload Your Photos</InputTitle>
      <Images images={images} addImage={addImage} finalImages={finalImages} addFinalImages={addFinalImages} />
      <InputTitle>What is Your Nickname?</InputTitle>
      <NickName name={name} changeName={changeName} />
      <InputTitle>Your Email</InputTitle>
      <Email email={email} changeEmail={changeEmail} />
      <InputTitle>Submit Your Review</InputTitle>
      <button type="submit" onClick={() => { sendDataToServer(); }}>Submit</button>
    </>
  );
}

function Char({ characteristics, changeCharacteristics }) {
  const [reviewQualities, changeReviewQualities] = useContext(ReviewQualitiesContext);
  const charRef = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
  };

  const radioButtonStyle = {
    display: 'flex',
  };
  const radioItemStyle = {
    display: 'flex',
  };

  return (
    <div>
      {reviewQualities ? (
        Object.keys(reviewQualities).map((quality) => {
          const newKey = reviewQualities[quality].id.toString();
          return (
            <div style={radioButtonStyle}>
              <p>{quality}</p>
              <div style={radioItemStyle}>
                <input name={quality} type="radio" value={charRef[quality][0]} onClick={() => { changeCharacteristics({ ...characteristics, [newKey]: 1 }); }} />
                <p>{charRef[quality][0]}</p>
              </div>
              <div style={radioItemStyle}>
                <input name={quality} type="radio" value={charRef[quality][1]} onClick={() => { changeCharacteristics({ ...characteristics, [newKey]: 2 }); }} />
                <p>{charRef[quality][1]}</p>
              </div>
              <div style={radioItemStyle}>
                <input name={quality} type="radio" value={charRef[quality][2]} onClick={() => { changeCharacteristics({ ...characteristics, [newKey]: 3 }); }} />
                <p>{charRef[quality][2]}</p>
              </div>
              <div style={radioItemStyle}>
                <input name={quality} type="radio" value={charRef[quality][3]} onClick={() => { changeCharacteristics({ ...characteristics, [newKey]: 4 }); }} />
                <p>{charRef[quality][3]}</p>
              </div>
              <div style={radioItemStyle}>
                <input name={quality} type="radio" value={charRef[quality][4]} onClick={() => { changeCharacteristics({ ...characteristics, [newKey]: 5 }); }} />
                <p>{charRef[quality][4]}</p>
              </div>
            </div>
          );
        })
      ) : <>Loading...</>}
    </div>
  );
}

function Images({ images, addImage, finalImages, addFinalImages }) {
  useEffect(() => {
    console.log('UseEffect invoked...', images);
  }, [images]);

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
        <input type="file" onChange={(e) => { handleClick(e); }} />
        {images.map((imageUrl) => {
          return <img src={imageUrl} alt="test" width="auto" height="60px" />;
        })}
      </>
    )};

  return (<input type="file" onChange={(e) => { handleClick(e); }} />);
}

function Email({ email, changeEmail }) {
  return (
    <>
      <input placeholder="Example: jackson11@email.com" type="email" value={email} onChange={(e) => { changeEmail(e.target.value); }} />
      <p>For authentication reasons, you will not be emailed</p>
    </>
  );
}

function NickName({ name, changeName }) {
  return (
    <>
      <input placeholder="Example: jackson11!" value={name} onChange={(e) => { changeName(e.target.value); }} />
      <p>For privacy reasons, do not use your full name or email address</p>
    </>
  );
}

function Body({ body, changeBody }) {
  const [aboveFifty, toggleState] = useState(body.length > 50);

  useEffect(() => {
    if (body.length > 50) {
      toggleState(true);
    }
  }, [body]);

  return (
    <>
      <input placeholder="Why did you like the product or not?" value={body} onChange={(e) => { changeBody(e.target.value); }} />
      {aboveFifty
        ? (
          <p>
            Minimum Reached
          </p>
        )
        : (
          <p>
            Minimum required Characters left:
            { 50 - body.length }
          </p>
        )}
    </>
  );
}

function ReviewTitle({ summary, changeSummary }) {
  return (
    <input maxLength="60" placeholder="Best purchase ever!" value={summary} onChange={(e) => { changeSummary(e.target.value); }} />
  );
}

function OverallRating({ overallRating, changeOverallRating }) {
  return (
    <>
      <input value={overallRating} onChange={(e) => { changeOverallRating(e.target.value); }} />
      <DynamicStars overallRating={overallRating} changeOverallRating={changeOverallRating} />
    </>
  );
}

function RecommendReview({ changeRecommend }) {
  const radioButtons = {
    display: 'flex',
  };

  return (
    <div style={radioButtons}>
      <p>Yes</p>
      <input name="recommend" type="radio" value="yes" onClick={() => { changeRecommend(true); }} />
      <p>No</p>
      <input name="recommend" type="radio" value="no" onClick={() => { changeRecommend(false); }} />
    </div>
  );
}

function DynamicStars({ changeOverallRating }) {
  const [starsArr, addStarsArr] = useState([0, 0, 0, 0, 0]);
  const [oldArr, addOldArr] = useState([0, 0, 0, 0, 0]);
  const [title, changeTitle] = useState();
  const titleForStar = ['Poor', 'Fair', 'Average', 'Good', 'Great'];

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < oldArr.length; i++) {
      if (oldArr[i] === 1) {
        count++;
      }
    }
    changeOverallRating(count);
    changeTitle(titleForStar[count - 1]);
  }, [oldArr]);

  const SingleStarContainer = {
    height: '20px',
    width: '18px',
    display: 'inline-block',
  };
  const SingleStarOutline = {
    height: '20px',
    width: '18px',
  };
  const WrapperDiv = {
    width: '100%',
  };

  function handleStarsHover(e) {
    e.preventDefault();
    let rating = parseInt(e.target.getAttribute('value'), 10) + 1;
    let newArr = [];
    while (newArr.length < 5) {
      if (rating > 0) {
        rating -= 1;
        newArr.push(1);
      } else {
        newArr.push(0);
      }
    }
    addStarsArr(newArr);
  }

  function handleStarsClick(e) {
    e.preventDefault();
    addOldArr(starsArr);
  }

  function handleStarsLeave(e) {
    e.preventDefault();
    addStarsArr(oldArr);
  }

  return (
    <div style={WrapperDiv}>
      <p>{title}</p>
      {starsArr.map((item, i) => {
        const SingleStarFill = {
          position: 'relative',
          display: 'inline-block',
          height: '20px',
          width: `${parseInt(item * 18, 10)}px`,
          backgroundColor: 'black',
        };
        return (
          <div style={SingleStarContainer} value={i} key={i} onMouseOver={handleStarsHover} onClick={handleStarsClick} onMouseLeave={handleStarsLeave}>
            <div style={SingleStarFill}>
              <img alt="starImage" style={SingleStarOutline} src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" value={i} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const ModalWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width 100%;
height: 100vh;
background-color: black;
display: flex;
align-items: center,
justify-content: center;
`;

const InputTitle = styled.h6`
  color: blue;
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
