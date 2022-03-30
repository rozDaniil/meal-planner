import React from "react";

export const Button = ({ icon, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      type="button"
      className="btn btn-square btn-dark m-2"
    >
      <i className={icon}></i>
    </button>
  );
};
