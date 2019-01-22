import React from 'react'
import PropTypes from 'prop-types'

import './HourCell.scss'


const HourCell = ({text}) => {
    return (
        <div className="hour-cell">
            {text}
        </div>
    )
}

export default HourCell

HourCell.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}
