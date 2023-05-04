export interface Question {
  category: string;
  type: Type;
  difficulty: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface ErrorResponse {
  err: Error
  statusCode: string
  statusText: string
}

export enum Difficulty {
  Easy = "easy",
  Hard = "hard",
  Medium = "medium",
}

export enum Type {
  Multiple = "multiple",
  Boolean = 'boolean'
}

export enum GameStatus {
  Playing = 'playing',
  GameOver = 'gameOver'
}
