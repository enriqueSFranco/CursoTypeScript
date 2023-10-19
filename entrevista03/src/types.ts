declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[]
  }
}
export interface Movie {
  Title: string
  Year: string
  Rated?: string
  Released?: string
  Runtime?: string
  Genre?: string
  Director?: string
  Writer?: string
  Actors?: string
  Plot?: string
  Language?: string
  Country?: string
  Awards?: string
  Poster: string
  Ratings?: Rating[]
  Metascore?: string
  imdbRating?: string
  imdbVotes?: string
  imdbID: string
  Type?: string
  DVD?: string
  BoxOffice?: string
  Production?: string
  Website?: string
  Response?: string
}

export interface Rating {
  Source: string
  Value: string
}

export type ErrorResponse = {
  error: Error
  statusCode: string
  statusText: string
}

export type MovieTitle = Pick<Movie, 'Title'>