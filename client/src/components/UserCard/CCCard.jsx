import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    flexFlow: "column",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  },
  rank: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    color: "#222222",

    // border: "1px solid #D1D1D1",
    // // borderRadius: "4px",
    // // boxShadow: "2px 2px 5px #00000016",
    // // padding: "7px 2px",
  },
}));

const CCCard = (props) => {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        color="text.primary"
      >
        2600
      </Typography>
      <Typography variant="h6" color="text.secondary">
        3000
      </Typography>

      <Typography variant="caption" color="text.secondary">
        Highest rating
      </Typography>
      <Grid
        item
        container
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid item container xs={6} className={classes.rank}>
          <Typography
            variant="h6"
            sx={{ textAlign: "center" }}
            color="text.primary"
          >
            2
          </Typography>
          <Typography
            sx={{ textAlign: "center" }}
            variant="caption"
            color="text.secondary"
          >
            Global Ranking
          </Typography>
        </Grid>
        <Grid item container xs={6} className={classes.rank}>
          <Typography
            variant="h6"
            sx={{ textAlign: "center" }}
            color="text.primary"
          >
            2
          </Typography>
          <Typography
            sx={{ textAlign: "center" }}
            variant="caption"
            color="text.secondary"
          >
            Country Ranking
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid item container xs={6} className={classes.rank}>
          <Typography
            variant="h6"
            sx={{ textAlign: "center" }}
            color="text.primary"
          >
            100
          </Typography>
          <Typography
            sx={{ textAlign: "center" }}
            variant="caption"
            color="text.secondary"
          >
            Problem Solved
          </Typography>
        </Grid>
        <Grid item container xs={6} className={classes.rank}>
          <Typography
            variant="h6"
            sx={{ textAlign: "center" }}
            color="text.primary"
          >
            200
          </Typography>
          <Typography
            sx={{ textAlign: "center" }}
            variant="caption"
            color="text.secondary"
          >
            Problem Solved (Partially)
          </Typography>
        </Grid>
      </Grid>

      {/* view profile  */}
      <CardActions>
        <Button size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
};

export default CCCard;
