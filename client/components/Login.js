import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authenticate } from '../store';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Grid,
  TextField,
  Button,
  Paper,
  Avatar,
  makeStyles,
  Typography,
} from '@material-ui/core';

// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

const Login = () => {
  const useStyles = makeStyles((theme) => ({
    paperStyle: {
      padding: 20,
      maxHeight: 650,
      width: 300,
      margin: '20px auto',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: { backgroundColor: '#64c0b7' },
    spacing: { margin: theme.spacing(2) },
  }));

  const classes = useStyles();

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
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column">
        <form id="loginForm" onSubmit={handleSubmit} name="login">
          <Paper elevation={10} className={classes.paperStyle}>
            <Grid item align="center">
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                className={classes.spacing}>
                Sign In
              </Typography>
            </Grid>
            <Grid item>
              <TextField name="email" label="Email" type="text" />
            </Grid>
            <Grid item>
              <TextField name="password" label="Password" type="password" />
            </Grid>
            <Button
              className={classes.spacing}
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
        </form>
      </Grid>
    </div>
  );
};

export default Login;
