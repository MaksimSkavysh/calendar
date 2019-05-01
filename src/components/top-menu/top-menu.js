import React from 'react'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

import style from './top-menu.module.scss'

const TopMenu = () => {

    const headerClass = classNames(style.header, 'row')
    const logoClass = classNames(style.logo, 'text-dark')
    const itemsClass = classNames(style.items, 'text-dark')

    return (
        <header role='banner' className={headerClass}>
            <Link to='/'>
                <div className={logoClass}>RSP</div>
            </Link>
            <Link to='/grid'>
                <div className={itemsClass}>Grid</div>
            </Link>
            <Link to='/login'>
                <div className={itemsClass}>Login</div>
            </Link>
        </header>
    )
}

export default TopMenu
