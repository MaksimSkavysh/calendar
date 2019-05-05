import React from 'react'
import * as R from 'ramda'

import GridCell from 'components/grid-cell'

const GridColumn = ({ timeList, rowNumber = 48 }) => {
  const arrMap = (arr) => new Array(arr[1] - arr[0] + 1).fill(-1).map((_item, index) => index + arr[0])

  const list = R.flatten(timeList.map(item => arrMap(item)))

  const arr = new Array(rowNumber).fill(-1).map((_item, index) => index)
  const column = arr.map((item) => {
    const flag = list.indexOf(item) > -1
    return <GridCell key={item} value={item} isEdited={flag} />
  })
  return (
    <div>{column}</div>
  )
}

export default GridColumn
