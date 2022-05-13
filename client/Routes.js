import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Questions from "./components/Questions";
import Home from "./components/Home";
import { me } from "./store";
import EditUser from "./components/EditUser";
import EventInput from "./components/EventInput";
import SwipePage from "./components/SwipePage";
import FriendsSelect from "./components/FriendsSelect"
import SingleRestaurant from './components/SingleRestaurant'


/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/questions" component={Questions} />

            <Route path="/edituser" component={EditUser} />

            <Route path="/card" component={SwipePage} />

            <Route path="/eventinput" component={EventInput} />
            <Route path="/singlerestaurant" component={SingleRestaurant} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
