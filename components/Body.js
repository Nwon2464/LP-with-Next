import React from "react";
import BodyMain from "./MainBody/BodyMain";
import Footer from "./MainBody/Footer";
import AboutMe from "./MainBody/AboutMe";
import Projects from "./MainBody/Projects";
import OtherSideProjects from "./MainBody/OtherSideProjects";
import GetInTouch from "./MainBody/GetInTouch";
import styled from "styled-components";
const MainDiv = styled.main`
  margin: 0px auto;
  counter-reset: section;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0 10rem;
}

 section{
  padding:140px 0px;
 } 
 @media (max-width: 768px){
  section {
    padding: 100px 0px;
  }
 }

`;
const Body = () => {
  return (
    <>
      <MainDiv className="main">
        <BodyMain />
        <AboutMe />
        <Projects />
        <OtherSideProjects />
        <GetInTouch />
      </MainDiv>
      <Footer />
    </>
  );
};
export default Body;
