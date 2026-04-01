import { useState } from "react"
import { Outlet } from "react-router"
import Navbar from "../general/navbar"
import Sidebar from "../general/sidebar"

const Layout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true)
  return (
    <div className='flex'>
      {toggleSidebar && <Sidebar />}
      <div className='w-full'>
        <Navbar setToggleSidebar={setToggleSidebar} />
        <div className='bg-[#F5F6FA] min-h-[calc(100vh-4rem)] p-10'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
