import { describe, it, expect } from 'vitest'

import { canReconfigure } from '../src/canReconfigure'

/*
Escribir una funcion que al pasarle un numero:
Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.
Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁
La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.
Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.
Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas

https://2021.adventjs.dev/challenges/23
*/

describe('canConfigure', () => {
  it('should be a function', () => {
    expect(typeof canReconfigure).toBe('function')
  })

  it('should be throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  it('should be throw if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })

  it('should be throw if second parameter is not a string', () => {
    expect(() => canReconfigure('a')).toThrow()
  })

  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('should return false if parameters have diferent length', () => {
    expect(canReconfigure('abc', 'xy')).toBe(false)
  })

  it('should return false if parameters have diferent length', () => {
    expect(canReconfigure('abc', 'ab')).toBe(false)
  })

  it('should return false if parameters have diferent number of unique letters', () => {
    expect(canReconfigure('abc', 'xyy')).toBe(false)
  })

  it('should return false if parameters have diferent order of transformation', () => {
    expect(canReconfigure('xbox', 'xxbo')).toBe(false)
  })
})
