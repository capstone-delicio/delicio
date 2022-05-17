import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React, { useState, useEffect, useRef } from 'react'
import yelp, { _getRestPhotos, _getRests, _getSingleRest } from '../store/yelp'
import { useSelector, useDispatch } from 'react-redux'

const SingleRestaurant = (props) => {
  const dispatch = useDispatch()
  const yelp = useSelector((state) => state.yelp)

  useEffect(() => {
    dispatch(_getSingleRest('okaqMJEoHfHblpKz9Q-CMA'))
  }, [])

  return (
    <div>
      <div className="container">
        <div className="restaurant"></div>
        <h2>Restaurant</h2>
        <h2>{yelp.rest.name}</h2>
        <h4>Price: {yelp.rest.price}</h4>
        <img src={yelp.rest.image_url} />
        <h4>Location: {yelp.rest.adress}</h4>
        <h4>Populer Dish: {yelp.rest.photos}</h4>
      </div>
    </div>
  )
}

export default SingleRestaurant
