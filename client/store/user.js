import axios from "axios";

// Action Types
const GET_ALL_USERS = "GET_ALL_USERS";

// Action Creators
const getAllUsers = (users) => ({
  type: GET_ALL_USERS,
  users,
});

// Thunk Creators
export const _getAllUsers = () => async (dispatch) => {
  const { data } = await axios.get("/api/users");
  dispatch(getAllUsers(data));
};

const initialState = {
  users: [],
};

// Reducer
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.users };
    default:
      return state;
  }
}

//C: can be removed if not needed
// /**
//  * ACTION TYPES
//  */
// const GET_PROFILE = 'GET_PROFILE'
// const UPDATE_PROFILE = 'UPDATE_PROFILE'

// /**
//  * INITIAL STATE
//  */
// const profile = {}

// /**
//  * ACTION CREATORS
//  */
// const getProfile = (prof) => ({
//   type: GET_PROFILE,
//   prof,
// })
// const updateProfile = (prof) => ({
//   type: UPDATE_PROFILE,
//   prof,
// })
// /**
//  * THUNK CREATORS
//  */
// export const getUser = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get('/auth/me', {
//       headers: { authorization: localStorage.getItem('token') },
//     })
//     dispatch(getProfile(data))
//   } catch (err) {
//     console.error(err)
//   }
// }

// // export const getUser = (id) => {
// //   return async (dispatch) => {
// //     try {
// //       console.log('this is id', id)
// //       const { data } = await axios.get(`/api/users/${id}`)
// //       dispatch(getProfile(data))
// //     } catch (err) {
// //       console.error(err)
// //     }
// //   }
// // }

// export const update = (prof) => async (dispatch) => {
//   try {
//     console.log('this is prof', prof)
//     const { data } = await axios.put(`/api/users/${prof.id}`, prof)
//     dispatch(updateProfile(data))
//   } catch (error) {
//     console.error(error)
//   }
// }

// /**
//  * REDUCER
//  */
// export default function (state = profile, action) {
//   switch (action.type) {
//     case GET_PROFILE:
//       return { ...action.prof }
//     case UPDATE_PROFILE:
//       return state.map((prof) =>
//         prof.id === action.prof.id ? action.prof : prof
//       )
//     default:
//       return state
//   }
// }
