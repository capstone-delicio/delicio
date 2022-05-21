import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { _countEventPicks } from '../store/eventPicks';
import { _getSingleRest, _getDbRestPhotos } from '../store/yelp';
import { getEventThunk } from '../store/event';

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
  const [userOpenSubmits, setUserOpenSubmits] = useState(null);
  const [statusMessage, setStatusMessage] = useState(false);
  const [showDetailsButton, setShowDetailsButton] = useState(false);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const [showVoteButton, setShowVoteButton] = useState(false);

  const dispatch = useDispatch();
  const eventPicksStore = useSelector((state) => state.eventPicks);

  // const isMounted = useRef(false);
  let history = useHistory();

  const user = useSelector((state) => {
    return state.auth;
  });

  useEffect(() => {
    chainFetches();
  }, []);

  async function chainFetches() {
    try {
      const eventData = await fetchEvent();
      await fetchOrganizer(eventData.organizerId);
      await fetchOpenSubmits(eventData);
      await fetchUserOpenSubmits(eventData);
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

  async function fetchUserOpenSubmits(event) {
    const userId = user.id;
    try {
      const { data } = await axios.get(
        `/api/eventpicks/user/votes/${event.id} `,
        {
          params: { userId },
        },
      );
      setUserOpenSubmits(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function fetchVotes(id) {
    try {
      const { data } = await axios.get(`/api/eventpicks/votes/${id}`);
      // tally votes
      let restWinner = data.reduce(function (prev, current) {
        return prev.count > current.count ? prev : current;
      });
      // put restaurant winner in yelp store as rest
      dispatch(_getSingleRest(restWinner.restaurantId));
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    function statusMessageFunc() {
      if (openSubmits > 0) {
        if (userOpenSubmits > 0) {
          setStatusMessage(`${user.first_name} Please Vote`);
          setShowVoteButton(true);

          // dispatch _getDbRestPhotos
        } else {
          setStatusMessage('Votes Pending');
        }
      } else {
        if (event.isScheduled) {
          setStatusMessage('Details Finalized!');
          setShowDetailsButton(true);
        } else {
          if (event.organizerId === user.id) {
            setShowConfirmButton(true);
          }
          setStatusMessage(`Waiting for ${organizer.first_name} to finalize`);
        }
      }
    }
    statusMessageFunc();
  }, [openSubmits, userOpenSubmits]);

  function isoDateFormat(isoDate) {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return year + '-' + month + '-' + dt;
  }

  function voteDeadline() {
    if (statusMessage === 'Votes Pending') {
      return `Voting Ends On: ${isoDateFormat(event.vote_deadline)}`;
    }
  }

  function handleClickDetail() {
    dispatch(getEventThunk(event.id));
    history.push('/singlerestaurant');
  }

  function handleClickConfirm() {
    fetchVotes(event.id);
    dispatch(getEventThunk(event.id));
    history.push('/finaleventupdate');
  }

  function handleClickVote() {
    dispatch(_getDbRestPhotos(event.id, user.id));
    dispatch(getEventThunk(event.id));
    // history.push('/card');
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
          Organized By : {`${organizer.first_name} ${organizer.last_name}`}
        </Typography>

        <Typography variant="body2">
          {`Event Date: ${event.event_date}`}
          <br />
          {`Event Time: ${event.event_time}`}
          <br />
          {voteDeadline()}
        </Typography>

        <Typography sx={{ mb: 1.5 }}>
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
      {showVoteButton ? (
        <CardActions>
          <Button variant="outlined" size="small" onClick={handleClickVote}>
            Vote
          </Button>
        </CardActions>
      ) : null}
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default EventCard;
