import React from "react";

import WhatluckLogo from './images/whatluck-logo.png'
import Fab from "@mui/material/Fab";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export const Whatluck = () => {
  const history = useHistory();

  return (
    <div>
      <span className="header" style={{ position: "fixed" }}>
        <Fab
          sx={{ backgroundColor: "#EBEDF2" }}
          onClick={() => {
            history.push("../work");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
            <ArrowBackIosIcon sx={{marginLeft: "10px"}}/>
        </Fab>
      </span>

      <div
        style={{ width: "100%", minWidth: "80vw", backgroundColor: "red" }}
      ></div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <center>
        <img src={WhatluckLogo} style={{ width: "400px", paddingBottom: 0 }} />
        <p className="subhead2 project-desc">
        whatLuck is a one-stop potluck organising app - to help friends coordinate who’s going to bring what to a potluck (or a barbeque, or a drinks night, or anywhere you’re eating and drinking).
        </p>
        

        <p className="subhead2 project-desc">
        The front-end uses React, Redux, Bootstrap, Material UI and Axios, the back-end uses MongoDB, Express and Node.js. There is also an app version built with React Native.
        </p>

        <p className="subhead2 project-desc">
          It’s live 
          <a href="https://whatluck.netlify.app/" target="_blank"> <u>here</u>.</a>

           <br />
          And on GitHub 
          <a href="https://github.com/gordonmaloney/whatLuck-mern" target="_blank"> <u>here</u>.</a>
        </p>

        <p className="subhead2 project-desc">
          This project was awarded with Honors in the NuCamp front-end bootcamp.
        </p>
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </center>
    </div>
  );
};
