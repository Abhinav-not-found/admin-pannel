import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/layout/layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: "Analytics page",
      },
      {
        path: "/dashboard-ecommerce",
        element: "Dashboard Ecommerce page",
      },
      {
        path: "/dashboard-crypto",
        element: "Dashboard Crypto page",
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
