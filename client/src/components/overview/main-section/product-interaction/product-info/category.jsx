import React from 'react';
import styled from 'styled-components';

function Category({ category, colorScheme }) {
  return (
    <CategoryContainer colorScheme={colorScheme}>
      {category}
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  font-size: 18px;
  color: ${(props) => props.colorScheme.textColorBackground};
`;

export default Category;
