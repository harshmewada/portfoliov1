import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Parallax } from "react-scroll-parallax";
import { Container, Grid } from "@material-ui/core";
import { font } from "../../constants/";
import List from "./List";
import BlockRevealAnimation from "react-block-reveal-animation";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  Container: {
    height: "110vh",
    backgroundColor: "#333333"
  },
  titleContainer: {
    height: "30vh",

    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid red"
    }
  },
  title: {
    fontFamily: font.primary,
    fontSize: "10vw",
    color: "#333333",
    WebkitTextStroke: "3px #484848",
    [theme.breakpoints.down("md")]: {
      fontSize: "10vh",
      letterSpacing: ".5vh"
    }
  },
  listContainer: {
    alignItems: "center",
    height: "60vh",

    [theme.breakpoints.down("md")]: {
      height: "50vh",
      border: "1px solid green"
    }
  }
}));
const Index = () => {
  const [desgin, setDesign] = useState(true);

  const classes = useStyles();
  setTimeout(() => {
    setDesign(!desgin);
  }, 3000);

  // const List = [
  //   {
  //     url: "https://source.unsplash.com/random"
  //   },
  //   {
  //     url: "https://source.unsplash.com/random"
  //   },
  //   {
  //     url: "https://source.unsplash.com/random"
  //   },
  //   {
  //     url: "https://source.unsplash.com/random"
  //   }
  // ];

  return (
    <div className={classes.Container}>
      <Container maxWidth="md" style={{ border: "1px solid red" }}>
        <Fade bottom cascade delay={0} duration={1000}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
          >
            <Grid
              item
              lg={12}
              sm={4}
              style={{
                height: "50vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div className={classes.titleContainer}>
                <BlockRevealAnimation delay={1} duration={1} color="white">
                  <p className={classes.title}>DESIGN</p>
                </BlockRevealAnimation>
              </div>
            </Grid>
            <Grid item lg={12} sm={8}>
              <div className={classes.listContainer}>
                <List />
              </div>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </div>
  );
};
export default Index;
