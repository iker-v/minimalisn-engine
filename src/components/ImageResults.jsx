import React from 'react'
import { useStateContext } from '../contexts/StateContextProvider'

export const ImageResults = () => {

    const { results, navLink } = useStateContext()

    return (
        <div className='flex flex-wrap max-w-xl'>
            { results?.image_results?.map( ({ image, link }, index) => {
                return (
                    <div>
                        <a href={link.href} key={index}>
                            <img className="w-32 h-32 object-cover" src={image.src} alt={image.alt}  />
                        </a>
                    </div>

                )
            } ) }
        </div>
    )
}
