import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React, { useState, useEffect } from "react";
import { getSingleRest } from "../store/yelp";
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

const SingleRestaurant = () => {

  const rest = useSelector(state=>state.rest)

  useEffect(() => {
    props.getSingleRest(props.match.params.rest.id);
  }, []);
  const dispatch = useDispatch()

    return (

      <div className="single-restaurant-page">
        <h1>hello from single rest</h1>
        <div key={rest.id}>
          <img className="restraunt-img" src={restaurant.imageUrl} />
        </div>

        <div className="single-restaurant-page-info">
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
          <p>{restaurant.pricerange}</p>

        </div>
      </div>
    )
}
export default SingleRestaurant
