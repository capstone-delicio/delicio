const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const axios = require("axios");
// import axios from 'axios';

// const fetchYelp = async (rest_id) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
//       params: {
//         term: "restaurants",
//         location: "NYC",
//         // radius: 10000,
//         // sort_by: "relevance",
//         limit: 10,
//       },
//     },
//   };
//   const url = `https://api.yelp.com/v3/businesses/${rest_id}`;
//   try {
//     const yelpStream = await fetch(url, config);
//     const yelpJSON = await yelpStream.json();
//     return yelpJSON;
//   } catch (err) {
//     return { Error: err.stack };
//   }
// };

const testAutoComplete = async () => {
  // const { location, categories, limit, price, cuisine } = params;
  const cuisine = "asan";
  // run cuisine thru autocomplete Yelp API
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
  //   },
  //   params: {
  //     text: cuisine,
  //     latitude: "",
  //     longitude: "",
  //     locale: "en_US",
  //   },
  // };
  const auth = {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
  };
  const autocompleteParams = {
    text: cuisine,
    latitude: "",
    longitude: "",
    locale: "en_US",
  };
  const auto_url = "https://api.yelp.com/v3/autocomplete";

  let catArr = [];
  try {
    const { data } = await axios.get(auto_url, {
      headers: auth,
      params: autocompleteParams,
    });
    catArr = [...data.categories];
    // return data;
  } catch (err) {
    return { Error: err.stack };
  }

  const categories = catArr
    .map((cat) => {
      return cat.alias;
    })
    .join(",");

  // return a list of restaurants that fullfill the params
  const busSearchParams = {
    term: "restaurants",
    location: "Chicago",
    categories,
    limit: 3,
    price: 2,
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

const fetchYelpAll = async () => {
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

  const auth = {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
  };
  const autocompleteParams = {
    text: "mex",
    latitude: "",
    longitude: "",
    locale: "en_US",
  };
  const auto_url = "https://api.yelp.com/v3/autocomplete";

  try {
    const { data } = await axios.get(auto_url, {
      headers: auth,
      params: autocompleteParams,
    });
    return data;
  } catch (err) {
    return { Error: err.stack };
  }
};

router.get("/", (req, res) => {
  res.json({ success: "hello yelp" });
});

router.get("/all", async (req, res) => {
  const rest_id = req.params.rest_id;
  const data = await fetchYelpAll();
  res.json(data);
});

// router.get("/:rest_id", async (req, res) => {
//   const rest_id = req.params.rest_id;
//   const data = await fetchYelp(rest_id);
//   res.json(data);
// });

router.get("/auto", async (req, res) => {
  const data = await testAutoComplete();
  res.json(data);
});

module.exports = router;
