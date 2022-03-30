import React from "react";
import { Link, useLocation } from "react-router-dom";

export const SidebarLink = ({ title, icon, link }) => {
  const navigate = useLocation();
  // console.log(navigate);
  return (
    <Link style={{ display: "flex" }} to={link} className="nav-item nav-link">
      <i className={icon}></i>
      <span>{title}</span>
    </Link>
  );
};
