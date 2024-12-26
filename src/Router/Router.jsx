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
import ManageMyPost from "../PageLayout/ManagePost/ManageMyPost";
import ErrorPage from "../PageLayout/ErrorPage";
import AddVolunteerPost from "../PageLayout/AddVolunteerPost/AddVolunteerPost";
import VolunteerDetailsNeedPost from "../PageLayout/ManagePost/PostedVolunteers";
import UpdateVolunteer from "../PageLayout/UpdateVolunteer/UpdateVolunteer";
import PostedVolunteers from "../PageLayout/ManagePost/PostedVolunteers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageLayout />,
    errorElement: <ErrorPage />,
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
        path: "/volunteers-need",
        element: <NeedVolunteer />,
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
        path: "/updateVolunteer/:id",
        element: (
          <PrivateRoute>
            <UpdateVolunteer />
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
      {
        path: "/manageMyPost",
        element: (
          <PrivateRoute>
            <ManageMyPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/addVolunteerPost",
        element: (
          <PrivateRoute>
            <AddVolunteerPost />
          </PrivateRoute>
        ),
      },

      {
        path: "/volunteers",
        element: (
          <PrivateRoute>
            <VolunteerDetailsNeedPost />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
