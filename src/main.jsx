import React,{useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./index.css";
import Product from './Components/Product/Product';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Product />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <div className='background'  />
    <div className='background__overlay'  />
    <RouterProvider router={router} />
    </>
  </React.StrictMode>,
)
