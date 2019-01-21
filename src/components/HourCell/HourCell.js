import React from 'react'


const HourCell = ({text}) => {
    return (
        <div style={{
            width: '120px',
            display: 'flex',
            justifyContent: 'center',
        }}>
            {text}
        </div>
    )
}

export default HourCell