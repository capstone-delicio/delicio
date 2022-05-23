import axios from 'axios';

const TOKEN = 'token';

/**
 * ACTION TYPES
 */
const CREATE_EVENT = 'CREATE_EVENT';
const UPDATE_EVENT = 'UPDATE_EVENT';
const GET_EVENT = 'GET_EVENT';

/**
 * ACTION CREATORS
 */
const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    event,
  };
};

const updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    event,
  };
};

const getEvent = (event) => {
  return {
    type: GET_EVENT,
    event,
  };
};

/**
 * THUNK CREATORS
 */
export const addEvent =
  (organizerId, event_name, event_date, event_time, vote_deadline) =>
  async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.post(
          `/api/events`,
          { organizerId, event_name, event_date, event_time, vote_deadline },
          {
            headers: {
              authorization: token,
            },
          },
        );
        console.log('data', data);
        dispatch(createEvent(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const updateEventThunk =
  ({ eventId, organizerId, event_date, event_time, restaurantId, restaurantAlias }) =>
  async (dispatch) => {
    console.log('event', eventId);
    try {
      const { data } = await axios.put(`/api/events/${eventId}`, {
        restaurantAlias,
        restaurantId,
        organizerId,
        event_date,
        event_time,
      });
      dispatch(updateEvent(data));
    } catch (error) {
      console.log(error);
    }
  };

export const getEventThunk = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/events/${id}`);
    dispatch(getEvent(data));
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  event: [],
};
/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_EVENT:
      return { ...state, event: action.event };
    case UPDATE_EVENT:
      return { ...state, event: action.event };
    case GET_EVENT:
      return { ...state, event: action.event };
    default:
      return state;
  }
}
