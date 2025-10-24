import { createBrowserRouter } from "react-router";
import Success from "../components/Success";
import Root from "../layout/Root";
import Home from "../components/Home";
import faild from "../components/faild";

const router = createBrowserRouter([
  {
    path: "/",

    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "success", Component: Success },
      { path: "fail", Component: faild },
    ],
  },
]);

export default router;
