import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import router from "./route/router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

AOS.init({ duration: 600 });

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-middle" />
    </AuthProvider>
  </React.StrictMode>
);
