import React from 'react'


const HourCell = ({text}) => {
    return (
        <div style={{
            border: '1px solid black',
            width: '120px',
        }}>
            {text}
        </div>
    )
}

export default HourCell