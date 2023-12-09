import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './pages/home/Home/Home';
import Login from './pages/login/Login/Login';
import Register from './pages/register/Register/Register';
import CreateAssignment from './pages/createAssignment/CreateAssignment/CreateAssignment';
import UpdateAssignment from './pages/updateAssignment/UpdateAssignment/UpdateAssignment';
import AllAssignments from './pages/allassignments/AllAssignments/AllAssignments';
import MyAssignments from './pages/myAssignments/MyAssignments/MyAssignments';
import SubmittedAssignments from './pages/submittedAssignments/SubmittedAssignments/SubmittedAssignments';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Details from './pages/details/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/createassignment",
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
      {
        path: "/updateassignment",
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>
      },
      {
        path: "/allassignments",
        element: <AllAssignments></AllAssignments>,
        loader: () => fetch("https://e-school-server-rho.vercel.app/allassignments")
      },
      {
        path: "/myassignments",
        element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>
      },
      {
        path: "/submittedassignments",
        element: <PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute>
      },
      {
        path: "/details",
        element: <PrivateRoute><Details></Details></PrivateRoute>
      }

    ] 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
