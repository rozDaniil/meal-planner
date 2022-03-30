import React from "react";
import { addZero } from "../helpers/addZero";

export const NonEditableCell = ({ index, typeOfMeal, week }) => {
  return (
    <td>
      {Object.keys(typeOfMeal).length === 0
        ? ""
        : typeOfMeal[index][
            week[0].split("-")[0] +
              "-" +
              `${addZero(+week[0].split("-")[1] - 1)}`
          ]}
    </td>
  );
};
