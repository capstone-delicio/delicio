import React, { useState } from "react";
import { useSelector } from "react-redux";
import TinderCard from "react-tinder-card";

const SwipePage = () => {
  const [lastDirection, setLastDirection] = useState();
  const yelp = useSelector((state) => state.yelp);
  //  yelp.restPhotos for photo array

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="swipe-container">
      <h1>Restaurant Selections</h1>
      <div className="card-container">
        {yelp.restPhotos.map((photo, idx) => (
          <TinderCard
            className="swipe"
            key={idx}
            onSwipe={(dir) => swiped(dir, photo.imgDesc)}
            onCardLeftScreen={() => outOfFrame(photo.imgDesc)}
          >
            <div
              style={{ backgroundImage: "url(" + photo.imgSrc + ")" }}
              className="card"
            >
              <h3>{photo.imgDesc}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default SwipePage;
