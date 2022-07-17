import React from 'react';
import styled from 'styled-components';

function Category({ category, colorScheme }) {
  return (
    <CategoryContainer>
      {category}
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  font-size: 18px;
`;

export default Category;
