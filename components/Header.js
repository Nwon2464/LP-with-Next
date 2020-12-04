import React, { useState, useEffect } from "react";
import { ReactComponent as IconLoader } from "../data/icons/loader.svg";
import Link from "next/link";
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
  z-index: 99;
  background: var(--color-background-primary-default);
  padding: 0 5rem;

  nav {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    width: 100%;
    color: var(--color-text-light);
    counter-reset: item 0;
  }
  .nav-links {
    display: flex;
    margin: 0 0.5rem;
  }

  .nav-links ol > li > span {
    font-size: 1.3rem;
    padding: 1rem;
  }
  .nav-links ol > li > span > a {
    position: relative;
  }
  .nav-links ol > li > span > a :after {
    content: "";
    left: 0px;
    bottom: -15px;
    width: 100%;
    height: 2px;
    background: currentColor;
    position: absolute;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 250ms ease-in;
  }
  .nav-links ol > li > span > a:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
  .nav-links ol > li > span > a :hover {
    color: var(--color-text-secondary);
  }
  .nav-links ol li {
    counter-increment: item 1;
  }
  .nav-links ol > li > span:before {
    content: "0" counter(item) ".";
    margin-right: 1rem;
    color: var(--color-text-secondary);
    text-align: right;
  }

  .nav-links ol {
    list-style: none;
    display: flex;
    align-items: center;
  }

  .nav-links button {
    border: 1px solid var(--color-text-secondary);
    border-radius: 5px;
    font-size: 1.3rem;
    cursor: pointer;
    margin-left: 1.5rem;
    position: relative;
    z-index: 1;
  }
  .nav-links button :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-text-secondary);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 200ms ease-in;
  }
  .nav-links button:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  .nav-links button :hover {
  }
  .nav-links button a {
    padding: 1.5rem;
  }
  .nav-links button a:hover {
  }
  .logo svg {
    cursor: pointer;
    width: 50px;
    height: 50px;
    fill: #31e8ff;

    transition: transform 0.2s var(--transition);
  }
  .logo svg:hover {
    transform: translateY(-3px);
    transition: transform 0.2s var(--transition);
  }
`;
const StyledNav = styled.nav``;
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
      <nav>
        <CSSTransition
          in={isMounted}
          classNames="fadeup"
          timeout={2000}
          mountOnEnter={true}
        >
          <div className="logo">
            <Link href="/">
              <IconLoader viewBox="0 -30 580 512" />
            </Link>
          </div>
        </CSSTransition>

        <div className="nav-links">
          <ol className="">
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
                    <span>
                      <a href={url}>{name}</a>{" "}
                    </span>
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
              <button style={{ transitionDelay: `${navLinks.length * 100}ms` }}>
                <a href="/">Resume</a>
              </button>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
