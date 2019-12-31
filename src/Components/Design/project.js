import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid } from "@material-ui/core";
import { font } from "../../constants/";
const useStyles = makeStyles(theme => ({
  gridcontainer: {},
  gridItem: {},
  img: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    height: "70vh",
    width: "35vh",
    borderRadius: "4vh",
    border: "1px solid #4a4a4a",
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
      width: "25vh"
    }
  },
  imgBorder: {
    borderRadius: "5vh",
    border: "2vh solid #333333",
    boxShadow:
      "5px 5px 10px rgba(0, 0, 0, 0.25), -5px -5px 10px rgba(68, 68, 68, 0.4)",
    [theme.breakpoints.down("sm")]: {
      border: "1vh solid #333333",
      boxShadow:
        ".5vh .5vh 2vh rgba(0, 0, 0, 0.20), -1vh -1vh 1.5vh rgba(68, 68, 68, 0.35)"
    }
  },
  appTitleContainer: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      display: "flex",

      justifyContent: "center"
    }
  },
  appTitle: {
    fontFamily: font.primary,
    fontSize: "7vh",
    textTransform: "uppercase",
    color: "#484848",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5vh"
    }
  },
  appInfo: {
    fontFamily: font.secondary,
    fontSize: "3vh",
    color: "#676767",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5vh",
      textAlign: "center"
    }
  }
}));
const Project = props => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction={props.direction}
        className={classes.gridcontainer}
        alignItems="center"
        justify="center"
        spacing={2}
      >
        <Grid
          container
          item
          lg={6}
          sm={12}
          className={classes.gridItem}
          alignItems="center"
          justify="center"
        >
          <div className={classes.imgBorder}>
            <img src={props.url} className={classes.img} />
          </div>
        </Grid>
        <Grid container item lg={5} sm={12}>
          <Grid container direction="row" style={{ height: "100%" }}>
            <Grid container item lg={12} className={classes.appTitleContainer}>
              <p className={classes.appTitle}>{props.title}</p>
            </Grid>
            <Grid container item justify="center" lg={12} sm={12}>
              <p className={classes.appInfo}>{props.info}</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Project;
