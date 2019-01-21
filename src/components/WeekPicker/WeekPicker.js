import React, {Fragment, PureComponent} from 'react'
import DayColumn from '../DayColumn/DayColumn'


class WeekPicker extends PureComponent {
    render() {
        const dayName = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
        const dayInWeek = new Array(7).fill(-1).map((_, index) => dayName[index])
        return (
            <div style={{
                display: 'flex',
            }}>
                {dayInWeek.map(item => (
                        <Fragment key={item}>
                            <DayColumn name={item}/>
                        </Fragment>
                ))}
            </div>
        )
    }
}

export default WeekPicker
