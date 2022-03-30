import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { database } from "../firebase";
import { ref, set, onValue } from "firebase/database";

import { Header } from "../component/Header";
import { PlannerTable } from "../component/Planner/PlannerTable";
import { Sidebar } from "../component/Sidebar";
import { Button } from "../component/Button";

import {
  setNextWeek,
  setPrevWeek,
  setShowedWeek,
  setCurrentWeek,
  setMenu,
} from "../redux/actions/plannerTable";
import { showCurrentWeek } from "../helpers/showCurrentWeek";
import { createWeekRange } from "../helpers/createWeekRange";

export const Planner = () => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector(({ sidebar }) => sidebar);
  const { firstDay, lastDay, breakfast, lunch, dinner } = useSelector(
    ({ plannerTable }) => plannerTable
  );

  const reduxCurrentWeek = () =>
    dispatch(
      setShowedWeek([showCurrentWeek()[0].date, showCurrentWeek().at(-1).date])
    );

  const backOnCurrentWeek = () => reduxCurrentWeek();
  const onNextWeekHandler = () => dispatch(setNextWeek());
  const onPrevWeekHandler = () => dispatch(setPrevWeek());

  const saveMenu = async () => {
    await set(ref(database, "plan/" + firstDay), {
      breakfast,
      lunch,
      dinner,
    });
  };

  React.useEffect(() => {
    dispatch(setCurrentWeek(showCurrentWeek()));
    reduxCurrentWeek();
    onValue(ref(database, `plan/${firstDay}`), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        dispatch(setMenu(data));
      }
    });
  }, [firstDay]);

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebar />
      <div className={isOpen ? `content` : "content open"}>
        <Header />
        <div className="container-fluid pt-4 px-4">
          <div className="bg-light text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0">Меню</h6>
              <div>
                <button
                  onClick={saveMenu}
                  type="button"
                  className="btn btn-lg btn-primary m-2"
                >
                  Сохранить меню
                </button>
              </div>
              <div>
                <h5 onClick={backOnCurrentWeek} style={{ cursor: "pointer" }}>
                  Today
                </h5>
                <Button
                  onClickHandler={onPrevWeekHandler}
                  icon="bi bi-caret-left"
                />
                <Button
                  onClickHandler={onNextWeekHandler}
                  icon="bi bi-caret-right"
                />
              </div>
            </div>
            <PlannerTable
              week={firstDay && createWeekRange(firstDay, lastDay)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
