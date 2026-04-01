import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useLocation } from "react-router"

const Accordion = ({ name, icon, children, activeRoutes = [] }) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const isActive = activeRoutes.includes(location.pathname)

  return (
    <div className='flex flex-col'>
      <button
        onClick={() => setOpen(!open)}
        className={`p-2.5 px-5 flex justify-between items-center w-full transition-all duration-200 ${
          isActive
            ? "bg-linear-to-r from-blue-500/10 to-transparent border-l-3 border-l-blue-500"
            : "hover:bg-white/5 text-neutral-400"
        }`}
      >
        <div className='flex items-center gap-3'>
          {icon}
          <p className='text-sm'>{name}</p>
        </div>
        <ChevronDown
          className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && <div className='mt-2 space-y-4'>{children}</div>}
    </div>
  )
}

export default Accordion
