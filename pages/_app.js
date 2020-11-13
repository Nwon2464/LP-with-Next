import "../styles/globals.css";
//Adding a Global Stylesheet

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
