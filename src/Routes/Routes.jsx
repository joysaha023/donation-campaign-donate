import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <h1>Home...</h1>
        },
        {
            path: "/donation",
            element: <h1>Donation.</h1>
        },
        {
            path: "/statistics",
            element: <h2>Statistics....</h2>
        }
      ]
    },
]);

export default router;