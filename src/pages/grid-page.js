import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'

import { compose } from 'redux'

import { timeListLoaded } from 'reducers/timeList'
import Grid from '../components/grid'
import { isLoggedHOC } from '../components/HOC'

const GridPage = ({ timeList, timeListLoaded }) => {
  useEffect(() => {
    timeListLoaded()
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
  timeListLoaded,
}

export default compose(
  isLoggedHOC(),
  connect(mapStateToProps, mapDispatchToProps),
)(GridPage)
