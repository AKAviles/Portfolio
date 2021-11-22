import React from "react";
import "../css/navigation.css";

export default function Navigation({ activeDiv, handleDivChange }) {
  return (
    <div className='nav-container'>
      <div className='nav-icon'>
        <h2 className='nav-icon-text'>Anthony</h2>
        <h2 className='nav-icon-text'>Aviles</h2>
      </div>

      <nav className='nav-list'>
        <a value='intro' onClick={handleDivChange} href='#intro'>
          Intro
        </a>
        <hr />
        <a name='about' onClick={handleDivChange} href='#about'>
          About
        </a>
        <hr />
        <a name='showcase' onClick={handleDivChange} href='#showcase'>
          Showcase
        </a>
        <hr />
        <a name='contact' onClick={handleDivChange} href='#contact'>
          Contact
        </a>
        <hr />
      </nav>
    </div>
  );
}
