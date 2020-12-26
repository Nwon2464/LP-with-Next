import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
//Not found !
//
function About(props) {
  useEffect(() => {}, []);
  const { pathname } = useRouter();
  console.log(useRouter());
  return (
    <Layout location={pathname}>
      <div>NotFound.</div>
    </Layout>
  );
}

export default About;
