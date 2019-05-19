import { trivialAction } from 'utils/redux'

export const scheduleLoaded = trivialAction('SCHEDULE_LOADED')

const reducer = (state, action) => {
  switch (action.type) {
    case scheduleLoaded.toString():
      return {
        regular: [[], [], [], [], [], [], []],
        custom: { 1558213200000: [[12, 16], [20, 23]] },
      }
    default:
      return state || {}
  }
}

export default reducer
