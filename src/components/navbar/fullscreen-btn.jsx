import { Maximize } from "lucide-react"
import Button from "../ui/button"

const FullscreenBtn = () => {
  return (
    <Button variant='ghost' className='group hover:bg-transparent'>
      <Maximize className='size-5 text-neutral-500 group-hover:text-blue-500' />
    </Button>
  )
}

export default FullscreenBtn
