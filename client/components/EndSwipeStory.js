import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import moment from 'moment';
import Confetti from 'react-confetti';
// import Confetti from 'react-dom-confetti'

const EndSwipeStory = () => {
  const event = useSelector((state) => {
    return state.event;
  });

  let isoDate = event.event.vote_deadline;
  let newDate = moment.utc(isoDate).format('MMM Do, YYYY');

  return (
    <div>
      <Confetti recycle={false} />

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column">
        <h3>Congratulations on finishing your swipes!</h3>
        <h4>Voting ends on {newDate}</h4>
        <p>Check back later to see the result!</p>
        <Button variant="contained" color="primary" href="/events">
          Event Page
        </Button>
      </Grid>
    </div>
  );
};

export default EndSwipeStory;
