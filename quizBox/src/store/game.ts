import { create } from 'zustand'
import { GameStatus } from '../types.d'


interface GameState {
  gameStatus: string
  handleGameStatus: (gameStatus: GameStatus) => void
}

export const useGame = create<GameState>((set) => ({
  gameStatus: GameStatus.Playing,
  handleGameStatus: (gameStatus: GameStatus): void => set({ gameStatus }),
}))