import Header from "./Header/Header";
import Body from "./Body/Body";
import Grid from "@mui/material/Grid";
import Body2 from "./Body/Body2"
import Body3 from "./Body/Body3"
import Body4 from "./Body/Body4"
import Body5 from "./Body/Body5"
import Body6 from "./Body/Body6"
import { spacing } from '@mui/system';




const Home = () => {
  return (
    <Grid container spacing={4} px={{ paddingLeft: '200px' }} sx={{ paddingTop: 2 }} >
      <Grid item xs={4} >
        <Body />
      </Grid>

      <Grid item xs={4}>
        <Body2 />
      </Grid>

      <Grid item xs={4}>
        <Body3 />
      </Grid>

      <Grid item xs={4}>
        <Body4 />
      </Grid>

      <Grid item xs={4}>
        <Body5 />
      </Grid>

      <Grid item xs={4}>
        <Body6 />
      </Grid>

    </Grid>
  );
};


export default Home;
