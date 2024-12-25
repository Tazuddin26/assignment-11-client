import { createBrowserRouter } from "react-router-dom";
import MainPageLayout from "../PageLayout/MainPageLayout";
import Home from "../HomePage/Home";
import Register from "../HomePage/AccountPage/Register";
import SignIn from "../HomePage/AccountPage/SignIn";
import VolunteerPostDetails from "../PageLayout/PostDetails/VolunteerPostDetails";
import PrivateRoute from "./PrivateRoute";
import NeedVolunteer from "../PageLayout/NeeVolunteer/NeedVolunteer";
import BeVolunteer from "../PageLayout/BeVolunteer/BeVolunteer";
import ManagePost from "../PageLayout/ManagePost/ManagePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageLayout />,
    errorElement: <h2>ROUTE Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/beVolunteer/:id",
        element: (
          <PrivateRoute>
            <BeVolunteer />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/volunteerPost/${params.id}`),
      },
      {
        path: "/volunteers-need",
        element: <NeedVolunteer />,
      },
      {
        path: "/postDetails/:id",
        element: (
          <PrivateRoute>
            <VolunteerPostDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/volunteers/${params.id}`),
      },
      {
        path: "/managePost",
        element: (
          <PrivateRoute>
            <ManagePost />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
