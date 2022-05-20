import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import history from '../history'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import { updateEventThunk } from '../store'

const FinalEventUpdate = () => {
  const { id } = useParams()
  let history = useHistory()
  const event = useSelector((state) => state.event)
  const dispatch = useDispatch()

  const [formState, setFormState] = useState({
    eventId: event.event.id,
    organizerId: event.event.organizerId,
    event_date: event.event.event_date,
    event_time: event.event.event_time,
  })
  const onChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  const SubmitHandler = async (e) => {
    e.preventDefault()
    console.log('formState', formState)
    dispatch(updateEventThunk(formState))
    history.push('/')
  }

  return (
    <div>
      <div className="container">
        <div className="updateEvent">
          <form onSubmit={(e) => SubmitHandler(e)} name="events">
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <h2 className="event-info">Update Event Date</h2>
              <Grid className="form-group">
                <InputLabel>Event Date:</InputLabel>
                <TextField
                  type="date"
                  className="form-control form-control-lg"
                  name="event_date"
                  defaultValue={event.event_date}
                  onChange={(e) => onChangeHandler(e)}
                />
              </Grid>
              <Grid className="form-group">
                <InputLabel>Event Time:</InputLabel>
                <TextField
                  type="time"
                  className="form-control form-control-lg"
                  name="event_time"
                  defaultValue={event.event_time}
                  onChange={(e) => onChangeHandler(e)}
                />
              </Grid>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                onChange={(e) => SubmitHandler(e)}
              >
                Update Event
              </Button>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  )
}
export default FinalEventUpdate
