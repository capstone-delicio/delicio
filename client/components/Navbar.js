import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

// const useStyles = makeStyles((theme) => ({
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }))

const Navbar = ({ handleClick, isLoggedIn }) => (
  <AppBar position="static">
    <Toolbar>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <h1>DELICIO</h1>

          <nav>
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                </Link>
                <Link
                  to="/edituser"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Users Profile
                </Link>

                <Link
                  // to="/events"
                  to = "/finaleventupdate"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Events
                </Link>

                <a
                  href="#"
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={handleClick}
                >
                  Logout
                </a>
              </div>
            ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>
          <hr />
        </Box>
      </div>
    </Toolbar>
  </AppBar>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
