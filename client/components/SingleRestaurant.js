import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useState, useEffect, useRef } from 'react';
import yelp, { _getRestPhotos, _getRests, _getSingleRest } from '../store/yelp';
import { useSelector, useDispatch } from 'react-redux';

const SingleRestaurant = (props) => {
  const dispatch = useDispatch();
  const yelp = useSelector((state) => state.yelp);
  const eventStore = useSelector((state) => state.event);

  return (
    <div>
      {Object.keys(yelp.rest).length > 0 ? (
        <div className="container">
          <div className="restaurant"></div>
          <h2>{`Here are the details for ${eventStore.event.event_name}`}</h2>
          <h2>{`${yelp.rest.name}`}</h2>
          <h5>{`Date and Time: ${eventStore.event.event_date} ${eventStore.event.event_time}`}</h5>
          <h5>
            {`Location:
            ${yelp.rest.location.display_address[0]}, ${yelp.rest.location.display_address[1]}`}
          </h5>
          <h4>Price: {yelp.rest.price}</h4>
          <img src={yelp.rest.image_url} />
          <h4>Populer Dish: {yelp.rest.photos}</h4>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SingleRestaurant;
