import React, { useState, useEffect } from "react";

export default function LiveLinks({ readMe, i }) {
  const [liveLink, setLiveLink] = useState([]);

  useEffect(() => {
    function getPreviewLink(readMe) {
      const previewLinks = readMe.map((read) => {
        const clauses = [
          "Preview",
          "Demo",
          "App",
          "Application",
          "Site",
          "API",
        ];
        let match = "";
        clauses.forEach((clause) => {
          if (!match) {
            const testCase = new RegExp(`\\[Live ${clause}]\\((.*)\\)`);
            const matchAttempt = read.match(testCase);
            if (matchAttempt) match = matchAttempt[1];
          }
        });
        return match || "#";
      });
      setLiveLink(previewLinks);
    }
    getPreviewLink(readMe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <a href={liveLink[i]}>Live Demo</a>
    </>
  );
}
