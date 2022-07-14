import React from 'react';
import styled from 'styled-components';

const listOfSizes = ['Small', 'Medium', 'Large'];
let selectedSize = 'Select Size';

function SelectSize({ container, sizeSelected, setSizeSelection }) {
  const SelectSizeContainer = container;

  console.log('size selected is', sizeSelected);
  function changeSizeSelection(event) {
    selectedSize = event.target.value;
    setSizeSelection(event.target.value);
  }

  let options = listOfSizes.map(function(size) {
    // console.log('size is', size);
    // console.log('selected is', sizeSelected);
    if (size !== sizeSelected) {
      return <option value={size}>{size}</option>;
    }
  });

  return (
      <SelectSizeMenu value={"SELECT SIZE"} onChange={changeSizeSelection}>
        <option selected value={sizeSelected}>{sizeSelected}</option>
        {options}
      </SelectSizeMenu>
  );
}

const SelectSizeMenu = styled.select.attrs((props) => ({
  value: props.value,
  onChange: props.onChange,
}))`
  display: flex;
  padding: 20px;
  align-items: center;
  border: 1px solid black;
  background-color: #E4E4E4;
  margin: 25px;
  font-size: 18px;
`;

const SizeOption = styled.option.attrs((props) => ({

}))`
  color: green;
`;

export default SelectSize;
