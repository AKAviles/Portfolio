import React from "react";
import emailjs from "emailjs-com";
import "../css/contact.css";

export default function Contact({ activeDiv, handleDivChange }) {
  function sendEmail(e) {
    emailjs
      .sendForm(
        "service_j5rn09g",
        "template_k4amkpe",
        e.target,
        "user_PdBOZfJQQNaX4mUX3pEFw"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div
      className={`${
        activeDiv.active === "contact" ? "contact-container" : "hidden"
      }`}
    >
      <h2 className='header-styling'>Contact Me!</h2>
      <hr></hr>
      <div className='form-container'>
        <form className='form-setup' onSubmit={sendEmail}>
          <input name='name' type='text' placeholder='Name' />
          <input name='email' type='text' placeholder='E-mail' />
          <textarea
            name='message'
            type='text'
            placeholder='Send me a message!'
          />

          <button type='submit' value='Send'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
