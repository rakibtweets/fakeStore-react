import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements, Route, RouterProvider
} from 'react-router-dom';
import './App.css';
import Products from './Components/Products/Products';
import RootLayout from './Components/RootLayout/RootLayout';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import WelcomePage from './Pages/Welcome/Welcome';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<WelcomePage />} />
    <Route path="/product" element={<Products />} />
    <Route path="/product/:id" element={<ProductDetails />} />
  </Route>,
));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
