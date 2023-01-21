import ms from 'milsymbol'

export default interface PropTypes {
  onClick?: VoidFunction
  className?: string
  sidc: string
  iconName: string
  options?: ms.SymbolOptions
}
