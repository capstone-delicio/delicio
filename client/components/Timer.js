import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { _updateSubmit } from '../store/eventPicks'

function Timer() {
  const dispatch = useDispatch()
  const event = useSelector((state) => {
    return state.event
  })
  // console.log('eventtimer', event.event.vote_deadline)

  const calculateTimeLeft = () => {
    const difference = +new Date(`${event.event.vote_deadline}`) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const handleSubmit = () => {
    dispatch(_updateSubmit(event.event.id))
  }

  const timerComponents = []
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })

  return (
    <div>
      <h5>Time left to Submit</h5>
      {timerComponents.length ? timerComponents : handleSubmit()}
      <h5>Countdown Ends on {event.event.vote_deadline}</h5>
    </div>
  )
}

export default Timer
