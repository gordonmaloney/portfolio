import React from "react";

import GobbleblogLogo from "./images/Gobbleblog-logo.png";
import Fab from "@mui/material/Fab";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export const Gobbleblog = () => {
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
          <ArrowBackIosIcon sx={{ marginLeft: "10px" }} />
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
        <img
          src={GobbleblogLogo}
          style={{ width: "200px", paddingBottom: 0 }}
        />
        <p className="subhead2 project-desc">
        Gobbleblog is a platform for helping people remember which takeaways they’ve had and enjoyed, and which they don’t want to order from again. 
        </p>
        

        <p className="subhead2 project-desc">
        It has text-to-speech and OCR image-to-text functionality, including using web sockets to allow desktop users to upload an image from their mobile.        </p>

        <p className="subhead2 project-desc">
          It’s live 
          <a href="https://gobbleblog.netlify.app/" target="_blank"> <u>here</u>.</a>

           <br />
          And on GitHub 
          <a href="https://github.com/gordonmaloney/gobbleblog-mern" target="_blank"> <u>here</u>.</a>
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
