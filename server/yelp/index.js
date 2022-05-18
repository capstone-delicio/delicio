const express = require("express");
const router = express.Router();
const axios = require("axios");

const auth = {
  Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
};

const getRest = async (rest_id) => {
  const url = `https://api.yelp.com/v3/businesses/${rest_id}`;
  try {
    const { data } = await axios.get(url, { headers: auth });
    return data;
  } catch (err) {
    return { Error: err.stack };
  }
};

const getRests = async (queryParams) => {
  const { location, limit, price, cuisine } = queryParams;

  // run cuisine thru autocomplete Yelp API to get categories
  const autocompleteParams = {
    text: cuisine,
    latitude: "",
    longitude: "",
    locale: "en_US",
  };

  const yelp_url = "https://api.yelp.com/v3/autocomplete";

  let catArr = [];

  try {
    const { data } = await axios.get(yelp_url, {
      headers: auth,
      params: autocompleteParams,
    });
    catArr = [...data.categories];
  } catch (err) {
    next(err);
  }

  let categories = cuisine;
  if (catArr.length) {
    categories = catArr
      .map((cat) => {
        return cat.alias;
      })
      .join(",");
    categories += `,${cuisine}`;
  }

  // return a list of restaurants that fullfil the params
  const busSearchParams = {
    term: "restaurants",
    location,
    categories,
    limit,
    price,
  };
  const getYelpRests_url = "https://api.yelp.com/v3/businesses/search";
  try {
    const { data } = await axios.get(getYelpRests_url, {
      headers: auth,
      params: busSearchParams,
    });

    return data.businesses;
  } catch (err) {
    next(err);
  }
};

// /api/yelp/bizsearch
router.get("/bizsearch", async (req, res) => {
  // console.log("inside route", req.query);
  const data = await getRests(req.query);
  res.json(data);
});

// /api/yelp/id
router.get("/:id", async (req, res) => {
  const rest_id = req.params.id;
  console.log(rest_id);
  const data = await getRest(rest_id);
  res.json(data);
});

module.exports = router;
