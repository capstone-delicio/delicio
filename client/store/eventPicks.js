import axios from "axios";

const TOKEN = "token";

// ACTION TYPES
const ADD_EVENTPICKS = "ADD_EVENTPICKS";
const UPDATE_EVENTPICKS = "UPDATE_EVENTPICKS";

// ACTION CREATORS
const addEventPicks = (event) => ({
  type: ADD_EVENTPICKS,
  event,
});

const updateEventPicks = (id, event) => ({
  type: UPDATE_EVENTPICKS,
  id,
  event,
});

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
      );
      dispatch(addEventPicks(data));
    } catch (err) {
      console.error(err);
    }
  };

export const _updateEventPicks = (eventId) => async (dispatch) => {
  try {
    const { data } = await axios.put(`api/eventpicks/${eventId}`, event);
    dispatch(updateEventPicks(data));
  } catch (err) {
    console.error(err);
  }
};

const initialState = {
  eventPicks: [],
};

// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EVENTPICKS:
      return { ...state, eventPicks: action.event };

    case UPDATE_EVENTPICKS:
      const filteredEventPicks = [...state.eventPicks].filter(
        (pick) => pick.id !== action.event.id
      );
      return { ...state, eventPicks: [...filteredEventPicks, action.event] };
    // return { ...state, eventPicks: action.event };

    default:
      return state;
  }
}
