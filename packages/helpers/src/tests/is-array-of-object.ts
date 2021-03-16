import isArrayOfObject from '../is-array-of-object'

describe('isArrayOfObject', () => {
  it('checks if data is an array of plain object', () => {
    const arrOfObj = [{ foo: 'bar' }, { baz: 'qux' }]
    const arrOfNumbers = [0, 1, 2]
    const arrofArr = [[0, 1, 2]]
    const notArr = { foo: 'bar' }
    expect(isArrayOfObject(arrOfObj)).toBeTruthy()
    expect(isArrayOfObject(arrOfNumbers)).toBeFalsy()
    expect(isArrayOfObject(arrofArr)).toBeFalsy()
    expect(isArrayOfObject(notArr)).toBeFalsy()
  })
})
