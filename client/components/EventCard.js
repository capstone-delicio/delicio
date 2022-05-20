import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const EventCard = (props) => {
  const [event, setEvent] = useState({});
  const [organizer, setOrganizer] = useState({});
  const [openSubmits, setOpenSubmits] = useState(0);
  const [statusMessage, setStatusMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const isMounted = useRef(false);
  const dispatch = useDispatch();

  // number of openSubmits > 0 means open votes

  useEffect(() => {
    // grab event associated with this card
    async function fetchEvent() {
      let { data } = await axios.get(`/api/events/${props.eventId}`);
      setEvent(data);
    }
    fetchEvent();
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      // get organizer for the event
      async function fetchOrganizer() {
        const { data } = await axios.get(`/api/users/${event.organizerId}`);
        setOrganizer(data);
      }
      fetchOrganizer();
    } else {
      isMounted.current = true;
    }
  }, [event]);

  useEffect(() => {
    async function fetchOpenSubmits() {
      const { data } = await axios.get(
        `/api/eventpicks/submits/${props.eventId}`
      );
      setOpenSubmits(data);
    }
    fetchOpenSubmits();
  }, [props.eventId]);

  useEffect(() => {
    if (openSubmits > 0) {
      setStatusMessage("Votes Pending");
    } else {
      if (event.isScheduled) {
        setStatusMessage("Click to see event restaurant details");
        setShowButton(true);
      } else {
        setStatusMessage(`Waiting to finalize`);
      }
    }
  }, [event]);

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
      {showButton ? (
        <CardActions>
          <Button size="small">Learn More</Button>
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
