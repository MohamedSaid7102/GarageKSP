import React from "react";
import ReactDOM from "react-dom/client";
import {
  About,
  Contacts,
  Home,
  NotFound,
  Products,
  SendCV,
  Services,
} from "./routes";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./ThemeContext"; // Import your ThemeProvider
import { LanguageProvider } from "./LanguageContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";
import { axiosInterceptor } from "../axiosInterceptor.js";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "sendcv/:jobId",
        element: <SendCV />,
      },
    ],
  },
]);
axiosInterceptor();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
