import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TinderCard from 'react-tinder-card';
import Timer from './Timer';
import { Grid, Paper } from '@material-ui/core';
import { _addEventPicks, _updateEventPicks } from '../store/eventPicks';

const SwipePage = () => {
  const paperStyle = {
    padding: 20,
    height: '55vh',
    width: 440,
    margin: '20px auto',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const dispatch = useDispatch();
  let history = useHistory();

  const yelp = useSelector((state) => state.yelp);
  const event = useSelector((state) => state.event);
  const user = useSelector((state) => {
    return state.auth;
  });

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

  function outOfFrame(idx) {
    if (idx === 0) {
      history.push('/endswipestory');
    }
  }

  return (
    <div className="swipe-container">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column">
        {/* we can revisit later -- throws errors BUGGY */}
        {/* <Timer /> */}

        <h4>Swipe Right to like</h4>
        <h4>Swipe Left to dislike</h4>
        <Paper elevation={10} style={paperStyle}>
          <div className="card-container">
            {yelp.restPhotos.map((photo, idx) => (
              <TinderCard
                className="swipe"
                key={idx}
                onSwipe={(dir) => swiped(dir, photo.imgSrc)}
                onCardLeftScreen={() => outOfFrame(idx)}>
                <div
                  style={{ backgroundImage: 'url(' + photo.imgSrc + ')' }}
                  className="card"></div>
              </TinderCard>
            ))}
          </div>
        </Paper>
      </Grid>
    </div>
  );
};
export default SwipePage;
