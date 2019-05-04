import { sum } from './index'

describe('Schedule functions', () => {
  test('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3)
    expect(sum(2, 2)).toEqual(4)
  })
})
