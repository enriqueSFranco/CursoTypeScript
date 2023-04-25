/* 58. Length of Last Word */

function lengthOfLastWord(s: string): number {
  /*
  OPCION 1
  const lastWord = []
  const cleanString = s.trim()
  console.log(cleanString)

  for (let i: number = cleanString.length - 1; i >= 0; i--) {
    if (cleanString[i] !== ' ') lastWord.push(cleanString[i])
    else break
  } */

  // OPCION 2
  const cleanString: string[] = s.trim().split(' ')
  const lastWord: string = cleanString[cleanString.length - 1]

  return lastWord.length
}

console.log(lengthOfLastWord('   fly me   to  the moon  '))
