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
import { OrderDetail } from './OrderDetail';
import { 
  CustomerDetail,
  loader as customerLoader
} from './Customer/CustomerDetail';
import { CustomerEdit } from './Customer/CustomerEdit';
import { ProviderDetail } from './Provider/ProviderDetail';


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
        path: "import_product",
        element: <MainContent />,
      },
      {
        path: "order/:ord_num",
        element: <OrderDetail />,
      },
      {
        path: "customer/:customerId",
        element: <CustomerDetail />,
        loader: customerLoader
      },
      {
        path: "customer/:customerId/edit",
        element: <CustomerEdit />,
        loader: customerLoader
      },
      {
        path: "provider/:provider_id",
        element: <ProviderDetail />,
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

