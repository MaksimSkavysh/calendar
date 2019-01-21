import React, {PureComponent} from 'react'
import DayRow from '../DayRow/DayRow'
import {dayName, hours} from "../../constants";


class WeekPicker extends PureComponent {
    render() {
        return (
            <div>
                {dayName.map(item => <DayRow rowIndex={item}/>)}
                {hours.map((item, rowIndex) => (
                    <DayRow key={item} rowIndex={rowIndex}/>
                ))}
            </div>
        )
    }
}

export default WeekPicker
