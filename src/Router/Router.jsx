import { createBrowserRouter } from "react-router-dom";
import MainPageLayout from "../PageLayout/MainPageLayout";
import Home from "../HomePage/Home";
import Register from "../HomePage/AccountPage/Register";
import SignIn from "../HomePage/AccountPage/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageLayout/>,
    errorElement:<h2>ROUTE Not Found</h2>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/signIn',
        element:<SignIn/>
      }
    ]
  },
]);

export default router;
