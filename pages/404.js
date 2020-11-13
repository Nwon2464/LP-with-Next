import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function NotFound() {
  const { pathname } = useRouter();

  return (
    <Layout location={pathname}>
      <div>NotFound</div>
    </Layout>
  );
}
