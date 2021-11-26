import React, { useState, useEffect } from "react";
import "../css/App.css";
import Navigation from "./Navigation";
import Intro from "./Intro";
import About from "./About";
import Showcase from "./Showcase";
import Contact from "./Contact";
import axios from "axios";

function App() {
  const initialDiv = {
    active: "about",
  };
  const [activeDiv, setActiveDiv] = useState(initialDiv);
  const [pinnedRepos, setPinnedRepos] = useState([]);
  const [skills, setSkills] = useState([]);
  const [readMe, setReadMe] = useState([]);
  const [imageURL, setImageURL] = useState([]);
  const [received, setReceived] = useState(false);

  // const [apiData, setApiData] = useState([]);
  // //Get Pinned repos || [{owner, repo, link}]
  // Pinned: https://gh-pinned-repos.egoist.sh/?username=AKAviles
  // ReadMe:  https://raw.githubusercontent.com/AKAviles/${pinnedRepos.repo}/main/README.md
  // Images: https://raw.githubusercontent.com/AKAviles/${repo.repo}/main/screenshots/preview.PNG
  // Skills: https://raw.githubusercontent.com/AKAviles/${repo.repo}/main/skills.md

  useEffect(() => {
    const fetch = () => {
      const repoURL = "https://gh-pinned-repos.egoist.sh/?username=AKAviles";
      try {
        axios.get(repoURL).then((response) => {
          setPinnedRepos(response.data);

          response.data.map((repo) =>
            axios
              .get(
                `https://raw.githubusercontent.com/AKAviles/${repo.repo}/main/skills.md`
              )
              .then((response) => {
                const array = skills;
                const listedSkills = response.data.split("\n");
                array.push(listedSkills);
                setSkills(array);
              })
              .then(() => {
                axios
                  .get(
                    `https://raw.githubusercontent.com/AKAviles/${repo.repo}/main/README.md`
                  )
                  .then((response) => {
                    const array = readMe;
                    array.push(response.data);
                    setReadMe(array);
                  });
              })
              .then(() => {
                const array = imageURL;
                array.push(
                  `https://raw.githubusercontent.com/AKAviles/${repo.repo}/main/screenshots/preview.PNG`
                );
                setImageURL(array);
              })
              .then(() => {
                setReceived(true);
              })
          );
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDivChange({ target }) {
    setActiveDiv({
      ...activeDiv,
      active: target.name,
    });
  }

  return (
    <div>
      {received ? (
        <article className='main-flex'>
          <div className='left-flex'>
            <Navigation
              activeDiv={activeDiv}
              handleDivChange={handleDivChange}
            />
            <Intro />
          </div>
          <div className='right-flex'>
            <About activeDiv={activeDiv} />
            <Showcase
              activeDiv={activeDiv}
              pinnedRepos={pinnedRepos}
              skills={skills}
              readMe={readMe}
              imageURL={imageURL}
              received={received}
            />
            <Contact activeDiv={activeDiv} />
          </div>
        </article>
      ) : null}
    </div>
  );
}

export default App;
