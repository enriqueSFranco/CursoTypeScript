/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */

type Hand = '📄' | '🪨' | '✂️' | '🦎' | '🖖' | '🐀'
enum Winner  {'P1' = 'P1', 'P2' = 'P2', 'Tie' = 'Tie'}

function sheldon(plays: [Hand, Hand][]) {
  const COMBINATIONS: {[key in Hand]: Hand[]} = {
    '✂️': ['📄', '🦎'],
    '📄': ['🪨', '🖖'],
    '🪨': ['🐀', '✂️'],
    '🦎': ['🖖', '📄'],
    '🖖': ['✂️', '🪨'],
    '🐀': ['🦎', '🪨']
  }

  function getWinner(hand1: Hand, hand2: Hand): string {
    if (hand1 === hand2) return Winner.Tie

    if (COMBINATIONS[hand1].includes(hand2)) return Winner.P1
    else return Winner.P2
  }

  plays.forEach(([player1, player2]) => {
    const winner = getWinner(player1, player2)
    console.log(`${winner}`)
  })
}


sheldon([['🪨','✂️'], ['✂️','🪨'], ['📄','✂️'], ['📄', '📄']]) // p2