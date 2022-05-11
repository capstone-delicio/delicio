const axios = require("axios");
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

    const imgSrc = foodImages.map((el) => {
      return { imgDesc: el.attrs.alt, imgSrc: el.attrs.src };
    });

    console.log(imgSrc);
  } catch (err) {
    console.error(err);
  }
}
// Invoke the above function
scrapeData();
