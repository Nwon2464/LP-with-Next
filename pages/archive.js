import { useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import styled from "styled-components";
import { columnData } from "../components/table/Column";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
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
  const columns = useMemo(() => columnData, []);
  const data = useMemo(
    () => [
      {
        year: "2020",
        title: "title1",
        built: "React",
        link: "Link",
      },
      {
        year: "2020",
        title: "title2",
        built: "React",
        link: "Link",
      },
      {
        year: "2020",
        title: "title3",
        built: "React",
        link: "Link",
      },
      {
        year: "2020",
        title: "title4",
        built: "React",
        link: "Link",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Layout location={pathname}>
      <MainStyled>
        <header>
          <h1>Archive</h1>
          <p>Things that I've built</p>
        </header>
        <div className="react-table">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr className="head-row" {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    console.log(column);
                    return (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>{" "}
        </div>
      </MainStyled>
    </Layout>
  );
};

export default Archive;
