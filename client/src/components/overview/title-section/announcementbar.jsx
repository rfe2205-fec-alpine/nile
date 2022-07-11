import React from 'react';
import styled from 'styled-components';

function AnnouncementBar() {
  return <Announcement>SITE-WIDE ANNOUNCEMENT MESSAGE! SALE/DISCOUNT <strong>OFFER</strong> - <u>NEW PRODUCT HIGHLIGHT</u></Announcement>
}

const Announcement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C8C3C2;
  color: #5d6699;
  height: 50px;
`

export default AnnouncementBar;