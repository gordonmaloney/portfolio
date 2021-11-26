import React from "react";
import ReactLogo from "./images/react-logo.png";
import ReduxLogo from "./images/redux-logo.png";
import MongoDBLogo from "./images/mongodb-logo.png";
import PhotoshopLogo from "./images/photoshop-logo.png";

import Draggable from "react-draggable";

export const Home = () => {
  return (
    <>
      <span className="header" style={{ position: "fixed" }}>
        <span className="header1">Gordon Maloney</span>
        <br />
        <span className="header2">full-stack web developer</span>
      </span>

      <div
        style={{ width: "100%", minWidth: "80vw", backgroundColor: "red" }}
      ></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="subhead">
        With more than 5 years experience using digital technology to campaign
        and influence, I find tech solutions for problems - with a key focus on
        user experience.
      </p>
      <br />
      <br />

      <div className="stack-logos">
        <Draggable>
        <div className="hvr-grow">
            <img
              style={{ pointerEvents: "none" }}
              className="logo-img hvr-grow"
              src={ReactLogo}
              alt="React"
            />
          </div>
        </Draggable>
        <Draggable>
        <div className="hvr-grow">
            <img
              style={{ pointerEvents: "none" }}
              className="logo-img hvr-grow"
              src={ReduxLogo}
              alt="Redux"
            />
          </div>
        </Draggable>
        <Draggable>
          <div className="hvr-grow">
            <img
              style={{ pointerEvents: "none" }}
              className="logo-img hvr-grow"
              src={MongoDBLogo}
              alt="MongoDB"
            />
          </div>
        </Draggable>
        <Draggable>
        <div className="hvr-grow">
            <img
              className="logo-img hvr-grow"
              style={{ pointerEvents: "none" }}
              src={PhotoshopLogo}
              alt="Photoshop"
            />
          </div>
        </Draggable>
      </div>
    </>
  );
};
