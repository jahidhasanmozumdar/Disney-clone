import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import Series from "./component/Series/Series";
import Details from "./component/Details/Details";
import FilterData from "./component/FilterData/FilterData";
import LoginPage from "./component/LoginPage/LoginPage";
import SingUpPage from "./component/SignUpPage/SignUpPage";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main setSearch={setSearch} search={search} user={user} setUser={setUser}></Main>,
      children: [
        { path: "/", element: <Login></Login> },
        {
          path: "/home",
          element: <Home></Home>,
        },
        { path: "/details/:id", element: <Details></Details> },
        { path: "/Series", element: <Series></Series> },
        { path: "/filter", element: <FilterData search={search}></FilterData> },
        {
          path: "/login",
          element: <LoginPage user={user} setUser={setUser}></LoginPage>,
        },
        {
          path: "/sing",
          element: <SingUpPage user={user} setUser={setUser}></SingUpPage>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
