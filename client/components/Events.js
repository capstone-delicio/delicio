import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { _getUserEvents } from "../store/eventPicks";
import EventCard from "./EventCard";

const Events = () => {
  const eventPicksStore = useSelector((state) => state.eventPicks);
  const user = useSelector((state) => {
    return state.auth;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_getUserEvents(user.id));
  }, []);

  // return a list of events
  //   const eventCards = () => {
  //     return eventPicksStore.userEvents.map((event) => {
  //       return <EventCard key={event} eventId={event.id} />;
  //     });
  //   };

  return (
    <div>
      {eventPicksStore.userEvents.map((event) => {
        console.log(event);
        return <EventCard key={event} eventId={event} />;
      })}
    </div>
  );

  // tally all the votes for photos
  // return the restaurant with the most votes
  // <div>
  //     {event.event.map(
  //       (event) => (event.event_name,
  //       event.event_date,
  //       event.event_time
  //     ))}
  // </div>
};

export default Events;

// get all events associated with logged in user
// load child event component as card

// event picks with the same eventId
