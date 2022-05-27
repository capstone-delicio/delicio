import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useState, useEffect, useRef } from 'react';
import yelp, { _getRestPhotos, _getRests, _getSingleRest } from '../store/yelp';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
  CardMedia,
  CardActions,
} from '@material-ui/core';
import theme from '../theme';

const SingleRestaurant = (props) => {
  const useStyle = makeStyles((theme) => ({
    padding: {
      padding: theme.spacing(3),
      margin: 10,
    },
    card: {
      maxWidth: '90vh',
      margin: 'auto',
      transition: '0.3s',
      boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
      '&:hover': {
        boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
      },
    },
    media: {
      paddingTop: '56.25%',
    },
    content: {
      textAlign: 'left',
      padding: theme.spacing(3),
    },
    divider: {
      margin: `${theme.spacing(2)}px 0`,
    },
    heading: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    subheading: {
      lineHeight: 1.8,
    },
  }));

  const classes = useStyle();
  const dispatch = useDispatch();
  const yelp = useSelector((state) => state.yelp);
  const eventStore = useSelector((state) => state.event);

  return (
    <div>
      <Container className={classes.padding}>
        <Card className={classes.card}>
          {Object.keys(yelp.rest).length > 0 ? (
            // <div className="container">
            <CardContent className={classes.content}>
              {/* <div className="restaurant"></div> */}
              <Typography variant={'h6'}>
                {`Details for ${eventStore.event.event_name}`}
              </Typography>
              <Divider className={classes.divider} />
              <Typography
                className={classes.heading}
                variant={'h5'}
                gutterBottom>
                {`${yelp.rest.name}`}
              </Typography>
              <Typography
                className={'classes.subheading'}
                variant={'subtitle1'}>
                {`Date & Time: ${eventStore.event.event_date} ${eventStore.event.event_time}`}
                <br />
                {`Location:
            ${yelp.rest.location.display_address[0]}, ${yelp.rest.location.display_address[1]}`}
                <br />
                Price: {yelp.rest.price}
              </Typography>
              <br />
              <CardMedia
                className={classes.media}
                image={yelp.rest.image_url}
              />
              <br />
              {/* <img src={yelp.rest.image_url} /> */}
              <CardActions>
                <Button
                  variant="outlined"
                  color="secondary"
                  target="_blank"
                  href={encodeURI(
                    `https://www.yelp.com/biz/${yelp.rest.alias}`,
                  )}>
                  Check it out on Yelp
                </Button>
              </CardActions>
            </CardContent>
          ) : (
            // </div>
            <div>Loading...</div>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default SingleRestaurant;
