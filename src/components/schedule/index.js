import React from 'react'
import * as R from 'ramda'
import moment from 'moment'


const startData = new Date()
const daysAmmount = 7

const getDaysList = (startDate, amount) => {
    const toDate = (d) => moment(startDate).add(d, 'days')
    return R.compose(R.map(toDate), R.range(0))(amount)
}

const daysNames = R.map(d => d.format())

const schedule = () => {
    const daysList = getDaysList(startData, daysAmmount)
    const names = daysNames(daysList)
    console.log(daysList, names)

    return (
        <div>

        </div>
    )

}

export default schedule
