import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authenticate } from '../store';
import { Grid, TextField, Button, Paper, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: '55vh',
    width: 300,
    margin: '20px auto',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const avatarStyle = { backgroundColor: 'blue' };

  const btnStyle = { margin: '8px 0' };

  const dispatch = useDispatch();

  const { error } = useSelector((state) => {
    return state.auth;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formName = event.target.name;
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(authenticate(email, password, formName));
  };

  return (
    <div id="logins">
      <form id="loginForm" onSubmit={handleSubmit} name="login">
        {/* <Grid> */}
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column">
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign In</h2>
            </Grid>
            <Grid item>
              <TextField name="email" label="Email" type="text" />
            </Grid>
            <Grid item>
              <TextField name="password" label="Password" type="password" />
            </Grid>
            <Button
              style={btnStyle}
              variant="contained"
              color="primary"
              type="submit">
              Login
            </Button>
            <br />
            <br />
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
            {error && error.response && (
              <div style={{ color: 'red' }}> {error.response.data} </div>
            )}
          </Paper>
        </Grid>
        {/* </Grid> */}
      </form>
    </div>
  );
};

export default Login;
