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
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-22T15:47:41.086Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-2",
            "title": "Order item 6",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-blue-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "a61",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                },
                {
                    "asset": "a776"
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
                            "name": "f-blue//3.105222334795144//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.561,
                                    45.1898
                                ],
                                [
                                    45.07,
                                    27.69
                                ],
                                [
                                    30.95,
                                    9.56
                                ],
                                [
                                    30.6674,
                                    9.8864
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_2",
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
            "Reference": "Red-5",
            "title": "Order item 9",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T06:45:00.000Z",
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a773",
                    "number": 5
                },
                {
                    "asset": "a698",
                    "number": 5
                },
                {
                    "asset": "a745",
                    "number": 2
                },
                {
                    "asset": "a498",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                },
                {
                    "asset": "a377"
                },
                {
                    "asset": "a24"
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
                                    66.1189,
                                    13.065
                                ],
                                [
                                    59.52,
                                    19.13
                                ],
                                [
                                    51.83,
                                    26.11
                                ],
                                [
                                    45.42,
                                    32.37
                                ],
                                [
                                    38.29,
                                    37.91
                                ],
                                [
                                    38.503,
                                    38.4085
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
                                        34.342709731726494,
                                        41.454939108403174
                                    ],
                                    [
                                        34.342709731726494,
                                        35.227080449946165
                                    ],
                                    [
                                        42.31951553609113,
                                        35.227080449946165
                                    ],
                                    [
                                        42.31951553609113,
                                        41.454939108403174
                                    ],
                                    [
                                        34.342709731726494,
                                        41.454939108403174
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
                                        34.77832070310506,
                                        41.155380197460886
                                    ],
                                    [
                                        34.77832070310506,
                                        35.55249567257774
                                    ],
                                    [
                                        41.949642359381826,
                                        35.55249567257774
                                    ],
                                    [
                                        41.949642359381826,
                                        41.155380197460886
                                    ],
                                    [
                                        34.77832070310506,
                                        41.155380197460886
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
                                    38.503,
                                    38.4085
                                ],
                                [
                                    47.79,
                                    29.61
                                ],
                                [
                                    57.14,
                                    21.86
                                ],
                                [
                                    65.78,
                                    13.4
                                ],
                                [
                                    66.1189,
                                    13.065
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_5",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-29T05:18:28.464Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-8",
            "title": "Order item 12",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T03:15:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a96",
                    "number": 2
                },
                {
                    "asset": "a371",
                    "number": 3
                },
                {
                    "asset": "a351",
                    "number": 4
                },
                {
                    "asset": "a43",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                },
                {
                    "asset": "a776"
                },
                {
                    "asset": "a426"
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
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//3.412459935258994//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    81.6767,
                                    42.4661
                                ],
                                [
                                    77.7,
                                    37.12
                                ],
                                [
                                    72.81,
                                    30.86
                                ],
                                [
                                    68.2,
                                    25.89
                                ],
                                [
                                    68.7077,
                                    25.4414
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
                            "endDate": "2022-05-01T02:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651373700000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//6.824919870517988//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        68.43287169070987,
                                        25.68880939973068
                                    ],
                                    [
                                        68.43287169070987,
                                        25.193481309281925
                                    ],
                                    [
                                        68.98140035176111,
                                        25.193481309281925
                                    ],
                                    [
                                        68.98140035176111,
                                        25.68880939973068
                                    ],
                                    [
                                        68.43287169070987,
                                        25.68880939973068
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
                            "startDate": "2022-05-01T02:55:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373700000,
                            "endTime": 1651374900000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//10.237379805776982//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    68.7077,
                                    25.4414
                                ],
                                [
                                    75.43,
                                    33.81
                                ],
                                [
                                    81.52,
                                    42.56
                                ],
                                [
                                    81.6767,
                                    42.4661
                                ]
                            ]
                        }
                    }
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
            "Reference": "Blue-11",
            "title": "Order item 15",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T05:35:00.000Z",
            "activity": "f-blue-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a43",
                    "number": 2
                },
                {
                    "asset": "a255",
                    "number": 4
                },
                {
                    "asset": "a175",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                },
                {
                    "asset": "a776"
                },
                {
                    "asset": "a426"
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
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//6.906210489443765//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.4955,
                                    29.9971
                                ],
                                [
                                    76.01,
                                    23.94
                                ],
                                [
                                    78.83,
                                    17.19
                                ],
                                [
                                    78.626,
                                    17.3072
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
                            "endDate": "2022-05-01T03:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651374300000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//13.81242097888753//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        74.68170415873414,
                                        20.95253357284788
                                    ],
                                    [
                                        74.68170415873414,
                                        13.587788592332675
                                    ],
                                    [
                                        82.4153219264427,
                                        13.587788592332675
                                    ],
                                    [
                                        82.4153219264427,
                                        20.95253357284788
                                    ],
                                    [
                                        74.68170415873414,
                                        20.95253357284788
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
                            "startDate": "2022-05-01T03:05:00.000Z",
                            "endDate": "2022-05-01T05:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651374300000,
                            "endTime": 1651383300000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//20.718631468331296//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.626,
                                    17.3072
                                ],
                                [
                                    77.4,
                                    21.83
                                ],
                                [
                                    75.21,
                                    25.39
                                ],
                                [
                                    73.3,
                                    30.23
                                ],
                                [
                                    73.4955,
                                    29.9971
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_11",
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
            "Reference": "Blue-14",
            "title": "Order item 18",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "a211",
                    "number": 5
                },
                {
                    "asset": "a361",
                    "number": 3
                },
                {
                    "asset": "a221",
                    "number": 1
                },
                {
                    "asset": "a196",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                },
                {
                    "asset": "a776"
                },
                {
                    "asset": "a426"
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
                                    71.9948,
                                    36.3524
                                ],
                                [
                                    78.38,
                                    21.27
                                ],
                                [
                                    84.12,
                                    6.55
                                ],
                                [
                                    84.3769,
                                    6.2922
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_14",
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
            "Reference": "Blue-17",
            "title": "Order item 21",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T06:55:00.000Z",
            "activity": "f-blue-Air-EW Attack",
            "ownAssets": [
                {
                    "asset": "a196",
                    "number": 4
                },
                {
                    "asset": "a285",
                    "number": 5
                },
                {
                    "asset": "a87",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                },
                {
                    "asset": "a776"
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
                                    33.7437,
                                    38.7005
                                ],
                                [
                                    41.68,
                                    33.11
                                ],
                                [
                                    49.67,
                                    27.58
                                ],
                                [
                                    57.95,
                                    22.33
                                ],
                                [
                                    58.2113,
                                    22.0717
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
                                        57.31523813786577,
                                        22.894740296929537
                                    ],
                                    [
                                        57.31523813786577,
                                        21.24383643067889
                                    ],
                                    [
                                        59.09695326406541,
                                        21.24383643067889
                                    ],
                                    [
                                        59.09695326406541,
                                        22.894740296929537
                                    ],
                                    [
                                        57.31523813786577,
                                        22.894740296929537
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
                                    58.2113,
                                    22.0717
                                ],
                                [
                                    33.39,
                                    38.73
                                ],
                                [
                                    33.7437,
                                    38.7005
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_17",
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
            "Reference": "Blue-20",
            "title": "Order item 24",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "a4",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
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
                                    74.2023,
                                    48.2261
                                ],
                                [
                                    75.37,
                                    33.17
                                ],
                                [
                                    75.97,
                                    18.55
                                ],
                                [
                                    76.1174,
                                    18.5976
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_20",
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-29T19:25:40.744Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-23",
            "title": "Order item 27",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T03:35:00.000Z",
            "activity": "f-red-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a429",
                    "number": 1
                },
                {
                    "asset": "a796",
                    "number": 1
                },
                {
                    "asset": "a475",
                    "number": 2
                },
                {
                    "asset": "a669",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                },
                {
                    "asset": "a377"
                }
            ],
            "location": [
                {
                    "uniqid": "Offensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Offensive Counter Air-0",
                            "name": "f-red//4.815424399195763//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0057,
                                    6.9663
                                ],
                                [
                                    48.42,
                                    48.29
                                ],
                                [
                                    48.3075,
                                    48.6544
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T01:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651366500000,
                            "endTime": 1651367700000,
                            "geomId": "Offensive Counter Air-1",
                            "name": "f-red//9.630848798391526//OCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.35860912573049,
                                        52.157518889068925
                                    ],
                                    [
                                        42.35860912573049,
                                        44.885667095888955
                                    ],
                                    [
                                        53.456223926436074,
                                        44.885667095888955
                                    ],
                                    [
                                        53.456223926436074,
                                        52.157518889068925
                                    ],
                                    [
                                        42.35860912573049,
                                        52.157518889068925
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
                            "startDate": "2022-05-01T01:15:00.000Z",
                            "endDate": "2022-05-01T03:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651367700000,
                            "endTime": 1651376100000,
                            "geomId": "Offensive Counter Air-2",
                            "name": "f-red//14.446273197587288//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.3075,
                                    48.6544
                                ],
                                [
                                    53.53,
                                    35.04
                                ],
                                [
                                    57.87,
                                    20.55
                                ],
                                [
                                    62.5,
                                    7.34
                                ],
                                [
                                    63.0057,
                                    6.9663
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_23",
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
            "messageType": "Land--Standard",
            "timestamp": "2022-09-25T07:27:09.572Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-26",
            "title": "Order item 30",
            "startDate": "2022-05-01T00:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-red-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "a669",
                    "number": 4
                },
                {
                    "asset": "a577",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                },
                {
                    "asset": "a377"
                },
                {
                    "asset": "a24"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T00:10:00.000Z",
                            "endDate": "2022-05-01T01:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651363800000,
                            "endTime": 1651366800000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-red//2.7762807999097276//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.79,
                                    21.0093
                                ],
                                [
                                    33.29,
                                    29.14
                                ],
                                [
                                    33.06,
                                    36.55
                                ],
                                [
                                    32.11,
                                    44.24
                                ],
                                [
                                    32.1731,
                                    44.6245
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T01:00:00.000Z",
                            "endDate": "2022-05-01T01:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651366800000,
                            "endTime": 1651369800000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-red//5.552561599819455//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        28.708498534762157,
                                        46.93901141297685
                                    ],
                                    [
                                        28.708498534762157,
                                        42.213387133094514
                                    ],
                                    [
                                        35.366699093587115,
                                        42.213387133094514
                                    ],
                                    [
                                        35.366699093587115,
                                        46.93901141297685
                                    ],
                                    [
                                        28.708498534762157,
                                        46.93901141297685
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T01:50:00.000Z",
                            "endDate": "2022-05-01T04:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651369800000,
                            "endTime": 1651377600000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-red//8.328842399729183//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.1731,
                                    44.6245
                                ],
                                [
                                    32.94,
                                    38.62
                                ],
                                [
                                    32.5,
                                    32.41
                                ],
                                [
                                    33.35,
                                    26.49
                                ],
                                [
                                    33.47,
                                    20.84
                                ],
                                [
                                    33.79,
                                    21.0093
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_26",
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
            "Reference": "Red-29",
            "title": "Order item 33",
            "startDate": "2022-05-01T00:30:00.000Z",
            "endDate": "2022-05-01T05:00:00.000Z",
            "activity": "f-red-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a737",
                    "number": 0
                },
                {
                    "asset": "a580",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                },
                {
                    "asset": "a377"
                },
                {
                    "asset": "a24"
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
                                    61.0131,
                                    9.8645
                                ],
                                [
                                    54.13,
                                    23.71
                                ],
                                [
                                    47.41,
                                    36.72
                                ],
                                [
                                    39.98,
                                    50.01
                                ],
                                [
                                    40.0205,
                                    50.199
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
                                        38.43634549754472,
                                        51.18141306968488
                                    ],
                                    [
                                        38.43634549754472,
                                        49.1959210558772
                                    ],
                                    [
                                        41.540111877627716,
                                        49.1959210558772
                                    ],
                                    [
                                        41.540111877627716,
                                        51.18141306968488
                                    ],
                                    [
                                        38.43634549754472,
                                        51.18141306968488
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
                                        33.88772185211938,
                                        53.67760228727401
                                    ],
                                    [
                                        33.88772185211938,
                                        46.44245337049551
                                    ],
                                    [
                                        45.289533582278985,
                                        46.44245337049551
                                    ],
                                    [
                                        45.289533582278985,
                                        53.67760228727401
                                    ],
                                    [
                                        33.88772185211938,
                                        53.67760228727401
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
                                    40.0205,
                                    50.199
                                ],
                                [
                                    50.45,
                                    30.12
                                ],
                                [
                                    61.3,
                                    9.45
                                ],
                                [
                                    61.0131,
                                    9.8645
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_29",
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
            "Reference": "Blue-32",
            "title": "Order item 36",
            "startDate": "2022-05-01T00:45:00.000Z",
            "endDate": "2022-05-01T02:45:00.000Z",
            "activity": "f-blue-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a217",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                },
                {
                    "asset": "a776"
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
                                    24.1757,
                                    31.9699
                                ],
                                [
                                    35.3,
                                    30.82
                                ],
                                [
                                    47.28,
                                    28.52
                                ],
                                [
                                    58.54,
                                    27.51
                                ],
                                [
                                    70.08,
                                    25.77
                                ],
                                [
                                    69.7185,
                                    25.7452
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
                                        66.48551636120085,
                                        28.549877575932836
                                    ],
                                    [
                                        66.48551636120085,
                                        22.872478015521278
                                    ],
                                    [
                                        72.80055507453018,
                                        22.872478015521278
                                    ],
                                    [
                                        72.80055507453018,
                                        28.549877575932836
                                    ],
                                    [
                                        66.48551636120085,
                                        28.549877575932836
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
                                    69.7185,
                                    25.7452
                                ],
                                [
                                    54.31,
                                    27.37
                                ],
                                [
                                    39.17,
                                    30.26
                                ],
                                [
                                    24.31,
                                    32.43
                                ],
                                [
                                    24.1757,
                                    31.9699
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_32",
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
            "Reference": "Red-35",
            "title": "Order item 39",
            "startDate": "2022-05-01T00:45:00.000Z",
            "endDate": "2022-05-01T03:55:00.000Z",
            "activity": "f-red-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "a720",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T00:45:00.000Z",
                            "endDate": "2022-05-01T01:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651365900000,
                            "endTime": 1651368900000,
                            "geomId": "Resupply-0",
                            "name": "f-red//5.019377017772058//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    79.0052,
                                    3.3842
                                ],
                                [
                                    77.18,
                                    18.09
                                ],
                                [
                                    74.58,
                                    33.03
                                ],
                                [
                                    72.27,
                                    47.25
                                ],
                                [
                                    72.1169,
                                    47.7385
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
                            "startDate": "2022-05-01T01:35:00.000Z",
                            "endDate": "2022-05-01T03:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1651368900000,
                            "endTime": 1651375500000,
                            "geomId": "Resupply-1",
                            "name": "f-red//10.038754035544116//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.32701544376779,
                                        48.261657802610145
                                    ],
                                    [
                                        71.32701544376779,
                                        47.21003053548408
                                    ],
                                    [
                                        72.89098969443157,
                                        47.21003053548408
                                    ],
                                    [
                                        72.89098969443157,
                                        48.261657802610145
                                    ],
                                    [
                                        71.32701544376779,
                                        48.261657802610145
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
                            "startDate": "2022-05-01T03:25:00.000Z",
                            "endDate": "2022-05-01T03:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651375500000,
                            "endTime": 1651377300000,
                            "geomId": "Resupply-2",
                            "name": "f-red//15.058131053316174//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.1169,
                                    47.7385
                                ],
                                [
                                    73.45,
                                    36.15
                                ],
                                [
                                    75.65,
                                    25.44
                                ],
                                [
                                    77.13,
                                    14
                                ],
                                [
                                    78.89,
                                    3.86
                                ],
                                [
                                    79.0052,
                                    3.3842
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_35",
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
            "Reference": "Red-38",
            "title": "Order item 42",
            "startDate": "2022-05-01T00:50:00.000Z",
            "endDate": "2022-05-01T04:30:00.000Z",
            "activity": "f-red-Land-EW Attack",
            "ownAssets": [
                {
                    "asset": "a639",
                    "number": 2
                },
                {
                    "asset": "a710",
                    "number": 2
                },
                {
                    "asset": "a490",
                    "number": 2
                },
                {
                    "asset": "a786",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                },
                {
                    "asset": "a377"
                },
                {
                    "asset": "a24"
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
                                    47.6959,
                                    18.8295
                                ],
                                [
                                    58.18,
                                    23.05
                                ],
                                [
                                    69.91,
                                    27.52
                                ],
                                [
                                    79.92,
                                    32.28
                                ],
                                [
                                    80.3844,
                                    32.202
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
                                        76.97700465399296,
                                        34.95004241683366
                                    ],
                                    [
                                        76.97700465399296,
                                        29.368005488103112
                                    ],
                                    [
                                        83.58890572121973,
                                        29.368005488103112
                                    ],
                                    [
                                        83.58890572121973,
                                        34.95004241683366
                                    ],
                                    [
                                        76.97700465399296,
                                        34.95004241683366
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
                                    80.3844,
                                    32.202
                                ],
                                [
                                    64.03,
                                    25.38
                                ],
                                [
                                    48.18,
                                    19.06
                                ],
                                [
                                    47.6959,
                                    18.8295
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_38",
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
            "Reference": "Blue-41",
            "title": "Order item 45",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a386",
                    "number": 3
                },
                {
                    "asset": "a393",
                    "number": 3
                },
                {
                    "asset": "a111",
                    "number": 0
                },
                {
                    "asset": "a348",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
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
                            "force": "f-blue",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//5.981880342907971//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    81.6767,
                                    42.4661
                                ],
                                [
                                    26.82,
                                    4.63
                                ],
                                [
                                    26.7813,
                                    4.9851
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
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651370400000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//11.963760685815942//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        25.843601809025188,
                                        5.917138424566551
                                    ],
                                    [
                                        25.843601809025188,
                                        4.051736873552436
                                    ],
                                    [
                                        27.716338907591243,
                                        4.051736873552436
                                    ],
                                    [
                                        27.716338907591243,
                                        5.917138424566551
                                    ],
                                    [
                                        25.843601809025188,
                                        5.917138424566551
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651377600000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//17.945641028723912//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.7813,
                                    4.9851
                                ],
                                [
                                    54.4,
                                    23.7
                                ],
                                [
                                    81.37,
                                    42.77
                                ],
                                [
                                    81.6767,
                                    42.4661
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_41",
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
            "Reference": "Red-44",
            "title": "Order item 48",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T07:00:00.000Z",
            "activity": "f-red-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "a747",
                    "number": 1
                },
                {
                    "asset": "a689",
                    "number": 2
                },
                {
                    "asset": "a755",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                },
                {
                    "asset": "a377"
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
                                    42.5934,
                                    21.7973
                                ],
                                [
                                    46.32,
                                    23.54
                                ],
                                [
                                    49.9,
                                    26.15
                                ],
                                [
                                    52.76,
                                    28.03
                                ],
                                [
                                    55.91,
                                    29.21
                                ],
                                [
                                    56.2177,
                                    29.5261
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
                                        54.54639949099891,
                                        30.949089702958283
                                    ],
                                    [
                                        54.54639949099891,
                                        28.082788298689827
                                    ],
                                    [
                                        57.842304670584106,
                                        28.082788298689827
                                    ],
                                    [
                                        57.842304670584106,
                                        30.949089702958283
                                    ],
                                    [
                                        54.54639949099891,
                                        30.949089702958283
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
                                    56.2177,
                                    29.5261
                                ],
                                [
                                    49.17,
                                    25.69
                                ],
                                [
                                    42.65,
                                    21.39
                                ],
                                [
                                    42.5934,
                                    21.7973
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_44",
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
            "Reference": "Blue-47",
            "title": "Order item 51",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T06:30:00.000Z",
            "activity": "f-blue-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a124",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                },
                {
                    "asset": "a776"
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
                                    75.2217,
                                    44.0852
                                ],
                                [
                                    62.67,
                                    34.06
                                ],
                                [
                                    50.97,
                                    22.88
                                ],
                                [
                                    38.55,
                                    12.99
                                ],
                                [
                                    25.42,
                                    2.37
                                ],
                                [
                                    25.7741,
                                    2.6153
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
                                        23.11042577673241,
                                        5.264912496649343
                                    ],
                                    [
                                        23.11042577673241,
                                        -0.03993229581636032
                                    ],
                                    [
                                        28.426528983654904,
                                        -0.03993229581636032
                                    ],
                                    [
                                        28.426528983654904,
                                        5.264912496649343
                                    ],
                                    [
                                        23.11042577673241,
                                        5.264912496649343
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
                                        23.831857950009574,
                                        4.549920835917226
                                    ],
                                    [
                                        23.831857950009574,
                                        0.6776876043967203
                                    ],
                                    [
                                        27.710354414510057,
                                        0.6776876043967203
                                    ],
                                    [
                                        27.710354414510057,
                                        4.549920835917226
                                    ],
                                    [
                                        23.831857950009574,
                                        4.549920835917226
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
                                    25.7741,
                                    2.6153
                                ],
                                [
                                    50.91,
                                    23.01
                                ],
                                [
                                    75.44,
                                    43.79
                                ],
                                [
                                    75.2217,
                                    44.0852
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_47",
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
            "Reference": "Red-50",
            "title": "Order item 54",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T04:40:00.000Z",
            "activity": "f-red-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a526",
                    "number": 2
                },
                {
                    "asset": "a755",
                    "number": 5
                },
                {
                    "asset": "a689",
                    "number": 4
                },
                {
                    "asset": "a747",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                },
                {
                    "asset": "a377"
                }
            ],
            "location": [
                {
                    "uniqid": "Offensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Offensive Counter Air-0",
                            "name": "f-red//6.6262941003078595//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.0681,
                                    2.0765
                                ],
                                [
                                    78.24,
                                    12.18
                                ],
                                [
                                    74.66,
                                    22.53
                                ],
                                [
                                    69.37,
                                    33.18
                                ],
                                [
                                    69.8285,
                                    33.1121
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T04:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651378800000,
                            "geomId": "Offensive Counter Air-1",
                            "name": "f-red//13.252588200615719//OCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        65.92780398451818,
                                        36.200347281201985
                                    ],
                                    [
                                        65.92780398451818,
                                        29.910710876987185
                                    ],
                                    [
                                        73.45950525103481,
                                        29.910710876987185
                                    ],
                                    [
                                        73.45950525103481,
                                        36.200347281201985
                                    ],
                                    [
                                        65.92780398451818,
                                        36.200347281201985
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
                            "startDate": "2022-05-01T04:20:00.000Z",
                            "endDate": "2022-05-01T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651378800000,
                            "endTime": 1651380000000,
                            "geomId": "Offensive Counter Air-2",
                            "name": "f-red//19.87888230092358//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    69.8285,
                                    33.1121
                                ],
                                [
                                    76.23,
                                    17.78
                                ],
                                [
                                    83.07,
                                    1.89
                                ],
                                [
                                    83.0681,
                                    2.0765
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_50",
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-23T21:41:04.593Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-53",
            "title": "Order item 57",
            "startDate": "2022-05-01T01:20:00.000Z",
            "endDate": "2022-05-01T07:30:00.000Z",
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a747",
                    "number": 3
                },
                {
                    "asset": "a510",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T01:20:00.000Z",
                            "endDate": "2022-05-01T02:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651368000000,
                            "endTime": 1651371000000,
                            "geomId": "ISTAR-0",
                            "name": "f-red//4.627941024693428//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.0681,
                                    2.0765
                                ],
                                [
                                    84.35,
                                    16.65
                                ],
                                [
                                    84.83,
                                    31.42
                                ],
                                [
                                    85.59,
                                    45.48
                                ],
                                [
                                    85.4332,
                                    45.9227
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
                            "startDate": "2022-05-01T02:10:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651371000000,
                            "endTime": 1651381200000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//9.255882049386855//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        81.23534738629446,
                                        48.62304729435046
                                    ],
                                    [
                                        81.23534738629446,
                                        43.08315070495835
                                    ],
                                    [
                                        89.2318211726507,
                                        43.08315070495835
                                    ],
                                    [
                                        89.2318211726507,
                                        48.62304729435046
                                    ],
                                    [
                                        81.23534738629446,
                                        48.62304729435046
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
                            "startDate": "2022-05-01T05:00:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651381200000,
                            "endTime": 1651381200000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//13.883823074080283//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        83.53783651320903,
                                        47.19517299142705
                                    ],
                                    [
                                        83.53783651320903,
                                        44.620309402030095
                                    ],
                                    [
                                        87.24259306397359,
                                        44.620309402030095
                                    ],
                                    [
                                        87.24259306397359,
                                        47.19517299142705
                                    ],
                                    [
                                        83.53783651320903,
                                        47.19517299142705
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
                            "startDate": "2022-05-01T05:00:00.000Z",
                            "endDate": "2022-05-01T07:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651381200000,
                            "endTime": 1651390200000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//18.51176409877371//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.4332,
                                    45.9227
                                ],
                                [
                                    85.08,
                                    34.74
                                ],
                                [
                                    84.64,
                                    24.47
                                ],
                                [
                                    83.49,
                                    13.49
                                ],
                                [
                                    82.62,
                                    1.78
                                ],
                                [
                                    83.0681,
                                    2.0765
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_53",
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
            "Reference": "Red-56",
            "title": "Order item 60",
            "startDate": "2022-05-01T01:30:00.000Z",
            "endDate": "2022-05-01T07:50:00.000Z",
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a785",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                },
                {
                    "asset": "a377"
                },
                {
                    "asset": "a24"
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
                                    72.7239,
                                    15.1973
                                ],
                                [
                                    68.72,
                                    27.28
                                ],
                                [
                                    64.03,
                                    39.69
                                ],
                                [
                                    64.334,
                                    39.3322
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
                                        60.209972939689486,
                                        42.311095173182466
                                    ],
                                    [
                                        60.209972939689486,
                                        36.219855965787296
                                    ],
                                    [
                                        68.11370688514145,
                                        36.219855965787296
                                    ],
                                    [
                                        68.11370688514145,
                                        42.311095173182466
                                    ],
                                    [
                                        60.209972939689486,
                                        42.311095173182466
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
                                    64.334,
                                    39.3322
                                ],
                                [
                                    66.24,
                                    33.49
                                ],
                                [
                                    68.07,
                                    27.58
                                ],
                                [
                                    70.18,
                                    20.95
                                ],
                                [
                                    72.57,
                                    15.6
                                ],
                                [
                                    72.7239,
                                    15.1973
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_56",
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
            "messageType": "Maritime--ASWBarrier",
            "timestamp": "2022-09-27T14:08:18.849Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-59",
            "title": "Order item 63",
            "startDate": "2022-05-01T01:50:00.000Z",
            "endDate": "2022-05-01T04:50:00.000Z",
            "activity": "f-blue-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "a243",
                    "number": 3
                },
                {
                    "asset": "a289",
                    "number": 4
                },
                {
                    "asset": "a48",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                }
            ],
            "location": [
                {
                    "uniqid": "ASW Barrier-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route out",
                            "startDate": "2022-05-01T01:50:00.000Z",
                            "endDate": "2022-05-01T02:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651369800000,
                            "endTime": 1651372800000,
                            "geomId": "ASW Barrier-0",
                            "name": "f-blue//2.311498381488491//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.561,
                                    45.1898
                                ],
                                [
                                    63.08,
                                    26.15
                                ],
                                [
                                    65.96,
                                    7.46
                                ],
                                [
                                    66.313,
                                    7.1179
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
                            "startDate": "2022-05-01T02:40:00.000Z",
                            "endDate": "2022-05-01T03:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651372800000,
                            "endTime": 1651374000000,
                            "geomId": "ASW Barrier-1",
                            "name": "f-blue//4.622996762976982//ASW Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        62.421834400268445,
                                        10.922365323045154
                                    ],
                                    [
                                        62.421834400268445,
                                        3.28148976674769
                                    ],
                                    [
                                        70.13985480446419,
                                        3.28148976674769
                                    ],
                                    [
                                        70.13985480446419,
                                        10.922365323045154
                                    ],
                                    [
                                        62.421834400268445,
                                        10.922365323045154
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
                            "startDate": "2022-05-01T03:00:00.000Z",
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651374000000,
                            "endTime": 1651380600000,
                            "geomId": "ASW Barrier-2",
                            "name": "f-blue//6.9344951444654725//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.313,
                                    7.1179
                                ],
                                [
                                    62.93,
                                    26.34
                                ],
                                [
                                    59.88,
                                    44.9
                                ],
                                [
                                    59.561,
                                    45.1898
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_59",
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
            "Reference": "Red-62",
            "title": "Order item 66",
            "startDate": "2022-05-01T01:50:00.000Z",
            "endDate": "2022-05-01T02:40:00.000Z",
            "activity": "f-red-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a720",
                    "number": 5
                },
                {
                    "asset": "a705",
                    "number": 5
                },
                {
                    "asset": "a408",
                    "number": 4
                },
                {
                    "asset": "a615",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                },
                {
                    "asset": "a377"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T01:50:00.000Z",
                            "endDate": "2022-05-01T02:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651369800000,
                            "endTime": 1651372800000,
                            "geomId": "Transit-0",
                            "name": "f-red//6.993408813752467//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.7687,
                                    2.1092
                                ],
                                [
                                    43.21,
                                    22.36
                                ],
                                [
                                    23.06,
                                    43.01
                                ],
                                [
                                    22.6746,
                                    43.5171
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_62",
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
            "Reference": "Blue-65",
            "title": "Order item 69",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T07:40:00.000Z",
            "activity": "f-blue-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a217",
                    "number": 3
                },
                {
                    "asset": "a142",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                },
                {
                    "asset": "a776"
                }
            ],
            "location": [
                {
                    "uniqid": "Offensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Offensive Counter Air-0",
                            "name": "f-blue//5.568740415357752//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.8917,
                                    52.064
                                ],
                                [
                                    64,
                                    28.67
                                ],
                                [
                                    50.59,
                                    5.75
                                ],
                                [
                                    50.9442,
                                    5.6708
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651380600000,
                            "geomId": "Offensive Counter Air-1",
                            "name": "f-blue//11.137480830715504//OCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.50168885824862,
                                        8.083928741068004
                                    ],
                                    [
                                        48.50168885824862,
                                        3.2475197745236106
                                    ],
                                    [
                                        53.36631769303354,
                                        3.2475197745236106
                                    ],
                                    [
                                        53.36631769303354,
                                        8.083928741068004
                                    ],
                                    [
                                        48.50168885824862,
                                        8.083928741068004
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
                            "startDate": "2022-05-01T04:50:00.000Z",
                            "endDate": "2022-05-01T07:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651380600000,
                            "endTime": 1651390800000,
                            "geomId": "Offensive Counter Air-2",
                            "name": "f-blue//16.706221246073255//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    50.9442,
                                    5.6708
                                ],
                                [
                                    76.57,
                                    51.95
                                ],
                                [
                                    76.8917,
                                    52.064
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_65",
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-25T17:49:16.162Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-68",
            "title": "Order item 72",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T07:30:00.000Z",
            "activity": "f-blue-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "a337",
                    "number": 1
                },
                {
                    "asset": "a200",
                    "number": 3
                },
                {
                    "asset": "a178",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                },
                {
                    "asset": "a776"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//3.0374931863043457//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.6387,
                                    30.6772
                                ],
                                [
                                    48.22,
                                    22.35
                                ],
                                [
                                    41.01,
                                    13.22
                                ],
                                [
                                    33.08,
                                    4.38
                                ],
                                [
                                    33.435,
                                    4.3149
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T04:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651380000000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//6.0749863726086915//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        29.968299968845457,
                                        7.742130465457837
                                    ],
                                    [
                                        29.968299968845457,
                                        0.8720791651010105
                                    ],
                                    [
                                        36.870459335688004,
                                        0.8720791651010105
                                    ],
                                    [
                                        36.870459335688004,
                                        7.742130465457837
                                    ],
                                    [
                                        29.968299968845457,
                                        7.742130465457837
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
                            "endDate": "2022-05-01T07:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651380000000,
                            "endTime": 1651390200000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//9.112479558913037//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.435,
                                    4.3149
                                ],
                                [
                                    41.18,
                                    13.14
                                ],
                                [
                                    48.15,
                                    22.21
                                ],
                                [
                                    55.41,
                                    30.55
                                ],
                                [
                                    55.6387,
                                    30.6772
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_68",
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
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-23T03:50:56.847Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-71",
            "title": "Order item 75",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T08:10:00.000Z",
            "activity": "f-blue-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a271",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//4.399667126592249//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.1757,
                                    31.9699
                                ],
                                [
                                    33.8,
                                    30
                                ],
                                [
                                    43.47,
                                    29.1
                                ],
                                [
                                    52.43,
                                    27.47
                                ],
                                [
                                    52.9176,
                                    26.9817
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651381200000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//8.799334253184497//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        51.079643738538074,
                                        28.583830748458336
                                    ],
                                    [
                                        51.079643738538074,
                                        25.356404630216492
                                    ],
                                    [
                                        54.70358654125808,
                                        25.356404630216492
                                    ],
                                    [
                                        54.70358654125808,
                                        28.583830748458336
                                    ],
                                    [
                                        51.079643738538074,
                                        28.583830748458336
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
                            "startDate": "2022-05-01T05:00:00.000Z",
                            "endDate": "2022-05-01T07:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381200000,
                            "endTime": 1651389000000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//13.199001379776746//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        50.806260695111405,
                                        28.81602838087374
                                    ],
                                    [
                                        50.806260695111405,
                                        25.11693107948731
                                    ],
                                    [
                                        54.9606536681524,
                                        25.11693107948731
                                    ],
                                    [
                                        54.9606536681524,
                                        28.81602838087374
                                    ],
                                    [
                                        50.806260695111405,
                                        28.81602838087374
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
                            "startDate": "2022-05-01T07:10:00.000Z",
                            "endDate": "2022-05-01T08:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651389000000,
                            "endTime": 1651392600000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//17.598668506368995//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.9176,
                                    26.9817
                                ],
                                [
                                    43.77,
                                    28.86
                                ],
                                [
                                    33.73,
                                    29.83
                                ],
                                [
                                    23.97,
                                    32.09
                                ],
                                [
                                    24.1757,
                                    31.9699
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_71",
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
            "messageType": "Maritime--MissileStrike",
            "timestamp": "2022-09-23T09:06:20.590Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-74",
            "title": "Order item 81",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T04:50:00.000Z",
            "activity": "f-blue-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "a27",
                    "number": 4,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "a170",
                    "number": 4,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439",
                    "missileType": "SRBM",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_74",
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
            "messageType": "Land--Standard",
            "timestamp": "2022-09-23T09:06:20.590Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-77",
            "title": "Order item 81",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T05:00:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "a3",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//3.8042785150464624//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    54.5334,
                                    40.3968
                                ],
                                [
                                    59.61,
                                    23.41
                                ],
                                [
                                    65,
                                    5.74
                                ],
                                [
                                    64.954,
                                    5.726
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T03:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651377000000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//7.608557030092925//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        62.87752369701373,
                                        7.779634650050266
                                    ],
                                    [
                                        62.87752369701373,
                                        3.6649489678945635
                                    ],
                                    [
                                        67.01557411415875,
                                        3.6649489678945635
                                    ],
                                    [
                                        67.01557411415875,
                                        7.779634650050266
                                    ],
                                    [
                                        62.87752369701373,
                                        7.779634650050266
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
                            "startDate": "2022-05-01T03:50:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651377000000,
                            "endTime": 1651381200000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//11.412835545139387//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.954,
                                    5.726
                                ],
                                [
                                    54.24,
                                    40.45
                                ],
                                [
                                    54.5334,
                                    40.3968
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_77",
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
            "timestamp": "2022-09-26T04:20:03.647Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-80",
            "title": "Order item 84",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T06:20:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a592",
                    "number": 0
                },
                {
                    "asset": "a618",
                    "number": 1
                },
                {
                    "asset": "a762",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                },
                {
                    "asset": "a377"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Patrol-0",
                            "name": "f-red//6.846715963212773//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    49.6943,
                                    25.6973
                                ],
                                [
                                    44.73,
                                    36.55
                                ],
                                [
                                    44.601,
                                    36.2622
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651373400000,
                            "endTime": 1651380600000,
                            "geomId": "Patrol-1",
                            "name": "f-red//13.693431926425546//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        41.16063032755072,
                                        38.89173274770977
                                    ],
                                    [
                                        41.16063032755072,
                                        33.54064355903708
                                    ],
                                    [
                                        47.81343987032855,
                                        33.54064355903708
                                    ],
                                    [
                                        47.81343987032855,
                                        38.89173274770977
                                    ],
                                    [
                                        41.16063032755072,
                                        38.89173274770977
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
                            "startDate": "2022-05-01T04:50:00.000Z",
                            "endDate": "2022-05-01T06:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651380600000,
                            "endTime": 1651386000000,
                            "geomId": "Patrol-2",
                            "name": "f-red//20.54014788963832//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.601,
                                    36.2622
                                ],
                                [
                                    46.16,
                                    32.55
                                ],
                                [
                                    47.81,
                                    28.92
                                ],
                                [
                                    49.74,
                                    25.58
                                ],
                                [
                                    49.6943,
                                    25.6973
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_80",
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
            "messageType": "Land--MissileStrike",
            "timestamp": "2022-09-29T04:49:53.854Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-83",
            "title": "Order item 91",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:00:00.000Z",
            "activity": "f-blue-Land-Strike",
            "ownAssets": [
                {
                    "asset": "a210",
                    "number": 3,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a174",
                    "number": 2,
                    "missileType": "Standard Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439",
                    "missileType": "Standard Cruise",
                    "number": 0
                },
                {
                    "asset": "a776",
                    "missileType": "Standard Cruise",
                    "number": 2
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_83",
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
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-28T19:59:32.132Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-86",
            "title": "Order item 90",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-red-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "a444",
                    "number": 5
                },
                {
                    "asset": "a750",
                    "number": 3
                },
                {
                    "asset": "a768",
                    "number": 5
                },
                {
                    "asset": "a497",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a37"
                },
                {
                    "asset": "a377"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Transit-0",
                            "name": "f-red//4.611854367132764//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.5703,
                                    3.0799
                                ],
                                [
                                    65.57,
                                    11.18
                                ],
                                [
                                    71.5,
                                    19.23
                                ],
                                [
                                    76.72,
                                    27.56
                                ],
                                [
                                    83.22,
                                    36.17
                                ],
                                [
                                    83.083,
                                    36.0895
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_86",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-28T16:25:17.560Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-89",
            "title": "Order item 93",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T04:10:00.000Z",
            "activity": "f-blue-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a96",
                    "number": 4
                },
                {
                    "asset": "a343",
                    "number": 3
                },
                {
                    "asset": "a301",
                    "number": 5
                },
                {
                    "asset": "a373",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a439"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//4.334555323177483//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.5335,
                                    29.5802
                                ],
                                [
                                    56.42,
                                    25.37
                                ],
                                [
                                    60.2,
                                    21.05
                                ],
                                [
                                    64.26,
                                    16.02
                                ],
                                [
                                    68.61,
                                    12.27
                                ],
                                [
                                    68.6313,
                                    11.9423
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651375800000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//8.669110646354966//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        67.26046577882789,
                                        13.27320405809157
                                    ],
                                    [
                                        67.26046577882789,
                                        10.604821376792083
                                    ],
                                    [
                                        69.98869626919827,
                                        10.604821376792083
                                    ],
                                    [
                                        69.98869626919827,
                                        13.27320405809157
                                    ],
                                    [
                                        67.26046577882789,
                                        13.27320405809157
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
                            "startDate": "2022-05-01T03:30:00.000Z",
                            "endDate": "2022-05-01T04:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651375800000,
                            "endTime": 1651378200000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//13.003665969532449//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    68.6313,
                                    11.9423
                                ],
                                [
                                    64.15,
                                    16.06
                                ],
                                [
                                    60.46,
                                    20.98
                                ],
                                [
                                    56.06,
                                    25.19
                                ],
                                [
                                    52.94,
                                    29.67
                                ],
                                [
                                    52.5335,
                                    29.5802
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_89",
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
            "timestamp": "2023-01-31T17:16:32.689Z",
            "turnNumber": 3,
            "counter": 1,
            "interaction": {
                "startTime": "2022-05-01T01:50:00.000Z",
                "endTime": "2022-05-01T04:50:00.000Z",
                "id": "umpire-1",
                "orders1": "m_f-blue_59",
                "orders2": "m_f-red_53",
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
        "_id": "2023-01-31T17:16:32.689Z//0"
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
            "timestamp": "2023-01-31T17:16:32.689Z",
            "turnNumber": 3,
            "counter": 2,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T04:40:00.000Z",
                "id": "umpire-2",
                "orders1": "m_f-blue_71",
                "orders2": "m_f-red_50",
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
        "_id": "2023-01-31T17:16:32.689Z//1"
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
            "timestamp": "2023-01-31T17:16:32.689Z",
            "turnNumber": 3,
            "counter": 3,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T06:20:00.000Z",
                "id": "umpire-3",
                "orders1": "m_f-blue_68",
                "orders2": "m_f-red_80",
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
        "_id": "2023-01-31T17:16:32.689Z//2"
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
            "timestamp": "2023-01-31T17:16:32.689Z",
            "turnNumber": 3,
            "counter": 4,
            "interaction": {
                "startTime": "2022-05-01T00:30:00.000Z",
                "endTime": "2022-05-01T00:55:00.000Z",
                "id": "umpire-4",
                "orders1": "m_f-blue_2",
                "orders2": "m_f-red_29",
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
        "_id": "2023-01-31T17:16:32.689Z//3"
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
            "timestamp": "2023-01-31T17:16:32.689Z",
            "turnNumber": 3,
            "counter": 5,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T03:35:00.000Z",
                "id": "umpire-5",
                "orders1": "m_f-blue_74",
                "orders2": "m_f-red_23",
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
        "_id": "2023-01-31T17:16:32.690Z//4"
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
            "timestamp": "2023-01-31T17:16:32.690Z",
            "turnNumber": 3,
            "counter": 6,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T02:00:00.000Z",
                "id": "umpire-6",
                "orders1": "m_f-blue_83",
                "orders2": "m_f-red_56",
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
        "_id": "2023-01-31T17:16:32.690Z//5"
    }
]