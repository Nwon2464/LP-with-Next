import React from "react";
import styled from "styled-components";

import useIntersect from "../useIntersect";
const MainSection = styled.section`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transform: translateY(-20px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  .touch {
    text-align: center;
    ${"" /* display: flex;
    justify-content: center;
    align-items: center; */};
    h2 {
      font-size: 2rem;
      color: var(--color-text-lightest);
      filter: brightness(1.3);
    }
    h2::before {
      counter-increment: section 1;
      content: "0" counter(section) ".";
      margin-right: 10px;
      color: var(--color-text-secondary);
    }
    h3 {
      font-size: 1.5rem;
      color: var(--color-text-light);
      margin-top: 2rem;
      ${"" /* filter: brightness(1.3); */}
    }
    p {
      font-size: 1.1rem;
      margin-top: 1.5rem;
      color: var(--color-text-light);
    }
    a {
      margin-top: 4.5rem;
      border: 1px solid var(--color-text-secondary);
      border-radius: 5px;
      font-size: 1.3rem;
      cursor: pointer;
      color: var(--color-text-light);
      padding: 1.5rem 2rem;
      &:hover {
        color: var(--color-text-secondary);
      }
    }
  }
`;
const GetInTouch = () => {
  const [setRef, visible] = useIntersect({
    threshold: 0.2,
  });

  return (
    <MainSection id="contact" ref={setRef} visible={visible}>
      <div className="touch">
        <h2 className="head-number">What’s Next?</h2>
        <h3>Get In Touch</h3>
        <p>
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <a href="mailto:nwon2464@gmail.com">Say Hello!</a>
      </div>{" "}
    </MainSection>
  );
};

export default GetInTouch;
