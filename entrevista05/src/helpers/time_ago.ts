import type { TimeUnits, UnitTime } from '../share/types.d'

const getTimeDifferenceInSeconds = ({ timestamp }: { timestamp: number }): number => {
  const currentTime = Date.now()
  const timeDiff = currentTime - timestamp
  return timeDiff / 1000 // ala dividir entre 1000 quitamos le milisegundos
}
const getUnitTime = ({ secondsElapsed }: { secondsElapsed: number }): UnitTime | undefined => {
  const TIME_UNITS: TimeUnits = {
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  }
  for (const [unit, unitSeconds] of Object.entries(TIME_UNITS)) {
    if (secondsElapsed >= unitSeconds || unit === 'second') {
      const value = Math.floor(secondsElapsed / unitSeconds) * -1
      return { value, unit: unit as keyof TimeUnits }
    }
  }
}

export const timeAgo = ({ timestamp }: { timestamp: number }): string => {
  const rtf2 = new Intl.RelativeTimeFormat('es', { numeric: 'auto' })
  const secondsElapsed: number = getTimeDifferenceInSeconds({ timestamp })
  const unitTime = getUnitTime({ secondsElapsed })

  if (unitTime !== undefined) {
    const { value, unit } = unitTime
    return rtf2.format(value, unit)
  }
  return ''
}
