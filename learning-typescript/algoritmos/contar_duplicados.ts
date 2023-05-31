/*
  Escribir una función que devuelva la cantidad de caracteres alfabéticos y dígitos numéricos distintos,
  sin distinguir entre mayúsculas y minúsculas, que aparecen más de una vez en la cadena de entrada.
  Se puede suponer que la cadena de entrada solo contiene letras (mayúsculas y minúsculas) y dígitos numéricos.

  "abcde" -> 0 // => ningún carácter se repite más de una vez
"aabbcde" -> 2 // => 'a' y 'b'
"aabBcde" -> 2 // => 'a' aparece dos veces y 'b' dos veces (b y B)
"indivisibility" -> 1 // => 'i' aparece seis veces
"Indivisibilities" -> 2 // => 'i' aparece siete veces y 's' dos veces
"aA11" -> 2 // => 'a' y '1'
"ABBA" -> 2 // => 'A' y 'B' aparecen dos veces cada uno
*/

function duplicados(s: string): string {
  const map = new Map()
  let ans = ''

  for (const number of s.toLowerCase()) {
    if (map.has(number)) {
      map.set(number, map.get(number)! + 1)
    } else map.set(number, 1)
  }

  for (const [word, occurrences] of map) {
    if (occurrences % 2 === 0) {
      ans += `${occurrences} ${word}`
    }
  }
  return ans
}

console.log(duplicados('abcde'))
console.log(duplicados('aabbcde'))
console.log(duplicados('indivisibility'))
