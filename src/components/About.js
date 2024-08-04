import React from "react";
import { image } from "../data/data.js"; // Import the image variable

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a brief description about myself and my work.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
