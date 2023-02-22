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
import { CustomerEdit, action as customerEdit } from './Customer/CustomerEdit';
import { CustomerNew, action as customerNew, loader as CustomerNewId } from './Customer/CustomerNew';
import { ProviderDetail } from './Provider/ProviderDetail';
import {ProviderEdit, } from './Provider/ProviderEdit'

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
        path: "customer/new",
        element: <CustomerNew />,
        action: customerNew,
        loader: CustomerNewId
      },
      {
        path: "customer/:customerId/edit",
        element: <CustomerEdit />,
        loader: customerLoader,
        action: customerEdit
      },
      {
        path: "provider/:providerId",
        element: <ProviderDetail />,
      },
      {
        path: "provider/:providerId/edit",
        element: <ProviderEdit />,
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

