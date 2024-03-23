import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: '/donation',
      element: <div>hi this test</div>
    },
    {
      path: '/statistics',
      element: <div>hi this statistic</div>
    }
]);

export default router;