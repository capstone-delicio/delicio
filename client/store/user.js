import axios from 'axios'

// Action Types
const GET_ALL_USERS = 'GET_ALL_USERS'

// Action Creators
const getAllUsers = (users) => ({
  type: GET_ALL_USERS,
  users,
})

// Thunk Creators
export const _getAllUsers = () => async (dispatch) => {
  const { data } = await axios.get('/api/users')
  dispatch(getAllUsers(data))
}

const initialState = {
  users: [],
}

// Reducer
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.users }
    default:
      return state
  }
}
