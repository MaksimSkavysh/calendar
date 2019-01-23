import React from 'react'
import PropTypes from 'prop-types'

import style from './HourCell.module.scss'


const HourCell = ({text}) => {
    return (
        <div className={style.hourCell}>
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
