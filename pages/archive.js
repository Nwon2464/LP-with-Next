import { useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import styled from "styled-components";
import Table from "../components/table/Table";

const MainStyled = styled.main`
  padding: 11rem 15rem;
  min-height: 100vh;
  width: 100%;
  max-width: 1500px;
  h1 {
    color: var(--color-text-light);
    font-size: 5rem;
  }
  p {
    color: var(--color-text-secondary);
    font-size: 3rem;
  }
  .react-table {
    margin-top: 5rem;
  }
  table {
    width: 100%;
  }
`;

const Archive = (props) => {
  const { pathname } = useRouter();
  return (
    <Layout location={pathname}>
      <MainStyled>
        <header>
          <h1>Archive</h1>
          <p>Things that I've built</p>
        </header>
        <div className="react-table">
          <Table />
        </div>
      </MainStyled>
    </Layout>
  );
};

export default Archive;
