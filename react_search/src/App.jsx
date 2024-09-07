import { useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar'
import SearchResultsList from './components/SearchResultsList'

function App() {

  const [results, setResults] = useState([])

  return (
    <div className='app'>
      <div className='search-bar-container'>
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>

    </div>
  )
}

export default App
