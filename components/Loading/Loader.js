import { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as IconLoader } from "../../data/icons/loader.svg";
const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  ${"" /* background-color: white; */}
  ${"" /* z-index: 99; */}
  .logo-wrapper {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    ${"" /* opacity: ${(props) => (props.isMounted ? 1 : 0)}; */}
    svg {
      width: 80px;
      height: 300px;
    }
    path {
      &: nth-child(1) {
        fill: transparent;
        stroke-width: 8;
        stroke: #31e8ff;
        stroke-dasharray: 670;
        stroke-dashoffset: 0;
        animation: animateStar 2.5s linear;
        animation-duration: 2.5s;
        ${"" /* transition: transform 2.5s ease-in-out; */}
      }
      &: nth-child(2) {
        fill: transparent;
        stroke-width: 5;
        stroke: #31e8ff;
        stroke-dasharray: 1850;
        stroke-dashoffset: 0;
        animation: animateMoon 2.5s linear forwards;
        animation-duration: 2.5s;
      }
    }
    @keyframes animateMoon {
      0% {
        stroke-dashoffset: 0;
      }
      40% {
        stroke-dashoffset: 1850;
      }
      80% {
        stroke-dashoffset: 3700;
        fill: transparent;
      }
      100% {
        fill: #31e8ff;
      }
    }
    @keyframes animateStar {
      0% {
        stroke-dashoffset: 0;
      }
      20% {
        stroke-dashoffset: 270;
      }
      40% {
        stroke-dashoffset: 670;
      }
      80% {
        stroke-dashoffset: 1000;
      }
      100% {
        stroke-dashoffset: 1340;
        fill: transparent;
      }
    }
  }
`;
const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      finishLoading();
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <StyledLoader isMounted={isMounted}>
        <div className="logo-wrapper">
          <IconLoader
            viewBox="-10 -10 530 530"
          />
        </div>
      </StyledLoader>
    </>
  );
};

export default Loader;
