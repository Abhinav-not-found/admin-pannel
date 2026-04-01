import { ChevronDown, Search } from "lucide-react"
import Avatar from "../ui/avatar"
import FullscreenBtn from "./fullscreen-btn"
import LanguageBtn from "./language-btn"
import MessageBtn from "./message-btn"
import NotificationBtn from "./notification-btn"
import SearchComponent from "./search"
import ToggleBtn from "./toggle-btn"

const Navbar = ({ setToggleSidebar }) => {
  return (
    <div className='flex items-center justify-between w-full h-16 bg-white shadow-2xl p-4'>
      <div className='hidden md:flex items-center gap-3'>
        <ToggleBtn setToggleSidebar={setToggleSidebar} />
        <SearchComponent />
        <Link>Mega Menu</Link>
        <Link>Resources</Link>
      </div>
      <div className='flex items-center gap-1'>
        <NotificationBtn />
        <MessageBtn />
        <LanguageBtn />
        <FullscreenBtn />
        <Avatar />
      </div>
    </div>
  )
}

export default Navbar

const Link = ({ children }) => {
  return (
    <div className='flex items-center gap-2'>
      <p className='text-sm'>{children}</p>
      <ChevronDown className='size-4' />
    </div>
  )
}
