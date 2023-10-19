import { Emotions } from './types'
/* 
Tendrás una función llamada 'ordenarEmociones' 
que devolverá un arreglo de emociones ordenadas. 
Tiene dos parámetros, el primer parámetro llamado 'emociones' 
esperará un arreglo de emociones donde una emoción será una 
de las siguientes:

':D' = Súper Feliz
':)' = Feliz
':|' = Normal
':(' = Triste
'T_T' = Súper Triste


Y el segundo parámetro se llama orden, si este parámetro es true, 
entonces el orden de las emociones será descendente 
(de Súper Feliz a Súper Triste), si es false, entonces será 
ascendente (de Súper Triste a Súper Feliz)

Ejemplo si el orden es true con el arreglo anterior:
[':D', ':)', ':|', ':(', 'T_T']; // => Súper Feliz = Feliz = Normal = Triste = Súper Triste

Si orden es false:
['T_T', ':(', ':|', ':)', ':D']; // => Súper Triste = Triste = Normal = Feliz = Súper Feliz

Ejemplo:
arr = [':D', ':|', ':)', ':(', ':D'];
ordenarEmociones(arr, true); // [ ':D', ':D', ':)', ':|', ':(' ]
ordenarEmociones(arr, false); // [ ':(', ':|', ':)', ':D', ':D' ]

Notas
El arreglo podría estar vacío, en ese caso devuelve el mismo arreglo vacío
Todas las emociones serán válidas
*/

const SCORE: Record<Emotions, number> = {
  ':D': 1,
  ':)': 2,
  ':|': 3,
  ':(': 4,
 'T_T': 5
}


function ordenarEmociones(emotions: Emotions[], order: boolean): Emotions[] {
  if (!emotions.length) return emotions

  const sortedEmotions = emotions.sort((a, b) => {
    const scoreDiff = SCORE[a] - SCORE[b]
    return order ? scoreDiff : -scoreDiff
  })

  return sortedEmotions
}

console.log(ordenarEmociones([':D', ':|', ':)', ':(', ':D'], true))