import React from 'react'
import * as R from 'ramda'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import { format } from 'utils/moment'

import styles from './schedule.module.scss'

const headerItemParams = R.applySpec({ name: format('ddd'), number: format('DD') })
const HeaderItemRender = ({ name, number }) => (
  <div className={styles.headerItem} key={name + number}>
    <Typography>{name}</Typography>
    <Chip label={number} />
  </div>
)
const HeaderItems = R.map(R.compose(HeaderItemRender, headerItemParams))

export const Header = ({ dates }) => (
  <div className={styles.header}>
    {HeaderItems(dates)}
  </div>
)
