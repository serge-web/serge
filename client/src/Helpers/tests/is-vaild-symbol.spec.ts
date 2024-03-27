import isValidSymbol from '../is-vaild-symbol' // Assuming your function is in a file named isValidSymbol.ts or isValidSymbol.tsx

describe('isValidSymbol', () => {
  it('should return true for a valid SIDC code', () => {
    const sidcCode = '10000000000000000000'
    expect(isValidSymbol(sidcCode)).toBe(true)
  })
})
