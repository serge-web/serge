// import { Wargame } from 'src/custom-types'

// const wargame: Wargame = {
//   adjudicationStartTime: '2022-08-19T10:48:23+01:00',
//   wargameList: [],
//   data: {
//     annotationIcons: {
//       markers: [
//         {
//           icon: 'marker_unknown.svg',
//           name: 'Unknown',
//           uniqid: 'unk'
//         },
//         {
//           icon: 'marker_audio_visual.svg',
//           name: 'Audio-Visual',
//           uniqid: 'a/v'
//         },
//         {
//           icon: 'marker_audio.svg',
//           name: 'Audio',
//           uniqid: 'aud'
//         },
//         {
//           icon: 'marker_flash.svg',
//           name: 'Flash',
//           uniqid: 'flsh'
//         },
//         {
//           icon: 'marker_general.svg',
//           name: 'General',
//           uniqid: 'gen'
//         },
//         {
//           icon: 'marker_periscope.svg',
//           name: 'Periscope',
//           uniqid: 'peri'
//         },
//         {
//           icon: 'marker_plume.svg',
//           name: 'Plume',
//           uniqid: 'plum'
//         },
//         {
//           icon: 'marker_wake.svg',
//           name: 'Wake',
//           uniqid: 'wak'
//         },
//         {
//           icon: 'marker_visual.svg',
//           name: 'Visual',
//           uniqid: 'vis'
//         }
//       ]
//     },
//     channels: {
//       selectedChannel: '',
//       channels: [
//         {
//           uniqid: 'channel-l6z44xgv',
//           name: 'B5 Intent',
//           channelType: 'ChannelChat',
//           participants: [
//             {
//               forceUniqid: 'umpire',
//               roles: [],
//               subscriptionId: 'nci8',
//               pType: 'ParticipantChat'
//             },
//             {
//               forceUniqid: 'force-b5',
//               roles: [],
//               subscriptionId: '119o',
//               pType: 'ParticipantChat'
//             }
//           ],
//           hideMessageAuthor: false
//         },
//         {
//           uniqid: 'channel-l6z44jyg',
//           name: 'B4 Intent',
//           channelType: 'ChannelChat',
//           participants: [
//             {
//               forceUniqid: 'umpire',
//               roles: [],
//               subscriptionId: 'nci8',
//               pType: 'ParticipantChat'
//             },
//             {
//               forceUniqid: 'force-b4',
//               roles: [],
//               subscriptionId: '119o',
//               pType: 'ParticipantChat'
//             }
//           ],
//           hideMessageAuthor: false
//         },
//         {
//           uniqid: 'channel-l6z445a7',
//           name: 'B3 Intent',
//           channelType: 'ChannelChat',
//           participants: [
//             {
//               forceUniqid: 'umpire',
//               roles: [],
//               subscriptionId: 'nci8',
//               pType: 'ParticipantChat'
//             },
//             {
//               forceUniqid: 'force-b3',
//               roles: [],
//               subscriptionId: '119o',
//               pType: 'ParticipantChat'
//             }
//           ],
//           hideMessageAuthor: false
//         },
//         {
//           uniqid: 'channel-l6z43q9t',
//           name: 'B2 Intent',
//           channelType: 'ChannelChat',
//           participants: [
//             {
//               forceUniqid: 'umpire',
//               roles: [],
//               subscriptionId: 'nci8',
//               pType: 'ParticipantChat'
//             },
//             {
//               forceUniqid: 'force-b2',
//               roles: [],
//               subscriptionId: '119o',
//               pType: 'ParticipantChat'
//             }
//           ],
//           hideMessageAuthor: false
//         },
//         {
//           uniqid: 'l6c2gvvz',
//           name: 'B1 Intent',
//           channelType: 'ChannelChat',
//           participants: [
//             {
//               forceUniqid: 'umpire',
//               roles: [],
//               subscriptionId: 'nci8',
//               pType: 'ParticipantChat'
//             },
//             {
//               forceUniqid: 'force-b1',
//               roles: [],
//               subscriptionId: '119o',
//               pType: 'ParticipantChat'
//             }
//           ],
//           hideMessageAuthor: false
//         },
//         {
//           uniqid: 'channel-l6z460om',
//           name: 'R2 Intent',
//           channelType: 'ChannelChat',
//           participants: [
//             {
//               forceUniqid: 'umpire',
//               roles: [],
//               subscriptionId: 'dfyw8',
//               pType: 'ParticipantChat'
//             },
//             {
//               forceUniqid: 'force-r2',
//               roles: [],
//               subscriptionId: 'ttgbg',
//               pType: 'ParticipantChat'
//             }
//           ]
//         },
//         {
//           uniqid: 'l6c2gddv',
//           name: 'R1 Intent',
//           channelType: 'ChannelChat',
//           participants: [
//             {
//               forceUniqid: 'umpire',
//               roles: [],
//               subscriptionId: 'dfyw8',
//               pType: 'ParticipantChat'
//             },
//             {
//               forceUniqid: 'force-r1',
//               roles: [],
//               subscriptionId: 'ttgbg',
//               pType: 'ParticipantChat'
//             }
//           ]
//         },
//         {
//           uniqid: 'l650i8sj',
//           name: 'Wireless',
//           channelType: 'ChannelChat',
//           participants: [
//             {
//               forceUniqid: 'umpire',
//               roles: [],
//               subscriptionId: 'epplc',
//               pType: 'ParticipantChat'
//             },
//             {
//               forceUniqid: 'force-b1',
//               roles: [],
//               subscriptionId: 'eca6s',
//               pType: 'ParticipantChat'
//             },
//             {
//               forceUniqid: 'force-b2',
//               roles: [],
//               subscriptionId: '1i72a',
//               pType: 'ParticipantChat'
//             },
//             {
//               forceUniqid: 'force-b3',
//               roles: [],
//               subscriptionId: 'm87ny',
//               pType: 'ParticipantChat'
//             },
//             {
//               forceUniqid: 'force-b4',
//               roles: [],
//               subscriptionId: '90mjl',
//               pType: 'ParticipantChat'
//             },
//             {
//               forceUniqid: 'force-b5',
//               roles: [],
//               subscriptionId: '2v4wa',
//               pType: 'ParticipantChat'
//             }
//           ],
//           hideMessageAuthor: true
//         },
//         {
//           uniqid: 'l650fqoy',
//           name: 'mapping',
//           channelType: 'mapping',
//           participants: [
//             {
//               forceUniqid: 'umpire',
//               roles: [
//                 'pl63jl7so'
//               ],
//               subscriptionId: 'qdaad',
//               pType: 'ParticipantMapping',
//               controls: [
//                 'control-all:force-green'
//               ]
//             },
//             {
//               forceUniqid: 'force-b1',
//               roles: [
//                 'pl65060rb'
//               ],
//               subscriptionId: 'k6co',
//               pType: 'ParticipantMapping',
//               controls: [
//                 'al65069c1'
//               ]
//             },
//             {
//               forceUniqid: 'force-b2',
//               roles: [
//                 'rl6506vlp'
//               ],
//               subscriptionId: 'jejlg',
//               pType: 'ParticipantMapping',
//               controls: [
//                 'al6506vlq'
//               ]
//             },
//             {
//               forceUniqid: 'force-b3',
//               roles: [
//                 'rl65088ad'
//               ],
//               subscriptionId: 'lv0zo',
//               pType: 'ParticipantMapping',
//               controls: [
//                 'al65088ae'
//               ]
//             },
//             {
//               forceUniqid: 'force-b4',
//               roles: [
//                 'rl6509vwn'
//               ],
//               subscriptionId: 'fev0p',
//               pType: 'ParticipantMapping',
//               controls: [
//                 'al6509vwo'
//               ]
//             },
//             {
//               forceUniqid: 'force-b5',
//               roles: [
//                 'rl650arbo'
//               ],
//               subscriptionId: 'yp10n',
//               pType: 'ParticipantMapping',
//               controls: [
//                 'al650arbp'
//               ]
//             },
//             {
//               forceUniqid: 'force-r1',
//               roles: [
//                 'rl650chc3'
//               ],
//               subscriptionId: 'qsgtl',
//               pType: 'ParticipantMapping',
//               controls: [
//                 'al650d18r'
//               ]
//             },
//             {
//               forceUniqid: 'force-r2',
//               roles: [
//                 'rl650dmne'
//               ],
//               subscriptionId: 'rciqi',
//               pType: 'ParticipantMapping',
//               controls: [
//                 'al650dmnf'
//               ]
//             }
//           ],
//           constraints: {
//             bounds: [
//               [
//                 54.5,
//                 -4.2
//               ],
//               [
//                 54.1,
//                 -4
//               ]
//             ],
//             h3res: 9,
//             cellLabelsStyle: 'x_y_labels',
//             minZoom: 8,
//             maxZoom: 17
//           }
//         }
//       ],
//       dirty: false,
//       name: 'Channels'
//     },
//     forces: {
//       dirty: false,
//       forces: [
//         {
//           color: '#FCFBEE',
//           dirty: false,
//           iconURL: 'http://localhost:8080/default_img/umpireDefault.png',
//           name: 'White',
//           overview: 'Umpire force.',
//           roles: [
//             {
//               isGameControl: true,
//               isInsightViewer: true,
//               isObserver: true,
//               name: 'Game Control',
//               roleId: 'pl63jl7so'
//             }
//           ],
//           umpire: true,
//           uniqid: 'umpire'
//         },
//         {
//           name: 'B1',
//           uniqid: 'force-b1',
//           overview: 'An overview written here..',
//           roles: [
//             {
//               name: 'B1-CO',
//               roleId: 'pl65060rb',
//               isGameControl: false,
//               isObserver: false,
//               isInsightViewer: false
//             }
//           ],
//           iconURL: 'http://164.92.156.58:8080/default_img/forceDefault.png',
//           color: '#3dd0ff',
//           umpire: false,
//           dirty: false,
//           assets: [
//             {
//               uniqid: 'al65069c1',
//               contactId: 'C777',
//               name: 'B1',
//               platformTypeId: 'a6',
//               perceptions: [
//                 {
//                   by: 'force-b2',
//                   force: 'force-b1',
//                   typeId: 'a6',
//                   name: 'B1'
//                 },
//                 {
//                   by: 'force-b3',
//                   force: 'force-b1',
//                   typeId: 'a6',
//                   name: 'B1'
//                 },
//                 {
//                   by: 'force-b4',
//                   force: 'force-b1',
//                   typeId: 'a6',
//                   name: 'B1'
//                 },
//                 {
//                   by: 'force-b5',
//                   force: 'force-b1',
//                   typeId: 'a6',
//                   name: 'B1'
//                 },
//                 {
//                   by: 'force-r2',
//                   force: 'force-b1',
//                   typeId: 'a6',
//                   name: 'B1'
//                 },
//                 {
//                   by: 'force-green'
//                 }
//               ],
//               condition: 'Working',
//               attributeValues: [
//                 {
//                   attrId: 'asdic-dir-de',
//                   value: 0,
//                   attrType: 'AttributeValueNumber'
//                 },
//                 {
//                   attrId: 'attr-dep-de',
//                   value: 16,
//                   attrType: 'AttributeValueNumber'
//                 }
//               ],
//               position: '89195010cafffff',
//               plannedTurns: [],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '89195012a4fffff',
//                     '89195012a7bffff',
//                     '891950101b7ffff',
//                     '89195012a6bffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 9
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 9
//                   },
//                   route: [
//                     '89195012a4fffff',
//                     '89195012a7bffff',
//                     '891950101b7ffff',
//                     '89195012a6bffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 9
//                   },
//                   route: [
//                     '89195012a6bffff',
//                     '89195010cd3ffff',
//                     '89195010cc3ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 9
//                   },
//                   route: [
//                     '89195012a6bffff',
//                     '89195010cd3ffff',
//                     '89195010cc3ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010ccfffff',
//                     '89195010c1bffff',
//                     '89195010c03ffff',
//                     '89195010c07ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010ccfffff',
//                     '89195010c1bffff',
//                     '89195010c03ffff',
//                     '89195010c07ffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 3
//                   },
//                   route: [
//                     '89195010c33ffff',
//                     '89195010cafffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'Transiting',
//                 speedKts: 3
//               }
//             }
//           ]
//         },
//         {
//           name: 'B2',
//           uniqid: 'force-b2',
//           overview: 'An overview written here..',
//           roles: [
//             {
//               name: 'B2-CO',
//               roleId: 'rl6506vlp',
//               isGameControl: false,
//               isObserver: false,
//               isInsightViewer: false
//             }
//           ],
//           iconURL: 'http://164.92.156.58:8080/default_img/forceDefault.png',
//           color: '#3dd0ff',
//           umpire: false,
//           dirty: false,
//           assets: [
//             {
//               uniqid: 'al6506vlq',
//               contactId: 'C813',
//               name: 'B2',
//               platformTypeId: 'a1',
//               perceptions: [
//                 {
//                   by: 'force-b1',
//                   force: 'force-b2',
//                   typeId: 'a1',
//                   name: 'B2'
//                 },
//                 {
//                   by: 'force-b5',
//                   force: 'force-b2',
//                   typeId: 'a1',
//                   name: 'B2'
//                 },
//                 {
//                   by: 'force-green'
//                 }
//               ],
//               condition: 'Working',
//               position: '89195010313ffff',
//               plannedTurns: [],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '89195010633ffff',
//                     '89195010623ffff',
//                     '89195010627ffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010633ffff',
//                     '89195010623ffff',
//                     '89195010627ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010627ffff',
//                     '8919501005bffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010627ffff',
//                     '8919501005bffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010043ffff',
//                     '8919501004fffff',
//                     '891950102b7ffff',
//                     '8919501006bffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010043ffff',
//                     '8919501004fffff',
//                     '891950102b7ffff',
//                     '8919501006bffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501006fffff',
//                     '891950103d7ffff',
//                     '891950103c7ffff',
//                     '89195010313ffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'Transiting',
//                 speedKts: 6
//               },
//               attributeValues: [
//                 {
//                   attrId: 'asdic-dir-fr',
//                   value: 240,
//                   attrType: 'AttributeValueNumber'
//                 },
//                 {
//                   attrId: 'attr-dep-fr',
//                   value: 13,
//                   attrType: 'AttributeValueNumber'
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           name: 'B3',
//           uniqid: 'force-b3',
//           overview: 'An overview written here..',
//           roles: [
//             {
//               name: 'B3-CO',
//               roleId: 'rl65088ad',
//               isGameControl: false,
//               isObserver: false,
//               isInsightViewer: false
//             }
//           ],
//           iconURL: 'http://164.92.156.58:8080/default_img/forceDefault.png',
//           color: '#3dd0ff',
//           umpire: false,
//           dirty: false,
//           assets: [
//             {
//               uniqid: 'al65088ae',
//               contactId: 'C166',
//               name: 'B3',
//               platformTypeId: 'a1',
//               perceptions: [
//                 {
//                   by: 'force-b1',
//                   force: 'force-b3',
//                   typeId: 'a1',
//                   name: 'B3'
//                 },
//                 {
//                   by: 'force-b4',
//                   force: 'force-b3',
//                   typeId: 'a1',
//                   name: 'B3'
//                 },
//                 {
//                   by: 'force-green'
//                 }
//               ],
//               condition: 'Working',
//               attributeValues: [
//                 {
//                   attrId: 'asdic-dir-fr',
//                   value: 120,
//                   attrType: 'AttributeValueNumber'
//                 },
//                 {
//                   attrId: 'attr-dep-fr',
//                   value: 17,
//                   attrType: 'AttributeValueNumber'
//                 }
//               ],
//               position: '89195012d4fffff',
//               plannedTurns: [
//                 {
//                   turn: 6,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012d7bffff',
//                     '89195012d6bffff',
//                     '891950129d3ffff',
//                     '891950129d7ffff'
//                   ]
//                 }
//               ],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '89195012cc7ffff',
//                     '89195012c13ffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012cc7ffff',
//                     '89195012c13ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012c03ffff',
//                     '89195012c07ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012c03ffff',
//                     '89195012c07ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012c07ffff',
//                     '89195012c3bffff',
//                     '89195012c23ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012c07ffff',
//                     '89195012c3bffff',
//                     '89195012c23ffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012c27ffff',
//                     '89195012d5bffff',
//                     '89195012d4bffff',
//                     '89195012d4fffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'Transiting',
//                 speedKts: 6
//               }
//             }
//           ]
//         },
//         {
//           name: 'B4',
//           uniqid: 'force-b4',
//           overview: 'An overview written here..',
//           roles: [
//             {
//               name: 'B4-CO',
//               roleId: 'rl6509vwn',
//               isGameControl: false,
//               isObserver: false,
//               isInsightViewer: false
//             }
//           ],
//           iconURL: 'http://164.92.156.58:8080/default_img/forceDefault.png',
//           color: '#3dd0ff',
//           umpire: false,
//           dirty: false,
//           assets: [
//             {
//               uniqid: 'al6509vwo',
//               contactId: 'C101',
//               name: 'B4',
//               platformTypeId: 'a1',
//               perceptions: [
//                 {
//                   by: 'force-b1',
//                   force: 'force-b4',
//                   typeId: 'a1',
//                   name: 'B4'
//                 },
//                 {
//                   by: 'force-b3',
//                   force: 'force-b4',
//                   typeId: 'a1',
//                   name: 'B4'
//                 },
//                 {
//                   by: 'force-green',
//                   name: 'B4'
//                 },
//                 {
//                   by: 'force-r1'
//                 }
//               ],
//               condition: 'Working',
//               attributeValues: [
//                 {
//                   attrId: 'asdic-dir-fr',
//                   value: 180,
//                   attrType: 'AttributeValueNumber'
//                 },
//                 {
//                   attrId: 'attr-dep-fr',
//                   value: 12,
//                   attrType: 'AttributeValueNumber'
//                 }
//               ],
//               position: '89195012967ffff',
//               plannedTurns: [],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '89195012857ffff',
//                     '8919501280bffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012857ffff',
//                     '8919501280bffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012873ffff',
//                     '89195012877ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012873ffff',
//                     '89195012877ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012867ffff',
//                     '89195012b93ffff',
//                     '89195012b97ffff',
//                     '8919501294bffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012867ffff',
//                     '89195012b93ffff',
//                     '89195012b97ffff',
//                     '8919501294bffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501294fffff',
//                     '8919501297bffff',
//                     '89195012963ffff',
//                     '89195012967ffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'Transiting',
//                 speedKts: 6
//               }
//             }
//           ]
//         },
//         {
//           name: 'B5',
//           uniqid: 'force-b5',
//           overview: 'An overview written here..',
//           roles: [
//             {
//               name: 'B5-CO',
//               roleId: 'rl650arbo',
//               isGameControl: false,
//               isObserver: false,
//               isInsightViewer: false
//             }
//           ],
//           iconURL: 'http://164.92.156.58:8080/default_img/forceDefault.png',
//           color: '#3dd0ff',
//           umpire: false,
//           dirty: false,
//           assets: [
//             {
//               uniqid: 'al650arbp',
//               contactId: 'C955',
//               name: 'B5',
//               platformTypeId: 'a1',
//               perceptions: [
//                 {
//                   by: 'force-b1',
//                   force: 'force-b5',
//                   typeId: 'a1',
//                   name: 'B5'
//                 },
//                 {
//                   by: 'force-b2',
//                   force: 'force-b5',
//                   typeId: 'a1',
//                   name: 'B5'
//                 },
//                 {
//                   by: 'force-green',
//                   name: 'B5'
//                 }
//               ],
//               condition: 'Working',
//               attributeValues: [
//                 {
//                   attrId: 'asdic-dir-fr',
//                   value: 300,
//                   attrType: 'AttributeValueNumber'
//                 },
//                 {
//                   attrId: 'attr-dep-fr',
//                   value: 16,
//                   attrType: 'AttributeValueNumber'
//                 }
//               ],
//               position: '89195010ea3ffff',
//               plannedTurns: [],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '89195010383ffff',
//                     '89195010387ffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010383ffff',
//                     '89195010387ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950103b3ffff',
//                     '891950103a3ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950103b3ffff',
//                     '891950103a3ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950103afffff',
//                     '89195010edbffff',
//                     '89195010ec3ffff',
//                     '89195010ec7ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950103afffff',
//                     '89195010edbffff',
//                     '89195010ec3ffff',
//                     '89195010ec7ffff'
//                   ]
//                 },
//                 {
//                   turn: 6,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010e13ffff',
//                     '89195010e17ffff',
//                     '89195010eabffff',
//                     '89195010ea3ffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'Transiting',
//                 speedKts: 6
//               }
//             }
//           ]
//         },
//         {
//           name: 'R1',
//           uniqid: 'force-r1',
//           overview: 'An overview written here..',
//           roles: [
//             {
//               name: 'R1-CO',
//               roleId: 'rl650chc3',
//               isGameControl: false,
//               isObserver: false,
//               isInsightViewer: false
//             }
//           ],
//           iconURL: 'http://164.92.156.58:8080/default_img/forceDefault.png',
//           color: '#d0021b',
//           umpire: false,
//           dirty: false,
//           assets: [
//             {
//               uniqid: 'al650d18r',
//               contactId: 'C347',
//               name: 'R1',
//               platformTypeId: 'a7',
//               perceptions: [],
//               condition: 'Working',
//               attributeValues: [
//                 {
//                   attrId: 'attr-torp-ford',
//                   value: 3,
//                   attrType: 'AttributeValueNumber'
//                 },
//                 {
//                   attrId: 'attr-torp-aft',
//                   value: 1,
//                   attrType: 'AttributeValueNumber'
//                 }
//               ],
//               position: '89195012d27ffff',
//               plannedTurns: [],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '891950173dbffff',
//                     '891950172afffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 3
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 3
//                   },
//                   route: [
//                     '891950173dbffff',
//                     '891950172afffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 3
//                   },
//                   route: [
//                     '891950172afffff',
//                     '891950172a3ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 3
//                   },
//                   route: [
//                     '891950172afffff',
//                     '891950172a3ffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Surface search',
//                     speedKts: 15
//                   },
//                   route: [
//                     '891950172b3ffff',
//                     '8919501704bffff',
//                     '8919501705bffff',
//                     '89195017627ffff',
//                     '89195017637ffff',
//                     '891950176afffff',
//                     '891950176a3ffff',
//                     '891950176b3ffff',
//                     '8919501744bffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Surface search',
//                     speedKts: 15
//                   },
//                   route: [
//                     '891950172b3ffff',
//                     '8919501704bffff',
//                     '8919501705bffff',
//                     '89195017627ffff',
//                     '89195017637ffff',
//                     '891950176afffff',
//                     '891950176a3ffff',
//                     '891950176b3ffff',
//                     '8919501744bffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Surface search',
//                     speedKts: 15
//                   },
//                   route: [
//                     '8919501745bffff',
//                     '89195012927ffff',
//                     '89195012937ffff',
//                     '891950129afffff',
//                     '891950129a3ffff',
//                     '891950129b3ffff',
//                     '8919508da4bffff',
//                     '8919508da5bffff',
//                     '89195012d27ffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'Surface search',
//                 speedKts: 15
//               }
//             }
//           ]
//         },
//         {
//           name: 'R2',
//           uniqid: 'force-r2',
//           overview: 'An overview written here..',
//           roles: [
//             {
//               name: 'R2-CO',
//               roleId: 'rl650dmne',
//               isGameControl: false,
//               isObserver: false,
//               isInsightViewer: false
//             }
//           ],
//           iconURL: 'http://164.92.156.58:8080/default_img/forceDefault.png',
//           color: '#d0021b',
//           umpire: false,
//           dirty: false,
//           assets: [
//             {
//               uniqid: 'al650dmnf',
//               contactId: 'C025',
//               name: 'R2',
//               platformTypeId: 'a7',
//               perceptions: [],
//               condition: 'Working',
//               attributeValues: [
//                 {
//                   attrId: 'attr-torp-ford',
//                   value: 3,
//                   attrType: 'AttributeValueNumber'
//                 },
//                 {
//                   attrId: 'attr-torp-aft',
//                   value: 1,
//                   attrType: 'AttributeValueNumber'
//                 }
//               ],
//               position: '89195012bcbffff',
//               plannedTurns: [],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '891950172dbffff',
//                     '89195010da7ffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 3
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 3
//                   },
//                   route: [
//                     '891950172dbffff',
//                     '89195010da7ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 3
//                   },
//                   route: [
//                     '89195010da7ffff',
//                     '89195010da3ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 3
//                   },
//                   route: [
//                     '89195010da7ffff',
//                     '89195010da3ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Surface search',
//                     speedKts: 15
//                   },
//                   route: [
//                     '89195010db3ffff',
//                     '8919501764bffff',
//                     '8919501765bffff',
//                     '89195012b2fffff',
//                     '89195012b2bffff',
//                     '89195012b77ffff',
//                     '89195012b73ffff',
//                     '89195012b47ffff',
//                     '89195012b43ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Surface search',
//                     speedKts: 15
//                   },
//                   route: [
//                     '89195010db3ffff',
//                     '8919501764bffff',
//                     '8919501765bffff',
//                     '89195012b2fffff',
//                     '89195012b2bffff',
//                     '89195012b77ffff',
//                     '89195012b73ffff',
//                     '89195012b47ffff',
//                     '89195012b43ffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'PD search',
//                     speedKts: 3
//                   },
//                   route: [
//                     '89195012b53ffff',
//                     '89195012bcbffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'PD search',
//                 speedKts: 3
//               }
//             }
//           ]
//         },
//         {
//           assets: [
//             {
//               attributeValues: [],
//               condition: 'Working',
//               contactId: 'C629',
//               name: 'G1',
//               perceptions: [
//                 {
//                   by: 'force-b1',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G1'
//                 },
//                 {
//                   by: 'force-b2',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G1'
//                 },
//                 {
//                   by: 'force-b3',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G1'
//                 },
//                 {
//                   by: 'force-b4',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G1'
//                 },
//                 {
//                   by: 'force-b5',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G1'
//                 }
//               ],
//               platformTypeId: 'a13',
//               uniqid: 'al63ltw3g',
//               position: '89195012ea7ffff',
//               plannedTurns: [
//                 {
//                   turn: 6,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950128d3ffff',
//                     '891950128d7ffff',
//                     '8919501288bffff',
//                     '8919501288fffff'
//                   ]
//                 }
//               ],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '8919501215bffff',
//                     '8919501214bffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501215bffff',
//                     '8919501214bffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501214bffff',
//                     '8919501214fffff',
//                     '891950123b3ffff',
//                     '891950123b7ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501214bffff',
//                     '8919501214fffff',
//                     '891950123b3ffff',
//                     '891950123b7ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950123a7ffff',
//                     '89195012ed3ffff',
//                     '89195012ed7ffff',
//                     '89195012e8bffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950123a7ffff',
//                     '89195012ed3ffff',
//                     '89195012ed7ffff',
//                     '89195012e8bffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012e8fffff',
//                     '89195012ebbffff',
//                     '89195012ea3ffff',
//                     '89195012ea7ffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'Transiting',
//                 speedKts: 6
//               }
//             },
//             {
//               attributeValues: [],
//               condition: 'Working',
//               contactId: 'C598',
//               name: 'G2',
//               perceptions: [
//                 {
//                   by: 'force-b1',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G2'
//                 },
//                 {
//                   by: 'force-b2',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G2'
//                 },
//                 {
//                   by: 'force-b3',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G2'
//                 },
//                 {
//                   by: 'force-b4',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G2'
//                 },
//                 {
//                   by: 'force-b5',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G2'
//                 },
//                 {
//                   by: 'force-r2'
//                 }
//               ],
//               platformTypeId: 'a13',
//               uniqid: 'al63ltwtw',
//               position: '89195012aabffff',
//               plannedTurns: [
//                 {
//                   turn: 6,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012aafffff',
//                     '89195012bdbffff',
//                     '89195012bc3ffff',
//                     '89195012bc7ffff'
//                   ]
//                 }
//               ],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '8919501059bffff',
//                     '89195010583ffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501059bffff',
//                     '89195010583ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010583ffff',
//                     '89195010587ffff',
//                     '8919501058fffff',
//                     '891950105bbffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010583ffff',
//                     '89195010587ffff',
//                     '8919501058fffff',
//                     '891950105bbffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950105abffff',
//                     '891950105afffff',
//                     '89195012adbffff',
//                     '89195012ac3ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950105abffff',
//                     '891950105afffff',
//                     '89195012adbffff',
//                     '89195012ac3ffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012ac7ffff',
//                     '89195012a13ffff',
//                     '89195012a17ffff',
//                     '89195012aabffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'Transiting',
//                 speedKts: 6
//               }
//             },
//             {
//               uniqid: 'al650ez1f',
//               contactId: 'C632',
//               name: 'G3',
//               platformTypeId: 'a13',
//               perceptions: [
//                 {
//                   by: 'force-b1',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G3'
//                 },
//                 {
//                   by: 'force-b2',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G3'
//                 },
//                 {
//                   by: 'force-b3',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G3'
//                 },
//                 {
//                   by: 'force-b4',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G3'
//                 },
//                 {
//                   by: 'force-b5',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G3'
//                 },
//                 {
//                   by: 'force-r2',
//                   force: 'force-green',
//                   typeId: 'a13'
//                 }
//               ],
//               condition: 'Working',
//               attributeValues: [],
//               position: '8919501280fffff',
//               plannedTurns: [
//                 {
//                   turn: 6,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501283bffff',
//                     '89195012823ffff',
//                     '89195012827ffff',
//                     '89195012953ffff'
//                   ]
//                 }
//               ],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '89195012ec3ffff',
//                     '89195012ecfffff',
//                     '89195012e1bffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012ec3ffff',
//                     '89195012ecfffff',
//                     '89195012e1bffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012e1bffff',
//                     '89195012e03ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012e1bffff',
//                     '89195012e03ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012e0fffff',
//                     '89195012e3bffff',
//                     '89195012e23ffff',
//                     '89195012e27ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012e0fffff',
//                     '89195012e3bffff',
//                     '89195012e23ffff',
//                     '89195012e27ffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012853ffff',
//                     '89195012857ffff',
//                     '8919501280bffff',
//                     '8919501280fffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'Transiting',
//                 speedKts: 6
//               }
//             },
//             {
//               uniqid: 'al650f5k2',
//               contactId: 'C404',
//               name: 'G4',
//               platformTypeId: 'a13',
//               perceptions: [
//                 {
//                   by: 'force-b2',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G4'
//                 },
//                 {
//                   by: 'force-b3',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G4'
//                 },
//                 {
//                   by: 'force-b4',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G4'
//                 },
//                 {
//                   by: 'force-b5',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G4'
//                 },
//                 {
//                   by: 'force-b1',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G4'
//                 }
//               ],
//               condition: 'Working',
//               attributeValues: [],
//               position: '891950101bbffff',
//               plannedTurns: [
//                 {
//                   turn: 6,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950101a3ffff',
//                     '891950101a7ffff',
//                     '89195010cd3ffff',
//                     '89195010cd7ffff'
//                   ]
//                 }
//               ],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '8919501042bffff',
//                     '89195010093ffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501042bffff',
//                     '89195010093ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010093ffff',
//                     '89195010097ffff',
//                     '89195010083ffff',
//                     '89195010087ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010093ffff',
//                     '89195010097ffff',
//                     '89195010083ffff',
//                     '89195010087ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950100bbffff',
//                     '891950100a3ffff',
//                     '891950100a7ffff',
//                     '891950101d3ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950100bbffff',
//                     '891950100a3ffff',
//                     '891950100a7ffff',
//                     '891950101d3ffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950101d7ffff',
//                     '8919501018bffff',
//                     '8919501018fffff',
//                     '891950101bbffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'Transiting',
//                 speedKts: 6
//               }
//             },
//             {
//               uniqid: 'al650f123',
//               contactId: 'C604',
//               name: 'G5',
//               platformTypeId: 'a13',
//               perceptions: [
//                 {
//                   by: 'force-b1',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G5'
//                 },
//                 {
//                   by: 'force-b2',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G5'
//                 },
//                 {
//                   by: 'force-b3',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G5'
//                 },
//                 {
//                   by: 'force-b4',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G5'
//                 },
//                 {
//                   by: 'force-b5',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G5'
//                 }
//               ],
//               condition: 'Working',
//               attributeValues: [],
//               position: '89195012e0fffff',
//               plannedTurns: [
//                 {
//                   turn: 6,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012e3bffff',
//                     '89195012e23ffff',
//                     '89195012e27ffff',
//                     '89195012853ffff'
//                   ]
//                 }
//               ],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '891950123c3ffff',
//                     '891950123cfffff',
//                     '8919501231bffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950123c3ffff',
//                     '891950123cfffff',
//                     '8919501231bffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501231bffff',
//                     '89195012303ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501231bffff',
//                     '89195012303ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501230fffff',
//                     '8919501233bffff',
//                     '89195012323ffff',
//                     '89195012327ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501230fffff',
//                     '8919501233bffff',
//                     '89195012323ffff',
//                     '89195012327ffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195012e53ffff',
//                     '89195012e57ffff',
//                     '89195012e0bffff',
//                     '89195012e0fffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'Transiting',
//                 speedKts: 6
//               }
//             },
//             {
//               uniqid: 'al650f456',
//               contactId: 'C914',
//               name: 'G6',
//               platformTypeId: 'a13',
//               perceptions: [
//                 {
//                   by: 'force-b3',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G6'
//                 },
//                 {
//                   by: 'force-b4',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G6'
//                 },
//                 {
//                   by: 'force-b5',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G6'
//                 },
//                 {
//                   by: 'force-b1',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G6'
//                 },
//                 {
//                   by: 'force-b2',
//                   force: 'force-green',
//                   typeId: 'a13',
//                   name: 'G6'
//                 }
//               ],
//               condition: 'Working',
//               attributeValues: [],
//               position: '8919501050fffff',
//               plannedTurns: [
//                 {
//                   turn: 6,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501053bffff',
//                     '89195010523ffff',
//                     '89195010527ffff',
//                     '89195012a53ffff'
//                   ]
//                 }
//               ],
//               history: [
//                 {
//                   turn: 2,
//                   route: [
//                     '891950104d7ffff',
//                     '891950104c7ffff'
//                   ],
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   }
//                 },
//                 {
//                   turn: 2,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '891950104d7ffff',
//                     '891950104c7ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010413ffff',
//                     '89195010403ffff'
//                   ]
//                 },
//                 {
//                   turn: 3,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010413ffff',
//                     '89195010403ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501040fffff',
//                     '8919501043bffff',
//                     '89195010423ffff',
//                     '89195010427ffff'
//                   ]
//                 },
//                 {
//                   turn: 4,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '8919501040fffff',
//                     '8919501043bffff',
//                     '89195010423ffff',
//                     '89195010427ffff'
//                   ]
//                 },
//                 {
//                   turn: 5,
//                   status: {
//                     state: 'Transiting',
//                     speedKts: 6
//                   },
//                   route: [
//                     '89195010553ffff',
//                     '89195010557ffff',
//                     '8919501050bffff',
//                     '8919501050fffff'
//                   ]
//                 }
//               ],
//               status: {
//                 state: 'Transiting',
//                 speedKts: 6
//               }
//             }
//           ],
//           color: '#33ff33',
//           dirty: false,
//           iconURL: 'http://localhost:8080/default_img/forceDefault.png',
//           name: 'Green',
//           overview: 'An overview written here..',
//           roles: [],
//           umpire: false,
//           uniqid: 'force-green'
//         }
//       ],
//       name: 'Forces',
//       selectedForce: ''
//     },
//     overview: {
//       dirty: false,
//       gameDate: '1940-07-27T13:09',
//       gameDescription: '',
//       gameTurnTime: {
//         millis: 300000,
//         unit: 'millis'
//       },
//       name: 'Overview - settings',
//       hideForcesInChannels: true,
//       realtimeTurnTime: 300000,
//       showAccessCodes: true,
//       timeWarning: 60000,
//       logPlayerActivity: true
//     },
//     platformTypes: {
//       dirty: false,
//       name: 'Platform Types',
//       platformTypes: [
//         {
//           conditions: [
//             'Working',
//             'Disabled',
//             'Mission Kill'
//           ],
//           icon: 'frigate.svg',
//           name: 'Frigate',
//           speedKts: [
//             3,
//             6,
//             9,
//             12,
//             15,
//             18,
//             21,
//             24
//           ],
//           states: [
//             {
//               mobile: true,
//               name: 'Transiting'
//             },
//             {
//               mobile: true,
//               name: 'Mixed'
//             },
//             {
//               mobile: true,
//               name: 'Active'
//             },
//             {
//               mobile: true,
//               name: 'Passive'
//             }
//           ],
//           travelMode: 'sea',
//           uniqid: 'a1',
//           turningCircle: 400,
//           attributeTypes: [
//             {
//               attrId: 'asdic-dir-fr',
//               attrType: 'AttributeTypeNumber',
//               defaultValue: 0,
//               description: 'ASDIC orientation (absolute)',
//               editableByPlayer: true,
//               name: 'ASDIC'
//             },
//             {
//               name: 'Charges',
//               attrType: 'AttributeTypeNumber',
//               attrId: 'attr-dep-fr',
//               description: 'Depth charges remaining',
//               defaultValue: 16
//             }
//           ],
//           orientation: [
//             {
//               attribute: 'asdic-dir-fr',
//               origin: 'absolute'
//             },
//             {}
//           ]
//         },
//         {
//           attributeTypes: [
//             {
//               attrId: 'asdic-dir-de',
//               attrType: 'AttributeTypeNumber',
//               defaultValue: 0,
//               description: 'ASDIC orientation (absolute)',
//               editableByPlayer: true,
//               name: 'ASDIC'
//             },
//             {
//               name: 'Charges',
//               attrType: 'AttributeTypeNumber',
//               attrId: 'attr-dep-de',
//               description: '# of Depth Charges remaining'
//             }
//           ],
//           conditions: [
//             'Working',
//             'Disabled',
//             'Mission Kill'
//           ],
//           icon: 'destroyer.svg',
//           name: 'Destroyer',
//           orientation: [
//             {
//               attribute: 'asdic-dir-de',
//               origin: 'absolute'
//             },
//             {}
//           ],
//           speedKts: [
//             3,
//             6,
//             9,
//             12,
//             15,
//             18,
//             21,
//             24,
//             27
//           ],
//           states: [
//             {
//               mobile: true,
//               name: 'Transiting'
//             },
//             {
//               mobile: false,
//               name: 'Loitering'
//             }
//           ],
//           travelMode: 'sea',
//           turningCircle: 400,
//           uniqid: 'a6'
//         },
//         {
//           attributeTypes: [
//             {
//               attrId: 'attr-torp-ford',
//               attrType: 'AttributeTypeNumber',
//               defaultValue: 4,
//               description: '# of Forward-facing Torpedoes remaining',
//               name: "For'd Torp"
//             },
//             {
//               attrId: 'attr-torp-aft',
//               attrType: 'AttributeTypeNumber',
//               defaultValue: 4,
//               description: '# of Aft-facing Torpedoes remaining',
//               name: 'Aft Torp'
//             }
//           ],
//           conditions: [
//             'Working',
//             'Disabled',
//             'Mission Kill'
//           ],
//           icon: 'ssk.svg',
//           name: 'SSK',
//           speedKts: [
//             3,
//             6,
//             9,
//             12,
//             15,
//             18,
//             21,
//             24
//           ],
//           states: [
//             {
//               mobile: true,
//               name: 'Deep transit'
//             },
//             {
//               mobile: true,
//               name: 'Deep evade'
//             },
//             {
//               mobile: true,
//               name: 'PD search'
//             },
//             {
//               mobile: true,
//               name: 'PD evade'
//             },
//             {
//               mobile: true,
//               name: 'PD launch torpedoes'
//             },
//             {
//               mobile: true,
//               name: 'Surface search'
//             },
//             {
//               mobile: true,
//               name: 'Surface attack'
//             },
//             {
//               mobile: true,
//               name: 'Surface evade'
//             }
//           ],
//           travelMode: 'sea',
//           uniqid: 'a7',
//           turningCircle: 400
//         },
//         {
//           conditions: [
//             'Working',
//             'Disabled',
//             'Mission Kill'
//           ],
//           icon: 'merchant-vessel.svg',
//           name: 'Merchant vessel',
//           speedKts: [
//             3,
//             6
//           ],
//           states: [
//             {
//               mobile: true,
//               name: 'Transiting'
//             },
//             {
//               mobile: false,
//               name: 'Moored'
//             }
//           ],
//           travelMode: 'sea',
//           uniqid: 'a13',
//           turningCircle: 400
//         }
//       ],
//       selectedType: ''
//     },
//     annotations: {
//       annotations: [
//         {
//           uniqid: 'al70ac0sf',
//           color: '#01ffff',
//           iconId: 'flsh',
//           label: 'pending label',
//           description: 'Gunfire',
//           visibleTo: [
//             'force-b1',
//             'force-b2',
//             'force-b3',
//             'force-b4',
//             'force-b5',
//             'force-r1',
//             'force-green'
//           ],
//           location: '89195010cabffff',
//           shadeRadius: 1
//         },
//         {
//           uniqid: 'al70adksl',
//           color: '#01ffff',
//           iconId: 'flsh',
//           label: 'pending label',
//           description: 'Star Shells',
//           visibleTo: [
//             'force-b1',
//             'force-b2',
//             'force-b3',
//             'force-b4',
//             'force-b5',
//             'force-r1',
//             'force-green'
//           ],
//           location: '89195012963ffff',
//           shadeRadius: 2
//         },
//         {
//           uniqid: 'al70alex2',
//           color: '#f00',
//           iconId: 'wak',
//           label: 'pending label',
//           description: 'Diving Wake',
//           visibleTo: [
//             'force-b1',
//             'force-b4'
//           ],
//           location: '89195012b43ffff'
//         }
//       ]
//     }
//   },
//   gameTurn: 6,
//   name: 'wargame-l28tfdz0',
//   phase: 'planning',
//   turnEndTime: '2022-08-19T10:58:30+01:00',
//   wargameInitiated: true,
//   wargameTitle: 'WATU Playtest',
//   messageType: 'InfoMessage'
// }
// export default wargame
