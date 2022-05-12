import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { eventInput } from '../store'

const EventInput = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const event_name = e.target.event_name
    const event_date = e.target.event_date.value
    const event_time = e.target.event_time.value
    dispatch(addEvent(event_name, event_date, event_time))
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
          <h3>hello from event input</h3>
          <Grid item>
            <TextField name="event_name" label="Event Name" type="text" />
          </Grid>
          <Grid item>
            <TextField name="event_date" label="Event Date" type="text" />
          </Grid>
          <Grid item>
            <TextField name="event_time" label="Event Time" type="text" />
          </Grid>
          <Button variant="contained" color="primary" href="/friends">
            Select Your Friends
          </Button>
        </Grid>
      </form>
    </div>
  )
}
export default EventInput
