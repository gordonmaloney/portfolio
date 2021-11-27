import React from "react";

import Lingrlogo from "./images/lingr-full-logo.png";
import Fab from "@mui/material/Fab";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import LingrVideo from "./images/lingr-video.mp4";
import { Container, Col, Row } from "reactstrap";

export const Lingr = () => {
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
        <img src={Lingrlogo} style={{ width: "400px", paddingBottom: 0 }} />
        <p className="subhead2 project-desc">
          Lingr is a microblogging site for language learners. It allows users
          to write short messages in a language they’re learning and have native
          speakers correct them or interact with them.
        </p>

        <Container style={{ width: "90%" }}>
          <Row className="align-items-center">
            <Col>
              <video
                loop
                autoPlay
                width="100%"
                height="auto"
                style={{ borderRadius: "15px" }}
              >
                <source src={LingrVideo} type="video/mp4" />
              </video>
            </Col>
            <Col>
              <p className="subhead2 project-desc">
                It is built using the MERN stack, with JWT authentication.
              </p>

              <p className="subhead2 project-desc">
                It’s live
                <a href="https://lingr.netlify.app/" target="_blank">
                  {" "}
                  <u>here</u>.
                </a>
                <br />
                And on GitHub
                <a
                  href="https://github.com/gordonmaloney/lingr-mern"
                  target="_blank"
                >
                  {" "}
                  <u>here</u>.
                </a>
              </p>

              <p className="subhead2 project-desc">
                This project was awarded with Honors in the NuCamp full-stack
                bootcamp.
              </p>
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
