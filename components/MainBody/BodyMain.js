import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponents as EmailIcon } from "../../data/icons/emailIcon.svg";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const BodyMainSection = styled.section`
  padding: 100px 0px;
  display: flex !important;
  flex-direction: column;

  min-height: 100vh;

  h1 {
    font-size: 1.5rem;
    color: var(--color-text-secondary);
    margin: 1.5rem 0;
  }

  h2 {
    font-size: 3rem;
    filter: brightness(1.3);
    color: var(--color-text-lightest);
  }
  h3 {
    font-size: 3rem;

    color: var(--color-text-light);
  }
  p {
    font-size: 1.3rem;
    max-width: 500px;
    margin-top: 2rem;
    color: var(--color-text-light);
  }
  a {
    border: 1px solid var(--color-text-secondary);
    border-radius: var(--border-radius-5);
    font-size: 1.3rem;
    padding: 1.5rem 3rem;
    margin-top: 5rem;
    cursor: pointer;
  }
  button {
    border: 0;
    outline: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    filter: brightness(1.3);
    color: var(--color-text-lightest);
  }
  a:hover {
    .email path {
      fill: var(--color-text-lightest);
      stroke-width: 5;
      stroke: #31e8ff;
      stroke-dasharray: 1650;
      stroke-dashoffset: 0;
      animation: email 1.8s linear forwards;
      animation-duration: 2s;
    }
  }
  button a {
  }
  .email {
    margin-left: 1rem;
    fill: var(--color-text-light);
  }
  @keyframes email {
    0% {
      stroke-dashoffset: 3250;
    }
    40% {
      stroke-dashoffset: 1650;
    }
    80% {
      fill: transparent;
    }
    100% {
      stroke-dashoffset: 0;
      fill: #31e8ff;
    }
  }
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
      I'm a software engineer based in Tokyo, JP specializing in building (and
      occasionally designing) exceptional websites, applications, and everything
      in between.{" "}
    </p>,
    <a href="mailto:nwon2464@gmail.com">
      <button>
        Contact Me <EmailIcon className="email" />
      </button>
    </a>,
  ];
  return (
    <BodyMainSection>
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
