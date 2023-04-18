const evaluateExpressionValue = (expressionValue: string): boolean => {
  if (expressionValue === "TRUE") return true
  if (expressionValue === "FALSE") return false
  if (expressionValue === "NOT TRUE") return false
  if (expressionValue === "NOT FALSE") return true

  throw new Error("unhandled expressionValue")
}

const evaluateANDOperator = (expression: string): boolean => {
  const expressionValues = expression.split(" AND ")

  const result = expressionValues.reduce((prevValue, currentValue) => {
    if (currentValue.indexOf(" OR ") >= 0)
      return prevValue && evaluateOROperator(currentValue)
    return prevValue && evaluateExpressionValue(currentValue)
  }, true)
  return result
}

const evaluateOROperator = (expression: string): boolean => {
  const expressionValues = expression.split(" OR ")

  const result = expressionValues.reduce((prevValue, currentValue) => {
    if (currentValue.indexOf(" AND ") >= 0)
      return prevValue || evaluateANDOperator(currentValue)
    return prevValue || evaluateExpressionValue(currentValue)
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
    return evaluateOROperator(expression)

  const beforeParenthesisExp = expression.substring(
    0,
    outermostParenthesisInfo.startIndex
  )
  const charBeforeParenthesisExp = expression.substring(
    outermostParenthesisInfo.startIndex - 1,
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

  let newExpression
  if (charBeforeParenthesisExp === "!") {
    newExpression =
      beforeParenthesisExp.substring(0, beforeParenthesisExp.length - 1) +
      "NOT " +
      parenthesisExpResultAsExp +
      afterParenthesisExp
  } else {
    newExpression =
      beforeParenthesisExp + parenthesisExpResultAsExp + afterParenthesisExp
  }
  return evaluateExpression(newExpression)
}
