import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Loader from "../components/Loading/Loader";

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
  };
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

export default function Layout({ children, location }) {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <>
      <Head>
        <title>Next App</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Header isHome={isHome} />
              <LeftRightSideElement isHome={isHome} />

              <div id="content">{children}</div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  );
}
