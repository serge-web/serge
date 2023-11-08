import { StylesOptions } from '@material-ui/styles/'

const generateClassName: StylesOptions['generateClassName'] = (
  rule,
  sheet
): string => `${sheet!.options.classNamePrefix}-${rule.key}`

export default generateClassName
