
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
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-22T15:47:41.086Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-6",
            "title": "Order item 6",
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
                            "name": "f-blue//3.105222334795144//SAM MEZ Location"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                38.1271,
                                5.7845
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-SAM MEZ",
            "ownAssets": [
                {
                    "asset": "a19",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 0
                },
                {
                    "asset": "a194",
                    "number": 3
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-27T19:41:04.380Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-9",
            "title": "Order item 9",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T06:45:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "ISTAR-0",
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
                    "uniqid": "ISTAR-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Patrol Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387300000,
                            "endTime": 1668395700000,
                            "geomId": "ISTAR-1",
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
                    "uniqid": "ISTAR-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Observation Area",
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T04:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395700000,
                            "endTime": 1668401700000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//11.436391651123813//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        40.482126737541,
                                        51.18040563591335
                                    ],
                                    [
                                        40.482126737541,
                                        45.58186786705953
                                    ],
                                    [
                                        48.96458358900368,
                                        45.58186786705953
                                    ],
                                    [
                                        48.96458358900368,
                                        51.18040563591335
                                    ],
                                    [
                                        40.482126737541,
                                        51.18040563591335
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
                            "startDate": "2022-11-14T04:55:00.000Z",
                            "endDate": "2022-11-14T06:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668401700000,
                            "endTime": 1668408300000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//15.248522201498417//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.9572,
                                    48.4589
                                ],
                                [
                                    50.86,
                                    38.89
                                ],
                                [
                                    56.83,
                                    30.39
                                ],
                                [
                                    62.08,
                                    21.16
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
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a194",
                    "number": 3
                },
                {
                    "asset": "a176",
                    "number": 5
                },
                {
                    "asset": "a187",
                    "number": 0
                },
                {
                    "asset": "a128",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 0
                },
                {
                    "asset": "a94",
                    "number": 2
                },
                {
                    "asset": "a10",
                    "number": 0
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
            "messageType": "Land--Standard",
            "timestamp": "2022-09-29T05:18:28.464Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-12",
            "title": "Order item 12",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T03:15:00.000Z",
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Resupply-0",
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
                    "uniqid": "Resupply-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Resupply at this location",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T02:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668394500000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//6.824919870517988//Resupply at this location"
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
                    "uniqid": "Resupply-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route back",
                            "startDate": "2022-11-14T02:55:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394500000,
                            "endTime": 1668395700000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//10.237379805776982//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.3894,
                                    18.8227
                                ],
                                [
                                    61.41,
                                    30.07
                                ],
                                [
                                    75.82,
                                    41.69
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
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "a28",
                    "number": 5
                },
                {
                    "asset": "a93",
                    "number": 1
                },
                {
                    "asset": "a88",
                    "number": 1
                },
                {
                    "asset": "a15",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 3
                },
                {
                    "asset": "a194",
                    "number": 0
                },
                {
                    "asset": "a110",
                    "number": 2
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
            "messageType": "Air--Patrol",
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
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T03:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668395100000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//13.81242097888753//Patrol Area"
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
                    "uniqid": "Patrol-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route back",
                            "startDate": "2022-11-14T03:05:00.000Z",
                            "endDate": "2022-11-14T05:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395100000,
                            "endTime": 1668404100000,
                            "geomId": "Patrol-2",
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
            "activity": "f-blue-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a15",
                    "number": 5
                },
                {
                    "asset": "a65",
                    "number": 3
                },
                {
                    "asset": "a46",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 4
                },
                {
                    "asset": "a194",
                    "number": 1
                },
                {
                    "asset": "a110",
                    "number": 2
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
            "messageType": "Air--Transit",
            "timestamp": "2022-09-29T01:45:19.005Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-18",
            "title": "Order item 18",
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
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Transit-0",
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
                }
            ],
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "a55",
                    "number": 4
                },
                {
                    "asset": "a91",
                    "number": 2
                },
                {
                    "asset": "a58",
                    "number": 1
                },
                {
                    "asset": "a52",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 0
                },
                {
                    "asset": "a194",
                    "number": 2
                },
                {
                    "asset": "a110",
                    "number": 5
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
            "messageType": "Air--Standard",
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
                    "uniqid": "Defensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Defensive Counter Air//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Defensive Counter Air-0",
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
                    "uniqid": "Defensive Counter Air-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Defensive Counter Air//DCA Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T04:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668398700000,
                            "geomId": "Defensive Counter Air-1",
                            "name": "f-blue//11.147950211438001//DCA Area"
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
                    "uniqid": "Defensive Counter Air-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Defensive Counter Air//Route back",
                            "startDate": "2022-11-14T04:05:00.000Z",
                            "endDate": "2022-11-14T06:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668398700000,
                            "endTime": 1668408900000,
                            "geomId": "Defensive Counter Air-2",
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
            "activity": "f-blue-Air-Defensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a52",
                    "number": 0
                },
                {
                    "asset": "a73",
                    "number": 5
                },
                {
                    "asset": "a25",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 4
                },
                {
                    "asset": "a194",
                    "number": 4
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
            "messageType": "Air--TST",
            "timestamp": "2022-09-22T05:08:12.707Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-24",
            "title": "Order item 24",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T03:45:00.000Z",
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
                            "name": "f-blue//5.747989167804917//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    35.3611,
                                    47.2388
                                ],
                                [
                                    45.13,
                                    29.79
                                ],
                                [
                                    54.35,
                                    12.78
                                ],
                                [
                                    54.4894,
                                    12.8262
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
                            "endDate": "2022-11-14T02:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668393300000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-blue//11.495978335609834//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        50.883916378286756,
                                        16.263023488656003
                                    ],
                                    [
                                        50.883916378286756,
                                        9.34161016690073
                                    ],
                                    [
                                        57.99700983268841,
                                        9.34161016690073
                                    ],
                                    [
                                        57.99700983268841,
                                        16.263023488656003
                                    ],
                                    [
                                        50.883916378286756,
                                        16.263023488656003
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
                            "startDate": "2022-11-14T02:35:00.000Z",
                            "endDate": "2022-11-14T03:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668393300000,
                            "endTime": 1668397500000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-blue//17.24396750341475//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    54.4894,
                                    12.8262
                                ],
                                [
                                    45.33,
                                    29.67
                                ],
                                [
                                    35.57,
                                    46.92
                                ],
                                [
                                    35.3611,
                                    47.2388
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a1",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 0
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
            "messageType": "Air--ISTAR",
            "timestamp": "2022-09-29T19:25:40.744Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-27",
            "title": "Order item 27",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T06:45:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "ISTAR-0",
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
                },
                {
                    "uniqid": "ISTAR-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Patrol Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T01:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387300000,
                            "endTime": 1668388500000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//9.630848798391526//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        70.82376651852323,
                                        32.823542206912464
                                    ],
                                    [
                                        70.82376651852323,
                                        25.53717573861346
                                    ],
                                    [
                                        79.20393577391806,
                                        25.53717573861346
                                    ],
                                    [
                                        79.20393577391806,
                                        32.823542206912464
                                    ],
                                    [
                                        70.82376651852323,
                                        32.823542206912464
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
                            "startDate": "2022-11-14T01:15:00.000Z",
                            "endDate": "2022-11-14T03:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388500000,
                            "endTime": 1668396900000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//14.446273197587288//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.95503060095432,
                                        31.930585821494358
                                    ],
                                    [
                                        71.95503060095432,
                                        26.488004268100603
                                    ],
                                    [
                                        78.20491747262896,
                                        26.488004268100603
                                    ],
                                    [
                                        78.20491747262896,
                                        31.930585821494358
                                    ],
                                    [
                                        71.95503060095432,
                                        31.930585821494358
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
                            "startDate": "2022-11-14T03:35:00.000Z",
                            "endDate": "2022-11-14T06:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396900000,
                            "endTime": 1668408300000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//19.26169759678305//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.1631,
                                    29.2456
                                ],
                                [
                                    52.31,
                                    26.1
                                ],
                                [
                                    29.78,
                                    23.28
                                ],
                                [
                                    30.2644,
                                    23.7277
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-ISTAR",
            "ownAssets": [
                {
                    "asset": "a110",
                    "number": 3
                },
                {
                    "asset": "a200",
                    "number": 4
                },
                {
                    "asset": "a122",
                    "number": 1
                },
                {
                    "asset": "a170",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 0
                },
                {
                    "asset": "a94",
                    "number": 0
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-25T07:27:09.572Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-30",
            "title": "Order item 30",
            "startDate": "2022-11-14T00:10:00.000Z",
            "endDate": "2022-11-14T05:40:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-14T00:10:00.000Z",
                            "endDate": "2022-11-14T01:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668384600000,
                            "endTime": 1668387600000,
                            "geomId": "ISTAR-0",
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
                    "uniqid": "ISTAR-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Patrol Area",
                            "startDate": "2022-11-14T01:00:00.000Z",
                            "endDate": "2022-11-14T01:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387600000,
                            "endTime": 1668390600000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//5.552561599819455//Patrol Area"
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
                    "uniqid": "ISTAR-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Observation Area",
                            "startDate": "2022-11-14T01:50:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668390600000,
                            "endTime": 1668398400000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//8.328842399729183//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        65.58258613687688,
                                        52.046800991696976
                                    ],
                                    [
                                        65.58258613687688,
                                        44.08400292840032
                                    ],
                                    [
                                        77.64871740266314,
                                        44.08400292840032
                                    ],
                                    [
                                        77.64871740266314,
                                        52.046800991696976
                                    ],
                                    [
                                        65.58258613687688,
                                        52.046800991696976
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
                            "startDate": "2022-11-14T04:00:00.000Z",
                            "endDate": "2022-11-14T05:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668398400000,
                            "endTime": 1668404400000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//11.10512319963891//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.0848,
                                    48.2226
                                ],
                                [
                                    54.69,
                                    27.37
                                ],
                                [
                                    37.75,
                                    5.97
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
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a170",
                    "number": 4
                },
                {
                    "asset": "a147",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 5
                },
                {
                    "asset": "a94",
                    "number": 4
                },
                {
                    "asset": "a10",
                    "number": 5
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
            "messageType": "Other--SOFAttack",
            "timestamp": "2022-09-25T09:12:39.190Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-33",
            "title": "Order item 33",
            "startDate": "2022-11-14T00:30:00.000Z",
            "endDate": "2022-11-14T05:00:00.000Z",
            "location": [
                {
                    "uniqid": "SOF Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Route out",
                            "startDate": "2022-11-14T00:30:00.000Z",
                            "endDate": "2022-11-14T01:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668385800000,
                            "endTime": 1668388800000,
                            "geomId": "SOF Activity-0",
                            "name": "f-red//4.630558369892242//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.744,
                                    15.7441
                                ],
                                [
                                    53.24,
                                    23.19
                                ],
                                [
                                    62.91,
                                    29.81
                                ],
                                [
                                    71.86,
                                    36.71
                                ],
                                [
                                    71.8966,
                                    36.8923
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
                            "startDate": "2022-11-14T01:20:00.000Z",
                            "endDate": "2022-11-14T01:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388800000,
                            "endTime": 1668388800000,
                            "geomId": "SOF Activity-1",
                            "name": "f-red//9.261116739784484//Activity Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        70.63855414476727,
                                        37.8787158234188
                                    ],
                                    [
                                        70.63855414476727,
                                        35.89296212919037
                                    ],
                                    [
                                        73.12233778818258,
                                        35.89296212919037
                                    ],
                                    [
                                        73.12233778818258,
                                        37.8787158234188
                                    ],
                                    [
                                        70.63855414476727,
                                        37.8787158234188
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
                            "startDate": "2022-11-14T01:20:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388800000,
                            "endTime": 1668394200000,
                            "geomId": "SOF Activity-2",
                            "name": "f-red//13.891675109676726//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        67.12800021270222,
                                        40.42960470895078
                                    ],
                                    [
                                        67.12800021270222,
                                        33.18162067695983
                                    ],
                                    [
                                        76.23281122335715,
                                        33.18162067695983
                                    ],
                                    [
                                        76.23281122335715,
                                        40.42960470895078
                                    ],
                                    [
                                        67.12800021270222,
                                        40.42960470895078
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668394200000,
                            "endTime": 1668402000000,
                            "geomId": "SOF Activity-3",
                            "name": "f-red//18.522233479568968//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    71.8966,
                                    36.8923
                                ],
                                [
                                    57.76,
                                    26.41
                                ],
                                [
                                    44.03,
                                    15.33
                                ],
                                [
                                    43.744,
                                    15.7441
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a185",
                    "number": 0
                },
                {
                    "asset": "a148",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 1
                },
                {
                    "asset": "a94",
                    "number": 2
                },
                {
                    "asset": "a10",
                    "number": 2
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
            "messageType": "Maritime--MineLaying",
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
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T00:45:00.000Z",
                            "endDate": "2022-11-14T01:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668386700000,
                            "endTime": 1668389700000,
                            "geomId": "Mine Laying-0",
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
                    "uniqid": "Mine Laying-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Mine Area",
                            "startDate": "2022-11-14T01:35:00.000Z",
                            "endDate": "2022-11-14T02:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668389700000,
                            "endTime": 1668393300000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//10.75651421843213//Mine Area"
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
                    "uniqid": "Mine Laying-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route back",
                            "startDate": "2022-11-14T02:35:00.000Z",
                            "endDate": "2022-11-14T02:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668393300000,
                            "endTime": 1668393900000,
                            "geomId": "Mine Laying-2",
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
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a57",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 1
                },
                {
                    "asset": "a194",
                    "number": 2
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
            "messageType": "Maritime--Patrol",
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T00:45:00.000Z",
                            "endDate": "2022-11-14T01:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668386700000,
                            "endTime": 1668389700000,
                            "geomId": "Patrol-0",
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
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-14T01:35:00.000Z",
                            "endDate": "2022-11-14T03:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668389700000,
                            "endTime": 1668396300000,
                            "geomId": "Patrol-1",
                            "name": "f-red//10.038754035544116//Patrol Area"
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
                    "uniqid": "Patrol-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route back",
                            "startDate": "2022-11-14T03:25:00.000Z",
                            "endDate": "2022-11-14T03:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396300000,
                            "endTime": 1668398100000,
                            "geomId": "Patrol-2",
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
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a182",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 2
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
            "messageType": "Land--Standard",
            "timestamp": "2022-09-28T00:53:12.787Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-42",
            "title": "Order item 42",
            "startDate": "2022-11-14T00:50:00.000Z",
            "endDate": "2022-11-14T01:40:00.000Z",
            "location": [
                {
                    "uniqid": "BMD MEZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "BMD MEZ//BMD MEZ Location",
                            "startDate": "2022-11-14T00:50:00.000Z",
                            "endDate": "2022-11-14T01:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387000000,
                            "endTime": 1668390000000,
                            "geomId": "BMD MEZ-0",
                            "name": "f-red//3.55391809566936//BMD MEZ Location"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                24.8511,
                                38.8471
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-BMD MEZ",
            "ownAssets": [
                {
                    "asset": "a163",
                    "number": 5
                },
                {
                    "asset": "a179",
                    "number": 4
                },
                {
                    "asset": "a126",
                    "number": 3
                },
                {
                    "asset": "a197",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 3
                },
                {
                    "asset": "a94",
                    "number": 4
                },
                {
                    "asset": "a10",
                    "number": 1
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
            "messageType": "Land--Patrol",
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "Patrol-0",
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
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668391200000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//11.963760685815942//Patrol Area"
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
                    "uniqid": "Patrol-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route back",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668398400000,
                            "geomId": "Patrol-2",
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
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a97",
                    "number": 1
                },
                {
                    "asset": "a99",
                    "number": 5
                },
                {
                    "asset": "a31",
                    "number": 1
                },
                {
                    "asset": "a88",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 0
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
            "messageType": "Air--Patrol",
            "timestamp": "2022-09-27T16:00:19.138Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-48",
            "title": "Order item 48",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T07:00:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "Patrol-0",
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
                },
                {
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391200000,
                            "endTime": 1668400800000,
                            "geomId": "Patrol-1",
                            "name": "f-red//4.606527518830262//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.782978229337115,
                                        54.002951895309394
                                    ],
                                    [
                                        30.782978229337115,
                                        51.13789767603818
                                    ],
                                    [
                                        35.506790801545634,
                                        51.13789767603818
                                    ],
                                    [
                                        35.506790801545634,
                                        54.002951895309394
                                    ],
                                    [
                                        30.782978229337115,
                                        54.002951895309394
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
                            "startDate": "2022-11-14T04:40:00.000Z",
                            "endDate": "2022-11-14T07:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668400800000,
                            "endTime": 1668409200000,
                            "geomId": "Patrol-2",
                            "name": "f-red//6.909791278245393//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.2221,
                                    52.5939
                                ],
                                [
                                    35.44,
                                    31.55
                                ],
                                [
                                    38.18,
                                    10.03
                                ],
                                [
                                    38.1299,
                                    10.4371
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a188",
                    "number": 2
                },
                {
                    "asset": "a175",
                    "number": 5
                },
                {
                    "asset": "a189",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 4
                },
                {
                    "asset": "a94",
                    "number": 5
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
            "messageType": "Other--SOFAttack",
            "timestamp": "2022-09-21T20:09:53.499Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-51",
            "title": "Order item 51",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T06:30:00.000Z",
            "location": [
                {
                    "uniqid": "SOF Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Route out",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "SOF Activity-0",
                            "name": "f-blue//2.5180683452636003//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.9346,
                                    35.0988
                                ],
                                [
                                    75.48,
                                    32.49
                                ],
                                [
                                    75.87,
                                    28.73
                                ],
                                [
                                    75.55,
                                    26.26
                                ],
                                [
                                    74.51,
                                    23.07
                                ],
                                [
                                    74.8654,
                                    23.3077
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
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668396600000,
                            "geomId": "SOF Activity-1",
                            "name": "f-blue//5.036136690527201//Activity Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.9157316178758,
                                        25.93308889389563
                                    ],
                                    [
                                        71.9157316178758,
                                        20.629289681379902
                                    ],
                                    [
                                        77.69969928068785,
                                        20.629289681379902
                                    ],
                                    [
                                        77.69969928068785,
                                        25.93308889389563
                                    ],
                                    [
                                        71.9157316178758,
                                        25.93308889389563
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T05:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668396600000,
                            "endTime": 1668402600000,
                            "geomId": "SOF Activity-2",
                            "name": "f-blue//7.554205035790801//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        72.72502378289873,
                                        25.229503128969892
                                    ],
                                    [
                                        72.72502378289873,
                                        21.357676122903207
                                    ],
                                    [
                                        76.94434677571601,
                                        21.357676122903207
                                    ],
                                    [
                                        76.94434677571601,
                                        25.229503128969892
                                    ],
                                    [
                                        72.72502378289873,
                                        25.229503128969892
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
                            "startDate": "2022-11-14T05:10:00.000Z",
                            "endDate": "2022-11-14T06:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668402600000,
                            "endTime": 1668407400000,
                            "geomId": "SOF Activity-3",
                            "name": "f-blue//10.072273381054401//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.8654,
                                    23.3077
                                ],
                                [
                                    75.82,
                                    28.86
                                ],
                                [
                                    76.15,
                                    34.8
                                ],
                                [
                                    75.9346,
                                    35.0988
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a34",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 1
                },
                {
                    "asset": "a194",
                    "number": 4
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
            "messageType": "Air--Standard",
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
                    "uniqid": "Offensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route out",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "Offensive Counter Air-0",
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
                    "uniqid": "Offensive Counter Air-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//OCA Area",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T04:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391200000,
                            "endTime": 1668399600000,
                            "geomId": "Offensive Counter Air-1",
                            "name": "f-red//13.252588200615719//OCA Area"
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
                    "uniqid": "Offensive Counter Air-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route back",
                            "startDate": "2022-11-14T04:20:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668399600000,
                            "endTime": 1668400800000,
                            "geomId": "Offensive Counter Air-2",
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
            "activity": "f-red-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a134",
                    "number": 1
                },
                {
                    "asset": "a189",
                    "number": 2
                },
                {
                    "asset": "a175",
                    "number": 4
                },
                {
                    "asset": "a188",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 0
                },
                {
                    "asset": "a94",
                    "number": 2
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
                    "asset": "a188",
                    "number": 3
                },
                {
                    "asset": "a131",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 5
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
            "messageType": "Air--TST",
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
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-11-14T01:30:00.000Z",
                            "endDate": "2022-11-14T02:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668389400000,
                            "endTime": 1668392400000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
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
                    "uniqid": "Time Sensitive Targeting (TST)-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//TST Area",
                            "startDate": "2022-11-14T02:20:00.000Z",
                            "endDate": "2022-11-14T05:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668392400000,
                            "endTime": 1668402600000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-red//13.04601823684061//TST Area"
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
                    "uniqid": "Time Sensitive Targeting (TST)-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route back",
                            "startDate": "2022-11-14T05:10:00.000Z",
                            "endDate": "2022-11-14T07:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668402600000,
                            "endTime": 1668412200000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
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
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a197",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 4
                },
                {
                    "asset": "a94",
                    "number": 0
                },
                {
                    "asset": "a10",
                    "number": 3
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
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-27T14:08:18.849Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-63",
            "title": "Order item 63",
            "startDate": "2022-11-14T01:50:00.000Z",
            "endDate": "2022-11-14T02:40:00.000Z",
            "location": [
                {
                    "uniqid": "BMD MEZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "BMD MEZ//BMD MEZ Location",
                            "startDate": "2022-11-14T01:50:00.000Z",
                            "endDate": "2022-11-14T02:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668390600000,
                            "endTime": 1668393600000,
                            "geomId": "BMD MEZ-0",
                            "name": "f-blue//2.311498381488491//BMD MEZ Location"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                25.9255,
                                24.4289
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-BMD MEZ",
            "ownAssets": [
                {
                    "asset": "a63",
                    "number": 5
                },
                {
                    "asset": "a74",
                    "number": 1
                },
                {
                    "asset": "a15",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 4
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
            "messageType": "Land--Transit",
            "timestamp": "2022-09-27T22:57:57.163Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-66",
            "title": "Order item 66",
            "startDate": "2022-11-14T01:50:00.000Z",
            "endDate": "2022-11-14T02:40:00.000Z",
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-11-14T01:50:00.000Z",
                            "endDate": "2022-11-14T02:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668390600000,
                            "endTime": 1668393600000,
                            "geomId": "Transit-0",
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
                }
            ],
            "activity": "f-red-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a181",
                    "number": 0
                },
                {
                    "asset": "a178",
                    "number": 5
                },
                {
                    "asset": "a105",
                    "number": 0
                },
                {
                    "asset": "a157",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 0
                },
                {
                    "asset": "a94",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_66",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Air--Standard",
            "timestamp": "2022-09-24T13:31:36.267Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-69",
            "title": "Order item 69",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T07:40:00.000Z",
            "location": [
                {
                    "uniqid": "Offensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Offensive Counter Air-0",
                            "name": "f-blue//5.568740415357752//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.1226,
                                    29.0889
                                ],
                                [
                                    27.99,
                                    18.72
                                ],
                                [
                                    30.35,
                                    8.84
                                ],
                                [
                                    30.7051,
                                    8.7577
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T04:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394200000,
                            "endTime": 1668401400000,
                            "geomId": "Offensive Counter Air-1",
                            "name": "f-blue//11.137480830715504//OCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        28.240169031807238,
                                        11.167999874843773
                                    ],
                                    [
                                        28.240169031807238,
                                        6.331650771740116
                                    ],
                                    [
                                        33.138175916427414,
                                        6.331650771740116
                                    ],
                                    [
                                        33.138175916427414,
                                        11.167999874843773
                                    ],
                                    [
                                        28.240169031807238,
                                        11.167999874843773
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
                            "startDate": "2022-11-14T04:50:00.000Z",
                            "endDate": "2022-11-14T07:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668401400000,
                            "endTime": 1668411600000,
                            "geomId": "Offensive Counter Air-2",
                            "name": "f-blue//16.706221246073255//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.7051,
                                    8.7577
                                ],
                                [
                                    24.8,
                                    28.97
                                ],
                                [
                                    25.1226,
                                    29.0889
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a57",
                    "number": 2
                },
                {
                    "asset": "a39",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 5
                },
                {
                    "asset": "a194",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_69",
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
            "messageType": "Air--Patrol",
            "timestamp": "2022-09-25T17:49:16.162Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-72",
            "title": "Order item 72",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T07:30:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//3.0374931863043457//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.8611,
                                    52.3468
                                ],
                                [
                                    49.1,
                                    38.94
                                ],
                                [
                                    39.53,
                                    24.74
                                ],
                                [
                                    29.25,
                                    10.82
                                ],
                                [
                                    29.6036,
                                    10.755
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394200000,
                            "endTime": 1668400800000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//6.0749863726086915//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        26.060604085593276,
                                        14.170211789768697
                                    ],
                                    [
                                        26.060604085593276,
                                        7.300537036145913
                                    ],
                                    [
                                        33.06676979281018,
                                        7.300537036145913
                                    ],
                                    [
                                        33.06676979281018,
                                        14.170211789768697
                                    ],
                                    [
                                        26.060604085593276,
                                        14.170211789768697
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
                            "startDate": "2022-11-14T04:40:00.000Z",
                            "endDate": "2022-11-14T07:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668400800000,
                            "endTime": 1668411000000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//9.112479558913037//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    29.6036,
                                    10.755
                                ],
                                [
                                    39.7,
                                    24.66
                                ],
                                [
                                    49.02,
                                    38.8
                                ],
                                [
                                    58.63,
                                    52.22
                                ],
                                [
                                    58.8611,
                                    52.3468
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a85",
                    "number": 1
                },
                {
                    "asset": "a52",
                    "number": 4
                },
                {
                    "asset": "a47",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 2
                },
                {
                    "asset": "a194",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_72",
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
            "timestamp": "2022-09-23T03:50:56.847Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-75",
            "title": "Order item 75",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T07:10:00.000Z",
            "location": [
                {
                    "uniqid": "FIAC EZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "FIAC EZ//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "FIAC EZ-0",
                            "name": "f-blue//4.399667126592249//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.7994,
                                    46.9834
                                ],
                                [
                                    62.05,
                                    39.29
                                ],
                                [
                                    68.36,
                                    32.66
                                ],
                                [
                                    73.96,
                                    25.31
                                ],
                                [
                                    74.4443,
                                    24.8222
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394200000,
                            "endTime": 1668402000000,
                            "geomId": "FIAC EZ-1",
                            "name": "f-blue//8.799334253184497//FIAC EZ Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        72.64206000278001,
                                        26.425419895430927
                                    ],
                                    [
                                        72.64206000278001,
                                        23.19793576207272
                                    ],
                                    [
                                        76.20018226607286,
                                        23.19793576207272
                                    ],
                                    [
                                        76.20018226607286,
                                        26.425419895430927
                                    ],
                                    [
                                        72.64206000278001,
                                        26.425419895430927
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
                            "startDate": "2022-11-14T05:00:00.000Z",
                            "endDate": "2022-11-14T07:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668402000000,
                            "endTime": 1668409800000,
                            "geomId": "FIAC EZ-2",
                            "name": "f-blue//13.199001379776746//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.4443,
                                    24.8222
                                ],
                                [
                                    65.32,
                                    35.85
                                ],
                                [
                                    55.55,
                                    47.23
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
            "activity": "f-blue-Maritime-FIAC EZ",
            "ownAssets": [
                {
                    "asset": "a69",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_75",
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
            "timestamp": "2022-09-25T03:36:38.323Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-78",
            "title": "Order item 78",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T05:40:00.000Z",
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//4.6552622360759415//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    68.6616,
                                    34.322
                                ],
                                [
                                    52.64,
                                    30.19
                                ],
                                [
                                    36.03,
                                    26.46
                                ],
                                [
                                    36.3493,
                                    26.2476
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T03:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394200000,
                            "endTime": 1668397800000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//9.310524472151883//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        35.3650792946476,
                                        27.12027045010244
                                    ],
                                    [
                                        35.3650792946476,
                                        25.368323762917655
                                    ],
                                    [
                                        37.31879178683946,
                                        25.368323762917655
                                    ],
                                    [
                                        37.31879178683946,
                                        27.12027045010244
                                    ],
                                    [
                                        35.3650792946476,
                                        27.12027045010244
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
                            "startDate": "2022-11-14T03:50:00.000Z",
                            "endDate": "2022-11-14T05:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668397800000,
                            "endTime": 1668404400000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//13.965786708227824//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.3493,
                                    26.2476
                                ],
                                [
                                    52.56,
                                    30.13
                                ],
                                [
                                    68.25,
                                    34.48
                                ],
                                [
                                    68.6616,
                                    34.322
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "a10",
                    "number": 5
                },
                {
                    "asset": "a45",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 2
                },
                {
                    "asset": "a194",
                    "number": 0
                },
                {
                    "asset": "a110",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_78",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land--MissileStrike",
            "timestamp": "2022-09-26T04:20:03.647Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-84",
            "title": "Order item 84",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T03:00:00.000Z",
            "location": [],
            "activity": "f-blue-Land-Strike",
            "ownAssets": [
                {
                    "asset": "a1",
                    "number": 4,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 5,
                    "missileType": "SRBM"
                },
                {
                    "asset": "a194",
                    "number": 3,
                    "missileType": "SRBM"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_84",
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
            "messageType": "Maritime--MineLaying",
            "timestamp": "2022-09-26T04:20:03.647Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-84",
            "title": "Order item 84",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T06:20:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Mine Laying-0",
                            "name": "f-red//6.846715963212773//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.2644,
                                    23.7277
                                ],
                                [
                                    60.11,
                                    48.27
                                ],
                                [
                                    59.9782,
                                    47.9796
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T04:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668394200000,
                            "endTime": 1668401400000,
                            "geomId": "Mine Laying-1",
                            "name": "f-red//13.693431926425546//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        55.7596802113084,
                                        50.58342012596283
                                    ],
                                    [
                                        55.7596802113084,
                                        45.236397428487
                                    ],
                                    [
                                        63.78134778099344,
                                        45.236397428487
                                    ],
                                    [
                                        63.78134778099344,
                                        50.58342012596283
                                    ],
                                    [
                                        55.7596802113084,
                                        50.58342012596283
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
                            "startDate": "2022-11-14T04:50:00.000Z",
                            "endDate": "2022-11-14T06:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668401400000,
                            "endTime": 1668406800000,
                            "geomId": "Mine Laying-2",
                            "name": "f-red//20.54014788963832//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.9782,
                                    47.9796
                                ],
                                [
                                    49.93,
                                    39.7
                                ],
                                [
                                    39.98,
                                    31.52
                                ],
                                [
                                    30.31,
                                    23.61
                                ],
                                [
                                    30.2644,
                                    23.7277
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a151",
                    "number": 1
                },
                {
                    "asset": "a157",
                    "number": 3
                },
                {
                    "asset": "a191",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 4
                },
                {
                    "asset": "a94",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_84",
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
            "messageType": "Land--Transit",
            "timestamp": "2022-09-25T05:17:47.494Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-87",
            "title": "Order item 87",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T02:50:00.000Z",
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Transit-0",
                            "name": "f-blue//3.782574580574874//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.4866,
                                    41.9922
                                ],
                                [
                                    36.66,
                                    34.09
                                ],
                                [
                                    35.04,
                                    26.38
                                ],
                                [
                                    33.7,
                                    17.96
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
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a55",
                    "number": 3
                },
                {
                    "asset": "a46",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 1
                },
                {
                    "asset": "a194",
                    "number": 2
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_87",
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
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-28T19:59:32.132Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-90",
            "title": "Order item 90",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T02:50:00.000Z",
            "location": [
                {
                    "uniqid": "Sea Denial-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Sea Denial//Sea Denial Area",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Sea Denial-0",
                            "name": "f-red//4.611854367132764//Sea Denial Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        57.3377563252471,
                                        35.7665186652281
                                    ],
                                    [
                                        57.3377563252471,
                                        28.917804737714146
                                    ],
                                    [
                                        65.47809212991741,
                                        28.917804737714146
                                    ],
                                    [
                                        65.47809212991741,
                                        35.7665186652281
                                    ],
                                    [
                                        57.3377563252471,
                                        35.7665186652281
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Sea Denial",
            "ownAssets": [
                {
                    "asset": "a114",
                    "number": 0
                },
                {
                    "asset": "a188",
                    "number": 2
                },
                {
                    "asset": "a193",
                    "number": 4
                },
                {
                    "asset": "a127",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 1
                },
                {
                    "asset": "a94",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_90",
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
            "messageType": "Maritime--MineLaying",
            "timestamp": "2022-09-28T16:25:17.560Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-93",
            "title": "Order item 93",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T04:10:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Mine Laying-0",
                            "name": "f-blue//4.334555323177483//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.9494,
                                    46.5838
                                ],
                                [
                                    45.39,
                                    36.58
                                ],
                                [
                                    55.72,
                                    26.47
                                ],
                                [
                                    66.34,
                                    15.64
                                ],
                                [
                                    77.24,
                                    6.09
                                ],
                                [
                                    77.2612,
                                    5.7717
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394200000,
                            "endTime": 1668396600000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//8.669110646354966//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        75.9166680693598,
                                        7.104332872471984
                                    ],
                                    [
                                        75.9166680693598,
                                        4.4359252048703715
                                    ],
                                    [
                                        78.59941694995024,
                                        4.4359252048703715
                                    ],
                                    [
                                        78.59941694995024,
                                        7.104332872471984
                                    ],
                                    [
                                        75.9166680693598,
                                        7.104332872471984
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T04:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668396600000,
                            "endTime": 1668399000000,
                            "geomId": "Mine Laying-2",
                            "name": "f-blue//13.003665969532449//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.2612,
                                    5.7717
                                ],
                                [
                                    66.22,
                                    15.69
                                ],
                                [
                                    55.98,
                                    26.4
                                ],
                                [
                                    45.03,
                                    36.4
                                ],
                                [
                                    35.35,
                                    46.68
                                ],
                                [
                                    34.9494,
                                    46.5838
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a27",
                    "number": 1
                },
                {
                    "asset": "a87",
                    "number": 5
                },
                {
                    "asset": "a76",
                    "number": 4
                },
                {
                    "asset": "a93",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_93",
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-24T18:35:03.780Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-96",
            "title": "Order item 96",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T08:30:00.000Z",
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//2.9506774487090297//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.4333,
                                    15.8118
                                ],
                                [
                                    40.29,
                                    27.05
                                ],
                                [
                                    43.43,
                                    37.56
                                ],
                                [
                                    45.85,
                                    48.37
                                ],
                                [
                                    45.9136,
                                    48.7648
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668394200000,
                            "endTime": 1668403200000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//5.901354897418059//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.39861993360261,
                                        50.92830146065154
                                    ],
                                    [
                                        42.39861993360261,
                                        46.503362135573035
                                    ],
                                    [
                                        49.131966828621465,
                                        46.503362135573035
                                    ],
                                    [
                                        49.131966828621465,
                                        50.92830146065154
                                    ],
                                    [
                                        42.39861993360261,
                                        50.92830146065154
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
                            "startDate": "2022-11-14T05:20:00.000Z",
                            "endDate": "2022-11-14T08:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668403200000,
                            "endTime": 1668414600000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//8.85203234612709//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.9136,
                                    48.7648
                                ],
                                [
                                    41.51,
                                    32.47
                                ],
                                [
                                    37.53,
                                    15.58
                                ],
                                [
                                    37.4333,
                                    15.8118
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a193",
                    "number": 0
                },
                {
                    "asset": "a141",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 1
                },
                {
                    "asset": "a94",
                    "number": 4
                },
                {
                    "asset": "a10",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_96",
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-25T10:28:50.789Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-99",
            "title": "Order item 99",
            "startDate": "2022-11-14T02:10:00.000Z",
            "endDate": "2022-11-14T04:40:00.000Z",
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-11-14T02:10:00.000Z",
                            "endDate": "2022-11-14T03:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391800000,
                            "endTime": 1668394800000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//5.460220743145328//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.6289,
                                    16.8769
                                ],
                                [
                                    70.29,
                                    23.84
                                ],
                                [
                                    61.94,
                                    30.79
                                ],
                                [
                                    53.87,
                                    38.02
                                ],
                                [
                                    45.08,
                                    44.54
                                ],
                                [
                                    45.558,
                                    44.9461
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
                            "startDate": "2022-11-14T03:00:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668394800000,
                            "endTime": 1668396600000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//10.920441486290656//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        44.91640712691972,
                                        45.394850615489396
                                    ],
                                    [
                                        44.91640712691972,
                                        44.49381301589925
                                    ],
                                    [
                                        46.18960052465296,
                                        44.49381301589925
                                    ],
                                    [
                                        46.18960052465296,
                                        45.394850615489396
                                    ],
                                    [
                                        44.91640712691972,
                                        45.394850615489396
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396600000,
                            "endTime": 1668400800000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//16.380662229435984//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.558,
                                    44.9461
                                ],
                                [
                                    78.79,
                                    17.1
                                ],
                                [
                                    78.6289,
                                    16.8769
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a119",
                    "number": 4
                },
                {
                    "asset": "a149",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_99",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-22T08:06:38.589Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-102",
            "title": "Order item 102",
            "startDate": "2022-11-14T02:20:00.000Z",
            "endDate": "2022-11-14T07:50:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-14T02:20:00.000Z",
                            "endDate": "2022-11-14T03:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668392400000,
                            "endTime": 1668395400000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//6.863185207359493//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.5841,
                                    47.039
                                ],
                                [
                                    76.39,
                                    33.26
                                ],
                                [
                                    78.34,
                                    20.62
                                ],
                                [
                                    80.58,
                                    7.27
                                ],
                                [
                                    80.1217,
                                    6.8957
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
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T05:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395400000,
                            "endTime": 1668403800000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//13.726370414718986//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        77.63345201014596,
                                        9.34450258423311
                                    ],
                                    [
                                        77.63345201014596,
                                        4.434151995548659
                                    ],
                                    [
                                        82.58428373951416,
                                        4.434151995548659
                                    ],
                                    [
                                        82.58428373951416,
                                        9.34450258423311
                                    ],
                                    [
                                        77.63345201014596,
                                        9.34450258423311
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
                            "startDate": "2022-11-14T05:30:00.000Z",
                            "endDate": "2022-11-14T06:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668403800000,
                            "endTime": 1668405600000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//20.58955562207848//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        77.54009015305408,
                                        9.435465702353456
                                    ],
                                    [
                                        77.54009015305408,
                                        4.34221993776343
                                    ],
                                    [
                                        82.67569554244457,
                                        4.34221993776343
                                    ],
                                    [
                                        82.67569554244457,
                                        9.435465702353456
                                    ],
                                    [
                                        77.54009015305408,
                                        9.435465702353456
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
                            "startDate": "2022-11-14T06:00:00.000Z",
                            "endDate": "2022-11-14T07:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668405600000,
                            "endTime": 1668412200000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//27.45274082943797//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    80.1217,
                                    6.8957
                                ],
                                [
                                    78.29,
                                    19.97
                                ],
                                [
                                    76.53,
                                    34.12
                                ],
                                [
                                    75.05,
                                    46.55
                                ],
                                [
                                    74.5841,
                                    47.039
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a94",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 5
                },
                {
                    "asset": "a194",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_102",
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
            "timestamp": "2022-09-23T19:28:27.180Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-105",
            "title": "Order item 105",
            "startDate": "2022-11-14T02:20:00.000Z",
            "endDate": "2022-11-14T05:00:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T02:20:00.000Z",
                            "endDate": "2022-11-14T03:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668392400000,
                            "endTime": 1668395400000,
                            "geomId": "Mine Laying-0",
                            "name": "f-blue//2.1595708401873708//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.9685,
                                    41.6003
                                ],
                                [
                                    74.69,
                                    23.76
                                ],
                                [
                                    74.4119,
                                    23.7472
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
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T03:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395400000,
                            "endTime": 1668397200000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//4.3191416803747416//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.79176855228133,
                                        26.07873562541473
                                    ],
                                    [
                                        71.79176855228133,
                                        21.373066690716907
                                    ],
                                    [
                                        76.93901759615619,
                                        21.373066690716907
                                    ],
                                    [
                                        76.93901759615619,
                                        26.07873562541473
                                    ],
                                    [
                                        71.79176855228133,
                                        26.07873562541473
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
                            "startDate": "2022-11-14T03:40:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668397200000,
                            "endTime": 1668402000000,
                            "geomId": "Mine Laying-2",
                            "name": "f-blue//6.478712520562112//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.4119,
                                    23.7472
                                ],
                                [
                                    75.13,
                                    27.98
                                ],
                                [
                                    74.72,
                                    33.09
                                ],
                                [
                                    75.6,
                                    37.48
                                ],
                                [
                                    75.75,
                                    41.16
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
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a29",
                    "number": 5
                },
                {
                    "asset": "a30",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 1
                },
                {
                    "asset": "a194",
                    "number": 2
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_105",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-29T20:34:16.561Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-108",
            "title": "Order item 108",
            "startDate": "2022-11-14T02:20:00.000Z",
            "endDate": "2022-11-14T04:40:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T02:20:00.000Z",
                            "endDate": "2022-11-14T03:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668392400000,
                            "endTime": 1668395400000,
                            "geomId": "Patrol-0",
                            "name": "f-red//6.3493776430841535//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    53.1024,
                                    2.5754
                                ],
                                [
                                    47.85,
                                    13.06
                                ],
                                [
                                    41.83,
                                    23.76
                                ],
                                [
                                    36.08,
                                    33.75
                                ],
                                [
                                    36.4944,
                                    33.6611
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
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395400000,
                            "endTime": 1668400800000,
                            "geomId": "Patrol-1",
                            "name": "f-red//12.698755286168307//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        33.10122573539261,
                                        36.34859623098716
                                    ],
                                    [
                                        33.10122573539261,
                                        30.886581681953427
                                    ],
                                    [
                                        39.678747466394114,
                                        30.886581681953427
                                    ],
                                    [
                                        39.678747466394114,
                                        36.34859623098716
                                    ],
                                    [
                                        33.10122573539261,
                                        36.34859623098716
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
                            "startDate": "2022-11-14T04:40:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668400800000,
                            "endTime": 1668400800000,
                            "geomId": "Patrol-2",
                            "name": "f-red//19.04813292925246//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.4944,
                                    33.6611
                                ],
                                [
                                    52.98,
                                    2.23
                                ],
                                [
                                    53.1024,
                                    2.5754
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a117",
                    "number": 2
                },
                {
                    "asset": "a200",
                    "number": 1
                },
                {
                    "asset": "a129",
                    "number": 0
                },
                {
                    "asset": "a158",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 3
                },
                {
                    "asset": "a94",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_108",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--ASWBarrier",
            "timestamp": "2022-09-23T19:24:06.733Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-111",
            "title": "Order item 111",
            "startDate": "2022-11-14T02:25:00.000Z",
            "endDate": "2022-11-14T07:35:00.000Z",
            "location": [
                {
                    "uniqid": "ASW Barrier-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route out",
                            "startDate": "2022-11-14T02:25:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668392700000,
                            "endTime": 1668395700000,
                            "geomId": "ASW Barrier-0",
                            "name": "f-blue//4.432605614885688//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.2225,
                                    39.1761
                                ],
                                [
                                    43.36,
                                    32.15
                                ],
                                [
                                    44.64,
                                    24.28
                                ],
                                [
                                    45.21,
                                    16.69
                                ],
                                [
                                    45.4264,
                                    16.6616
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ASW Barrier-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//ASW Area",
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T04:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395700000,
                            "endTime": 1668399900000,
                            "geomId": "ASW Barrier-1",
                            "name": "f-blue//8.865211229771376//ASW Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.18798827692843,
                                        19.68582016973659
                                    ],
                                    [
                                        42.18798827692843,
                                        13.588685975563356
                                    ],
                                    [
                                        48.56324754263455,
                                        13.588685975563356
                                    ],
                                    [
                                        48.56324754263455,
                                        19.68582016973659
                                    ],
                                    [
                                        42.18798827692843,
                                        19.68582016973659
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ASW Barrier-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route back",
                            "startDate": "2022-11-14T04:25:00.000Z",
                            "endDate": "2022-11-14T07:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668399900000,
                            "endTime": 1668411300000,
                            "geomId": "ASW Barrier-2",
                            "name": "f-blue//13.297816844657063//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.4264,
                                    16.6616
                                ],
                                [
                                    44.69,
                                    24.47
                                ],
                                [
                                    43.06,
                                    31.39
                                ],
                                [
                                    42.71,
                                    39.59
                                ],
                                [
                                    42.2225,
                                    39.1761
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "a58",
                    "number": 1
                },
                {
                    "asset": "a30",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_111",
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
            "messageType": "Other--SOFAttack",
            "timestamp": "2022-09-22T07:57:57.695Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-114",
            "title": "Order item 114",
            "startDate": "2022-11-14T02:25:00.000Z",
            "endDate": "2022-11-14T09:35:00.000Z",
            "location": [
                {
                    "uniqid": "SOF Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Route out",
                            "startDate": "2022-11-14T02:25:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668392700000,
                            "endTime": 1668395700000,
                            "geomId": "SOF Activity-0",
                            "name": "f-red//6.40925475617405//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.6763,
                                    28.4689
                                ],
                                [
                                    36.44,
                                    33.32
                                ],
                                [
                                    36.4944,
                                    33.6611
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
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T04:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395700000,
                            "endTime": 1668399900000,
                            "geomId": "SOF Activity-1",
                            "name": "f-red//12.8185095123481//Activity Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        33.80155493306775,
                                        35.8159963317581
                                    ],
                                    [
                                        33.80155493306775,
                                        31.450696822486623
                                    ],
                                    [
                                        39.05398118652412,
                                        31.450696822486623
                                    ],
                                    [
                                        39.05398118652412,
                                        35.8159963317581
                                    ],
                                    [
                                        33.80155493306775,
                                        35.8159963317581
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
                            "startDate": "2022-11-14T04:25:00.000Z",
                            "endDate": "2022-11-14T06:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668399900000,
                            "endTime": 1668407100000,
                            "geomId": "SOF Activity-2",
                            "name": "f-red//19.22776426852215//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        36.173075024214434,
                                        33.92730341388858
                                    ],
                                    [
                                        36.173075024214434,
                                        33.39407035730982
                                    ],
                                    [
                                        36.81373966286873,
                                        33.39407035730982
                                    ],
                                    [
                                        36.81373966286873,
                                        33.92730341388858
                                    ],
                                    [
                                        36.173075024214434,
                                        33.92730341388858
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
                            "startDate": "2022-11-14T06:25:00.000Z",
                            "endDate": "2022-11-14T09:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668407100000,
                            "endTime": 1668418500000,
                            "geomId": "SOF Activity-3",
                            "name": "f-red//25.6370190246962//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.4944,
                                    33.6611
                                ],
                                [
                                    34.26,
                                    28.27
                                ],
                                [
                                    34.6763,
                                    28.4689
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a156",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 3
                },
                {
                    "asset": "a94",
                    "number": 4
                },
                {
                    "asset": "a10",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_114",
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
            "messageType": "Maritime--ASWBarrier",
            "timestamp": "2022-09-25T10:15:49.447Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-117",
            "title": "Order item 117",
            "startDate": "2022-11-14T02:25:00.000Z",
            "endDate": "2022-11-14T06:25:00.000Z",
            "location": [
                {
                    "uniqid": "ASW Barrier-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route out",
                            "startDate": "2022-11-14T02:25:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668392700000,
                            "endTime": 1668395700000,
                            "geomId": "ASW Barrier-0",
                            "name": "f-red//2.2793250663671643//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.5445,
                                    27.6014
                                ],
                                [
                                    70.22,
                                    36.41
                                ],
                                [
                                    77.07,
                                    44.39
                                ],
                                [
                                    83.2,
                                    52.65
                                ],
                                [
                                    83.2344,
                                    52.8233
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ASW Barrier-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//ASW Area",
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T06:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395700000,
                            "endTime": 1668405900000,
                            "geomId": "ASW Barrier-1",
                            "name": "f-red//4.5586501327343285//ASW Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        80.34339565908166,
                                        54.46913078518219
                                    ],
                                    [
                                        80.34339565908166,
                                        51.11242271960016
                                    ],
                                    [
                                        85.91040463032563,
                                        51.11242271960016
                                    ],
                                    [
                                        85.91040463032563,
                                        54.46913078518219
                                    ],
                                    [
                                        80.34339565908166,
                                        54.46913078518219
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ASW Barrier-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route back",
                            "startDate": "2022-11-14T06:05:00.000Z",
                            "endDate": "2022-11-14T06:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668405900000,
                            "endTime": 1668407100000,
                            "geomId": "ASW Barrier-2",
                            "name": "f-red//6.837975199101493//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.2344,
                                    52.8233
                                ],
                                [
                                    63.14,
                                    27.41
                                ],
                                [
                                    63.5445,
                                    27.6014
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "a109",
                    "number": 2
                },
                {
                    "asset": "a149",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_117",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-24T18:17:41.991Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-120",
            "title": "Order item 120",
            "startDate": "2022-11-14T02:40:00.000Z",
            "endDate": "2022-11-14T07:50:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-14T02:40:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668393600000,
                            "endTime": 1668396600000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//2.0428165460471064//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.1556,
                                    28.764
                                ],
                                [
                                    80.44,
                                    7.14
                                ],
                                [
                                    80.1217,
                                    6.8957
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T05:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668396600000,
                            "endTime": 1668405000000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//4.085633092094213//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        76.28865172006252,
                                        10.64750108463078
                                    ],
                                    [
                                        76.28865172006252,
                                        3.1138268607036497
                                    ],
                                    [
                                        83.8942345539846,
                                        3.1138268607036497
                                    ],
                                    [
                                        83.8942345539846,
                                        10.64750108463078
                                    ],
                                    [
                                        76.28865172006252,
                                        10.64750108463078
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
                            "startDate": "2022-11-14T05:50:00.000Z",
                            "endDate": "2022-11-14T07:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668405000000,
                            "endTime": 1668409200000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//6.128449638141319//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        77.67916232314579,
                                        9.299940430915541
                                    ],
                                    [
                                        77.67916232314579,
                                        4.479175738719655
                                    ],
                                    [
                                        82.53950245624819,
                                        4.479175738719655
                                    ],
                                    [
                                        82.53950245624819,
                                        9.299940430915541
                                    ],
                                    [
                                        77.67916232314579,
                                        9.299940430915541
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
                            "startDate": "2022-11-14T07:00:00.000Z",
                            "endDate": "2022-11-14T07:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668409200000,
                            "endTime": 1668412200000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//8.171266184188426//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    80.1217,
                                    6.8957
                                ],
                                [
                                    51.34,
                                    17.58
                                ],
                                [
                                    22.01,
                                    28.71
                                ],
                                [
                                    22.1556,
                                    28.764
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a16",
                    "number": 1
                },
                {
                    "asset": "a41",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 3
                },
                {
                    "asset": "a194",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_120",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-28T16:03:35.324Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-123",
            "title": "Order item 123",
            "startDate": "2022-11-14T02:40:00.000Z",
            "endDate": "2022-11-14T05:20:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T02:40:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668393600000,
                            "endTime": 1668396600000,
                            "geomId": "Patrol-0",
                            "name": "f-red//5.699729195213877//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.6672,
                                    11.2872
                                ],
                                [
                                    39.98,
                                    28.26
                                ],
                                [
                                    45.71,
                                    44.65
                                ],
                                [
                                    45.558,
                                    44.9461
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396600000,
                            "endTime": 1668403200000,
                            "geomId": "Patrol-1",
                            "name": "f-red//11.399458390427753//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        39.736347165459335,
                                        48.650245845662354
                                    ],
                                    [
                                        39.736347165459335,
                                        40.982833504842326
                                    ],
                                    [
                                        50.65074322055074,
                                        40.982833504842326
                                    ],
                                    [
                                        50.65074322055074,
                                        48.650245845662354
                                    ],
                                    [
                                        39.736347165459335,
                                        48.650245845662354
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
                            "startDate": "2022-11-14T05:20:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668403200000,
                            "endTime": 1668403200000,
                            "geomId": "Patrol-2",
                            "name": "f-red//17.09918758564163//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.558,
                                    44.9461
                                ],
                                [
                                    34.52,
                                    10.79
                                ],
                                [
                                    34.6672,
                                    11.2872
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a176",
                    "number": 5
                },
                {
                    "asset": "a186",
                    "number": 3
                },
                {
                    "asset": "a127",
                    "number": 3
                },
                {
                    "asset": "a192",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 4
                },
                {
                    "asset": "a94",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_123",
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
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-28T19:33:29.449Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-126",
            "title": "Order item 126",
            "startDate": "2022-11-14T02:40:00.000Z",
            "endDate": "2022-11-14T08:10:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-14T02:40:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668393600000,
                            "endTime": 1668396600000,
                            "geomId": "ISTAR-0",
                            "name": "f-red//3.250063013867475//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.3894,
                                    18.8227
                                ],
                                [
                                    34.99,
                                    50.6
                                ],
                                [
                                    34.7858,
                                    50.1652
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T03:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396600000,
                            "endTime": 1668397800000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//6.50012602773495//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        28.764616274089132,
                                        53.590484748291246
                                    ],
                                    [
                                        28.764616274089132,
                                        46.47125333712483
                                    ],
                                    [
                                        39.97252239713255,
                                        46.47125333712483
                                    ],
                                    [
                                        39.97252239713255,
                                        53.590484748291246
                                    ],
                                    [
                                        28.764616274089132,
                                        53.590484748291246
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
                            "startDate": "2022-11-14T03:50:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668397800000,
                            "endTime": 1668402000000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//9.750189041602425//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        33.07578321333413,
                                        51.22377989295682
                                    ],
                                    [
                                        33.07578321333413,
                                        49.08261130277747
                                    ],
                                    [
                                        36.420891550653465,
                                        49.08261130277747
                                    ],
                                    [
                                        36.420891550653465,
                                        51.22377989295682
                                    ],
                                    [
                                        33.07578321333413,
                                        51.22377989295682
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
                            "startDate": "2022-11-14T05:00:00.000Z",
                            "endDate": "2022-11-14T08:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668402000000,
                            "endTime": 1668413400000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//13.0002520554699//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.7858,
                                    50.1652
                                ],
                                [
                                    37.86,
                                    42.31
                                ],
                                [
                                    40.78,
                                    34.31
                                ],
                                [
                                    42.99,
                                    26.58
                                ],
                                [
                                    46.48,
                                    19.14
                                ],
                                [
                                    46.3894,
                                    18.8227
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a192",
                    "number": 2
                },
                {
                    "asset": "a188",
                    "number": 3
                },
                {
                    "asset": "a114",
                    "number": 1
                },
                {
                    "asset": "a165",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 0
                },
                {
                    "asset": "a94",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_126",
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-25T04:47:24.363Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-129",
            "title": "Order item 129",
            "startDate": "2022-11-14T02:55:00.000Z",
            "endDate": "2022-11-14T05:15:00.000Z",
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-11-14T02:55:00.000Z",
                            "endDate": "2022-11-14T03:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668394500000,
                            "endTime": 1668397500000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//4.693818001425825//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.2478,
                                    22.1183
                                ],
                                [
                                    57.62,
                                    28.26
                                ],
                                [
                                    76.32,
                                    34.74
                                ],
                                [
                                    75.9346,
                                    35.0988
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
                            "startDate": "2022-11-14T03:45:00.000Z",
                            "endDate": "2022-11-14T05:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668397500000,
                            "endTime": 1668402300000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//9.38763600285165//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.07635355881686,
                                        38.791246593001084
                                    ],
                                    [
                                        71.07635355881686,
                                        31.229649778185387
                                    ],
                                    [
                                        80.36206935649739,
                                        31.229649778185387
                                    ],
                                    [
                                        80.36206935649739,
                                        38.791246593001084
                                    ],
                                    [
                                        71.07635355881686,
                                        38.791246593001084
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
                            "startDate": "2022-11-14T05:05:00.000Z",
                            "endDate": "2022-11-14T05:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668402300000,
                            "endTime": 1668402900000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//14.081454004277475//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.9346,
                                    35.0988
                                ],
                                [
                                    67.32,
                                    31.59
                                ],
                                [
                                    57.61,
                                    28.98
                                ],
                                [
                                    49.18,
                                    25.65
                                ],
                                [
                                    40.04,
                                    21.61
                                ],
                                [
                                    40.2478,
                                    22.1183
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a165",
                    "number": 0
                },
                {
                    "asset": "a146",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 0
                },
                {
                    "asset": "a94",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_129",
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-26T03:45:20.069Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-132",
            "title": "Order item 132",
            "startDate": "2022-11-14T03:10:00.000Z",
            "endDate": "2022-11-14T05:20:00.000Z",
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395400000,
                            "endTime": 1668398400000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-blue//5.030994158471003//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.1599,
                                    36.5875
                                ],
                                [
                                    32.12,
                                    4.26
                                ],
                                [
                                    32.2743,
                                    4.6663
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
                            "startDate": "2022-11-14T04:00:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668398400000,
                            "endTime": 1668400800000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-blue//10.061988316942006//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        31.7556620249663,
                                        5.182627451773735
                                    ],
                                    [
                                        31.7556620249663,
                                        4.1495924534254724
                                    ],
                                    [
                                        32.792175273141886,
                                        4.1495924534254724
                                    ],
                                    [
                                        32.792175273141886,
                                        5.182627451773735
                                    ],
                                    [
                                        31.7556620249663,
                                        5.182627451773735
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
                            "startDate": "2022-11-14T04:40:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668400800000,
                            "endTime": 1668403200000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-blue//15.09298247541301//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.2743,
                                    4.6663
                                ],
                                [
                                    36.83,
                                    12.79
                                ],
                                [
                                    41.31,
                                    20.85
                                ],
                                [
                                    46.09,
                                    28.2
                                ],
                                [
                                    51.14,
                                    36.83
                                ],
                                [
                                    51.1599,
                                    36.5875
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a91",
                    "number": 3
                },
                {
                    "asset": "a57",
                    "number": 5
                },
                {
                    "asset": "a51",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_132",
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
            "messageType": "Maritime--MineLaying",
            "timestamp": "2022-09-23T08:27:16.565Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-135",
            "title": "Order item 135",
            "startDate": "2022-11-14T03:10:00.000Z",
            "endDate": "2022-11-14T07:30:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395400000,
                            "endTime": 1668398400000,
                            "geomId": "Mine Laying-0",
                            "name": "f-red//4.261591484420933//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.0048,
                                    24.2877
                                ],
                                [
                                    62.6,
                                    34.07
                                ],
                                [
                                    60.25,
                                    42.91
                                ],
                                [
                                    59.18,
                                    52.04
                                ],
                                [
                                    58.8611,
                                    52.3468
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
                            "startDate": "2022-11-14T04:00:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668398400000,
                            "endTime": 1668403200000,
                            "geomId": "Mine Laying-1",
                            "name": "f-red//8.523182968841866//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        57.493261768437065,
                                        53.15914698430205
                                    ],
                                    [
                                        57.493261768437065,
                                        51.519232843718875
                                    ],
                                    [
                                        60.17912337899401,
                                        51.519232843718875
                                    ],
                                    [
                                        60.17912337899401,
                                        53.15914698430205
                                    ],
                                    [
                                        57.493261768437065,
                                        53.15914698430205
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
                            "startDate": "2022-11-14T05:20:00.000Z",
                            "endDate": "2022-11-14T07:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668403200000,
                            "endTime": 1668411000000,
                            "geomId": "Mine Laying-2",
                            "name": "f-red//12.784774453262798//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.8611,
                                    52.3468
                                ],
                                [
                                    61.82,
                                    38.04
                                ],
                                [
                                    64.15,
                                    24.1
                                ],
                                [
                                    64.0048,
                                    24.2877
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a173",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 4
                },
                {
                    "asset": "a94",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_135",
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
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-25T02:53:13.851Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-138",
            "title": "Order item 138",
            "startDate": "2022-11-14T03:15:00.000Z",
            "endDate": "2022-11-14T04:05:00.000Z",
            "location": [
                {
                    "uniqid": "Sea Denial-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Sea Denial//Sea Denial Area",
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T04:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395700000,
                            "endTime": 1668398700000,
                            "geomId": "Sea Denial-0",
                            "name": "f-red//2.3856099798576906//Sea Denial Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.20379874309789,
                                        31.16223243566617
                                    ],
                                    [
                                        42.20379874309789,
                                        29.181408149287154
                                    ],
                                    [
                                        44.49576328248739,
                                        29.181408149287154
                                    ],
                                    [
                                        44.49576328248739,
                                        31.16223243566617
                                    ],
                                    [
                                        42.20379874309789,
                                        31.16223243566617
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Sea Denial",
            "ownAssets": [
                {
                    "asset": "a111",
                    "number": 2
                },
                {
                    "asset": "a145",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 2
                },
                {
                    "asset": "a94",
                    "number": 2
                },
                {
                    "asset": "a10",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_138",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land--MissileStrike",
            "timestamp": "2022-09-25T06:20:57.752Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-143",
            "title": "Order item 143",
            "startDate": "2022-11-14T03:35:00.000Z",
            "endDate": "2022-11-14T06:45:00.000Z",
            "location": [],
            "activity": "f-blue-Land-Strike",
            "ownAssets": [
                {
                    "asset": "a99",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 1,
                    "missileType": "SRBM"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_143",
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
            "messageType": "Maritime--MineLaying",
            "timestamp": "2022-09-25T16:57:10.795Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-144",
            "title": "Order item 144",
            "startDate": "2022-11-14T03:35:00.000Z",
            "endDate": "2022-11-14T06:45:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T03:35:00.000Z",
                            "endDate": "2022-11-14T04:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396900000,
                            "endTime": 1668399900000,
                            "geomId": "Mine Laying-0",
                            "name": "f-red//5.313910479191691//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.4463,
                                    28.4737
                                ],
                                [
                                    48.99,
                                    34.48
                                ],
                                [
                                    45.89,
                                    39.85
                                ],
                                [
                                    45.5865,
                                    40.1827
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
                            "startDate": "2022-11-14T04:25:00.000Z",
                            "endDate": "2022-11-14T06:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668399900000,
                            "endTime": 1668405900000,
                            "geomId": "Mine Laying-1",
                            "name": "f-red//10.627820958383381//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        43.955825972742566,
                                        41.39468079459052
                                    ],
                                    [
                                        43.955825972742566,
                                        38.94864961171384
                                    ],
                                    [
                                        47.15942021489664,
                                        38.94864961171384
                                    ],
                                    [
                                        47.15942021489664,
                                        41.39468079459052
                                    ],
                                    [
                                        43.955825972742566,
                                        41.39468079459052
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
                            "startDate": "2022-11-14T06:05:00.000Z",
                            "endDate": "2022-11-14T06:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668405900000,
                            "endTime": 1668408300000,
                            "geomId": "Mine Laying-2",
                            "name": "f-red//15.941731437575072//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.5865,
                                    40.1827
                                ],
                                [
                                    48.91,
                                    34.36
                                ],
                                [
                                    52.69,
                                    28
                                ],
                                [
                                    52.4463,
                                    28.4737
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a147",
                    "number": 2
                },
                {
                    "asset": "a152",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 1
                },
                {
                    "asset": "a94",
                    "number": 4
                },
                {
                    "asset": "a10",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_144",
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
            "messageType": "Land--MissileStrike",
            "timestamp": "2022-09-28T05:00:57.894Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-151",
            "title": "Order item 151",
            "startDate": "2022-11-14T03:40:00.000Z",
            "endDate": "2022-11-14T05:50:00.000Z",
            "location": [],
            "activity": "f-red-Land-Strike",
            "ownAssets": [
                {
                    "asset": "a148",
                    "number": 0,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a138",
                    "number": 4,
                    "missileType": "Standard Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 5,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a94",
                    "number": 5,
                    "missileType": "IRBM"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_151",
        "_rev": "2"
    }]