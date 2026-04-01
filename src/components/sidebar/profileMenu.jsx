import Avatar from "../ui/avatar"

const ProfileMenu = () => {
  return (
    <div className='flex items-center gap-3'>
      <Avatar />
      <div className='text-sm'>
        <p>Name</p>
        <p className='text-neutral-400'>Designation</p>
      </div>
    </div>
  )
}

export default ProfileMenu
