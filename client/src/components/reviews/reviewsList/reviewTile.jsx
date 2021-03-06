import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import Axios from 'axios';
// import moment from 'moment';
import QuarterStars from '../../../starRatingFunction.jsx';
import { GITHUB_API_KEY } from '../../../../../config.js';
import ThemeContext from '../../../ThemeContext.jsx';

function ReviewTile({ reviewData }) {
  const [colorScheme] = useContext(ThemeContext);
  console.log('COLOR SHCEME', colorScheme);
  const topDiv = {
    display: 'flex',
    alignItems: 'center',
    //width: '100%',
  };
  const usernameAndDateDiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    //width: '100%',
  };
  const imageStyle = {
    margin: '5px',
    boxShadow: '3px 3px 15px lightgray',
  };
  return (
    <ReviewTileWrapper>
      <div style={topDiv}>
        <QuarterStars rating={reviewData.rating} />
        <div style={usernameAndDateDiv}>
          <User username={reviewData.reviewer_name} />
          <Day reviewDate={reviewData.date} />
        </div>
      </div>
      <Summary title={reviewData.summary} />
      <ReviewBody body={reviewData.body} />
      {reviewData.recommend ? <ReviewRecommend colorScheme={colorScheme} /> : <> </>}
      {reviewData.response ? <Response response={reviewData.response} /> : <> </>}
      {reviewData.photos ? reviewData.photos.map((photo) => <img style={imageStyle} height="90px" width="auto" src={photo.url} alt="review Photos" />) : <> </>}
      <div>
        <Helpful help={reviewData.helpfulness} id={reviewData.review_id} />
        <Report id={reviewData.review_id} />
      </div>
    </ReviewTileWrapper>
  );
}

function StarRating({ rating }) {
  return (
    <p>
      Star Rating: {rating}
    </p>
  );
}

function User({ username }) {
  return (
    <p>
      {username}
    </p>
  );
}

function Day({ reviewDate }) {
  return (
    <p>
      {`${reviewDate[5]}${reviewDate[6]}/${reviewDate[8]}${reviewDate[9]}/${reviewDate[0]}${reviewDate[1]}${reviewDate[2]}${reviewDate[3]}`}
    </p>
  );
}

function Summary({ title }) {
  return (
    <h7>
      <b>{title}</b>
    </h7>
  );
}

function ReviewRecommend({ colorScheme }) {
  const recommendDiv = {
    backgroundColor: colorScheme.foreground,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    height: '40px',
    margin: '5px',
    width: '20%',
    padding: '6px',
  };

  return (
    <div style={recommendDiv}>
      <AiOutlineCheck />
      <p>Recommended</p>
    </div>
  );
}

function ReviewBody({ body }) {
  return (
    <p>{body}</p>
  );
}

function Helpful({ help, id }) {
  const [clicked, toggleClicked] = useState(false);

  const helpfulDiv = {
    display: 'flex',
  };

  function sendHelpfulServerReq() {
    Axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${id}/helpful`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      data: { review_id: parseInt(id, 10) },
    }).then((res) => {
      console.log('Helpful Request was accepted: ', res);
      toggleClicked(true);
    }).catch((err) => {
      console.log('There was an error sending helpful request to server: ', err);
    });
  }

  return (
    <div style={helpfulDiv}>
      <p>Helpful?</p>
      { !clicked ? (
        <p onClick={(e) => { sendHelpfulServerReq(); }}>Yes</p>
      ) : <p>Yes</p>}
      <p>{`(${help})`}</p>
    </div>
  );
}

function Report({ id }) {
  function sendReportRequest() {
    Axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${id}/report`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      data: { review_id: parseInt(id, 10) },
    }).then((res) => {
      console.log('Report Request was accepted: ', res);
    }).catch((err) => {
      console.log('There was an error sending report request to server: ', err);
    });
  }

  return (
    <div>
      <p onClick={() => { sendReportRequest(); }}>Report</p>
    </div>
  );
}

function Response({ response }) {
  const responseDiv = {
    background: 'LightGray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    height: '40px',
    margin: '5px',
    width: '50%',
    padding: '6px',
  };
  return (
    <div style={responseDiv}>
      <h8><b>Response from seller:</b></h8>
      <p>{response}</p>
    </div>
  );
}

const ReviewTileWrapper = styled.div`
  border-bottom: 1px solid black;
  padding 20px;
  margin 5px;
`;

export default ReviewTile;
