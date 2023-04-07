import React from 'react'
import { HiChevronDown } from 'react-icons/hi'

function FontToggle ({ font, setFont }) {
  const button = 'px-3 py-1 font-medium text-center bg-gray-100 rounded-md hover:bg-purple-200 hover:text-purple-600 focus:ring-2 focus:outline-none focus:ring-purple-600 dark:bg-purple-600 dark:focus:ring-purple-200 active:translate-y-0.5'

  const serif = 'text-sm font-bold md:text-base'
  const sans = 'font-sans text-md md:text-base'

  return (
    <>
      <button
        className={`${button} ${font === 'serif' ? serif : sans}`}
      >
        {font}
      </button>
      {/* {font === 'serif' && <button className='font-serif text-sm font-bold md:text-base'>Serif</button>}
      {font === 'sans' && <button className='font-sans text-sm font-bold md:text-base'>Sans</button>} */}
      {console.log(font)}
      {/* <span className='text-sm font-bold md:text-base'>Serif <HiChevronDown className='inline ml-1 text-2xl text-purple-600' /></span> */}
    </>
  )
}

export default FontToggle
