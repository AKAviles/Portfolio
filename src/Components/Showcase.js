import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../css/showcase.css";

export default function Showcase({ activeDiv }) {
  const [pinnedRepos, setPinnedRepos] = useState([]);
  const [skills, setSkills] = useState("");
  const [readMe, setReadMe] = useState("");
  const [imageURL, setImageURL] = useState("");

  // const [apiData, setApiData] = useState([]);
  // //Get Pinned repos || [{owner, repo, link}]
  // Pinned: https://gh-pinned-repos.egoist.sh/?username=AKAviles
  // ReadMe:  https://raw.githubusercontent.com/AKAviles/${pinnedRepos.repo}/main/README.md
  // Images: https://raw.githubusercontent.com/AKAviles/${repo.repo}/main/screenshots/preview.PNG
  // Skills: https://raw.githubusercontent.com/AKAviles/${repo.repo}/main/skills.md

  const fetch = useCallback(() => {
    const repoURL = "https://gh-pinned-repos.egoist.sh/?username=AKAviles";
    try {
      axios
        .get(repoURL)
        .then((response) => {
          setPinnedRepos(response.data);
        })
        .then(
          pinnedRepos.map((repo) =>
            axios
              .get(
                `https://raw.githubusercontent.com/AKAviles/${repo.repo}/main/skills.md`
              )
              .then(console.log(repo.repo))
              .then((response) => {
                setSkills([...skills, response.data]);
              })
              .then(
                axios
                  .get(
                    `https://raw.githubusercontent.com/AKAviles/${repo.repo}/main/README.md`
                  )
                  .then((response) => {
                    setReadMe(response.data);
                  })
              )
              .then(
                setImageURL([
                  ...imageURL,
                  `https://raw.githubusercontent.com/AKAviles/${repo.repo}/main/screenshots/preview.PNG`,
                ])
              )
          )
        );
    } catch (err) {
      console.log(err);
    }
  }, [pinnedRepos, skills]);

  useEffect(() => {
    fetch();
  }, []);

  console.log(skills, imageURL);

  return (
    <div
      className={`${
        activeDiv.active === "showcase" ? "showcase-container" : "hidden"
      }`}
    >
      <h2 className='header-styling'>Showcase</h2>
      <hr></hr>
      <div className='repo-container'>
        {pinnedRepos.map((repo) => (
          <div key={Math.random()} className='card-container'>
            <img src='null' alt='' className={null} />
            <h3 className='title-styling'>{repo.repo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
