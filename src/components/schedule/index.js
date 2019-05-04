import React from 'react'
import * as R from 'ramda'
import moment from 'moment'
import { compose } from 'redux'
import { intervalDuration, intervalStart, makeInterval } from 'data/intervals'

import { isLoggedHOC } from '../HOC'

import styles from './schedule.module.scss'

const DIVISIONS_NUMBER = 24
const ITEM_HEIGHT = 20

const intervalStyles = (interval) => ({
  top: intervalStart(interval) * ITEM_HEIGHT,
  height: intervalDuration(interval) * ITEM_HEIGHT,
})
const Interval = interval => (<div
  className={styles.intervalItem}
  key={intervalStart(interval)}
  style={intervalStyles(interval)}
/>)
const IntervalItems = R.map(Interval)

const Column = ({ date, schedule }) => (<div
  key={date}
  className={styles.column}
  style={{ height: ITEM_HEIGHT * DIVISIONS_NUMBER }}
>
  {IntervalItems(schedule || [])}
</div>)
const ColumnsList = R.map(R.compose(Column))

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
    1557003600000: [makeInterval(12, 16), makeInterval(20, 23)],
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

export default compose(
  isLoggedHOC()
)(Schedule)
