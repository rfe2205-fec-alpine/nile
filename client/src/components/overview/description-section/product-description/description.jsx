import React from 'react';
import styled from 'styled-components';

function Description() {
  return (
    <DescriptionContainer>
      According to all known laws of aviation, there is no way a bee should be able to fly.
      Its wings are too small to get its fat little body off the ground.
      The bee, of course, flies anyway because bees dont care
      what humans think is impossible.
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled.div`
  font-size: 16px;
`;

export default Description;
