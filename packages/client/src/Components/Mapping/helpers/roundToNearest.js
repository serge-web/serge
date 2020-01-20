export default function roundToNearest (/* number */ numToRound, /* number */ numToRoundTo) {
  return Math.round(numToRound / numToRoundTo) * numToRoundTo
};
