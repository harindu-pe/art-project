import { createBrowserRouter } from "react-router-dom";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProtectedRoute from "../components/protected/ProtectedRoute";
import Profile from "../components/protected/Profile";
import AddPost from "../components/protected/AddPost";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const HOME = "/home";
export const ABOUT = "/about";
export const CONTACT = "/contact";
export const PROFILE = "/profile";
export const ADDPOST = "/addpost";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Layout />,
    children: [
      {
        path: ROOT,
        element: <Home />,
      },
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: ABOUT,
        element: <About />,
      },
      {
        path: CONTACT,
        element: <Contact />,
      },
      {
        path: ADDPOST,
        element: (
          <ProtectedRoute>
            <AddPost />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  {
    path: PROFILE,
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
]);
