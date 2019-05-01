import React from 'react'

import GridColumn from '../grid-column'

import style from './grid.module.scss'

const Grid = ({timeList}) => {
    const weekdays = new Array(timeList.length).fill(-1).map((item, index) => index)
    const grid = weekdays.map((item, index) => {
        return (<GridColumn key={item} timeList={timeList[index]}/>)
    })
    
    return (
        <div className={style.grid}>{grid}</div>
    )

}

export default Grid
