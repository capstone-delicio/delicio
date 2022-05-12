// import React from "react";

// const SwipePage = () => {
//   return <div>hello from swipe</div>;
// };

// export default SwipePage;

import React from "react";
import { animated, interpolate } from "react-spring";
import Carousel from "nuka-carousel";
import { useSelector } from "react-redux";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const yelp = useSelector((state) => state.yelp);
  //yelp.restPhotos for photo array

  const { name, age, distance, bio, pics } = data[i];

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
        }}
      >
        <div className="card">
          <Carousel>
            {yelp.restPhotos.map((pic, index) => (
              <img src={pic.imgSrc} key={index} alt={pic.imgDesc} />
            ))}
          </Carousel>
          <h2>{pic.imgDesc}</h2>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Card;
