import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import userImg from "../assets/img/user.jpg";
import { SidebarLink } from "./SidebarLink";

export const Sidebar = () => {
  const { isOpen } = useSelector(({ sidebar }) => sidebar);
  const [foodDropdown, setFoodDropdown] = React.useState(false);

  const openDropDown = () => setFoodDropdown(!foodDropdown);

  return (
    <div className={isOpen ? `sidebar pe-4 pb-3` : `sidebar pe-4 pb-3 open`}>
      <nav className="navbar bg-light navbar-light">
        <a href="index.html" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary">
            <i className="fa fa-hashtag me-2"></i>DASHMIN
          </h3>
        </a>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img
              className="rounded-circle"
              src={userImg}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
          </div>
          <div className="ms-3">
            <h6 className="mb-0">Jhon Doe</h6>
            <span>Admin</span>
          </div>
        </div>
        <div className="navbar-nav w-100">
          <SidebarLink
            link="/"
            title="Домашняя страница"
            icon="bi bi-house-fill"
          />
          <div className="nav-item dropdown">
            <div
              style={{ cursor: "pointer" }}
              className={
                foodDropdown
                  ? `nav-link dropdown-toggle show`
                  : "nav-link dropdown-toggle"
              }
              data-bs-toggle="dropdown"
              onClick={openDropDown}
            >
              <i className="bi bi-egg-fried"></i>Еда
            </div>
            <div
              className={
                foodDropdown
                  ? "dropdown-menu bg-transparent border-0 show"
                  : "dropdown-menu bg-transparent border-0"
              }
            >
              <a href="button.html" className="dropdown-item">
                Все рецепты
              </a>
              <a href="typography.html" className="dropdown-item">
                Избранное
              </a>
            </div>
          </div>
          <SidebarLink
            link="planner"
            title="Планировщик меню"
            icon="bi bi-list-task"
          />
        </div>
      </nav>
    </div>
  );
};
