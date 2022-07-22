import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import RelatedCard from './relatedCard';

function RelatedList({ productList, defaultData, colorScheme }) {
  const [slideLeft, setSlideLeft] = useState(0);
  const [showRight, setShowRight] = useState(true);
  const scrollRef = useRef();
  console.log(colorScheme.foreground);
  function handleLeft() {
    setShowRight(true);
    let remainder;
    if (slideLeft - 200 < 0) {
      remainder = 200 - slideLeft;
    } else {
      remainder = 200;
    }
    scrollRef.current.scrollLeft -= remainder;
    setSlideLeft((scrollRef.current.scrollLeft -= remainder));
  }

  function handleRight() {
    const width = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    let remainder;
    if (slideLeft + 200 > width) {
      setShowRight(false);
      remainder = slideLeft + 300 - width;
    } else {
      remainder = 200;
    }
    scrollRef.current.scrollLeft += remainder;
    setSlideLeft((scrollRef.current.scrollLeft += remainder));
  }

  return (
    <CardContainer>
      {slideLeft > 0 ? (
        <LeftArrow
          colorScheme={colorScheme}
          onClick={() => {
            handleLeft();
          }}
        />
      ) : (
        ''
      )}
      <CardList ref={scrollRef}>
        {productList.map((product) => (
          <RelatedCard
            key={product.id}
            product={product}
            defaultData={defaultData}
            colorScheme={colorScheme}
          />
        ))}
      </CardList>
      {showRight ? (
        <RightArrow
          colorScheme={colorScheme}
          onClick={() => {
            handleRight();
          }}
        />
      ) : (
        ''
      )}
    </CardContainer>
  );
}
const CardContainer = styled.div`
  position: relative;
  max-width: 1200px;
`;

const CardList = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 0.25rem;
  max-width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LeftArrow = styled(MdArrowLeft)`
  display: inline-block;
  position: absolute;
  bottom: 20%;
  left: 0;
  color: ${(props) => props.colorScheme.textColorForeground};
  font-size: 80px;
  opacity: 0.4;
  z-index: 2;
  &:hover {
    opacity: 1;
    font-size: 85px;
    transition: 0.2s;
  }
`;

const RightArrow = styled(MdArrowRight)`
  display: inline-block;
  position: absolute;
  bottom: 20%;
  right: 0;
  color:  ${(props) => props.colorScheme.textColorForeground};
  opacity: 0.4;
  font-size: 80px;
  z-index: 2;
  &:hover {
    opacity: 1;
    font-size: 85px;
    transition: 0.2s;
  }
`;
export default RelatedList;
