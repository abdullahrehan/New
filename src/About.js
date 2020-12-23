import React, { useContext } from 'react'
import Context from './Context'
function About() {
    const {state,dispatch}=useContext(Context)
    return (
        <div>
            <button onClick={()=>dispatch('click')}>Click{state.num}</button>
        </div>
    )
}

export default About
