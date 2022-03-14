import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/StateContextProvider'
import Loading from './Loading'
import { NormalResults } from './NormalResults';
import { ImageResults } from './ImageResults';
import { NewsResults } from './NewsResults';

export const Results = () => {
    const { loading, getResults, searchTerm, linkNav } = useStateContext()

    useEffect(() => {
        getResults(`${linkNav}/q=${searchTerm}&num=20`)
    }, [searchTerm, linkNav])

    if(loading) return <Loading/>

    switch(linkNav){
        case 'search':
            return (
                <NormalResults/>
            );
        case 'images':
            return(
                <ImageResults/>
            );
        case 'news':
            return(
                <NewsResults/>
            );
    }
    

}
