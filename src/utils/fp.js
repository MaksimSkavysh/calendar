import * as R from 'ramda'

export const trace = R.curry((name, item) => {
    console.log(name, item)
    return item
})
