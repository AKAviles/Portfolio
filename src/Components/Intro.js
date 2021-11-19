import React from "react";
import "../css/intro.css";

export default function Intro() {
  return (
    <div className='intro-container intro-background-image'>
      <div>
        <p className='intro-small'>Hello, I'm</p>
        <p className='intro-name'>Anthony Aviles</p>
      </div>
      <div className='skills-styling'>
        <p> Full Stack Developer | Front End Developer | Back End Developer</p>
        <p> Javascript | React.js | Node.js | PostgreSQL</p>
      </div>
    </div>
  );
}
