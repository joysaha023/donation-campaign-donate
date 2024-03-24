import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/donation",
            element: <Donation></Donation>
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>
        },
        {
          path: "/donation-details/:id",
          element: <DonationDetails></DonationDetails>
        }
      ]
    },
]);

export default router;