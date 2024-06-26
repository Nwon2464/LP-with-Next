import React, { useMemo } from "react";
import {
  columnData,
  generateSorting,
  widthClasses,
  colorClasses,
} from "./Column";
import styled from "styled-components";
import { ReactComponent as FolderIcon } from "../../data/icons/folder.svg";
import { ReactComponent as GithubIcon } from "../../data/icons/github.svg";

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

  .github:hover {
    color: var(--color-text-secondary);
  }
  .link:hover {
    color: var(--color-text-secondary);
  }
`;
//Data need to be fetched from server! create one!
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
    link: [{ github: "https://github.com/Nwon2464/portfolio6-twitch-clone-client", link: "" }],
  },
  {
    year: "2020",
    title: "Amazon Landing Page Clone",
    built: [
      "React",
      "Slick-carousel",
      "Styled-components",
    ],
    link: [{ github: "https://github.com/Nwon2464/amazon", link: "" }],
  },
  {
    year: "2020",
    title: "Covid-19 Tracker",
    built: ["React", "ChartJS", "Covid-19 API"],
    link: [{ github: "https://github.com/Nwon2464/Corona-App", link: "" }],
  },
  {
    year: "2020",
    title: "Email Inbox",
    built: ["React", "React-table", "Express", "Faker", "React-DatePicker"],
    link: [{ github: "https://github.com/Nwon2464/emailInbox", link: "" }],
  },
  {
    year: "2020",
    title: "OAuth Strategies",
    built: ["React", "Express", "PassportJS"],
    link: [
      { github: "https://github.com/Nwon2464/portfolio2-auth-strategies", link: "" },
    ],
  },
];

const Table = () => {
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
    { columns, data, disableSortBy: false },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  //disableSortBy default to false, need to config for the column you want to disable. "disableSortBy:true"
  const { pageIndex, globalFilter } = state;
  return (
    <TableDiv id="app-full-screen" className="app-relative app-full-width">
      <>
        {/* <GlobalFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        /> */}
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
                  style={{ padding: "1rem 0" }}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell, i) => {
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
                            {cell.column.id === "built" &&
                              cell.value.map((e, i) => {
                                return (
                                  <span key={i}>
                                    {e}

                                    {i !== cell.value.length - 1 && (
                                      <span style={{ margin: "0 0.5rem" }}>
                                        &middot;
                                      </span>
                                    )}
                                  </span>
                                );
                              })}
                            {cell.column.id === "link" &&
                              cell.value.map((e, i) => {
                                return (
                                  <>
                                    {e.github.length !== 0 && (
                                      <a className="github" href={e.github}>
                                        <GithubIcon
                                          style={{
                                            width: 20,
                                            height: 20,
                                            fill: "currentColor",
                                          }}
                                        />
                                      </a>
                                    )}
                                    {e.link && (
                                      <a className="link" href={e.link}>
                                        <FolderIcon
                                          style={{
                                            marginLeft: "0.5rem",
                                            width: 20,
                                            height: 20,
                                            fill: "currentColor",
                                          }}
                                        />{" "}
                                      </a>
                                    )}
                                  </>
                                );
                              })}
                            {cell.column.id !== "link" &&
                              cell.column.id !== "built" &&
                              cell.render("Cell")}
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
