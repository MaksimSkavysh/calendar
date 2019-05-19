import * as R from 'ramda'
import moment from 'moment'

const toMoment = d => moment.isMoment(d) ? d : moment(d)
export const format = R.curry((str, date) => toMoment(date).format(str))
