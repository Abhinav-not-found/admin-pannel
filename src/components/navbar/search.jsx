import { Search as SearchIcon } from "lucide-react"

const Search = () => {
  return (
    <div className='flex items-center gap-2 bg-gray-100 py-1.5 px-4 rounded-full'>
      <input type='text' placeholder='Search' className='outline-none' />
      <SearchIcon className='size-5 text-gray-600' />
    </div>
  )
}

export default Search
