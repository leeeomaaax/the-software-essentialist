const evaluateExpressionToken = (expressionValue: string): boolean => {
  if (expressionValue === "TRUE") return true
  if (expressionValue === "FALSE") return false
  if (expressionValue === "NOT TRUE") return false
  if (expressionValue === "NOT FALSE") return true

  throw new Error("unhandled expressionValue")
}

const evaluateANDOperator = (expression: string): boolean => {
  const expressionValues = expression.split(" AND ")

  const result = expressionValues.reduce((prevValue, currentValue) => {
    return prevValue && evaluateExpressionToken(currentValue)
  }, true)
  return result
}

const evaluateANDandThenOROperators = (expression: string): boolean => {
  const expressionValues = expression.split(" OR ")

  const result = expressionValues.reduce((prevValue, currentValue) => {
    if (currentValue.indexOf(" AND ") >= 0)
      return prevValue || evaluateANDOperator(currentValue)
    return prevValue || evaluateExpressionToken(currentValue)
  }, false)
  return result
}

const getOutermostParenthesisInfo = (
  expression: string
):
  | { hasParenthesis: false }
  | {
      hasParenthesis: true
      startIndex: number
      endIndex: number
    } => {
  let startIndex: number | undefined
  let endIndex: number | undefined
  let hasParenthesis = false
  let openParenthesis = 0
  expression.split("").forEach((char, index) => {
    if (char === "(") {
      hasParenthesis = true
      if (openParenthesis === 0) startIndex = index
      openParenthesis++
    } else if (char === ")") {
      if (openParenthesis === 1) endIndex = index
      openParenthesis--
    }
  })
  if (hasParenthesis) {
    return {
      hasParenthesis,
      startIndex,
      endIndex,
    }
  }
  return {
    hasParenthesis,
  }
}

export const evaluateExpression = (expression: string): boolean => {
  const outermostParenthesisInfo = getOutermostParenthesisInfo(expression)

  if (!outermostParenthesisInfo.hasParenthesis)
    return evaluateANDandThenOROperators(expression)

  const beforeParenthesisExp = expression.substring(
    0,
    outermostParenthesisInfo.startIndex
  )
  const parenthesisExp = expression.substring(
    outermostParenthesisInfo.startIndex + 1,
    outermostParenthesisInfo.endIndex
  )
  const afterParenthesisExp = expression.substring(
    outermostParenthesisInfo.endIndex + 1,
    expression.length
  )

  const parenthesisExpResult = evaluateExpression(parenthesisExp)
  const parenthesisExpResultAsExp =
    parenthesisExpResult === true ? "TRUE" : "FALSE"

  return evaluateExpression(
    beforeParenthesisExp + parenthesisExpResultAsExp + afterParenthesisExp
  )
}
