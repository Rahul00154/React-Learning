import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
// import About from './components/About.jsx';
// import Contact from './components/Contact.jsx';

//we lazy import the about component it split the about component in separate module that can be loaded lazily
//if we use dynamic import so it is important to wrap that component with suspense to show fallback ui untill component is loaded

// when we use dynamic import to lazily load a module then import() function return a promise that resolves to module namespace object

const About = lazy(() => import('./components/About.jsx'));

//if we import named export component then we import like this

const Contact = lazy(() =>
  import('./components/Contact').then((module) => ({
    default: module.Contact,
  })),
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
