import React from 'react';
import './App.css';
import Layout from 'components/Layout';
import Home from 'components/Home';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Quote from './components/Quote';
import Calculator from './components/Calculator';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'calculator', element: <Calculator /> },
        { path: 'quote', element: <Quote /> },
        { path: '*', element: <Navigate to="/" /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
