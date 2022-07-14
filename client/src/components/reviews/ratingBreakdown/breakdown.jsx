import React from 'react';
import styled from 'styled-components';
import { AiFillCaretDown } from 'react-icons/ai';

function Breakdown({ characteristics }) {
  return (
    <BreakdownWrapper>
      {Object.keys(characteristics).map((item) => {
        return <CharacterBar wide={characteristics[item].value} quality={item} key={characteristics[item].id} />;
      })}
    </BreakdownWrapper>
  );
}

function CharacterBar({ wide, quality }) {
  const qualityObject = {
    Size: ['Too Small', 'Perfect', 'Too Big'],
    Width: ['Too Narrow', 'Perfect', 'Too Wide'],
    Comfort: ['Poor', 'Average', 'Perfect'],
    Quality: ['Poor', 'Average', 'Great'],
    Length: ['Too Short', 'Perfect', 'Too Long'],
    Fit: ['Poor', 'Average', 'Perfect'],
  };

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
    width: '100%',
  };
  const PointerStyle = {
    display: 'block',
    marginLeft: `${(wide / 5) * 100}%`,
    marginRight: 'auto',
    marginBottom: '-6px',
  };

  return (
    <div>
      <h5>Name</h5>
      <AiFillCaretDown style={PointerStyle} />
      <div style={Wrapper}>
        <div style={Quadrant} />
        <div style={Quadrant} />
        <div style={Quadrant} />
        <div style={Quadrant} />
        <div style={Quadrant} />
      </div>
      <div>
        <p>{qualityObject[quality][0]}</p>
        <p>{qualityObject[quality][1]}</p>
        <p>{qualityObject[quality][2]}</p>
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
