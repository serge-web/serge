import CW from '../types/conditional-wrapper'

const ConditionalWrapper: CW = ({ condition, wrapper, children }): any =>
  condition ? wrapper(children) : children

export default ConditionalWrapper
