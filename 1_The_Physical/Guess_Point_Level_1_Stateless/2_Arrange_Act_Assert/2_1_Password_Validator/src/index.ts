type ValidatePasswordResult =
  | { isValid: true }
  | { isValid: false; errors: string[] }

export const validatePassword = (password: string): ValidatePasswordResult => {
  const errors = []

  if (password.length < 5) errors.push("SmallerThen5Chars")

  if (password.length > 15) errors.push("GreaterThen15Chars")

  const hasAtLeastOneDigit = password
    .split("")
    .find((char) => !isNaN(parseInt(char)))
  if (!hasAtLeastOneDigit) errors.push("NoDigit")

  const hasAtLeastOneUpperCase = password
    .split("")
    .find((char) => /^[A-Z]*$/.test(char))
  if (!hasAtLeastOneUpperCase) errors.push("NoUpperCase")

  const hasErrors = errors.length > 0
  if (hasErrors)
    return {
      isValid: false,
      errors,
    }

  return { isValid: true }
}
