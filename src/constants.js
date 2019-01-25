import moment from 'moment'
import 'moment/locale/ru'

moment().locale('ru')


export const hours = new Array(48).fill(-1).map((_, index) => index / 2)
export const dayName = moment.weekdays(true)