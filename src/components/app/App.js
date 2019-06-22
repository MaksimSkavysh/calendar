import React, { useState, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import MainPage from 'pages/main-page'
import LoginPage from 'pages/login-page'
import TopMenu from 'components/top-menu'

import styles from './app.module.scss'

const Schedule = React.lazy(() => import('components/schedule'))

const fallback = <CircularProgress />

const App = () => {
  const [login, setLogin] = useState(false)

  return (
    <>
      <TopMenu />
      <div className={styles.routerWrapper}>
        <Switch>
          <Route
            path='/'
            render={() => (
              <MainPage login={login} />
            )}
            exact />
          <Route
            path='/schedule'
            render={() => (
              <Suspense fallback={fallback} >
                <Schedule login={login} />
              </Suspense>
            )}
            exact />
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
    </>
  )
}

export default App
