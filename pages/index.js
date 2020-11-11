import Head from "next/head";
import Link from "next/link";
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
  return (
    <>
      <Layout>
        <Body />
      </Layout>
    </>
  );
}
