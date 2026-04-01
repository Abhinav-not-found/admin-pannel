import Avatar from "../ui/avatar"
import FullscreenBtn from "./fullscreen-btn"
import LanguageBtn from "./language-btn"
import MessageBtn from "./message-btn"
import NotificationBtn from "./notification-btn"
import ToggleBtn from "./toggle-btn"

const Navbar = ({ setToggleSidebar }) => {
  return (
    <div className='flex items-center justify-between w-full h-16 bg-white shadow-2xl p-4'>
      <ToggleBtn setToggleSidebar={setToggleSidebar} />
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
