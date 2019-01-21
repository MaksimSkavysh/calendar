import React, {Fragment, PureComponent} from 'react'
import DayColumn from '../DayColumn/DayColumn'
import {dayName} from "../../constants"


class WeekPicker extends PureComponent {
    render() {
        return (
            <div style={{
                display: 'flex',
                outline: '1px solid black'
            }}>
                {dayName.map(item => (
                    <DayColumn key={item} name={item}/>
                ))}
            </div>
        )
    }
}

export default WeekPicker
