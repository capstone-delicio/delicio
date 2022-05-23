import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import history from '../history';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import yelp, { _getRestPhotos, _getRests, _getSingleRest } from '../store/yelp';
import { updateEventThunk } from '../store';

const FinalEventUpdate = () => {
  // const { id } = useParams();
  let history = useHistory();
  const event = useSelector((state) => state.event);
  const user = useSelector((state) => state.auth);
  const yelp = useSelector((state) => state.yelp);
  const dispatch = useDispatch();

  const [displayDate, setDisplayDate] = useState(null);
  const [displayTime, setDisplayTime] = useState(null);

  const [formState, setFormState] = useState({
    id: user.id,
    first_name: user.first_name,
    eventId: event.event.id,
    organizerId: event.event.organizerId,
    event_date: event.event.event_date,
    event_time: event.event.event_time,
  });

  useEffect(() => {
    setDisplayDate(event.event.event_date);
    setDisplayTime(event.event.event_time);
  }, [event.event]);

  const onChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log('formState', formState);
    dispatch(updateEventThunk(formState));
    history.push('/');
  };
  // const dateTest = event.event.event_date
  // console.log("dateTest", dateTest)
  // console.log(typeof dateTest)
  return (
    <div>
      {event.event ? (
        // <h1>{typeof formState.event_date}</h1>

        <div className="container">
          <div className="updateEvent">
            <form onSubmit={(e) => SubmitHandler(e)} name="events">
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                direction="column">
                <h2 className="event-info">Hey, {user.first_name}!</h2>
                <h3>{`Let's update your ${event.event.event_name}!`}</h3>

                <div class="border">
                  <h2>Winning Restaurant</h2>
                  <h2>{yelp.rest.name}</h2>
                  <h4>Price: {yelp.rest.price}</h4>
                  <img width="400" height="400" src={yelp.rest.image_url} />
                  <Grid className="form-group">
                    <InputLabel>Event Date:</InputLabel>
                    {displayDate === event.event.event_date ? (
                      <TextField
                        type="date"
                        className="form-control form-control-lg"
                        name="event_date"
                        defaultValue={displayDate}
                        onChange={(e) => onChangeHandler(e)}
                      />
                    ) : (
                      displayDate
                    )}
                  </Grid>
                  <Grid className="form-group">
                    <InputLabel>Event Time:</InputLabel>
                    {displayTime === event.event.event_time ? (
                      <TextField
                        type="time"
                        className="form-control form-control-lg"
                        name="event_time"
                        defaultValue={displayTime}
                        onChange={(e) => onChangeHandler(e)}
                      />
                    ) : null}
                  </Grid>

                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onChange={(e) => SubmitHandler(e)}>
                    Update Event
                  </Button>
                </div>
              </Grid>
            </form>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};
export default FinalEventUpdate;
