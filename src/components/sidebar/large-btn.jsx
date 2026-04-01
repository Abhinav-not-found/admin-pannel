import { NavLink } from "react-router"
import Tag from "../general/tag"

const LargeBtn = ({ to, icon, name, pro = false }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={`p-2.5 px-5 flex items-center gap-3 w-full transition-all duration-200 relative ${
            isActive
              ? "bg-linear-to-r from-blue-500/10 to-transparent border-l-3 border-l-blue-500"
              : "hover:bg-white/5 text-neutral-400"
          }`}
        >
          {icon}
          <p className='text-sm'>{name}</p>
          {pro && <Tag className='absolute top-2.5 right-3 text-white' />}
        </div>
      )}
    </NavLink>
  )
}

export default LargeBtn
