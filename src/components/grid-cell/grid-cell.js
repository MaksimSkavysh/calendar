import React from 'react'
import classNames from 'classnames'

import style from './cell.module.scss'

const GridCell = ({ value, isEdited }) => {
  const clazz = classNames({
    [style.cellEdited]: isEdited,
  }, style.cell)

  return (
    <div
      className={clazz}>
      {value}
    </div>
  )
}

export default GridCell
