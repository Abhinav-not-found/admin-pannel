import clsx from "clsx"

const Avatar = ({ className }) => {
  return (
    <div className={clsx("size-10 bg-red-50 rounded-sm", className)}>
      <img
        src='https://demo.adminkit.io/img/avatars/avatar.jpg'
        alt='avatar'
        className='object-cover rounded-sm'
      />
    </div>
  )
}

export default Avatar
