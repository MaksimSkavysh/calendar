import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import HourCell from '../HourCell/HourCell'
import {dayName} from "../../constants"

import './DayRow.scss'


class DayRow extends PureComponent {

    render() {
        const {name} = this.props
        const isNameArray = Array.isArray(name)
        const rowClass = classNames({
            'day-row': true,
            'header-outline': isNameArray,
            'header-outline-none': !isNameArray,
        })
        return (
            <div className={rowClass}>
                {dayName.map((item, index) => (
                    <HourCell key={item} text={isNameArray ? name[index] : name}/>
                ))}
            </div>
        )
    }
}

export default DayRow

DayRow.proptype = {
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
    ]),
}
