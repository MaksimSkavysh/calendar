import * as R from 'ramda'

export const trace = R.curry((name, item) => {
  // eslint-disable-next-line
  console.log(name, item)
  return item
})
