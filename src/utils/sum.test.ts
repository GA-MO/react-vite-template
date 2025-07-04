import { expect, test, describe } from 'vitest'
import { sum } from './sum'

describe('sum.ts', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4)
  })
})
