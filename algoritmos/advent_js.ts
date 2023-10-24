function wrapping(gifts: string[]): string[] {
  /* let buffer:string[] = []

  for (let i:number = 0; i < gifts.length; i++) {
    const word: string = gifts[i]
    const wrapper = '*'.repeat(word.length + 2)+'\n*'+word+'*\n' + '*'.repeat(word.length + 2)
    buffer.push(wrapper)
  } */
  return gifts.map(gift => {
    const wrapper: number = gift.length + 2
    return '*'.repeat(wrapper) + '\n*' + gift + '*\n' + '*'.repeat(wrapper)
  }) 
}

function countHours(year:number, holidays:string[]): number {
  let hours:number = 0
  for (const holiday of holidays) {
    const date = new Date(`${holiday}/${year}`)
    if (![0,6].includes(date.getDay()))
      hours += 2
  }
  return hours
}

// ['01/06', '04/01', '12/25'] MM/DD
// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

//console.log(countHours(2022, ['01/06', '04/01', '12/25'])) // 2 days -> 4 extra hours in the year

/* 
  Devuelve el número máximo de paquetes de regalos que Santa Claus puede entregar. 
  No puedes dividir paquetes de regalos.

  const packOfGifts = ["book", "doll", "ball"]
  const reindeers = ["dasher", "dancer"]

  pack weights 4 + 4 + 4 = 12
  reindeers can carry (2 * 6) + (2 * 6) = 24
  distributeGifts(packOfGifts, reindeers) // 2
*/
function distributeGifts(packOfGifts:string[], reindeers:string[]): number {
  /* let totalpackOfGifts = 0
  let totalreindeers = 0

  for (let i = 0; i < packOfGifts.length; i++) {
    const wordLength = packOfGifts[i].length
    totalpackOfGifts += wordLength
  }
  for (let i = 0; i < reindeers.length; i++) {
    const wordLength = reindeers[i].length
    totalreindeers += wordLength * 2
  } */
  let totalpackOfGifts = packOfGifts.join('').length
  let totalreindeers = reindeers.join('').length * 2
  return Math.floor(totalreindeers / totalpackOfGifts)
}

// console.log(distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]))