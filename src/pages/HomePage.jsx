import { useContext, useState,useEffect } from "react";
import { SearchBar } from "../components/SearchBar";
import { useStateContext } from "../contexts/StateContextProvider";
import { useLocation } from 'react-router-dom';

export const HomePage = () => {

    const { searchTerm, setSearchTerm, results, loading, getResults } = useStateContext()
    const location = useLocation()

    useEffect(() => {
      if (searchTerm !== ""){
          console.log(searchTerm)
          if (location.pathname === "/videos"){
              getResults(`/search/q=${searchTerm} videos`);
          }
      } else {
          console.log("searchTerm")
          getResults(`${location.pathname}/q=${searchTerm}&num=20`)
      }

    }, [searchTerm, location.pathname])

    return (
        <div className="flex flex-col gap-8 justify-center items-center h-screen -mt-20 max-w-2xl mx-auto">
          <h1 className="flex items-center gap-2 font-semibold text-black text-4xl">
            Minimalisn Engine
          </h1>
          <SearchBar/>
          <p className="text-xs text-gray-400">Powered with Google API</p>
        </div>
    )
}