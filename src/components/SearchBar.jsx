import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

function SearchBar ({ onSubmit }) {
  const searchInput = React.useId()
  const [input, setInput] = React.useState('')

  return (
    <form
      className='flex w-full gap-4 px-5 py-3 bg-gray-100 rounded-2xl'
      action='submit'
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(input)
      }}
    >
      <label
        className='sr-only'
        htmlFor='formId'
      >Search
      </label>
      <input
        id={searchInput}
        className='w-full text-sm font-bold text-black md:text-base bg-inherit outline-offset-8 outline-purple-600'
        type='text'
        value={input}
        autoFocus
        placeholder='Type here...'
        onChange={(event) => setInput(event.target.value)}
      />
      <button
        type='submit'
      ><HiOutlineSearch className='text-2xl text-purple-600 dark:text-purple-400' />
      </button>
    </form>
  )
}

export default SearchBar
