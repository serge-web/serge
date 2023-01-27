import ms from 'milsymbol'

export default interface PropTypes {
  onClick?: VoidFunction
  sidc: string
  iconName: string
  options?: ms.SymbolOptions
  isSelected?: boolean
}
