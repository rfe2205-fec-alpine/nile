import React from 'react';
import styled from 'styled-components';
import twitterLogo from '../../../img/twitter.jpg';

function Twitter() {
  return (
    <TwitterIcon />
  );
}

const TwitterIcon = styled.div`
  background-image: url("${twitterLogo}");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
`;

export default Twitter;
