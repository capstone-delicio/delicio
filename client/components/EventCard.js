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

  const isMounted = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchEvent() {
      let { data } = await axios.get(`/api/events/${props.eventId}`);
      setEvent(data);
    }
    fetchEvent();

    // dispatch(getEventThunk(props.eventId));
    // console.log("inside UseEffect", eventStore.singleEvent);
    // grab eventId
    // eventname
    // eventdate
    // eventtime
    // status SOME MSG HERE
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      async function fetchOrganizer() {
        let { data } = await axios.get(`/api/users/${event.organizerId}`);
        setOrganizer(data);
      }
      fetchOrganizer();
    } else {
      isMounted.current = true;
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
          Status:
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
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
