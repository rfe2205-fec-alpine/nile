import React from 'react';
import styled from 'styled-components';

function AnnouncementBar({ colorScheme }) {
  return <Announcement colorScheme={colorScheme}>SITE-WIDE ANNOUNCEMENT MESSAGE! SALE/DISCOUNT <strong>OFFER</strong> - <u>NEW PRODUCT HIGHLIGHT</u></Announcement>
}

const Announcement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.colorScheme.foreground};
  height: 50px;
`;
// color: #C8C3C2;
export default AnnouncementBar;
