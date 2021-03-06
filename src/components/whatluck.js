import React from "react";

import WhatluckLogo from "./images/whatluck-logo.png";
import Fab from "@mui/material/Fab";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router";

import video from "./images/whatluck-preview.mp4";

import { Container, Col, Row } from "reactstrap";

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
          <ArrowBackIosIcon sx={{ marginLeft: "10px" }} />
        </Fab>
      </span>

      <div
        style={{ width: "100%", minWidth: "80vw", backgroundColor: "red" }}
      ></div>
      <br />
      <br />

      <center>
        <img
          src={WhatluckLogo}
          style={{ width: "80%", maxWidth: "400px", paddingBottom: 0 }}
        />
        <p className="subhead2 project-desc">
          whatLuck is a one-stop potluck organising app - to help friends
          coordinate who’s going to bring what to a potluck (or a barbeque, or a
          drinks night, or anywhere you’re eating and drinking).
        </p>

        <Container
          style={{
            width: "90%",
            paddingLeft: 0,
            marginLeft: 0,
            paddingRight: 0,
            marginRight: 0,
          }}
        >
          <Row className="align-items-center">
            <Col xs="12" sm="6">
              <p className="subhead2 project-desc">
                The front-end uses React, Redux, Bootstrap, Material UI and
                Axios, the back-end uses MongoDB, Express and Node.js. There is
                also an app version built with React Native.
              </p>

              <p className="subhead2 project-desc">
                It’s live
                <a href="https://whatluck.netlify.app/" target="_blank">
                  {" "}
                  <u>here</u>.
                </a>
                <br />
                And on GitHub
                <a
                  href="https://github.com/gordonmaloney/whatLuck-mern"
                  target="_blank"
                >
                  {" "}
                  <u>here</u>.
                </a>
              </p>

              <p className="subhead2 project-desc">
                This project was awarded with Honors in the NuCamp front-end
                bootcamp.
              </p>
            </Col>

            <Col xs="12" sm="6">
              <video
                loop
                autoPlay
                width="130%"
                height="auto"
                style={{ borderRadius: "15px", marginLeft: "-15%" }}
              >
                <source src={video} type="video/mp4" />
              </video>
            </Col>
          </Row>
        </Container>

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
