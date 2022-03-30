import React from "react";

export const PlannerHeadCell = ({ date, day, dataAtt }) => {
  const todayChecker =
    +date.split("-")[0] === new Date().getDate() &&
    +date.split("-")[1] - 1 === new Date().getMonth();

  return (
    <th scope="col" datatype={dataAtt}>
      <span className={todayChecker ? "today" : null} style={{ float: "left" }}>
        {date}
      </span>
      <span
        className={todayChecker ? "today" : null}
        style={{ float: "right" }}
      >
        {day}
      </span>
    </th>
  );
};
