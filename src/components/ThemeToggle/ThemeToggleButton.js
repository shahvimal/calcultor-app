import React from 'react'

const themeToggleButton = (props)=>{
    return (
        <div>
            <button name = 'light' onClick={e =>props.onClick(e.target.name)}>
                Light Theme
            </button>
            <button name='dark' onClick={e =>props.onClick(e.target.name)}>
                Dark Theme
            </button>
        </div>
    );
}

export default themeToggleButton;