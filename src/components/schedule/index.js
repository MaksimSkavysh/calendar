import React from 'react'
import * as R from 'ramda'
import moment from 'moment'
import { intervalDuration, intervalStart, makeInterval } from 'data/intervals'

import styles from './schedule.module.scss'

const DIVISIONS_NUMBER = 24
const ITEM_HEIGHT = 20

const state = {
  1557003600000: [makeInterval(12, 16), makeInterval(20, 23)],
}

const startData = moment(new Date()).startOf('day').valueOf()
const daysAmount = 7

const getDaysList = (startDate, amount) => {
  const toDate = (d) => moment(startDate).add(d, 'days')
  return R.compose(R.map(toDate), R.range(0))(amount)
}

const getValue = d => d.valueOf()
const dateToInterval = (intervalsMap) =>
  R.compose(R.defaultTo([]), R.flip(R.prop)(intervalsMap), getValue)

const intervalStyles = (i) => ({
  top: intervalStart(i) * ITEM_HEIGHT,
  height: intervalDuration(i) * ITEM_HEIGHT,
})

const IntervalItems = R.map(R.compose(
  s => (<div className={styles.intervalItem} style={s} />),
  intervalStyles,
))

const Column = ({ column }) => (<div
  className={styles.column}
  style={{ height: ITEM_HEIGHT * DIVISIONS_NUMBER }}
>
  {IntervalItems(column)}
</div>)

const Schedule = () => {
  const daysList = getDaysList(startData, daysAmount)
  const names = R.map(d => d.format('ddd'))(daysList)
  const columns = R.map(dateToInterval(state))(daysList)
  return (
    <div>
      <div className={styles.header}>
        {names.map(name => (<div className={styles.headerItem} key={name}>{name}</div>))}
      </div>
      <div className={styles.body}>
        {columns.map(column => (<Column column={column} />))}
      </div>
    </div>
  )
}

export default Schedule
