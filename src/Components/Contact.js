import React from "react";
import "../css/contact.css";

export default function Contact() {
  return (
    <div className='hidden'>
      <h2 className='header-styling'>Contact Me!</h2>
      <hr></hr>
      <div>
        <form>
          <div>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='E-mail' />
            <textarea type='text' placeholder='Send me a message!' />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}
