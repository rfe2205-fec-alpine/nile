import React from 'react';
import styled from 'styled-components';

function Comparison({ product, defaultData, show, setShow}) {
  const combineFeatures = product.features.concat(defaultData.features);

  if (!show) {
    return null;
  }

  return (
  <div onClick={() => { setShow(!show)}}>
    <Model show={show}>
      <table>
        <thead>
          <tr>
            <th>Comparison</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>{defaultData.name}</th>
            <th>Features</th>
            <th>{product.name}</th>
          </tr>
        </thead>
        <tbody>
        {combineFeatures.map((feature) => {
        return <tr>
            <th>{defaultData.features.some((each) => {return each === feature} ) ? '✓' : ''}</th>
            <th>{feature.feature}{feature.value ? `: ${feature.value}` : ''}</th>
            <th>{product.features.some((each) => {return each === feature} ) ? '✓' : ''}</th>
            </tr>
          })}
        </tbody>
      </table>
    </Model>
  </div>
  );
}

export default Comparison;

const Model = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background: grey;
  position: absolute;
  left: 50;
  top: 120%;
  padding: 0.25rem;
  width: 450px;
  height: 150px;
  overflow-y: scroll;
`;
