/* 
Los números pseudoaleatorios son una secuencia de números generados por un algoritmo que parece ser aleatoria pero en realidad es determinista y programático.
Es decir, a diferencia de los números verdaderamente aleatorios que son impredecibles e imposibles de reproducir, los números pseudoaleatorios son generados a partir de un conjunto inicial llamado semilla (seed) y un algoritmo matemático determinista que utiliza la semilla para generar una secuencia de números.
Esta secuencia de números se considera pseudoaleatoria porque a pesar de que no se puede predecir qué número específico vendrá a continuación, el conjunto de números que se generan a partir de la semilla y el algoritmo es siempre el mismo.
Los números pseudoaleatorios se utilizan comúnmente en la programación y en aplicaciones que requieren una cierta aleatoriedad pero no necesitan números verdaderamente aleatorios. Por ejemplo, en la generación de contraseñas, juegos, simulaciones y en criptografía.
*/

/*
 * Crea un generador de números pseudoaleatorios entre 0 y 100.
 * - No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.
 *
 */

function linearCongruentialGenerator(seed: number): () => number {
  const m = Math.pow(2, 32);
  const a = 1664525;
  const c = 1013904223;
  let x = seed % m;

  return () => {
    x = (a * x + c) % m;
    return Math.floor((x / m) * 101);
  }
}

const aleatory = linearCongruentialGenerator(101)

for (let i = 0; i < 101; i++) {
  console.log(aleatory())
}