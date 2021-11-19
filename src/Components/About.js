import React from "react";
import "../css/App.css";
import "../css/about.css";

export default function About() {
  return (
    <div className='hidden'>
      <h2 className='header-styling'>About</h2>
      <hr className='hr-styling'></hr>
      <p className='text-styling-about'>
        Hello! I'm Anthony Aviles, a full-stack web developer in Phoenix,
        Arizona. I have experience in both front-end design and back-end
        architectures, with ample training in the technologies powering web,
        mobile, and desktop applications.
      </p>
      <p className='text-styling-about'>
        My professional career has been in customer service in the financial
        sector. I started out with servicing loans on a collections team at
        Wells Fargo, and I've since found myself in the brokerage industry. I
        worked my way up at Charles Schwab as Technical Support Representative,
        and I now work at Robinhood as a licenced Representative.
      </p>
      <p className='text-styling-about'>
        My work has taught me how to navigate conversations effectively, and how
        to manage my time to produce high-quality interactions and be a valuable
        resource to the teams I'm apart of.
      </p>
    </div>
  );
}
