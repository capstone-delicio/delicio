const axios = require('axios');
var JSSoup = require('jssoup').default;

// URL of the page we want to scrape
// const alias = "the-perch-chicago";

// Async function which scrapes the data
const scraper = async function scrapeData(rests) {
  // const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
  // const proxyUrl = "";
  // const url = `https://www.yelp.com/biz_photos/${alias}?tab=food`;

  const restsArr = rests.map(JSON.parse);

  const endpoints = restsArr.map((rest) => {
    return encodeURI(`https://www.yelp.com/biz_photos/${rest.alias}?tab=food`);
  });

  try {
    const response = await Promise.all(
      endpoints.map((endpoint) => axios.get(endpoint)),
    ).then(
      axios.spread((...allData) => {
        return allData;
      }),
    );

    // Load HTML we fetched in the previous line
    const imgArr = response.map((res, idx) => {
      const soup = new JSSoup(res.data);
      const imgElements = soup.findAll('img');

      const foodImages = imgElements.filter((el) => {
        // filter for only images with food descriptions
        let hasFoodDescription = false;
        if (el.attrs.alt) {
          const imgDescArr = el.attrs.alt.split(' ');
          const idx = imgDescArr.indexOf('States');
          const idx2 = imgDescArr.indexOf('States.');
          if (idx === imgDescArr.length - 1 || idx2 === imgDescArr.length - 1) {
            hasFoodDescription = false;
          } else {
            // set the alt attribute to only equal food description
            hasFoodDescription = true;
            const index = idx !== -1 ? idx : idx2;
            el.attrs.alt = imgDescArr.slice(index + 1).join(' ');
          }
        }

        return (
          el.attrs.class === 'photo-box-img' &&
          el.attrs.height > 200 &&
          hasFoodDescription
        );
      });

      const id = restsArr[idx].id;
      const alias = restsArr[idx].alias;

      console.log('inside scraper food img len', foodImages.length);

      const imgSrc = foodImages.map((el) => {
        return { imgDesc: el.attrs.alt, imgSrc: el.attrs.src, id, alias };
      });

      // pick a random 3 photos
      function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
      }
      const subsetPics = getMultipleRandom(imgSrc, 3);

      // console.log("subsetpics in scraper", subsetPics);
      return subsetPics;
    });

    return imgArr.flat();
  } catch (err) {
    console.error(err);
  }
};

module.exports = scraper;
