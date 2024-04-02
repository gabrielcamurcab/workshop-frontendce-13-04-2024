import { check } from './check'

test('returns true when it is equal', () => {
  // Arrange
  const name = 'Bruce Wayne'

  // Act
  const result = check(name, name)
  
  // Assert
  expect(result).toBe(true)
})

test('returns false when it is not equal', () => {
  const result = check('Clark Kent', 'Bruce Wayne')
  expect(result).toBe(false)
})


test('returns false when it is not equal', () => {
  // Arrange
  const name1 = 'Bruce Wayne'
  const name2 = 'Clark Kent'

  // Act
  const result = check(name1, name2)

  // Assert
  expect(result).toBe(false)
})
