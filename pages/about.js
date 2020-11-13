import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
function About(props) {
  useEffect(() => {
    console.log(window.location);
  }, []);
  const { pathname } = useRouter();

  return (
    <Layout location={pathname}>
      <div>NotFound</div>
    </Layout>
  );
}

export default About;
