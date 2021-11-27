import React from "react";
import { useHistory } from "react-router";
import GobbleblogLogo from "./images/Gobbleblog-logo.png";
import Lingrlogo from "./images/lingr-full-logo.png";
import WhatluckLogo from "./images/whatluck-logo.png";

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import LingrVideo from "./images/lingr-video.mp4";
import WhatluckVideo from "./images/whatluck-preview.mp4";
import Fade from '@mui/material/Fade';

export const Work = () => {
  const history = useHistory();


  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500,
      backgroundColor: "rgba(0,0,0,0)",
    },
  });


  return (
    <div>
      <span className="header" style={{ position: "fixed" }}>
        <span
          className="header1"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          my work
        </span>
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
      <CustomWidthTooltip
          followCursor
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 800 }}
          placement="right"
          title={
            <video loop autoPlay width="100%" height="auto" style={{opacity: "0.95", borderRadius: "15px"}}>
              <source src={LingrVideo} type="video/mp4" />
            </video>
          }
        >
        <img
          src={Lingrlogo}
          style={{ width: "400px", paddingBottom: 0, cursor: "pointer" }}
          onClick={() => {
            history.push("./lingr");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
        </CustomWidthTooltip>
        <p className="subhead2 project-desc">
          Lingr is a microblogging site for language learners. It allows users
          to write short messages in a language they’re learning and have native
          speakers correct them or interact with them.
        </p>
        <br />
        <br />

        <CustomWidthTooltip
          followCursor
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 800 }}
          placement="right"
          title={
            <video loop autoPlay width="100%" height="auto" style={{opacity: "0.95", borderRadius: "15px"}}>
              <source src={WhatluckVideo} type="video/mp4" />
            </video>
          }
        >
          <img
            src={WhatluckLogo}
            style={{ width: "400px", paddingBottom: 0, cursor: "pointer" }}
            onClick={() => {
              history.push("./whatluck");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        </CustomWidthTooltip>

        <p className="subhead2 project-desc">
          whatLuck is a one-stop potluck organising app - to help friends
          coordinate who’s going to bring what to a potluck (or a barbeque, or a
          drinks night, or anywhere you’re eating and drinking).
        </p>
        <br />
        <br />

        <img
          src={GobbleblogLogo}
          style={{ width: "200px", paddingBottom: 0, cursor: "pointer" }}
          onClick={() => {
            history.push("./gobbleblog");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
        <p className="subhead2 project-desc">
          Gobbleblog is a platform for helping people remember which takeaways
          they’ve had and enjoyed, and which they don’t want to order from
          again.
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
      </center>
    </div>
  );
};
