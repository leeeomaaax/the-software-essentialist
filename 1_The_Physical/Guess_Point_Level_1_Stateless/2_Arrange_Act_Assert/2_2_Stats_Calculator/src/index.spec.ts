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
})
