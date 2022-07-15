import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

function ReviewTile({ reviewData }) {
  const topDiv = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  };
  const usernameAndDateDiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    width: '100%',
  };

  return (
    <ReviewTileWrapper>
      <div style={topDiv}>
        <StarRating rating={reviewData.rating} />
        <div style={usernameAndDateDiv}>
          <User username={reviewData.reviewer_name} />
          <Date reviewDate={reviewData.date} />
        </div>
      </div>
      <Summary title={reviewData.summary} />
      <ReviewBody body={reviewData.body} />
      {reviewData.recommend ? <ReviewRecommend /> : <> </>}
      {reviewData.response ? <Response response={reviewData.response} /> : <> </>}
      <div>
        <Helpful help={reviewData.helpfulness} />
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

function Date({ reviewDate }) {
  return (
    <p>
      {reviewDate}
    </p>
  );
}

function Summary({ title }) {
  return (
    <p>
      {title}
    </p>
  );
}

function ReviewRecommend() {
  const recommendDiv = {
    background: 'LightGray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    height: '40px',
    width: '25%',
  };

  return (
    <div style={recommendDiv}>
      <AiOutlineCheck />
      <p>Recommended</p>
    </div>
  );
}

function ReviewBody(props) {

}

function Helpful(props) {

}

function Response(props) {

}

const ReviewTileWrapper = styled.div`
  border-bottom: 1px solid black;
  padding 20px;
  margin 5px;
`;

export default ReviewTile;
