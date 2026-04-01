import Button from "../ui/button"

const LanguageBtn = () => {
  return (
    <Button variant='ghost' className='group hover:bg-transparent'>
      <div className='size-5 rounded-full overflow-hidden'>
        <img
          src='https://demo.adminkit.io/img/flags/us.png'
          alt='english'
          className='object-cover w-full h-full'
        />
      </div>
    </Button>
  )
}

export default LanguageBtn
