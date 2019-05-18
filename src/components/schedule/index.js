import React from 'react'
import * as R from 'ramda'
import moment from 'moment'
import { makeInterval } from 'data/intervals'

import { ColumnsList } from './Column'
import styles from './schedule.module.scss'

const getDaysList = (startDate, amount) => {
  const toDate = (d) => moment(startDate).add(d, 'days').valueOf()
  return R.compose(R.map(toDate), R.range(0))(amount)
}

export const scheduleFromDate = (intervalsMap) => R.applySpec({
  date: R.identity,
  schedule: date => intervalsMap[date] || [],
})

const Schedule = () => {
  const config = {
    1558213200000: [makeInterval(12, 16), makeInterval(20, 23)],
  }
  const startData = moment(new Date()).startOf('day').valueOf()
  const daysAmount = 7

  const daysList = getDaysList(startData, daysAmount)
  const names = R.map(d => moment(d).format('ddd'))(daysList)
  const columns = R.map(scheduleFromDate(config), daysList)
  return (
    <div>
      <div className={styles.header}>
        {names.map(name => (<div className={styles.headerItem} key={name}>{name}</div>))}
      </div>
      <div className={styles.body}>
        {ColumnsList(columns)}
      </div>
    </div>
  )
}

export default Schedule
