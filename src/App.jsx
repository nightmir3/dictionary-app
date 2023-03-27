import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ResultsPane from './components/ResultsPane'

function App () {
  return (
    <div className='container p-6 mx-auto flex flex-col gap-4'>
      <Header />
      <SearchBar />
      <ResultsPane />
    </div>
  )
}

export default App
