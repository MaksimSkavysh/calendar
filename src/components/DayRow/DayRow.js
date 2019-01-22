import React, {PureComponent} from 'react'
import HourCell from '../HourCell/HourCell'
import {dayName} from "../../constants"
import PropTypes from 'prop-types'
import './DayRow.scss'


class DayRow extends PureComponent {

    render() {
        const {name} = this.props
        const content = Array.isArray(name)
        return (
            <div className={`dayRow ${content ? 'headerOutline' : 'headerOutlineNone'}`}>
                {dayName.map((item, index) => (
                    <HourCell key={item} text={content ? name[index] : name}/>
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
    ]),
}
