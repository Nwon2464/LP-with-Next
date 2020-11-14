import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Loader from "../components/Loading/Loader";
import Footer from "../components/Footer";

import LeftRightSideElement from "../components/LeftRightSideElement";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/styled/GlobalStyle";
import theme from "../styles/styled/theme";
// import styles from "../styles/Home.module.css"; this is how to import scoped styles

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts
  // console.log(context);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { hello: "!" },
    // props: { data },
  };
}
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Layout({ children, location }) {
  const isHome = location === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  //   useEffect(() => {
  //     const timeout = setTimeout(() => setIsMounted(true), 2000);

  //     return () => clearTimeout(timeout);
  //   }, []);

  useEffect(() => {
    console.log(window.location);
  }, []);
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MainDiv>
            {/* <Loader finishLoading={() => setIsLoading(false)} /> */}

            {isLoading && isHome ? (
              <Loader finishLoading={() => setIsLoading(false)} />
            ) : (
              <StyledContent>
                <Header isHome={isHome} />
                <LeftRightSideElement isHome={isHome} />

                <div id="content">
                  {children}
                  <Footer />
                </div>
              </StyledContent>
            )}
          </MainDiv>
        </ThemeProvider>
      </div>{" "}
    </>
  );
}