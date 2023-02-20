import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { History } from "@/pages/history";
import { Home } from "@/pages/home";

import { DefaultLayout } from "./layouts/default";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/history", element: <History /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
