import axios from 'axios'
/**
 * ACTION TYPES
 */
const GET_PROFILE = 'GET_PROFILE'
const UPDATE_PROFILE = 'UPDATE_PROFILE'

/**
 * INITIAL STATE
 */
const profile = {}

/**
 * ACTION CREATORS
 */
const getProfile = (prof) => ({
  type: GET_PROFILE,
  prof,
})
const updateProfile = (prof) => ({
  type: UPDATE_PROFILE,
  prof,
})
/**
 * THUNK CREATORS
 */
//  export const me = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get("/auth/me", {
//       headers: { authorization: localStorage.getItem("token") },
//     });
//     dispatch(getProfile(data));
//   } catch (err) {
//     console.error(err);
//   }
// };
export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`)
    console.log(data)

    dispatch(getProfile(data))
  } catch (err) {
    console.error(err)
  }
}
// export const getUser = (id) => {
//   return async (dispatch) => {
//     const { data } = await axios.get(`/api/users/${id}`)
//     dispatch(getProfile(data))
//   }
// }
export const update = (user) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/users/${user.id}/profile`, user)
    dispatch(updateProfile(data))
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */
export default function (state = profile, action) {
  switch (action.type) {
    case GET_PROFILE:
      return { ...action.prof }
    case UPDATE_PROFILE:
      return { ...action.prof }
    default:
      return state
  }
}
