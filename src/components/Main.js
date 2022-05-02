import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { useHistory } from "react-router";
import { AnimatedSwitch } from "react-router-transition";

import { Work } from "./Work";
import { Contact } from "./Contact";

import { Lingr } from "./Lingr";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Whatluck } from "./whatluck";
import { Gobbleblog } from "./Gobbleblog";

function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  return (
    <Box sx={{ pb: 7, borderRadius: "50px" }}>
      <Paper
        sx={{
          boxShadow:
            "0px 100px 150px 150px white, 0px 220px 200px 200px white, 0px 1px 10px 3px black",
          position: "fixed",
          bottom: window.innerWidth > 600 ? 100 : 50,
          left: window.innerWidth > 600 ? "25%" : "5%",
          right: window.innerWidth > 600 ? "25%" : "5%",
          width: window.innerWidth > 600 ? "50%" : "90%",
          fontFamily: "Lato",
          borderRadius: "10px",
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ borderRadius: "10px", backgroundColor: "#EBEDF2" }}
        >
          <BottomNavigationAction
            onClick={() => {
              history.push("../");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            label={<span className="bottomNav">home</span>}
          />
          <BottomNavigationAction
            onClick={() => {
              history.push("./work");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            label={<span className="bottomNav">my work</span>}
          />
          My work
          <BottomNavigationAction
            onClick={() => {
              history.push("./contact");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            label={<span className="bottomNav">get in touch</span>}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export const Main = () => {
  return (
    <BrowserRouter>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/whatluck">
          <Whatluck />
        </Route>
        <Route exact path="/gobbleblog">
          <Gobbleblog />
        </Route>
        <Route exact path="/lingr">
          <Lingr />
        </Route>
      </AnimatedSwitch>
      <FixedBottomNavigation />
    </BrowserRouter>
  );
};
