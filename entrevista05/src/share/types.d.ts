export interface Story {
  by: string,
  descendants: number,
  id: number,
  kids: Kids[],
  score: number,
  time: number,
  title: string,
  type: string,
  url: string
}

interface Kid {
  kid: number
} 