import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import styled from "styled-components";
import Body from "../components/Body";
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
export default function Home() {
  const router = useRouter();

  console.log(router);
  const [location, setLocation] = useState();
  useEffect(() => {
    // setLocation(window.location);
  }, []);
  return (
    <>
      <Layout location={router}>
        <Body />
      </Layout>
    </>
  );
}
