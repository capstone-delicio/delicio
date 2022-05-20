import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent } from '../store';
import history from '../history';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FriendsSelect from './FriendsSelect';
import TimePicker from 'react-bootstrap-time-picker';

const EventInput = () => {
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
    console.log('deadline', vote_deadline);
    if (vote_deadline >= event_date) {
      setDateError('Deadline must be before event date');
    }

    // vote_deadline cannot be before today

    console.log('vote_deadline', vote_deadline);
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    console.log('today', today);
    if (vote_deadline < today) {
      setDateError('Please choose a later vote deadline');
    }
  };

  return (
    <div>
      <form id="eventInputForm" onSubmit={handleSubmit} name="eventInput">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column">
          <h3>Please fill in the following information</h3>

          <Grid item>
            <FriendsSelect />
          </Grid>

          <Grid item>
            <InputLabel>Event Name:</InputLabel>

            <TextField name="event_name" type="text" />
          </Grid>
          <br />
          <Grid item>
            <InputLabel>Event Date:</InputLabel>
            <TextField name="event_date" label="YYYY-MM-DD" />
          </Grid>
          <br />

          <Grid item>
            <InputLabel>Event Time:</InputLabel>
            <TextField name="event_time" label=" HH:MM am" />
          </Grid>
          <br />

          <Grid item>
            <InputLabel>Voting Deadline:</InputLabel>
            <TextField name="vote_deadline" label="YYYY-MM-DD" />
          </Grid>

          <div style={{ color: 'red' }}>{dateError}</div>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br />
        </Grid>
      </form>
    </div>
  );
};

export default EventInput;
