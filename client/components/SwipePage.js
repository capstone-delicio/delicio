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

  // set photos swiped right to isLiked

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

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div className="swipe-container">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column">
        <Timer />

        <h1>Restaurant Selections</h1>
        <div className="card-container">
          {yelp.restPhotos.map((photo, idx) => (
            <TinderCard
              className="swipe"
              key={idx}
              onSwipe={(dir) => swiped(dir, photo.imgSrc)}
              onCardLeftScreen={() => outOfFrame(photo.imgDesc)}>
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
