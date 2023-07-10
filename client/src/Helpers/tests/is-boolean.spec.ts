import isBoolean from '../is-boolean'

describe('isBoolean', () => {
  it('checks if data is of a boolean type', () => {
    expect(isBoolean('string')).toBeFalsy()
    expect(isBoolean(false)).toBeTruthy()
    expect(isBoolean(true)).toBeTruthy()
    expect(isBoolean('true')).toBeFalsy()
    expect(isBoolean('false')).toBeFalsy()
  })
})
