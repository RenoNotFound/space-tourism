import React from "react";
import { Link, Outlet } from "react-router-dom";

import Header from "./Header";

import "./main.scss";

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
