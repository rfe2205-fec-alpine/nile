import React from 'react';
import styled from 'styled-components';
import { AiOutlineUp } from 'react-icons/ai';
import ThemeContext from '../../../../../ThemeContext.jsx';

function PreviousButton({ setSelection }) {
  const [colorScheme] = React.useContext(ThemeContext);
  return (
    <PreviousButtonContainer>
      <ActualPreviousButton onClick={setSelection} colorScheme={colorScheme}>
        <AiOutlineUp color={colorScheme.foreground} />
      </ActualPreviousButton>
    </PreviousButtonContainer>
  );
}

const ActualPreviousButton = styled.div`
  text-align: center;
  color: ${(props) => props.colorScheme.foreground};
  font-size: 24px;
  font-weight: bolder;
`;

const PreviousButtonContainer = styled.div`
  &:hover ${ActualPreviousButton} {
    cursor: default;
  }
`;

export default PreviousButton;
