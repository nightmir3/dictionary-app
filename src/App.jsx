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
      className={`${activeFont} dark:text-slate-100 dark:bg-slate-800 container p-6 mx-auto flex flex-col gap-7`}
    >
      <Header />
      <SearchBar />
      <ResultsPane />
    </div>
  )
}

export default App
