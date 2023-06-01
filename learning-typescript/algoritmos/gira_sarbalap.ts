/*
Escriba una función que tome una cadena de una o más palabras y devuelva la misma cadena, pero con todas las palabras de cinco o más letras invertidas
(como el nombre de esta Kata). Las cadenas pasadas solo consistirán en letras y espacios. Los espacios solo se incluirán cuando haya más de una palabra presente.

*/

function girar(s: string): string {
  const words = s.trim().split(' ')
  const MAX_LENGTH: number = 5

  return words.map(word => word.length >= MAX_LENGTH ? word.split('').reverse().join('') : word).join(' ')
}

console.log(girar('Hola como estás')) // "Hola como sátse"
console.log(girar('Esto es una prueba')) // "Esto es una abeurp
