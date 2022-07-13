import React from 'react';
import styled from 'styled-components';

function CheckMark() {
  return (
    <CheckMarkContainer />
  );
}

const checkMarkUrl = 'https://static.vecteezy.com/system/resources/previews/006/059/254/non_2x/black-check-mark-icon-tick-symbol-in-black-color-illustration-for-web-mobile-and-concept-design-free-vector.jpg';

const size = '15px';

const CheckMarkContainer = styled.div`
  position: absolute;
  z-index: 10;
  height: ${size};
  width: ${size};
  border: 1px solid black;
  border-radius: 100%;
  background-image: url("${checkMarkUrl}");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default CheckMark;
