import axios from 'axios'

const TOKEN = 'token'

// ACTION TYPES
const ADD_EVENTPICKS = 'ADD_EVENTPICKS'
const UPDATE_EVENTPICKS = 'UPDATE_EVENTPICKS'
const UPDATE_SUBMIT = 'UPDATE_SUBMIT'

// ACTION CREATORS
const addEventPicks = (event) => ({
  type: ADD_EVENTPICKS,
  event,
})

const updateEventPicks = (event) => ({
  type: UPDATE_EVENTPICKS,
  event,
})

const updateSubmit = (event) => ({
  type: UPDATE_SUBMIT,
  event,
})

// THUNK
export const _addEventPicks =
  (
    eventId,
    userId,
    restaurantId,
    restaurantAlias,
    restaurant_picUrl,
    picDescription
  ) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        `api/eventpicks`,
        {
          eventId,
          userId,
          restaurantId,
          restaurantAlias,
          restaurant_picUrl,
          picDescription,
        }
        // {
        //   headers: {
        //     authorization: token,
        //   },
        // }
      )
      dispatch(addEventPicks(data))
    } catch (err) {
      console.error(err)
    }
  }

export const _updateEventPicks =
  (eventId, restaurant_picUrl, userId) => async (dispatch) => {
    console.log('inside thunk', eventId, restaurant_picUrl, userId)
    try {
      const updatePicks = await axios.put(`/api/eventpicks/update`, {
        eventId,
        restaurant_picUrl,
        userId,
      })

      dispatch(updateEventPicks(updatePicks))
    } catch (err) {
      console.error(err)
    }
  }

export const _updateSubmit = (eventId) => async (dispatch) => {
  try {
    const submit = await axios.put(`/api/eventpicks/submit`, {
      eventId,
    })

    dispatch(updateSubmit(submit))
  } catch (err) {
    console.error(err)
  }
}

const initialState = {
  eventPicks: {},
}

// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EVENTPICKS:
      return { ...state, eventPicks: action.event }
    case UPDATE_EVENTPICKS:
      return { ...state, eventPicks: action.event }
    case UPDATE_SUBMIT:
      return { ...state, eventPicks: action.event }

    default:
      return state
  }
}
