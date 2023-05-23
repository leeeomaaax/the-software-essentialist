export const isPalindrome = (text: string): boolean => {
  const lowerCaseTextWithoutSpaces = text.toLowerCase().split(" ").join("")
  const midPointLengthToVerify = Math.floor(
    lowerCaseTextWithoutSpaces.length / 2
  )
  let isPalindrome = true
  for (let index = 0; index < midPointLengthToVerify; index++) {
    if (
      lowerCaseTextWithoutSpaces[index] !==
      lowerCaseTextWithoutSpaces[lowerCaseTextWithoutSpaces.length - 1 - index]
    ) {
      isPalindrome = false
      break
    }
  }
  return isPalindrome
}
