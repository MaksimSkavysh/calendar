import React, {PureComponent} from 'react'

import DayRow from '../DayRow/DayRow'
import {dayName, hours} from "../../constants"

import './WeekPicker.scss'


class WeekPicker extends PureComponent {
    render() {
        return (
            <div className={'week-picker-position'}>
                <div className={'week-picker'}>
                    <DayRow name={dayName}/>
                    <div>
                        {hours.map(item => (
                            <DayRow key={item} name={item}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default WeekPicker
