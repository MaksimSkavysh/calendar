import { trivialAction } from 'utils/redux'

export const timeListLoaded = trivialAction('TIME_LIST_LOADED')

const reducer = (state, action) => {
  switch (action.type) {
    case timeListLoaded.toString():
      return [[[1, 15], [18, 21]], [[0, 10], [20, 30]], [[1, 5], [15, 28], [32, 48]], [], [], [], []]
    default:
      return state || [[], [], [], [], [], [], []]
  }
}

export default reducer
