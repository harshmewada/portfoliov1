import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@material-ui/core";
import { font } from "../../constants/";

import BlockRevealAnimation from "react-block-reveal-animation";
import Fade from "react-reveal/Fade";
import Project from "./project";
import SlideShow from "./slideShow";
import one from "../../assests/1.png";
import two from "../../assests/2.png";
import three from "../../assests/3.png";

const useStyles = makeStyles(theme => ({
  Container: {
    backgroundColor: "#333333"
  },
  titleContainer: {
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "20vh"
    }
  },
  title: {
    fontFamily: font.primary,
    fontSize: "10vw",
    color: "#333333",
    WebkitTextStroke: "3px #484848",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10vh",
      letterSpacing: ".5vh"
    }
  },
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
    border: "1px solid #4a4a4a"
  },
  imgBorder: {
    borderRadius: "5vh",
    border: "2vh solid #333333",
    boxShadow:
      "5px 5px 10px rgba(0, 0, 0, 0.25), -5px -5px 10px rgba(68, 68, 68, 0.4)"
  },
  projectContainer: {
    padding: "5vh 0vh",
    [theme.breakpoints.down("sm")]: {
      padding: "3vh 0vh"
    }
  },
  appTitle: {
    fontFamily: font.primary,
    fontSize: "7vh",
    textTransform: "uppercase",
    color: "#484848"
  },
  appInfo: {
    fontFamily: font.secondary,
    fontSize: "3vh",
    color: "#676767"
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
      <Container maxWidth="md">
        <Fade bottom cascade delay={0} duration={1000}>
          <div className={classes.titleContainer}>
            <div className={classes.title}>
              <BlockRevealAnimation delay={0} duration={1} color="white">
                WORK
              </BlockRevealAnimation>
            </div>
          </div>
        </Fade>
        <div className={classes.projectContainer}>
          <Project
            title="dark papers"
            url={one}
            info="This is my own project. I designed the first initial prototype in Figma. Then I decided to work on this on my free time. I developed the app with help of react-native framework. The most challenging part of this project was to optimize the app for better performance"
          />
        </div>
        <div className={classes.projectContainer}>
          <Project
            direction="row-reverse"
            title="bulhen"
            url={two}
            info="Bulhen is an automotive company. They reached out to me for a modern looking and secure e-commerce mobile application for their dealers. I designed the app with Figma and once the design was approved , I created the app with react-native and firebase."
          />
        </div>
        <div className={classes.projectContainer}>
          <SlideShow
            title="Social media"
            url="https://source.unsplash.com/random"
            info="I designed some banners and social media posters back when i was doing  an Intership. It was a fun journey and i learned a lot about graphics design."
          />
        </div>
        <div className={classes.projectContainer}>
          <Project
            direction="row-reverse"
            title="This Place awaits for your project"
            url={three}
          />
        </div>
      </Container>
    </div>
  );
};
export default Index;
