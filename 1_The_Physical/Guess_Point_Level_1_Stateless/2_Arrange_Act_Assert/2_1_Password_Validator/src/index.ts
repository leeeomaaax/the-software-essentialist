type ValidatePasswordResult =
  | { isValid: true }
  | { isValid: false; errors: string[] }

export const validatePassword = (password: string): ValidatePasswordResult => {
  return { isValid: true }
}
