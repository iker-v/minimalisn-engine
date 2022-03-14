import React from 'react'
import { useStateContext } from '../contexts/StateContextProvider'

export const NormalResults = ()=> {

    const { results } = useStateContext()

    return (
        <div className="flex flex-col gap-5">
            {results?.results?.map(({ link, title, cite }, index) => {
                return(
                    <div key={index}>
                        <a href={link} target="_blank" rel="noreferrer">
                            <p className="leading-none text-gray-600 text-sm">
                                {cite.domain ? cite.domain.substring(12) : link}
                            </p>
                            <p className="text-gray-800 mt-1 leading-none">
                                {title}
                            </p>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}
