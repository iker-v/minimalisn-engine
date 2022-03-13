import React from 'react'
import {TailSpin} from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className="pl-24">
            <TailSpin type="Puff" color="#334155" height={550} width={80} />
        </div>
    )
}


export default Loading