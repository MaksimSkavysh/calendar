import React from 'react'
import * as R from 'ramda'

import { ITEM_HEIGHT } from 'constants/schedule'
import { intervalDuration, intervalStart } from 'data/intervals'

import styles from './schedule.module.scss'

const heightMultiply = R.multiply(ITEM_HEIGHT)
const getTop = R.compose(heightMultiply, intervalStart)
const getHeight = R.compose(heightMultiply, intervalDuration)
const intervalStyles = R.applySpec({ top: getTop, height: getHeight })

const Interval = interval => (<div
  className={styles.intervalItem}
  key={intervalStart(interval)}
  style={intervalStyles(interval)}
/>)
export const IntervalItems = R.map(Interval)
