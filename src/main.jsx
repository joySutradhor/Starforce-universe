import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main';
import AuthProviders from './Login and Register/Provider';
import Login from './Login and Register/Login';
import Register from './Login and Register/Register';
import Home from './Pages/Home/Home';
import AddComic from './Pages/AddComic/AddComic';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AllComics from './Pages/AllComics/AllComics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path : "/allComics",
        element : <AllComics></AllComics> ,
        loader : () => fetch(`http://localhost:5000/comics`) 
      } ,
      {
        path: "/addComic",
        element: <PrivateRoute><AddComic></AddComic></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
