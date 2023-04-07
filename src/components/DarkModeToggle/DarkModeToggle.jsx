import React from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

function DarkModeToggle ({ darkModeOn, setDarkModeOn }) {
  const handleDarkModeToggle = () => {
    setDarkModeOn(!darkModeOn)
  }

  return (
    <button
      className='ml-2 rounded-md outline-offset-2 outline-purple-600 dark:ring-0'
      onClick={handleDarkModeToggle}
    >
      {darkModeOn
        ? <HiOutlineSun className='text-2xl' />
        : <HiOutlineMoon className='text-2xl' />}
    </button>
  )
}

export default DarkModeToggle
