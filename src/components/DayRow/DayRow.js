import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import HourCell from '../HourCell/HourCell'
import {dayName} from "../../constants"

import style from './DayRow.module.scss'


class DayRow extends PureComponent {
    render() {
        const {name} = this.props
        const isNameArray = Array.isArray(name)
        const rowClass = classNames([style.dayRow], {
            [style.headerOutline]: isNameArray,
            [style.headerOutlineNone]: !isNameArray,
        })
        return (
            <div className={rowClass}>
                {dayName.map((item, index) => (
                    <HourCell key={index} text={isNameArray ? name[index] : name}/>
                ))}
            </div>
        )
    }
}

export default DayRow

DayRow.propTypes = {
    name: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array,
    ]),
}
