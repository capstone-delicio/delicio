import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_EVENT = 'SET_EVENT'

/**
 * ACTION CREATORS
 */
const setEvent = (event) => ({ type: SET_EVENT, event })

/**
 * THUNK CREATORS
 */

export const addEvent =
  (event_name, event_date, event_time) => async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/events`, {
        event_name,
        event_date,
        event_time,
      })
      dispatch(setEvent(data))
    } catch (error) {
      console.log(error)
    }
  }

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_EVENT:
      return action.event
    default:
      return state
  }
}
