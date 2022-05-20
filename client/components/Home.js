import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

/**
 * COMPONENT
 */
const Home = () => {
  const firstName = useSelector((state) => {
    return state.auth.first_name;
  });

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column">
        <br />
        <h1>Welcome {firstName}!</h1>
        <h3>𝙇𝙀𝙏 '𝙎 𝙋𝙇𝘼𝙉 𝘼 𝙁𝙊𝙊𝘿 𝘿𝘼𝙏𝙀 𝙒𝙄𝙏𝙃 𝙔𝙊𝙐𝙍 𝙁𝙍𝙄𝙀𝙉𝘿𝙎 !</h3>
        <br />
        <br />
        <Button variant="contained" color="primary" href="/eventinput">
          Click Me to Plan an Event
        </Button>
        <br />
        <br />

        {/* <img src="https://i.pinimg.com/originals/4f/20/ca/4f20cafc79e332da9a527ac1dcc2ecdf.gif" />*/}
        <img
          src="https://c.tenor.com/c2wxW4hd9LsAAAAC/anime-aesthetic.gif"
          height="180"
        />
        {/* <img src="https://images.food52.com/5zraOc_vbcCKAeYGQbHYOjrgF7k=/4e570da7-f7f4-40e3-a079-99beb62904e9--tumblr_me9i0qps5J1r5kl7zo4_500.gif" />*/}
        {/*<img src="https://c.tenor.com/94r7Hf1ptewAAAAC/milk-and-mocha-milk-bear.gif" />
         */}
      </Grid>
    </div>
  );
};
export default Home;
