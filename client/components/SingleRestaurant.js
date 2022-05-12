import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React, { useState, useEffect } from "react";
import { getRests, getSingleRest } from "../store/yelp";
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

const SingleRestaurant = () => {
  const { id } = useParams()
  let history = useHistory()
  const restraunt = useSelector(state=>state.rest)
  const dispatch = useDispatch()

  const [formState, setFormState] = useState({
      id:restraunt.id,
  })

  const SubmitHandler = async (e) => {
      e.preventDefault()
      dispatch(_getSingleRest(formState))
      history.push('/')

  }

    return (
      <div className="single-product-page">
        <div key={restraunt.id}>
          <img className="restraunt-img" src={restraunt.imageUrl} />
        </div>

        <div className="single-restraunt-page-info">
          <h3>{restraunt.name}</h3>
          <p>{restraunt.description}</p>
          <p>{restraunt.pricerange}</p>

        </div>
      </div>
    )
}
export default SingleRestaurant
