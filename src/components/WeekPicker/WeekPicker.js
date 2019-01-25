import React from 'react'

import DayRow from '../DayRow/DayRow'
import {dayName, hours} from '../../constants'

import style from './WeekPicker.module.scss'


const WeekPicker = () => {
    return (
        <div className={style.weekPickerPosition}>
            <div className={style.weekPicker}>
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

export default WeekPicker
