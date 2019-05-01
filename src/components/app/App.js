import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'

import {MainPage, GridPage, LoginPage} from '../../pages'
import TopMenu from '../top-menu'

const App = () => {

    const [login, setLogin] = useState(false)

    return (
        <div>
            <TopMenu/>
            <Switch>
                <Route path='/'
                       render={() => (
                           <MainPage login={login}/>
                       )}
                       exact/>
                <Route path='/grid'
                       render={() => (
                           <GridPage
                               login={login}/>
                       )}
                       exact
                />
                <Route path='/login'
                       render={() => (
                           <LoginPage
                               login={login}
                               setLogin={() => setLogin(prevLogin => !prevLogin)}
                           />
                       )}
                       exact
                />
                <Route
                    render={() => <h1>Page Not Found</h1>}
                />
            </Switch>
        </div>
    )
}

export default App
