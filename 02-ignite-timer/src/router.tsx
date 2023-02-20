import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { History } from "@/pages/history";
import { Home } from "@/pages/home";

export function Router() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/history", element: <History /> },
  ]);
  return <RouterProvider router={router} />;
}
