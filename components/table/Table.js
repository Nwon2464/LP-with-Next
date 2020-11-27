import React, { useMemo } from "react";
import {
  columnData,
  generateSorting,
  widthClasses,
  colorClasses,
} from "./Column";
import styled from "styled-components";

import { GlobalFilter } from "./filter";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

const TableDiv = styled.div`
  .year-color {
    color: var(--color-text-secondary);
  }
  .built-color {
    color: var(--color-text-light);
  }
  .link-color {
    color: var(--color-text-light);
  }
  .title-color {
    color: var(--color-text-primary);
  }
  li button {
    border: none;
  }
`;

const currentData = [
  {
    year: "2020",
    title: "Twitch Clone",
    built: [
      "React",
      "Express",
      "Javascript",
      "JWT",
      "Google Oauth",
      "Redux-Form",
      "Twitch API",
    ],
    link: "Link",
  },
  {
    year: "2020",
    title: "Covid-19 Tracker",
    built: ["React", "ChartJS", "Covid-19 API"],
    link: "Link",
  },
  {
    year: "2020",
    title: "Email Inbox",
    built: ["React", "React-table", "Express", "Faker", "React-DatePicker"],
    link: "Link",
  },
  {
    year: "2020",
    title: "OAuth Strategies",
    built: ["React", "Express", "PassportJS"],
    link: "Link",
  },
];

const Table = (props) => {
  const data = useMemo(() => currentData, [currentData]);
  const columns = useMemo(() => columnData, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,

    page,
    nextPage,
    previousPage,
    prepareRow,
    pageOptions,
    state,
    setGlobalFilter,
    gotoPage,
    pageCount,
    canNextPage,
    canPreviousPage,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { pageIndex, globalFilter } = state;
  return (
    <TableDiv id="app-full-screen" className="app-relative app-full-width">
      <>
        <GlobalFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <table
          className="
        app-flex-column app-flex 
        app-full-width app-border-spacing-0 app-table-layout-fixed"
        >
          <thead {...getTableProps()}>
            {headerGroups.map((headerGroup) => (
              <tr
                className="app-flex app-align-center
              "
                style={{
                  color: "var(--color-text-light)",
                  fontSize: "1.2rem",
                  height: "3rem",
                  paddingTop: "0.3rem",
                  paddingBottom: "0.3rem",
                }}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => {
                  return (
                    <th
                      style={{
                        position: "relative",
                        height: "100%",
                      }}
                      className={widthClasses(column)}
                      {...column.getHeaderProps()}
                    >
                      <div
                        style={{ alignItems: "center" }}
                        className="app-relative app-flex app-full-width"
                      >
                        <h3 {...column.getSortByToggleProps()}>
                          {column.render("Header")}
                          <span className="app-mg-l-05">
                            {generateSorting(column)}
                          </span>
                        </h3>
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody style={{ fontSize: "0.8rem" }} {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  key={i}
                  className="app-custom-border-bottom-2 app-height-25 app-flex app-align-center"
                  style={{
                    paddingTop: "0.3rem",
                    paddingBottom: "0.3rem",
                  }}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell, i) => {
                    console.log(typeof cell.value);
                    return (
                      <td
                        key={i}
                        className={`${widthClasses(cell.column)} dropdown-2 `}
                      >
                        <div className="app-flex app-white-space-nowrap app-overflow-hidden">
                          <h3
                            className={`app-ellipsis  app-cursor-pointer ${colorClasses(
                              cell.column
                            )}`}
                            {...cell.getCellProps()}
                          >
                            {cell.render("Cell")}
                          </h3>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <ul className="app-flex app-justify-content-center app-height-5 app-align-center">
            <li style={{ fontSize: "1.5rem", listStyle: "none" }}>
              <span style={{ color: "#888888" }}>
                Page{" "}
                <strong style={{ color: "var(--color-text-secondary)" }}>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
              <span style={{ color: "#888888" }}>
                | Go to Page{" "}
                <div className="app-inline-block app-input-border">
                  <input
                    className="input-span app-prevent-input"
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                      const pageNumber = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(pageNumber);
                    }}
                  />
                </div>
              </span>
            </li>

            <li
              style={{ fontSize: "1.8rem" }}
              className="app-list-style-none app-mg-l-05"
            >
              <button
                className="app-font-15 app-cursor-pointer app-button-hover-2 app-width-height-3 app-button-color"
                style={{}}
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {"<<"}
              </button>
            </li>

            <li
              style={{ fontSize: "1.8rem" }}
              className="app-list-style-none app-mg-l-05"
            >
              <button
                className="app-font-15 app-cursor-pointer  app-button-hover-2 app-width-height-3  app-button-color"
                style={{}}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                {"PREV"}
              </button>
            </li>
            <li
              style={{ fontSize: "1.8rem", marginLeft: "1rem" }}
              className="app-list-style-none "
            >
              <button
                className="app-font-15 app-cursor-pointer app-button-hover-2 app-width-height-3 app-button-color"
                style={{}}
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                {"NEXT"}
              </button>
            </li>
            <li style={{ fontSize: "1.8rem" }} className="app-list-style-none ">
              <button
                className="app-font-15 app-cursor-pointer app-button-hover-2 app-width-height-3 app-button-color"
                style={{}}
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {">>"}
              </button>
            </li>
          </ul>
        </div>
      </>
    </TableDiv>
  );
};

export default Table;
