import React, { useState } from 'react';
import styled from 'styled-components';
import { RiPinterestFill, RiPinterestLine } from 'react-icons/ri';

function Pinterest({ selectedPhoto }) {
  const [color, setColor] = useState('#E60023');

  const imageUrl = selectedPhoto.thumbnail_url;
  // console.log('selected photo for pinterest is', imageUrl);
  const baseUrl = 'https://www.pinterest.com/pin/create/button/';
  const mediaUrl = `?media=${imageUrl}`;
  // const descriptionUrl = '&amp;description="Look What I just found!"';
  // const websiteUrl = '&amp;url=http://localhost:3000/';

  const fullUrl = baseUrl + mediaUrl;

  return (
    <PinterestIcon onMouseEnter={() => setColor('black')} onMouseLeave={() => setColor('#E60023')}>
      <a data-pin-do="buttonBookmark" href={fullUrl} target="_blank" rel="noreferrer">
        <RiPinterestLine size={30} color={color} />
      </a>
    </PinterestIcon>
  );
}

const PinterestIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;

export default Pinterest;
