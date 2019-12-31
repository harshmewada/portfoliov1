import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@material-ui/core";
import { font } from "../../constants/";
import BlockRevealAnimation from "react-block-reveal-animation";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  introContainer: {
    [theme.breakpoints.down("sm")]: {}
  },
  titleContainer: {
    height: "20vh",

    [theme.breakpoints.down("sm")]: {
      height: "40vh",
      display: "flex",
      alignItems: "center"
    }
  },
  title: {
    fontFamily: font.primary,
    fontSize: "10vw",

    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10vh"
    }
  },
  infoContainer: {
    marginTop: "20vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0vh"
    }
  },
  info: {
    fontFamily: font.secondary,
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "4.5vw",

    width: "75%",

    color: "#999999",
    [theme.breakpoints.down("sm")]: {
      fontSize: "6vh",
      width: "100%"
    }
  },
  otherInfo: {
    fontFamily: font.secondary,
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "4.5vw",
    marginTop: "10vh",

    width: "75%",

    color: "#999999",
    [theme.breakpoints.down("sm")]: {
      fontSize: "6vh",
      width: "100%"
    }
  },
  name: {
    color: "#f2f2f2",
    WebkitTextStroke: "2px #999999",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5vh"
    }
  },
  change: {
    content: ""
  }
}));
const Index = () => {
  const [desgin, setDesign] = useState(true);
  const classes = useStyles();
  setTimeout(() => {
    setDesign(!desgin);
  }, 3000);

  return (
    <div className={classes.introContainer}>
      <Container maxWidth="md">
        <div className={classes.titleContainer}>
          <BlockRevealAnimation delay={1} duration={1} color="white">
            <span className={classes.title}>INTRO</span>
          </BlockRevealAnimation>
        </div>

        <div className={classes.infoContainer}>
          <Fade bottom cascade delay={1000}>
            <div>
              <div className={classes.info}>
                Hi There, I am
                <span className={classes.name}>
                  <span> </span>
                  Harsh.<span> </span>
                </span>
                <p>
                  A self-taught hard working freelance{" "}
                  <span className="change"></span>
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </div>
  );
};
export default Index;
