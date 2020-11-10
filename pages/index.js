import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
export async function getStaticProps(context) {
  console.log(context);
  // Call an external API endpoint to get posts
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  // console.log(context);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { data },
  };
}

export default function Home(props) {
  // console.log(props);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
      </Head>
      <div>
        {props.data.map((e, i) => {
          return (
            <div key={i}>
              <Link href="/about">
                <a>to About</a>
              </Link>
              {e.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
