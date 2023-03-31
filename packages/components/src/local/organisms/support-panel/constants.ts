import { CSSProperties } from 'react'

export const TAB_MY_ORDERS = 'my_orders'
export const TAB_ADJUDICATE = 'adjudication'
export const TAB_MY_FORCE = 'my_force'
export const TAB_OPP_FOR = 'opp_force'

export const MIN_PANEL_WIDTH = 330
export const MAX_PANEL_WIDTH = '80%'
export const MIN_PANEL_HEIGHT = '100%'
export const MAX_PANEL_HEIGHT = '100%'

export const PANEL_STYLES: CSSProperties = {
  display: 'flex',
  position: 'unset'
}

export const DEFAULT_SIZE = {
  x: 0,
  y: 0,
  width: MIN_PANEL_WIDTH,
  height: '100%'
}

export const LRU_CACHE_OPTION = {
  max: 500,
  maxSize: 5000,
  ttl: 1000 * 60 * 60,
  maxEntrySize: 5000,
  sizeCalculation: (): number => 1
}
