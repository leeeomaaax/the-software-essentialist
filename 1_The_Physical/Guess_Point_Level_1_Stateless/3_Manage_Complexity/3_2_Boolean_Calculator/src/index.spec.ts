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
  describe("AND operator should compose result", () => {
    it("should evaluate NOT TRUE AND NOT TRUE to false", () => {
      expect(evaluateExpression("NOT TRUE AND NOT TRUE")).toBeFalsy()
    })
    it("should evaluate NOT TRUE AND NOT FALSE to false", () => {
      expect(evaluateExpression("NOT TRUE AND NOT FALSE")).toBeFalsy()
    })
    it("should evaluate NOT FALSE AND NOT FALSE to true", () => {
      expect(evaluateExpression("NOT FALSE AND NOT FALSE")).toBeTruthy()
    })
    it("should evaluate NOT FALSE AND NOT TRUE to false", () => {
      expect(evaluateExpression("NOT FALSE AND NOT TRUE")).toBeFalsy()
    })
    it("should evaluate TRUE AND TRUE to true", () => {
      expect(evaluateExpression("TRUE AND TRUE")).toBeTruthy()
    })
    it("should evaluate TRUE AND FALSE to false", () => {
      expect(evaluateExpression("TRUE AND FALSE")).toBeFalsy()
    })
    it("should evaluate FALSE AND FALSE to false", () => {
      expect(evaluateExpression("FALSE AND FALSE")).toBeFalsy()
    })
    it("should evaluate FALSE AND TRUE to false", () => {
      expect(evaluateExpression("FALSE AND TRUE")).toBeFalsy()
    })
  })
  describe("OR operator should compose result", () => {
    it("should evaluate TRUE OR TRUE to true", () => {
      expect(evaluateExpression("TRUE OR TRUE")).toBeTruthy()
    })
    it("should evaluate TRUE OR FALSE to true", () => {
      expect(evaluateExpression("TRUE OR FALSE")).toBeTruthy()
    })
    it("should evaluate FALSE OR FALSE to false", () => {
      expect(evaluateExpression("FALSE OR FALSE")).toBeFalsy()
    })
    it("should evaluate FALSE AND TRUE to false", () => {
      expect(evaluateExpression("FALSE OR TRUE")).toBeTruthy()
    })
  })
})
