import React from 'react'
import * as R from 'ramda'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import { format } from 'utils/moment'
import { SCROLLBAR_WIDTH } from 'utils/dom'

import { LegendHeaderItem } from 'components/schedule/Legend/Legend'

import styles from './header.module.scss'

const headerItemParams = R.applySpec({ name: format('ddd'), number: format('DD') })
const HeaderItemRender = ({ name, number }) => (
  <div className={styles.headerItem} key={name + number}>
    <div className={styles.borderItem} />
    <Typography className={styles.headerText}>{name}</Typography>
    <div className={styles.headerChip}>
      <Chip label={number} />
    </div>
  </div>
)
const HeaderItems = R.map(R.compose(HeaderItemRender, headerItemParams))

export const Header = ({ dates }) => (
  <div className={styles.header}>
    <LegendHeaderItem />
    <div className={styles.itemsWrapper}>
      {HeaderItems(dates)}
    </div>
    <div style={{ minWidth: SCROLLBAR_WIDTH }} />
  </div>
)

