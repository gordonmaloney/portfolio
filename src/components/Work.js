import React from "react";

import GobbleblogLogo from './images/Gobbleblog-logo.png'
import Lingrlogo from './images/lingr-full-logo.png'
import WhatluckLogo from './images/whatluck-logo.png'

export const Work = () => {
  return (
    <div>
      <span className="header" style={{position: "fixed"}}>
        <span className="header1" >my work</span>
      </span>

      <div
        style={{ width: "100%", minWidth: "80vw", backgroundColor: "red" }}
      ></div>
<br /><br /><br /><br /><br />

      <center>

      <img src={Lingrlogo} style={{width: "400px", paddingBottom: 0}} />
      <p className="subhead2 project-desc">
        Lingr is a microblogging site for language learners. It allows users to write short messages in a language they’re learning and have native speakers correct them or interact with them.
      </p>
      <br /><br />


      <img src={WhatluckLogo} style={{width: "400px", paddingBottom: 0}} />
      <p className="subhead2 project-desc">
        whatLuck is a one-stop potluck organising app - to help friends coordinate who’s going to bring what to a potluck (or a barbeque, or a drinks night, or anywhere you’re eating and drinking).
      </p>
      <br /><br />


      <img src={GobbleblogLogo} style={{width: "200px", paddingBottom: 0}} />
      <p className="subhead2 project-desc">
        Gobbleblog is a platform for helping people remember which takeaways they’ve had and enjoyed, and which they don’t want to order from again.
      </p>


      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </center>
    </div>
  );
};
