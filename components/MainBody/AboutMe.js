import React from "react";
import { skills } from "../../data/data";
import styled from "styled-components";
import logo from "./logo.png";
import useIntersect from "../useIntersect";
const MainSection = styled.section`
  padding: 10rem 20rem !important;
  max-width: 100%;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transform: translateY(-20px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);

  h2 {
    margin-bottom: 2rem;
  }
  h2::before {
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--color-text-secondary);
  }
  h2::after {
    content: "";
    width: 300px;
    bottom: 8px;
    margin-left: 30px;
    height: 1px;
    position: relative;
    background-color: #a8b2d1;
    display: inline-block;
  }
  p {
    /* margin: 0 0 1rem; */
  }
  ul.skills {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
  }
  ul.skills li {
    position: relative;
    margin-bottom: 10px;
    color: var(--color-text-light);
    /* font-size: 2rem; */
    padding-left: 20px;
  }
  ul.skills li::before {
    content: "▹";
    position: absolute;
    left: -5px;

    font-size: 2rem;
    color: var(--color-text-secondary);
    /* font-size: var(--fz-sm); */
    line-height: 12px;
  }
  .introduce {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
  }
  .introduce {
  }
`;

const AboutMe = () => {
  const [setRef, visible] = useIntersect({
    threshold: 0.2,
  });
  return (
    <>
      <MainSection id="about" ref={setRef} visible={visible}>
        <h2>About Me</h2>
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
          <div>
            <div>
              <img src={logo} style={{ width: 300, height: 300 }} alt="photo" />
            </div>
          </div>
        </div>
      </MainSection>
    </>
  );
};
export default AboutMe;
