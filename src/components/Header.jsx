import React from 'react'

function Header () {
  return (
    <div className='flex justify-between'>
      <div>Logo</div>
      <div className='flex gap-3 divide-x-2'>
        <span>font</span>
        <span className='pl-3'>theme</span>
      </div>
    </div>
  )
}

export default Header
