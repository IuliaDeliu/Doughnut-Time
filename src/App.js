import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AboutUsPage from './pages/AboutUs';
import CorporatePage from './pages/Corporate';
import AccessoryPage from './pages/Accessory';
import DoughnutsPage from './pages/Doughnuts';
import ErrorPage from './pages/Error';
import RootLayout from './pages/Root';
import DoughnutDetailPage from './pages/DoughnutDetail';
import ContactPage from './pages/Contact';
import CartPage from './pages/Cart';
import DoughnutsVeganPage from './pages/DoughnutsVegan';
import DoughnutsBakedPage from './pages/DoughnutsBaked';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AboutUsPage /> },
      { path: 'doughnuts/:productId', element: <DoughnutDetailPage /> },
      { path: 'doughnuts', element: <DoughnutsPage /> },
      { path: 'doughnuts/vegan', element: <DoughnutsVeganPage /> },
      { path: 'doughnuts/baked', element: <DoughnutsBakedPage /> },
      { path: 'accessory', element: <AccessoryPage /> },
      { path: 'corporate', element: <CorporatePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'cart', element: <CartPage /> }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
