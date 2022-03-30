import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentWeek } from "../redux/actions/plannerTable";
import { showCurrentWeek } from "../helpers/showCurrentWeek";
import { createWeekRange } from "../helpers/createWeekRange";
import { parceStringToWeekDay } from "../helpers/parseStringToWeekDay";
import { weekDay } from "../consts/week";
import { PlannerHeadCell } from "./Planner/PlannerHeadCell";
import { NonEditableCell } from "./NonEditableCell";

export const NonEditableMenu = () => {
  const dispatch = useDispatch();
  const { currentWeek, breakfast, lunch, dinner } = useSelector(
    ({ plannerTable }) => plannerTable
  );

  const week =
    currentWeek.length !== 0 &&
    createWeekRange(currentWeek[0].date, currentWeek.at(-1).date);

  React.useEffect(() => {
    dispatch(setCurrentWeek(showCurrentWeek()));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        marginTop: "20px",
        padding: "24px",
        height: "600px",
      }}
      className="col-sm-12 col-xl-6"
    >
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Меню на неделю</h6>
        <table style={{ height: "100%" }} className="table table-striped">
          <thead>
            <tr>
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
          <tbody style={{ height: "100%" }}>
            <tr>
              <th scope="row">Завтрак</th>
              {Array(7)
                .fill(null)
                .map((item, index) => (
                  <NonEditableCell
                    key={index}
                    index={index}
                    typeOfMeal={breakfast}
                    week={week}
                  />
                ))}
            </tr>
            <tr>
              <th scope="row">Обед</th>
              {Array(7)
                .fill(null)
                .map((item, index) => (
                  <NonEditableCell
                    key={index}
                    index={index}
                    typeOfMeal={lunch}
                    week={week}
                  />
                ))}
            </tr>
            <tr>
              <th scope="row">Ужин</th>
              {Array(7)
                .fill(null)
                .map((item, index) => (
                  <NonEditableCell
                    key={index}
                    index={index}
                    typeOfMeal={dinner}
                    week={week}
                  />
                ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
