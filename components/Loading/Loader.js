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
  z-index: 99;
  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${(props) => (props.isMounted ? 1 : 0)};

    svg {
      display: block;
      width: 50px;
      height: 50px;
      margin: 0 auto;
    }
    path {
      stroke-width: 10;
      stroke: red;
      fill: transparent;
      ${"" /* stroke: 10; */}
      ${"" /* fill: transparent; */}
    }
  }
`;
const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      finishLoading();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

export default Loader;
