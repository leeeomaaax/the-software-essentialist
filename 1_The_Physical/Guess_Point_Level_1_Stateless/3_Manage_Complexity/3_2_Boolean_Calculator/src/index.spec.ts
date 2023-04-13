import { evaluateExpression } from "./index"

describe("boolean calculator", () => {
  it("should evaluate TRUE to true", () => {
    expect(evaluateExpression("TRUE")).toBeTruthy()
  })
  it("should evaluate FALSE to false", () => {
    expect(evaluateExpression("FALSE")).toBeFalsy()
  })

  describe("NOT operator should invert result", () => {
    it("should evaluate NOT TRUE to false", () => {
      expect(evaluateExpression("NOT TRUE")).toBeFalsy()
    })
    it("should evaluate NOT FALSE to true", () => {
      expect(evaluateExpression("NOT FALSE")).toBeTruthy()
    })
  })
})
