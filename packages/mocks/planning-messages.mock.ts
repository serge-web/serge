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
                    "asset": "a19",
                    "number": 4,
                    "missileType": "Jet OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 0,
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
                    "asset": "a194",
                    "number": 2
                },
                {
                    "asset": "a176",
                    "number": 1
                },
                {
                    "asset": "a187",
                    "number": 5
                },
                {
                    "asset": "a128",
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
                    "number": 4
                },
                {
                    "asset": "a10",
                    "number": 4
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
                                    34.457,
                                    26.1751
                                ],
                                [
                                    47.23,
                                    29.93
                                ],
                                [
                                    58.9,
                                    34.6
                                ],
                                [
                                    71.86,
                                    38.54
                                ],
                                [
                                    84.1,
                                    41.78
                                ],
                                [
                                    84.3072,
                                    42.2763
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
                                        79.87289437143227,
                                        45.31188468067518
                                    ],
                                    [
                                        79.87289437143227,
                                        39.08585976465398
                                    ],
                                    [
                                        88.32400793626634,
                                        39.08585976465398
                                    ],
                                    [
                                        88.32400793626634,
                                        45.31188468067518
                                    ],
                                    [
                                        79.87289437143227,
                                        45.31188468067518
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
                                        80.33978047100938,
                                        45.014484694578094
                                    ],
                                    [
                                        80.33978047100938,
                                        39.41293367025239
                                    ],
                                    [
                                        87.93695652550652,
                                        39.41293367025239
                                    ],
                                    [
                                        87.93695652550652,
                                        45.014484694578094
                                    ],
                                    [
                                        80.33978047100938,
                                        45.014484694578094
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
                                    84.3072,
                                    42.2763
                                ],
                                [
                                    67.78,
                                    36.55
                                ],
                                [
                                    51.3,
                                    31.89
                                ],
                                [
                                    34.11,
                                    26.51
                                ],
                                [
                                    34.457,
                                    26.1751
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
                    "asset": "a28",
                    "number": 4
                },
                {
                    "asset": "a93",
                    "number": 4
                },
                {
                    "asset": "a88",
                    "number": 0
                },
                {
                    "asset": "a15",
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
                    "number": 5
                },
                {
                    "asset": "a110",
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
                                    26.6004,
                                    29.7616
                                ],
                                [
                                    29.3,
                                    21.1
                                ],
                                [
                                    31.09,
                                    11.53
                                ],
                                [
                                    33.16,
                                    3.24
                                ],
                                [
                                    33.6602,
                                    2.7986
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
                                        33.41218497723386,
                                        3.04623839678729
                                    ],
                                    [
                                        33.41218497723386,
                                        2.550909270125764
                                    ],
                                    [
                                        33.908110232104065,
                                        2.550909270125764
                                    ],
                                    [
                                        33.908110232104065,
                                        3.04623839678729
                                    ],
                                    [
                                        33.41218497723386,
                                        3.04623839678729
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
                                    33.6602,
                                    2.7986
                                ],
                                [
                                    30.36,
                                    16.14
                                ],
                                [
                                    26.45,
                                    29.85
                                ],
                                [
                                    26.6004,
                                    29.7616
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
                    "asset": "a15",
                    "number": 1
                },
                {
                    "asset": "a65",
                    "number": 1
                },
                {
                    "asset": "a46",
                    "number": 2
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
                                    59.45940954761188,
                                    45.10710680038071
                                ],
                                [
                                    49.39,
                                    31.03
                                ],
                                [
                                    39.63,
                                    16.26
                                ],
                                [
                                    39.4258,
                                    16.3734
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
                                        35.505430765170914,
                                        20.020931865112562
                                    ],
                                    [
                                        35.505430765170914,
                                        12.65602224103101
                                    ],
                                    [
                                        43.200762905117514,
                                        12.65602224103101
                                    ],
                                    [
                                        43.200762905117514,
                                        20.020931865112562
                                    ],
                                    [
                                        35.505430765170914,
                                        20.020931865112562
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
                                    39.4258,
                                    16.3734
                                ],
                                [
                                    46.58,
                                    26.24
                                ],
                                [
                                    52.78,
                                    35.15
                                ],
                                [
                                    59.26,
                                    45.34
                                ],
                                [
                                    59.45940954761188,
                                    45.10710680038071
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
                    "asset": "a55",
                    "number": 5
                },
                {
                    "asset": "a91",
                    "number": 5
                },
                {
                    "asset": "a58",
                    "number": 3
                },
                {
                    "asset": "a52",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 4
                },
                {
                    "asset": "a194",
                    "number": 0
                },
                {
                    "asset": "a110",
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
                                    70.55492001555534,
                                    41.119732191869886
                                ],
                                [
                                    77.09,
                                    26.19
                                ],
                                [
                                    82.98,
                                    11.61
                                ],
                                [
                                    83.2352,
                                    11.3596
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
                    "asset": "a52",
                    "number": 0
                },
                {
                    "asset": "a73",
                    "number": 0
                },
                {
                    "asset": "a25",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 4
                },
                {
                    "asset": "a194",
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
                                    61.78098697225979,
                                    52.05096337357197
                                ],
                                [
                                    62.72,
                                    41.55
                                ],
                                [
                                    63.73,
                                    31.1
                                ],
                                [
                                    65.01,
                                    20.94
                                ],
                                [
                                    65.2746,
                                    20.6812
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
                                        64.38736881889128,
                                        21.50440864926064
                                    ],
                                    [
                                        64.38736881889128,
                                        19.853501027350706
                                    ],
                                    [
                                        66.15223267139291,
                                        19.853501027350706
                                    ],
                                    [
                                        66.15223267139291,
                                        21.50440864926064
                                    ],
                                    [
                                        64.38736881889128,
                                        21.50440864926064
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
                                    65.2746,
                                    20.6812
                                ],
                                [
                                    61.42,
                                    52.09
                                ],
                                [
                                    61.78098697225979,
                                    52.05096337357197
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
                    "asset": "a1",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 4
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
                                    47.2410970399821,
                                    50.85313679538694
                                ],
                                [
                                    49.8,
                                    37.86
                                ],
                                [
                                    51.81,
                                    25.32
                                ],
                                [
                                    51.9514,
                                    25.3601
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
                    "asset": "a110",
                    "number": 5
                },
                {
                    "asset": "a200",
                    "number": 3
                },
                {
                    "asset": "a122",
                    "number": 1
                },
                {
                    "asset": "a170",
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
                                    77.498,
                                    9.2829
                                ],
                                [
                                    47.81,
                                    50.64
                                ],
                                [
                                    47.70065712271597,
                                    50.996635560374486
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
                                        41.41663459533614,
                                        54.486434634899155
                                    ],
                                    [
                                        41.41663459533614,
                                        47.21804605080612
                                    ],
                                    [
                                        53.07217512689795,
                                        47.21804605080612
                                    ],
                                    [
                                        53.07217512689795,
                                        54.486434634899155
                                    ],
                                    [
                                        41.41663459533614,
                                        54.486434634899155
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
                                    47.70065712271597,
                                    50.996635560374486
                                ],
                                [
                                    57.95,
                                    37.37
                                ],
                                [
                                    67.33,
                                    22.87
                                ],
                                [
                                    76.99,
                                    9.65
                                ],
                                [
                                    77.498,
                                    9.2829
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
                    "asset": "a170",
                    "number": 2
                },
                {
                    "asset": "a147",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 2
                },
                {
                    "asset": "a94",
                    "number": 1
                },
                {
                    "asset": "a10",
                    "number": 3
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
                                    61.0728,
                                    3.6523
                                ],
                                [
                                    65.92,
                                    14.95
                                ],
                                [
                                    71.04,
                                    25.53
                                ],
                                [
                                    75.44,
                                    36.4
                                ],
                                [
                                    75.4991,
                                    36.7758
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
                                        72.45119024551839,
                                        39.10289219129241
                                    ],
                                    [
                                        72.45119024551839,
                                        34.37559035267623
                                    ],
                                    [
                                        78.36464924973247,
                                        34.37559035267623
                                    ],
                                    [
                                        78.36464924973247,
                                        39.10289219129241
                                    ],
                                    [
                                        72.45119024551839,
                                        39.10289219129241
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
                                    75.4991,
                                    36.7758
                                ],
                                [
                                    72.26,
                                    28.4
                                ],
                                [
                                    67.81,
                                    19.81
                                ],
                                [
                                    64.64,
                                    11.51
                                ],
                                [
                                    60.76,
                                    3.49
                                ],
                                [
                                    61.0728,
                                    3.6523
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
                    "asset": "a185",
                    "number": 4
                },
                {
                    "asset": "a148",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 5
                },
                {
                    "asset": "a94",
                    "number": 3
                },
                {
                    "asset": "a10",
                    "number": 1
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
                                    23.4389,
                                    26.1235
                                ],
                                [
                                    39.38,
                                    31.59
                                ],
                                [
                                    55.5,
                                    36.22
                                ],
                                [
                                    70.9,
                                    41.14
                                ],
                                [
                                    70.9350442961223,
                                    41.32276280103669
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
                                        69.59230884278999,
                                        42.30803992398669
                                    ],
                                    [
                                        69.59230884278999,
                                        40.32234876994448
                                    ],
                                    [
                                        72.23747856010931,
                                        40.32234876994448
                                    ],
                                    [
                                        72.23747856010931,
                                        42.30803992398669
                                    ],
                                    [
                                        69.59230884278999,
                                        42.30803992398669
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
                                        65.81467651139506,
                                        44.84361744749381
                                    ],
                                    [
                                        65.81467651139506,
                                        37.59869915881325
                                    ],
                                    [
                                        75.5160548219284,
                                        37.59869915881325
                                    ],
                                    [
                                        75.5160548219284,
                                        44.84361744749381
                                    ],
                                    [
                                        65.81467651139506,
                                        44.84361744749381
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
                                    70.9350442961223,
                                    41.32276280103669
                                ],
                                [
                                    47.12,
                                    33.81
                                ],
                                [
                                    23.72,
                                    25.71
                                ],
                                [
                                    23.4389,
                                    26.1235
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
                    "asset": "a57",
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
                                    84.7067,
                                    51.5851
                                ],
                                [
                                    73.71,
                                    40.68
                                ],
                                [
                                    63.57,
                                    28.63
                                ],
                                [
                                    52.7,
                                    17.87
                                ],
                                [
                                    42.13,
                                    6.39
                                ],
                                [
                                    41.7659,
                                    6.3586
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
                                        38.88943315350979,
                                        9.190210706376737
                                    ],
                                    [
                                        38.88943315350979,
                                        3.5112718903509847
                                    ],
                                    [
                                        44.610757652905676,
                                        3.5112718903509847
                                    ],
                                    [
                                        44.610757652905676,
                                        9.190210706376737
                                    ],
                                    [
                                        38.88943315350979,
                                        9.190210706376737
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
                                    41.7659,
                                    6.3586
                                ],
                                [
                                    55.86,
                                    20.99
                                ],
                                [
                                    70.21,
                                    36.88
                                ],
                                [
                                    84.84,
                                    52.05
                                ],
                                [
                                    84.7067,
                                    51.5851
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
                    "asset": "a182",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
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
                                    35.9251,
                                    24.0545
                                ],
                                [
                                    36.58,
                                    26.6
                                ],
                                [
                                    36.46,
                                    29.37
                                ],
                                [
                                    36.62,
                                    31.42
                                ],
                                [
                                    36.4711,
                                    31.9137
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
                                        35.84804215180255,
                                        32.43802895864629
                                    ],
                                    [
                                        35.84804215180255,
                                        31.386365227492416
                                    ],
                                    [
                                        37.087076046890594,
                                        31.386365227492416
                                    ],
                                    [
                                        37.087076046890594,
                                        32.43802895864629
                                    ],
                                    [
                                        35.84804215180255,
                                        32.43802895864629
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
                                    36.4711,
                                    31.9137
                                ],
                                [
                                    35.94,
                                    29.45
                                ],
                                [
                                    36.28,
                                    27.86
                                ],
                                [
                                    35.91,
                                    25.55
                                ],
                                [
                                    35.81,
                                    24.53
                                ],
                                [
                                    35.9251,
                                    24.0545
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
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Maritime--MissileStrike",
            "timestamp": "2022-09-24T18:35:03.780Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-96",
            "title": "Order item 96",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:10:00.000Z",
            "activity": "f-red-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "a114",
                    "number": 2,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a188",
                    "number": 4,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a193",
                    "number": 1,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "a127",
                    "number": 3,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 4,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "a94",
                    "number": 2,
                    "missileType": "MRBM"
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
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T04:10:00.000Z",
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a27",
                    "number": 1
                },
                {
                    "asset": "a87",
                    "number": 2
                },
                {
                    "asset": "a76",
                    "number": 3
                },
                {
                    "asset": "a93",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 4
                }
            ],
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Mine Laying-0",
                            "name": "f-blue//4.334555323177483//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.3690906989148,
                                    45.201747379238086
                                ],
                                [
                                    53.51,
                                    39.29
                                ],
                                [
                                    47.56,
                                    33.28
                                ],
                                [
                                    41.88,
                                    26.55
                                ],
                                [
                                    36.49,
                                    21.11
                                ],
                                [
                                    36.514,
                                    20.7833
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651375800000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//8.669110646354966//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        35.07385373090781,
                                        22.111556338752617
                                    ],
                                    [
                                        35.07385373090781,
                                        19.44324554653482
                                    ],
                                    [
                                        37.928912649953475,
                                        19.44324554653482
                                    ],
                                    [
                                        37.928912649953475,
                                        22.111556338752617
                                    ],
                                    [
                                        35.07385373090781,
                                        22.111556338752617
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
                            "startDate": "2022-05-01T03:30:00.000Z",
                            "endDate": "2022-05-01T04:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651375800000,
                            "endTime": 1651378200000,
                            "geomId": "Mine Laying-2",
                            "name": "f-blue//13.003665969532449//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.514,
                                    20.7833
                                ],
                                [
                                    41.77,
                                    26.6
                                ],
                                [
                                    47.82,
                                    33.21
                                ],
                                [
                                    53.15,
                                    39.11
                                ],
                                [
                                    59.77,
                                    45.29
                                ],
                                [
                                    59.3690906989148,
                                    45.201747379238086
                                ]
                            ]
                        }
                    }
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
            "messageType": "Air--TST",
            "timestamp": "2022-09-24T18:35:03.780Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-96",
            "title": "Order item 96",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T08:30:00.000Z",
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
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
                    "number": 5
                },
                {
                    "asset": "a94",
                    "number": 2
                },
                {
                    "asset": "a10",
                    "number": 3
                }
            ],
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-red//2.9506774487090297//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.014101672558375,
                                    27.422513044490213
                                ],
                                [
                                    45.33,
                                    33.63
                                ],
                                [
                                    52.92,
                                    39.11
                                ],
                                [
                                    59.81,
                                    44.89
                                ],
                                [
                                    59.866173825773274,
                                    45.28378071561283
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651373400000,
                            "endTime": 1651382400000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-red//5.901354897418059//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        56.59004848338601,
                                        47.453382062120816
                                    ],
                                    [
                                        56.59004848338601,
                                        43.0275088582531
                                    ],
                                    [
                                        62.896309146243055,
                                        43.0275088582531
                                    ],
                                    [
                                        62.896309146243055,
                                        47.453382062120816
                                    ],
                                    [
                                        56.59004848338601,
                                        47.453382062120816
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
                            "startDate": "2022-05-01T05:20:00.000Z",
                            "endDate": "2022-05-01T08:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651382400000,
                            "endTime": 1651393800000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-red//8.85203234612709//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.866173825773274,
                                    45.28378071561283
                                ],
                                [
                                    48.78,
                                    36.53
                                ],
                                [
                                    38.11,
                                    27.2
                                ],
                                [
                                    38.014101672558375,
                                    27.422513044490213
                                ]
                            ]
                        }
                    }
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
            "startDate": "2022-05-01T02:10:00.000Z",
            "endDate": "2022-05-01T04:40:00.000Z",
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a119",
                    "number": 2
                },
                {
                    "asset": "a149",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 5
                }
            ],
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T02:10:00.000Z",
                            "endDate": "2022-05-01T03:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651371000000,
                            "endTime": 1651374000000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//5.460220743145328//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    39.4258,
                                    16.3734
                                ],
                                [
                                    38.47,
                                    24.35
                                ],
                                [
                                    37.51,
                                    32.31
                                ],
                                [
                                    36.82,
                                    40.56
                                ],
                                [
                                    35.42,
                                    48.09
                                ],
                                [
                                    35.8981,
                                    48.4922
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
                            "startDate": "2022-05-01T03:00:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651374000000,
                            "endTime": 1651375800000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//10.920441486290656//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        35.212180963317955,
                                        48.94071308136687
                                    ],
                                    [
                                        35.212180963317955,
                                        48.03968329976831
                                    ],
                                    [
                                        36.57193759115035,
                                        48.03968329976831
                                    ],
                                    [
                                        36.57193759115035,
                                        48.94071308136687
                                    ],
                                    [
                                        35.212180963317955,
                                        48.94071308136687
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
                            "startDate": "2022-05-01T03:30:00.000Z",
                            "endDate": "2022-05-01T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651375800000,
                            "endTime": 1651380000000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//16.380662229435984//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    35.8981,
                                    48.4922
                                ],
                                [
                                    39.59,
                                    16.6
                                ],
                                [
                                    39.4258,
                                    16.3734
                                ]
                            ]
                        }
                    }
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
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-22T08:06:38.589Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-102",
            "title": "Order item 102",
            "startDate": "2022-05-01T02:20:00.000Z",
            "endDate": "2022-05-01T06:00:00.000Z",
            "activity": "f-blue-Maritime-Mine Clearance",
            "ownAssets": [
                {
                    "asset": "a94",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 3
                },
                {
                    "asset": "a194",
                    "number": 5
                }
            ],
            "location": [
                {
                    "uniqid": "Mine Clearance-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Route out",
                            "startDate": "2022-05-01T02:20:00.000Z",
                            "endDate": "2022-05-01T03:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651371600000,
                            "endTime": 1651374600000,
                            "geomId": "Mine Clearance-0",
                            "name": "f-blue//6.863185207359493//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.5542,
                                    33.3606
                                ],
                                [
                                    51.65,
                                    28
                                ],
                                [
                                    42.88,
                                    23.79
                                ],
                                [
                                    34.4,
                                    18.86
                                ],
                                [
                                    33.9474,
                                    18.4807
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Clearance-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Mine Clearance Area Area",
                            "startDate": "2022-05-01T03:10:00.000Z",
                            "endDate": "2022-05-01T05:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651374600000,
                            "endTime": 1651383000000,
                            "geomId": "Mine Clearance-1",
                            "name": "f-blue//13.726370414718986//Mine Clearance Area Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        31.318838842538028,
                                        20.918042131897973
                                    ],
                                    [
                                        31.318838842538028,
                                        16.008130035806822
                                    ],
                                    [
                                        36.50172018295525,
                                        16.008130035806822
                                    ],
                                    [
                                        36.50172018295525,
                                        20.918042131897973
                                    ],
                                    [
                                        31.318838842538028,
                                        20.918042131897973
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Clearance-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Route back",
                            "startDate": "2022-05-01T05:30:00.000Z",
                            "endDate": "2022-05-01T06:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651383000000,
                            "endTime": 1651384800000,
                            "geomId": "Mine Clearance-2",
                            "name": "f-blue//20.58955562207848//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.9474,
                                    18.4807
                                ],
                                [
                                    42.48,
                                    23.29
                                ],
                                [
                                    52.18,
                                    28.26
                                ],
                                [
                                    60.16,
                                    33.52
                                ],
                                [
                                    60.5542,
                                    33.3606
                                ]
                            ]
                        }
                    }
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-23T19:28:27.180Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-105",
            "title": "Order item 105",
            "startDate": "2022-05-01T02:20:00.000Z",
            "endDate": "2022-05-01T05:00:00.000Z",
            "activity": "f-blue-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a29",
                    "number": 0
                },
                {
                    "asset": "a30",
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
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T02:20:00.000Z",
                            "endDate": "2022-05-01T03:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651371600000,
                            "endTime": 1651374600000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//2.1595708401873708//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.6004,
                                    29.7616
                                ],
                                [
                                    52.98,
                                    21.42
                                ],
                                [
                                    52.7025,
                                    21.4062
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
                            "startDate": "2022-05-01T03:10:00.000Z",
                            "endDate": "2022-05-01T03:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651374600000,
                            "endTime": 1651376400000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//4.3191416803747416//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        50.131605577196666,
                                        23.74013632923449
                                    ],
                                    [
                                        50.131605577196666,
                                        19.03430880688867
                                    ],
                                    [
                                        55.19191048571001,
                                        19.03430880688867
                                    ],
                                    [
                                        55.19191048571001,
                                        23.74013632923449
                                    ],
                                    [
                                        50.131605577196666,
                                        23.74013632923449
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
                            "startDate": "2022-05-01T03:40:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651376400000,
                            "endTime": 1651381200000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//6.478712520562112//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.7025,
                                    21.4062
                                ],
                                [
                                    46.5,
                                    23.27
                                ],
                                [
                                    39.18,
                                    26
                                ],
                                [
                                    33.14,
                                    28.02
                                ],
                                [
                                    26.39,
                                    29.32
                                ],
                                [
                                    26.6004,
                                    29.7616
                                ]
                            ]
                        }
                    }
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
            "startDate": "2022-05-01T02:20:00.000Z",
            "endDate": "2022-05-01T04:40:00.000Z",
            "activity": "f-red-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a117",
                    "number": 5
                },
                {
                    "asset": "a200",
                    "number": 3
                },
                {
                    "asset": "a129",
                    "number": 5
                },
                {
                    "asset": "a158",
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
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T02:20:00.000Z",
                            "endDate": "2022-05-01T03:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651371600000,
                            "endTime": 1651374600000,
                            "geomId": "Patrol-0",
                            "name": "f-red//6.3493776430841535//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.9196,
                                    22.8558
                                ],
                                [
                                    55.73,
                                    33.14
                                ],
                                [
                                    57.77,
                                    43.64
                                ],
                                [
                                    60.09,
                                    53.42
                                ],
                                [
                                    60.5032,
                                    53.337
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
                            "startDate": "2022-05-01T03:10:00.000Z",
                            "endDate": "2022-05-01T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651374600000,
                            "endTime": 1651380000000,
                            "geomId": "Patrol-1",
                            "name": "f-red//12.698755286168307//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        55.61587779221084,
                                        55.97578373438614
                                    ],
                                    [
                                        55.61587779221084,
                                        50.52225826459914
                                    ],
                                    [
                                        64.80331283030398,
                                        50.52225826459914
                                    ],
                                    [
                                        64.80331283030398,
                                        55.97578373438614
                                    ],
                                    [
                                        55.61587779221084,
                                        55.97578373438614
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
                            "startDate": "2022-05-01T04:40:00.000Z",
                            "endDate": "2022-05-01T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651380000000,
                            "endTime": 1651380000000,
                            "geomId": "Patrol-2",
                            "name": "f-red//19.04813292925246//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.5032,
                                    53.337
                                ],
                                [
                                    52.8,
                                    22.51
                                ],
                                [
                                    52.9196,
                                    22.8558
                                ]
                            ]
                        }
                    }
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
            "messageType": "Maritime--EWAttack",
            "timestamp": "2022-09-23T19:24:06.733Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-111",
            "title": "Order item 111",
            "startDate": "2022-05-01T02:25:00.000Z",
            "endDate": "2022-05-01T07:35:00.000Z",
            "activity": "f-blue-Maritime-EW Attack",
            "ownAssets": [
                {
                    "asset": "a58",
                    "number": 4
                },
                {
                    "asset": "a30",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
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
                            "startDate": "2022-05-01T02:25:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651371900000,
                            "endTime": 1651374900000,
                            "geomId": "EW Attack-0",
                            "name": "f-blue//4.432605614885688//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.4246,
                                    42.9126
                                ],
                                [
                                    46.84,
                                    35.99
                                ],
                                [
                                    56.4,
                                    28.21
                                ],
                                [
                                    65.25,
                                    20.72
                                ],
                                [
                                    65.46679121001898,
                                    20.685862585822825
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
                            "startDate": "2022-05-01T03:15:00.000Z",
                            "endDate": "2022-05-01T04:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651374900000,
                            "endTime": 1651379100000,
                            "geomId": "EW Attack-1",
                            "name": "f-blue//8.865211229771376//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        62.13661918416215,
                                        23.703479855521927
                                    ],
                                    [
                                        62.13661918416215,
                                        17.606804637751626
                                    ],
                                    [
                                        68.66574709265771,
                                        17.606804637751626
                                    ],
                                    [
                                        68.66574709265771,
                                        23.703479855521927
                                    ],
                                    [
                                        62.13661918416215,
                                        23.703479855521927
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
                            "startDate": "2022-05-01T04:25:00.000Z",
                            "endDate": "2022-05-01T07:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651379100000,
                            "endTime": 1651390500000,
                            "geomId": "EW Attack-2",
                            "name": "f-blue//13.297816844657063//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    65.46679121001898,
                                    20.685862585822825
                                ],
                                [
                                    56.45,
                                    28.4
                                ],
                                [
                                    46.54,
                                    35.22
                                ],
                                [
                                    37.92,
                                    43.32
                                ],
                                [
                                    37.4246,
                                    42.9126
                                ]
                            ]
                        }
                    }
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
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Maritime--MissileStrike",
            "timestamp": "2022-09-25T06:20:57.752Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-143",
            "title": "Order item 143",
            "startDate": "2022-05-01T03:15:00.000Z",
            "endDate": "2022-05-01T06:25:00.000Z",
            "activity": "f-red-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "a111",
                    "number": 5,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "a145",
                    "number": 3,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 4,
                    "missileType": "SRBM"
                },
                {
                    "asset": "a94",
                    "number": 1,
                    "missileType": "IRBM"
                },
                {
                    "asset": "a10",
                    "number": 1,
                    "missileType": "SRBM"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_143",
        "_rev": "2"
    }]