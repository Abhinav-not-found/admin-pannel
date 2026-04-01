import { MessageSquare } from "lucide-react"
import Button from "../ui/button"

const MessageBtn = () => {
  return (
    <Button variant='ghost' className='group hover:bg-transparent'>
      <MessageSquare className='size-5 text-neutral-500 group-hover:text-blue-500' />
    </Button>
  )
}

export default MessageBtn
