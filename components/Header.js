import React, { useState, useEffect } from "react";
import { navLinks } from "../data/data";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
const StyledHeader = styled.header`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  height: 10rem;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 5;
  padding: 0 10rem;
`;
const StyledNav = styled.nav`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--color-text-light);
  ${"" /* font-family: var(--font-mono); */}
  counter-reset: item 0;
  z-index: 6;
`;
const Header = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <StyledHeader>
      <StyledNav>
        <CSSTransition
          in={isMounted}
          classNames="fadeup"
          timeout={2000}
          mountOnEnter={true}
        >
          <div className="">
            <a href="#">Logo here</a>
          </div>
        </CSSTransition>

        <div className="app-flex style-li">
          <ol className="app-flex app-align-items-center app-list-style-none">
            <TransitionGroup component={null}>
              {navLinks.map(({ url, name }, i) => (
                <CSSTransition
                  in={navLinks && isMounted}
                  key={i}
                  appear={true}
                  classNames="fadedown"
                  timeout={2000}
                >
                  <li key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                    <a href={url}>{name}</a>
                  </li>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ol>

          <TransitionGroup component={null}>
            <CSSTransition
              in={isMounted}
              classNames="fadedown"
              appear={true}
              timeout={2000}
            >
              <button
                className="app-mg-l-15"
                style={{ transitionDelay: `${navLinks.length * 100}ms` }}
              >
                <div className="app-pd-y-15 app-pd-x-15">Resume</div>
              </button>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
