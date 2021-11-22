import React, { useState } from "react";

import "../css/App.css";
import Navigation from "./Navigation";
import Intro from "./Intro";
import About from "./About";
import Showcase from "./Showcase";
import Contact from "./Contact";

function App() {
  const initialDiv = {
    active: "about",
  };
  const [activeDiv, setActiveDiv] = useState(initialDiv);

  function handleDivChange({ target }) {
    setActiveDiv({
      ...activeDiv,
      active: target.name,
    });
  }

  return (
    <article className='main-flex'>
      <div className='left-flex'>
        <Navigation activeDiv={activeDiv} handleDivChange={handleDivChange} />
        <Intro />
      </div>
      <div className='right-flex'>
        <About activeDiv={activeDiv} />
        <Showcase activeDiv={activeDiv} />
        <Contact activeDiv={activeDiv} />
      </div>
    </article>
  );
}

export default App;
