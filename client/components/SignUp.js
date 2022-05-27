import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authenticateSignUp } from '../store';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Grid,
  TextField,
  Button,
  makeStyles,
  Paper,
  Typography,
  Avatar,
} from '@material-ui/core';

const Signup = () => {
  const useStyles = makeStyles((theme) => ({
    paperStyle: {
      padding: 20,
      height: 700,
      width: 350,
      margin: '20px auto',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: { backgroundColor: '#64c0b7' },
    spacing: { margin: theme.spacing(2) },
  }));

  const classes = useStyles();
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();

  const { error } = useSelector((state) => {
    return state.auth;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formName = e.target.name;
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const phone_number = e.target.phone_number.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (confirmPassword === password) {
      dispatch(
        authenticateSignUp(
          first_name,
          last_name,
          phone_number,
          email,
          password,
          formName,
        ),
      );
    }
    if (confirmPassword !== password) {
      setPasswordError('Passwords do not match');
    }
  };

  return (
    <div id="signups">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column">
        <form id="signupForm" onSubmit={handleSubmit} name="signup">
          <Paper elevation={10} className={classes.paperStyle}>
            <Grid item align="center">
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                className={classes.spacing}>
                Sign Up
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                name="first_name"
                label="First Name"
                type="text"
                autoComplete="first-name"
              />
            </Grid>
            <Grid item>
              <TextField
                name="last_name"
                label="Last Name"
                type="text"
                autoComplete="last-name"
              />
            </Grid>
            <Grid item>
              <TextField
                name="phone_number"
                label="Phone Number"
                type="text"
                autoComplete="phone"
              />
            </Grid>
            <Grid item>
              <TextField
                name="email"
                label="Email"
                type="text"
                autoComplete="email"
              />
            </Grid>
            <Grid item>
              <TextField
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item>
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete="confirm-password"
              />
            </Grid>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.spacing}>
              Sign Up
            </Button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>

            {error && error.response && (
              <div style={{ color: 'red' }}> {error.response.data} </div>
            )}
            <div style={{ color: 'red' }}>{passwordError}</div>
          </Paper>
        </form>
      </Grid>
    </div>
  );
};

export default Signup;
