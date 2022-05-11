const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.get("/img", async (req, res) => {
  const url = "https://www.yelp.com/biz_photos/etta-bucktown-chicago?tab=food";

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const listItems = $(".media-landing_gallery photos ul li");
    console.log(listItems);
    // const imgs = [];
    // listItems.each((idx, el) => {
    //   const image = { name: "", src: "" };
    //   image.name = $(el).children("img").attribs.alt;
    // });
    // console.log(element);
    // res.json(element.html());
  } catch (error) {
    return { Error: error.stack };
  }
});

router.get("/", (req, res) => {
  res.json({ success: "hello yelp_scraper" });
});

module.exports = router;
