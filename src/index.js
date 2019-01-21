import React from 'react'
import ReactDOM from 'react-dom'
import WeekPicker from './components/WeekPicker/WeekPicker'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.render(
    <div className={'weekPickerPosition'}>
        <WeekPicker/>
    </div>,
    document.getElementById('root'))
