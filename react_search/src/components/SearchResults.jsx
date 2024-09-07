import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import "./SearchResults.css"

const SearchResults = (props) => {

    const [value, setValue] = useState(false)

    const handleOnclick = () => {
        setValue(true)
    }

    const { result } = props
    return (
        <div className='search-result' onClick={handleOnclick}>
            <p>{result.name}, {result.country_code}</p>
            <MdArrowOutward />
        </div>
    )
}

export default SearchResults
