import { Menu } from "lucide-react"

const Navbar = ({ setToggleSidebar }) => {
  return (
    <div className='flex items-center justify-between w-full h-16 bg-white shadow-2xl p-4'>
      <ToggleBtn setToggleSidebar={setToggleSidebar} />
    </div>
  )
}

export default Navbar

const ToggleBtn = ({ setToggleSidebar }) => {
  return (
    <button
      onClick={() => setToggleSidebar((prev) => !prev)}
      className='hover:text-blue-500 cursor-pointer'
    >
      <Menu className='size-7' />
    </button>
  )
}
