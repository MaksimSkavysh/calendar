import React from 'react'
import * as R from 'ramda'
import { COLUMN_HEIGHT } from 'constants/schedule'
import { IntervalItems } from './Interval'
import styles from './schedule.module.scss'

const Day = ({ date, schedule }) => (<div
  key={date}
  className={styles.column}
  style={{ height: COLUMN_HEIGHT }}
>
  {IntervalItems(schedule || [])}
</div>)
export const ColumnsList = R.map(Day)
