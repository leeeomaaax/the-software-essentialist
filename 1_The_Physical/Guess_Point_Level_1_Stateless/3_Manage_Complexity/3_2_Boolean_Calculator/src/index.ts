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

const evaluateParenthesis = (expression: string): boolean => {
  // TODO improve typing
  let parenthesisOpenIndex: number = 0
  let parenthesisCloseIndex: number = 0
  let hasParenthesis = false
  let openParenthesis = 0
  expression.split("").forEach((char, index) => {
    if (char === "(") {
      hasParenthesis = true
      if (openParenthesis === 0) parenthesisOpenIndex = index
      openParenthesis++
    } else if (char === ")") {
      if (openParenthesis === 1) parenthesisCloseIndex = index
      openParenthesis++
    }
  })
  // console.log(
  //   expression,
  //   hasParenthesis,
  //   parenthesisOpenIndex,
  //   parenthesisCloseIndex
  // )
  if (hasParenthesis) {
    const beforeParenthesisExp = expression.substring(0, parenthesisOpenIndex)
    const parenthesisExp = expression.substring(
      parenthesisOpenIndex + 1,
      parenthesisCloseIndex
    )
    const parenthesisExpResult = evaluateParenthesis(parenthesisExp)
    const parenthesisExpResultAsExp =
      parenthesisExpResult === true ? "TRUE" : "FALSE"

    const afterParenthesisExp = expression.substring(
      parenthesisCloseIndex + 1,
      expression.length
    )
    const newExpression =
      beforeParenthesisExp + parenthesisExpResultAsExp + afterParenthesisExp
    return evaluateParenthesis(newExpression)
  } else {
    return evaluateOROperator(expression)
  }
}

export const evaluateExpression = (expression: string): boolean => {
  if (expression === "TRUE") return true
  if (expression === "FALSE") return false
  if (expression === "NOT TRUE") return false
  if (expression === "NOT FALSE") return true

  const result = evaluateParenthesis(expression)
  return result
}
