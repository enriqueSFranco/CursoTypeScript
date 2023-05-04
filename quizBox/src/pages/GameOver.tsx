import { useQuestion } from '../store'

const GameOver = () => {
  const { totalPoints, handleResetGame } = useQuestion(state => ({ totalPoints: state.totalPoints, handleResetGame: state.handleResetGame }))

  return (
    <section>
      <div>
        <h2>{totalPoints}</h2>
        <button onClick={handleResetGame}>play again</button>
      </div>
    </section>
  )
}

export default GameOver