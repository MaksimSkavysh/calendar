import React, {PureComponent} from 'react'
import DayRow from '../DayRow/DayRow'
import {dayName, hours} from "../../constants"


class WeekPicker extends PureComponent {
    render() {
        return (
            <div style={{
                outline: '1px solid black'
            }}>
                <DayRow name={dayName}/>
                {hours.map(item => (
                    <DayRow key={item} name={item}/>
                ))}
            </div>
        )
    }
}

export default WeekPicker
