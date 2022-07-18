import React from 'react';
import styled from 'styled-components';
import LightDarkButton from './lightdarkbutton.jsx';
import NewTheme from './newtheme.jsx';

function AnnouncementBar({ colorScheme }) {
  return (
    <Announcement colorScheme={colorScheme}>
      <span>SITE-WIDE ANNOUNCEMENT MESSAGE! SALE/DISCOUNT <strong>OFFER</strong> - <u>NEW PRODUCT HIGHLIGHT</u></span>
      <LightDarkButton />
      <NewTheme />
    </Announcement>
  );
}

const Announcement = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.colorScheme.foreground};
  height: 50px;
`;
// color: #C8C3C2;
export default AnnouncementBar;
