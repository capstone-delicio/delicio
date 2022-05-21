import axios from 'axios';
import scrapeData from '../../server/yelp/scraper';

// Action Types
const GET_RESTS = 'GET_RESTS';
const GET_SINGLE_REST = 'GET_SINGLE_REST';
const GET_REST_PHOTOS = 'GET_REST_PHOTOS';

// Action Creators
const getRests = (params) => ({
  type: GET_RESTS,
  rests: params,
});

const getSingleRest = (id) => ({
  type: GET_SINGLE_REST,
  rest: id,
});

const getRestPhotos = (pics) => ({
  type: GET_REST_PHOTOS,
  pics,
});

// Thunks
export const _getRestPhotos = (rests) => async (dispatch) => {
  const restsObj = rests.map((rest) => {
    return { alias: rest.alias, id: rest.id };
  });
  try {
    const { data } = await axios.get('/yelp/photos', {
      params: { rests: restsObj },
    });

    dispatch(getRestPhotos(data));
  } catch (err) {
    console.log(err);
  }
};

export const _getRests = (params) => async (dispatch) => {
  // expect params to be an object
  // const { location, limit, price, cuisine } = params;

  try {
    const { data } = await axios.get('/yelp/bizsearch', { params: params });
    dispatch(getRests(data));
  } catch (err) {
    return { Error: err.stack };
  }
};

export const _getSingleRest = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/yelp/${id}`);
    dispatch(getSingleRest(data));
  } catch (err) {
    return { Error: err.stack };
  }
};

export const _getDbRestPhotos = (eventId, userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/user/${eventId}`, {
      params: { userId },
    });
    dispatch(getRestPhotos(data));
  } catch (error) {
    return { Error: err.stack };
  }
};

// REDUCER
// based on json file returned from search
const yelpState = {
  rests: [],
  rest: {},
  restPhotos: [],
};

export default function yelp(state = yelpState, action) {
  switch (action.type) {
    case GET_RESTS:
      return { ...state, rests: action.rests };
    case GET_SINGLE_REST:
      return { ...state, rest: action.rest };
    case GET_REST_PHOTOS:
      return {
        ...state,
        restPhotos: [...state.restPhotos, ...action.pics],
      };
    default:
      return state;
  }
}
