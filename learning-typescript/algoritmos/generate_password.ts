/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

interface Charset {
  LOWERCASE: string
  UPPERCASE: string
  NUMBERS: string
  SYMBOLS: string
}

interface Config {
  len?: number
  hasUpperCase?: boolean
  hasNumbers?: boolean
  hasSymbols?: boolean
}

const DEFAULT_LEN = 8
const MAX_LEN = 16

function generatePassword({ len = DEFAULT_LEN, hasUpperCase = true, hasNumbers = true, hasSymbols = true }: Config) {

  if (len < DEFAULT_LEN || len > MAX_LEN) throw new Error(`La longitud debe ser entre ${DEFAULT_LEN} y ${MAX_LEN} caracteres`)

  let CHARACTERES: Charset = {
    LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
    UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    NUMBERS: '0123456789',
    SYMBOLS: '!@#$%^&*()_+-=[]{}|:,.<>/?'
  }

  let passwordChar = ''
  let password = ''

  hasUpperCase ? passwordChar += CHARACTERES.UPPERCASE : passwordChar += CHARACTERES.LOWERCASE
  hasNumbers ? passwordChar += CHARACTERES.NUMBERS : ''
  hasSymbols ? passwordChar += CHARACTERES.SYMBOLS : ''

  while (password.length <= len) {
    const random: number = Math.floor(Math.random() * password.length)
    password += passwordChar[random]
  }
  return password
}

generatePassword({})