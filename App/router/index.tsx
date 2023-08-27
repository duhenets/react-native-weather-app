import React from 'react';
import { RouterProvider } from 'react-router-native';
import { router } from './router';

const Router: React.FC = () => <RouterProvider router={router}/>;

export default Router;
