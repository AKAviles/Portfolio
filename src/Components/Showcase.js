import React from "react";
import "../css/showcase.css";

export default function Showcase({
  activeDiv,
  pinnedRepos,
  liveLink,
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

            <div className='desc-cards'>
              <p className='desc'>{repo.description}</p>
            </div>

            <nav className='links-cards'>
              <a href={liveLink[i]}>Live Demo</a>
              <a href={repo.link}>GitHub</a>
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
}
