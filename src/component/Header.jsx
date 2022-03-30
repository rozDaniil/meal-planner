import React from "react";
import { useDispatch, useSelector } from "react-redux";

import userImg from "../assets/img/user.jpg";
import { openSidebar } from "../redux/actions/sidebar";

export const Header = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(({ sidebar }) => sidebar);

  const sidebarToggler = () => dispatch(openSidebar(!isOpen));

  return (
    <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
      <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
        <h2 className="text-primary mb-0">
          <i className="fa fa-hashtag"></i>
        </h2>
      </a>
      <div
        style={{ cursor: "pointer" }}
        className="sidebar-toggler flex-shrink-0"
        onClick={sidebarToggler}
      >
        <i className="fa fa-bars"></i>
      </div>
      <form className="d-none d-md-flex ms-4">
        <input
          className="form-control border-0"
          type="search"
          placeholder="Search"
        />
      </form>
      <div className="navbar-nav align-items-center ms-auto">
        <div className="nav-item dropdown">
          <a
            href="/"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <img
              className="rounded-circle me-lg-2"
              src={userImg}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <span className="d-none d-lg-inline-flex">John Doe</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            <a href="/" className="dropdown-item">
              My Profile
            </a>
            <a href="/" className="dropdown-item">
              Settings
            </a>
            <a href="/" className="dropdown-item">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
