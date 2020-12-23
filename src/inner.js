import React, { useContext } from 'react'
import {Context} from './Context'
function Inner() {
    
    const ab=useContext(Context)
    return (
        <div>
            {ab.map(function(asd){return <p>{asd.name}</p>})}
        </div>
    )
}

export default Inner
