import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEventThunk } from "../store/event";

const EventCard = (props) => {
  //   const eventPicksStore = useSelector((state) => state.eventPicks);

  const eventStore = useSelector((state) => state.event);
  const dispatch = useDispatch();

  //   const user = useSelector((state) => {
  //     return state.auth;
  //   });

  //   clickable component

  useEffect(() => {
    dispatch(getEventThunk(props.eventId));
    // console.log("inside UseEffect", eventStore.singleEvent);
    // grab eventId
    // eventname
    // eventdate
    // eventtime
    // status SOME MSG HERE
  }, []);

  return <h1>{props.eventId}</h1>;
};

export default EventCard;
