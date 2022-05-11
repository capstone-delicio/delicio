// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal
const axios = require("axios");
// const cheerio = require("cheerio");
var JSSoup = require("jssoup").default;

// URL of the page we want to scrape
const url = "https://www.yelp.com/biz_photos/frontera-grill-chicago?tab=food";

// Async function which scrapes the data
async function scrapeData() {
  try {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);

    // Load HTML we fetched in the previous line
    const soup = new JSSoup(data);
    const imgElements = soup.findAll("img");

    const foodImages = imgElements.filter((el) => {
      const alt = el.attrs.alt;
      const strArr = alt.split(" ");
      const idx = strArr.indexOf("States.");
      const description = strArr.slice(idx + 1).join(" ");

      return (
        el.attrs.class === "photo-box-img" &&
        el.attrs.height >= 226 &&
        description.length > 0
      );
    });

    const imgSrc = foodImages.map((el) => {
      return { imgDesc: el.attrs.alt, imgSrc: el.attrs.src };
    });

    // const myString = imgSrc[0].imgDesc.split(" ");
    // const idx = myString.indexOf("States.");
    // console.log(myString.slice(idx + 1).join(" "));

    console.log(imgSrc);
  } catch (err) {
    console.error(err);
  }
}
// Invoke the above function
scrapeData();
