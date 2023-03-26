type Result = {
  min: number
  max: number
  length: number
  average: number
}

export const getStatsOnSequence = (sequence: number[]): Result => {
  return {
    min: 1,
    max: 1,
    length: 1,
    average: 1,
  }
}
