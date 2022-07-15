import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from './carousel/carousel.jsx';
import PreviousImageButton from './previousimagebutton.jsx';
import NextImageButton from './nextimagebutton.jsx';
import FullScreenButton from './fullscreenbutton.jsx';

import minusSignIcon from '../../img/minus-sign-2-16.png';

function enterFullScreenMode(callback) {
  window.scrollTo(0, 0);
  document.body.style.overflow = 'hidden';
  callback();
}

function exitFullScreenMode(callback) {
  // console.log('exiting full screen mode now');
  document.body.style.overflow = 'visible';
  callback();
}

function setInitialProductImage(photo, selectionIndex, setSelection) {
  setSelection([photo, selectionIndex]);
}

function addIndexesToPhotos(photos) {
  // console.log(photos);
  for (let currentIndex = 0; currentIndex < photos.length; currentIndex++) {
    if (photos[currentIndex] !== '') {
      photos[currentIndex].index = currentIndex;
    }
  }
}

function ProductImage({ photos }) {
  addIndexesToPhotos(photos);
  // console.log('indexed photos', photoList);

  const firstPhoto = photos[0] || { thumbnail_url: '' };
  const [[selection, selectionIndex], setSelection] = useState([firstPhoto, 0]);

  const [isFullScreen, setFullScreen] = useState(false);
  const [[isZoomedIn, xPosition, yPosition, widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY], setZoomedIn] = useState([false, 0, 0, 0, 0, 0, 0]);

  if (!isFullScreen && isZoomedIn) {
    setZoomedIn([false, 0, 0]);
  }

  const needsInitialProductImage = selection.thumbnail_url !== photos[selectionIndex].thumbnail_url;

  if (needsInitialProductImage) {
    // console.log('Style change imminent: selection index is', selectionIndex);
    if (selectionIndex >= photos.length) {
      setInitialProductImage(photos[0], 0, setSelection);
    } else {
      setInitialProductImage(photos[selectionIndex], selectionIndex, setSelection);
    }
  }

  const carouselIndexStart = (Math.floor(selectionIndex / 7)) * 7;
  const carouselIndexEnd = carouselIndexStart + 7 >= photos.length ? photos.length : carouselIndexStart + 7;

  // console.log('carousel start', carouselIndexStart);
  // console.log('carousel end', carouselIndexEnd);

  const canGoForward = carouselIndexEnd < photos.length;
  const canGoBack = carouselIndexStart >= 7;

  const photoList = photos.slice(carouselIndexStart, carouselIndexEnd);

  const finalSelection = selection || photos[selectionIndex];

  const sideButtonClick = (callbackValues) => exitFullScreenMode(() => setSelection(callbackValues));

  const previousButton = selectionIndex === 0 ? <div /> : <PreviousImageButton currentIndex={selectionIndex} setSelection={setSelection} />;
  const nextButton = selectionIndex === photos.length - 1 ? <div /> : <NextImageButton currentIndex={selectionIndex} setSelection={setSelection} />;

  // console.log('is zoomed is', isZoomedIn);
  // console.log('is full screen is', isFullScreen);

  if (isFullScreen) {
    if (isZoomedIn) {
      let xAmountChange = ((xPosition - mouseClickPositionX) / mouseClickPositionX) * 100;
      let yAmountChange = ((yPosition - mouseClickPositionY) / mouseClickPositionY) * 100;

      let newXPosition = ((xPosition) / widthOfElement) * 100;
      let newYPosition = ((yPosition) / heightOfElement) * 100;

      // if (newYPosition < 0) {
      //   newYPosition = 0;
      // } else if (newYPosition > heightOfElement) {
      //   newYPosition = heightOfElement;
      // }

      // if (newXPosition < 0) {
      //   newXPosition = 0;
      // } else if (newXPosition > widthOfElement) {
      //   newXPosition = widthOfElement;
      // }

      // console.log('newXPosition is', newXPosition);
      // console.log('newYPosition is', newYPosition);

      const newPosition = `${newXPosition}% ${newYPosition}%`;

      return (
        <FullScreenDivContainer>
          <ZoomedInImageContainer newXPosition={newXPosition} newYPosition={newYPosition}>
            <FullScreenImageContainer
              selectionImageUrl={finalSelection.thumbnail_url}
              onClick={() => setZoomedIn([false, 0, 0, 0, 0])}
              position={newPosition}
              onMouseMove={(event) => {
                // console.log('off set x is', event.nativeEvent.offsetX);
                // console.log('off set y is', event.nativeEvent.offsetY);
                setZoomedIn([true, event.nativeEvent.offsetX, event.nativeEvent.offsetY,
                  widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY]);
              }}
            />
          </ZoomedInImageContainer>
        </FullScreenDivContainer>
      );
    }
    return (
      <FullScreenDivContainer>
        <FullScreenImageContainer
          id="fullScreenImage"
          selectionImageUrl={finalSelection.thumbnail_url}
          position="center"
          onClick={(event) => {
            if (event.target.id === 'fullScreenImage') {
              console.log(event.target);
              setZoomedIn([true, event.nativeEvent.offsetX, event.nativeEvent.offsetY, event.target.clientWidth,
                event.target.clientHeight, event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
            }
          }}
        >
          <Carousel
            thumbnails={photoList}
            selection={finalSelection}
            setSelection={setSelection}
            canGoForward={canGoForward}
            canGoBack={canGoBack}
            allPhotos={photos}
            isFullScreen={isFullScreen}
          />
          {previousButton}
          {nextButton}
          <FullScreenButton
            setFullScreen={() => exitFullScreenMode(() => setFullScreen(false))}
          />
        </FullScreenImageContainer>
      </FullScreenDivContainer>
    );
  }

  return (
    <DivContainer>
      <ProductImageContainer
        selectionImageUrl={finalSelection.thumbnail_url}
        id="productImage"
        onClick={(event) => {
          if (event.target.id === 'productImage') {
            enterFullScreenMode(() => setFullScreen(true));
          }
        }}
      >
        <Carousel
          thumbnails={photoList}
          selection={finalSelection}
          setSelection={setSelection}
          canGoForward={canGoForward}
          canGoBack={canGoBack}
          allPhotos={photos}
          isFullScreen={isFullScreen}
        />
        {previousButton}
        {nextButton}
      </ProductImageContainer>
    </DivContainer>
  );
}

const ProductImageContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr 4fr 1fr;
  background-color: #5d6699;
  background-image: url("${(props) => props.selectionImageUrl}");
  background-size: cover;
  height: 625px;
  background-repeat: no-repeat;
`;

const FullScreenImageContainer = styled(ProductImageContainer)`
  &:hover ${ProductImageContainer} {
    transform: scale(${(props) => props.nextScale});
  }
  background-position: ${(props) => props.position};
  position: absolute;
  z-index: 15;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
`;

const DivContainer = styled.div`
  background-color: #5d6699;
  &:hover ${ProductImageContainer} {
    cursor: zoom-in;
  }
`;

const FullScreenDivContainer = styled.div`
  &:hover ${FullScreenImageContainer} {
    cursor: crosshair;
  }
`;

const ZoomedInImageContainer = styled.div`
  &:hover ${FullScreenImageContainer} {
    cursor: url("client/src/components/overview/img/minus-sign-2-16.png"), zoom-out;
    height: 250%;
    width: 250%;
  }
`;

export default ProductImage;

//'client/src/components/overview/img/minus-sign-2-16.png'