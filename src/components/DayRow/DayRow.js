import React, {PureComponent} from 'react'
import HourCell from '../HourCell/HourCell'
import {dayName} from "../../constants"
import PropTypes from 'prop-types'


class DayRow extends PureComponent {

    render() {
        const {name} = this.props
        return (
            <div style={{
                display: 'flex'
            }}>
                {dayName.map((item, index) => (
                    <HourCell key={item} text={Array.isArray(name) ? name[index] : name}/>
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
