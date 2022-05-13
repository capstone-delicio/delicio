import axios from 'axios'

const TOKEN = 'token'

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
  (organizerId, event_name, event_date, event_time, vote_deadline) =>
  async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN)
      if (token) {
        console.log(token)
        const { data } = await axios.post(
          `/api/events`,
          { organizerId, event_name, event_date, event_time, vote_deadline },
          {
            headers: {
              authorization: token,
            },
          }
        )
        dispatch(createEvent(data))
      }
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