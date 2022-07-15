import React from 'react';

function QuarterStars({ rating = 0 }) {
  const SingleStarContainer = {
    height: '20px',
    width: '18px',
    display: 'inline-block',
  };
  const SingleStarOutline = {
    height: '20px',
    width: '18px',
  };
  const WrapperDiv = {
    width: '100%',
  };
  const stars = [];
  while (stars.length < 5) {
    if (rating > 1) {
      stars.push(1);
    } else if (rating > 0) {
      const empty = Math.abs(0 - rating);
      const quart = Math.abs(0.25 - rating);
      const half = Math.abs(0.5 - rating);
      const three = Math.abs(0.75 - rating);
      const full = Math.abs(1 - rating);
      const closest = Math.min(empty, quart, half, three, full);
      switch (closest) {
        case (empty):
          stars.push(0);
          break;
        case quart:
          stars.push(0.28);
          break;
        case half:
          stars.push(0.5);
          break;
        case three:
          stars.push(0.72);
          break;
        case full:
          stars.push(1.0);
          break;
        default:
          console.log('OOPS');
          stars.push(0);
          break;
      }
    } else {
      stars.push(0);
    }
    rating -= 1;
  }

  return (
    <div style={WrapperDiv}>
      {stars.map((item) => {
        const SingleStarFill = {
          position: 'relative',
          display: 'inline-block',
          height: '20px',
          width: `${parseInt(item * 18, 10)}px`,
          backgroundColor: 'black',
        };
        return (
          <div style={SingleStarContainer}>
            <div style={SingleStarFill}>
              <img src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" alt="Star Icon" style={SingleStarOutline} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default QuarterStars;
