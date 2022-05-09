import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { authenticate } from '../store'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import Button from '@material-ui/core/Button'

const Login = () => {
  const dispatch = useDispatch()

  const { error } = useSelector((state) => {
    return state.auth
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const formName = event.target.name
    const email = event.target.email.value
    const password = event.target.password.value
    dispatch(authenticate(email, password, formName))
  }

  return (
    <div id="logins">
      <form id="loginForm" onSubmit={handleSubmit} name="login">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <TextField name="email" label="Email" type="text" />
          </Grid>
          <Grid item>
            <TextField name="password" label="Password" type="password" />
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>

          {/*<Grid container justifyContent="center">
          <label htmlFor="email">
            <small>Email: </small>
          </label>
          <input name="email" type="text" />
        </Grid>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>*/}

          <p>
            Dont have an account? <Link to="/signup">Sign Up</Link>
          </p>
          {error && error.response && (
            <div style={{ color: 'red' }}> {error.response.data} </div>
          )}
        </Grid>
      </form>
    </div>
  )
}

export default Login
