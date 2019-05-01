import React from 'react'

import {isLoggedHOC} from '../components/HOC'

const MainPage = () => {

    return (
        <h2>Welcome to RSP</h2>
    )
}

export default isLoggedHOC()(MainPage)