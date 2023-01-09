
import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'

export const planningMessages: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> =  [
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-22T15:47:41.086Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-6",
            "title": "Order item 6",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T04:35:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//3.105222334795144//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.9685,
                                    41.6003
                                ],
                                [
                                    57.01,
                                    23.84
                                ],
                                [
                                    38.41,
                                    5.46
                                ],
                                [
                                    38.1271,
                                    5.7845
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T02:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668394500000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//6.210444669590288//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        37.482357833583215,
                                        6.424829368811467
                                    ],
                                    [
                                        37.482357833583215,
                                        5.143444777019135
                                    ],
                                    [
                                        38.77038307518467,
                                        5.143444777019135
                                    ],
                                    [
                                        38.77038307518467,
                                        6.424829368811467
                                    ],
                                    [
                                        37.482357833583215,
                                        6.424829368811467
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route back",
                            "startDate": "2022-11-14T02:55:00.000Z",
                            "endDate": "2022-11-14T04:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394500000,
                            "endTime": 1668400500000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//9.315667004385432//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.1271,
                                    5.7845
                                ],
                                [
                                    50.48,
                                    17.35
                                ],
                                [
                                    63.07,
                                    30.15
                                ],
                                [
                                    75.95,
                                    41.24
                                ],
                                [
                                    75.9685,
                                    41.6003
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a49",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113"
                },
                {
                    "asset": "a194"
                },
                {
                    "asset": "a110"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_6",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-27T19:41:04.380Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-9",
            "title": "Order item 9",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T04:55:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Patrol-0",
                            "name": "f-red//3.8121305503746044//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.422,
                                    20.8267
                                ],
                                [
                                    58.36,
                                    27.47
                                ],
                                [
                                    53.21,
                                    35.01
                                ],
                                [
                                    49.33,
                                    41.84
                                ],
                                [
                                    44.75,
                                    47.96
                                ],
                                [
                                    44.9572,
                                    48.4589
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387300000,
                            "endTime": 1668395700000,
                            "geomId": "Patrol-1",
                            "name": "f-red//7.624261100749209//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        39.949337996296926,
                                        51.47362566597392
                                    ],
                                    [
                                        39.949337996296926,
                                        45.251744729615915
                                    ],
                                    [
                                        49.3867982923515,
                                        45.251744729615915
                                    ],
                                    [
                                        49.3867982923515,
                                        51.47362566597392
                                    ],
                                    [
                                        39.949337996296926,
                                        51.47362566597392
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route back",
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T04:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395700000,
                            "endTime": 1668401700000,
                            "geomId": "Patrol-2",
                            "name": "f-red//11.436391651123813//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.9572,
                                    48.4589
                                ],
                                [
                                    50.79,
                                    38.88
                                ],
                                [
                                    56.72,
                                    30.41
                                ],
                                [
                                    61.93,
                                    21.22
                                ],
                                [
                                    62.422,
                                    20.8267
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a141",
                    "number": 0
                },
                {
                    "asset": "a194",
                    "number": 4
                },
                {
                    "asset": "a176",
                    "number": 5
                },
                {
                    "asset": "a187",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_9",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-29T05:18:28.464Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-12",
            "title": "Order item 12",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T05:55:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//3.412459935258994//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.9685,
                                    41.6003
                                ],
                                [
                                    66.46,
                                    34.34
                                ],
                                [
                                    56.03,
                                    26.16
                                ],
                                [
                                    45.89,
                                    19.27
                                ],
                                [
                                    46.3894,
                                    18.8227
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ISTAR-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Patrol Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T02:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668394500000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//6.824919870517988//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        46.12735401324056,
                                        19.070181838206974
                                    ],
                                    [
                                        46.12735401324056,
                                        18.574853238177507
                                    ],
                                    [
                                        46.6506749079962,
                                        18.574853238177507
                                    ],
                                    [
                                        46.6506749079962,
                                        19.070181838206974
                                    ],
                                    [
                                        46.12735401324056,
                                        19.070181838206974
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ISTAR-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Observation Area",
                            "startDate": "2022-11-14T02:55:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394500000,
                            "endTime": 1668395700000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//10.237379805776982//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        44.52395356352251,
                                        20.560110152818623
                                    ],
                                    [
                                        44.52395356352251,
                                        17.067124155104747
                                    ],
                                    [
                                        48.21647436470379,
                                        17.067124155104747
                                    ],
                                    [
                                        48.21647436470379,
                                        20.560110152818623
                                    ],
                                    [
                                        44.52395356352251,
                                        20.560110152818623
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ISTAR-3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route back",
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T05:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395700000,
                            "endTime": 1668405300000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//13.649839741035976//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.3894,
                                    18.8227
                                ],
                                [
                                    56.39,
                                    26.86
                                ],
                                [
                                    66.52,
                                    34.03
                                ],
                                [
                                    75.94,
                                    41.49
                                ],
                                [
                                    75.9685,
                                    41.6003
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a87",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113"
                },
                {
                    "asset": "a194"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_12",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Air--Standard",
            "timestamp": "2022-09-26T20:39:53.339Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-15",
            "title": "Order item 15",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T05:35:00.000Z",
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-blue//6.906210489443765//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.8572,
                                    46.6821
                                ],
                                [
                                    70.69,
                                    32.07
                                ],
                                [
                                    78.84,
                                    16.76
                                ],
                                [
                                    78.6289,
                                    16.8769
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//SEAD Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T03:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668395100000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-blue//13.81242097888753//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        74.6957951938792,
                                        20.523249882351767
                                    ],
                                    [
                                        74.6957951938792,
                                        13.158427628133389
                                    ],
                                    [
                                        82.41146721306535,
                                        13.158427628133389
                                    ],
                                    [
                                        82.41146721306535,
                                        20.523249882351767
                                    ],
                                    [
                                        74.6957951938792,
                                        20.523249882351767
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route back",
                            "startDate": "2022-11-14T03:05:00.000Z",
                            "endDate": "2022-11-14T05:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395100000,
                            "endTime": 1668404100000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-blue//20.718631468331296//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.6289,
                                    16.8769
                                ],
                                [
                                    73.85,
                                    27.1
                                ],
                                [
                                    68.11,
                                    36.37
                                ],
                                [
                                    62.66,
                                    46.91
                                ],
                                [
                                    62.8572,
                                    46.6821
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a88",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113"
                },
                {
                    "asset": "a194"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_15",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Air--TST",
            "timestamp": "2022-09-29T01:45:19.005Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-18",
            "title": "Order item 18",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T03:25:00.000Z",
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-blue//4.293382212938013//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.8511,
                                    38.8471
                                ],
                                [
                                    49.19,
                                    29.49
                                ],
                                [
                                    72.88,
                                    20.48
                                ],
                                [
                                    73.1358,
                                    20.2279
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Time Sensitive Targeting (TST)-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//TST Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T01:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668387900000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-blue//8.586764425876027//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.00489624325677,
                                        22.18824911252893
                                    ],
                                    [
                                        71.00489624325677,
                                        18.24248460352278
                                    ],
                                    [
                                        75.21329833874714,
                                        18.24248460352278
                                    ],
                                    [
                                        75.21329833874714,
                                        22.18824911252893
                                    ],
                                    [
                                        71.00489624325677,
                                        22.18824911252893
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Time Sensitive Targeting (TST)-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route back",
                            "startDate": "2022-11-14T01:05:00.000Z",
                            "endDate": "2022-11-14T03:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387900000,
                            "endTime": 1668396300000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-blue//12.88014663881404//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.1358,
                                    20.2279
                                ],
                                [
                                    49.16,
                                    29.52
                                ],
                                [
                                    24.54,
                                    39.15
                                ],
                                [
                                    24.8511,
                                    38.8471
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a46",
                    "number": 5
                },
                {
                    "asset": "a55",
                    "number": 2
                },
                {
                    "asset": "a91",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113"
                },
                {
                    "asset": "a194"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_18",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "Sub-Surface",
                "roleId": "blue-sub",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--MineLaying",
            "timestamp": "2022-09-27T12:34:45.461Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-21",
            "title": "Order item 21",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T06:55:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Mine Laying-0",
                            "name": "f-blue//5.573975105719001//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.3652,
                                    35.2189
                                ],
                                [
                                    72.69,
                                    31.53
                                ],
                                [
                                    68.07,
                                    27.9
                                ],
                                [
                                    63.74,
                                    24.55
                                ],
                                [
                                    64.0048,
                                    24.2877
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Laying-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Mine Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T04:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668398700000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//11.147950211438001//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        63.09317082377142,
                                        25.110464662514133
                                    ],
                                    [
                                        63.09317082377142,
                                        23.45956751737162
                                    ],
                                    [
                                        64.9046520598512,
                                        23.45956751737162
                                    ],
                                    [
                                        64.9046520598512,
                                        25.110464662514133
                                    ],
                                    [
                                        63.09317082377142,
                                        25.110464662514133
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Laying-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route back",
                            "startDate": "2022-11-14T04:05:00.000Z",
                            "endDate": "2022-11-14T06:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668398700000,
                            "endTime": 1668408900000,
                            "geomId": "Mine Laying-2",
                            "name": "f-blue//16.721925317157//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.0048,
                                    24.2877
                                ],
                                [
                                    77.01,
                                    35.25
                                ],
                                [
                                    77.3652,
                                    35.2189
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a58",
                    "number": 2
                },
                {
                    "asset": "a52",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_21",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-22T05:08:12.707Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-24",
            "title": "Order item 24",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T00:55:00.000Z",
            "location": [
                {
                    "uniqid": "SAM MEZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SAM MEZ//SAM MEZ Location",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "SAM MEZ-0",
                            "name": "f-blue//5.747989167804917//SAM MEZ Location"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                54.4894,
                                12.8262
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-SAM MEZ",
            "ownAssets": [
                {
                    "asset": "a25",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113"
                },
                {
                    "asset": "a194"
                },
                {
                    "asset": "a110"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_24",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-29T19:25:40.744Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-27",
            "title": "Order item 27",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T00:55:00.000Z",
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Transit-0",
                            "name": "f-red//4.815424399195763//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.2644,
                                    23.7277
                                ],
                                [
                                    75.27,
                                    28.89
                                ],
                                [
                                    75.1631,
                                    29.2456
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a146",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13"
                },
                {
                    "asset": "a94"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_27",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Maritime--MineLaying",
            "timestamp": "2022-09-25T07:27:09.572Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-30",
            "title": "Order item 30",
            "startDate": "2022-11-14T00:10:00.000Z",
            "endDate": "2022-11-14T04:00:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T00:10:00.000Z",
                            "endDate": "2022-11-14T01:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668384600000,
                            "endTime": 1668387600000,
                            "geomId": "Mine Laying-0",
                            "name": "f-red//2.7762807999097276//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.1271,
                                    5.7845
                                ],
                                [
                                    49.48,
                                    20.19
                                ],
                                [
                                    61.11,
                                    33.88
                                ],
                                [
                                    72.03,
                                    47.84
                                ],
                                [
                                    72.0848,
                                    48.2226
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Laying-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Mine Area",
                            "startDate": "2022-11-14T01:00:00.000Z",
                            "endDate": "2022-11-14T01:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387600000,
                            "endTime": 1668390600000,
                            "geomId": "Mine Laying-1",
                            "name": "f-red//5.552561599819455//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        68.36312430879478,
                                        50.53005207943971
                                    ],
                                    [
                                        68.36312430879478,
                                        45.805553738267086
                                    ],
                                    [
                                        75.47815036865777,
                                        45.805553738267086
                                    ],
                                    [
                                        75.47815036865777,
                                        50.53005207943971
                                    ],
                                    [
                                        68.36312430879478,
                                        50.53005207943971
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Laying-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route back",
                            "startDate": "2022-11-14T01:50:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668390600000,
                            "endTime": 1668398400000,
                            "geomId": "Mine Laying-2",
                            "name": "f-red//8.328842399729183//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.0848,
                                    48.2226
                                ],
                                [
                                    63.96,
                                    37.52
                                ],
                                [
                                    54.63,
                                    26.6
                                ],
                                [
                                    46.58,
                                    15.97
                                ],
                                [
                                    37.81,
                                    5.62
                                ],
                                [
                                    38.1271,
                                    5.7845
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a122",
                    "number": 4
                },
                {
                    "asset": "a170",
                    "number": 5
                },
                {
                    "asset": "a147",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13"
                },
                {
                    "asset": "a94"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_30",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land--MissileStrike",
            "timestamp": "2022-09-25T09:12:39.190Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-33",
            "title": "Order item 33",
            "startDate": "2022-11-14T00:30:00.000Z",
            "endDate": "2022-11-14T00:50:00.000Z",
            "location": [],
            "activity": "f-red-Land-Strike",
            "ownAssets": [
                {
                    "asset": "a152",
                    "number": 3
                },
                {
                    "asset": "a185",
                    "number": 0
                },
                {
                    "asset": "a148",
                    "number": 1
                },
                {
                    "asset": "a139",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13"
                },
                {
                    "asset": "a94"
                },
                {
                    "asset": "a10"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_33",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-21T16:42:09.598Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-36",
            "title": "Order item 36",
            "startDate": "2022-11-14T00:45:00.000Z",
            "endDate": "2022-11-14T02:45:00.000Z",
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-11-14T00:45:00.000Z",
                            "endDate": "2022-11-14T01:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668386700000,
                            "endTime": 1668389700000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//5.378257109216065//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.7994,
                                    46.9834
                                ],
                                [
                                    60.04,
                                    37.88
                                ],
                                [
                                    65.12,
                                    27.63
                                ],
                                [
                                    69.5,
                                    18.67
                                ],
                                [
                                    74.15,
                                    8.99
                                ],
                                [
                                    73.7921,
                                    8.9579
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Resupply-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Resupply at this location",
                            "startDate": "2022-11-14T01:35:00.000Z",
                            "endDate": "2022-11-14T02:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668389700000,
                            "endTime": 1668393300000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//10.75651421843213//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        70.891379417164,
                                        11.786209248679315
                                    ],
                                    [
                                        70.891379417164,
                                        6.107357332551772
                                    ],
                                    [
                                        76.64783445671158,
                                        6.107357332551772
                                    ],
                                    [
                                        76.64783445671158,
                                        11.786209248679315
                                    ],
                                    [
                                        70.891379417164,
                                        11.786209248679315
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Resupply-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route back",
                            "startDate": "2022-11-14T02:35:00.000Z",
                            "endDate": "2022-11-14T02:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668393300000,
                            "endTime": 1668393900000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//16.134771327648195//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.7921,
                                    8.9579
                                ],
                                [
                                    67.57,
                                    21.19
                                ],
                                [
                                    61.61,
                                    34.67
                                ],
                                [
                                    55.93,
                                    47.44
                                ],
                                [
                                    55.7994,
                                    46.9834
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "a39",
                    "number": 3
                },
                {
                    "asset": "a57",
                    "number": 4
                },
                {
                    "asset": "a5",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113"
                },
                {
                    "asset": "a194"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_36",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-22T13:55:40.797Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-39",
            "title": "Order item 39",
            "startDate": "2022-11-14T00:45:00.000Z",
            "endDate": "2022-11-14T03:55:00.000Z",
            "location": [
                {
                    "uniqid": "FIAC EZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "FIAC EZ//Route out",
                            "startDate": "2022-11-14T00:45:00.000Z",
                            "endDate": "2022-11-14T01:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668386700000,
                            "endTime": 1668389700000,
                            "geomId": "FIAC EZ-0",
                            "name": "f-red//5.019377017772058//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.887,
                                    18.0587
                                ],
                                [
                                    31.48,
                                    28.11
                                ],
                                [
                                    28.29,
                                    38.39
                                ],
                                [
                                    25.39,
                                    47.96
                                ],
                                [
                                    25.2375,
                                    48.4452
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "FIAC EZ-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "FIAC EZ//FIAC EZ Location",
                            "startDate": "2022-11-14T01:35:00.000Z",
                            "endDate": "2022-11-14T03:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668389700000,
                            "endTime": 1668396300000,
                            "geomId": "FIAC EZ-1",
                            "name": "f-red//10.038754035544116//FIAC EZ Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        24.43648106675938,
                                        48.9682897024316
                                    ],
                                    [
                                        24.43648106675938,
                                        47.9166651647328
                                    ],
                                    [
                                        26.022103181027646,
                                        47.9166651647328
                                    ],
                                    [
                                        26.022103181027646,
                                        48.9682897024316
                                    ],
                                    [
                                        24.43648106675938,
                                        48.9682897024316
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "FIAC EZ-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "FIAC EZ//Route back",
                            "startDate": "2022-11-14T03:25:00.000Z",
                            "endDate": "2022-11-14T03:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396300000,
                            "endTime": 1668398100000,
                            "geomId": "FIAC EZ-2",
                            "name": "f-red//15.058131053316174//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.2375,
                                    48.4452
                                ],
                                [
                                    27.01,
                                    40.35
                                ],
                                [
                                    29.65,
                                    33.13
                                ],
                                [
                                    31.57,
                                    25.19
                                ],
                                [
                                    33.78,
                                    18.53
                                ],
                                [
                                    33.887,
                                    18.0587
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-FIAC EZ",
            "ownAssets": [
                {
                    "asset": "a178",
                    "number": 2
                },
                {
                    "asset": "a182",
                    "number": 4
                },
                {
                    "asset": "a115",
                    "number": 3
                },
                {
                    "asset": "a174",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13"
                },
                {
                    "asset": "a94"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_39",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Air--Patrol",
            "timestamp": "2022-09-28T00:53:12.787Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-42",
            "title": "Order item 42",
            "startDate": "2022-11-14T00:50:00.000Z",
            "endDate": "2022-11-14T04:30:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T00:50:00.000Z",
                            "endDate": "2022-11-14T01:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387000000,
                            "endTime": 1668390000000,
                            "geomId": "Patrol-0",
                            "name": "f-red//3.55391809566936//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    54.9734,
                                    25.4633
                                ],
                                [
                                    44.52,
                                    29.69
                                ],
                                [
                                    35.31,
                                    34.16
                                ],
                                [
                                    24.39,
                                    38.92
                                ],
                                [
                                    24.8511,
                                    38.8471
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-14T01:40:00.000Z",
                            "endDate": "2022-11-14T02:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668390000000,
                            "endTime": 1668393000000,
                            "geomId": "Patrol-1",
                            "name": "f-red//7.10783619133872//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.11687935088301,
                                        41.58229728917297
                                    ],
                                    [
                                        21.11687935088301,
                                        36.00193669657468
                                    ],
                                    [
                                        28.303425745634858,
                                        36.00193669657468
                                    ],
                                    [
                                        28.303425745634858,
                                        41.58229728917297
                                    ],
                                    [
                                        21.11687935088301,
                                        41.58229728917297
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route back",
                            "startDate": "2022-11-14T02:30:00.000Z",
                            "endDate": "2022-11-14T04:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668393000000,
                            "endTime": 1668400200000,
                            "geomId": "Patrol-2",
                            "name": "f-red//10.66175428700808//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.8511,
                                    38.8471
                                ],
                                [
                                    39.91,
                                    32.02
                                ],
                                [
                                    55.46,
                                    25.69
                                ],
                                [
                                    54.9734,
                                    25.4633
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a174",
                    "number": 0
                },
                {
                    "asset": "a163",
                    "number": 1
                },
                {
                    "asset": "a179",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_42",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Air--Standard",
            "timestamp": "2022-09-29T17:34:45.567Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-45",
            "title": "Order item 45",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T04:00:00.000Z",
            "location": [
                {
                    "uniqid": "Offensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route out",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "Offensive Counter Air-0",
                            "name": "f-blue//5.981880342907971//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.7227,
                                    52.555
                                ],
                                [
                                    83.68,
                                    18.42
                                ],
                                [
                                    83.6369,
                                    18.7797
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Offensive Counter Air-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//OCA Area",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668391200000,
                            "geomId": "Offensive Counter Air-1",
                            "name": "f-blue//11.963760685815942//OCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        82.64614763098336,
                                        19.709805348820638
                                    ],
                                    [
                                        82.64614763098336,
                                        17.8444305020378
                                    ],
                                    [
                                        84.61674428292406,
                                        17.8444305020378
                                    ],
                                    [
                                        84.61674428292406,
                                        19.709805348820638
                                    ],
                                    [
                                        82.64614763098336,
                                        19.709805348820638
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Offensive Counter Air-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route back",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668398400000,
                            "geomId": "Offensive Counter Air-2",
                            "name": "f-blue//17.945641028723912//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.6369,
                                    18.7797
                                ],
                                [
                                    80.85,
                                    35.64
                                ],
                                [
                                    77.41,
                                    52.86
                                ],
                                [
                                    77.7227,
                                    52.555
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a26",
                    "number": 5
                },
                {
                    "asset": "a97",
                    "number": 0
                },
                {
                    "asset": "a99",
                    "number": 0
                },
                {
                    "asset": "a31",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113"
                },
                {
                    "asset": "a194"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_45",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-27T16:00:19.138Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-48",
            "title": "Order item 48",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T02:00:00.000Z",
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "Transit-0",
                            "name": "f-red//2.303263759415131//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.1299,
                                    10.4371
                                ],
                                [
                                    37.22,
                                    20.79
                                ],
                                [
                                    36.17,
                                    32
                                ],
                                [
                                    34.4,
                                    42.5
                                ],
                                [
                                    32.92,
                                    52.27
                                ],
                                [
                                    33.2221,
                                    52.5939
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a131",
                    "number": 2
                },
                {
                    "asset": "a188",
                    "number": 5
                },
                {
                    "asset": "a175",
                    "number": 3
                },
                {
                    "asset": "a189",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13"
                },
                {
                    "asset": "a94"
                },
                {
                    "asset": "a10"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_48",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-21T20:09:53.499Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-51",
            "title": "Order item 51",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T02:00:00.000Z",
            "location": [
                {
                    "uniqid": "BMD MEZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "BMD MEZ//BMD MEZ Location",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "BMD MEZ-0",
                            "name": "f-blue//2.5180683452636003//BMD MEZ Location"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                74.8654,
                                23.3077
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-BMD MEZ",
            "ownAssets": [
                {
                    "asset": "a89",
                    "number": 3
                },
                {
                    "asset": "a34",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113"
                },
                {
                    "asset": "a194"
                },
                {
                    "asset": "a110"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_51",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Air--TST",
            "timestamp": "2022-09-28T22:03:28.651Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-54",
            "title": "Order item 54",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T04:40:00.000Z",
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-red//6.6262941003078595//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.4557,
                                    22.7423
                                ],
                                [
                                    55.69,
                                    27.52
                                ],
                                [
                                    55.18,
                                    32.56
                                ],
                                [
                                    52.96,
                                    37.88
                                ],
                                [
                                    53.4219,
                                    37.8153
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Time Sensitive Targeting (TST)-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//TST Area",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T04:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391200000,
                            "endTime": 1668399600000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-red//13.252588200615719//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        49.257536210555045,
                                        40.8919289271774
                                    ],
                                    [
                                        49.257536210555045,
                                        34.60397892930864
                                    ],
                                    [
                                        57.245991906437176,
                                        34.60397892930864
                                    ],
                                    [
                                        57.245991906437176,
                                        40.8919289271774
                                    ],
                                    [
                                        49.257536210555045,
                                        40.8919289271774
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Time Sensitive Targeting (TST)-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route back",
                            "startDate": "2022-11-14T04:20:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668399600000,
                            "endTime": 1668400800000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-red//19.87888230092358//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    53.4219,
                                    37.8153
                                ],
                                [
                                    55.22,
                                    30.47
                                ],
                                [
                                    57.46,
                                    22.56
                                ],
                                [
                                    57.4557,
                                    22.7423
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a107",
                    "number": 1
                },
                {
                    "asset": "a134",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13"
                },
                {
                    "asset": "a94"
                },
                {
                    "asset": "a10"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_54",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land--EWAttack",
            "timestamp": "2022-09-23T21:41:04.593Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-57",
            "title": "Order item 57",
            "startDate": "2022-11-14T01:20:00.000Z",
            "endDate": "2022-11-14T05:00:00.000Z",
            "location": [
                {
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-11-14T01:20:00.000Z",
                            "endDate": "2022-11-14T02:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388800000,
                            "endTime": 1668391800000,
                            "geomId": "EW Attack-0",
                            "name": "f-red//4.627941024693428//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.4557,
                                    22.7423
                                ],
                                [
                                    59.39,
                                    30.01
                                ],
                                [
                                    60.52,
                                    37.48
                                ],
                                [
                                    61.93,
                                    44.23
                                ],
                                [
                                    61.7725,
                                    44.6736
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "EW Attack-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//EW Area of Effect",
                            "startDate": "2022-11-14T02:10:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391800000,
                            "endTime": 1668402000000,
                            "geomId": "EW Attack-1",
                            "name": "f-red//9.255882049386855//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        57.674989316984345,
                                        47.37721802992799
                                    ],
                                    [
                                        57.674989316984345,
                                        41.83674054012451
                                    ],
                                    [
                                        65.49614189203464,
                                        41.83674054012451
                                    ],
                                    [
                                        65.49614189203464,
                                        47.37721802992799
                                    ],
                                    [
                                        57.674989316984345,
                                        47.37721802992799
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "EW Attack-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route back",
                            "startDate": "2022-11-14T05:00:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668402000000,
                            "endTime": 1668402000000,
                            "geomId": "EW Attack-2",
                            "name": "f-red//13.883823074080283//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.7725,
                                    44.6736
                                ],
                                [
                                    59.71,
                                    33.46
                                ],
                                [
                                    57.15,
                                    22.75
                                ],
                                [
                                    57.4557,
                                    22.7423
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-EW Attack",
            "ownAssets": [
                {
                    "asset": "a175",
                    "number": 1
                },
                {
                    "asset": "a188",
                    "number": 1
                },
                {
                    "asset": "a131",
                    "number": 2
                },
                {
                    "asset": "a199",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13"
                },
                {
                    "asset": "a94"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_57",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Air--Standard",
            "timestamp": "2022-09-23T11:02:41.326Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-60",
            "title": "Order item 60",
            "startDate": "2022-11-14T01:30:00.000Z",
            "endDate": "2022-11-14T07:50:00.000Z",
            "location": [
                {
                    "uniqid": "Offensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route out",
                            "startDate": "2022-11-14T01:30:00.000Z",
                            "endDate": "2022-11-14T02:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668389400000,
                            "endTime": 1668392400000,
                            "geomId": "Offensive Counter Air-0",
                            "name": "f-red//6.523009118420305//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.2612,
                                    5.7717
                                ],
                                [
                                    66.73,
                                    25.7
                                ],
                                [
                                    55.53,
                                    45.95
                                ],
                                [
                                    55.8244,
                                    45.5999
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Offensive Counter Air-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//OCA Area",
                            "startDate": "2022-11-14T02:20:00.000Z",
                            "endDate": "2022-11-14T05:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668392400000,
                            "endTime": 1668402600000,
                            "geomId": "Offensive Counter Air-1",
                            "name": "f-red//13.04601823684061//OCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        51.21536998557881,
                                        48.56069451988644
                                    ],
                                    [
                                        51.21536998557881,
                                        42.4726727015978
                                    ],
                                    [
                                        59.95907584942886,
                                        42.4726727015978
                                    ],
                                    [
                                        59.95907584942886,
                                        48.56069451988644
                                    ],
                                    [
                                        51.21536998557881,
                                        48.56069451988644
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Offensive Counter Air-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route back",
                            "startDate": "2022-11-14T05:10:00.000Z",
                            "endDate": "2022-11-14T07:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668402600000,
                            "endTime": 1668412200000,
                            "geomId": "Offensive Counter Air-2",
                            "name": "f-red//19.569027355260914//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.8244,
                                    45.5999
                                ],
                                [
                                    60.99,
                                    35.84
                                ],
                                [
                                    66.08,
                                    26
                                ],
                                [
                                    71.45,
                                    15.44
                                ],
                                [
                                    77.11,
                                    6.17
                                ],
                                [
                                    77.2612,
                                    5.7717
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a199",
                    "number": 0
                },
                {
                    "asset": "a197",
                    "number": 5
                },
                {
                    "asset": "a126",
                    "number": 2
                },
                {
                    "asset": "a179",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_60",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Other--SOFAttack",
            "timestamp": "2022-09-27T14:08:18.849Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-63",
            "title": "Order item 63",
            "startDate": "2022-11-14T01:50:00.000Z",
            "endDate": "2022-11-14T06:50:00.000Z",
            "location": [
                {
                    "uniqid": "SOF Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Route out",
                            "startDate": "2022-11-14T01:50:00.000Z",
                            "endDate": "2022-11-14T02:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668390600000,
                            "endTime": 1668393600000,
                            "geomId": "SOF Activity-0",
                            "name": "f-blue//2.311498381488491//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.6759,
                                    45.3138
                                ],
                                [
                                    34.95,
                                    34.87
                                ],
                                [
                                    25.57,
                                    24.77
                                ],
                                [
                                    25.9255,
                                    24.4289
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "SOF Activity-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Activity Location",
                            "startDate": "2022-11-14T02:40:00.000Z",
                            "endDate": "2022-11-14T03:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668393600000,
                            "endTime": 1668394800000,
                            "geomId": "SOF Activity-1",
                            "name": "f-blue//4.622996762976982//Activity Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.589861390239747,
                                        28.1895734559919
                                    ],
                                    [
                                        21.589861390239747,
                                        20.55195323909295
                                    ],
                                    [
                                        30.0061880686622,
                                        20.55195323909295
                                    ],
                                    [
                                        30.0061880686622,
                                        28.1895734559919
                                    ],
                                    [
                                        21.589861390239747,
                                        28.1895734559919
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "SOF Activity-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Effect Location",
                            "startDate": "2022-11-14T03:00:00.000Z",
                            "endDate": "2022-11-14T04:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394800000,
                            "endTime": 1668401400000,
                            "geomId": "SOF Activity-2",
                            "name": "f-blue//6.9344951444654725//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        23.79424591220306,
                                        26.32435268622503
                                    ],
                                    [
                                        23.79424591220306,
                                        22.50448688570563
                                    ],
                                    [
                                        27.99316666512485,
                                        22.50448688570563
                                    ],
                                    [
                                        27.99316666512485,
                                        26.32435268622503
                                    ],
                                    [
                                        23.79424591220306,
                                        26.32435268622503
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "SOF Activity-3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Route back",
                            "startDate": "2022-11-14T04:50:00.000Z",
                            "endDate": "2022-11-14T06:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668401400000,
                            "endTime": 1668408600000,
                            "geomId": "SOF Activity-3",
                            "name": "f-blue//9.245993525953963//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.9255,
                                    24.4289
                                ],
                                [
                                    34.49,
                                    34.41
                                ],
                                [
                                    43.36,
                                    45.7
                                ],
                                [
                                    43.6759,
                                    45.3138
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a79",
                    "number": 4
                },
                {
                    "asset": "a63",
                    "number": 3
                },
                {
                    "asset": "a74",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113"
                },
                {
                    "asset": "a194"
                },
                {
                    "asset": "a110"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_63",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Air--Patrol",
            "timestamp": "2022-09-27T22:57:57.163Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-66",
            "title": "Order item 66",
            "startDate": "2022-11-14T01:50:00.000Z",
            "endDate": "2022-11-14T06:00:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T01:50:00.000Z",
                            "endDate": "2022-11-14T02:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668390600000,
                            "endTime": 1668393600000,
                            "geomId": "Patrol-0",
                            "name": "f-red//6.993408813752467//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.6238,
                                    2.3264
                                ],
                                [
                                    44.26,
                                    17.26
                                ],
                                [
                                    26.31,
                                    32.6
                                ],
                                [
                                    25.9212,
                                    33.1019
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-14T02:40:00.000Z",
                            "endDate": "2022-11-14T04:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668393600000,
                            "endTime": 1668401400000,
                            "geomId": "Patrol-1",
                            "name": "f-red//13.986817627504934//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        24.69525780125507,
                                        34.11096700427054
                                    ],
                                    [
                                        24.69525780125507,
                                        32.081106094401065
                                    ],
                                    [
                                        27.11914936385902,
                                        32.081106094401065
                                    ],
                                    [
                                        27.11914936385902,
                                        34.11096700427054
                                    ],
                                    [
                                        24.69525780125507,
                                        34.11096700427054
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route back",
                            "startDate": "2022-11-14T04:50:00.000Z",
                            "endDate": "2022-11-14T06:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668401400000,
                            "endTime": 1668405600000,
                            "geomId": "Patrol-2",
                            "name": "f-red//20.9802264412574//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.9212,
                                    33.1019
                                ],
                                [
                                    61.15,
                                    2.44
                                ],
                                [
                                    61.6238,
                                    2.3264
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a115",
                    "number": 5
                },
                {
                    "asset": "a181",
                    "number": 1
                },
                {
                    "asset": "a178",
                    "number": 4
                },
                {
                    "asset": "a105",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_66",
        "_rev": "2"
    }]