import React from 'react';
import styled from 'styled-components';
import pinterestLogo from '../../../img/pinterest.jpg';

function Pinterest() {
  return (
    <PinterestIcon />
  );
}

const PinterestIcon = styled.div`
  background-image: url("${pinterestLogo}");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
`;

export default Pinterest;
