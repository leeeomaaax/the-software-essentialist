type ValidatePasswordResult =
  | { isValid: true }
  | { isValid: false; errors: string[] }

export const validatePassword = (password: string): ValidatePasswordResult => {
  const errors = []
  if (password.length < 5) errors.push("SmallerThen5Chars")
  if (password.length > 15) errors.push("GreaterThen15Chars")
  if (errors.length > 0)
    return {
      isValid: false,
      errors,
    }
  return { isValid: true }
}
