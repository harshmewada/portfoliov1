import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@material-ui/core";
import { font } from "../../constants/";
import BlockRevealAnimation from "react-block-reveal-animation";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  introContainer: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5vh"
    }
  },

  infoContainer: {
    marginTop: "20vh",
    [theme.breakpoints.down("sm")]: {}
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

  change: {
    content: ""
  }
}));
const Info = () => {
  const [desgin, setDesign] = useState(true);
  const classes = useStyles();
  setTimeout(() => {
    setDesign(!desgin);
  }, 3000);

  return (
    <div className={classes.introContainer}>
      <Container maxWidth="md">
        <Fade bottom delay={0}>
          <p className={classes.otherInfo}>
            I have a good taste for design, Animation and Big Typography. I am
            currently focusing on Designing and developing unique and engaging
            digital Experiences.
          </p>
        </Fade>
      </Container>
    </div>
  );
};
export default Info;
