import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  headerButton: {
    marginLeft: 18,
    marginRight: 10,
  },
}

const TopMenu = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.headerButton} variant='h6' color='inherit'>
            <Link to='/'>
                            RSP
            </Link>
          </Typography>
          <Typography className={classes.headerButton} variant='h6' color='inherit'>
            <Link to='/grid'>
                            Grid
            </Link>
          </Typography>
          <Typography className={classes.headerButton} variant='h6' color='inherit'>
            <Link to='/login'>
                            Login
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(TopMenu)
