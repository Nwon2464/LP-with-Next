import React from "react";
import BodyMain from "./MainBody/BodyMain";
import AboutMe from "./MainBody/AboutMe";
import WhereIWork from "./MainBody/WhereIWork";
import OtherProjects from "./MainBody/OtherProjects";
import SomethinIBuilt from "./MainBody/SomethinIBuilt";
import styled from "styled-components";
const MainDiv = styled.main`
  margin: 0px auto;
  counter-reset: section;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0 15rem;

  h1 {
    font-size: clamp(1.4rem, 8vw, 1.8rem);
    color: var(--color-text-secondary);
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: clamp(2rem, 8vw, 2.5rem);

    color: var(--color-text-primary);
  }
  ${"" /* button {
    font-size: 1.5rem;
    margin-top: 5rem;
    margin-left: 0rem;
    color: var(--color-text-secondary);
    border: 1px solid var(--color-text-secondary);
    padding: 1.5rem 3rem;
    border-radius: 5px;
  } */}
`;
const Body = () => {
  return (
    <>
      <MainDiv>
        <BodyMain />

        {/* {components.map((el, i) => {
          return <FadeInSection key={i}>{el}</FadeInSection>;
        })} */}
        <AboutMe />
        <OtherProjects />
        <WhereIWork />
        <SomethinIBuilt />
      </MainDiv>
    </>
  );
};
export default Body;
