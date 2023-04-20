/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
function fizzbuzz1(): void {
  const LIMIT: number = 100
  


  for (let i: number = 1; i <= LIMIT; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i,'fizzbuzz')
    }
    if (i % 3 === 0) {
      console.log(i, 'fizz')
    }
    if (i % 5 === 0) {
      console.log(i,'buzz')
    }
    else {
      console.log(i)
    }
  }
}


function fizzbuzz2(number: number) {
  const multiples = {
    3: 'fizz',
    5: 'buzz'
  }

  let ans = ''

  Object.entries(multiples).forEach(([multiple, word]):void => {
      if (number % multiple === 0) {
        ans += word 
      }
  })
}