import React from 'react'
import LanguageToggle from './LanguageToggle/LanguageToggle'
import DarkModeToggle from './DarkModeToggle/DarkModeToggle'
import { HiOutlineBookOpen, HiChevronDown } from 'react-icons/hi'

function Header ({ settings }) {
  const handleLanguageChange = () => {
    console.log('previous: ', settings.languageVariant)
    settings.setLanguageVariant(settings.languageVariant === 'UK' ? 'US' : 'UK')
  }

  return (
    <div className='flex justify-between text-gray-500'>
      {/* Logo */}
      <div><HiOutlineBookOpen className='text-4xl' /></div>
      <div className='flex items-center gap-3'>
        {/* Font selector */}
        <span className='text-sm font-bold md:text-base'>Serif <HiChevronDown className='inline ml-1 text-2xl text-purple-600' /></span>
        {/* PronunciationToggle */}
        <LanguageToggle
          languageVariant={settings.languageVariant}
          onChange={handleLanguageChange}
        />
        {/* Dark Mode selector */}
        <DarkModeToggle
          darkModeOn={settings.darkModeOn}
          setDarkModeOn={settings.setDarkModeOn}
        />
      </div>
    </div>
  )
}

export default Header
