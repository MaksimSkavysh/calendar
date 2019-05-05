import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import MainPage from 'pages/main-page'
import LoginPage from 'pages/login-page'
import Schedule from 'components/schedule'
import TopMenu from 'components/top-menu'

import './app.module.scss'

const App = () => {
  const [login, setLogin] = useState(false)

  return (
    <div>
      <TopMenu />
      <Switch>
        <Route path='/'
          render={() => (
            <MainPage login={login} />
          )}
          exact />
        <Route path='/schedule'
          render={() =>
            <Schedule
              login={login} />} exact />
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
