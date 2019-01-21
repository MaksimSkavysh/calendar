import React, {Fragment, PureComponent} from 'react'
import HourCell from '../HourCell/HourCell'
import {hours} from "../../constants";


class DayColumn extends PureComponent {

    render() {
        const {name} = this.props
        return (
            <div>
                <HourCell text={name}/>
                <Fragment>
                    {hours.map(item => (
                        <HourCell key={item} text={item}/>
                    ))}
                </Fragment>
            </div>
        )
    }
}

export default DayColumn