/* 
Tu familia tiene una tienda y acaban de adquirir una marquesina
para ayudar a conseguir más negocios.

La máquina funciona reemplazando el texto actual con un texto similar, 
pero con la primera letra desplazada al final; esto simula movimiento.

Tu padre está muy ocupado con el negocio como para preocuparse por 
esos detalles, así que, naturalmente, te hace responsable de crear 
los textos.

Crea una función llamada "marquesina()" que acepte una cadena de texto
 como argumento y devuelva un array de cadenas de texto, donde 
 cada letra de la cadena de entrada sea rotada al final.

marquesina("Hola"); // => ["olaH", "laHo", "aHol", "Hola"]

Nota
La cadena original debe estar incluida en el array de salida. 
El orden es importante. Cada elemento del array de salida debe 
ser la versión rotada del elemento anterior.
*/

function marquesina(txt: string): string[] {
  let ans: string[] = []

  for (let i = 0; i < txt.length; i++) {
  let word = txt.slice(i) + txt.slice(0,i)
  ans.push(word)
}
  return ans
}