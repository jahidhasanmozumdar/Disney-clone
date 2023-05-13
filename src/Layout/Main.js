import React from "react";
import Navbar from "../component/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = (props) => {
  const { setSearch, search } = props;
  return (
    <div>
      <Navbar
        setSearch={setSearch}
        search={search}
        
      ></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
