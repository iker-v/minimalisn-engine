import React from 'react'
import { useStateContext } from '../contexts/StateContextProvider'

const links = [
  { id: 'search', name: 'All' },
  { id: 'news', name: 'News' },
  { id: 'images', name: 'Images' },
]

const Links = () => {

  const { linkNav, setLinkNav } = useStateContext()

  return (
    <div className='flex justify-start gap-4 font-semibold items-center max-w-sm text-sm'>
      { links.map((link) => {
        return <button onClick={() => setLinkNav(link.id)} className={linkNav === link.id ? "text-gray-800 font-semibold" : "text-gray-500"}>{link.name}</button>
      }) }
    </div>
  )
}

export default Links