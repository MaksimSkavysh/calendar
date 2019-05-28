import React from 'react'
import * as R from 'ramda'
import Typography from '@material-ui/core/Typography'
import { ITEM_HEIGHT, DIVISIONS_NUMBER, COLUMN_HEIGHT, MINUTES_IN_DIVISION } from 'constants/schedule'
import { minutesToTime, timezoneOffset } from 'utils/moment'

import styles from './legend.module.scss'

const LegendItem = i => (
  <div style={{ height: ITEM_HEIGHT }} className={styles.legendItem} key={i}>
    <span className={styles.legendItemTime}>{minutesToTime(i * MINUTES_IN_DIVISION)}</span>
  </div>
)

const Legend = () => (
  <div className={styles.legend} style={{ height: COLUMN_HEIGHT }}>
    {R.map(LegendItem, R.range(0, DIVISIONS_NUMBER))}
  </div>
)

const timeZoneString = `GMT+${timezoneOffset()}`
export const LegendHeaderItem = () => (
  <div className={styles.legendHeaderItem}>
    <Typography
      className={styles.legendHeaderItemText}
      variant='caption'
      display='block'
      align='right'
    >
      {timeZoneString}
    </Typography>
  </div>
)

export default Legend
