import React from 'react';
import styled from 'styled-components';

function CheckMark({ size }) {
  // console.log('size of checkmark');
  // console.log(size);
  return (
    <CheckMarkContainer size={size} />
  );
}

const checkMarkUrl = 'https://static.vecteezy.com/system/resources/previews/006/059/254/non_2x/black-check-mark-icon-tick-symbol-in-black-color-illustration-for-web-mobile-and-concept-design-free-vector.jpg';

const CheckMarkContainer = styled.div`
  position: absolute;
  margin-top: 14px;
  margin-left: 50px;
  z-index: 10;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border: 1px solid black;
  border-radius: 100%;
  background-image: url("${checkMarkUrl}");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

CheckMarkContainer.defaultProps = {
  size: 15,
};

export default CheckMark;
