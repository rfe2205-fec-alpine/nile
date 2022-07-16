import React from 'react';
import styled from 'styled-components';
import { BsFacebook } from 'react-icons/bs';

const FB = window.FB;

function PostToFacebook() {
  console.log('posting to facebook in progress', FB);

  console.log('facebook initialized');
  FB.login((response) => {
    if (response.authResponse) {
      console.log('Welcome!  Fetching your information.... ');
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  });
}

function Facebook() {
  return (
    <FacebookIcon>
      <BsFacebook size={25} color="#4267B2" />
    </FacebookIcon>
  );
}

const FacebookIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export default Facebook;

// window.FB.ui({
//   method: 'feed',
//   link: 'http.cat/',
// }, (response) => {
//   if (response && !response.error_message) {
//     alert('Posting completed.');
//   } else {
//     alert('Error while posting.');
//   }
// });
