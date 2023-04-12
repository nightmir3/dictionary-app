import React from 'react'
import FontToggle from './FontToggle/FontToggle'
import LanguageToggle from './LanguageToggle/LanguageToggle'
import DarkModeToggle from './DarkModeToggle/DarkModeToggle'
import { HiOutlineBookOpen } from 'react-icons/hi'

function Header ({ settings }) {
  const handleLanguageChange = () => {
    console.log('previous: ', settings.languageVariant)
    settings.setLanguageVariant(settings.languageVariant === 'UK' ? 'US' : 'UK')
  }

  return (
    <div
      className='flex justify-between text-gray-500'
    >
      {/* Logo */}
      <div><HiOutlineBookOpen className='text-4xl' /></div>
      <div className='flex items-center gap-3'>
        {/* Font selector */}
        <FontToggle
          font={settings.font}
          setFont={settings.setFont}
        />
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
