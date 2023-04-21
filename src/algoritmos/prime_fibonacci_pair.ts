/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

function isPrime(value: number): boolean { 
  // divisible por si mismo y la unidad --> 2, 3, 5, 7, 11, 13
  if (value < 2) return false

  // 10
  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) { // 10/2 = 5
      return false
    }
  }
  return true
}

// 0 1 1 2
function isFibonacci(value: number) { //8
  let prev:number = 0
  let current: number = 1
  
  while (current < value) {
    let next = prev + current // 0+1=1, 1+1=2
    prev = current // 1, 1
    current = next // 1, 2
  }

  return current === value
}

function isPair(value: number): boolean {
  return value % 2 === 0
}

function foo(value: number): string {
  let ans: string = ''

  isPrime(value) ? ans += `${value} es primo` : ans += `${value} no es primo`
  isFibonacci(value) ? ans += `, ${value} es fibonacci` : ans += `${value} no es fibonacci`
  isPair(value) ? ans += ` y ${value} es par` : ans += `${value} no es par`

  return ans
}

console.log(isPrime(11))