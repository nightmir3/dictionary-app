import React from 'react'
import { HiOutlineBookOpen, HiOutlineMoon, HiOutlineSun, HiChevronDown } from 'react-icons/hi'

function Header () {
  return (
    <div className='flex justify-between text-gray-500'>
      <div><HiOutlineBookOpen className='text-4xl' /></div>
      <div className='flex gap-3 divide-x-2 items-center'>
        <span className='text-sm font-bold'>Serif <HiChevronDown className='text-purple-600 text-2xl ml-1 inline' /></span>
        <span className='pl-3'><HiOutlineMoon className='text-2xl' /></span>
      </div>
    </div>
  )
}


export default Header
