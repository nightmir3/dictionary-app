import React from 'react'
import { toSentenceCase } from '../../utils/textUtils.js'

function FontToggle ({ font, setFont }) {
  const button = 'px-3 py-1 font-medium text-center bg-gray-100 rounded-md hover:bg-purple-200 hover:text-purple-600 focus:ring-2 focus:outline-none focus:ring-purple-600 dark:bg-purple-600 dark:focus:ring-purple-200 active:translate-y-0.5'

  const serif = 'text-sm font-bold md:text-base'
  const sans = 'font-sans text-md md:text-base'
  const letterIcon = 'text-base md:text-lg font-bold mr-1 align-baseline'

  console.log(font)
  return (
    <>
      <button
        className={`${button} ${font === 'serif' ? serif : sans}`}
        onClick={() => setFont(prevFont => prevFont === 'serif' ? 'sans' : 'serif')}
      >
        <span className={letterIcon}>A</span>{toSentenceCase(font)}
      </button>
    </>
  )
}

export default FontToggle
