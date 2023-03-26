import { getStatsOnSequence } from "./index"

describe("getStatsOnSequence", () => {
  it("basic run with at least a number", () => {
    const sequence = [1]
    const stats = getStatsOnSequence(sequence)
    expect(stats.min).toEqual(1)
    expect(stats.max).toEqual(1)
    expect(stats.length).toEqual(1)
    expect(stats.average).toEqual(1)
  })

  it("basic run with empty sequence", () => {
    const sequence: number[] = []
    const stats = getStatsOnSequence(sequence)
    expect(stats.min).toBeUndefined()
    expect(stats.max).toBeUndefined()
    expect(stats.length).toEqual(0)
    expect(stats.average).toBeUndefined()
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
  describe("calculates the minimum correctly", () => {
    it("when sequence has only 1 number", () => {
      const sequence = [1]
      const stats = getStatsOnSequence(sequence)
      expect(stats.min).toEqual(1)
    })
    it("when sequence has many numbers", () => {
      const sequence = [2, 2, 3]
      const stats = getStatsOnSequence(sequence)
      expect(stats.min).toEqual(2)
    })
  })
})
