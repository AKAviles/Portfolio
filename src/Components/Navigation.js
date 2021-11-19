import React from "react";
import "../css/navigation.css";

export default function Navigation() {
  return (
    <div className='nav-container'>
      <div className='nav-icon'>
        <h2 className='nav-icon-text'>Anthony</h2>
        <h2 className='nav-icon-text'>Aviles</h2>
      </div>

      <nav className='nav-list'>
        <a href='#intro'>Intro</a>
        <hr />
        <a href='#about'>About</a>
        <hr />
        <a href='#showcase'>Showcase</a>
        <hr />
        <a href='#contact'>Contact</a>
        <hr />
      </nav>
    </div>
  );
}
