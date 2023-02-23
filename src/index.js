import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainContent, loader as mainContentLoader } from './MainContent';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { ErrorPage } from "./ErrorPage";
import {
  OrderDetail,
  loader as orderLoader
} from './Order/OrderDetail';
import { action as orderDelete } from './Order/OrderDelete';

import { 
  ImportDetail,
  loader as importLoader
} from './Import/ImportDetail';
import { action as importDelete } from './Import/ImportDelete';

import {
  ProductDetail,
  loader as productLoader
} from './Inventory/ProductDetail';
import { action as productDelete } from './Inventory/ProductDelete';

import {
  CustomerDetail,
  loader as customerLoader
} from './Customer/CustomerDetail';
import {
  CustomerEdit,
  action as customerEdit
} from './Customer/CustomerEdit';
import {
  CustomerNew,
  action as customerNew, loader as CustomerNewId
} from './Customer/CustomerNew';
import { action as customerDelete } from './Customer/CustomerDelete';
import {
  ProviderDetail,
  loader as providerLoader
} from './Provider/ProviderDetail';
import {
  ProviderEdit,
  action as providerEdit
} from './Provider/ProviderEdit';
import {
  ProviderNew,
  loader as providerNewId,
  action as providerNew
} from './Provider/ProviderNew';
import { action as providerDelete } from './Provider/ProviderDelete';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "order",
      //   element: <MainContent />,
      //   loader: mainContentLoader,
      // },
      // {
      //   path: "customer",
      //   element: <MainContent />,
      // },
      // {
      //   path: "inventory",
      //   element: <MainContent />,
      // },
      // {
      //   path: "provider",
      //   element: <MainContent />,
      // },
      // {
      //   path: "import_product",
      //   element: <MainContent />,
      // },
      {
        path: "/:data",
        element: <MainContent />,
        loader: mainContentLoader
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
        path: "customer/:customerId/delete",
        action: customerDelete
      },
      {
        path: "provider/:providerId",
        element: <ProviderDetail />,
        loader: providerLoader
      },
      {
        path: "provider/new",
        element: <ProviderNew />,
        loader: providerNewId,
        action: providerNew
      },
      {
        path: "provider/:providerId/edit",
        element: <ProviderEdit />,
        loader: providerLoader,
        action: providerEdit
      },
      {
        path: "provider/:providerId/delete",
        action: providerDelete
      },
      //Order
      {
        path: "order/:orderId",
        element: <OrderDetail />,
        loader: orderLoader
      },
      {
        path: "order/:orderId/delete",
        action: orderDelete
      },
      //Inventory
      {
        path: "inventory/:inventoryId",
        element: <ProductDetail />,
        loader: productLoader
      },
      {
        path: "inventory/:inventoryId/delete",
        action: productDelete
      },
      //Import
      {
        path: "import/:importId",
        element: <ImportDetail />,
        loader: importLoader
      },
      {
        path: "import/:importId/delete",
        action: importDelete
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

