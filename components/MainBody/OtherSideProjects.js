import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useIntersect from "../useIntersect";

import Link from "next/link";

import { ReactComponent as External } from "../../data/icons/external.svg";
import { ReactComponent as FolderIcon } from "../../data/icons/folder.svg";
const MainSection = styled.section`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transform: translateY(-20px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;

    filter: brightness(1.3);
    color: var(--color-text-lightest);
    -webkit-filter: brightness(1.3);
    filter: brightness(1.3);
  }
  .archive {
    font-size: 1.3rem;
    position: relative;
    color: var(--color-text-secondary);
    &:after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: -10px;
      transform-origin: right;
      transform: scale(0);
      background: currentColor;
      transition: transform 250ms ease-in;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    ${"" /* grid-auto-rows: 350px; */}
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    @media (max-width: 1080px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .grid-background {
      border-radius: 10px;
      transition: all 0.25s var(--transition);
      background: var(--color-background-primary-lighter);
    }
    .grid-background:hover,
    .grid-background:active {
      transform: translateY(-5px);
      transition: all 0.25s var(--transition);
    }
  }
  .grid-inner {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
  }
  .projects {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.5rem;
  }

  .folders svg {
    width: 40px;
    fill: var(--color-text-secondary);
    height: 40px;
  }
  .links a svg :hover {
    fill: var(--color-text-secondary);
  }
  .links a {
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
  }
  .links a svg {
    width: 20px;
    height: 20px;
    fill: var(--color-text-light);
  }
  h3 {
    font-size: 1.3rem;
    color: var(--color-text-lightest);
  }
  p {
    margin-top: 1rem;
    font-size: 1rem;
    color: var(--color-text-light);
  }
  .technology {
    margin-top: 1rem;
    color: var(--color-text-light);

    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    list-style: none;
  }
  .technology li {
    margin-right: 1.5rem;
  }
  .showMore {
    margin-top: 5rem;
    border: 1px solid var(--color-text-secondary);
    border-radius: 5px;
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--color-text-light);
    margin-left: 1.5rem;
    padding: 1.5rem;
  }
  .showMore:hover {
    color: var(--color-text-secondary);
  }
`;

const OtherSideProjects = () => {
  const [setRef, visible] = useIntersect({
    threshold: 0.2,
  });

  const [loadMore, setLoadMore] = useState(6);

  const showClick = (e) => {
    e.preventDefault();
    setLoadMore(loadMore + 4);
  };

  const [JSONData, setJSONData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setJSONData(data);
    };
    fetchData();
  }, []);

  return (
    <MainSection ref={setRef} visible={visible}>
      <h2>Other Side Projects</h2>
      <Link href="/archive">
        <a className="archive">View the archieve</a>
      </Link>
      <div className="grid">
        {projects.slice(0, loadMore).map((e, i) => {
          return (
            <div className="grid-background">
              <div className="grid-inner">
                <header key={i}>
                  <div className="projects">
                    <div className="folders">
                      <FolderIcon />
                    </div>
                    <div className="links">
                      <Link href={e.deployment}>
                        <a>
                          <External />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <h3>{e.title}</h3>
                  <div>
                    <p>{e.description} </p>
                  </div>
                </header>
                <footer>
                  <ul className="technology">
                    {e.tech.map((e, i) => {
                      return (
                        <li style={{ color: "#8892B0" }} key={i}>
                          {e}
                        </li>
                      );
                    })}
                  </ul>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
      {loadMore < JSONData.length && (
        <button className="showMore" onClick={showClick}>
          Show more
        </button>
      )}
    </MainSection>
  );
};
export default OtherSideProjects;
const projects = [
  {
    deployment: "https://amazon.dnjsskarb7.vercel.app/",
    title: "Amazon Landing Page Clone",
    description:
      "Building Amazon clone landing page with React, Styled-components, and slick-carousel",
    tech: ["React", "slick-carousel", "styled-components"],
  },
  {
    title: "Amazon Landing Page Clone",
    description:
      "Building Amazon clone landing page with React, Styled-components, and slick-carousel",
    tech: ["React", "slick-carousel", "styled-components"],
  },
  {
    title: "Amazon Landing Page Clone",
    description:
      "Building Amazon clone landing page with React, Styled-components, and slick-carousel",
    tech: ["React", "slick-carousel", "styled-components"],
  },
  {
    title: "Amazon Landing Page Clone",
    description:
      "Building Amazon clone landing page with React, Styled-components, and slick-carousel",
    tech: ["React", "slick-carousel", "styled-components"],
  },
  {
    title: "Amazon Landing Page Clone",
    description:
      "Building Amazon clone landing page with React, Styled-components, and slick-carousel",
    tech: ["React", "slick-carousel", "styled-components"],
  },
  {
    title: "Amazon Landing Page Clone",
    description:
      "Building Amazon clone landing page with React, Styled-components, and slick-carousel",
    tech: ["React", "slick-carousel", "styled-components"],
  },
  {
    title: "Amazon Landing Page Clone",
    description:
      "Building Amazon clone landing page with React, Styled-components, and slick-carousel",
    tech: ["React", "slick-carousel", "styled-components"],
  },
  {
    title: "Amazon Landing Page Clone",
    description:
      "Building Amazon clone landing page with React, Styled-components, and slick-carousel",
    tech: ["React", "slick-carousel", "styled-components"],
  },
  {
    title: "Amazon Landing Page Clone",
    description:
      "Building Amazon clone landing page with React, Styled-components, and slick-carousel",
    tech: ["React", "slick-carousel", "styled-components"],
  },
  {
    title: "Amazon Landing Page Clone",
    description:
      "Building Amazon clone landing page with React, Styled-components, and slick-carousel",
    tech: ["React", "slick-carousel", "styled-components"],
  },
];
const data = [
  {
    description: "",
    built: ["React", "ChartJS", "Covid-19 API"],
    title: "",

    link: [{ github: "https://www.google.com/", link: "" }],
  },
  {
    description: "",
    built: ["React", "ChartJS", "Covid-19 API"],
    title: "",
    link: [{ github: "https://www.google.com/", link: "" }],
  },
  {
    description: "",
    built: ["React", "ChartJS", "Covid-19 API"],
    title: "",
    link: [{ github: "https://www.google.com/", link: "" }],
  },
  {
    description: "",
    built: ["React", "ChartJS", "Covid-19 API"],
    title: "",
    link: [{ github: "https://www.google.com/", link: "" }],
  },
  {
    description: "",
    built: ["React", "ChartJS", "Covid-19 API"],
    title: "",
    link: [{ github: "https://www.google.com/", link: "" }],
  },
  {
    description: "",
    built: ["React", "ChartJS", "Covid-19 API"],
    title: "",
    link: [{ github: "https://www.google.com/", link: "" }],
  },
  {
    description: "",
    built: ["React", "ChartJS", "Covid-19 API"],
    title: "",
    link: [{ github: "https://www.google.com/", link: "" }],
  },
  {
    description: "",
    built: ["React", "ChartJS", "Covid-19 API"],
    title: "",
    link: [{ github: "https://www.google.com/", link: "" }],
  },
  {
    description: "",
    built: ["React", "ChartJS", "Covid-19 API"],
    title: "",
    link: [{ github: "https://www.google.com/", link: "" }],
  },
  {
    description: "",
    built: ["React", "ChartJS", "Covid-19 API"],
    title: "",
    link: [{ github: "https://www.google.com/", link: "" }],
  },
];
