import * as R from 'ramda'
import { makeInterval } from 'data/intervals'
import { scheduleFromDate } from './index'

describe('Schedule functions', () => {
  test('Test schedules from dates', () => {
    const config = {
      1557003600000: [makeInterval(12, 16), makeInterval(20, 23)],
    }
    const datesList = [1556917200000, 1557003600000]
    const expected = [
      { date: 1556917200000, schedule: [] },
      { date: 1557003600000, schedule: [makeInterval(12, 16), makeInterval(20, 23)] },
    ]
    expect(R.map(scheduleFromDate(config), datesList)).toEqual(expected)
  })
})
