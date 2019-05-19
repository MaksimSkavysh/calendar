import * as R from 'ramda'
import moment from 'moment'

export const toMoment = d => moment.isMoment(d) ? d : moment(d)
export const format = R.curry((str, m) => m.format(str))
