import axios from "axios";
// const dotenv = require("dotenv");
// dotenv.config();

// Action Types
const GET_RESTS = "GET_RESTS";
const GET_SINGLE_REST = "GET_SINGLE_REST";

// Action Creators
const getRests = (params) => ({
  type: GET_RESTS,
  rests: params,
});

const getSingleRest = (id) => ({
  type: GET_SINGLE_REST,
  rest: id,
});

const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
const auth = {
  Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
};

// Thunks
export const _getRests = (params) => async (dispatch) => {
  // expect params to be an object
  const { location, limit, price, cuisine } = params;

  console.log("from yelp.js", location, limit, price, cuisine);

  const autocompleteParams = {
    text: cuisine,
    latitude: "",
    longitude: "",
    locale: "en_US",
  };

  console.log("fromthunks", process.env.REACT_APP_YELP_API_KEY);

  console.log("autocompleteParams", autocompleteParams);

  // console.log("dotenv", process.env);

  // run cuisine thru autocomplete Yelp API
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

  // console.log(carArr);

  const categories = catArr
    .map((cat) => {
      return cat.alias;
    })
    .join(",");

  // return a list of restaurants that fullfill the params
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
  const bizDetail_url = `https://api.yelp.com/v3/businesses/${id}`;
  try {
    const { data } = await axios.get(proxyUrl + bizDetail_url, {
      headers: auth,
    });
    dispatch(getSingleRest(data));
  } catch (err) {
    console.error(err);
  }
};
// const config = {
//   headers: {
//     Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
//   },
//   params: {
//     term: "restaurants",
//     location: "Chicago",
//     // radius: 10000,
//     // sort_by: "relevance",
//     limit: 2,
//   },
// };
// const url = "https://api.yelp.com/v3/businesses/search";

// try {
//   const response = await axios.get(url, config);
//   return response.data;
// } catch (err) {
//   return { Error: err.stack };
// }

// REDUCER
const yelpState = {
  // based on json file returned from search
  rests: [],
  rest: {},
};

export default function yelp(state = yelpState, action) {
  switch (action.type) {
    case GET_RESTS:
      return { ...state, rests: action.rests };
    case GET_SINGLE_REST:
      return { ...state, rest: action.rest };
  }
  return state;
}
