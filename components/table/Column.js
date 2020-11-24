import { ReactComponent as FaceUpIcon } from "../../data/icons/icon_arrow01.svg";

export const columnData = [
  {
    Header: "Year",
    accessor: "year",
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Built with",
    accessor: "built",
  },
  {
    Header: "Link",
    accessor: "link",
  },
];

export const widthClasses = (e) => {
  if (e.id === "year") {
    return "app-flex app-flex-basis-10 app-max-width-10 app-mg-l-1 app-flex-grow-0 app-min-width-0";
  } else if (e.id === "title") {
    return "app-flex app-flex-basis-20 app-max-width-20 app-mg-l-25 app-flex-grow-0 app-min-width-0";
  } else if (e.id === "built") {
    return "app-flex app-flex-1-1 app-mg-l-1 app-min-width-0";
  } else if (e.id === "link") {
    return "app-flex app-flex-basis-6 app-max-width-6 app-justify-content-start app-mg-l-1 app-mg-r-05";
  }
};

export const generateSorting = (column) => {
  return (
    <>
      {column.isSorted ? (
        column.isSortedDesc ? (
          <FaceUpIcon
            style={{
              width: "0.7rem",
              height: "0.7rem",
              transform: "rotate(180deg)",
              fill: "#2e9cca",
            }}
          />
        ) : (
          <FaceUpIcon
            style={{ width: "0.7rem", height: "0.7rem", fill: "#2e9cca" }}
          />
        )
      ) : (
        ""
      )}
    </>
  );
};
