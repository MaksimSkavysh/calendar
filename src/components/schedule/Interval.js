import React from 'react'
import cn from 'classnames'
import { createSelector } from 'reselect'
import * as R from 'ramda'

import { ITEM_HEIGHT } from 'constants/schedule'
import { intervalDuration, intervalStart } from 'data/intervals'

import styles from './schedule.module.scss'

const heightMultiply = R.multiply(ITEM_HEIGHT)
const getTop = R.compose(heightMultiply, intervalStart)
const getHeight = R.compose(heightMultiply, intervalDuration)
const intervalStyles = createSelector(getTop, getHeight, (top, height) => ({ top, height }))

export const IntervalItems = ({ intervals, type }) => (<div>
  {intervals.map(interval => (<div
    className={cn(styles.intervalItem, type === 'custom' ? styles.customInterval : styles.regularInterval)}
    key={intervalStart(interval)}
    style={intervalStyles(interval)}
  />))}
</div>)
