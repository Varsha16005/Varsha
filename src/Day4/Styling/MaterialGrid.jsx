import { Grid } from "@mui/material";
import MediaCard from "./MaterialCard";

const MaterialGrid = () => {
  return (
    <Grid container rowGap={12}>
      <Grid item>
        <MediaCard />
      </Grid>
      <Grid item>
        <MediaCard />
      </Grid>
      <Grid item>
        <MediaCard />
      </Grid>
      <Grid item>
        <MediaCard />
      </Grid>
      <Grid item>
        <MediaCard />
      </Grid>
      <Grid item>
        <MediaCard />
      </Grid>
      <Grid item>
        <MediaCard />
      </Grid>
    </Grid>
  );
};

export default MaterialGrid;
