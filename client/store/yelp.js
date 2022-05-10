import axios from "axios";

// Action Types
const GET_RESTS = "GET_RESTS";
const GET_SINGLE_REST = "GET_SINGLE_)REST";

// Action Creators
const getRests = () => {
  type: GET_RESTS;
};

const getSingleRest = () => {
  type: GET_SINGLE_REST;
};

// Thunks
export const _getRests = (params) => async (dispatch) => {
  // expect params to be an object
  const { location, limit, price, cuisine } = params;

  const auth = {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
  };
  const autocompleteParams = {
    text: cuisine,
    latitude: "",
    longitude: "",
    locale: "en_US",
  };
  // run cuisine thru autocomplete Yelp API
  const auto_url = "https://api.yelp.com/v3/autocomplete";

  let catArr = [];
  try {
    const { data } = await axios.get(auto_url, {
      headers: auth,
      params: autocompleteParams,
    });
    catArr = [...data.categories];
  } catch (err) {
    return { Error: err.stack };
  }

  // take the results of category array and put into Yelp business search api
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

  const bizSearch_url = "https://api.yelp.com/v3/businesses/search";
  try {
    const { data } = await axios.get(bizSearch_url, {
      headers: auth,
      params: busSearchParams,
    });
    return data;
  } catch (err) {
    return { Error: err.stack };
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
