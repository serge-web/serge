import formatTurn from '../format-turn'
import { TurnFormats } from '@serge/config'

describe('format turn:', () => {
  it('formats natural', () => {
    expect(formatTurn(3, TurnFormats.Natural)).toBe('3')
    expect(formatTurn(3)).toBe('3')
  })

  it('formats turn pairs', () => {
    expect(formatTurn(0, TurnFormats.TurnPairs)).toBe('0.1')
    expect(formatTurn(1, TurnFormats.TurnPairs)).toBe('0.2')
    expect(formatTurn(2, TurnFormats.TurnPairs)).toBe('1.1')
    expect(formatTurn(3, TurnFormats.TurnPairs)).toBe('1.2')
  })
})
