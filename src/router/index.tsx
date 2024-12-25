import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import BanTuo from '@/pages/BanTuo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/bantuo',
    element: <BanTuo />,
  }
]);

export default router; 