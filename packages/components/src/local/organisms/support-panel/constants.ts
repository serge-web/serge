import { CSSProperties } from 'react'

export const TAB_MY_ORDERS = 'my_orders'
export const TAB_ADJUDICATE = 'adjudication'

export const TABS = ['my_force', TAB_MY_ORDERS, 'opfor',TAB_ADJUDICATE ]
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
