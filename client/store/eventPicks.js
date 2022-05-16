import axios from "axios";

const TOKEN = "token";

// ACTION TYPES
const ADD_EVENTPICKS = "ADD_EVENTPICKS";
// const UPDATE_EVENTPICKS = "UPDATE_EVENTPICKS";

// ACTION CREATORS
const addEventPicks = (event) => ({
  type: ADD_EVENTPICKS,
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

const initialState = {
  eventPicks: [],
};

// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EVENTPICKS:
      return { ...state, eventPicks: action.event };
    default:
      return state;
  }
}
