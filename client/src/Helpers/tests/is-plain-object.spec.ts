import isPlainObject from '../is-plain-object'

describe('isPlainObject', () => {
  it('checks if data is a plain object', () => {
    const obj = { foo: 'bar' }
    const arrayObj = ['foo', 'bar']
    const nullObj = null
    const funcObj = () => { console.log('tt') }
    expect(isPlainObject(obj)).toBeTruthy()
    expect(isPlainObject(arrayObj)).toBeFalsy()
    expect(isPlainObject(nullObj)).toBeFalsy()
    expect(isPlainObject(funcObj)).toBeFalsy()
  })
})
