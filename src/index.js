import React from 'react'
import ReactDOM from 'react-dom'
import WeekPicker from './components/WeekPicker/WeekPicker'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <div style={{
        display: 'flex',
        justifyContent: 'center',
    }}>
        <WeekPicker/>
    </div>,
    document.getElementById('root'))

