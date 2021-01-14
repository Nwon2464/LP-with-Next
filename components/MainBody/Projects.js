import React, { useEffect, useState } from "react";
import useIntersect from "../useIntersect";
import { datas } from "../../data/data";
import styled from "styled-components";

import { ReactComponent as MoveLeftIcon } from "../../data/icons/moveleft.svg";
import { ReactComponent as MoveRightIcon } from "../../data/icons/moveright.svg";
const MainSection = styled.section`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transform: translateY(-20px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);
  display: flex;
  justify-content: center;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button,
  button:active,
  button:focus {
    border: 0;
    cursor: pointer;
    outline: none;
  }
  button:hover {
    background: #a8b2d1;
    border-radius: 5px;
  }
  .left-btn {
    z-index: 99 !important;

    left: 0px;
    position: absolute;
    top: 135px;
  }
  .right-btn {
    z-index: 99 !important;

    right: 0px;
    top: 135px;
    transform: rotate(180deg);
    position: absolute;
  }
  .left-btn .right-btn span {
    padding: 0.3rem;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  span > div {
    width: 2.4rem;
    height: 2.4rem;
    svg {
      fill: var(--color-text-secondary);
    }
  }

  .slides {
    width: 100%;
    height: 350px;
    position: relative;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    .slide {
      height: 300px;
      display: flex;
      justify-content: flex-start;
      outline: 1px solid;
      position: absolute;
      top: 0;
    }
  }
  .slides .slide {
    width: 750px;
  }

  .image__card {
    background-color: #fff;
    width: 100%;
    color: black;
  }
  .image__card__upper__image {
    color: white;
    background-color: blue;
    width: 50px;
    border-radius: 50px;
    height: 50px;
    display: flex;

    left: 5px;
    justify-content: center;
    align-items: center;
  }
  .image__card__upper,
  .image__card__bottom {
    margin-left: 0.5rem;
  }

  .image__card__middle {
    margin-left: 0.3rem;
  }
  .image__card__upper {
    display: flex;
    margin-top: 5px;
    justify-content: flex-start;
    margin-bottom: 13px;
    align-items: flex-start;
  }

  .image__card__upper__info > * {
    margin: 0;
  }
  .image__card__upper__info {
    margin-left: 13px;
  }
  .image__card__upper__info p:first-child {
    font-weight: 600;
    color: blue;
  }

  .image__card__upper__info p:last-child {
    font-size: 14px;
    color: grey;

    margin-top: 3px;
  }
  .image__card__upper__info a {
    text-decoration: none;
  }

  .image__card__middle a {
    border: 2px solid transparent;
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    border-radius: 25px;
  }
`;

const Projects = () => {
  const [setRef, visible] = useIntersect({
    threshold: 0.4,
  });
  const [xPos, setXPos] = useState([]);

  useEffect(() => {
    const updateSize = () => {
      setXPos([
        {
          translateXWidth: `${window.innerWidth * (-2 * 0.2)}px`,
          translatePercentage: "50%",
          translateScale: "0.7",
          zIndex: "1",
        },
        {
          translateXWidth: `${window.innerWidth * (-1 * 0.2)}px`,
          translatePercentage: "25%",
          translateScale: "0.85",
          zIndex: "2",
        },
        {
          translateXWidth: `${window.innerWidth * (0 * 0.2)}px`,
          translatePercentage: "0%",
          translateScale: "1",
          zIndex: "3",
        },
        {
          translateXWidth: `${window.innerWidth * (1 * 0.2)}px`,
          translatePercentage: "-25%",
          translateScale: "0.85",
          zIndex: "2",
        },
        {
          translateXWidth: `${window.innerWidth * (2 * 0.2)}px`,
          translatePercentage: "-50%",
          translateScale: "0.7",
          zIndex: "1",
        },
      ]);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const moveLeft = () => {
    let xLeftPosition = xPos.slice();
    xLeftPosition.unshift(xLeftPosition.pop());
    setXPos(xLeftPosition);
  };

  const moveRight = () => {
    let XRightPosition = xPos.slice();
    XRightPosition.push(XRightPosition.shift());
    setXPos(XRightPosition);
  };

  const determineStyle = (index) => {
    const num = xPos[index];

    return {
      zIndex: `${num.zIndex}`,
      position: "absolute",
      transition: "all 450ms ease 0s",
      transform: `translateX(${num.translateXWidth}) translateX(${num.translatePercentage}) scale(${num.translateScale})`,
    };
  };
  return (
    <MainSection id="projects" ref={setRef} visible={visible}>
      <h2 className="head-number">Projects</h2>

      <div className="slides">
        <button className="left-btn" onClick={moveRight}>
          <span>
            <div>
              <MoveLeftIcon />
            </div>
          </span>{" "}
        </button>
        <button className="right-btn" onClick={moveLeft}>
          <span>
            <div>
              <MoveRightIcon />
            </div>
          </span>
        </button>

        {xPos.length === 0 ? (
          <div>loading..</div>
        ) : (
          datas.map((slide, i) => {
            const imgStyle = determineStyle(i);
            return (
              <div style={imgStyle} key={i} className="slide">
                <img
                  className="imgSlide"
                  src={slide.image}
                  style={{ height: "inherit", objectFit: "fill" }}
                  alt="shit"
                />
                <div className="image__card">
                  <div className="image__card__upper">
                    <img
                      src={`${slide.screenshot}`}
                      className="image__card__upper__image"
                    />
                    <div className="image__card__upper__info">
                      <p style={{ fontSize: "0.7rem", marginTop: "1rem" }}>
                        {slide.title}
                      </p>
                    </div>
                  </div>
                  <div className="image__card__middle">
                    {slide.tech.map((e, i) => {
                      return (
                        <a
                          key={i}
                          style={{
                            marginLeft: "0.2rem",
                            maxWidth: 90,
                            padding: "0.2rem",
                          }}
                        >
                          {e}
                        </a>
                      );
                    })}
                  </div>
                  <div
                    className="image__card__bottom"
                    style={{
                      marginTop: "0.3rem",
                      marginRight: "0.5rem",
                      fontSize: "0.8rem",
                    }}
                  >
                    {slide.description}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </MainSection>
  );
};
export default Projects;
