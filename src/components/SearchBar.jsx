import React, { useState } from 'react'
import { useStateContext } from '../contexts/StateContextProvider'
import { useHistory } from 'react-router-dom';

export const SearchBar = () => {

    const [text, setText] = useState('')
    const { searchTerm, setSearchTerm, getResults } = useStateContext()
    const navigate = useHistory()

    return (
        <div className="flex items-center">
            <input defaultValue={searchTerm} onChange={(e) => setText(e.target.value)} className="py-1.5 px-3 rounded-l-lg text-gray-700 bg-gray-100 focus:outline-none" />
            <button onClick={() => {
                setSearchTerm(text)
                getResults(`/search/q=${searchTerm}&num=20`)
                navigate.push('/search')
            }} className="py-1.5 px-3 rounded-r-lg text-gray-400 bg-gray-100">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    )
}