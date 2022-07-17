import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineTwitter } from 'react-icons/ai';

function Twitter({ selectedPhoto, selectedStyle, productName }) {
  const styleName = selectedStyle.name.replace('&', 'and');

  const [color, setColor] = useState('#1DA1F2');

  const tweetText = `Look what I just found!
  ${styleName} ${productName} you can find here on Nile`;
  const baseUrl = 'http://localhost:3000';
  const tweetMessage = `${tweetText} -> ${baseUrl}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetMessage}`;

  return (
    <TwitterIcon onMouseEnter={() => setColor('black')} onMouseLeave={() => setColor('#1DA1F2')}>
      <a href={tweetUrl} className="twitter-share-button" data-show-count="false" target="_blank" rel="noreferrer">
        <AiOutlineTwitter size={35} color={color} />
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