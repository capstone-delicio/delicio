import React from 'react'
import { connect, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

// useSelector((state) => {
//   return state.first_name
// })

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { first_name } = props

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <h3>Welcome {first_name}!</h3>
        <h3>Do you want to?</h3>
        <Button variant="contained" color="primary" href="/questions">
          Find Restaurants
        </Button>
        <br />
        <br />
        <Button variant="contained" color="primary" href="/eventinput">
          Plan with Friends
        </Button>
      </Grid>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    first_name: state.auth.first_name,
  }
}

export default connect(mapState)(Home)
