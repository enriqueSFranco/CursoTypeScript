/*
 * Crea una función que sea capaz de detectar si existe un viernes 13 en el mes y el año indicados.
 * - La función recibirá el mes y el año y retornará verdadero o falso.
 */

interface Params {
  month: number
  year: number
}

function friday13({year, month}: Params) {
  const FRIDAY = 5
  const FRIDAY_13 = 13
  return new Date(year, month - 1, FRIDAY_13).getDay() === FRIDAY
}

console.log(friday13({year: 2023, month: 1}))