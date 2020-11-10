import axios from "axios";
function About(props) {
  console.log(props);
  return <div>About</div>;
}

export default About;

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  // console.log(context);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { data },
    revalidate: 1,
  };
}
