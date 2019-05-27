import * as R from 'ramda'
import moment from 'moment'
import { makeInterval } from 'data/intervals'
import { regularIntervals, dateToIndex, customIntervals, scheduleFromDate } from './schedule'

const int12t16 = makeInterval(12, 16)
const int13t14 = makeInterval(13, 14)
const int19t22 = makeInterval(19, 22)
const int2t8 = makeInterval(2, 8)

// set not like timestamp cause of gitlab ci with different timezone
const wednesday = moment().day(3)
const thursday = moment().day(4)
const friday = moment().day(5)

const config = {
  regular: [[], [], [], [int12t16], [int13t14, int19t22], [], []],
  custom: { [thursday.valueOf()]: [int2t8, int13t14] },
}

describe('Schedule functions', () => {
  test('dateToIndex', () => {
    const res = dateToIndex(thursday)
    expect(res).toEqual(3)
  })
  test('regularIntervals', () => {
    const datesList = [wednesday, thursday, friday]
    const result = R.map(regularIntervals(config), datesList)
    const expected = [[], [int12t16], [int13t14, int19t22]]
    expect(result).toEqual(expected)
  })
  test('customIntervals', () => {
    const res = customIntervals(config, thursday.valueOf())
    expect(res).toEqual([int2t8, int13t14])
  })
  test('scheduleFromDate', () => {
    const date = thursday.valueOf()
    const schedule = scheduleFromDate(config)
    const res = schedule(date)
    const expected = {
      custom: [int2t8, int13t14],
      date,
      regular: [int12t16],
    }
    expect(res).toEqual(expected)
  })
})
