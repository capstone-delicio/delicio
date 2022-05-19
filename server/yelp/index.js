const express = require("express");
const router = express.Router();
const axios = require("axios");
const scraper = require("./scraper");
const cors = require("cors");

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

router.get("/", (req, res, next) => {
  res.json({ success: "hello yelp" });
});

// /yelp/bizsearch
router.get("/bizsearch", async (req, res, next) => {
  // console.log("inside route", req.query);
  const data = await getRests(req.query);
  res.json(data);
});

// /api/yelp/photos
router.get("/photos", async (req, res, next) => {
  // call scraper, req.query.rests is an array [rest1.id, rest1,alias, etc]
  // console.log("inside route", req.query.rests);
  const data = await scraper(req.query.rests);
  // res.json(data);
  // res.json({ success: "hello yelp photos" });
});

router.get("/test", cors(), async (req, res, next) => {
  // const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
  const endpoints = [
    "",
    "https://www.yelp.com/biz_photos/bárbaro-taquería-chicago?tab=food",
    "https://www.yelp.com/biz_photos/lonesome-rose-chicago?tab=food",
  ];
  // const allData = await Promise.all(
  //   endpoints.map((endpoint) => axios.get(endpoint))
  // );
  // axios.spread((...allData) => {
  //   console.log({ allData });
  // });
  console.log(endpoints[1]);
  const { data } = await axios.get(endpoints[1]);

  console.log(data);
  // res.json(data);
  // res.json({ success: "hello yelp test" });
});

// /yelp/id
router.get("/:id", async (req, res, next) => {
  const rest_id = req.params.id;
  const data = await getRest(rest_id);
  res.json(data);
});

module.exports = router;
