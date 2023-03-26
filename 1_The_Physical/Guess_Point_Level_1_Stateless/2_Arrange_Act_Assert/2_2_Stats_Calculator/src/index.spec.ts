import { getStatsOnSequence } from "./index"

describe("getStatsOnSequence", () => {
  it("basic run", () => {
    const sequence = [1]
    const stats = getStatsOnSequence(sequence)
    expect(stats.min).toEqual(1)
    expect(stats.max).toEqual(1)
    expect(stats.length).toEqual(1)
    expect(stats.average).toEqual(1)
  })
  describe("calculates the maximum correctly", () => {
    it("when sequence has only 1 number", () => {
      const sequence = [1]
      const stats = getStatsOnSequence(sequence)
      expect(stats.max).toEqual(1)
    })
    it("when sequence has many numbers", () => {
      const sequence = [1, 2, 3]
      const stats = getStatsOnSequence(sequence)
      expect(stats.max).toEqual(3)
    })
  })
})
