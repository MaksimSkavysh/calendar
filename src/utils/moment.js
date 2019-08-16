import * as R from 'ramda'
import moment from 'moment'

const toMoment = d => moment.isMoment(d) ? d : moment(d)
export const format = R.curry((str, date) => toMoment(date).format(str))
export const isoWeekday = d => toMoment(d).isoWeekday()
export const minutesToTime = minutes => moment('2017-12-14T00:00').add(minutes, 'm').format('HH:mm')
export const timezoneOffset = () => moment().utcOffset() / 60

