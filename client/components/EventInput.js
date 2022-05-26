import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent } from '../store';
import history from '../history';
import FriendsSelect from './FriendsSelect';
import {
  Grid,
  Button,
  TextField,
  makeStyles,
  Card,
  CardHeader,
  InputLabel,
  Container,
  Box,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core';

const EventInput = () => {
  const useStyle = makeStyles((theme) => ({
    padding: {
      padding: theme.spacing(3),
    },
    header: {
      textAlign: 'center',
    },
    formControl: {
      width: 300,
      // textAlign: 'center',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  }));

  const classes = useStyle();

  const steps = ['Event Information', 'Restaurant Preferences', 'Swipe'];

  const [dateError, setDateError] = useState('');

  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.auth;
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    const organizerId = user.id;
    const event_name = e.target.event_name.value;
    const event_date = e.target.event_date.value;
    const event_time = e.target.event_time.value;
    const vote_deadline = e.target.vote_deadline.value;
    if (vote_deadline < event_date) {
      dispatch(
        addEvent(
          organizerId,
          event_name,
          event_date,
          event_time,
          vote_deadline,
        ),
      );
      history.push('/questions');
    }
    // console.log('deadline', vote_deadline);
    if (vote_deadline >= event_date) {
      setDateError('Deadline must be before event date');
    }

    // vote_deadline cannot be before today
    // console.log('vote_deadline', vote_deadline);
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    // console.log('today', today);
    if (vote_deadline < today) {
      setDateError('Please choose a later vote deadline');
    }
  };

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Container className={classes.padding}>
        {/* <Card> */}
        <CardHeader
          className={classes.header}
          title="Fill in the following information"></CardHeader>
        <form id="eventInputForm" onSubmit={handleSubmit} name="eventInput">
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column">
            <Grid item>
              <FriendsSelect />
            </Grid>

            <Grid item>
              <InputLabel>Event Name:</InputLabel>
              <TextField
                name="event_name"
                type="text"
                className={classes.formControl}
              />
            </Grid>
            <br />

            <Grid item>
              <InputLabel>Event Date:</InputLabel>
              <TextField
                name="event_date"
                type="date"
                className={classes.formControl}
              />
            </Grid>
            <br />

            <Grid item>
              <InputLabel>Event Time:</InputLabel>
              <TextField
                name="event_time"
                type="time"
                className={classes.formControl}
              />
            </Grid>
            <br />

            <Grid item>
              <InputLabel>Voting Deadline:</InputLabel>
              <TextField
                name="vote_deadline"
                type="date"
                className={classes.formControl}
              />
            </Grid>

            <div style={{ color: 'red' }}>{dateError}</div>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              className={classes.formControl}>
              Submit
            </Button>

            <br />
          </Grid>
        </form>
        {/* </Card> */}
      </Container>
    </div>
  );
};

export default EventInput;
