/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */


enum Language {
  A = '4', B = '|3', C = '[', D = '|)',
  E = '3', F = '6', G = '#', I = '1',
  J = '_|', K = '|<', L = '|_', M = '[V]',
  N = 'И', O = '0', P = '|°', Q = '9', R = '|2',
  S = '5', T = '7', U = '|_|', V = '|/', W = 'Ш',
  X = '><', Y = 'Ч', Z = '2'
}

function leet(text: string) {
  const LANGUAGE = {
  }
}