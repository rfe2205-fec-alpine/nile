import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { CgArrowLeftO, CgArrowRightO } from 'react-icons/cg';
import RelatedCard from './relatedCard.jsx';

function RelatedList({ productList, defaultData }) {
  const [index, setIndex] = useState(0);
  // console.log('this is product list: ', productList);
  // const newProductList = productList.slice(index, index + 3);
  const [slideLeft, setSlideLeft] = useState(0);
  const [showRight, setShowRight] = useState(true);
  const scrollRef = useRef();
  // const scrollbarWidth = scrollRef.current.offsetWidth - scrollRef.current.clientWidth;

  return (
    <CardContainer>
      {slideLeft - 200 > 0 ? (
        <LeftArrow
          onClick={() => {
            setShowRight(true);
            scrollRef.current.scrollLeft -= 200;
            setSlideLeft((scrollRef.current.scrollLeft -= 200));
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
            setIndex={setIndex}
          />
        ))}
      </CardList>
      {showRight ? (
        <RightArrow
          onClick={() => {
            slideLeft + 200 >=
            scrollRef.current.scrollWidth - scrollRef.current.clientWidth
              ? setShowRight(false)
              : '';
            scrollRef.current.scrollLeft += 200;
            setSlideLeft((scrollRef.current.scrollLeft += 200));
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
  display: flex;
  flex-direction: row;
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

const LeftArrow = styled(CgArrowLeftO)`
  display: inline-block;
  position: absolute;
  top: 40%;
  left: 0;
  color: #CCC;
  font-size: 80px;
  z-index: 5;
`;

const RightArrow = styled(CgArrowRightO)`
  display: inline-block;
  position: absolute;
  top: 40%;
  right: 0;
  color: #CCC;
  font-size: 80px;
  z-index: 5;
`;
export default RelatedList;
