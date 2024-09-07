import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import "./searchBar.css"
// import { useState } from 'react'

const SearchBar = (props) => {

    const { setResults } = props

    const [input, setInput] = useState("")
    // https://jsonplaceholder.typicode.com/users
    const fetchData = (value) => {
        fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100")
            .then((response) => response.json())
            .then((jsonData) => {
                const data = jsonData.results.filter(city => {
                    return value && city && city.name && city.name.toLowerCase().includes(value)
                })
                setResults(data)
                console.log(data)
            })

    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className='input-wrapper'>
            <FaSearch id='search-icon' />
            <input type='text' placeholder='Type to Search...' value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export default SearchBar
