import React from 'react';
import styled from 'styled-components';

// const listOfSizes = ['Small', 'Medium', 'Large'];
// 'Small', 'Medium', 'Large'

function SelectSize({ container, sizeSelected, setSizeSelection, listOfSizes, stock }) {
  const SelectSizeContainer = container;
  // console.log('size selected is', sizeSelected);
  function changeSizeSelection(event) {
    let newSelectionId = event.target.value;
    let newSelectionSize = stock[newSelectionId];
    setSizeSelection([newSelectionId, newSelectionSize]);
  }

  let options = listOfSizes.map(function(item) {
    let size = item.size;
    // console.log('size is', size);
    // console.log('selected is', sizeSelected);
    let id = item.id;

    if (size !== sizeSelected.size) {
      return <option value={id}>{size}</option>;
    }
  });

  if (options.length === 0) {
    return (
      <SelectSizeContainer>OUT OF STOCK</SelectSizeContainer>
    );
  }

  let selectedOption;

  if (sizeSelected.size === 'Select Size') {
    selectedOption = <option selected value={sizeSelected.id} hidden>{sizeSelected.size}</option>;
  } else {
    selectedOption = <option selected value={sizeSelected.id}>{sizeSelected.size.size}</option>;
  }

  return (
      <SelectSizeMenu value={"SELECT SIZE"} onChange={changeSizeSelection}>
        {selectedOption}
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

export default SelectSize;
