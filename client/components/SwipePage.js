import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TinderCard from "react-tinder-card";
import { Button } from "@material-ui/core";
import { _addEventPicks } from "../store/eventPicks";

const SwipePage = () => {
  const [lastDirection, setLastDirection] = useState();

  const dispatch = useDispatch();

  const yelp = useSelector((state) => state.yelp);
  //  yelp.restPhotos for photo array
  const event = useSelector((state) => state.event);
  const friends = useSelector((state) => state.friends);

  // set photos swiped right to isLiked

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  // dispatch setCurrentRest
  // history.push to renee's single rest comp

  // useEffect(() => {
  // when component mounts
  // add each eventpick via eventId, userId, restId, restAlias, rest_pickUrl, picDescription to event_picks model
  // for each selected friend,
  // add each yelp.restPhotos (store: resauranttId, restaurantAlias, rest_picUrl, imgDesc)
  // access eventId
  // dispatch _addEventPicks thunk
  // create an object for each nested for each loop

  // friends.friends.forEach((friend) => {
  //   // console.log(friend.id);
  //   let userId = friend.id;
  //   console.log("friendId:", friend.id);

  // for (let i = 0; i < yelp.restPhotos.length; i++) {
  //   let restId = yelp.restPhotos.id;
  //   console.log("restId:", restId);
  // }

  // console.log("restPhotosStore:", yelp.restPhotos);
  // console.log("restsStore:", yelp.rests);
  // console.log("friendsStore:", friends.friends);

  // yelp.restPhotos.forEach((photo) => {
  //   let restaurantId = photo.id;
  //   let restaurantAlias = photo.alias;
  //   let Restaurant_picUrl = photo.imgSrc;
  //   let picDescription = photo.imgDesc;
  //   console.log("restaurantId:", restaurantId);
  //   console.log("restaurantAlias:", restaurantAlias);
  //   console.log("Restaurant_picUrl:", Restaurant_picUrl);
  //   console.log("picDescription:", picDescription);
  //   let eventId = event.event.id;
  //   console.log("eventId:", eventId);
  // }, []);

  // }, []);
  // adding empty array will cause useEffect to only run once

  // if (yelp.restPhotos) {
  useEffect(() => {
    let eventId = event.event.id;

    friends.friends.forEach((friend) => {
      // console.log(friend.id);
      let userId = friend.id;

      yelp.restPhotos.map((photo) => {
        // return console.log("restPhotosId", photo.id);
        let restaurantId = photo.id;
        let restaurantAlias = photo.alias;
        let restaurant_picUrl = photo.imgSrc;
        let picDescription = photo.imgDesc;
        dispatch(
          _addEventPicks(
            eventId,
            userId,
            restaurantId,
            restaurantAlias,
            restaurant_picUrl,
            picDescription
          )
        );
      });
    });
  }, []);
  // }

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
            <Button onClick={() => console.log(`hello from ${photo.id}`)}>
              MORE INFO{" "}
            </Button>
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
