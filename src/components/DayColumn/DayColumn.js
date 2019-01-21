import React, {PureComponent} from 'react'
import HourCell from '../HourCell/HourCell'
import {hours} from "../../constants";


class DayColumn extends PureComponent {

    render() {
        const {name} = this.props
        return (
            <div>
                <div style={{
                    outline: '1px solid black',
                }}>
                    <HourCell text={name}/>
                </div>
                <div>
                    {hours.map(item => (
                        <HourCell key={item} text={item}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default DayColumn