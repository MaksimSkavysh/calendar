import React from 'react'
import * as R from 'ramda'
import moment from 'moment'

import { isoWeekday } from 'utils/moment'
import ColumnsList from 'components/schedule/Column'
import Header from 'components/schedule/Header'

import styles from './schedule.module.scss'

const getDaysList = (startDate, amount) => {
  const toDate = (d) => moment(startDate).add(d, 'days').valueOf()
  return R.compose(R.map(toDate), R.range(0))(amount)
}

const valueOf = e => e.valueOf()
const getRegular = R.propOr([], 'regular')
const getCustom = R.propOr([], 'custom')
export const dateToIndex = R.compose(R.subtract(R.__, 1), isoWeekday)
export const regularIntervals = R.curry((config, date) => R.propOr([], dateToIndex(date), getRegular(config)))
export const customIntervals = R.curry((config, date) => R.propOr([], valueOf(date), getCustom(config)))
export const scheduleFromDate = (config) => R.applySpec({
  date: R.identity,
  regular: regularIntervals(config),
  custom: customIntervals(config),
})

const Schedule = () => {
  const startData = moment(new Date()).startOf('day').valueOf()
  const daysAmount = 7
  const config = {
    regular: [[], [], [], [[12, 16]], [[12, 16]], [], []],
    custom: { [startData]: [[12, 16], [20, 23]] },
  }

  const daysList = getDaysList(startData, daysAmount)
  const schedulesByDay = R.map(scheduleFromDate(config), daysList)
  return (
    <div className={styles.schedule}>
      <Header dates={daysList} />
      <div className={styles.body}>
        {ColumnsList(schedulesByDay)}
      </div>
    </div>
  )
}

export default Schedule
