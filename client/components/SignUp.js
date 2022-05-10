import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authenticateSignUp } from "../store";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Signup = () => {
  const [passwordError, setPasswordError] = useState("");
  //C: I see that useDispatch hook is used here. Great!
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
          formName
        )
      );
    }
    if (confirmPassword !== password) {
      setPasswordError("Passwords do not match");
    }
  };
  //C: I like that you chose to check for matching passwords. Good work!

  return (
    <div id="signups">
      <form id="signupForm" onSubmit={handleSubmit} name="signup">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <TextField name="first_name" label="First Name" type="text" />
          </Grid>
          <Grid item>
            <TextField name="last_name" label="Last Name" type="text" />
          </Grid>
          <Grid item>
            <TextField name="phone_number" label="Phone Number" type="text" />
          </Grid>
          <Grid item>
            <TextField name="email" label="Email" type="text" />
          </Grid>
          <Grid item>
            <TextField name="password" label="Password" type="password" />
          </Grid>
          <Grid item>
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Sign Up
          </Button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>

          {error && error.response && (
            <div style={{ color: "red" }}> {error.response.data} </div>
          )}
          <div style={{ color: "red" }}>{passwordError}</div>
        </Grid>
      </form>
    </div>
  );
};

export default Signup;
