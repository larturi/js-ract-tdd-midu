import { describe, it, expect } from 'vitest'

import { fizzbuzz } from '../src/fizzbuzz'

/*
Escribir una funcion que al pasarle un numero:
 - Muestra "fizz" si el numero es multiplo de 3
 - Muestra "buzz" si el numero es multiplo de 5
 - Muestra "fizzbuzz" si el numero es multiplo de 3 y de 5
 - Muestra el numero si no es multiplo ni de 3 ni de 5
*/

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('should throw if not number is provider as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('The parameter provided must be a number')
  })

  it('should throw a message if NaN is provided as parameter', () => {
    expect(() => fizzbuzz(NaN)).toThrow('The parameter provided must be a number')
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return fizz if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('should return buzz if number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
    expect(fizzbuzz(50)).toBe('buzz')
  })

  it('should return fizzbuzz if number provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
    expect(fizzbuzz(150)).toBe('fizzbuzz')
  })
})
