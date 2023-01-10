
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
                                35.4073,
                                24.6033
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-SAM MEZ",
            "ownAssets": [
                {
                    "asset": "a219",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 3
                },
                {
                    "asset": "a394",
                    "number": 1
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
                                    61.3184,
                                    3.3166
                                ],
                                [
                                    62.82,
                                    10.86
                                ],
                                [
                                    63.23,
                                    19.31
                                ],
                                [
                                    64.93,
                                    27.04
                                ],
                                [
                                    65.9,
                                    34.06
                                ],
                                [
                                    66.1168,
                                    34.5587
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
                                        62.1809034849388,
                                        37.61472924127172
                                    ],
                                    [
                                        62.1809034849388,
                                        31.385443419603494
                                    ],
                                    [
                                        69.7685193178557,
                                        31.385443419603494
                                    ],
                                    [
                                        69.7685193178557,
                                        37.61472924127172
                                    ],
                                    [
                                        62.1809034849388,
                                        37.61472924127172
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
                                        62.59097071911992,
                                        37.31327226107898
                                    ],
                                    [
                                        62.59097071911992,
                                        31.709349852275498
                                    ],
                                    [
                                        69.4127937334291,
                                        31.709349852275498
                                    ],
                                    [
                                        69.4127937334291,
                                        37.31327226107898
                                    ],
                                    [
                                        62.59097071911992,
                                        37.31327226107898
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
                                    66.1168,
                                    34.5587
                                ],
                                [
                                    64.6,
                                    23.79
                                ],
                                [
                                    63.15,
                                    14.08
                                ],
                                [
                                    60.98,
                                    3.65
                                ],
                                [
                                    61.3184,
                                    3.3166
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a394",
                    "number": 0
                },
                {
                    "asset": "a376",
                    "number": 0
                },
                {
                    "asset": "a387",
                    "number": 0
                },
                {
                    "asset": "a328",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 3
                },
                {
                    "asset": "a294",
                    "number": 1
                },
                {
                    "asset": "a210",
                    "number": 5
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
                                    81.1576,
                                    51.5173
                                ],
                                [
                                    72.32,
                                    41.55
                                ],
                                [
                                    62.57,
                                    30.67
                                ],
                                [
                                    53.1,
                                    21.07
                                ],
                                [
                                    53.6,
                                    20.6305
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
                                        53.33493133869776,
                                        20.87796271599214
                                    ],
                                    [
                                        53.33493133869776,
                                        20.382634234184195
                                    ],
                                    [
                                        53.864207331775404,
                                        20.382634234184195
                                    ],
                                    [
                                        53.864207331775404,
                                        20.87796271599214
                                    ],
                                    [
                                        53.33493133869776,
                                        20.87796271599214
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
                                    53.6,
                                    20.6305
                                ],
                                [
                                    67.61,
                                    35.93
                                ],
                                [
                                    81,
                                    51.61
                                ],
                                [
                                    81.1576,
                                    51.5173
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "a228",
                    "number": 0
                },
                {
                    "asset": "a293",
                    "number": 4
                },
                {
                    "asset": "a288",
                    "number": 5
                },
                {
                    "asset": "a215",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 0
                },
                {
                    "asset": "a394",
                    "number": 5
                },
                {
                    "asset": "a310",
                    "number": 0
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
                                    72.1942,
                                    51.2634
                                ],
                                [
                                    48.66,
                                    36.82
                                ],
                                [
                                    25.44,
                                    21.69
                                ],
                                [
                                    25.2276,
                                    21.8021
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
                                        21.148491290737613,
                                        25.436434440783067
                                    ],
                                    [
                                        21.148491290737613,
                                        18.072651208546535
                                    ],
                                    [
                                        29.10213973014531,
                                        18.072651208546535
                                    ],
                                    [
                                        29.10213973014531,
                                        25.436434440783067
                                    ],
                                    [
                                        21.148491290737613,
                                        25.436434440783067
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
                                    25.2276,
                                    21.8021
                                ],
                                [
                                    41.36,
                                    31.91
                                ],
                                [
                                    56.54,
                                    41.06
                                ],
                                [
                                    72,
                                    51.49
                                ],
                                [
                                    72.1942,
                                    51.2634
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a215",
                    "number": 0
                },
                {
                    "asset": "a265",
                    "number": 0
                },
                {
                    "asset": "a246",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 2
                },
                {
                    "asset": "a394",
                    "number": 5
                },
                {
                    "asset": "a310",
                    "number": 1
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
                                    34.8418,
                                    52.4863
                                ],
                                [
                                    30.86,
                                    32.51
                                ],
                                [
                                    26.23,
                                    12.88
                                ],
                                [
                                    26.4854,
                                    12.6268
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "a255",
                    "number": 5
                },
                {
                    "asset": "a291",
                    "number": 1
                },
                {
                    "asset": "a258",
                    "number": 2
                },
                {
                    "asset": "a252",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 2
                },
                {
                    "asset": "a394",
                    "number": 1
                },
                {
                    "asset": "a310",
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
                                    78.1059,
                                    50.7096
                                ],
                                [
                                    72.99,
                                    40.46
                                ],
                                [
                                    67.93,
                                    30.27
                                ],
                                [
                                    63.16,
                                    20.36
                                ],
                                [
                                    63.4197,
                                    20.0981
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
                                        62.53596639970508,
                                        20.921378281410735
                                    ],
                                    [
                                        62.53596639970508,
                                        19.27046918379276
                                    ],
                                    [
                                        64.29416474292634,
                                        19.27046918379276
                                    ],
                                    [
                                        64.29416474292634,
                                        20.921378281410735
                                    ],
                                    [
                                        62.53596639970508,
                                        20.921378281410735
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
                                    63.4197,
                                    20.0981
                                ],
                                [
                                    77.75,
                                    50.74
                                ],
                                [
                                    78.1059,
                                    50.7096
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Defensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a252",
                    "number": 0
                },
                {
                    "asset": "a273",
                    "number": 4
                },
                {
                    "asset": "a225",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 3
                },
                {
                    "asset": "a394",
                    "number": 0
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
                                    30.7478,
                                    40.568
                                ],
                                [
                                    42.5,
                                    31.62
                                ],
                                [
                                    53.7,
                                    23.12
                                ],
                                [
                                    53.843,
                                    23.161
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
                                        49.97248570464834,
                                        26.575983326647204
                                    ],
                                    [
                                        49.97248570464834,
                                        19.656233008251867
                                    ],
                                    [
                                        57.51848276982953,
                                        19.656233008251867
                                    ],
                                    [
                                        57.51848276982953,
                                        26.575983326647204
                                    ],
                                    [
                                        49.97248570464834,
                                        26.575983326647204
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
                                    53.843,
                                    23.161
                                ],
                                [
                                    42.7,
                                    31.51
                                ],
                                [
                                    30.96,
                                    40.25
                                ],
                                [
                                    30.7478,
                                    40.568
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a201",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 5
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
                                    45.7926,
                                    19.9104
                                ],
                                [
                                    78.84,
                                    47.95
                                ],
                                [
                                    78.7293,
                                    48.3092
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
                                        72.82600361443974,
                                        51.81416363406538
                                    ],
                                    [
                                        72.82600361443974,
                                        44.541851664538456
                                    ],
                                    [
                                        83.84744397055076,
                                        44.541851664538456
                                    ],
                                    [
                                        83.84744397055076,
                                        51.81416363406538
                                    ],
                                    [
                                        72.82600361443974,
                                        51.81416363406538
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
                                        74.40533598495776,
                                        50.95465839052683
                                    ],
                                    [
                                        74.40533598495776,
                                        45.51791480342348
                                    ],
                                    [
                                        82.61594768078332,
                                        45.51791480342348
                                    ],
                                    [
                                        82.61594768078332,
                                        50.95465839052683
                                    ],
                                    [
                                        74.40533598495776,
                                        50.95465839052683
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
                                    78.7293,
                                    48.3092
                                ],
                                [
                                    61.86,
                                    33.73
                                ],
                                [
                                    45.31,
                                    19.46
                                ],
                                [
                                    45.7926,
                                    19.9104
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-ISTAR",
            "ownAssets": [
                {
                    "asset": "a310",
                    "number": 4
                },
                {
                    "asset": "a400",
                    "number": 5
                },
                {
                    "asset": "a322",
                    "number": 5
                },
                {
                    "asset": "a370",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 5
                },
                {
                    "asset": "a294",
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
                                    35.4073,
                                    24.6033
                                ],
                                [
                                    40.29,
                                    32.71
                                ],
                                [
                                    45.45,
                                    40.09
                                ],
                                [
                                    49.9,
                                    47.75
                                ],
                                [
                                    49.9545,
                                    48.1332
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
                                        46.23985356041707,
                                        50.44084025606573
                                    ],
                                    [
                                        46.23985356041707,
                                        45.716310232114395
                                    ],
                                    [
                                        53.34242062344254,
                                        45.716310232114395
                                    ],
                                    [
                                        53.34242062344254,
                                        50.44084025606573
                                    ],
                                    [
                                        46.23985356041707,
                                        50.44084025606573
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
                                        43.46523227959011,
                                        51.957974914927554
                                    ],
                                    [
                                        43.46523227959011,
                                        43.995023488790835
                                    ],
                                    [
                                        55.51004165811372,
                                        43.995023488790835
                                    ],
                                    [
                                        55.51004165811372,
                                        51.957974914927554
                                    ],
                                    [
                                        43.46523227959011,
                                        51.957974914927554
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
                                    49.9545,
                                    48.1332
                                ],
                                [
                                    42.27,
                                    36.74
                                ],
                                [
                                    35.03,
                                    24.79
                                ],
                                [
                                    35.4073,
                                    24.6033
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a370",
                    "number": 1
                },
                {
                    "asset": "a347",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 3
                },
                {
                    "asset": "a294",
                    "number": 0
                },
                {
                    "asset": "a210",
                    "number": 4
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
                                    48.6673,
                                    21.8933
                                ],
                                [
                                    55.1,
                                    25.99
                                ],
                                [
                                    61.7,
                                    29.27
                                ],
                                [
                                    67.59,
                                    32.82
                                ],
                                [
                                    67.6304,
                                    33.0067
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
                                        66.432729976877,
                                        33.99400680162507
                                    ],
                                    [
                                        66.432729976877,
                                        32.008210900773875
                                    ],
                                    [
                                        68.80140581418013,
                                        32.008210900773875
                                    ],
                                    [
                                        68.80140581418013,
                                        33.99400680162507
                                    ],
                                    [
                                        66.432729976877,
                                        33.99400680162507
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
                                        63.11204726132592,
                                        36.55673931959056
                                    ],
                                    [
                                        63.11204726132592,
                                        29.30668694521095
                                    ],
                                    [
                                        71.7918954746718,
                                        29.30668694521095
                                    ],
                                    [
                                        71.7918954746718,
                                        36.55673931959056
                                    ],
                                    [
                                        63.11204726132592,
                                        36.55673931959056
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
                                    67.6304,
                                    33.0067
                                ],
                                [
                                    58.08,
                                    27.54
                                ],
                                [
                                    48.95,
                                    21.48
                                ],
                                [
                                    48.6673,
                                    21.8933
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a385",
                    "number": 5
                },
                {
                    "asset": "a348",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 3
                },
                {
                    "asset": "a294",
                    "number": 4
                },
                {
                    "asset": "a210",
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
                                    72.5957,
                                    45.9671
                                ],
                                [
                                    75.59,
                                    36.41
                                ],
                                [
                                    79.43,
                                    25.71
                                ],
                                [
                                    82.56,
                                    16.29
                                ],
                                [
                                    85.97,
                                    6.15
                                ],
                                [
                                    85.6136,
                                    6.1233
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
                                        82.73901810523827,
                                        8.955206976833932
                                    ],
                                    [
                                        82.73901810523827,
                                        3.276261805962418
                                    ],
                                    [
                                        88.45776518944814,
                                        3.276261805962418
                                    ],
                                    [
                                        88.45776518944814,
                                        8.955206976833932
                                    ],
                                    [
                                        82.73901810523827,
                                        8.955206976833932
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
                                    85.6136,
                                    6.1233
                                ],
                                [
                                    81.05,
                                    18.96
                                ],
                                [
                                    76.75,
                                    33.05
                                ],
                                [
                                    72.73,
                                    46.43
                                ],
                                [
                                    72.5957,
                                    45.9671
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a257",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 3
                },
                {
                    "asset": "a394",
                    "number": 0
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
                                    63.7965,
                                    17.5618
                                ],
                                [
                                    58.72,
                                    25.51
                                ],
                                [
                                    52.86,
                                    33.69
                                ],
                                [
                                    47.29,
                                    41.16
                                ],
                                [
                                    47.1339,
                                    41.6445
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
                                        46.42442559714489,
                                        42.168176964021036
                                    ],
                                    [
                                        46.42442559714489,
                                        41.116531078879795
                                    ],
                                    [
                                        47.83188837462376,
                                        41.116531078879795
                                    ],
                                    [
                                        47.83188837462376,
                                        42.168176964021036
                                    ],
                                    [
                                        46.42442559714489,
                                        42.168176964021036
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
                                    47.1339,
                                    41.6445
                                ],
                                [
                                    50.91,
                                    35.13
                                ],
                                [
                                    55.55,
                                    29.48
                                ],
                                [
                                    59.48,
                                    23.11
                                ],
                                [
                                    63.69,
                                    18.03
                                ],
                                [
                                    63.7965,
                                    17.5618
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a382",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
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
                                34.8418,
                                52.4863
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-BMD MEZ",
            "ownAssets": [
                {
                    "asset": "a363",
                    "number": 0
                },
                {
                    "asset": "a379",
                    "number": 0
                },
                {
                    "asset": "a326",
                    "number": 5
                },
                {
                    "asset": "a397",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 3
                },
                {
                    "asset": "a294",
                    "number": 0
                },
                {
                    "asset": "a210",
                    "number": 2
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
                                    44.9143,
                                    34.3352
                                ],
                                [
                                    28.18,
                                    24.25
                                ],
                                [
                                    28.1402,
                                    24.6102
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
                                        27.106483445995107,
                                        25.53939745255919
                                    ],
                                    [
                                        27.106483445995107,
                                        23.67404589239921
                                    ],
                                    [
                                        29.15861476186764,
                                        23.67404589239921
                                    ],
                                    [
                                        29.15861476186764,
                                        25.53939745255919
                                    ],
                                    [
                                        27.106483445995107,
                                        25.53939745255919
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
                                    28.1402,
                                    24.6102
                                ],
                                [
                                    36.7,
                                    29.45
                                ],
                                [
                                    44.6,
                                    34.64
                                ],
                                [
                                    44.9143,
                                    34.3352
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a297",
                    "number": 3
                },
                {
                    "asset": "a299",
                    "number": 5
                },
                {
                    "asset": "a231",
                    "number": 3
                },
                {
                    "asset": "a288",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 3
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
                                    78.7991,
                                    17.3688
                                ],
                                [
                                    69.18,
                                    24.23
                                ],
                                [
                                    59.41,
                                    31.94
                                ],
                                [
                                    48.93,
                                    38.94
                                ],
                                [
                                    38.74,
                                    45.23
                                ],
                                [
                                    39.0397,
                                    45.547
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
                                        36.939349927230325,
                                        46.9615359099501
                                    ],
                                    [
                                        36.939349927230325,
                                        44.09587917856692
                                    ],
                                    [
                                        41.035637460491095,
                                        44.09587917856692
                                    ],
                                    [
                                        41.035637460491095,
                                        46.9615359099501
                                    ],
                                    [
                                        36.939349927230325,
                                        46.9615359099501
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
                                    39.0397,
                                    45.547
                                ],
                                [
                                    58.68,
                                    31.49
                                ],
                                [
                                    78.85,
                                    16.96
                                ],
                                [
                                    78.7991,
                                    17.3688
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a388",
                    "number": 4
                },
                {
                    "asset": "a375",
                    "number": 5
                },
                {
                    "asset": "a389",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 2
                },
                {
                    "asset": "a294",
                    "number": 4
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
                                    23.1603,
                                    30.6265
                                ],
                                [
                                    28.16,
                                    29.73
                                ],
                                [
                                    34,
                                    27.67
                                ],
                                [
                                    39.13,
                                    26.9
                                ],
                                [
                                    43.55,
                                    25.42
                                ],
                                [
                                    43.9014,
                                    25.659
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
                                        40.889130970844306,
                                        28.281208505503482
                                    ],
                                    [
                                        40.889130970844306,
                                        22.977666602866396
                                    ],
                                    [
                                        46.782601789470455,
                                        22.977666602866396
                                    ],
                                    [
                                        46.782601789470455,
                                        28.281208505503482
                                    ],
                                    [
                                        40.889130970844306,
                                        28.281208505503482
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
                                        41.71696852320027,
                                        27.579129388855314
                                    ],
                                    [
                                        41.71696852320027,
                                        23.707402346406997
                                    ],
                                    [
                                        46.01604338376994,
                                        23.707402346406997
                                    ],
                                    [
                                        46.01604338376994,
                                        27.579129388855314
                                    ],
                                    [
                                        41.71696852320027,
                                        27.579129388855314
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
                                    43.9014,
                                    25.659
                                ],
                                [
                                    33.95,
                                    27.8
                                ],
                                [
                                    23.38,
                                    30.33
                                ],
                                [
                                    23.1603,
                                    30.6265
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a234",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 4
                },
                {
                    "asset": "a394",
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
                                    55.9354,
                                    5.5713
                                ],
                                [
                                    45.02,
                                    15.78
                                ],
                                [
                                    35.35,
                                    26.24
                                ],
                                [
                                    23.98,
                                    36.98
                                ],
                                [
                                    24.4378,
                                    36.9216
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
                                        20.328396313139823,
                                        40.00055722100081
                                    ],
                                    [
                                        20.328396313139823,
                                        33.712247735019076
                                    ],
                                    [
                                        28.221660390392177,
                                        33.712247735019076
                                    ],
                                    [
                                        28.221660390392177,
                                        40.00055722100081
                                    ],
                                    [
                                        20.328396313139823,
                                        40.00055722100081
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
                                    24.4378,
                                    36.9216
                                ],
                                [
                                    39.97,
                                    21.43
                                ],
                                [
                                    55.94,
                                    5.39
                                ],
                                [
                                    55.9354,
                                    5.5713
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a334",
                    "number": 5
                },
                {
                    "asset": "a389",
                    "number": 0
                },
                {
                    "asset": "a375",
                    "number": 1
                },
                {
                    "asset": "a388",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 4
                },
                {
                    "asset": "a294",
                    "number": 5
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
                                    55.9354,
                                    5.5713
                                ],
                                [
                                    52.18,
                                    16.06
                                ],
                                [
                                    47.62,
                                    26.75
                                ],
                                [
                                    43.35,
                                    36.72
                                ],
                                [
                                    43.1929,
                                    37.1632
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
                                        39.57761290830813,
                                        39.8837088107723
                                    ],
                                    [
                                        39.57761290830813,
                                        34.340604900964
                                    ],
                                    [
                                        46.55239436877907,
                                        34.340604900964
                                    ],
                                    [
                                        46.55239436877907,
                                        39.8837088107723
                                    ],
                                    [
                                        39.57761290830813,
                                        39.8837088107723
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
                                    43.1929,
                                    37.1632
                                ],
                                [
                                    49.66,
                                    21.12
                                ],
                                [
                                    55.63,
                                    5.58
                                ],
                                [
                                    55.9354,
                                    5.5713
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-EW Attack",
            "ownAssets": [
                {
                    "asset": "a388",
                    "number": 1
                },
                {
                    "asset": "a331",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
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
                                    27.9086,
                                    3.0191
                                ],
                                [
                                    29.12,
                                    23.33
                                ],
                                [
                                    29.65,
                                    43.97
                                ],
                                [
                                    29.9459,
                                    43.6119
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
                                        25.508403043147986,
                                        46.57888289770115
                                    ],
                                    [
                                        25.508403043147986,
                                        40.48968966056947
                                    ],
                                    [
                                        33.955743214787205,
                                        40.48968966056947
                                    ],
                                    [
                                        33.955743214787205,
                                        46.57888289770115
                                    ],
                                    [
                                        25.508403043147986,
                                        46.57888289770115
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
                                    29.9459,
                                    43.6119
                                ],
                                [
                                    29.24,
                                    33.66
                                ],
                                [
                                    28.46,
                                    23.63
                                ],
                                [
                                    27.97,
                                    12.88
                                ],
                                [
                                    27.76,
                                    3.42
                                ],
                                [
                                    27.9086,
                                    3.0191
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a397",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 2
                },
                {
                    "asset": "a294",
                    "number": 1
                },
                {
                    "asset": "a210",
                    "number": 1
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
                                79.0525,
                                22.1056
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-BMD MEZ",
            "ownAssets": [
                {
                    "asset": "a263",
                    "number": 3
                },
                {
                    "asset": "a274",
                    "number": 0
                },
                {
                    "asset": "a215",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 5
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
                                    52.1589,
                                    13.9426
                                ],
                                [
                                    47.48,
                                    24.86
                                ],
                                [
                                    42.21,
                                    36.18
                                ],
                                [
                                    41.8192,
                                    36.6809
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a381",
                    "number": 4
                },
                {
                    "asset": "a378",
                    "number": 1
                },
                {
                    "asset": "a305",
                    "number": 2
                },
                {
                    "asset": "a357",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 2
                },
                {
                    "asset": "a294",
                    "number": 1
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
                                    30.4398,
                                    44.048
                                ],
                                [
                                    51.45,
                                    31.24
                                ],
                                [
                                    71.95,
                                    18.92
                                ],
                                [
                                    72.3046,
                                    18.838
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
                                        69.71004450347435,
                                        21.238532989243016
                                    ],
                                    [
                                        69.71004450347435,
                                        16.402583789292763
                                    ],
                                    [
                                        74.82548490493153,
                                        16.402583789292763
                                    ],
                                    [
                                        74.82548490493153,
                                        21.238532989243016
                                    ],
                                    [
                                        69.71004450347435,
                                        21.238532989243016
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
                                    72.3046,
                                    18.838
                                ],
                                [
                                    30.12,
                                    43.93
                                ],
                                [
                                    30.4398,
                                    44.048
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a257",
                    "number": 4
                },
                {
                    "asset": "a239",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 1
                },
                {
                    "asset": "a394",
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
                                    48.6421,
                                    38.4242
                                ],
                                [
                                    58.32,
                                    35.38
                                ],
                                [
                                    68.2,
                                    31.54
                                ],
                                [
                                    77.36,
                                    27.99
                                ],
                                [
                                    77.7142,
                                    27.9222
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
                                        73.69311714972204,
                                        31.30072694889342
                                    ],
                                    [
                                        73.69311714972204,
                                        24.434086301914718
                                    ],
                                    [
                                        81.48764470638972,
                                        24.434086301914718
                                    ],
                                    [
                                        81.48764470638972,
                                        31.30072694889342
                                    ],
                                    [
                                        73.69311714972204,
                                        31.30072694889342
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
                                    77.7142,
                                    27.9222
                                ],
                                [
                                    68.36,
                                    31.46
                                ],
                                [
                                    58.25,
                                    35.24
                                ],
                                [
                                    48.41,
                                    38.3
                                ],
                                [
                                    48.6421,
                                    38.4242
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a285",
                    "number": 5
                },
                {
                    "asset": "a252",
                    "number": 0
                },
                {
                    "asset": "a247",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 2
                },
                {
                    "asset": "a394",
                    "number": 2
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
                                    72.5957,
                                    45.9671
                                ],
                                [
                                    60.21,
                                    34.26
                                ],
                                [
                                    47.87,
                                    23.62
                                ],
                                [
                                    34.82,
                                    12.25
                                ],
                                [
                                    35.3062,
                                    11.7654
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
                                        33.64731802285244,
                                        13.374513676414688
                                    ],
                                    [
                                        33.64731802285244,
                                        10.146810965122928
                                    ],
                                    [
                                        36.945728917331444,
                                        10.146810965122928
                                    ],
                                    [
                                        36.945728917331444,
                                        13.374513676414688
                                    ],
                                    [
                                        33.64731802285244,
                                        13.374513676414688
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
                                    35.3062,
                                    11.7654
                                ],
                                [
                                    54.15,
                                    28.81
                                ],
                                [
                                    72.34,
                                    46.21
                                ],
                                [
                                    72.5957,
                                    45.9671
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-FIAC EZ",
            "ownAssets": [
                {
                    "asset": "a269",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 2
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
                                    72.5284,
                                    29.5975
                                ],
                                [
                                    57.68,
                                    16.36
                                ],
                                [
                                    42.24,
                                    3.53
                                ],
                                [
                                    42.562,
                                    3.3265
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
                                        41.68364034922167,
                                        4.202108583325915
                                    ],
                                    [
                                        41.68364034922167,
                                        2.4501127879636835
                                    ],
                                    [
                                        43.43879985718542,
                                        2.4501127879636835
                                    ],
                                    [
                                        43.43879985718542,
                                        4.202108583325915
                                    ],
                                    [
                                        41.68364034922167,
                                        4.202108583325915
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
                                    42.562,
                                    3.3265
                                ],
                                [
                                    57.6,
                                    16.3
                                ],
                                [
                                    72.12,
                                    29.76
                                ],
                                [
                                    72.5284,
                                    29.5975
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "a210",
                    "number": 0
                },
                {
                    "asset": "a245",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 5
                },
                {
                    "asset": "a394",
                    "number": 2
                },
                {
                    "asset": "a310",
                    "number": 1
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
                    "asset": "a201",
                    "number": 3,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 1,
                    "missileType": "SRBM"
                },
                {
                    "asset": "a394",
                    "number": 2,
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
                                    45.7926,
                                    19.9104
                                ],
                                [
                                    79.09,
                                    33.62
                                ],
                                [
                                    78.9575,
                                    33.3365
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
                                        75.64897331963306,
                                        35.97110126258531
                                    ],
                                    [
                                        75.64897331963306,
                                        30.619394261161634
                                    ],
                                    [
                                        82.06876773972004,
                                        30.619394261161634
                                    ],
                                    [
                                        82.06876773972004,
                                        35.97110126258531
                                    ],
                                    [
                                        75.64897331963306,
                                        35.97110126258531
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
                                    78.9575,
                                    33.3365
                                ],
                                [
                                    67.76,
                                    28.67
                                ],
                                [
                                    56.66,
                                    24.09
                                ],
                                [
                                    45.84,
                                    19.8
                                ],
                                [
                                    45.7926,
                                    19.9104
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a351",
                    "number": 4
                },
                {
                    "asset": "a357",
                    "number": 3
                },
                {
                    "asset": "a391",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 1
                },
                {
                    "asset": "a294",
                    "number": 5
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
                                    26.5375,
                                    48.9651
                                ],
                                [
                                    39.33,
                                    38.57
                                ],
                                [
                                    51.33,
                                    28.37
                                ],
                                [
                                    63.61,
                                    17.46
                                ],
                                [
                                    63.7965,
                                    17.5618
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a255",
                    "number": 1
                },
                {
                    "asset": "a246",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 3
                },
                {
                    "asset": "a394",
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
                                        45.430302855174865,
                                        53.69078059649893
                                    ],
                                    [
                                        45.430302855174865,
                                        46.85510311297199
                                    ],
                                    [
                                        56.23843752976189,
                                        46.85510311297199
                                    ],
                                    [
                                        56.23843752976189,
                                        53.69078059649893
                                    ],
                                    [
                                        45.430302855174865,
                                        53.69078059649893
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
                    "asset": "a314",
                    "number": 5
                },
                {
                    "asset": "a388",
                    "number": 1
                },
                {
                    "asset": "a393",
                    "number": 3
                },
                {
                    "asset": "a327",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 0
                },
                {
                    "asset": "a294",
                    "number": 3
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
                                    53.4296,
                                    42.5192
                                ],
                                [
                                    46.91,
                                    32.84
                                ],
                                [
                                    40.28,
                                    23.06
                                ],
                                [
                                    33.94,
                                    12.56
                                ],
                                [
                                    27.89,
                                    3.34
                                ],
                                [
                                    27.9086,
                                    3.0191
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
                                        26.570532823580507,
                                        4.352486800770313
                                    ],
                                    [
                                        26.570532823580507,
                                        1.684073751263609
                                    ],
                                    [
                                        29.24338417221488,
                                        1.684073751263609
                                    ],
                                    [
                                        29.24338417221488,
                                        4.352486800770313
                                    ],
                                    [
                                        26.570532823580507,
                                        4.352486800770313
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
                                    27.9086,
                                    3.0191
                                ],
                                [
                                    33.83,
                                    12.6
                                ],
                                [
                                    40.55,
                                    22.99
                                ],
                                [
                                    46.55,
                                    32.66
                                ],
                                [
                                    53.83,
                                    42.61
                                ],
                                [
                                    53.4296,
                                    42.5192
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a227",
                    "number": 0
                },
                {
                    "asset": "a287",
                    "number": 0
                },
                {
                    "asset": "a276",
                    "number": 2
                },
                {
                    "asset": "a293",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 2
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
                                    26.0148,
                                    5.8581
                                ],
                                [
                                    36.91,
                                    18.49
                                ],
                                [
                                    48.09,
                                    30.42
                                ],
                                [
                                    58.55,
                                    42.62
                                ],
                                [
                                    58.6101,
                                    43.018
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
                                        55.46684865037483,
                                        45.191153207550855
                                    ],
                                    [
                                        55.46684865037483,
                                        40.76478483600464
                                    ],
                                    [
                                        61.53464145076066,
                                        40.76478483600464
                                    ],
                                    [
                                        61.53464145076066,
                                        45.191153207550855
                                    ],
                                    [
                                        55.46684865037483,
                                        45.191153207550855
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
                                    58.6101,
                                    43.018
                                ],
                                [
                                    42.15,
                                    24.62
                                ],
                                [
                                    26.11,
                                    5.63
                                ],
                                [
                                    26.0148,
                                    5.8581
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a393",
                    "number": 4
                },
                {
                    "asset": "a341",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 3
                },
                {
                    "asset": "a294",
                    "number": 5
                },
                {
                    "asset": "a210",
                    "number": 5
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
                                    25.2276,
                                    21.8021
                                ],
                                [
                                    39.49,
                                    29.98
                                ],
                                [
                                    53.74,
                                    38.15
                                ],
                                [
                                    68.27,
                                    46.61
                                ],
                                [
                                    82.08,
                                    54.34
                                ],
                                [
                                    82.5566,
                                    54.7479
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
                                        81.76724451526312,
                                        55.19589823554347
                                    ],
                                    [
                                        81.76724451526312,
                                        54.294888651291345
                                    ],
                                    [
                                        83.32858616284973,
                                        54.294888651291345
                                    ],
                                    [
                                        83.32858616284973,
                                        55.19589823554347
                                    ],
                                    [
                                        81.76724451526312,
                                        55.19589823554347
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
                                    82.5566,
                                    54.7479
                                ],
                                [
                                    25.39,
                                    22.03
                                ],
                                [
                                    25.2276,
                                    21.8021
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a319",
                    "number": 3
                },
                {
                    "asset": "a349",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 3
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
                                    48.5851,
                                    47.9093
                                ],
                                [
                                    59.93,
                                    33.82
                                ],
                                [
                                    71.41,
                                    20.88
                                ],
                                [
                                    83.18,
                                    7.21
                                ],
                                [
                                    82.7245,
                                    6.8372
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
                                        80.23666857029117,
                                        9.286057731868548
                                    ],
                                    [
                                        80.23666857029117,
                                        4.375706016415178
                                    ],
                                    [
                                        85.18689012112266,
                                        4.375706016415178
                                    ],
                                    [
                                        85.18689012112266,
                                        9.286057731868548
                                    ],
                                    [
                                        80.23666857029117,
                                        9.286057731868548
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
                                        80.14332662898019,
                                        9.377025065218257
                                    ],
                                    [
                                        80.14332662898019,
                                        4.283778043025169
                                    ],
                                    [
                                        85.27829894811497,
                                        4.283778043025169
                                    ],
                                    [
                                        85.27829894811497,
                                        9.377025065218257
                                    ],
                                    [
                                        80.14332662898019,
                                        9.377025065218257
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
                                    82.7245,
                                    6.8372
                                ],
                                [
                                    71.36,
                                    20.22
                                ],
                                [
                                    60.06,
                                    34.68
                                ],
                                [
                                    49.05,
                                    47.42
                                ],
                                [
                                    48.5851,
                                    47.9093
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a294",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 4
                },
                {
                    "asset": "a394",
                    "number": 2
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
                                    81.1576,
                                    51.5173
                                ],
                                [
                                    57.43,
                                    3.7
                                ],
                                [
                                    57.1498,
                                    3.6874
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
                                        54.78344779260123,
                                        6.037491851673347
                                    ],
                                    [
                                        54.78344779260123,
                                        1.3310697326078218
                                    ],
                                    [
                                        59.50365483924016,
                                        1.3310697326078218
                                    ],
                                    [
                                        59.50365483924016,
                                        6.037491851673347
                                    ],
                                    [
                                        54.78344779260123,
                                        6.037491851673347
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
                                    57.1498,
                                    3.6874
                                ],
                                [
                                    63.48,
                                    15.42
                                ],
                                [
                                    68.68,
                                    28.02
                                ],
                                [
                                    75.17,
                                    39.91
                                ],
                                [
                                    80.94,
                                    51.08
                                ],
                                [
                                    81.1576,
                                    51.5173
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a229",
                    "number": 2
                },
                {
                    "asset": "a230",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 5
                },
                {
                    "asset": "a394",
                    "number": 4
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
                                    56.8146,
                                    3.8959
                                ],
                                [
                                    61.12,
                                    17.54
                                ],
                                [
                                    64.64,
                                    31.4
                                ],
                                [
                                    68.45,
                                    44.54
                                ],
                                [
                                    68.8674,
                                    44.4513
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
                                        64.8504212409568,
                                        47.11653486814193
                                    ],
                                    [
                                        64.8504212409568,
                                        41.65775500009346
                                    ],
                                    [
                                        72.52568625777143,
                                        41.65775500009346
                                    ],
                                    [
                                        72.52568625777143,
                                        47.11653486814193
                                    ],
                                    [
                                        64.8504212409568,
                                        47.11653486814193
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
                                    68.8674,
                                    44.4513
                                ],
                                [
                                    56.69,
                                    3.55
                                ],
                                [
                                    56.8146,
                                    3.8959
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a317",
                    "number": 0
                },
                {
                    "asset": "a400",
                    "number": 4
                },
                {
                    "asset": "a329",
                    "number": 1
                },
                {
                    "asset": "a358",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 4
                },
                {
                    "asset": "a294",
                    "number": 0
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
                                    35.6914,
                                    36.3273
                                ],
                                [
                                    33.73,
                                    29.34
                                ],
                                [
                                    31.91,
                                    21.5
                                ],
                                [
                                    29.39,
                                    13.94
                                ],
                                [
                                    29.6049,
                                    13.9108
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
                                        26.4175231180379,
                                        16.93934201292707
                                    ],
                                    [
                                        26.4175231180379,
                                        10.841963383371992
                                    ],
                                    [
                                        32.70932245512598,
                                        10.841963383371992
                                    ],
                                    [
                                        32.70932245512598,
                                        16.93934201292707
                                    ],
                                    [
                                        26.4175231180379,
                                        16.93934201292707
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
                                    29.6049,
                                    13.9108
                                ],
                                [
                                    31.97,
                                    21.69
                                ],
                                [
                                    33.43,
                                    28.57
                                ],
                                [
                                    36.18,
                                    36.74
                                ],
                                [
                                    35.6914,
                                    36.3273
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "a258",
                    "number": 2
                },
                {
                    "asset": "a230",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 1
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
                                    79.0293,
                                    17.9969
                                ],
                                [
                                    68.81,
                                    44.11
                                ],
                                [
                                    68.8674,
                                    44.4513
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
                                        65.6893017473744,
                                        46.59221733508737
                                    ],
                                    [
                                        65.6893017473744,
                                        42.228566358343514
                                    ],
                                    [
                                        71.81659564194064,
                                        42.228566358343514
                                    ],
                                    [
                                        71.81659564194064,
                                        46.59221733508737
                                    ],
                                    [
                                        65.6893017473744,
                                        46.59221733508737
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
                                        68.49219082764942,
                                        44.7173064435769
                                    ],
                                    [
                                        68.49219082764942,
                                        44.184076383092346
                                    ],
                                    [
                                        69.2391990592258,
                                        44.184076383092346
                                    ],
                                    [
                                        69.2391990592258,
                                        44.7173064435769
                                    ],
                                    [
                                        68.49219082764942,
                                        44.7173064435769
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
                                    68.8674,
                                    44.4513
                                ],
                                [
                                    78.61,
                                    17.8
                                ],
                                [
                                    79.0293,
                                    17.9969
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a356",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 5
                },
                {
                    "asset": "a294",
                    "number": 2
                },
                {
                    "asset": "a210",
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
                                    76.9147,
                                    8.0129
                                ],
                                [
                                    63.47,
                                    19.28
                                ],
                                [
                                    50.19,
                                    29.71
                                ],
                                [
                                    36.2,
                                    40.42
                                ],
                                [
                                    36.234,
                                    40.5992
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
                                        33.96439934184798,
                                        42.257152858502614
                                    ],
                                    [
                                        33.96439934184798,
                                        38.898993592175785
                                    ],
                                    [
                                        38.39237841897902,
                                        38.898993592175785
                                    ],
                                    [
                                        38.39237841897902,
                                        42.257152858502614
                                    ],
                                    [
                                        33.96439934184798,
                                        42.257152858502614
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
                                    36.234,
                                    40.5992
                                ],
                                [
                                    76.51,
                                    7.83
                                ],
                                [
                                    76.9147,
                                    8.0129
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "a309",
                    "number": 3
                },
                {
                    "asset": "a349",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
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
                                    42.9794,
                                    45.9585
                                ],
                                [
                                    83.04,
                                    7.08
                                ],
                                [
                                    82.7245,
                                    6.8372
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
                                        78.89218481013451,
                                        10.589131919676658
                                    ],
                                    [
                                        78.89218481013451,
                                        3.0554536160268895
                                    ],
                                    [
                                        86.49682713787105,
                                        3.0554536160268895
                                    ],
                                    [
                                        86.49682713787105,
                                        10.589131919676658
                                    ],
                                    [
                                        78.89218481013451,
                                        10.589131919676658
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
                                        80.28236924488975,
                                        9.241493571331901
                                    ],
                                    [
                                        80.28236924488975,
                                        4.4207278129930225
                                    ],
                                    [
                                        85.14211040590858,
                                        4.4207278129930225
                                    ],
                                    [
                                        85.14211040590858,
                                        9.241493571331901
                                    ],
                                    [
                                        80.28236924488975,
                                        9.241493571331901
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
                                    82.7245,
                                    6.8372
                                ],
                                [
                                    63.05,
                                    26.15
                                ],
                                [
                                    42.83,
                                    45.9
                                ],
                                [
                                    42.9794,
                                    45.9585
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a216",
                    "number": 2
                },
                {
                    "asset": "a241",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
                    "number": 4
                },
                {
                    "asset": "a394",
                    "number": 5
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
                                    31.5933,
                                    18.3718
                                ],
                                [
                                    56.94,
                                    36.7
                                ],
                                [
                                    82.71,
                                    54.45
                                ],
                                [
                                    82.5566,
                                    54.7479
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
                                        75.21141616258264,
                                        58.3885809142394
                                    ],
                                    [
                                        75.21141616258264,
                                        50.7386790755414
                                    ],
                                    [
                                        88.63488591010231,
                                        50.7386790755414
                                    ],
                                    [
                                        88.63488591010231,
                                        58.3885809142394
                                    ],
                                    [
                                        75.21141616258264,
                                        58.3885809142394
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
                                    82.5566,
                                    54.7479
                                ],
                                [
                                    31.45,
                                    17.88
                                ],
                                [
                                    31.5933,
                                    18.3718
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a376",
                    "number": 0
                },
                {
                    "asset": "a386",
                    "number": 4
                },
                {
                    "asset": "a327",
                    "number": 3
                },
                {
                    "asset": "a392",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 2
                },
                {
                    "asset": "a294",
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
                                    53.6,
                                    20.6305
                                ],
                                [
                                    38.02,
                                    29
                                ],
                                [
                                    37.8163,
                                    28.5733
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
                                        33.60232300108749,
                                        32.08003194427555
                                    ],
                                    [
                                        33.60232300108749,
                                        24.944912368151048
                                    ],
                                    [
                                        41.75373223028746,
                                        24.944912368151048
                                    ],
                                    [
                                        41.75373223028746,
                                        32.08003194427555
                                    ],
                                    [
                                        33.60232300108749,
                                        32.08003194427555
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
                                        36.584223697261045,
                                        29.63864553804159
                                    ],
                                    [
                                        36.584223697261045,
                                        27.49705014857949
                                    ],
                                    [
                                        39.023547245094484,
                                        27.49705014857949
                                    ],
                                    [
                                        39.023547245094484,
                                        29.63864553804159
                                    ],
                                    [
                                        36.584223697261045,
                                        29.63864553804159
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
                                    37.8163,
                                    28.5733
                                ],
                                [
                                    41.94,
                                    26.57
                                ],
                                [
                                    45.9,
                                    24.41
                                ],
                                [
                                    49.15,
                                    22.54
                                ],
                                [
                                    53.69,
                                    20.95
                                ],
                                [
                                    53.6,
                                    20.6305
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a392",
                    "number": 2
                },
                {
                    "asset": "a388",
                    "number": 2
                },
                {
                    "asset": "a314",
                    "number": 4
                },
                {
                    "asset": "a365",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 4
                },
                {
                    "asset": "a294",
                    "number": 0
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
                                    35.6473,
                                    7.6194
                                ],
                                [
                                    28.93,
                                    18.78
                                ],
                                [
                                    23.55,
                                    30.27
                                ],
                                [
                                    23.1603,
                                    30.6265
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
                                        18.575224472678446,
                                        34.334096085181564
                                    ],
                                    [
                                        18.575224472678446,
                                        26.770118157009932
                                    ],
                                    [
                                        27.400343595382477,
                                        26.770118157009932
                                    ],
                                    [
                                        27.400343595382477,
                                        34.334096085181564
                                    ],
                                    [
                                        18.575224472678446,
                                        34.334096085181564
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
                                    23.1603,
                                    30.6265
                                ],
                                [
                                    26.59,
                                    24.61
                                ],
                                [
                                    28.92,
                                    19.49
                                ],
                                [
                                    32.54,
                                    13.66
                                ],
                                [
                                    35.44,
                                    7.12
                                ],
                                [
                                    35.6473,
                                    7.6194
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a365",
                    "number": 0
                },
                {
                    "asset": "a346",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 4
                },
                {
                    "asset": "a294",
                    "number": 3
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
                                    37.506,
                                    47.4578
                                ],
                                [
                                    37.66,
                                    25.92
                                ],
                                [
                                    37.8228,
                                    26.3261
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
                                        37.24391063583842,
                                        26.841460415926527
                                    ],
                                    [
                                        37.24391063583842,
                                        25.80843541576117
                                    ],
                                    [
                                        38.396547945126294,
                                        25.80843541576117
                                    ],
                                    [
                                        38.396547945126294,
                                        26.841460415926527
                                    ],
                                    [
                                        37.24391063583842,
                                        26.841460415926527
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
                                    37.8228,
                                    26.3261
                                ],
                                [
                                    37.57,
                                    31.75
                                ],
                                [
                                    37.26,
                                    37.12
                                ],
                                [
                                    37.23,
                                    41.76
                                ],
                                [
                                    37.49,
                                    47.7
                                ],
                                [
                                    37.506,
                                    47.4578
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a291",
                    "number": 1
                },
                {
                    "asset": "a257",
                    "number": 3
                },
                {
                    "asset": "a251",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313",
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
                                    63.4197,
                                    20.0981
                                ],
                                [
                                    58.8,
                                    26.64
                                ],
                                [
                                    53.24,
                                    32.23
                                ],
                                [
                                    48.96,
                                    38.11
                                ],
                                [
                                    48.6421,
                                    38.4242
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
                                        47.58321188246806,
                                        39.23958810744218
                                    ],
                                    [
                                        47.58321188246806,
                                        37.59949742226104
                                    ],
                                    [
                                        49.67721297509168,
                                        37.59949742226104
                                    ],
                                    [
                                        49.67721297509168,
                                        39.23958810744218
                                    ],
                                    [
                                        47.58321188246806,
                                        39.23958810744218
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
                                    48.6421,
                                    38.4242
                                ],
                                [
                                    56.42,
                                    28.98
                                ],
                                [
                                    63.57,
                                    19.91
                                ],
                                [
                                    63.4197,
                                    20.0981
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a373",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 0
                },
                {
                    "asset": "a294",
                    "number": 1
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
                                        28.547991364206354,
                                        32.14502972419463
                                    ],
                                    [
                                        28.547991364206354,
                                        30.164213582514925
                                    ],
                                    [
                                        30.863406842068393,
                                        30.164213582514925
                                    ],
                                    [
                                        30.863406842068393,
                                        32.14502972419463
                                    ],
                                    [
                                        28.547991364206354,
                                        32.14502972419463
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
                    "asset": "a311",
                    "number": 3
                },
                {
                    "asset": "a345",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213",
                    "number": 1
                },
                {
                    "asset": "a294",
                    "number": 1
                },
                {
                    "asset": "a210",
                    "number": 3
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
                    "asset": "a266",
                    "number": 4,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a353",
                    "number": 5,
                    "missileType": "SRBM"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_143",
        "_rev": "2"
    }]