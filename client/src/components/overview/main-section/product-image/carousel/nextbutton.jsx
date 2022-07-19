import React from 'react';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import ThemeContext from '../../../../../ThemeContext.jsx';

function NextButton({ setSelection }) {
  const [colorScheme] = React.useContext(ThemeContext);
  return (
    <NextButtonContainer>
      <ActualNextButton onClick={setSelection} colorScheme={colorScheme}>
        <AiOutlineDown color={colorScheme.foreground} />
      </ActualNextButton>
    </NextButtonContainer>
  );
}

const ActualNextButton = styled.div`
  text-align: center;
  color: ${(props) => props.colorScheme.foreground};
  font-size: 24px;
  font-weight: bolder;
`;

const NextButtonContainer = styled.div`
  &:hover ${ActualNextButton} {
    cursor: default;
  }
`;

export default NextButton;
