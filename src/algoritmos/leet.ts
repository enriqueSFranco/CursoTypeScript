/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

// opcion 1
function leet(text: string): string {
  let textUpperCase: string = text.toLocaleUpperCase()
  const language = {
    A:'4', B:'|3', C:'[', D:'|)',
    E:'3', F: '|=', G:'6', H:'#', I:'1',
    J:'_|', K:'|<', L:'|_', M:'[V]',
    N:'И', O:'0', P:'|°', Q:'9', R:'|2',
    S:'5', T:'7', U:'|_|', V:'|/', W:'Ш',
    X:'><', Y:'Ч', Z:'2', 0: 'O', 1: 'L', 2: 'Z',
    3: 'E', 4: 'A', 5: 'S', 6: 'b', 7: 'T', 8: 'B', 9: 'g'
  }

  return [...textUpperCase].map(letter => language[letter as keyof typeof language] || letter).join('')
}

// opcion 2
function leet2(text: string): string {
  let textUpperCase: string = text.toLocaleUpperCase()
  let ans: string = ''
  const language = {
    A:'4', B:'|3', C:'[', D:'|)',
    E:'3', F: '|=', G:'6', H:'#', I:'1',
    J:'_|', K:'|<', L:'|_', M:'[V]',
    N:'И', O:'0', P:'|°', Q:'9', R:'|2',
    S:'5', T:'7', U:'|_|', V:'|/', W:'Ш',
    X:'><', Y:'Ч', Z:'2', 0: 'O', 1: 'L', 2: 'Z',
    3: 'E', 4: 'A', 5: 'S', 6: 'b', 7: 'T', 8: 'B', 9: 'g'
  }
  for (const letter of textUpperCase) {
    if (language.hasOwnProperty(letter)) {
      ans += language[letter as keyof typeof language]
    }
  }
  return ans
}