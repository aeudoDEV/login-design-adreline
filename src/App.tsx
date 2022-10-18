import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Finish } from './pages/Finish';
import { LoginU } from './pages/Login';
import { Register } from './pages/Register';
import './styles/global.css';


export function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <LoginU/>,
    },
    {
      path:'/register',
      element: <Register/>,
    },
    {
      path:'/finish',
      element: <Finish/>,
    }
  ])
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

