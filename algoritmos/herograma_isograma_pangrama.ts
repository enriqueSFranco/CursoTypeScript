/*
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
 * Un heterograma es una palabra o frase que no contiene ninguna letra repetida.
 * Un isograma es una palabra o frase en la que no se repite ninguna letra.
 * Un pangrama es una frase que incluye todas las letras del alfabeto.
 */

function heterograma(text: string) { 
  const textLowerCase = text.toLocaleLowerCase()
  const letters = new Set(textLowerCase)

  return letters.size === textLowerCase.length
}

function isograma(text: string) {
  const letters = new Set(text.toLocaleLowerCase().replace(/[^a-z]/g, '').split(''))
  return letters.size === text.length
}
function pangrama(text: string) {
  const alphabet = /[a-z]/g;
  const ans = new Set(text.toLowerCase().match(alphabet))

  return ans.size === 26
}

function main(text: string) {
  const isHeterograma = heterograma(text)
  const isIsograma = isograma(text)
  const isPangrama = pangrama(text)
  let ans: string = ''

  isHeterograma ? ans += `${text} es un heterograma` : ans += `${text} no es un heterograma`
  isIsograma ? ans += `${text} es un isograma` : ans += `${text} no es un isograma`
  isPangrama ? ans += `${text} es un pangrama` : ans += `${text} no es un pangrama`

  return ans
}