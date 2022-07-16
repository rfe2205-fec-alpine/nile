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

function panImage(xDifference, yDifference, setZoomedIn, widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY, xPosition, yPosition) {
  const left = '0%';
  const top = '0%';
  const right = `${-widthOfElement}px`;
  const bottom = `${-heightOfElement}px`;

  const needsLeft = xDifference < 0;
  const needsRight = xDifference > 0;
  const needsTop = yDifference < 0;
  const needsBottom = yDifference > 0;

  const moveTopLeft = [true, left, top, widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY];
  const moveTopRight = [true, right, top, widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY];
  const moveBottomLeft = [true, left, bottom, widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY];
  const moveBottomRight = [true, right, bottom, widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY];

  const moveTop = [true, xPosition, top, widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY];
  const moveBottom = [true, xPosition, bottom, widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY];
  const moveLeft = [true, left, yPosition, widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY];
  const moveRight = [true, right, yPosition, widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY];

  if (needsLeft && needsTop) {
    setZoomedIn(moveTopLeft);
  } else if (needsLeft && needsBottom) {
    setZoomedIn(moveBottomLeft);
  } else if (needsLeft) {
    setZoomedIn(moveLeft);
  } else if (needsRight && needsTop) {
    setZoomedIn(moveTopRight);
  } else if (needsRight && needsBottom) {
    setZoomedIn(moveBottomRight);
  } else if (needsRight) {
    setZoomedIn(moveRight);
  } else if (needsTop) {
    setZoomedIn(moveTop);
  } else if (needsBottom) {
    setZoomedIn(moveBottom);
  }
}

function ProductImage({ photos, selectionIndex, selection, setSelection }) {
  addIndexesToPhotos(photos);
  // console.log('indexed photos', photoList);

  const firstPhoto = photos[0] || { thumbnail_url: '' };

  const [isFullScreen, setFullScreen] = useState(false);
  const [[isZoomedIn, xPosition, yPosition, widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY], setZoomedIn] = useState([false, 0, 0, 0, 0, 0, 0]);

  if (!isFullScreen && isZoomedIn) {
    setZoomedIn([false, 0, 0]);
  }

  const selectedPhoto = photos[selectionIndex] || photos[0];

  const needsInitialProductImage = selection.thumbnail_url !== selectedPhoto.thumbnail_url;

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

  const left = '0%';
  const top = '0%';
  const right = `${-widthOfElement}px`;
  const bottom = `${-heightOfElement}px`;

  // console.log('is zoomed is', isZoomedIn);
  // console.log('is full screen is', isFullScreen);

  if (isFullScreen) {
    if (isZoomedIn) {
      let xAmountChange = ((xPosition - mouseClickPositionX) / mouseClickPositionX) * 100;
      let yAmountChange = ((yPosition - mouseClickPositionY) / mouseClickPositionY) * 100;

      let newXPosition = ((xPosition) / widthOfElement) * 100;
      let newYPosition = ((yPosition) / heightOfElement) * 100;

      // if (newYPosition < -heightOfElement) {
      //   newYPosition = -heightOfElement;
      // } else if (newYPosition > heightOfElement) {
      //   newYPosition = heightOfElement;
      // }

      // if (newXPosition < -widthOfElement) {
      //   newXPosition = -widthOfElement;
      // } else if (newXPosition > widthOfElement) {
      //   newXPosition = widthOfElement;
      // }

      // console.log('newXPosition is', newXPosition);
      // console.log('newYPosition is', newYPosition);

      const newPosition = { x: xPosition, y: yPosition };

      return (
        <FullScreenDivContainer>
          <ZoomedInImageContainer newXPosition={newXPosition} newYPosition={newYPosition}>
            <FullScreenImageContainer
              selectionImageUrl={finalSelection.thumbnail_url}
              onClick={() => setZoomedIn([false, '0%', '0%', 0, 0])}
              position={newPosition}
              onMouseMove={(event) => {
                // console.log('off set x is', event.nativeEvent.offsetX);
                // console.log('off set y is', event.nativeEvent.offsetY);
                const xDifference = event.nativeEvent.offsetX - mouseClickPositionX;
                const yDifference = event.nativeEvent.offsetY - mouseClickPositionY;

                let needsChange = false;
                if (xDifference < -20 && xPosition !== left) {
                  needsChange = true;
                } else if (xDifference > 20 && xPosition !== right) {
                  needsChange = true;
                } else if (yDifference < -20 && yPosition !== top) {
                  needsChange = true;
                } else if (yDifference > 20 && yPosition !== bottom) {
                  needsChange = true;
                }

                if (needsChange) {
                  panImage(xDifference, yDifference, setZoomedIn, widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY, xPosition, yPosition);
                } else {
                  const xNeedsCenter = xDifference <= 20 && xDifference >= -20;
                  const yNeedsCenter = yDifference <= 20 && yDifference >= -20;

                  const needsCenter = xNeedsCenter && yNeedsCenter;

                  if (needsCenter && (xPosition !== '50%' || yPosition !== '50%')) {
                    setZoomedIn([true, '50%', '50%', widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY]);
                  }
                }
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
              setZoomedIn([true, '50%', '50%', event.target.clientWidth,
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
  background-position: ${(props) => props.position.x} ${(props) => props.position.y};
  position: absolute;
  z-index: 15;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  transition: background-position 1s;
`;

const DivContainer = styled.div`
  background-color: #5d6699;
  &:hover ${ProductImageContainer} {
    cursor: crosshair;
  }
`;

const FullScreenDivContainer = styled.div`
  &:hover ${FullScreenImageContainer} {
    cursor: zoom-in;
  }
`;

const ZoomedInImageContainer = styled.div`
  &:hover ${FullScreenImageContainer} {
    cursor: zoom-out;
    height: 250%;
    width: 250%;
  }
`;

export default ProductImage;

//'client/src/components/overview/img/minus-sign-2-16.png'
// ${(props) => props.position.x}px ${(props) => props.position.y}px;
// [true, `${-widthOfElement}px`, `${-heightOfElement}px`,
// widthOfElement, heightOfElement, mouseClickPositionX, mouseClickPositionY]