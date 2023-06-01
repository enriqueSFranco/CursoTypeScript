export interface Story {
  by: string
  descendants: number
  id: number
  kids: Kids[]
  score: number
  time: number
  title: string
  type: string
  url: string
}

interface Kid {
  kid: number
}

export interface TimeUnits {
  day: number
  hour: number
  minute: number
  second: number
}

export interface UnitTime {
  value: number
  unit: keyof TimeUnits
}
