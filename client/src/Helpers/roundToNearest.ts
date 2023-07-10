const roundToNearest = (numToRound: number, numToRoundTo: number): number =>
  Math.round(numToRound / numToRoundTo) * numToRoundTo

export default roundToNearest
