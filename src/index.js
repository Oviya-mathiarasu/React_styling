import React from "react";
import ReactDOM from "react-dom";
const fn = 7;
const customStyle = {
color:"Blue",
fontSize:"20px",
border:"1px solid red"
}
customStyle.color="brown";
ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello world</h1>
    <p>your favorite number is {fn}</p>
    <img
      className="img"
      src="https://hot-thai-kitchen.com/wp-content/uploads/2021/11/chili-garlic-noodles-blog-480x270.jpg"
      alt="noodles"
    />
  </div>,
  document.getElementById("root")
);
