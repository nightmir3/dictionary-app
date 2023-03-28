import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

function SearchBar () {
  const searchInput = React.useId()
  return (
    <form
      className='bg-gray-100 p-4 px-5 rounded-2xl w-full flex gap-4'
    >
      <label
        className='sr-only'
        htmlFor='formId'
      >Search
      </label>
      <input
        id={searchInput}
        className='bg-inherit w-full font-bold text-black'
        type='text'
        value='keyboard'
      />
      <button
        type='submit'
      ><HiOutlineSearch className='text-purple-600 text-xl' />
      </button>
    </form>
  )
}

export default SearchBar
