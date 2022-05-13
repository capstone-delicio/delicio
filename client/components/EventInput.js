import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addEvent } from '../store'
import history from '../history'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const EventInput = () => {
  const [dateError, setDateError] = useState('')

  const dispatch = useDispatch()

  const user = useSelector((state) => {
    return state.auth
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const organizerId = user.id
    const event_name = e.target.event_name.value
    const event_date = e.target.event_date.value
    const event_time = e.target.event_time.value
    const vote_deadline = e.target.vote_deadline.value
    if (vote_deadline < event_date) {
      dispatch(
        addEvent(organizerId, event_name, event_date, event_time, vote_deadline)
      )
      history.push('/questions')
    }
    if (vote_deadline > event_date) {
      setDateError('Deadline must be before event date')
    }
  }

  return (
    <div>
      <form id="eventInputForm" onSubmit={handleSubmit} name="eventInput">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <h3>Please fill in the following information</h3>
          <Grid item>
            <p>Event Name:</p>
            <TextField name="event_name" type="text" />
          </Grid>

          <Grid item>
            <p>Event Date:</p>
            <TextField name="event_date" type="date" />
          </Grid>

          <Grid item>
            <p>Event Time:</p>
            <TextField name="event_time" type="time" />
          </Grid>

          <Grid item>
            <p>Voting Deadline:</p>
            <TextField name="vote_deadline" type="date" />
          </Grid>
          <div style={{ color: 'red' }}>{dateError}</div>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br />
        </Grid>
      </form>
    </div>
  )
}

export default EventInput