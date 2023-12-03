import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import User from "./pages/user/User";
import UserInfo from "./pages/user/UserInfo";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "user/:userId",
        element: <User />,
        children: [{ path: "userInfo", element: <UserInfo /> }],
      },
    ],
  },
]);

export default Router;
