import replaceNumber from './replace-number'

describe('replaceNumber', () => {
  it('should replace the number at the specified index', () => {
    const originalNumber = '123456789'
    const replacementNumber = '999'
    const startIndex = 3

    const result = replaceNumber(originalNumber, replacementNumber, startIndex)

    expect(result).toBe('123999789')
  })

  it('should handle replacement when it exceeds the original number length', () => {
    const originalNumber = '123'
    const replacementNumber = '999999'
    const startIndex = 1

    const result = replaceNumber(originalNumber, replacementNumber, startIndex)

    expect(result).toBe('')
  })

  it('should handle replacement with numbers as input', () => {
    const originalNumber = 12345
    const replacementNumber = '999'
    const startIndex = 2

    const result = replaceNumber(originalNumber, replacementNumber, startIndex)

    expect(result).toBe('12999')
  })
})
