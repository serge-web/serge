import { CommodityType, NumberCommodityType, NumberCommodityValue } from '@serge/custom-types'
import numeral from 'numeral'

export const createDefaultFor = (comm: NumberCommodityType): number => {
  return comm.defaultValue || 0
}

export const formatValue = (commTypes: NumberCommodityType[],
  comm: NumberCommodityValue): string => {
  const cType = commTypes.find((cType: CommodityType) => cType.commId === comm.commId)
  if (!cType) {
    throw new Error('Commodity type not found for id:' + comm.commId)
  }
  if (cType.format) {
    return numeral(comm.value).format(cType.format)
  } else {
    return '' + comm.value
  }
}

export const formatCommodity = (commTypes: NumberCommodityType[],
  comm: NumberCommodityValue): string => {
  const cType = commTypes.find((cType: CommodityType) => cType.commId === comm.commId)
  if (!cType) {
    throw new Error('Commodity type not found for id:' + comm.commId)
  }
  const value = formatValue([cType], comm)
  return '' + value + (cType.units ? (' ' + cType.units) : '')
}
