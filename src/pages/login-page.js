import React from 'react'
import { Redirect } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const LoginPage = ({ login, setLogin }) => {
  if (login) {
    return <Redirect to='/' />
  }

  return (
    <Card style={{ maxWidth: '400px' }}>
      <CardContent>
        <Typography variant={'title'}>
          Please login
        </Typography>
        <Typography color='textSecondary'>
          After login you will be redirected to main page
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant={'contained'} color={'primary'} onClick={setLogin}>
          Login
        </Button>
      </CardActions>
    </Card>
  )
}

export default LoginPage
