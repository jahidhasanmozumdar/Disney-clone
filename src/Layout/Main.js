import React from "react";
import Navbar from "../component/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = (props) => {
  const { setSearch, search, user, setUser } = props;
  return (
    <div>
      <Navbar
        setSearch={setSearch}
        search={search}
        user={user}
        setUser={setUser}
      ></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
