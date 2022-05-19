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
        <br />
        <h3>Welcome {firstName}!</h3>
        <h3>Let's plan a event with your friends</h3>
        <br />
        <br />
        <Button variant="contained" color="primary" href="/eventinput">
          Plan
        </Button>
      </Grid>
    </div>
  )
}
export default Home
