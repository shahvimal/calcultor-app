import React from 'react'
import './ScientificToggle.css'
const scientific = (props)=>{
    return(
        <div>
            <button id = 'sB' onClick={e =>props.onClick()}>
            Scientific Calculator {props.isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
}

export default scientific;