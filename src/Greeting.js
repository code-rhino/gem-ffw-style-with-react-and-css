import React from 'react'
import './Greeting.css';

function Greeting({name, mood}) {
    
    const containerStyle = {
        backgroundColor: mood === 'happy' ? '#ffdfba' :'#b0c4de'
    }

    return (
        <div className='greeting-container' style={containerStyle}>
            <p className='greeting-message'>Hello, {name}! You seem to be in a {mood} mood today.</p>
        </div>
    )
}

export default Greeting;
