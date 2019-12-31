import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { social, font } from "../constants";
import { Popper, Fade, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  menu: {
    height: "100vh",
    alignItem: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "column",
    width: "5vw",
    position: "fixed",
    borderRight: "1px solid #c6c6c6"
  },
  menuText: {
    flexGrow: 1,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "1rem",
    color: "#777777",
    alignSelf: "center",
    writingMode: "vertical-lr",
    transform: "rotate(180deg)",
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer"
  },
  paper: {
    marginLeft: "5vh",
    borderRadius: "20px",
    border: "3px solid white",
    padding: "2vh 4vh",
    backgroundColor: "#333333",
    boxShadow: "1vh 1vh 5vh rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: font.secondary,
    fontSize: "2.5vh",
    color: "#e5e5e5"
  },
  btn: {
    color: "#ff6f61"
  }
}));

const Sidebar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  return (
    <div className={classes.menu}>
      <p className={classes.menuText}>{` <  `}Social</p>

      <p className={classes.menuText}>
        <a
          href={social.insta}
          className={classes.menuText}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </p>

      <p className={classes.menuText}>
        <a
          href={social.facebook}
          className={classes.menuText}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </p>
      <p className={classes.menuText}>
        <a
          href={social.dribble}
          className={classes.menuText}
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribble
        </a>
      </p>

      <div className={classes.menuText}>
        <Popper
          id="jio"
          open={open}
          anchorEl={anchorEl}
          transition
          placement="right"
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <div className={classes.paper}>
                <span>harshmewada056@gmail.com</span>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText("harshmewada056@gmail.com");
                  }}
                  className={classes.btn}
                >
                  Copy
                </Button>
              </div>
            </Fade>
          )}
        </Popper>

        <span onClick={handleClick} id="jio" className={classes.menuText}>
          Email
        </span>
      </div>
    </div>
  );
};
export default Sidebar;
