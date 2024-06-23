import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { Typography } from 'antd';
import Page from './Page';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const { Title } = Typography;

const router = createHashRouter([
  {
    path: "/",
    element: <Title>mini-web-app</Title>,
  },{
    path: "/Page",
    element: <Page />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
