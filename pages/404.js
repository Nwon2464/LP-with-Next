import Layout from "../components/Layout";
import { useRouter } from "next/router";
import styled from "styled-components";
const NotFoundDiv = styled.div`
  color: white;
  padding: 15rem;
`;
export default function NotFound() {
  const { pathname } = useRouter();

  return (
    <Layout location={pathname}>
      <NotFoundDiv>NotFound</NotFoundDiv>
    </Layout>
  );
}
