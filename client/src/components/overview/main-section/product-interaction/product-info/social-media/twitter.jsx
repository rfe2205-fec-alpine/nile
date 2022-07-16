import React from 'react';
import styled from 'styled-components';
import { AiOutlineTwitter } from 'react-icons/ai';

function Twitter() {
  return (
    <TwitterIcon>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">
        <AiOutlineTwitter size={35} color="#1DA1F2" />
      </a>
    </TwitterIcon>
  );
}

const TwitterIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Twitter;

//       <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />