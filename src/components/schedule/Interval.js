import React from 'react'
import * as R from 'ramda'

import { ITEM_HEIGHT } from 'constants/schedule'
import { intervalDuration, intervalStart } from 'data/intervals'

import styles from './schedule.module.scss'

const intervalStyles = (interval) => ({
  top: intervalStart(interval) * ITEM_HEIGHT,
  height: intervalDuration(interval) * ITEM_HEIGHT,
})

const Interval = interval => (<div
  className={styles.intervalItem}
  key={intervalStart(interval)}
  style={intervalStyles(interval)}
/>)

export const IntervalItems = R.map(Interval)
