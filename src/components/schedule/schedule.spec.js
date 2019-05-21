import * as R from 'ramda'
import { makeInterval } from 'data/intervals'
import { regularIntervals, dateToIndex, customIntervals } from './schedule'

const int12t16 = makeInterval(12, 16)
const int13t14 = makeInterval(13, 14)
const int19t22 = makeInterval(19, 22)
const int2t8 = makeInterval(2, 8)

const config = {
  regular: [[], [], [], [int12t16], [int13t14, int19t22], [], []],
  custom: { 1558558800000: [int2t8, int13t14] },
}
const datesList = [1558472400000, 1558558800000, 1558645200000]

describe('Schedule functions', () => {
  test('Test date to index', () => {
    const res = dateToIndex(1558558800000)
    expect(res).toEqual(3)
  })
  test('Test schedules from dates', () => {
    const result = R.map(regularIntervals(config), datesList)
    const expected = [[], [int12t16], [int13t14, int19t22]]
    expect(result).toEqual(expected)
  })
  test('Test custom intervals getter', () => {
    const res = customIntervals(config, 1558558800000)
    expect(res).toEqual([int2t8, int13t14])
  })
})
