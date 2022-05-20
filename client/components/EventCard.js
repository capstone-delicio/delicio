import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

const EventCard = (props) => {
  const [event, setEvent] = useState({});
  const [organizer, setOrganizer] = useState({});
  const [openSubmits, setOpenSubmits] = useState(null);
  const [statusMessage, setStatusMessage] = useState(false);
  const [showDetailsButton, setShowDetailsButton] = useState(false);
  const [showConfirmButton, setShowConfirmButton] = useState(false);

  const isMounted = useRef(false);
  let history = useHistory();

  const user = useSelector((state) => {
    return state.auth;
  });

  // number of openSubmits > 0 means open votes

  useEffect(() => {
    chainFetches();
  }, []);

  async function chainFetches() {
    try {
      const eventData = await fetchEvent();
      await fetchOrganizer(eventData.organizerId);
      await fetchOpenSubmits(eventData);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function fetchEvent() {
    try {
      const { data } = await axios.get(`/api/events/${props.eventId}`);
      setEvent(data);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }

  async function fetchOrganizer(id) {
    try {
      const { data } = await axios.get(`/api/users/${id}`);
      setOrganizer(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function fetchOpenSubmits(event) {
    try {
      const { data } = await axios.get(`/api/eventpicks/submits/${event.id}`);
      setOpenSubmits(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    function statusMessageFunc() {
      console.log('opensubmits', openSubmits);
      if (openSubmits > 0) {
        setStatusMessage('Votes Pending');
      } else {
        if (event.isScheduled) {
          setStatusMessage('Details Finalized!');
          setShowDetailsButton(true);
        } else {
          if (event.organizerId === user.id) {
            setShowConfirmButton(true);
          }
          setStatusMessage(`Waiting to finalize`);
        }
      }
    }
    statusMessageFunc();
  }, [openSubmits]);

  function handleClickDetail() {
    history.push('/singlerestaurant');
  }

  // need to change push---------
  function handleClickConfirm() {
    history.push('/home');
  }

  // card
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          {event.event_name}
          <br />
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          Organized By: {`${organizer.first_name} ${organizer.last_name}`}
        </Typography>
        <Typography variant="body2">
          {`Event Date: ${event.event_date}`}
          <br />
          {`Event Time: ${event.event_time}`}
        </Typography>
        <Typography variant="body2">
          Status: {statusMessage}
          <br />
        </Typography>
      </CardContent>
      {showDetailsButton ? (
        <CardActions>
          <Button variant="outlined" size="small" onClick={handleClickDetail}>
            Details
          </Button>
        </CardActions>
      ) : null}
      {showConfirmButton ? (
        <CardActions>
          <Button variant="outlined" size="small" onClick={handleClickConfirm}>
            Confirm
          </Button>
        </CardActions>
      ) : null}
    </React.Fragment>
  );

  //   const user = useSelector((state) => {
  //     return state.auth;
  //   });

  //   clickable component

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default EventCard;
