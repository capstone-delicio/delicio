import React from "react";

const Questions = () => {
  return (
    <div>
      <h3>hello from questions page</h3>
      <p>What's your location?</p>
      {/* {C: Will this use browser location or will this be a typed location(prefered city)?  **possibly typed**} */}
      <p>How Many Restaurants did you want to look at?</p>
      {/* {C: Will this be a range? **possible limit**} */}
      <p>What type of cuisine are you looking for?(dropdown?)</p>
      {/* {C: How are you determining cuisine types? **possibly typed with best match**} */}
      <p>What is your price point?(dropdown)</p>
      {/* {C: Will this be a range?  **expense based off of 1 to 4**} */}
    </div>
  );
};
export default Questions;
