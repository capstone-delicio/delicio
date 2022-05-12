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

const getRestPhotos = (alias) => ({
  type: GET_REST_PHOTOS,
  alias: alias,
});

// Thunks
export const _getRestPhotos = (alias) => async (dispatch) => {
  const url = `https://www.yelp.com/biz_photos/${alias}`;
  const queryParams = {
    tab: "food",
  };
  try {
    // use Axios to grab html
    const { data } = await axios.get(url, queryParams);

    // Load HTML we fetched in the previous line, findAll img
    const soup = new JSSoup(data);
    const imgElements = soup.findAll("img");

    // Filter for Food imgs with food descriptions
    const foodImages = imgElements.filter((el) => {
      // filter for only images with food descriptions
      let hasFoodDescription = false;

      if (el.attrs.alt) {
        const imgDescArr = el.attrs.alt.split(" ");
        const idx = imgDescArr.indexOf("States");
        const idx2 = imgDescArr.indexOf("States.");
        if (idx === imgDescArr.length - 1 || idx2 === imgDescArr.length - 1) {
          hasFoodDescription = false;
        } else {
          // set the alt attribute to only equal food description
          hasFoodDescription = true;
          const index = idx !== -1 ? idx : idx2;
          el.attrs.alt = imgDescArr.slice(index + 1).join(" ");
        }
      }

      return (
        el.attrs.class === "photo-box-img" &&
        el.attrs.height > 200 &&
        hasFoodDescription
      );
    });

    // return an array of obj with description & imgUrls
    const imgSrc = foodImages.map((el) => {
      return { imgDesc: el.attrs.alt, imgSrc: el.attrs.src };
    });

    dispatch(getRestPhotos(imgSrc));
  } catch (err) {
    return { Error: err.stack };
  }
};

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

  // return a list of restaurants that fullfil the params
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
    // return data;
    dispatch(getRests(data.businesses));
  } catch (err) {
    return { Error: err.stack };
  }
};

export const _getSingleRest = (id) => async (dispatch) => {
  const bizDetail_url = `https://api.yelp.com/v3/businesses/${id}`;
  try {
    const { data } = await axios.get(bizDetail_url, { headers: auth });
    dispatch(getSingleRest(data));
  } catch (err) {
    console.error(err);
  }
};

// REDUCER
const yelpState = {
  // based on json file returned from search
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
      return { ...state, restPhotos: action.imgSrc };
    default:
      return yelpState;
  }
}
