import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TinderCard from 'react-tinder-card';
import Timer from './Timer';
import { _addEventPicks, _updateEventPicks } from '../store/eventPicks';
import {
  Grid,
  Paper,
  makeStyles,
  Box,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core';

const SwipePage = () => {
  const useStyle = makeStyles((theme) => ({
    paperStyle: {
      padding: 20,
      height: '55vh',
      width: 440,
      margin: '20px auto',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));

  const classes = useStyle();

  const steps = ['Event Information', 'Restaurant Preferences', 'Swipe'];

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
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column">
        {/* we can revisit later -- throws errors BUGGY */}
        {/* <Timer /> */}

        <h4>Swipe Right to like</h4>
        <h4>Swipe Left to dislike</h4>
        <Paper elevation={10} className={classes.paperStyle}>
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
