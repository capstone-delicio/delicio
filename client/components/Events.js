import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Events = () => {
  const event = useSelector((state) => state.event);

  // tally all the votes for photos
  // return the restaurant with the most votes

  return console.log(event);
  // <div>

  //     {event.event.map(
  //       (event) => (event.event_name,
  //       event.event_date,
  //       event.event_time
  //     ))}
  // </div>
};

export default Events;
