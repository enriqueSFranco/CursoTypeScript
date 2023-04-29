/*
 * Crea una función que reciba un número decimal y lo trasforme a Octal
 * y Hexadecimal.
 * - No está permitido usar funciones propias del lenguaje de programación que
 * realicen esas operaciones directamente.
 */

function decimalToHexadecimal(value: number): string {
  const hex = '0123456789ABCDEF'
  let cociente: number = value // 16
  let hexadecimal: string = ''

  while (cociente >= 1) { // 16
    hexadecimal = hex[cociente % 16] + hexadecimal
    cociente = Math.floor(cociente / 16)
  }
  return hexadecimal
}

function decimalToOctal(number: number): string {
  const oct = '01234567'
  let cociente:number = number
  let octal: string = ''

  while (cociente >= 1) {
    octal = oct[cociente % 8] + octal
    cociente = Math.floor(cociente / 8)
  }

  return octal
}
