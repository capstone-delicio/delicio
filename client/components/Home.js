import React from 'react'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

/**
 * COMPONENT
 */
const Home = () => {
  const firstName = useSelector((state) => {
    return state.auth.first_name
  })

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <h3>Welcome {firstName}!</h3>
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
export default Home
