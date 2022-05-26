import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { _getRestPhotos, _getRests } from '../store/yelp';
import Loading from './Loading';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {
  TextField,
  Grid,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Tooltip,
  Box,
  Stepper,
  Step,
  StepLabel,
  makeStyles,
  Container,
  Card,
  CardHeader,
} from '@material-ui/core';
import { _addEventPicks } from '../store/eventPicks';

const Questions = () => {
  const useStyle = makeStyles((theme) => ({
    padding: {
      padding: theme.spacing(3),
    },
    header: {
      textAlign: 'center',
    },
    formControl: {
      width: 200,
      // fontSize: 20,

      // textAlign: 'center',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    addSubBtn: {
      fontSize: 20,
    },
    priceForm: {
      width: 150,
    },
  }));

  const classes = useStyle();

  const steps = ['Event Information', 'Restaurant Preferences', 'Swipe'];

  const [stateLimit, setStateLimit] = useState(1);
  const IncNum = () => {
    if (stateLimit < 30) setStateLimit(stateLimit + 1);
    else {
      alert('max limit reached');
    }
  };
  const DecNum = () => {
    if (stateLimit > 1) setStateLimit(stateLimit - 1);
    else {
      setStateLimit(1);
      alert('min limit reached');
    }
  };
  const [price, setPrice] = useState('');
  // const [stateLimit, setStateLimit] = useState(1);
  const [receivedPhotos, setReceivedPhotos] = useState(null);

  const dispatch = useDispatch();
  // state.yelp = what is inside combined reducer

  const event = useSelector((state) => state.event);
  const friends = useSelector((state) => state.friends);
  const yelp = useSelector((state) => state.yelp);
  const user = useSelector((state) => {
    return state.auth;
  });

  const isMounted = useRef(false);
  let history = useHistory();

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const location = e.target.location.value;

    // const limit = e.target.limit.value;
    const limit = stateLimit;
    const price = e.target.price.value;
    const cuisine = e.target.cuisine.value;

    setStateLimit(limit);
    setReceivedPhotos(false);

    dispatch(_getRests({ location, limit, price, cuisine }));
  };

  useEffect(() => {
    // now go thru restaurant list and scrape for pics

    if (isMounted.current) {
      const restsAlias = yelp.rests.map((rest) => {
        return { alias: rest.alias, id: rest.id };
      });

      // pass in array of restaurants
      dispatch(_getRestPhotos(restsAlias));

      // history.push("/card");
    } else {
      isMounted.current = true;
    }
  }, [yelp.rests]);

  // wait until photos array has all photos before pushing to /card
  useEffect(() => {
    // const expectedNumPhotos = Number(stateLimit) * 3;
    if (yelp.restPhotos.length > 0) {
      setReceivedPhotos(true);

      addEventPicksDb();

      history.push('/card');
    }
  }, [yelp.restPhotos]);

  function addEventPicksDb() {
    let eventId = event.event.id;
    const attendees = [
      ...friends.setSelectedFriends,
      { name: `${user.first_name} ${user.last_name}`, id: user.id },
    ];

    console.log('attendees', attendees);

    attendees.forEach((friend) => {
      // console.log(friend.id);
      let userId = friend.id;

      yelp.restPhotos.map((photo) => {
        // return console.log("restPhotosId", photo.id);
        let restaurantId = photo.id;
        let restaurantAlias = photo.alias;
        let restaurant_picUrl = photo.imgSrc;
        let picDescription = photo.imgDesc;
        dispatch(
          _addEventPicks(
            eventId,
            userId,
            restaurantId,
            restaurantAlias,
            restaurant_picUrl,
            picDescription,
          ),
        );
      });
    });
  }

  return (
    <div id="questions">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* <Container className={classes.padding}> */}
      {/* <Card className={classes.padding}> */}
      <CardHeader
        className={classes.header}
        title="Fill in the following information"></CardHeader>

      <form id="questionsForm" onSubmit={handleSubmit} name="questions">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column">
          <Grid item>
            <TextField
              name="location"
              label="What is your location?"
              type="text"
              className={classes.formControl}
            />
          </Grid>

          <Grid item>
            <TextField
              name="cuisine"
              label="Cuisine Preference?"
              type="text"
              className={classes.formControl}
            />
          </Grid>
          <br />
          <InputLabel># of Restaurant Selections?</InputLabel>
          <br />

          <Grid item className={classes.addSubBtn}>
            <Tooltip title="Minus">
              <Button onClick={DecNum}>
                <RemoveIcon />
              </Button>
            </Tooltip>
            {stateLimit}
            <Tooltip title="Add">
              <Button onClick={IncNum}>
                <AddIcon />
              </Button>
            </Tooltip>
          </Grid>

          <Grid>
            {/* <InputLabel id="price">Price</InputLabel> */}
            <InputLabel>Pricepoint:</InputLabel>
            <Select
              // labelId="price"
              // id="demo-simple-select"
              className={classes.priceForm}
              name="price"
              value={price}
              label="Price"
              onChange={handleChange}>
              <MenuItem value={1}>$</MenuItem>
              <MenuItem value={2}>$$</MenuItem>
              <MenuItem value={3}>$$$</MenuItem>
              <MenuItem value={4}>$$$$</MenuItem>
            </Select>
          </Grid>
          <Grid />
          <Grid />

          {receivedPhotos ? null : <Loading data={receivedPhotos} />}

          {/* <Button variant="contained" color="primary" type="submit">
            Next
          </Button> */}
        </Grid>
      </form>
      {/* </Card> */}
      {/* </Container> */}
    </div>
  );
};

export default Questions;
