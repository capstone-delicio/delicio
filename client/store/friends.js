import axios from "axios";

const TOKEN = "token";

// Action Types
const GET_FRIENDS = "GET_FRIENDS";
const SET_SELECTED_FRIENDS = "SET_SELECTED_FRIENDS";

// Action Creators
const getFriends = (friends) => ({
  type: GET_FRIENDS,
  friends,
});

const setSelectedFriends = (selectedFriends) => ({
  type: SET_SELECTED_FRIENDS,
  selectedFriends,
});

// Thunk Creators
export const _getFriends = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/friends/${id}`);
  dispatch(getFriends(data));
};

export const _setSelectedFriends = (selectedFriends) => (dispatch) => {
  dispatch(setSelectedFriends(selectedFriends));
};

const initialState = {
  friends: [],
  selectedFriends: [],
};

// Reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FRIENDS:
      return { ...state, friends: action.friends };
    case SET_SELECTED_FRIENDS:
      return { ...state, setSelectedFriends: action.selectedFriends };
    default:
      return state;
  }
}
