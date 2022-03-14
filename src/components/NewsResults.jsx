import React from 'react'
import { useStateContext } from '../contexts/StateContextProvider'

export const NewsResults = () => {

    const { results } = useStateContext()

    return (
        <div className="flex flex-col gap-3.5">
            { results?.entries?.map(({ link, title }, index) => {
                return (
                    <a key={index} href={link}>
                        <p className="text-gray-800">{title}</p>
                        <p className="text-gray-600 mt-1 leading-none">{link.substring(12)}</p>
                    </a>
                )
            }) }
        </div>
    )
}
