import React from 'react';
import styled from 'styled-components';
import { AiFillCaretDown } from 'react-icons/ai';

function Breakdown() {
  return (
    <BreakdownWrapper>
      <CharacterBar />
      <CharacterBar />
    </BreakdownWrapper>
  );
}

function CharacterBar() {
  const Wrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  };
  const Quadrant = {
    backgroundColor: 'Gainsboro',
    height: '5px',
    marginRight: '5px',
    width: '80%',
  };
  const img = {
    backgroundPosition: '50%',
  };
  return (
    <div>
      <h5>Name</h5>
      <div style={Wrapper}>
        <AiFillCaretDown />
        <div style={Quadrant} />
        <div style={Quadrant} />
        <div style={Quadrant} />
        <div style={Quadrant} />
      </div>
    </div>
  );
}

const BreakdownWrapper = styled.div`
border: 1px solid red;
padding 0px;
margin 5px;
`;

export default Breakdown;
