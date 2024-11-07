import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Banner from "./components/Banner.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import GadgetDetail from "./components/GadgetDetail.jsx";
import WhatsNew from "./components/WhatsNew.jsx";
import Statistics from "./components/Statistics.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/gadget/:id",
        element: <GadgetDetail />,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/whatsNew",
        element: <WhatsNew />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
