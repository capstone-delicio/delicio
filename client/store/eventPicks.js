import axios from 'axios'

const TOKEN = 'token'

// ACTION TYPES
const ADD_EVENTPICKS = 'ADD_EVENTPICKS'
const UPDATE_EVENTPICKS = 'UPDATE_EVENTPICKS'
const UPDATE_SUBMIT = 'UPDATE_SUBMIT'
const COUNT_EVENTPICKS = 'COUNT_EVENTPICKS'
const USER_EVENTS = 'USER_EVENTS'

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

const countEventPicks = (count) => ({
  type: COUNT_EVENTPICKS,
  count,
})

const getUserEvents = (events) => ({
  type: USER_EVENTS,
  events,
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

export const _countEventPicks = (eventId) => async (dispatch) => {
  try {
    const countArr = await axios.get(`/api/eventpicks/${eventId}`)
    dispatch(countEventPicks(countArr))
  } catch (err) {
    console.error(err)
  }
}

export const _getUserEvents = (id) => async (dispatch) => {
  // console.log("i am inside", id);
  try {
    const { data } = await axios.get(`/api/eventpicks/user`, {
      params: { id },
    })
    // find unique values
    // console.log("userEventsArr", data);

    let memo = {}
    for (let i = 0; i < data.length; i++) {
      if (!memo.hasOwnProperty(data[i].eventId)) {
        // add into memo
        memo[data[i].eventId] = true
      }
    }
    // return an array of eventIds
    // console.log("insidememo", memo);
    // console.log("objectkeys", Object.keys(memo));

    dispatch(getUserEvents(Object.keys(memo)))
  } catch (err) {
    console.error(err)
  }
}

const initialState = {
  eventPicks: {},
  eventCount: [],
  userEvents: [],
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
    case COUNT_EVENTPICKS:
      return { ...state, eventCount: action.count }
    case USER_EVENTS:
      return { ...state, userEvents: action.events }
    default:
      return state
  }
}
