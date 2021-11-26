import React from "react";

export const Contact = () => {
  return (
    <div>
      <span className="header" style={{position: "fixed"}}>
        <span className="header1">get in touch</span>
      </span>

      <div
        style={{ width: "100%", minWidth: "80vw", backgroundColor: "red" }}
      ></div>
<br /><br /><br /><br /><br />

      <center>
        <p className="subhead">
          you can get in touch with me {" "}
            <a href="mailto:gordonmaloney@gmail.com" target="_blank">
            over email
          </a>
          <br /><br />
          or follow me on:
          <br />
              github<br />
              twitter<br />
              instagram
          
        </p>
      </center>
    </div>
  );
};
