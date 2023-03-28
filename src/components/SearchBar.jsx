import React from 'react'

function SearchBar () {
  const searchInput = React.useId()
  return (
    <form
      className='bg-gray-200 p-3 rounded-xl w-full flex gap-3'
    >
      <label
        className='sr-only'
        htmlFor='formId'
      >Search
      </label>
      <input
        id={searchInput}
        className='bg-gray-200 w-full'
        type='text'
      />
      <button
        type='submit'
      >🔍
      </button>
    </form>
  )
}

export default SearchBar
