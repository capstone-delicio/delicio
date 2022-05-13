import axios from "axios";

const TOKEN = "token";

// Action Types
const GET_FRIENDS = "GET_FRIENDS";
const SET_FRIEND = "SET_FRIENDS";

// Action Creators
const getFriends = (friends) => ({
  type: GET_FRIENDS,
  friends,
});

// Thunk Creators
export const _getFriends = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/friends/${id}`);
  dispatch(getFriends(data));
};

const initialState = {
  friends: [],
  friend: {},
};

// Reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FRIENDS:
      return { ...state, friends: action.friends };
    case SET_FRIEND:
      return { ...state, friend: action.friend };
    default:
      return state;
  }
}
