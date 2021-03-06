import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import Questions from './components/Questions';
import Home from './components/Home';
import { me } from './store';
import EditUser from './components/EditUser';
import EventInput from './components/EventInput';
import SwipePage from './components/SwipePage';
import SearchUsers from './components/SearchUsers';
import SingleRestaurant from './components/SingleRestaurant';
import Timer from './components/Timer';
import Events from './components/Events';
import EndSwipeStory from './components/EndSwipeStory';
import FinalEventUpdate from './components/FinalEventUpdate';

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
            <Route path="/endswipestory" component={EndSwipeStory} />
            <Route path="/edituser" component={EditUser} />
            <Route path="/timer" component={Timer} />
            <Route path="/card" component={SwipePage} />
            <Route path="/eventinput" component={EventInput} />
            <Route path="/finaleventupdate" component={FinalEventUpdate} />

            <Route path="/search-friends" component={SearchUsers} />
            <Route path="/singlerestaurant" component={SingleRestaurant} />
            <Route path="/events" component={Events} />

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
