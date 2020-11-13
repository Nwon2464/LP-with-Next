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
// const WhereIWork = () => {
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
//     <MainSection id="whereIWork" ref={setRef} visible={visible}>
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
// export default WhereIWork;
import React, { useEffect, useState } from "react";
import useIntersect from "../useIntersect";
import HAHA from "./HAHA";
import styled from "styled-components";
const MainSection = styled.section`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transform: translateY(-20px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 2px;
  height: 4rem;
  border-radius: 1rem;
  background: var(--color-text-secondary);

  transform: translateY(calc(${({ activeIndex }) => activeIndex} * 40px));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
`;

const StyledUUl = styled.ul`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;
const StyledTabButton = styled.button`
  display: flex;
  outline: 0;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  cursor: pointer;

  border: none;
  border-left: 2px solid #a8b2d1;
  background-color: transparent;
  color: ${({ isActive }) =>
    isActive ? "var(--color-text-secondary)" : "var(--color-text-light)"};
`;
const StyledTabContent = styled.div`
  width: 100%;
  height: auto;
  padding-top: 10px;
  padding-left: 30px;
  ${"" /* border: 1px solid red; */}
  ${"" /* background: grey; */}
`;
const WhereIWork = () => {
  const [setRef, visible] = useIntersect({
    threshold: 0.2,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const [JSONData, setJSONData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setJSONData(data);
    };
    fetchData();
  }, []);

  return (
    <MainSection id="whereIWork" ref={setRef} visible={visible}>
      <HAHA />
    </MainSection>
  );
};
export default WhereIWork;
