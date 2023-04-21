/*
 * Crea una función que sea capaz de transformar Español al lenguaje básico del universo
 * Star Wars: el "Aurebesh".
 * - Puedes dejar sin transformar los caracteres que no existan en "Aurebesh".
 * - También tiene que ser capaz de traducir en sentido contrario.
 * ¡Que la fuerza os acompañe!
 */

interface AurebeshDictionary {
  [key: string]: string
}

function aurebesh(text: string) {
  const aurebeshDiccionary: AurebeshDictionary = {
    A: "Aa",
    B: "Besh",
    C: "Cresh",
    D: "Dorn",
    E: "Een",
    F: "Forn",
    G: "Gree",
    H: "Herf",
    I: "Isk",
    J: "Jenth",
    K: "Krill",
    L: "Leth",
    M: "Mando",
    N: "Nern",
    Ñ: "Ñ",
    O: "Osk",
    P: "Pei",
    Q: "Qek",
    R: "Resh",
    S: "Senth",
    T: "Trill",
    U: "Usk",
    V: "Vev",
    W: "Wesk",
    X: "Xesh",
    Y: "Yirt",
    Z: "Zerek",
  }
  let traduction = ''
  for (const letter of text.toUpperCase()) {
    if (aurebeshDiccionary.hasOwnProperty(letter)) {
      traduction += aurebeshDiccionary[letter]
    } else if (letter === ' ') traduction += ' '
  }
  return traduction
}