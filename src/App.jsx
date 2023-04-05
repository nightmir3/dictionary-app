import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ResultsPane from './components/ResultsPane'
import fetchWord from './utils/fetcher'
import InitialContent from './components/InitialContent'
import { Ring } from '@uiball/loaders'

function App () {
  const [activeFont, setActiveFont] = useState('font-serif')
  // 'idle' | 'fetching' | 'success' | 'not found'
  const [fetchStatus, setFetchStatus] = useState('idle')

  const [preferences, setPreferences] = useState({
    darkModeOn: false,
    pronunciationSelected: 'UK',
    font: 'serif'
  })

  const [wordData, setWordData] = useState({})

  async function handleSearch (query) {
    setFetchStatus('fetching')
    const { data, error } = await fetchWord(query)

    setFetchStatus(error ? 'error' : 'success')
    setWordData(data[0])

    // TODO: create an adapter
  }

  return (
    <div
      className={`${activeFont} container p-6 md:p-12 mx-auto flex flex-col gap-7 md:gap-10 lg:max-w-4xl dark:text-slate-100 dark:bg-gray-900 h-screen`}
    >
      <Header {...preferences} />
      <SearchBar onSubmit={handleSearch} />

      {fetchStatus === 'success' && <ResultsPane res={wordData} />}
      <div className='flex-1 pb-40 grid place-items-center'>
        {fetchStatus === 'idle' && <InitialContent message='Welcome! 👋' />}
        {fetchStatus === 'fetching' &&
          <Ring
            size={40}
            lineWeight={5}
            speed={2}
            color='#8e24aa' // text-purple-600
          />}
        {fetchStatus === 'error' && <InitialContent message='Not Found!' />}
      </div>
    </div>
  )
}

export default App
