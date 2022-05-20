import axios from "axios";

// Action Types
const GET_ALL_USERS = "GET_ALL_USERS";
const GET_SINGLE_USER = "GET_SINGLE_USER";

// Action Creators
const getAllUsers = (users) => ({
  type: GET_ALL_USERS,
  users,
});

const getSingleUser = (user) => ({
  type: GET_SINGLE_USER,
  user,
});

// Thunk Creators
export const _getAllUsers = () => async (dispatch) => {
  const { data } = await axios.get("/api/users");
  dispatch(getAllUsers(data));
};

export const _getSingleUser = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/users/${id}`);
  dispatch(getSingleUser(data));
};

const initialState = {
  users: [],
  user: {},
};

// Reducer
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.users };
    case GET_SINGLE_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
