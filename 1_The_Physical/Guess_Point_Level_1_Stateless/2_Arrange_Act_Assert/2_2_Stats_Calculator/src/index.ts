type Result = {
  min: number | undefined
  max: number | undefined
  length: number
  average: number | undefined
}

const getMax = (sequence: number[]): number => {
  return sequence.reduce((prev, curr) => {
    if (prev > curr) return prev
    return curr
  }, -Infinity)
}

const getMin = (sequence: number[]): number => {
  return sequence.reduce((prev, curr) => {
    if (prev < curr) return prev
    return curr
  }, Infinity)
}

const getAverage = (sequence: number[]): number => {
  const sum = sequence.reduce((prev, curr) => {
    return prev + curr
  })
  return sum / sequence.length
}

export const getStatsOnSequence = (sequence: number[]): Result => {
  if (sequence.length === 0)
    return {
      min: undefined,
      max: undefined,
      length: 0,
      average: undefined,
    }
  return {
    min: getMin(sequence),
    max: getMax(sequence),
    length: sequence.length,
    average: getAverage(sequence),
  }
}
