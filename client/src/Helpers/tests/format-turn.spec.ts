import formatTurn from '../format-turn'
import { TurnFormats } from 'src/config'

describe('format turn:', () => {
  it('formats natural', () => {
    expect(formatTurn(3, TurnFormats.Natural)).toBe('3')
    expect(formatTurn(3)).toBe('3')
  })

  it('formats turn pair numbers', () => {
    expect(formatTurn(0, TurnFormats.TurnPairNumbers)).toBe('0.1')
    expect(formatTurn(1, TurnFormats.TurnPairNumbers)).toBe('0.2')
    expect(formatTurn(2, TurnFormats.TurnPairNumbers)).toBe('1.1')
    expect(formatTurn(3, TurnFormats.TurnPairNumbers)).toBe('1.2')
  })

  it('formats turn pair letters', () => {
    expect(formatTurn(0, TurnFormats.TurnPairLetters)).toBe('0.a')
    expect(formatTurn(1, TurnFormats.TurnPairLetters)).toBe('0.b')
    expect(formatTurn(2, TurnFormats.TurnPairLetters)).toBe('1.a')
    expect(formatTurn(3, TurnFormats.TurnPairLetters)).toBe('1.b')
  })
})
