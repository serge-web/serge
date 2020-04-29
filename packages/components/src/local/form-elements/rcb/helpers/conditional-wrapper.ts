import ConditionalWrapper from "../types/conditional-wrapper"

const ConditionalWrapper: ConditionalWrapper = ({ condition, wrapper, children }): any => 
  condition ? wrapper(children) : children

export default ConditionalWrapper