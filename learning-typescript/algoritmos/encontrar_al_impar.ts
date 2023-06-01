/*
  Dado un arreglo de números enteros, encontrar aquel que aparece un número impar de veces.

  [7]; // => 7, porque aparece 1 vez (que es impar).
  [0]; // => 0, porque aparece 1 vez (que es impar).
  [1, 1, 2]; // => 2, porque aparece 1 vez (que es impar).
  [0, 1, 0, 1, 0]; // => 0, porque aparece 3 veces (que es impar).
  [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]; // => 4, porque aparece 1 vez (que es impar).
*/

function findOddNumber(array: number[]): number {
  const size = array.length

  if (size === 1) return array[0]

  const map = new Map()

  for (const number of array) {
    if (map.has(number)) {
      map.set(number, map.get(number)! + 1)
    } else map.set(number, 1)
  }

  for (const [num, count] of map) {
    if (count % 2 === 1) {
      return num
    }
  }
  return -1
}

findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])
