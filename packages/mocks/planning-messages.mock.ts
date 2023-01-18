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
            "messageType": "Maritime--MissileStrike",
            "timestamp": "2022-09-29T07:05:03.194Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-8",
            "title": "Order item 8",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:25:00.000Z",
            "activity": "f-blue-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "a1416",
                    "number": 3,
                    "missileType": "Jet OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1511",
                    "number": 1,
                    "missileType": "Standard Cruise"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_8",
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
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T06:45:00.000Z",
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a1597",
                    "number": 0
                },
                {
                    "asset": "a1580",
                    "number": 0
                },
                {
                    "asset": "a1590",
                    "number": 4
                },
                {
                    "asset": "a1528",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1410",
                    "number": 0
                },
                {
                    "asset": "a1422",
                    "number": 4
                },
                {
                    "asset": "a1406",
                    "number": 5
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "ISTAR-0",
                            "name": "f-red//3.8121305503746044//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.4257,
                                    13.5356
                                ],
                                [
                                    60.62,
                                    17.11
                                ],
                                [
                                    61.72,
                                    21.59
                                ],
                                [
                                    64.11,
                                    25.36
                                ],
                                [
                                    65.77,
                                    28.41
                                ],
                                [
                                    65.9858,
                                    28.9062
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651366500000,
                            "endTime": 1651374900000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//7.624261100749209//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        62.3107995550576,
                                        31.974657356581563
                                    ],
                                    [
                                        62.3107995550576,
                                        25.74380225508614
                                    ],
                                    [
                                        69.44648568130083,
                                        25.74380225508614
                                    ],
                                    [
                                        69.44648568130083,
                                        31.974657356581563
                                    ],
                                    [
                                        62.3107995550576,
                                        31.974657356581563
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
                            "startDate": "2022-05-01T03:15:00.000Z",
                            "endDate": "2022-05-01T04:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651374900000,
                            "endTime": 1651380900000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//11.436391651123813//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        62.691178227749575,
                                        31.670753899513077
                                    ],
                                    [
                                        62.691178227749575,
                                        26.06569020501461
                                    ],
                                    [
                                        69.10708945964538,
                                        26.06569020501461
                                    ],
                                    [
                                        69.10708945964538,
                                        31.670753899513077
                                    ],
                                    [
                                        62.691178227749575,
                                        31.670753899513077
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
                            "startDate": "2022-05-01T04:55:00.000Z",
                            "endDate": "2022-05-01T06:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651380900000,
                            "endTime": 1651387500000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//15.248522201498417//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    65.9858,
                                    28.9062
                                ],
                                [
                                    63.55,
                                    23.43
                                ],
                                [
                                    61.18,
                                    19.01
                                ],
                                [
                                    58.08,
                                    13.87
                                ],
                                [
                                    58.4257,
                                    13.5356
                                ]
                            ]
                        }
                    }
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
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T03:15:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "a1425",
                    "number": 4
                },
                {
                    "asset": "a1499",
                    "number": 4
                },
                {
                    "asset": "a1495",
                    "number": 2
                },
                {
                    "asset": "a1412",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1511",
                    "number": 1
                },
                {
                    "asset": "a1598",
                    "number": 3
                },
                {
                    "asset": "a1507",
                    "number": 4
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//3.412459935258994//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    65.95108316981414,
                                    30.855987403767013
                                ],
                                [
                                    72.6,
                                    26.59
                                ],
                                [
                                    78.34,
                                    21.4
                                ],
                                [
                                    84.37,
                                    17.5
                                ],
                                [
                                    84.8716,
                                    17.0607
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T02:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651373700000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//6.824919870517988//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        84.61218875593438,
                                        17.308200078329378
                                    ],
                                    [
                                        84.61218875593438,
                                        16.812871376441333
                                    ],
                                    [
                                        85.1303239110965,
                                        16.812871376441333
                                    ],
                                    [
                                        85.1303239110965,
                                        17.308200078329378
                                    ],
                                    [
                                        84.61218875593438,
                                        17.308200078329378
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
                            "startDate": "2022-05-01T02:55:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373700000,
                            "endTime": 1651374900000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//10.237379805776982//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    84.8716,
                                    17.0607
                                ],
                                [
                                    75.64,
                                    23.81
                                ],
                                [
                                    65.8,
                                    30.95
                                ],
                                [
                                    65.95108316981414,
                                    30.855987403767013
                                ]
                            ]
                        }
                    }
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
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T05:35:00.000Z",
            "activity": "f-blue-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "a1412",
                    "number": 4
                },
                {
                    "asset": "a1469",
                    "number": 4
                },
                {
                    "asset": "a1446",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1511",
                    "number": 5
                },
                {
                    "asset": "a1598",
                    "number": 1
                },
                {
                    "asset": "a1507",
                    "number": 5
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//6.906210489443765//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    53.013,
                                    43.9854
                                ],
                                [
                                    59.53,
                                    28.71
                                ],
                                [
                                    66.35,
                                    12.73
                                ],
                                [
                                    66.1441,
                                    12.8505
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T03:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651374300000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//13.81242097888753//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        62.30244573180631,
                                        16.506104802627146
                                    ],
                                    [
                                        62.30244573180631,
                                        9.140671128956397
                                    ],
                                    [
                                        69.87465350509437,
                                        9.140671128956397
                                    ],
                                    [
                                        69.87465350509437,
                                        16.506104802627146
                                    ],
                                    [
                                        62.30244573180631,
                                        16.506104802627146
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
                            "startDate": "2022-05-01T03:05:00.000Z",
                            "endDate": "2022-05-01T05:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651374300000,
                            "endTime": 1651383300000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//20.718631468331296//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.1441,
                                    12.8505
                                ],
                                [
                                    62.25,
                                    23.52
                                ],
                                [
                                    57.39,
                                    33.23
                                ],
                                [
                                    52.82,
                                    44.22
                                ],
                                [
                                    53.013,
                                    43.9854
                                ]
                            ]
                        }
                    }
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
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "a1455",
                    "number": 5
                },
                {
                    "asset": "a1497",
                    "number": 4
                },
                {
                    "asset": "a1460",
                    "number": 0
                },
                {
                    "asset": "a1451",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1511",
                    "number": 2
                },
                {
                    "asset": "a1598",
                    "number": 5
                },
                {
                    "asset": "a1507",
                    "number": 2
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Transit-0",
                            "name": "f-blue//4.293382212938013//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.9851,
                                    38.9795
                                ],
                                [
                                    62.36,
                                    23.53
                                ],
                                [
                                    46.08,
                                    8.43
                                ],
                                [
                                    46.3364,
                                    8.1792
                                ]
                            ]
                        }
                    }
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
            "messageType": "Air--EWAttack",
            "timestamp": "2022-09-27T12:34:45.461Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-21",
            "title": "Order item 21",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T06:55:00.000Z",
            "activity": "f-blue-Air-EW Attack",
            "ownAssets": [
                {
                    "asset": "a1451",
                    "number": 2
                },
                {
                    "asset": "a1477",
                    "number": 4
                },
                {
                    "asset": "a1422",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1511",
                    "number": 3
                },
                {
                    "asset": "a1598",
                    "number": 4
                }
            ],
            "location": [
                {
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "EW Attack-0",
                            "name": "f-blue//5.573975105719001//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    80.5757,
                                    48.4039
                                ],
                                [
                                    60.94,
                                    39.66
                                ],
                                [
                                    41.37,
                                    30.97
                                ],
                                [
                                    22.07,
                                    22.57
                                ],
                                [
                                    22.337,
                                    22.3086
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T04:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651377900000,
                            "geomId": "EW Attack-1",
                            "name": "f-blue//11.147950211438001//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.43936316037677,
                                        23.131611275529668
                                    ],
                                    [
                                        21.43936316037677,
                                        21.4807080835106
                                    ],
                                    [
                                        23.22408666897485,
                                        21.4807080835106
                                    ],
                                    [
                                        23.22408666897485,
                                        23.131611275529668
                                    ],
                                    [
                                        21.43936316037677,
                                        23.131611275529668
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
                            "startDate": "2022-05-01T04:05:00.000Z",
                            "endDate": "2022-05-01T06:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651377900000,
                            "endTime": 1651388100000,
                            "geomId": "EW Attack-2",
                            "name": "f-blue//16.721925317157//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.337,
                                    22.3086
                                ],
                                [
                                    80.22,
                                    48.44
                                ],
                                [
                                    80.5757,
                                    48.4039
                                ]
                            ]
                        }
                    }
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
            "messageType": "Air--Transit",
            "timestamp": "2022-09-22T05:08:12.707Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-24",
            "title": "Order item 24",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "a1401",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1511",
                    "number": 3
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Transit-0",
                            "name": "f-blue//5.747989167804917//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.4778,
                                    49.1706
                                ],
                                [
                                    66.87,
                                    33.24
                                ],
                                [
                                    58.7,
                                    17.75
                                ],
                                [
                                    58.8453,
                                    17.7983
                                ]
                            ]
                        }
                    }
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
            "messageType": "Air--Patrol",
            "timestamp": "2022-09-29T19:25:40.744Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-27",
            "title": "Order item 27",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T03:35:00.000Z",
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a1508",
                    "number": 1
                },
                {
                    "asset": "a1576",
                    "number": 1
                },
                {
                    "asset": "a1521",
                    "number": 5
                },
                {
                    "asset": "a1570",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1410",
                    "number": 3
                },
                {
                    "asset": "a1422",
                    "number": 5
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Patrol-0",
                            "name": "f-red//4.815424399195763//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    79.2237,
                                    15.0117
                                ],
                                [
                                    76.26,
                                    46.11
                                ],
                                [
                                    76.1469,
                                    46.4656
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T01:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651366500000,
                            "endTime": 1651367700000,
                            "geomId": "Patrol-1",
                            "name": "f-red//9.630848798391526//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        70.47241315362156,
                                        49.97996020712917
                                    ],
                                    [
                                        70.47241315362156,
                                        42.70537951523277
                                    ],
                                    [
                                        81.11063971426724,
                                        42.70537951523277
                                    ],
                                    [
                                        81.11063971426724,
                                        49.97996020712917
                                    ],
                                    [
                                        70.47241315362156,
                                        49.97996020712917
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
                            "startDate": "2022-05-01T01:15:00.000Z",
                            "endDate": "2022-05-01T03:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651367700000,
                            "endTime": 1651376100000,
                            "geomId": "Patrol-2",
                            "name": "f-red//14.446273197587288//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.1469,
                                    46.4656
                                ],
                                [
                                    77.49,
                                    36.26
                                ],
                                [
                                    77.97,
                                    25.18
                                ],
                                [
                                    78.72,
                                    15.38
                                ],
                                [
                                    79.2237,
                                    15.0117
                                ]
                            ]
                        }
                    }
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-25T07:27:09.572Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-30",
            "title": "Order item 30",
            "startDate": "2022-05-01T00:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-red-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a1570",
                    "number": 1
                },
                {
                    "asset": "a1549",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1410",
                    "number": 0
                },
                {
                    "asset": "a1422",
                    "number": 3
                },
                {
                    "asset": "a1406",
                    "number": 0
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T00:10:00.000Z",
                            "endDate": "2022-05-01T01:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651363800000,
                            "endTime": 1651366800000,
                            "geomId": "Patrol-0",
                            "name": "f-red//2.7762807999097276//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.8087,
                                    28.3521
                                ],
                                [
                                    72.93,
                                    35.44
                                ],
                                [
                                    72.33,
                                    41.81
                                ],
                                [
                                    71.01,
                                    48.46
                                ],
                                [
                                    71.0643,
                                    48.8366
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
                            "startDate": "2022-05-01T01:00:00.000Z",
                            "endDate": "2022-05-01T01:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651366800000,
                            "endTime": 1651369800000,
                            "geomId": "Patrol-1",
                            "name": "f-red//5.552561599819455//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        67.29337048188337,
                                        51.142740130092825
                                    ],
                                    [
                                        67.29337048188337,
                                        46.41846518571156
                                    ],
                                    [
                                        74.49564378405778,
                                        46.41846518571156
                                    ],
                                    [
                                        74.49564378405778,
                                        51.142740130092825
                                    ],
                                    [
                                        67.29337048188337,
                                        51.142740130092825
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
                            "startDate": "2022-05-01T01:50:00.000Z",
                            "endDate": "2022-05-01T04:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651369800000,
                            "endTime": 1651377600000,
                            "geomId": "Patrol-2",
                            "name": "f-red//8.328842399729183//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    71.0643,
                                    48.8366
                                ],
                                [
                                    72.12,
                                    43.62
                                ],
                                [
                                    71.96,
                                    38.19
                                ],
                                [
                                    73.08,
                                    33.05
                                ],
                                [
                                    73.49,
                                    28.18
                                ],
                                [
                                    73.8087,
                                    28.3521
                                ]
                            ]
                        }
                    }
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
            "startDate": "2022-05-01T00:30:00.000Z",
            "endDate": "2022-05-01T05:00:00.000Z",
            "activity": "f-red-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a1588",
                    "number": 1
                },
                {
                    "asset": "a1549",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1410",
                    "number": 5
                },
                {
                    "asset": "a1422",
                    "number": 1
                },
                {
                    "asset": "a1406",
                    "number": 2
                }
            ],
            "location": [
                {
                    "uniqid": "SOF Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Route out",
                            "startDate": "2022-05-01T00:30:00.000Z",
                            "endDate": "2022-05-01T01:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651365000000,
                            "endTime": 1651368000000,
                            "geomId": "SOF Activity-0",
                            "name": "f-red//4.630558369892242//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.99749722692438,
                                    2.4100157800877477
                                ],
                                [
                                    47.73,
                                    12.1
                                ],
                                [
                                    39.62,
                                    20.96
                                ],
                                [
                                    30.81,
                                    30.1
                                ],
                                [
                                    30.8457,
                                    30.2848
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
                            "startDate": "2022-05-01T01:20:00.000Z",
                            "endDate": "2022-05-01T01:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651368000000,
                            "endTime": 1651368000000,
                            "geomId": "SOF Activity-1",
                            "name": "f-red//9.261116739784484//Activity Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        29.683921869543337,
                                        31.27268340693944
                                    ],
                                    [
                                        29.683921869543337,
                                        29.2868633725399
                                    ],
                                    [
                                        31.984197641804542,
                                        29.2868633725399
                                    ],
                                    [
                                        31.984197641804542,
                                        31.27268340693944
                                    ],
                                    [
                                        29.683921869543337,
                                        31.27268340693944
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
                            "startDate": "2022-05-01T01:20:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651368000000,
                            "endTime": 1651373400000,
                            "geomId": "SOF Activity-2",
                            "name": "f-red//13.891675109676726//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        26.476150498109757,
                                        33.84301706611012
                                    ],
                                    [
                                        26.476150498109757,
                                        26.59178225741251
                                    ],
                                    [
                                        34.90367690301052,
                                        26.59178225741251
                                    ],
                                    [
                                        34.90367690301052,
                                        33.84301706611012
                                    ],
                                    [
                                        26.476150498109757,
                                        33.84301706611012
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651373400000,
                            "endTime": 1651381200000,
                            "geomId": "SOF Activity-3",
                            "name": "f-red//18.522233479568968//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.8457,
                                    30.2848
                                ],
                                [
                                    43.36,
                                    16.44
                                ],
                                [
                                    56.28,
                                    2
                                ],
                                [
                                    55.99749722692438,
                                    2.4100157800877477
                                ]
                            ]
                        }
                    }
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-21T16:42:09.598Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-36",
            "title": "Order item 36",
            "startDate": "2022-05-01T00:45:00.000Z",
            "endDate": "2022-05-01T02:45:00.000Z",
            "activity": "f-blue-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a1459",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1511",
                    "number": 0
                },
                {
                    "asset": "a1598",
                    "number": 1
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T00:45:00.000Z",
                            "endDate": "2022-05-01T01:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651365900000,
                            "endTime": 1651368900000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//5.378257109216065//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.4742,
                                    49.6839
                                ],
                                [
                                    54.89,
                                    42.19
                                ],
                                [
                                    49.16,
                                    33.56
                                ],
                                [
                                    42.71,
                                    26.21
                                ],
                                [
                                    36.55,
                                    18.14
                                ],
                                [
                                    36.1872,
                                    18.1089
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
                            "startDate": "2022-05-01T01:35:00.000Z",
                            "endDate": "2022-05-01T02:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651368900000,
                            "endTime": 1651372500000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//10.75651421843213//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        33.147013399067205,
                                        20.924972721945295
                                    ],
                                    [
                                        33.147013399067205,
                                        15.246694803401269
                                    ],
                                    [
                                        39.1303922879578,
                                        15.246694803401269
                                    ],
                                    [
                                        39.1303922879578,
                                        20.924972721945295
                                    ],
                                    [
                                        33.147013399067205,
                                        20.924972721945295
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
                            "startDate": "2022-05-01T02:35:00.000Z",
                            "endDate": "2022-05-01T02:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651372500000,
                            "endTime": 1651373100000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//16.134771327648195//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.1872,
                                    18.1089
                                ],
                                [
                                    44.39,
                                    28.19
                                ],
                                [
                                    52.86,
                                    39.52
                                ],
                                [
                                    61.61,
                                    50.15
                                ],
                                [
                                    61.4742,
                                    49.6839
                                ]
                            ]
                        }
                    }
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
            "startDate": "2022-05-01T00:45:00.000Z",
            "endDate": "2022-05-01T03:55:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a1585",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1410",
                    "number": 2
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T00:45:00.000Z",
                            "endDate": "2022-05-01T01:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651365900000,
                            "endTime": 1651368900000,
                            "geomId": "Patrol-0",
                            "name": "f-red//5.019377017772058//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.9429,
                                    13.2977
                                ],
                                [
                                    46.42,
                                    21.21
                                ],
                                [
                                    43.12,
                                    29.35
                                ],
                                [
                                    40.11,
                                    36.78
                                ],
                                [
                                    39.95160634033889,
                                    37.26630724321471
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
                            "startDate": "2022-05-01T01:35:00.000Z",
                            "endDate": "2022-05-01T03:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1651368900000,
                            "endTime": 1651375500000,
                            "geomId": "Patrol-1",
                            "name": "f-red//10.038754035544116//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        39.28619785806313,
                                        37.790298704458685
                                    ],
                                    [
                                        39.28619785806313,
                                        36.73864343677834
                                    ],
                                    [
                                        40.60778638200045,
                                        36.73864343677834
                                    ],
                                    [
                                        40.60778638200045,
                                        37.790298704458685
                                    ],
                                    [
                                        39.28619785806313,
                                        37.790298704458685
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
                            "startDate": "2022-05-01T03:25:00.000Z",
                            "endDate": "2022-05-01T03:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651375500000,
                            "endTime": 1651377300000,
                            "geomId": "Patrol-2",
                            "name": "f-red//15.058131053316174//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    39.95160634033889,
                                    37.26630724321471
                                ],
                                [
                                    41.81,
                                    30.78
                                ],
                                [
                                    44.53,
                                    25.16
                                ],
                                [
                                    46.54,
                                    18.82
                                ],
                                [
                                    48.83,
                                    13.77
                                ],
                                [
                                    48.9429,
                                    13.2977
                                ]
                            ]
                        }
                    }
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
            "messageType": "Land--EWAttack",
            "timestamp": "2022-09-28T00:53:12.787Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-42",
            "title": "Order item 42",
            "startDate": "2022-05-01T00:50:00.000Z",
            "endDate": "2022-05-01T04:30:00.000Z",
            "activity": "f-red-Land-EW Attack",
            "ownAssets": [
                {
                    "asset": "a1564",
                    "number": 5
                },
                {
                    "asset": "a1582",
                    "number": 2
                },
                {
                    "asset": "a1524",
                    "number": 3
                },
                {
                    "asset": "a1600",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1410",
                    "number": 5
                },
                {
                    "asset": "a1422",
                    "number": 0
                },
                {
                    "asset": "a1406",
                    "number": 2
                }
            ],
            "location": [
                {
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-05-01T00:50:00.000Z",
                            "endDate": "2022-05-01T01:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651366200000,
                            "endTime": 1651369200000,
                            "geomId": "EW Attack-0",
                            "name": "f-red//3.55391809566936//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.51501640706811,
                                    22.91132256963926
                                ],
                                [
                                    54.59,
                                    28.03
                                ],
                                [
                                    66.91,
                                    33.4
                                ],
                                [
                                    77.52,
                                    39.05
                                ],
                                [
                                    77.9851,
                                    38.9795
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
                            "startDate": "2022-05-01T01:40:00.000Z",
                            "endDate": "2022-05-01T02:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651369200000,
                            "endTime": 1651372200000,
                            "geomId": "EW Attack-1",
                            "name": "f-red//7.10783619133872//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        74.24320260403535,
                                        41.71441561298168
                                    ],
                                    [
                                        74.24320260403535,
                                        36.13409601947375
                                    ],
                                    [
                                        81.44323772759078,
                                        36.13409601947375
                                    ],
                                    [
                                        81.44323772759078,
                                        41.71441561298168
                                    ],
                                    [
                                        74.24320260403535,
                                        41.71441561298168
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
                            "startDate": "2022-05-01T02:30:00.000Z",
                            "endDate": "2022-05-01T04:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651372200000,
                            "endTime": 1651379400000,
                            "geomId": "EW Attack-2",
                            "name": "f-red//10.66175428700808//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.9851,
                                    38.9795
                                ],
                                [
                                    60.74,
                                    30.81
                                ],
                                [
                                    44,
                                    23.14
                                ],
                                [
                                    43.51501640706811,
                                    22.91132256963926
                                ]
                            ]
                        }
                    }
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
            "messageType": "Land--Standard",
            "timestamp": "2022-09-29T17:34:45.567Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-45",
            "title": "Order item 45",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "a1476",
                    "number": 3
                },
                {
                    "asset": "a1491",
                    "number": 1
                },
                {
                    "asset": "a1430",
                    "number": 4
                },
                {
                    "asset": "a1494",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1511",
                    "number": 5
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//5.981880342907971//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.3538,
                                    43.2318
                                ],
                                [
                                    65.66,
                                    17.45
                                ],
                                [
                                    65.6216,
                                    17.8017
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651370400000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//11.963760685815942//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        64.63672609795762,
                                        18.731950686258962
                                    ],
                                    [
                                        64.63672609795762,
                                        16.866572744529307
                                    ],
                                    [
                                        66.59623119218693,
                                        16.866572744529307
                                    ],
                                    [
                                        66.59623119218693,
                                        18.731950686258962
                                    ],
                                    [
                                        64.63672609795762,
                                        18.731950686258962
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651377600000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//17.945641028723912//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    65.6216,
                                    17.8017
                                ],
                                [
                                    62.16,
                                    30.49
                                ],
                                [
                                    58.04,
                                    43.54
                                ],
                                [
                                    58.3538,
                                    43.2318
                                ]
                            ]
                        }
                    }
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-27T16:00:19.138Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-48",
            "title": "Order item 48",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T07:00:00.000Z",
            "activity": "f-red-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "a1590",
                    "number": 0
                },
                {
                    "asset": "a1577",
                    "number": 1
                },
                {
                    "asset": "a1592",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1410",
                    "number": 4
                },
                {
                    "asset": "a1422",
                    "number": 4
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Resupply-0",
                            "name": "f-red//2.303263759415131//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.6501790165323,
                                    2.315521434413741
                                ],
                                [
                                    57.42,
                                    13.97
                                ],
                                [
                                    59.06,
                                    26.48
                                ],
                                [
                                    59.97,
                                    38.28
                                ],
                                [
                                    61.17,
                                    49.36
                                ],
                                [
                                    61.4742,
                                    49.6839
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651380000000,
                            "geomId": "Resupply-1",
                            "name": "f-red//4.606527518830262//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        59.191609853778104,
                                        51.095418113791816
                                    ],
                                    [
                                        59.191609853778104,
                                        48.23007553986356
                                    ],
                                    [
                                        63.62611982480864,
                                        48.23007553986356
                                    ],
                                    [
                                        63.62611982480864,
                                        51.095418113791816
                                    ],
                                    [
                                        59.191609853778104,
                                        51.095418113791816
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
                            "startDate": "2022-05-01T04:40:00.000Z",
                            "endDate": "2022-05-01T07:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651380000000,
                            "endTime": 1651388400000,
                            "geomId": "Resupply-2",
                            "name": "f-red//6.909791278245393//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.4742,
                                    49.6839
                                ],
                                [
                                    58.32,
                                    26.03
                                ],
                                [
                                    55.7,
                                    1.91
                                ],
                                [
                                    55.6501790165323,
                                    2.315521434413741
                                ]
                            ]
                        }
                    }
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
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T06:30:00.000Z",
            "activity": "f-blue-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a1434",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1511",
                    "number": 1
                },
                {
                    "asset": "a1598",
                    "number": 5
                }
            ],
            "location": [
                {
                    "uniqid": "SOF Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "SOF Activity-0",
                            "name": "f-blue//2.5180683452636003//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.414,
                                    43.7171
                                ],
                                [
                                    37.68,
                                    39.46
                                ],
                                [
                                    37.8,
                                    34.05
                                ],
                                [
                                    37.2,
                                    29.92
                                ],
                                [
                                    35.89,
                                    25.08
                                ],
                                [
                                    36.2442,
                                    25.3202
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651375800000,
                            "geomId": "SOF Activity-1",
                            "name": "f-blue//5.036136690527201//Activity Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        33.24142721119378,
                                        27.942875145676364
                                    ],
                                    [
                                        33.24142721119378,
                                        22.63929381360915
                                    ],
                                    [
                                        39.118248985521724,
                                        22.63929381360915
                                    ],
                                    [
                                        39.118248985521724,
                                        27.942875145676364
                                    ],
                                    [
                                        33.24142721119378,
                                        27.942875145676364
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
                            "startDate": "2022-05-01T03:30:00.000Z",
                            "endDate": "2022-05-01T05:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651375800000,
                            "endTime": 1651381800000,
                            "geomId": "SOF Activity-2",
                            "name": "f-blue//7.554205035790801//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        34.06645499282251,
                                        27.240574836359652
                                    ],
                                    [
                                        34.06645499282251,
                                        23.36883247591565
                                    ],
                                    [
                                        38.35340470387628,
                                        23.36883247591565
                                    ],
                                    [
                                        38.35340470387628,
                                        27.240574836359652
                                    ],
                                    [
                                        34.06645499282251,
                                        27.240574836359652
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
                            "startDate": "2022-05-01T05:10:00.000Z",
                            "endDate": "2022-05-01T06:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381800000,
                            "endTime": 1651386600000,
                            "geomId": "SOF Activity-3",
                            "name": "f-blue//10.072273381054401//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.2442,
                                    25.3202
                                ],
                                [
                                    37.74,
                                    34.18
                                ],
                                [
                                    38.63,
                                    43.42
                                ],
                                [
                                    38.414,
                                    43.7171
                                ]
                            ]
                        }
                    }
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
            "messageType": "Air--Patrol",
            "timestamp": "2022-09-28T22:03:28.651Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-54",
            "title": "Order item 54",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T04:40:00.000Z",
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a1535",
                    "number": 1
                },
                {
                    "asset": "a1592",
                    "number": 4
                },
                {
                    "asset": "a1577",
                    "number": 2
                },
                {
                    "asset": "a1590",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1410",
                    "number": 2
                },
                {
                    "asset": "a1422",
                    "number": 0
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Patrol-0",
                            "name": "f-red//6.6262941003078595//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.967,
                                    3.7628
                                ],
                                [
                                    62.7,
                                    14.13
                                ],
                                [
                                    47.68,
                                    24.76
                                ],
                                [
                                    30.95,
                                    35.67
                                ],
                                [
                                    31.41419393595675,
                                    35.60218670849865
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T04:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651378800000,
                            "geomId": "Patrol-1",
                            "name": "f-red//13.252588200615719//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        27.381576810021347,
                                        38.68447244447154
                                    ],
                                    [
                                        27.381576810021347,
                                        32.3956676499118
                                    ],
                                    [
                                        35.141810597349604,
                                        32.3956676499118
                                    ],
                                    [
                                        35.141810597349604,
                                        38.68447244447154
                                    ],
                                    [
                                        27.381576810021347,
                                        38.68447244447154
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
                            "startDate": "2022-05-01T04:20:00.000Z",
                            "endDate": "2022-05-01T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651378800000,
                            "endTime": 1651380000000,
                            "geomId": "Patrol-2",
                            "name": "f-red//19.87888230092358//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.41419393595675,
                                    35.60218670849865
                                ],
                                [
                                    54.97,
                                    19.87
                                ],
                                [
                                    78.97,
                                    3.58
                                ],
                                [
                                    78.967,
                                    3.7628
                                ]
                            ]
                        }
                    }
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
            "startDate": "2022-05-01T01:20:00.000Z",
            "endDate": "2022-05-01T05:00:00.000Z",
            "activity": "f-red-Land-EW Attack",
            "ownAssets": [
                {
                    "asset": "a1590",
                    "number": 3
                },
                {
                    "asset": "a1531",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1410",
                    "number": 5
                }
            ],
            "location": [
                {
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-05-01T01:20:00.000Z",
                            "endDate": "2022-05-01T02:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651368000000,
                            "endTime": 1651371000000,
                            "geomId": "EW Attack-0",
                            "name": "f-red//4.627941024693428//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.967,
                                    3.7628
                                ],
                                [
                                    76.82,
                                    18.75
                                ],
                                [
                                    73.88,
                                    33.93
                                ],
                                [
                                    71.22,
                                    48.4
                                ],
                                [
                                    71.0643,
                                    48.8366
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
                            "startDate": "2022-05-01T02:10:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651371000000,
                            "endTime": 1651381200000,
                            "geomId": "EW Attack-1",
                            "name": "f-red//9.255882049386855//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        66.60353845046515,
                                        51.52864413333036
                                    ],
                                    [
                                        66.60353845046515,
                                        45.99032367918928
                                    ],
                                    [
                                        75.05777648339935,
                                        45.99032367918928
                                    ],
                                    [
                                        75.05777648339935,
                                        51.52864413333036
                                    ],
                                    [
                                        66.60353845046515,
                                        51.52864413333036
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
                            "startDate": "2022-05-01T05:00:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651381200000,
                            "endTime": 1651381200000,
                            "geomId": "EW Attack-2",
                            "name": "f-red//13.883823074080283//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    71.0643,
                                    48.8366
                                ],
                                [
                                    75.11,
                                    26.05
                                ],
                                [
                                    78.66,
                                    3.77
                                ],
                                [
                                    78.967,
                                    3.7628
                                ]
                            ]
                        }
                    }
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
            "startDate": "2022-05-01T01:30:00.000Z",
            "endDate": "2022-05-01T07:50:00.000Z",
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a1600",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1410",
                    "number": 5
                },
                {
                    "asset": "a1422",
                    "number": 0
                },
                {
                    "asset": "a1406",
                    "number": 1
                }
            ],
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-05-01T01:30:00.000Z",
                            "endDate": "2022-05-01T02:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651368600000,
                            "endTime": 1651371600000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-red//6.523009118420305//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.7198,
                                    27.2142
                                ],
                                [
                                    52.51,
                                    38.63
                                ],
                                [
                                    63.63,
                                    50.38
                                ],
                                [
                                    63.9306,
                                    50.0234
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
                            "startDate": "2022-05-01T02:20:00.000Z",
                            "endDate": "2022-05-01T05:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651371600000,
                            "endTime": 1651381800000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-red//13.04601823684061//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        58.86452892451855,
                                        52.96848773750592
                                    ],
                                    [
                                        58.86452892451855,
                                        46.88375908607374
                                    ],
                                    [
                                        68.39330322501816,
                                        46.88375908607374
                                    ],
                                    [
                                        68.39330322501816,
                                        52.96848773750592
                                    ],
                                    [
                                        58.86452892451855,
                                        52.96848773750592
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
                            "startDate": "2022-05-01T05:10:00.000Z",
                            "endDate": "2022-05-01T07:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651381800000,
                            "endTime": 1651391400000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-red//19.569027355260914//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.9306,
                                    50.0234
                                ],
                                [
                                    57.93,
                                    44.52
                                ],
                                [
                                    51.86,
                                    38.93
                                ],
                                [
                                    46.07,
                                    32.63
                                ],
                                [
                                    40.57,
                                    27.61
                                ],
                                [
                                    40.7198,
                                    27.2142
                                ]
                            ]
                        }
                    }
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
            "messageType": "Maritime--EWAttack",
            "timestamp": "2022-09-27T14:08:18.849Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-63",
            "title": "Order item 63",
            "startDate": "2022-05-01T01:50:00.000Z",
            "endDate": "2022-05-01T04:50:00.000Z",
            "activity": "f-blue-Maritime-EW Attack",
            "ownAssets": [
                {
                    "asset": "a1465",
                    "number": 2
                },
                {
                    "asset": "a1478",
                    "number": 1
                },
                {
                    "asset": "a1412",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a1511",
                    "number": 0
                }
            ],
            "location": [
                {
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-05-01T01:50:00.000Z",
                            "endDate": "2022-05-01T02:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651369800000,
                            "endTime": 1651372800000,
                            "geomId": "EW Attack-0",
                            "name": "f-blue//2.311498381488491//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.6607,
                                    35.409
                                ],
                                [
                                    82.35,
                                    28.67
                                ],
                                [
                                    85.39,
                                    22.28
                                ],
                                [
                                    85.7463,
                                    21.9387
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
                            "startDate": "2022-05-01T02:40:00.000Z",
                            "endDate": "2022-05-01T03:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651372800000,
                            "endTime": 1651374000000,
                            "geomId": "EW Attack-1",
                            "name": "f-blue//4.622996762976982//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        81.50533951108581,
                                        25.70634192682153
                                    ],
                                    [
                                        81.50533951108581,
                                        18.067969072318252
                                    ],
                                    [
                                        89.76535532261386,
                                        18.067969072318252
                                    ],
                                    [
                                        89.76535532261386,
                                        25.70634192682153
                                    ],
                                    [
                                        81.50533951108581,
                                        25.70634192682153
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
                            "startDate": "2022-05-01T03:00:00.000Z",
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651374000000,
                            "endTime": 1651380600000,
                            "geomId": "EW Attack-2",
                            "name": "f-blue//6.9344951444654725//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.7463,
                                    21.9387
                                ],
                                [
                                    82.19,
                                    28.86
                                ],
                                [
                                    78.98,
                                    35.11
                                ],
                                [
                                    78.6607,
                                    35.409
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_63",
        "_rev": "2"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "umpire",
                "roleName": "Game Designer"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-01-17T17:08:36.076Z",
            "turnNumber": 3,
            "counter": 1,
            "interaction": {
                "startTime": "2022-05-01T01:10:00.000Z",
                "endTime": "2022-05-01T00:55:00.000Z",
                "id": "umpire-1",
                "orders1": "m_f-blue_24",
                "orders2": "m_f-red_54",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-1",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-01-17T17:08:36.076Z//0"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "umpire",
                "roleName": "Game Designer"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-01-17T17:08:36.076Z",
            "turnNumber": 3,
            "counter": 2,
            "interaction": {
                "startTime": "2022-05-01T01:10:00.000Z",
                "endTime": "2022-05-01T03:15:00.000Z",
                "id": "umpire-2",
                "orders1": "m_f-blue_12",
                "orders2": "m_f-red_48",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-2",
            "healthOutcomes": [],
            "important": true,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-01-17T17:08:36.076Z//1"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-1",
                "roleName": "Adjudicator 1"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-01-17T17:08:36.076Z",
            "turnNumber": 3,
            "counter": 3,
            "interaction": {
                "startTime": "2022-05-01T00:30:00.000Z",
                "endTime": "2022-05-01T03:15:00.000Z",
                "id": "umpire-3",
                "orders1": "m_f-blue_12",
                "orders2": "m_f-red_33",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-3",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-01-17T17:08:36.076Z//2"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-1",
                "roleName": "Adjudicator 1"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-01-17T17:08:36.076Z",
            "turnNumber": 3,
            "counter": 4,
            "interaction": {
                "startTime": "2022-05-01T00:05:00.000Z",
                "endTime": "2022-05-01T03:15:00.000Z",
                "id": "umpire-4",
                "orders1": "m_f-blue_12",
                "orders2": "m_f-red_9",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-4",
            "healthOutcomes": [],
            "important": true,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-01-17T17:08:36.076Z//3"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-2",
                "roleName": "Adjudicator 2"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-01-17T17:08:36.076Z",
            "turnNumber": 3,
            "counter": 5,
            "interaction": {
                "startTime": "2022-05-01T00:50:00.000Z",
                "endTime": "2022-05-01T04:30:00.000Z",
                "id": "umpire-5",
                "orders1": "m_f-blue_21",
                "orders2": "m_f-red_42",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-5",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-01-17T17:08:36.076Z//4"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-2",
                "roleName": "Adjudicator 2"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-01-17T17:08:36.076Z",
            "turnNumber": 3,
            "counter": 6,
            "interaction": {
                "startTime": "2022-05-01T00:05:00.000Z",
                "endTime": "2022-05-01T03:35:00.000Z",
                "id": "umpire-6",
                "orders1": "m_f-blue_15",
                "orders2": "m_f-red_27",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-6",
            "healthOutcomes": [],
            "important": true,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-01-17T17:08:36.076Z//5"
    }
]