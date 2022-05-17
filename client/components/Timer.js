import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Timer() {
  const dispatch = useDispatch()
  const event = useSelector((state) => {
    return state.event
  })
  // console.log('eventtimer', event.event.vote_deadline)

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    // console.log(year)
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
  const [year] = useState(new Date().getFullYear())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })
  const submit = !event.event.isScheduled
  const timerComponents = []
  console.log('schedule UP', event.event.isScheduled)
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
  // console.log('scheduledown', event.event.isScheduled)

  return (
    <div>
      <h5>Countdown</h5>
      {timerComponents.length ? timerComponents : submit && <p>TIME IS UP</p>}
    </div>
  )
}

export default Timer
