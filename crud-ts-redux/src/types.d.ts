export interface User {
  avatar: string
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

export type UserId = string
