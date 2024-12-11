import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home/Home';
import MainContex from './Components/Providers/MainContex';
import Details from './Components/Details/Details';
import Register from './Components/Register';
import Login from './Components/log/Login';
import Quiz from './Components/Quiz/Quiz';
import AllJObs from './Components/Details/AllJObs';
import About from './Components/About';
import AddJobs from './Components/AddJobs';
import PrivateRoute from './Components/Providers/PrivateRoute';
import Table from './Components/Table';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/categoris/:id',
        element:<Details></Details>,
        
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/quiz',
        element:<PrivateRoute><Quiz></Quiz></PrivateRoute>
      },
      {
        path:'/alljobs',
        element:<AllJObs></AllJObs>
      },
      {
        path:'/about_us',
        element:<About></About>
      },
      {
        path:'/addjobs',
        element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      },
      {
        path:'/users',
        element:<Table></Table>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContex>
      <RouterProvider router={router} />
    </MainContex>
  </StrictMode>,
)
