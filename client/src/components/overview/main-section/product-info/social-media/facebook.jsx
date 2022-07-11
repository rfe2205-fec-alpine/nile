import React from 'react';
import styled from 'styled-components';
import facebookLogo from '../../../img/facebook.jpg';

function Facebook() {
  return (
    <FacebookIcon />
  );
}

const FacebookIcon = styled.div`
  background-image: url("${facebookLogo}");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
`;

export default Facebook;
