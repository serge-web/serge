import isObjectEquivalent from '../is-object-equivalent'

describe('isObjectEquivalent helpers:', () => {
  const objA = { prop: 'value' }
  const objB = { prop: 'value' }
  const objC = { prop: 'otherValue' }
  const objD = { prop: 'otherValue', prop2: 'bar' }
  it('compares object equality', () => {
    expect(isObjectEquivalent(objA, objB)).toBeTruthy()
    expect(isObjectEquivalent(objA, objC)).toBeFalsy()
    expect(isObjectEquivalent(objA, objD)).toBeFalsy()
    expect(isObjectEquivalent(objC, objD)).toBeFalsy()
  })
})
