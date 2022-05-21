import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TinderCard from 'react-tinder-card';
import Timer from './Timer';
import { Grid, Button } from '@material-ui/core';
import { _addEventPicks, _updateEventPicks } from '../store/eventPicks';

const SwipePage = () => {
  const dispatch = useDispatch();

  const yelp = useSelector((state) => state.yelp);
  //  yelp.restPhotos for photo array
  const event = useSelector((state) => state.event);

  const friends = useSelector((state) => state.friends);

  const user = useSelector((state) => {
    return state.auth;
  });

  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log('eventId on mount', event.event.id);
  // });

  const swiped = (direction, restaurant_picUrl) => {
    if (direction === 'right') {
      dispatch(
        _updateEventPicks(event.event.id, restaurant_picUrl, user.id, true),
      );
    }
    if (direction === 'left') {
      dispatch(
        _updateEventPicks(event.event.id, restaurant_picUrl, user.id, false),
      );
    }
  };

  let outOfFrame = () => {
    // setSwipedArr((swipedArr[idx].s = true));
    // setCounter(counter++);
    // console.log('counterstate', counter);
  };

  return (
    <div className="swipe-container">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column">
        <Timer />

        <h4>Swipe Right to like</h4>
        <h4>Swipe Left to dislike</h4>
        <div className="card-container">
          {yelp.restPhotos.map((photo, idx) => (
            <TinderCard
              className="swipe"
              key={idx}
              onSwipe={(dir) => swiped(dir, photo.imgSrc)}
              onCardLeftScreen={() => outOfFrame()}>
              <div
                style={{ backgroundImage: 'url(' + photo.imgSrc + ')' }}
                className="card">
                {/* <h3>{photo.imgDesc}</h3> */}
              </div>
            </TinderCard>
          ))}
        </div>
        <br />
        <Button variant="contained" color="primary" href="/endswipestory">
          Next
        </Button>
      </Grid>
    </div>
  );
};
export default SwipePage;
