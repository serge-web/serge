import padInteger from '../../../Helpers/padInteger'

export default function turnNameFor (/* int */ turn) {
  return 'T' + padInteger(turn, 2)
}