import LRUCache from 'lru-cache'
import ms from 'milsymbol'

export default interface PropTypes {
  onClick?: VoidFunction
  sidc: string
  iconName: string
  options?: ms.SymbolOptions
  isSelected?: boolean
  assetsCache: LRUCache<string, string>
  force?: string
  health?: number
}
