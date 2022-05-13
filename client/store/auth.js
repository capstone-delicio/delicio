import axios from 'axios'
import history from '../history'

const TOKEN = 'token'

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH'
const UPDATE_USER = 'UPDATE_USER'
/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth })

const updateUser = (user) => ({ type: UPDATE_USER, user })

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token,
      },
    })
    return dispatch(setAuth(res.data))
  }
}

export const updateUserThunk = (user) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/users/${user.id}`, user)
    dispatch(updateUser(data))
  } catch (error) {
    console.log(error)
  }
}

export const authenticate = (email, password, method) => async (dispatch) => {
  try {
    // console.log(method)

    const res = await axios.post(`/auth/${method}`, { email, password })
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
  } catch (authError) {
    return dispatch(setAuth({ error: authError }))
  }
}

export const authenticateSignUp =
  (first_name, last_name, phone_number, email, password, method) =>
  async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, {
        first_name,
        last_name,
        phone_number,
        email,
        password,
      })
      window.localStorage.setItem(TOKEN, res.data.token)
      dispatch(me())
    } catch (authError) {
      return dispatch(setAuth({ error: authError }))
    }
  }

export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  history.push('/login')
  return {
    type: SET_AUTH,
    auth: {},
  }
}

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth
    case UPDATE_USER:
      return { ...state, ...action.user }
    default:
      return state
  }
}
