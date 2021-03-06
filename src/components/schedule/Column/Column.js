import React from 'react'
import * as R from 'ramda'
import { COLUMN_HEIGHT } from 'constants/schedule'
import IntervalItems from 'components/schedule/Interval/index'
import styles from './column.module.scss'

const Day = ({ date, regular, custom }) => (<div
  key={date}
  className={styles.column}
  style={{ height: COLUMN_HEIGHT }}
>
  {IntervalItems({ intervals: regular, type: 'regular' })}
  {IntervalItems({ intervals: custom, type: 'custom' })}
</div>)

export const ColumnsList = R.map(Day)
