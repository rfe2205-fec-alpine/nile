import React from 'react';
import styled from 'styled-components';
import Facebook from './facebook.jsx';
import Twitter from './twitter.jsx';
import Pinterest from './pinterest.jsx';

function SocialMedia({ selectedPhoto }) {
  return (
    <SocialMediaBar>
      <Facebook />
      <Twitter />
      <Pinterest selectedPhoto={selectedPhoto} />
    </SocialMediaBar>
  );
}

const SocialMediaBar = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 40px;
  height: 25px;
  width: 100%;
`;

export default SocialMedia;
