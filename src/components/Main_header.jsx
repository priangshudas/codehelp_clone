import React from "react";
import "../styles/Header.css";

const Main_header = () => {
  return (
    <>
      <div id="main_header">
        <img
          src="https://cdn.thecodehelp.in/qdo970k2vrxj8kefd1zt_9520ff468a.svg"
          alt="img"
        />
        <div id="anchors_div">
          <a href="">About Us</a>
          <a href="">Courses</a>
          <a href="">Labs</a>
          <a href="">Contact</a>
        </div>
        <div id="buttons_div">
          <button id="btn1">Dashboard</button>
          <button id="btn2">Login</button>
        </div>
      </div>
    </>
  );
};

export default Main_header;
