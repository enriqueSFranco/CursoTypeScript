import simpleGit, { type SimpleGit } from 'simple-git'

/*
 * ¿Sabías que puedes leer información de Git y GitHub desde la gran
 * mayoría de lenguajes de programación?
 *
 * Crea un programa que lea los últimos 10 commits de este repositorio y muestre:
 * - Hash
 * - Autor
 * - Mensaje
 * - Fecha y hora
 *
 * Ejemplo de salida:
 * Commit 1 (el más reciente) | 12345A | MoureDev | Este es un commit | 24/04/2023 21:00
 *
 * Se permite utilizar librerías que nos faciliten esta tarea.
 *
 */

async function getInfoRepo() {
  const git: SimpleGit = simpleGit()

  // Clona el repositorio
  await git.clone('https://github.com/enriqueSFranco/rn-app.git', './rn-app')

  // Abre el repositorio clonado
  git.cwd('./rn-app')

  // Obtiene la información de los commits en el repositorio
  const log = await git.log()
  console.log(log.all)
}

getInfoRepo()
