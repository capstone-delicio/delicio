import axios from 'axios'

/**
 * ACTION TYPES
 */
const CREATE_EVENT = 'CREATE_EVENT'

/**
 * ACTION CREATORS
 */
const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    event,
  }
}

/**
 * THUNK CREATORS
 */
export const addEvent =
  (event_name, event_date, event_time, vote_deadline) => async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/events`, {
        event_name,
        event_date,
        event_time,
        vote_deadline,
      })
      dispatch(createEvent(data))
    } catch (error) {
      console.log(error)
    }
  }

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case CREATE_EVENT:
      return [...state, action.event]
    default:
      return state
  }
}
