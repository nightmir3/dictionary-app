import React from 'react'

function useSettings () {
  const [font, setFont] = React.useState('serif')
  const [languageVariant, setLanguageVariant] = React.useState('UK')
  const [darkModeOn, setDarkModeOn] = React.useState(false)

  return {
    font,
    setFont,
    languageVariant,
    setLanguageVariant,
    darkModeOn,
    setDarkModeOn
  }
}

export default useSettings
