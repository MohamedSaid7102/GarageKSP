import React from 'react'
import ReactDOM from 'react-dom/client'
import { About, Contacts, Home, NotFound, Projects, Services } from './routes';
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ThemeProvider } from './ThemeContext'; // Import your ThemeProvider

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      {/*<App />*/}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
