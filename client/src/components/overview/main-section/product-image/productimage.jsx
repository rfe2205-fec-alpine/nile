import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from './carousel/carousel.jsx';
import PreviousImageButton from './previousimagebutton.jsx';
import NextImageButton from './nextimagebutton.jsx';
import FullScreenButton from './fullscreenbutton.jsx';

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
  const [isZoomedIn, setZoomedIn] = useState(false);

  if (!isFullScreen && isZoomedIn) {
    setZoomedIn(false);
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

  const previousButton = selectionIndex === 0 ? <div /> : <PreviousImageButton currentIndex={selectionIndex} setSelection={setSelection} />;
  const nextButton = selectionIndex === photos.length - 1 ? <div /> : <NextImageButton currentIndex={selectionIndex} setSelection={setSelection} />;

  // console.log('is zoomed is', isZoomedIn);
  // console.log('is full screen is', isFullScreen);

  if (isFullScreen) {
    if (isZoomedIn) {
      return (
        <FullScreenDivContainer>
          <ZoomedInImageContainer>
            <FullScreenImageContainer
              selectionImageUrl={finalSelection.thumbnail_url}
              onClick={() => setZoomedIn(false)}
              onMouseMove={() => console.log('moving the mickey!')}
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
          </ZoomedInImageContainer>
        </FullScreenDivContainer>
      );
    }
    return (
      <FullScreenDivContainer>
        <FullScreenImageContainer
          selectionImageUrl={finalSelection.thumbnail_url}
          onClick={() => setZoomedIn(true)}
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
        onClick={() => enterFullScreenMode(() => setFullScreen(true))}
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
    cursor: help;
  }
`;

export default ProductImage;
