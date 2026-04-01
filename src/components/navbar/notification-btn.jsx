import clsx from "clsx"
import { Bell } from "lucide-react"
import Button from "../ui/button"

const NotificationBtn = () => {
  return (
    <div className='relative group'>
      <Button variant='ghost' className='group hover:bg-transparent'>
        <Bell className='size-5 text-neutral-500 group-hover:text-blue-500' />
      </Button>
      <Badge className={" group-hover:-translate-y-1 transition-transform"} />
    </div>
  )
}

export default NotificationBtn

const Badge = ({ className }) => {
  return (
    <div
      className={clsx(
        "absolute top-0 right-1 bg-blue-500 text-white text-xs rounded-full size-4.5 flex items-center justify-center",
        className,
      )}
    >
      4
    </div>
  )
}
