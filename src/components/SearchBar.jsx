import React from 'react'

function SearchBar () {
  return (
    <form className='bg-gray-200 p-3 rounded-xl w-full flex gap-3'>
      <label
        className='sr-only'
        htmlFor=''
      >Search
      </label>
      <input
        className='bg-gray-200 w-full not-sr-only'
        type='text'
      />
      <button
        className='not-sr-only'
        type='submit'
      >🔍
      </button>
    </form>
  )
}

export default SearchBar
