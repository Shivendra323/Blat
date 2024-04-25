import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';
import Home from './components/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-c2520oy4eugqr871.us.auth0.com"
      clientId="38pFsDjsECmDzDHZPax03avWmFz2UWw4"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <RouterProvider router={router}/>
    <ToastContainer/>
    </Auth0Provider>,
  </React.StrictMode>,
)
