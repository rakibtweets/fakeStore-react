import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements, Route, RouterProvider
} from 'react-router-dom';
import './App.css';
import Products from './Components/Products/Products';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import RootLayout from './Components/RootLayout/RootLayout';
import Login from './Pages/Login/Login';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Register from './Pages/Register/Register';
import WelcomePage from './Pages/Welcome/Welcome';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<WelcomePage />} />
    <Route path="/product" element={<Products />} />
    <Route
      path="/product/:id"
      element={(
        <RequireAuth>
          <ProductDetails />
        </RequireAuth>
)}
    />

    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Route>,
));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
