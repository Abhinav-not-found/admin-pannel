import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/layout/layout"
import Analytics from "./pages/dashboard/analytics"
import Crypto from "./pages/dashboard/crypto"
import Ecommerce from "./pages/dashboard/ecommerce"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Analytics />,
      },
      {
        path: "/dashboard-ecommerce",
        element: <Ecommerce />,
      },
      {
        path: "/dashboard-crypto",
        element: <Crypto />,
      },
      {
        path: "/pages-settings",
        element: "Pages Settings page",
      },
      {
        path: "/pages-projects",
        element: "Pages Projects page",
      },
      {
        path: "/pages-clients",
        element: "Pages Clients page",
      },
      {
        path: "/pages-orders",
        element: "Pages Orders page",
      },
      {
        path: "/pages-pricing",
        element: "Pages Pricing page",
      },
      {
        path: "/pages-chat",
        element: "Pages Chat page",
      },
      {
        path: "/pages-blank",
        element: "Pages Blank page",
      },
    ],
  },
])

export default function AppRoute() {
  return <RouterProvider router={router} />
}
