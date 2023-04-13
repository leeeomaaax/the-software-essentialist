const evaluateExpressionValue = (expressionValue: string): boolean => {
  if (expressionValue === "TRUE") return true
  if (expressionValue === "FALSE") return false
  if (expressionValue === "NOT TRUE") return false
  if (expressionValue === "NOT FALSE") return true

  throw new Error("unhandled expressionValue")
}

export const evaluateExpression = (expression: string): boolean => {
  if (expression === "TRUE") return true
  if (expression === "FALSE") return false
  if (expression === "NOT TRUE") return false
  if (expression === "NOT FALSE") return true

  const expressionValues = expression.split(" AND ")

  const result = expressionValues.reduce(
    (prevValue, currentValue) =>
      prevValue && evaluateExpressionValue(currentValue),
    true
  )
  return result
}
