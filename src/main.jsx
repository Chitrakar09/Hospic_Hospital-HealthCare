import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/motion.css";
import { initMotion } from "./lib/motion.js";
import { initSmoothScroll } from "./lib/smoothScroll.js";
import { HomePage, AboutPage, ContactPage} from "./pages/index.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { RouterProvider } from "react-router/dom";

// Motion + smooth scroll start before the first render so nothing flashes unanimated.
const cleanups = [initMotion(), initSmoothScroll()];
if (import.meta.hot) import.meta.hot.dispose(() => cleanups.forEach((fn) => fn()));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<AboutPage />}/>
      <Route path="contact" element={<ContactPage/>}/>
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
