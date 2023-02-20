import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainContent } from './MainContent';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { ErrorPage } from "./ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "order",
        element: <MainContent />,
      },
      {
        path: "customer",
        element: <MainContent />,
      },
      {
        path: "inventory",
        element: <MainContent />,
      },
      {
        path: "provider",
        element: <MainContent />,
      },
      {
        path: "import",
        element: <MainContent />,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

