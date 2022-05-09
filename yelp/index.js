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

const fetchYelpAll = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
    },
    params: {
      term: "restaurants",
      location: "Chicago",
      // radius: 10000,
      // sort_by: "relevance",
      limit: 2,
    },
  };
  const url = "https://api.yelp.com/v3/businesses/search";

  try {
    const response = await axios.get(url, config);
    return response.data;
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

module.exports = router;
