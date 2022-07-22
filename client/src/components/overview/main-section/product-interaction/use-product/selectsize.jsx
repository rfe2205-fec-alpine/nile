import React from 'react';
import styled from 'styled-components';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

// const listOfSizes = ['Small', 'Medium', 'Large'];
// 'Small', 'Medium', 'Large'

function SelectSize({ container, sizeSelected, setSizeSelection, listOfSizes, stock, colorScheme }) {
  const SelectSizeContainer = container;
  // console.log('size selected is', sizeSelected);
  function changeSizeSelection(event) {
    let newSelectionId = event.target.value;
    let newSelectionSize = stock[newSelectionId];
    setSizeSelection([newSelectionId, newSelectionSize, false]);
  }

  let key = 300;

  let options = listOfSizes.map(function (item) {
    key++;
    let size = item.size;
    // console.log('size is', size);
    // console.log('selected is', sizeSelected);
    let id = item.id;

    if (size !== sizeSelected.size) {
      return <option key={key} value={id}>{size}</option>;
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
    options = [selectedOption].concat(options);
  }

  const borderColor = sizeSelected.needsSizeSelection ? 'red' : 'black';

  if (sizeSelected.needsSizeSelection) {
    return (
      <NeedsSizeSelection>
        <PleaseSelectSize>Please Select Size &nbsp;<AiOutlineExclamationCircle color="red" /></PleaseSelectSize>
        <SelectSizeMenu defaultValue={'Select Size'} onChange={changeSizeSelection} borderColor={borderColor} margin="10px">
          {options}
        </SelectSizeMenu>
      </NeedsSizeSelection>
    );
  }

  return (
    <SelectSizeMenu defaultValue={'Select Size'} onChange={changeSizeSelection} borderColor={borderColor} margin="25px">
      {options}
    </SelectSizeMenu>
  );
}

const SelectSizeMenu = styled.select.attrs((props) => ({
  defaultValue: props.defaultValue,
  onChange: props.onChange,
}))`
  display: flex;
  padding: 20px;
  align-items: center;
  border: 1px solid ${(props) => props.borderColor};
  background-color: #E4E4E4;
  margin-top: ${(props) => props.margin};
  margin-bottom: 25px;
  margin-left: 25px;
  margin-right: 25px;
  font-size: 18px;
`;

const PleaseSelectSize = styled.div`
  display: flex;
  justify-content: center;
  color: red;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 10px;
`;

const NeedsSizeSelection = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SelectSize;
