import React from 'react'
import PropTypes from 'prop-types'
import './HourCell.scss'


const HourCell = ({text}) => {
    return (
        <div className={'hourCell'}>
            {text}
        </div>
    )
}

export default HourCell

HourCell.prototype = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

