import React from "react";
import { skills } from "../../data/data";
import styled from "styled-components";
import photoOfMe from "../../public/NamkyuWon.jpg";
import useIntersect from "../useIntersect";
const MainSection = styled.section`
  max-width: 100%;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transform: translateY(-20px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);

  p {
    font-size: 1.2rem;
    color: var(--color-text-light);
    margin-bottom: 1.5rem;
    /* margin: 0 0 1rem; */
  }
  ul.skills {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0px;
    margin: 35px 0px 0px;
    overflow: hidden;
    list-style: none;
  }
  ul.skills li {
    position: relative;
    padding-bottom: 2rem;
    margin-left: 2rem;
    color: var(--color-text-light);
    font-size: 14px;
  }
  ul.skills li::before {
    content: "▹";
    position: absolute;
    left: -35px;
    top: 1px;
    font-size: 2rem;
    color: var(--color-text-secondary);
    line-height: 12px;
  }
  .introduce {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
  }

  .head-number {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(25px, 5vw, 30px);
    color: var(--color-text-lightest);
    filter: brightness(1.3);
  }

  .head-number::after {
    content: "";
    width: 250px;
    filter: brightness(0.5);
    margin-left: 25px;
    height: 1px;
    position: relative;
    background-color: var(--color-text-light);
    display: block;
  }
  .imageOfMe {
    max-width: 300px;
    img {
      width: 100%;
      border-radius: 4px;
      filter: grayscale(20%) contrast(1);
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  @media (max-width: 1080px) {
    .head-number::after {
      width: 200px;
    }
  }
  @media (max-width: 768px) {
    .introduce {
      display: block;
    }
    .imageOfMe {
      margin: 50px auto 0px;
      width: 70%;
    }
    .head-number::after {
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    .head-number::after {
      margin-left: 10px;
    }
  }
`;

const AboutMe = () => {
  const [setRef, visible] = useIntersect({
    threshold: 0.2,
  });
  return (
    <>
      <MainSection id="about" ref={setRef} visible={visible}>
        <h2 className="head-number  ">About Me</h2>
        <div className="introduce">
          <div>
            <div>
              <p>Hello! I'm Won, a software engineer based in Tokyo, JP.</p>
              <p>
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between. My goal is to
                always build products that provide pixel-perfect, performant
                experiences.
              </p>
              <p>
                Shortly after graduating from University of Washington, I joined
                the engineering team at Upstatement where I work on a wide
                variety of interesting and meaningful projects on a daily basis.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>{" "}
            </div>
            <ul className="skills">
              {skills &&
                skills.map((e, i) => {
                  return <li key={i}>{e.skillSet}</li>;
                })}
            </ul>
          </div>
          <div className="imageOfMe">
            <div>
              <img src={photoOfMe} alt="photo" />
            </div>
          </div>
        </div>
      </MainSection>
    </>
  );
};
export default AboutMe;
