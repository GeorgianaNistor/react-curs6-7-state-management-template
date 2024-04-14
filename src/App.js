import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';
import { Product } from './pages/Product';
import { Header } from './components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: '/products',
    element: (
      <>
        <Header />
        <Products />
      </>
    ),
  },
  {
    path: '/product/:id',
    element: (
      <>
        <Header />
        <Product />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <Header />
        <Cart />
      </>
    ),
  },
]);

export default function App() {
  return (
    <div className="App primary">
      <RouterProvider router={router} />
    </div>
  );
}
