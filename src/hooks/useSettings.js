import React from 'react'

function useSettings () {
  const [font, setFont] = React.useState('serif')
  const [languageVariant, setLanguageVariant] = React.useState('UK')
  const [darkModeOn, setDarkModeOn] = React.useState(false)

  return {
    font: 'serif',
    setFont,
    languageVariant,
    setLanguageVariant,
    darkModeOn,
    setDarkModeOn
  }
}

export default useSettings
