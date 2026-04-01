import { Menu } from "lucide-react"

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

export default ToggleBtn
