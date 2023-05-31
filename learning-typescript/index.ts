/* TIPOS DE DATO */
let ageOfExtinction: number = 76_000_000
let transformer: string = 'optimus'

let animals: string[] = ['leon', 'tiburon', 'toro', 'carnero', 'escorpion']
let nums: Array<Number> = [1, 2, 3]
let checks: Array<Boolean> = [true, false, true]
let nums2: number[] = [5, 6, 7]

/* tuplas, permite almacenar datos siempre y cuando hayan sido definidos */
let tupla: [number, string[]] = [1, ['kikesfranco', 'enriquesfranco']]

function say(username:string) {
  console.log(`Hola ${username.toLowerCase()}`)
}

function getAge(): number {
  return 1
}

/* pasando un objeto como parametro */
function logCoord(pt: { x: number, y: number }) {
  console.log(pt.x, pt.y)
}
logCoord({ x: 3, y: 6 })

/* propiedades opcionales se definen con el signo de interrogación (?) */
function logName(data: { name: string, lastname?: string }) {
  console.log(`${data.name}`)

  if (data.lastname !== undefined) {
    console.log(`Hi, ${data.name} ${data.lastname}`)
  }
}

logName({ name: 'kike', lastname: 'sfranco' })
logName({ name: 'kike' })


/* 
TIPOS DE UNIÓN 
Permite construir nuevos tipos a partir de los existentes
*/
function logId(id: number | string) {
  if (typeof id === 'string')
    console.log(id.toLocaleUpperCase())
  else
    console.log(id)
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })
    console.log(formatter.format(x))
  }
}

/* ALIAS DE TIPO no son extensibles */
type ID = number | string

type Person = {
  readonly id: ID,
  name: string,
  lastname: string,
  age: number,
  email: string
}

function logPerson(person: Person) {
  const { name, lastname, age, email } = person
  return `${name} ${lastname} ${age} ${email}`
}

logPerson({id: 0, name: 'kike', lastname: 'sfranco', age: 26, email: 'enrique@gmail.com'})

/* 
INTERFACE 
Un declaración de interfaz es otra forma de nombrar un tipo de objeto
es extensible en comparacion con los alias(types)
*/

// forma explicita del objeto user
interface User {
  id: number
  name: string,
}

// el objeto user se ajusta a la forma de la interface
const user: User = {
  id: 0,
  name: 'kike'
}

/* ENUMS */
enum LoadingState { Succes, Error, Loading }
const promiseState = LoadingState.Succes


/* EXPRESIONES DE TIPO DE FUNCIÓN */
type GreetFn = (a: string) => void

function greeter(fn: GreetFn) {
  fn('hello world')
}

function logSay(s: string) {
  console.log(s)
}

greeter(logSay)