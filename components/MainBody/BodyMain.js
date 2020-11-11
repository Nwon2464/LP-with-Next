import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { CSSTransition, TransitionGroup } from "react-transition-group";
const BodyMainSection = styled.section`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`;

const BodyMain = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  const introForMainHeader = [
    <h1>Hi, my name is</h1>,
    <h2 className="app-heading">Namkyu Won. </h2>,
    <h3 className="app-heading">I build things for the web.</h3>,
    <p>
      I'm a software engineer based in Boston, MA specializing in building (and
      occasionally designing) exceptional websites, applications, and everything
      in between.{" "}
    </p>,
    <button>Contact Me</button>
  ];
  return (
    <BodyMainSection className="main">
      <TransitionGroup component={null}>
        {isMounted &&
          introForMainHeader.map((item, i) => (
            <CSSTransition
              appear={true}
              key={i}
              classNames="fadeup"
              timeout={2000}
            >
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </BodyMainSection>
  );
};
export default BodyMain;
