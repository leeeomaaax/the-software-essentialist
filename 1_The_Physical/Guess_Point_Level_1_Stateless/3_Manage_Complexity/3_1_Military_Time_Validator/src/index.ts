export const isValidMilitaryTime = (timeString: string): boolean => {
  if (timeString.length === 0) return false
  const hour = parseInt(timeString.substring(0, 2))
  if (isNaN(hour) || hour < 0 || hour > 23) return false
  const minute = parseInt(timeString.substring(3, 5))
  if (isNaN(minute) || minute < 0 || minute > 59) return false
  return true
}
