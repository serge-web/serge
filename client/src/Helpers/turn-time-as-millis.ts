// import { GameTurnLength, MilliTurns, TurnLengthType } from 'src/custom-types'

// /** retrieve turn length as millis */
// export const turnTimeAsMillis = (turnLength: GameTurnLength): number => {
//   if (typeof turnLength === 'number') {
//     // turn length in legacy format, plain millis
//     return turnLength
//   } else {
//     const turnTimeType: TurnLengthType = turnLength as TurnLengthType
//     switch (turnTimeType.unit) {
//       case 'millis' : {
//         const mTurn: MilliTurns = turnLength as MilliTurns
//         return mTurn.millis
//       }
//       default: {
//         console.error('Cannot represent time in months/years as millis')
//         return -1
//       }
//     }
//   }
// }
