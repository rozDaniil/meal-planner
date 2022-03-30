import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { PlannerCell } from "./PlannerCell";
import { PlannerHeadCell } from "./PlannerHeadCell";
import {
  setBreakfast,
  setLunch,
  setDinner,
} from "../../redux/actions/plannerTable";
import { parceStringToWeekDay } from "../../helpers/parseStringToWeekDay";
import { weekDay } from "../../consts/week";

export const PlannerTable = ({ week }) => {
  const dispatch = useDispatch();
  const { breakfast, lunch, dinner, firstDay } = useSelector(
    ({ plannerTable }) => plannerTable
  );

  const breakfastHandler = (value) => {
    dispatch(setBreakfast(value));
  };

  const lunchHandler = (value) => {
    dispatch(setLunch(value));
  };

  const dinnerHandler = (value) => {
    dispatch(setDinner(value));
  };

  return (
    <div className="table-responsive">
      <table className="table text-start align-middle table-bordered table-hover mb-0">
        <thead>
          <tr className="text-dark">
            <th scope="col"></th>
            {week &&
              week.map((item, index) => (
                <PlannerHeadCell
                  dataAtt={index}
                  key={item}
                  date={item}
                  day={weekDay[parceStringToWeekDay(item)]}
                />
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Завтрак</td>
            {Array(7)
              .fill(null)
              .map((item, index) => (
                <PlannerCell
                  dataAtt={index}
                  key={index}
                  firstDay={firstDay}
                  typeOfMeal={breakfast}
                  handler={breakfastHandler}
                />
              ))}
          </tr>
          <tr>
            <td>Обед</td>
            {Array(7)
              .fill(null)
              .map((item, index) => (
                <PlannerCell
                  dataAtt={index}
                  key={index}
                  firstDay={firstDay}
                  typeOfMeal={lunch}
                  handler={lunchHandler}
                />
              ))}
          </tr>
          <tr>
            <td>Ужин</td>
            {Array(7)
              .fill(null)
              .map((item, index) => (
                <PlannerCell
                  dataAtt={index}
                  key={index}
                  firstDay={firstDay}
                  typeOfMeal={dinner}
                  handler={dinnerHandler}
                />
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
