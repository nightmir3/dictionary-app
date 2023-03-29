import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

function SearchBar () {
  const searchInput = React.useId()
  return (
    <form
      className='flex w-full gap-4 px-5 py-3 bg-gray-100 rounded-2xl'
    >
      <label
        className='sr-only'
        htmlFor='formId'
      >Search
      </label>
      <input
        id={searchInput}
        className='w-full text-sm font-bold text-black bg-inherit'
        type='text'
        value='keyboard'
      />
      <button
        type='submit'
      ><HiOutlineSearch className='text-2xl text-purple-600' />
      </button>
    </form>
  )
}

export default SearchBar
