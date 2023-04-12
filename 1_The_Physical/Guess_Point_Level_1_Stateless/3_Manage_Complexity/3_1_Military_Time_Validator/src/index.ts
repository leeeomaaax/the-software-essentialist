const isValidHour = (hour: number): boolean =>
  !isNaN(hour) && hour >= 0 && hour <= 23
const isValidMinute = (minute: number): boolean =>
  !isNaN(minute) && minute >= 0 && minute <= 59

export const isValidMilitaryTime = (timeString: string): boolean => {
  if (timeString.length !== 13) return false

  const hourStart = parseInt(timeString.substring(0, 2))
  if (!isValidHour(hourStart)) return false

  const separatorStart = timeString.substring(2, 3)
  if (separatorStart !== ":") return false

  const minuteStart = parseInt(timeString.substring(3, 5))
  if (!isValidMinute(minuteStart)) return false

  const separatorRange = timeString.substring(5, 8)
  if (separatorRange !== " - ") return false

  const hourEnd = parseInt(timeString.substring(8, 10))
  if (!isValidHour(hourEnd)) return false

  const separatorEnd = timeString.substring(10, 11)
  if (separatorEnd !== ":") return false

  const minuteEnd = parseInt(timeString.substring(11, 13))
  if (!isValidMinute(minuteEnd)) return false

  return true
}
