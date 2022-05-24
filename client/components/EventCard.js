import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { _countEventPicks, _updateSubmit } from '../store/eventPicks';
import { _getSingleRest, _getDbRestPhotos } from '../store/yelp';
import { getEventThunk } from '../store/event';

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  responsiveFontSizes,
} from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import theme from '../theme';

const EventCard = (props) => {
  let theme = {
    overrides: {
      MuiCard: {
        root: {
          '&.EventCard': {
            transition: '0.3s',
            maxWidth: '90vh',
            // maxHeight: '20vh auto',
            // height: '20vh',
            padding: 15,
            margin: '20px auto',
            boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
            '&:hover': {
              boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
            },
          },
          '& .MuiTypography--heading': {
            fontWeight: 'bold',
            lineHeight: 2,
            letterSpacing: 0.5,
            // textTransform: 'uppercase',
            display: 'block',
          },
          '& .MuiTypography--subheading': {
            lineHeight: 1.5,
          },
          '& .DetailsButton': {
            marginLeft: 'auto',
            // padding: 8,
          },
        },
      },
    },
  };

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
      checkDeadline(eventData);
      await fetchOrganizer(eventData.organizerId);
      await fetchOpenSubmits(eventData);
      await fetchUserOpenSubmits(eventData);
    } catch (err) {
      console.log(err.message);
    }
  }

  function checkDeadline(event) {
    const deadline = event.vote_deadline;
    let today = new Date();
    today = today.toISOString();

    if (deadline < today) {
      dispatch(_updateSubmit(event.id));
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
    if (
      statusMessage === 'Votes Pending' ||
      statusMessage === `${user.first_name} Please Vote`
    ) {
      return `Voting Ends On: ${isoDateFormat(event.vote_deadline)}`;
    }
  }

  function handleClickDetail() {
    dispatch(getEventThunk(event.id));
    dispatch(_getSingleRest(event.restaurantId));
    history.push('/singlerestaurant');
  }

  function handleClickConfirm() {
    fetchVotes(event.id);
    dispatch(getEventThunk(event.id));
    history.push('/finaleventupdate');
  }

  function handleClickVote() {
    dispatch(getEventThunk(event.id));
    dispatch(_getDbRestPhotos(event.id, user.id));
    history.push('/card');
  }

  // card
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          color="secondary"
          className={'MuiTypography--heading'}>
          {event.event_name}
        </Typography>

        <Typography sx={{ mb: 1.5 }} className={'MuiTypography--subheading'}>
          Organized By : {`${organizer.first_name} ${organizer.last_name}`}
        </Typography>

        <Typography className={'MuiTypography--subheading'}>
          {`Event Date: ${event.event_date}`}
          <br />
          {`Event Time: ${event.event_time}`}
          <br />
          {voteDeadline()}
          <br />
        </Typography>

        <Typography className={'MuiTypography--subheading'} variant="subtitle1">
          Status: {statusMessage}
        </Typography>
        {showDetailsButton ? (
          <CardActions>
            <Button
              variant="outlined"
              className={'DetailsButton'}
              color="secondary"
              size="small"
              onClick={handleClickDetail}>
              Details
            </Button>
          </CardActions>
        ) : null}
        {showConfirmButton ? (
          <CardActions>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={handleClickConfirm}>
              Confirm
            </Button>
          </CardActions>
        ) : null}
        {showVoteButton ? (
          <CardActions>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={handleClickVote}>
              Vote
            </Button>
          </CardActions>
        ) : null}
      </CardContent>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={theme}>
      {/* <Box sx={{ minWidth: 275 }}> */}
      <Card className={'EventCard'} variant="outlined">
        {card}
      </Card>
      {/* </Box> */}
    </ThemeProvider>
  );
};

export default EventCard;
