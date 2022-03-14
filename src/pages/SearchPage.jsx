import React from 'react';
import { SearchBar } from '../components/SearchBar';
import Links from '../components/Links';
import { Results } from '../components/Results'

export const SearchPage = () => {
  return (
    <div className="flex flex-col">
        <div className="flex flex-col px-2 pt-5 py-2 lg:px-14 gap-4 border-b-2 bg-gray-50">
            <div className="flex flex-col lg:flex-row items-center gap-2">
                <h4 className="font-semibold text-gray-800">
                    Minimalisn
                </h4>
                <SearchBar/>
            </div>
            <Links/>
        </div>
        <div className="flex px-2 lg:px-14 py-5">
            <Results/>
        </div>
        
    </div>
  )
}
