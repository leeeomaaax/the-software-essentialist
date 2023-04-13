import { evaluateExpression } from "./index"

describe("boolean calculator", () => {
  it("should evaluate TRUE to true", () => {
    expect(evaluateExpression("TRUE")).toBeTruthy()
  })
})
