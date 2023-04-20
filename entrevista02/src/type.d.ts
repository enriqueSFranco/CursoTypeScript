type PostId = string | number

export interface Post {
  id: PostId
  title: string
  body: string
}

export interface PostWithId {
  id: PostId
}

export interface ApiEndpoints {
  readonly POSTS: string
}

export interface ErrorResponse {
  err: Error,
  statusCode: string
  statusText: string
}