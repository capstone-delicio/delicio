import React, { useEffect, useState } from "react";
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
  //   const eventPicksStore = useSelector((state) => state.eventPicks);
  const [event, setEvent] = useState({});
  const [organizer, setOrganizer] = useState({});

  // const eventStore = useSelector((state) => state.event);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchEvent() {
      let { data } = await axios.get(`/api/events/${props.eventId}`);
      setEvent(data);
    }

    async function fetchOrganizer() {
      let { data } = await axios.get();
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

  // card
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {`${event.event_date} ${event.event_time}`}
        </Typography>
        <Typography variant="h5" component="div">
          {event.event_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>adjective</Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
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
