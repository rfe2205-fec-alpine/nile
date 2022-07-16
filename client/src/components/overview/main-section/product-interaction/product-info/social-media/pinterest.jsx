import React from 'react';
import styled from 'styled-components';
import { BsPinterest } from 'react-icons/bs';
import pinterestLogo from '../../../../img/pinterest.jpg';

function Pinterest() {
  return (
    <PinterestIcon>
      <BsPinterest size={25} color="#E60023" />
    </PinterestIcon>
  );
}

const PinterestIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export default Pinterest;
