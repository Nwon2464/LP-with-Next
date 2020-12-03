import React from "react";
import BodyMain from "./MainBody/BodyMain";
import AboutMe from "./MainBody/AboutMe";
import Projects from "./MainBody/Projects";
import SomethinIBuilt from "./MainBody/SomethinIBuilt";
import GetInTouch from "./MainBody/GetInTouch";
import styled from "styled-components";
const MainDiv = styled.main`
  margin: 0px auto;
  counter-reset: section;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0 12rem;
}
  
`;
const Body = () => {
  return (
    <>
      <MainDiv>
        <BodyMain />

        <AboutMe />
        <Projects />
        <SomethinIBuilt />
        <GetInTouch />
      </MainDiv>
    </>
  );
};
export default Body;
