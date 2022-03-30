import React from "react";
import { useSelector } from "react-redux";

import { NonEditableMenu } from "../component//NonEditableMenu";
import { Header } from "../component/Header";
import { Prewiev } from "../component/Prewiev";
import { Sidebar } from "../component/Sidebar";

export const Home = () => {
  const { isOpen } = useSelector(({ sidebar }) => sidebar);

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebar />
      <div className={isOpen ? `content` : "content open"}>
        <Header />
        <Prewiev />
        <NonEditableMenu />
      </div>
    </div>
  );
};
