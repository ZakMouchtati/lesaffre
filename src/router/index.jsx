import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import List from "../views/List";
import Tombola from "../components/Tombola";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/list",
      element: <List />,
    },
    {
      path: "/tombola",
      element: <Tombola />,
    },
]);
export default router;
  