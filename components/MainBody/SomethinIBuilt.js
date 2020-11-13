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
  .archive {
    ${"" /* font-family: var(--font-mono); */}
    ${"" /* font-size: var(--fz-sm); */}
    ${"" /* &:after {
      bottom: 0.1em;
    } */}
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    grid-auto-rows: 350px;
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    @media (max-width: 1080px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
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

    margin-bottom: 3rem;
  }

  .folders svg {
    width: 40px;
    fill:var(--color-text-secondary);
    height: 40px;
  }
.links a svg :hover{
    fill:var(--color-text-secondary);
    
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
    font-size: 2rem;
  }
  .technology {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    list-style: none;
  }
  .technology li {
    margin-right: 1.5rem;
  }
  .showMoreBtn{

  }
`;

const SomethinIBuilt = () => {
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
        {JSONData.slice(0, loadMore).map((e, i) => {
          return (
            <div className="grid-background">
              <div className="grid-inner">
                <header key={i}>
                  <div className="projects">
                    <div className="folders">
                      <FolderIcon />
                    </div>
                    <div className="links">
                      <Link href="#">
                        <a>
                          <External />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <h3>Integrating Algolia Search with WordPress Multisite</h3>
                  <div>
                    <p>
                      project descriptionsproject descriptionsproject
                      descriptionsproject descriptionsproject
                      descriptionsproject descriptionsproject
                      descriptionsproject descriptionsproject
                      descriptionsproject descriptionsproject descriptions
                    </p>
                  </div>
                </header>
                <footer>
                  <ul className="technology">
                    <li>Tech used</li>
                    <li>Tech used</li>
                    <li>Tech used</li>
                  </ul>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
      {loadMore < JSONData.length && (
        <button onClick={showClick}>Show more</button>
      )}
    </MainSection>
  );
};
export default SomethinIBuilt;
