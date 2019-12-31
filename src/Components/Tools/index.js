import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { font } from "../../constants";
import { Grid, Hidden } from "@material-ui/core";

import BlockRevealAnimation from "react-block-reveal-animation";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#333333",
    height: "100vh",
    padding: "5vh 0vh",
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    }
  },
  contentContainer: {
    height: "100vh",
    width: "100%",

    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("sm")]: {
      height: "auto"
    }
  },
  titleContainer: {
    flexGrow: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

    [theme.breakpoints.down("sm")]: {
      flexGrow: 2,
      alignItems: "center"
    }
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  title: {
    fontFamily: font.primary,
    fontSize: "7vw",
    color: "#333333",
    textTransform: "Uppercase",
    WebkitTextStroke: "3px #484848",
    [theme.breakpoints.down("md")]: {
      fontSize: "6vh",
      letterSpacing: ".5vh",
      WebkitTextStroke: "2px #484848"
    }
  },
  subTitle: {
    fontFamily: font.secondary,
    color: "#565656",
    fontSize: "2vw",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3vh"
    }
    // WebkitTextStroke: "1px #484848"
  },
  tableContainer: {
    flexGrow: 4,
    [theme.breakpoints.down("sm")]: {
      marginTop: "3vh"
    }
  },
  singleColumn: {
    display: "flex",
    flexDirection: "column",

    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      height: "auto",
      width: "100%"
      // border: "1px solid red"
    }
  },
  tableHeader: {
    fontFamily: font.primary,
    fontSize: "7vh",
    textTransform: "uppercase",
    color: "#484848",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5vh"
    }
  },
  subText: {
    fontFamily: font.secondary,
    fontSize: "1.8vw",
    color: "#a4a4a4",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5vh"
    }
  }
}));

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth="md">
        <Fade bottom cascade delay={0} duration={1000}>
          <div className={classes.contentContainer}>
            <div className={classes.titleContainer}>
              <div className={classes.textContainer}>
                <span className={classes.title}>
                  <BlockRevealAnimation delay={1} duration={1} color="white">
                    Tools {`&`} Technologies
                  </BlockRevealAnimation>
                </span>

                <span className={classes.subTitle}>That I am Good At.</span>
              </div>
            </div>
            <div className={classes.tableContainer}>
              <Grid container direction="row" justify="center" spacing={6}>
                <Grid item lg={4} sm={12} className={classes.singleColumn}>
                  <p className={classes.tableHeader}>Design</p>
                  <span className={classes.subText}>Adobe Photoshop</span>
                  <span className={classes.subText}>Adobe XD</span>
                  <span className={classes.subText}>Figma</span>
                  <span className={classes.subText}>Adobe illustrator</span>
                </Grid>
                <Grid
                  item
                  lg={4}
                  sm={12}
                  md={12}
                  className={classes.singleColumn}
                >
                  <p className={classes.tableHeader}>Development</p>
                  <span className={classes.subText}>React Js</span>
                  <span className={classes.subText}>React-native</span>
                  <span className={classes.subText}>Css3</span>
                  <span className={classes.subText}>Javascript</span>
                </Grid>
                <Grid
                  item
                  lg={4}
                  sm={12}
                  md={12}
                  className={classes.singleColumn}
                >
                  <p className={classes.tableHeader}>Other</p>
                  <span className={classes.subText}>Linux</span>
                  <Hidden smDown>
                    <span className={classes.subText}>
                      <br />
                    </span>
                    <br />
                    <span />
                    <br />
                    <span />
                    <br />
                    <span />
                  </Hidden>
                </Grid>
              </Grid>
            </div>
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default Index;
