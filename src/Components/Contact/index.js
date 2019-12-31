import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { display } from "@material-ui/system";
import { font } from "../../constants";
import { Grid, List, Hidden } from "@material-ui/core";
import Insta from "../../assests/instagram.svg";
import Fb from "../../assests/facebook.svg";
import Whatsapp from "../../assests/whatsapp.svg";
import Gmail from "../../assests/email.svg";
import BlockRevealAnimation from "react-block-reveal-animation";
import Fade from "react-reveal/Fade";
import { social } from "../../constants";
const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#333333",
    paddingBottom: "5vh",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "0vh"
    }
  },
  contentContainer: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {}
  },
  titleContainer: {
    flexGrow: 1,
    margin: "5vh 0vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
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
    color: "#dcdcdc",
    textTransform: "uppercase",
    letterSpacing: ".2rem",
    fontSize: "3.1vw",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4vh"
    }
  },

  tableContainer: {
    flexGrow: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexGrow: 5,

      justifyContent: "center",
      alignItems: "center"
    }
  },
  socialContainer: {
    flexGrow: 1,
    padding: "5vh 0vh",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: "5vh 0vh"
    }
  },
  connectContainer: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column"
    }
  },
  contactMe: {
    fontFamily: font.primary,
    fontSize: "7vw",
    color: "#333333",
    letterSpacing: "0.2rem",
    textTransform: "Uppercase",
    WebkitTextStroke: "3px #484848",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7vh",
      WebkitTextStroke: "2px #484848"
    }
  },
  cityInfo: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  contactInfo: {
    fontFamily: font.secondary,
    fontSize: "3vh",
    color: "#676767",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5vh",
      textAlign: "center"
    }
  },
  tableHeading: {
    fontFamily: font.primary,
    color: "#565656",
    fontSize: "4vw",
    marginTop: "1vh",
    textTransform: "uppercase",
    justifySelf: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4vh"
    }
  },
  subHeading: {
    color: "#d3d3d3",
    fontFamily: font.secondary,
    fontSize: "1.3vw",
    lineHeight: "2em",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2vh"
    }
  },
  iconContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center"
    }
  },
  icon: {
    color: "#484848",
    height: "2vw",
    width: "2vw",
    [theme.breakpoints.down("sm")]: {
      height: "4vh",
      width: "4vh"
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
                  Let’s Create something valuable Toghether
                </span>
              </div>
            </div>
            <div className={classes.tableContainer}>
              <Grid container direction="row">
                <Grid item lg={6}>
                  <Grid container direction="column">
                    <Grid
                      item
                      lg={12}
                      sm={12}
                      className={classes.connectContainer}
                    >
                      <BlockRevealAnimation
                        delay={0}
                        duration={1}
                        color="white"
                      >
                        <p className={classes.contactMe}>Connect</p>
                      </BlockRevealAnimation>

                      <BlockRevealAnimation
                        delay={1}
                        duration={1}
                        color="white"
                      >
                        <p className={classes.contactMe}>with me</p>
                      </BlockRevealAnimation>
                    </Grid>
                    <Grid item lg={9} sm={12} className={classes.cityInfo}>
                      <span className={classes.contactInfo}>
                        I’m based in Palanpur, India but always open to the
                        world. Feel free to contact me for a project request.
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
                <Hidden smDown>
                  <Grid item lg={6} sm={12} md={12}>
                    <Grid container direction="row" style={{ width: "100%" }}>
                      <Grid
                        item
                        lg={6}
                        sm={6}
                        md={12}
                        style={{ width: "100%" }}
                      >
                        <p className={classes.tableHeading}>Social</p>
                        <p className={classes.subHeading}>
                          <a
                            href={social.insta}
                            className={classes.subHeading}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Instagram
                          </a>
                        </p>
                        <p className={classes.subHeading}>
                          <a
                            href={social.facebook}
                            className={classes.subHeading}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Facebook
                          </a>
                        </p>
                        <p className={classes.subHeading}>
                          <a
                            href={social.whatsapp}
                            className={classes.subHeading}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Whatsapp
                          </a>
                        </p>
                        <p className={classes.subHeading}>
                          <a
                            href={social.dribble}
                            className={classes.subHeading}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Dribble
                          </a>
                        </p>
                      </Grid>
                      {/* <Grid item lg={6} sm={6}>
                        <p className={classes.tableHeading}>Menu</p>
                        <p className={classes.subHeading}>Home</p>
                        <p className={classes.subHeading}>Design</p>
                        <p className={classes.subHeading}>Tolls</p>
                        <p className={classes.subHeading}>Contact</p>
                      </Grid> */}
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </div>
            <div className={classes.socialContainer}>
              <Grid container direction="row">
                <Grid
                  container
                  item
                  lg={1}
                  sm={3}
                  xs={3}
                  alignItems="center"
                  className={classes.iconContainer}
                >
                  <a
                    href={social.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Insta} className={classes.icon} />
                  </a>
                </Grid>
                <Grid
                  container
                  item
                  lg={1}
                  sm={3}
                  xs={3}
                  alignItems="center"
                  className={classes.iconContainer}
                >
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Fb} className={classes.icon} />
                  </a>
                </Grid>
                <Grid
                  container
                  item
                  lg={1}
                  sm={3}
                  xs={3}
                  alignItems="center"
                  className={classes.iconContainer}
                >
                  <a
                    href={social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Whatsapp} className={classes.icon} />
                  </a>
                </Grid>
                <Hidden smUp>
                  <Grid
                    container
                    item
                    lg={1}
                    sm={3}
                    xs={3}
                    alignItems="center"
                    className={classes.iconContainer}
                  >
                    <a
                      href="mailto:harshmewada056@gmail.com?Subject=Regarding%20Project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Gmail} className={classes.icon} />
                    </a>
                  </Grid>
                </Hidden>
              </Grid>
            </div>
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default Index;
