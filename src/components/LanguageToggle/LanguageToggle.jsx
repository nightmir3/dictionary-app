import { useState } from 'react'

function LanguageToggle ({ label = '' }) {
  const [languageVariant, setLanguageVariant] = useState('GB')

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input type='checkbox' value='' className='sr-only peer' />
      <div
        className="w-11 h-6 bg-red-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[url('/icons/GB-1x1.svg')] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300 peer-checked:after:bg-[url('/icons/US-1x1.svg')]"
      />
      {label && <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>{label}</span>}
    </label>
  )
}

export default LanguageToggle
