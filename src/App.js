import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import Series from "./component/Series/Series";
import Details from "./component/Details/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Login></Login> },
        { path: "/home", element: <Home></Home> },
        { path: "/details/:id", element: <Details></Details> },
        { path: "/Series", element: <Series></Series> },
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
