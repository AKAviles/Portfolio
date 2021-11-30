import React from "react";
import "../css/navigation.css";
import gitHubLogo from "../images/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png";
import linkedInLogo from "../images/LinkedIn-Logos/LI-In-Bug.png";

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
      </nav>
      <div className='logos-div'>
        <a href='https://github.com/AKAviles'>
          <img src={gitHubLogo} alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/anthony-k-aviles'>
          <img src={linkedInLogo} alt='github' className='linkedin-logo' />
        </a>
      </div>
    </div>
  );
}
