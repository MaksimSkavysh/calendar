import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'

import { compose } from 'redux'

import Grid from '../components/grid'
import { timeStamp } from '../action-creators'
import { isLoggedHOC } from '../components/HOC'

const GridPage = ({ timeList, timeStamp }) => {
  useEffect(() => {
    timeStamp()
  }, [])

  return (
    <Fragment>
      <Grid timeList={timeList} />
    </Fragment>
  )
}

const mapStateToProps = ({ timeList }) => {
  return { timeList }
}

const mapDispatchToProps = {
  timeStamp,
}

export default compose(
  isLoggedHOC(),
  connect(mapStateToProps, mapDispatchToProps),
)(GridPage)
