import React from 'react'

function SearchBar () {
  return (
    <form className='bg-gray-200 p-3 rounded-xl w-full'>
      <label
        className='flex gap-3'
        htmlFor=''
      >
        <input
          className='bg-gray-200 w-full'
          type='text'
        />
        <button
          type='submit'
        >🔎
        </button>
      </label>
    </form>
  )
}

export default SearchBar
