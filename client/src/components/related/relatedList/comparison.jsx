import React from 'react';
import styled from 'styled-components';

function Comparison({
  product,
  defaultData,
  show,
  setShow,
  colorScheme,
}) {
  const combineFeatures = product.features.concat(defaultData.features);

  if (!show) {
    return null;
  }

  return (
    <div
      onClick={() => {
        setShow(!show);
      }}
    >
      <BackGroundModal colorScheme={colorScheme} show={show}>
        <Modal>
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
              {combineFeatures.map((feature) => (
                <tr>
                  <th>
                    {defaultData.features.some((each) => each === feature)
                      ? '✓'
                      : ''}
                  </th>
                  <th>
                    {feature.feature}
                    {feature.value ? `: ${feature.value}` : ''}
                  </th>
                  <th>
                    {product.features.some((each) => each === feature)
                      ? '✓'
                      : ''}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal>
      </BackGroundModal>
    </div>
  );
}

export default Comparison;

const BackGroundModal = styled.div`
  display: flex;
  background: ${(props) => props.colorScheme.foreground};
  color: ${(props) => props.colorScheme.textColorTitle};
  position: fixed;
  left: 40%;
  top: 40%;
  width: 450px;
  height: 150px;
  z-index: 30;
  overflow-y: scroll;
`;

const Modal = styled.div``;
