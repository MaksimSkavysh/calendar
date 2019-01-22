import React from 'react'
import ReactDOM from 'react-dom'

import WeekPicker from './components/WeekPicker/WeekPicker'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

ReactDOM.render(
    <div
        className={'week-picker-position'}>
        <WeekPicker/>
    </div>,
    document.getElementById('root'))
