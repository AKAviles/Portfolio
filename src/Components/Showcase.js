import React from "react";
import "../css/showcase.css";
import LiveLinks from "./LiveLinks";

export default function Showcase({
  activeDiv,
  pinnedRepos,
  skills,
  readMe,
  imageURL,
  received,
}) {
  return (
    <div
      className={`${
        activeDiv.active === "showcase" ? "showcase-container" : "hidden"
      }`}
    >
      <h2 className='header-styling'>Showcase</h2>
      <hr></hr>
      <div className='repo-container'>
        {pinnedRepos.map((repo, i) => (
          <div key={i} className='card-container'>
            <img src={imageURL[i]} alt={repo.repo} className='images' />
            <h3 className='title-styling'>{repo.repo}</h3>

            <div>
              <ul>
                {setTimeout(() => {
                  skills[i].map((skill, j) => {
                    if (j < skills[i].length - 1) {
                      return <li>{skill}</li>;
                    } else {
                      return null;
                    }
                  });
                }, 3000)}

                {/* <li>React</li>
                  <li>Responsive design via CSS and responsive-react</li>
                  <li>Custom, cohesive visual design language</li>
                  <li>Complex interactivity via state management and hooks</li>
                  <li>SVG images</li> */}
              </ul>
            </div>

            <nav className='links-cards'>
              <LiveLinks readMe={readMe} i={i} />
              <a href={repo.link}>GitHub</a>
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
}
