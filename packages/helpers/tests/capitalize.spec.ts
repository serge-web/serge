import capitalize from '../capitalize'

describe('capitalize:', () => {
  it('formats string into capitalized text', () => {
    expect(capitalize(null)).toBe('')
    expect(capitalize('lorem')).toBe('Lorem')
  })
})
