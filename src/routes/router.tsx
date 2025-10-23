import { createBrowserRouter } from "react-router";
import Success from "../components/Success";
import SSLPaymentPage from "../components/Payment";

const router = createBrowserRouter([
  {
    path: "/",

    element: <SSLPaymentPage></SSLPaymentPage>,
  },
  {
    path: "/success",

    element: <Success></Success>,
  },
]);

export default router;
