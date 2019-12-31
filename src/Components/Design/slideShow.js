import React, { useState } from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import { Container, Grid, Button } from "@material-ui/core";
import { font, list } from "../../constants/";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const useStyles = makeStyles(theme => ({
  gridcontainer: {},
  gridItem: {},
  img: {
    height: "100%",
    width: "100%",
    borderRadius: "4vh",
    border: "1px solid #4a4a4a"
  },
  imgBorder: {
    width: "35vh",
    borderRadius: "5vh",
    border: "2vh solid #333333",
    boxShadow:
      "5px 5px 10px rgba(0, 0, 0, 0.25), -5px -5px 10px rgba(68, 68, 68, 0.4)",
    [theme.breakpoints.down("sm")]: {
      border: "1vh solid #333333",
      boxShadow:
        ".5vh .5vh 2vh rgba(0, 0, 0, 0.20), -1vh -1vh 1.5vh rgba(68, 68, 68, 0.35)",
      width: "30vh"
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
  },
  slide: {
    border: "1px solid red"
  },
  btnCotntiner: {
    width: "100%",

    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between"
  }
}));
const StyledButton = withStyles({
  root: {
    background: "#333333",
    borderRadius: 20,
    border: 0,
    fontFamily: font.secondary,
    fontSize: "2.5vh",
    color: "#676767",
    height: 40,
    padding: "0 20px",
    margin: "10px",
    boxShadow:
      "  3px 3px 10px rgba(0, 0, 0, 0.25), -2px -2px 10px rgba(68, 68, 68, 0.6)"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);
const SlideShow = props => {
  const [current, setCurrent] = useState(0);
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
          className={classes.gridItem}
          alignItems="center"
          justify="center"
        >
          <div className={classes.imgBorder}>
            <AliceCarousel
              infinite
              autoPlay
              autoPlayInterval={2000}
              buttonsDisabled
              slideToIndex={current}
              onSlideChanged={e => setCurrent(e.item)}
            >
              {list.map(key => (
                <img
                  key={Math.random()}
                  src={key.url}
                  className={classes.img}
                />
              ))}
            </AliceCarousel>
            <div className={classes.btnCotntiner}>
              <StyledButton onClick={() => setCurrent(current - 1)}>
                Prev
              </StyledButton>
              <StyledButton onClick={() => setCurrent(current + 1)}>
                Next
              </StyledButton>
            </div>
          </div>
        </Grid>
        <Grid container item lg={5}>
          <Grid container direction="row" style={{ height: "100%" }}>
            <Grid container item lg={12} className={classes.appTitleContainer}>
              <p className={classes.appTitle}>{props.title}</p>
            </Grid>
            <Grid container item justify="center" lg={12}>
              <p className={classes.appInfo}>{props.info}</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default SlideShow;
