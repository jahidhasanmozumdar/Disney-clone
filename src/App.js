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
import NotFoundPage from "./component/Error/Error";
import ComingSoonPage from "./component/ComingSoon/CommingSoon";

function App() {
  const [search, setSearch] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main setSearch={setSearch} search={search}></Main>,
      children: [
        { path: "/", element: <Login></Login> },
        {
          path: "/home",
          element: <Home></Home>,
        },
        { path: "/details/:id", element: <Details></Details> },
        { path: "/filter", element: <FilterData search={search}></FilterData> },
        { path: "/Series", element: <ComingSoonPage></ComingSoonPage> },
        { path: "/original", element: <ComingSoonPage></ComingSoonPage> },
        { path: "/movie", element: <ComingSoonPage></ComingSoonPage> },
        { path: "/watchlist", element: <ComingSoonPage></ComingSoonPage> },
        {
          path: "/login",
          element: <LoginPage></LoginPage>,
        },
        {
          path: "/sing",
          element: <SingUpPage></SingUpPage>,
        },
        
      ],
    },
    {
      path: "*",
      element: <NotFoundPage></NotFoundPage>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
