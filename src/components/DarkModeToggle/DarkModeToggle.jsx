import React from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

function DarkModeToggle ({ darkModeOn, setDarkModeOn }) {
  const handleDarkModeToggle = () => {
    setDarkModeOn(!darkModeOn)
  }

  return (
    <button
      className='ml-2 outline-offset-4 outline-purple-600'
      onClick={handleDarkModeToggle}
    >
      {darkModeOn
        ? <HiOutlineSun className='text-2xl' />
        : <HiOutlineMoon className='text-2xl' />}
    </button>
  )
}

export default DarkModeToggle
