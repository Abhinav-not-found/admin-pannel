import { useNavigate } from "react-router"
import Tag from "./tag"

const Logo = () => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate("/")} className='relative w-fit select-none cursor-pointer'>
      <h2 className='text-xl font-semibold'>AdminKit</h2>
      <Tag />
    </div>
  )
}

export default Logo
