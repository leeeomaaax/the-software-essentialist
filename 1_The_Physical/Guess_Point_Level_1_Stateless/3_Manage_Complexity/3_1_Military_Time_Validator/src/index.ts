export const isValidMilitaryTime = (timeString: string): boolean => {
  if (timeString.length === 0) return false
  const hourStart = parseInt(timeString.substring(0, 2))
  if (isNaN(hourStart) || hourStart < 0 || hourStart > 23) return false
  const minuteStart = parseInt(timeString.substring(3, 5))
  if (isNaN(minuteStart) || minuteStart < 0 || minuteStart > 59) return false
  const hourEnd = parseInt(timeString.substring(8, 10))
  if (isNaN(hourEnd) || hourEnd < 0 || hourEnd > 23) return false
  const minuteEnd = parseInt(timeString.substring(11, 13))
  if (isNaN(minuteEnd) || minuteEnd < 0 || minuteEnd > 59) return false
  return true
}
