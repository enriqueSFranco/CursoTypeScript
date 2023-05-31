/*
 * Llamar a una API es una de las tareas más comunes en programación.
 *
 * Implementa una llamada HTTP a una API (la que tú quieras) y muestra su
 * resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...
 *
 * Aquí tienes un listado de posibles APIs: 
 * https://github.com/public-apis/public-apis
 */

interface ErrorResponse {
  err: Error,
  statusCode: string
  statusText: string
}

enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

interface Location {
  name: string;
  url: string;
}

enum Species {
  Alien = "Alien",
  Human = "Human",
}

enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

interface CharacterResponse {
  characters: Character[]
}

async function getCharacterService(): Promise<CharacterResponse> {
  try {
    const url = new URL('https://rickandmortyapi.com/api/character')
    const respose = await fetch(url, { headers: { 'Content-Type': 'application/json' } })

    if (!respose.ok) {
      const statusCode: string = respose.status === 0 || respose.status === null ? '00' : String(respose.status)
      const statusText: string = respose.statusText === '' ? 'Oppss, ha ocurrido un error' : respose.statusText
      const error: ErrorResponse = {
        err: new Error('Oppss, ha ocurrido un error durante la peticion'),
        statusCode,
        statusText
      }
      throw error
    }
    const data = await respose.json()
    return {
      characters: data.results
    }
  } catch (error) {
    throw error
  }
}

getCharacterService()
  .then(response => console.log(response))
  .catch(err => console.error(err))