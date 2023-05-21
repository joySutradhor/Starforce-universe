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
import Details from './Pages/AllComics/Details';
import MyComic from './Pages/Mycomic/MyComic';
import Update from './Pages/Mycomic/Update';
import ErrorPage from './ErrorPage/ErrorPage';
import Blog from './Pages/Blog/Blog';


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
        loader : () => fetch(`https://starforce-universe-server.vercel.app/comics`) 
      } ,
      {
        path : "/details/:id",
        element : <PrivateRoute><Details></Details></PrivateRoute> ,
        loader : ({params}) => fetch(`https://starforce-universe-server.vercel.app/comics/${params.id}`)
        
      },
      {
        path: "/addComic",
        element: <PrivateRoute><AddComic></AddComic></PrivateRoute>
      },
      {
        path: "/myComic",
        element : <PrivateRoute><MyComic></MyComic></PrivateRoute>
      },
      {
        path: "/update/:id",
        element: <Update></Update> ,
        loader : ({params}) => fetch(`https://starforce-universe-server.vercel.app/comics/${params.id}`)
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
        path : "/blog" ,
        element : <Blog></Blog>
      }

    ]
  },
  {
    path : "*" ,
    element : <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
