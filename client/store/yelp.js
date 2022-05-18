import axios from "axios";

// Action Types
const GET_RESTS = "GET_RESTS";
const GET_SINGLE_REST = "GET_SINGLE_REST";
const GET_REST_PHOTOS = "GET_REST_PHOTOS";

// Action Creators
const getRests = (params) => ({
  type: GET_RESTS,
  rests: params,
});

const getSingleRest = (id) => ({
  type: GET_SINGLE_REST,
  rest: id,
});

// Constants
const getRestPhotos = (pics) => ({
  type: GET_REST_PHOTOS,
  pics,
});

// Thunks
export const _getRestPhotos = (id, alias) => async (dispatch) => {
  console.log("inside thunk phots");
  try {
    const { data } = await axios.get("/yelp/photos", {
      params: { id, alias },
    });

    // pick a random 3 photos
    function getMultipleRandom(arr, num) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    }

    if (data) {
      const subsetPics = getMultipleRandom(data, 3);
      dispatch(getRestPhotos(subsetPics));
    }
  } catch (err) {
    console.log(err);
  }
};

export const _getRests = (params) => async (dispatch) => {
  // expect params to be an object
  const { location, limit, price, cuisine } = params;

  const autocompleteParams = {
    text: cuisine,
    latitude: "",
    longitude: "",
    locale: "en_US",
  };

  // run cuisine thru autocomplete Yelp API
  // hello testing
  const auto_url = `https://api.yelp.com/v3/autocomplete`;

  let catArr = [];

  try {
    const { data } = await axios.get(proxyUrl + auto_url, {
      headers: auth,
      params: autocompleteParams,
    });
    catArr = [...data.categories];
  } catch (err) {
    return { Error: err.stack };
  }

  // take the results of category array and put into Yelp business search api
  let categories = cuisine;
  console.log("categories before map:", categories);
  console.log("catArr", catArr);
  if (catArr.length) {
    categories = catArr
      .map((cat) => {
        return cat.alias;
      })
      .join(",");
    categories += `,${cuisine}`;
  }

  console.log("categories after map:", categories);

  // return a list of restaurants that fullfil the params
  const busSearchParams = {
    term: "restaurants",
    location,
    categories,
    limit,
    price,
  };

  const bizSearch_url = `https://api.yelp.com/v3/businesses/search`;
  try {
    const { data } = await axios.get(proxyUrl + bizSearch_url, {
      headers: auth,
      params: busSearchParams,
    });
    // return data;

    dispatch(getRests(data.businesses));
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
