import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const StateContextProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [linkNav, setLinkNav] = useState('search')
    const { API_KEY } = process.env

    const getResults = async (url) => {
        setLoading(true)

        const response = await fetch(`${baseUrl}/${url}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': {API_KEY}
            }
        })

        const data = await response.json()
        console.log(data)
        setResults(data)
        setLoading(false)
    }

    return (
        <StateContext.Provider value={{getResults, results, searchTerm, setSearchTerm, loading, linkNav, setLinkNav}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)