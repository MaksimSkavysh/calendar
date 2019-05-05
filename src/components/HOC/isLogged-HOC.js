import React from 'react'
import { Redirect } from 'react-router-dom'

const isLoggedHOC = (str = '/login') => (Wrapped) => {
  return (props) => {
    if (props.login) {
      return <Wrapped {...props} />
    }
    return <Redirect to={str} />
  }
}

export default isLoggedHOC
