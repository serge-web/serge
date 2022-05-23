
export default interface PropTypes {
  anchorElm: HTMLElement | null
  onClose: () => void
  switchColor: (color: string) => void
}

export interface Color {
  name?: string
  color: string
}
