import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import HourCell from '../HourCell/HourCell'
import {dayName} from "../../constants"


class DayRow extends PureComponent {
    render() {
        const {rowIndex} = this.props
        return (
            <div style={{
                display: 'flex'
            }}>

                {dayName.map(item => (
                    <HourCell key={item} text={rowIndex}/>
                ))}
            </div>
        )
    }
}

DayRow.propTypes = {
    rowIndex: PropTypes.number.isRequired,
}

export default DayRow