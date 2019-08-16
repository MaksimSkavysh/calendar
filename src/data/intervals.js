export const makeInterval = (s, e) => [s, e]
export const intervalStart = i => i[0]
export const intervalEnd = i => i[1]
export const intervalDuration = i => i[1] - i[0] + 1

