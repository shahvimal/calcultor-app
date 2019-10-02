import React from 'react'
import './Result.css'
const result = (props)=>{
    let result = props.result;
    return (
        <div className = 'result'>
            <p>{result}</p> 
        </div>
    );
}

export default result;