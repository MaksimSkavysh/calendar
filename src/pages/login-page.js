import React from 'react'
import {Redirect} from 'react-router-dom'

const LoginPage = ({login, setLogin}) => {

    if (login) {
        return <Redirect to='/'/>
    }

    return (
        <div className="jumbotron">
            <p>Login to see Grid!</p>
            <button
                className='btn btn-primary'
                onClick={setLogin}>
                Login
            </button>
        </div>
    )
}

export default LoginPage
