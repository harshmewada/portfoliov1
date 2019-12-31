import React, { useState, useEffect } from "react";

import "./App.css";
import Intro from "./Components/Intro";
import { makeStyles } from "@material-ui/core/styles";

import Sidebar from "./Components/sidebar";
import Design from "./Components/Design/design2";
import Tools from "./Components/Tools";
import Contact from "./Components/Contact";
import { Grid, Hidden, Container, Button } from "@material-ui/core";
import Info from "./Components/Intro/info";

const AppContainer = () => {
  const [bgColor, setbgColor] = useState("#F2F2F2");
  const useStyles = makeStyles(theme => ({
    container: { display: "flex", backgroundColor: bgColor, width: "100vw" },
    menucontainer: {
      borderRight: "1px solid #c6c6c6",
      position: "fixed",
      width: "4vw"
    },
    contentContainer: {
      flex: 30
    },
    menu: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",

      justifyContent: "space-around",
      alignItems: "center"
    },
    desing: {
      backgroundColor: "#333333"
    },
    menuText: {
      writingMode: "vertical-lr",
      transform: "rotate(180deg)",

      textOrientation: "use-glyph-orientation"
    },

    padings: {}
  }));
  const classes = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <div className={classes.container}>
        <Hidden smDown={true}>
          <Sidebar />
        </Hidden>

        <Container maxWidth="lg">
          <Grid container direction="row">
            <Grid item lg={12} className={classes.padings}>
              <Intro />
              <Info />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.desing}>
        <Design />
        <Tools />
        <Contact />
      </div>
    </div>
  );
};
export default AppContainer;
