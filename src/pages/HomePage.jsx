import { SearchBar } from "../components/SearchBar";

export const HomePage = () => {

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