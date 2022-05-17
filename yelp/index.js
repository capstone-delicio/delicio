const express = require("express");
const router = express.Router();
const axios = require("axios");
const res = require("express/lib/response");

const auth = {
  Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
};

const getBiz = async (rest_id) => {
  const url = `https://api.yelp.com/v3/businesses/${rest_id}`;
  try {
    const { data } = await axios.get(url, { headers: auth });
    return data;
  } catch (err) {
    return { Error: err.stack };
  }
};

const bizSearch = async () => {
  // const bizSearch = async (params) => {
  // const { location, limit, price, cuisine } = params;
  const cuisine = "mex";

  // run cuisine thru autocomplete Yelp API
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
  } catch (err) {
    return { Error: err.stack };
  }
  const categories = catArr
    .map((cat) => {
      return cat.alias;
    })
    .join(",");

  // return a list of restaurants that fullfil the params
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
    return data.businesses;
  } catch (err) {
    return { Error: err.stack };
  }
};

router.get("/", (req, res) => {
  res.json({ success: "hello yelp" });
});

router.get("/biz", async (req, res) => {
  const data = await bizSearch();
  res.json(data);
});

router.get("/:rest_id", async (req, res) => {
  const rest_id = req.params.rest_id;
  const data = await getBiz(rest_id);
  res.json(data);
});

module.exports = router;

//C: should this be in server folder along with other routes?
//C: THIS CAN BE DELETED
