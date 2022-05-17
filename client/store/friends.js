import axios from "axios";

const TOKEN = "token";

// Action Types
const GET_FRIENDS = "GET_FRIENDS";
const SET_SELECTED_FRIENDS = "SET_SELECTED_FRIENDS";
const ADD_FRIEND = "ADD FRIEND";

// Action Creators
const getFriends = (friends) => ({
  type: GET_FRIENDS,
  friends,
});

const setSelectedFriends = (selectedFriends) => ({
  type: SET_SELECTED_FRIENDS,
  selectedFriends,
});

const addFriend = (person) => ({
  type: ADD_FRIEND,
  person,
});

// Thunk Creators
export const _getFriends = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/friends/${id}`);
  dispatch(getFriends(data));
};

export const _setSelectedFriends = (selectedFriends) => (dispatch) => {
  dispatch(setSelectedFriends(selectedFriends));
};

export const _addFriend = (userId, friendId) => async (dispatch) => {
  const { data } = await axios.post("/api/friends/update", {
    userId,
    friendId,
  });
  dispatch(addFriend(data));
};

const initialState = {
  friends: [],
  selectedFriends: [],
  addedFriend: {},
};

// Reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FRIENDS:
      return { ...state, friends: action.friends };
    case SET_SELECTED_FRIENDS:
      return { ...state, setSelectedFriends: action.selectedFriends };
    case ADD_FRIEND:
      console.log(action.person);
      return { ...state, addedFriend: action.person };
    default:
      return state;
  }
}
