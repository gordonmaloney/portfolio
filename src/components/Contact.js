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
              <a target="_blank" href="https://github.com/gordonmaloney"><u>github</u></a><br />
              <a target="_blank" href="https://twitter.com/istreasatuatha"><u>twitter</u></a><br />
              <a target="_blank" href="https://www.instagram.com/gordonmaloney/"><u>instagram</u></a>
          
        </p>
      </center>
    </div>
  );
};
