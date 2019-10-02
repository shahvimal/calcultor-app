import React from 'react'
import './Keypad.css'

const keypad = (props)=>{
    
    var scientificButtons;
    if(props.scientificToggle){
        scientificButtons = <div> <button name="sign" onClick={e => props.onClick(e.target.name)}>Sign</button>
        <button name="sq" onClick={e => props.onClick(e.target.name)}>x^2</button>
        <button name="sqrt" onClick={e => props.onClick(e.target.name)}>Square Root</button></div>
        ; 
    }
    return (
        <div className="keypad">

            <button name="1" onClick={e => props.onClick(e.target.name)}>1</button>
            <button name="2" onClick={e => props.onClick(e.target.name)}>2</button>
            <button name="3" onClick={e => props.onClick(e.target.name)}>3</button>
            <button name="+" onClick={e => props.onClick(e.target.name)}>+</button><br/>


            <button name="4" onClick={e => props.onClick(e.target.name)}>4</button>
            <button name="5" onClick={e => props.onClick(e.target.name)}>5</button>
            <button name="6" onClick={e => props.onClick(e.target.name)}>6</button>
            <button name="-" onClick={e => props.onClick(e.target.name)}>-</button><br/>

            <button name="7" onClick={e => props.onClick(e.target.name)}>7</button>
            <button name="8" onClick={e => props.onClick(e.target.name)}>8</button>
            <button name="9" onClick={e => props.onClick(e.target.name)}>9</button>
            <button name="*" onClick={e => props.onClick(e.target.name)}>x</button><br/>


            <button name="clear" onClick={e => props.onClick(e.target.name)}>Clear</button>
            <button name="0" onClick={e => props.onClick(e.target.name)}>0</button>
            <button name="=" onClick={e => props.onClick(e.target.name)}>=</button>
            <button name="/" onClick={e => props.onClick(e.target.name)}>÷</button><br/>
            
            
            {scientificButtons}
        </div>

    );
}

export default keypad;