import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/layout/layout"
import Error from "./screens/auth/error"
import NotFound from "./screens/auth/not-found"
import ResetPassword from "./screens/auth/reset-password"
import Signin from "./screens/auth/signin"
import Signup from "./screens/auth/signup"
import Analytics from "./screens/dashboard/analytics"
import Crypto from "./screens/dashboard/crypto"
import Ecommerce from "./screens/dashboard/ecommerce"
import Blank from "./screens/pages/blank"
import Calander from "./screens/pages/calander"
import Chat from "./screens/pages/chat"
import Clients from "./screens/pages/clients"
import Invoice from "./screens/pages/invoice"
import Orders from "./screens/pages/orders"
import Pricing from "./screens/pages/pricing"
import Profile from "./screens/pages/profile"
import Projects from "./screens/pages/projects"
import Settings from "./screens/pages/settings"
import Tasks from "./screens/pages/tasks"

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
        element: <Settings />,
      },
      {
        path: "/pages-projects",
        element: <Projects />,
      },
      {
        path: "/pages-clients",
        element: <Clients />,
      },
      {
        path: "/pages-orders",
        element: <Orders />,
      },
      {
        path: "/pages-pricing",
        element: <Pricing />,
      },
      {
        path: "/pages-chat",
        element: <Chat />,
      },
      {
        path: "/pages-blank",
        element: <Blank />,
      },
      {
        path: "/pages-profile",
        element: <Profile />,
      },
      {
        path: "/pages-invoice",
        element: <Invoice />,
      },
      {
        path: "/pages-calander",
        element: <Calander />,
      },
      {
        path: "/pages-tasks",
        element: <Tasks />,
      },
    ],
  },
  {
    path: "/pages-sign-in",
    element: <Signin />,
  },
  {
    path: "/pages-sign-up",
    element: <Signup />,
  },
  {
    path: "/pages-reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/pages-error",
    element: <Error />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

export default function AppRoute() {
  return <RouterProvider router={router} />
}
