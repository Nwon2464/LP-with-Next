import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import axios from "axios";
import styled from "styled-components";
export async function getStaticProps(context) {
  // Call an external API endpoint to get posts
  // console.log(context);

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  // console.log(context);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { data },
  };
}
const MainDiv = styled.div`
  background: red;
`;
export default function Home(props) {
  // console.log(props);
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
      </Head>
      <MainDiv>
        <Link href="/about">
          <a>to About</a>
        </Link>

        {props.data.map((e, i) => {
          return <div key={i}>{e.title}</div>;
        })}
      </MainDiv>
    </div>
  );
}
