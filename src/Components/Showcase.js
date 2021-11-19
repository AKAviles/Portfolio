import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/showcase.css";

export default function Showcase() {
  const [pinnedRepos, setPinnedRepos] = useState([]);

  // const [apiData, setApiData] = useState([]);
  // //Get Pinned repos || [{owner, repo, link}]
  useEffect(() => {
    function getRepos() {
      axios({
        method: "get",
        url: "https://gh-pinned-repos.egoist.sh/?username=AKAviles",
      }).then((res) => {
        setPinnedRepos(res.data);
      });
    }
    getRepos();
  }, []);

  console.log(pinnedRepos);

  // //pinned repo api https://gh-pinned-repos.egoist.sh/?username=AKAviles
  // async function loadRepos(username) {
  //   try {
  //     const response = await fetch(
  //       `https://gh-pinned-repos.egoist.sh/?username=${username}`
  //     );
  //     const repoFromAPI = await response.json();
  //     setPinnedRepos(repoFromAPI);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // // get readme data from repo with https://raw.githubusercontent.com/${slicedProjectURL}/main/README.md api
  // async function getReadMe(projectURL) {
  //   const slicedProjectURL = projectURL.slice(19);
  //   const readMeURL = `https://raw.githubusercontent.com/${slicedProjectURL}/main/README.md`;
  //   try {
  //     const response = await fetch(readMeURL);
  //     return await response.text();
  //   } catch (err) {
  //     console.log(err);
  //     return "";
  //   }
  // }

  // function getPreviewLink(readme) {
  //   const clauses = ["Preview", "Demo", "App", "Application", "Site", "API"];
  //   let match = "";
  //   clauses.forEach((clause) => {
  //     if (!match) {
  //       const testCase = new RegExp(`\\[Live ${clause}]\\((.*)\\)`);
  //       const matchAttempt = readme.match(testCase);
  //       if (matchAttempt) match = matchAttempt[1];
  //     }
  //   });
  //   return match;
  // }

  // // get skills from https://raw.githubusercontent.com/${slicedProjectURL}/main/skills.md

  // async function getSkills(projectURL) {
  //   const slicedProjectURL = projectURL.slice(19);
  //   const skillsURL = `https://raw.githubusercontent.com/${slicedProjectURL}/main/skills.md`;
  //   try {
  //     const response = await fetch(skillsURL);
  //     if (response.ok) {
  //       const skillsData = await response.text();
  //       return skillsData.split("\n");
  //     } else throw new Error("skills.md was not found.");
  //   } catch (err) {
  //     console.log(err);
  //     return ["HTML", "CSS", "Javascript"];
  //   }
  // }

  // // // get image from https://raw.githubusercontent.com/${slicedProjectURL}/main/screenshots/preview.PNG

  // function getImage(projectURL) {
  //   const slicedProjectURL = projectURL.slice(19);
  //   const screenshotURL = `https://raw.githubusercontent.com/${slicedProjectURL}/main/screenshots/preview.PNG`;
  // }

  // Look into mapping or applying the following to actual divs or something returnable
  // useEffect(() => {
  //   async function testing(username) {
  //     await loadRepos(username);
  //     console.log(pinnedRepos);
  //     for (let repo of pinnedRepos) {
  //       let githubLink = repo.link;
  //       await getSkills(githubLink);
  //       console.log(promiseData.skills);
  //       let readMe = await getReadMe(githubLink);
  //       setPromiseData({
  //         ...promiseData,
  //         githubLink: githubLink,
  //         description: repo.description,
  //         title: repo.title,
  //       });
  //       getImage(githubLink);
  //       getPreviewLink(readMe);
  //       setApiData([...apiData, promiseData]);
  //       setPromiseData({ ...initialPromiseData });
  //     }
  //   }
  //   testing("AKAviles");
  // }, []);

  // console.log(apiData);

  return (
    <div className='hidden'>
      <h2 className='header-styling'>Showcase</h2>
      <hr></hr>
      <div className='repo-container'>
        {pinnedRepos.map((repo) => (
          <p className='title-styling'>{repo.repo}</p>
        ))}
      </div>
    </div>
  );
}
