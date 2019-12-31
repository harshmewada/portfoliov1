import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { list, font } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Hidden } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  coroselcontainer: {
    height: "100%"
  },
  Container: {
    backgroundColor: "#333333",
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    [theme.breakpoints.down("md")]: {}
  },
  imgContainer: {
    height: "100%",
    width: "43vw",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      border: "1px solid white",
      width: "80vw",
      height: "100vh"
    }
  },
  backgroundContainer: {
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    boxShadow: "0px 0vh 6vh rgba(0, 0, 0, .5);",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      overflowY: "scroll"
    }
  },
  name: {
    fontFamily: font.primary,
    fontSize: "3vw",
    color: "#ffffff",
    marginLeft: "-3vw",
    textTransform: "uppercase",
    letterSpacing: ".15rem",
    textShadow: "0px 0px 10px rgba(0,0,0,.5)",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  btn: {
    fontSize: "2vw",
    marginTop: "-6vw",
    color: "#878787",
    border: "none",
    cursor: "pointer"
  }
}));

const List = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  const next = () => {
    console.log(selected);
    if (selected >= 0) {
      if (selected <= list.length - 2) {
        setSelected(selected + 1);
      }
    } else {
      return null;
    }
  };
  const prev = () => {
    console.log(selected);
    if (selected == 0) {
      return null;
    }
    if (selected > 0) {
      setSelected(selected - 1);
    } else {
      return null;
    }
  };

  return (
    <div className={classes.coroselcontainer}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: "100%" }}
        spacing={2}
      >
        <Hidden mdDown={true}>
          <Grid item lg={1}>
            <Button className={classes.btn} onClick={() => prev()}>
              {`<`}
            </Button>
          </Grid>
        </Hidden>
        <Grid item lg={10} style={{ height: "100%" }}>
          <Carousel
            showThumbs={false}
            autoPlay={false}
            infiniteLoop={false}
            interval={0}
            selectedItem={selected}
            transitionTime={500}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            className={classes.corosel}
          >
            {list.map(key => (
              <div className={classes.Container}>
                <div className={classes.imgContainer}>
                  <div
                    className={classes.backgroundContainer}
                    style={{
                      backgroundImage: `url(${key.url})`,
                      height: "90%",
                      width: "100%"
                    }}
                  >
                    <p className={classes.name}>{key.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </Grid>
        <Hidden mdDown={true}>
          <Grid item lg={1}>
            <Button className={classes.btn} onClick={() => next()}>
              {`>`}
            </Button>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};
export default List;
