import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { get } from "../store/";
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from "react-router-dom";

const SingleRestaurant = () => {

    return (
      <div className="single-product-page">
        <div key={restraunt.id}>
          <img className="restraunt-img" src={restraunt.imageUrl} />
        </div>

        <div className="single-restraunt-page-info">
          <h3>{restraunt.name}</h3>
          <p>{restraunt.description}</p>
          <p>{restraunt.pricerange}</p>

            <button onClick={this.handleAddToCart} type="submit">
              Add To Cart
            </button>
        </div>
      </div>
    )
}
export default SingleRestaurant
