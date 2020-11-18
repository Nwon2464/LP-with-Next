// import React, { useEffect, useState } from "react";
// import useIntersect from "../useIntersect";

// import styled from "styled-components";
// const MainSection = styled.section`
//   opacity: ${(props) => (props.visible ? 1 : 0)};
//   visibility: ${(props) => (props.visible ? "visible" : "hidden")};
//   transform: translateY(-20px);
//   transition: opacity 500ms var(--easing), transform 500ms var(--easing);
// `;

// const StyledHighlight = styled.div`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   z-index: 10;
//   width: 2px;
//   height: 4rem;
//   border-radius: 1rem;
//   background: var(--color-text-secondary);

//   transform: translateY(calc(${({ activeIndex }) => activeIndex} * 40px));
//   transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
//   transition-delay: 0.1s;
// `;

// const StyledUUl = styled.ul`
//   position: relative;
//   z-index: 3;
//   width: max-content;
//   padding: 0px;
//   margin: 0px;
//   list-style: none;
// `;
// const StyledTabButton = styled.button`
//   display: flex;
//   outline: 0;
//   align-items: center;
//   text-decoration: none;
//   width: 100%;
//   height: 4rem;
//   padding: 0 2rem;
//   cursor: pointer;

//   border: none;
//   border-left: 2px solid #a8b2d1;
//   background-color: transparent;
//   color: ${({ isActive }) =>
//     isActive ? "var(--color-text-secondary)" : "var(--color-text-light)"};
// `;
// const StyledTabContent = styled.div`
//   width: 100%;
//   height: auto;
//   padding-top: 10px;
//   padding-left: 30px;
//   ${"" /* border: 1px solid red; */}
//   ${"" /* background: grey; */}
// `;
// const Projects = () => {
//   const [setRef, visible] = useIntersect({
//     threshold: 0.2,
//   });
//   const [activeIndex, setActiveIndex] = useState(0);

//   const [JSONData, setJSONData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await response.json();
//       setJSONData(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <MainSection id="Projects" ref={setRef} visible={visible}>
//       <h2>1223</h2>
//       <div style={{ display: "flex" }}>
//         <StyledUUl>
//           {JSONData.map((e, i) => {
//             return (
//               <li>
//                 <StyledTabButton
//                   isActive={activeIndex === i}
//                   onClick={() => setActiveIndex(i)}
//                 >
//                   <span>{e.name}</span>
//                 </StyledTabButton>
//               </li>
//             );
//           })}
//           <StyledHighlight activeIndex={activeIndex} />
//         </StyledUUl>
//         {JSONData &&
//           JSONData.map((e, i) => {
//             return (
//               <StyledTabContent
//                 id={`panel-${i}`}
//                 tabIndex={activeIndex === i ? "0" : "-1"}
//                 hidden={activeIndex !== i}
//               >
//                 <h3>{e.name}</h3>
//                 <p>{e.name}</p>
//                 <div>
//                   <ul>
//                     <li>{e.name}</li>
//                   </ul>
//                 </div>
//               </StyledTabContent>
//             );
//           })}
//       </div>
//     </MainSection>
//   );
// };
// export default Projects;
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
  padding-top: 15rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .head-number {
    ${"" /* margin-top: -2rem; */}
  }
  h2::before {
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--color-text-secondary);
  }
  h2 {
    ${"" /* position: absolute; */}
    ${"" /* top: -90px; */}

    font-size: 2rem;
    filter: brightness(1.3);
    color: var(--color-text-lightest);
    ${"" /* font-size: 2rem; */}
  }
  button,
  button:active,
  button:focus {
    border: 0;
    cursor: pointer;
    outline: none;
  }
  button:hover {
    background: var(--color-text-secondary);
    border-radius: 5px;
  }
  .left-btn {
    left: 0;
    position: absolute;
    top: 135px;
  }
  .right-btn {
    right: 0;
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
      fill: var(--color-text-light);
    }
  }

  .slides {
    width: 100%;
    height: 500px;
    position: relative;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    .slide {
      ${"" /* width: 700px; */}
      height: 300px;
      display: flex;
      justify-content: flex-start;
      ${"" /* background-size: cover;
      background-position: center center; */}
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
    /* display: flex;
  align-items: center;
  justify-content: center; */
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
    margin-top: 10px;
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
      // top: 0,
      // left: "calc(50% - 375px)",
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
                  src={slide.image}
                  style={{ height: "inherit", width: 530, objectFit: "fill" }}
                  alt="shit"
                />
                <div className="image__card">
                  <div className="image__card__upper">
                    <div className="image__card__upper__image">A</div>
                    <div className="image__card__upper__info">
                      <p>{slide.title}</p>
                      <a href="#">Hyper Scales</a>
                      <p>13.4k views</p>
                    </div>
                  </div>
                  <div className="image__card__middle">
                    {slide.tech.map((e) => {
                      return (
                        <a
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
                    style={{ marginTop: "0.3rem", marginRight: "0.5rem" }}
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
