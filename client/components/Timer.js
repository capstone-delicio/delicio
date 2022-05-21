import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { _updateSubmit } from '../store/eventPicks';
import moment from 'moment';

function Timer() {
  const dispatch = useDispatch();
  const event = useSelector((state) => {
    return state.event;
  });

  const calculateTimeLeft = () => {
    const difference = +new Date(`${event.event.vote_deadline}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 10000);
  });

  let handleSubmit = () => {
    console.log('timercomp', timerComponents.length);
    dispatch(_updateSubmit(event.event.id));
  };

  let timerComponents = [];
  Object.keys(timeLeft).forEach((interval, idx) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={idx}>
        {timeLeft[interval]} {interval}{' '}
      </span>,
    );
  });

  let isoDate = event.event.vote_deadline;
  let newDate = moment.utc(isoDate).format('MMM Do, YYYY');

  return (
    <div>
      <h4>Make your vote by {newDate}</h4>
      {timerComponents.length ? timerComponents : handleSubmit()}
    </div>
  );
}

export default Timer;
