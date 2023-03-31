import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ResultsPane from './components/ResultsPane'

function App () {
  const [activeFont, setActiveFont] = useState('font-serif')
  const [darkModeOn, setDarkModeOn] = useState(true)

  return (
    <div
      className={`${activeFont} container p-6 md:p-12 mx-auto flex flex-col gap-7 md:gap-10 lg:max-w-4xl dark:text-slate-100 dark:bg-gray-900`}
    >
      <Header />
      <SearchBar />
      <ResultsPane />
    </div>
  )
}

export default App
