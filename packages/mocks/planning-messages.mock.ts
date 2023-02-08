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
                    "asset": "a48",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a388"
                },
                {
                    "asset": "a1145"
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
                                    38.2027,
                                    48.6654
                                ],
                                [
                                    48.97,
                                    46.29
                                ],
                                [
                                    60.11,
                                    43.28
                                ],
                                [
                                    59.8273,
                                    43.6013
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
                "force": "White",
                "forceColor": "#FCFBEE",
                "roleName": "CO",
                "roleId": "white-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-white"
            },
            "messageType": "Land--Standard",
            "timestamp": "2022-09-27T19:41:04.380Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "White-5",
            "title": "Order item 9",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T04:55:00.000Z",
            "activity": "f-white-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "a1179",
                    "number": 3
                },
                {
                    "asset": "a1126",
                    "number": 4
                },
                {
                    "asset": "a1158",
                    "number": 0
                },
                {
                    "asset": "a975",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a845"
                },
                {
                    "asset": "a56"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-white",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-white//3.8121305503746044//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.424,
                                    26.128
                                ],
                                [
                                    71.12,
                                    30.19
                                ],
                                [
                                    57.72,
                                    35.15
                                ],
                                [
                                    45.6,
                                    39.4
                                ],
                                [
                                    32.77,
                                    42.93
                                ],
                                [
                                    32.9771,
                                    43.4349
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-white",
                            "startTime": 1651366500000,
                            "endTime": 1651374900000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-white//7.624261100749209//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        28.449416756140828,
                                        46.466943817009124
                                    ],
                                    [
                                        28.449416756140828,
                                        40.24156584799036
                                    ],
                                    [
                                        37.0617703839718,
                                        40.24156584799036
                                    ],
                                    [
                                        37.0617703839718,
                                        46.466943817009124
                                    ],
                                    [
                                        28.449416756140828,
                                        46.466943817009124
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
                            "startDate": "2022-05-01T03:15:00.000Z",
                            "endDate": "2022-05-01T04:55:00.000Z",
                            "force": "f-white",
                            "startTime": 1651374900000,
                            "endTime": 1651380900000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-white//11.436391651123813//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.9771,
                                    43.4349
                                ],
                                [
                                    49.8,
                                    37.3
                                ],
                                [
                                    66.73,
                                    32.27
                                ],
                                [
                                    82.94,
                                    26.52
                                ],
                                [
                                    83.424,
                                    26.128
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-white_5",
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
                    "asset": "a75",
                    "number": 5
                },
                {
                    "asset": "a277",
                    "number": 1
                },
                {
                    "asset": "a263",
                    "number": 2
                },
                {
                    "asset": "a35",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a388"
                },
                {
                    "asset": "a1145"
                },
                {
                    "asset": "a356"
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
                                    52.5526,
                                    37.1785
                                ],
                                [
                                    55.7,
                                    33.3
                                ],
                                [
                                    57.94,
                                    28.51
                                ],
                                [
                                    60.46,
                                    25
                                ],
                                [
                                    60.9587,
                                    24.5546
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
                                        60.68587017854581,
                                        24.802019526841512
                                    ],
                                    [
                                        60.68587017854581,
                                        24.306691355071933
                                    ],
                                    [
                                        61.23045433150559,
                                        24.306691355071933
                                    ],
                                    [
                                        61.23045433150559,
                                        24.802019526841512
                                    ],
                                    [
                                        60.68587017854581,
                                        24.802019526841512
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
                                    60.9587,
                                    24.5546
                                ],
                                [
                                    56.99,
                                    30.72
                                ],
                                [
                                    52.4,
                                    37.27
                                ],
                                [
                                    52.5526,
                                    37.1785
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
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Air--Patrol",
            "timestamp": "2022-09-26T20:39:53.339Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-11",
            "title": "Order item 15",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T05:35:00.000Z",
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a335",
                    "number": 4
                },
                {
                    "asset": "a492",
                    "number": 3
                },
                {
                    "asset": "a433",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a1145"
                },
                {
                    "asset": "a56"
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
                            "name": "f-red//6.906210489443765//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.68,
                                    32.2272
                                ],
                                [
                                    66.56,
                                    23.7
                                ],
                                [
                                    71.74,
                                    14.47
                                ],
                                [
                                    71.5366,
                                    14.5908
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
                            "force": "f-red",
                            "startTime": 1651366500000,
                            "endTime": 1651374300000,
                            "geomId": "Patrol-1",
                            "name": "f-red//13.81242097888753//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        67.6582867107925,
                                        18.242457692662413
                                    ],
                                    [
                                        67.6582867107925,
                                        10.877264311341605
                                    ],
                                    [
                                        75.28719271362596,
                                        10.877264311341605
                                    ],
                                    [
                                        75.28719271362596,
                                        18.242457692662413
                                    ],
                                    [
                                        67.6582867107925,
                                        18.242457692662413
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
                            "force": "f-red",
                            "startTime": 1651374300000,
                            "endTime": 1651383300000,
                            "geomId": "Patrol-2",
                            "name": "f-red//20.718631468331296//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    71.5366,
                                    14.5908
                                ],
                                [
                                    68.73,
                                    20.76
                                ],
                                [
                                    64.97,
                                    25.97
                                ],
                                [
                                    61.48,
                                    32.46
                                ],
                                [
                                    61.68,
                                    32.2272
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_11",
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
                    "asset": "a160",
                    "number": 0
                },
                {
                    "asset": "a271",
                    "number": 4
                },
                {
                    "asset": "a168",
                    "number": 5
                },
                {
                    "asset": "a149",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a388"
                },
                {
                    "asset": "a1145"
                },
                {
                    "asset": "a356"
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
                                    43.9355,
                                    46.0794
                                ],
                                [
                                    41.96,
                                    25.52
                                ],
                                [
                                    39.34,
                                    5.32
                                ],
                                [
                                    39.5914,
                                    5.0619
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
                    "asset": "a149",
                    "number": 0
                },
                {
                    "asset": "a215",
                    "number": 0
                },
                {
                    "asset": "a67",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a388"
                },
                {
                    "asset": "a1145"
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
                                    39.8546,
                                    43.8669
                                ],
                                [
                                    52.15,
                                    32.47
                                ],
                                [
                                    64.51,
                                    21.13
                                ],
                                [
                                    77.15,
                                    10.08
                                ],
                                [
                                    77.4166,
                                    9.8161
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
                                        76.57669070071714,
                                        10.640534433098264
                                    ],
                                    [
                                        76.57669070071714,
                                        8.989607520290573
                                    ],
                                    [
                                        78.2523322875544,
                                        8.989607520290573
                                    ],
                                    [
                                        78.2523322875544,
                                        10.640534433098264
                                    ],
                                    [
                                        76.57669070071714,
                                        10.640534433098264
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
                                    77.4166,
                                    9.8161
                                ],
                                [
                                    39.5,
                                    43.9
                                ],
                                [
                                    39.8546,
                                    43.8669
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
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Air--TST",
            "timestamp": "2022-09-22T05:08:12.707Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-20",
            "title": "Order item 24",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T03:45:00.000Z",
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a303",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                }
            ],
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-red//5.747989167804917//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.485,
                                    43.2085
                                ],
                                [
                                    59.91,
                                    34.58
                                ],
                                [
                                    57.77,
                                    26.39
                                ],
                                [
                                    57.9136,
                                    26.4343
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T02:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651366500000,
                            "endTime": 1651372500000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-red//11.495978335609834//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        53.92269455199285,
                                        29.841589452329014
                                    ],
                                    [
                                        53.92269455199285,
                                        22.92265257075489
                                    ],
                                    [
                                        61.6717910159444,
                                        22.92265257075489
                                    ],
                                    [
                                        61.6717910159444,
                                        29.841589452329014
                                    ],
                                    [
                                        53.92269455199285,
                                        29.841589452329014
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
                            "startDate": "2022-05-01T02:35:00.000Z",
                            "endDate": "2022-05-01T03:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651372500000,
                            "endTime": 1651376700000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-red//17.24396750341475//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.9136,
                                    26.4343
                                ],
                                [
                                    60.11,
                                    34.46
                                ],
                                [
                                    61.7,
                                    42.89
                                ],
                                [
                                    61.485,
                                    43.2085
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_20",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "White",
                "forceColor": "#FCFBEE",
                "roleName": "CO",
                "roleId": "white-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-white"
            },
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-29T19:25:40.744Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "White-23",
            "title": "Order item 27",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-white-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "a922",
                    "number": 3
                },
                {
                    "asset": "a1198",
                    "number": 2
                },
                {
                    "asset": "a959",
                    "number": 3
                },
                {
                    "asset": "a1105",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a845"
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
                            "force": "f-white",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Transit-0",
                            "name": "f-white//4.815424399195763//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.8944,
                                    8.2318
                                ],
                                [
                                    23.58,
                                    36.81
                                ],
                                [
                                    23.4719,
                                    37.1728
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-white_23",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "White",
                "forceColor": "#FCFBEE",
                "roleName": "CO",
                "roleId": "white-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-white"
            },
            "messageType": "Land--Standard",
            "timestamp": "2022-09-25T07:27:09.572Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "White-26",
            "title": "Order item 30",
            "startDate": "2022-05-01T00:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-white-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "a1105",
                    "number": 3
                },
                {
                    "asset": "a1036",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a845"
                },
                {
                    "asset": "a56"
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
                            "force": "f-white",
                            "startTime": 1651363800000,
                            "endTime": 1651366800000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-white//2.7762807999097276//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    70.6313,
                                    6.2053
                                ],
                                [
                                    55.73,
                                    11.8
                                ],
                                [
                                    41.11,
                                    16.66
                                ],
                                [
                                    25.77,
                                    21.82
                                ],
                                [
                                    25.8286,
                                    22.1958
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
                            "force": "f-white",
                            "startTime": 1651366800000,
                            "endTime": 1651369800000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-white//5.552561599819455//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        23.22884404665516,
                                        24.540295947682697
                                    ],
                                    [
                                        23.22884404665516,
                                        19.811411046667462
                                    ],
                                    [
                                        28.34223960969954,
                                        19.811411046667462
                                    ],
                                    [
                                        28.34223960969954,
                                        24.540295947682697
                                    ],
                                    [
                                        23.22884404665516,
                                        24.540295947682697
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
                            "force": "f-white",
                            "startTime": 1651369800000,
                            "endTime": 1651377600000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-white//8.328842399729183//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.8286,
                                    22.1958
                                ],
                                [
                                    37.39,
                                    18.1
                                ],
                                [
                                    47.75,
                                    13.8
                                ],
                                [
                                    59.39,
                                    9.78
                                ],
                                [
                                    70.31,
                                    6.04
                                ],
                                [
                                    70.6313,
                                    6.2053
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-white_26",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "White",
                "forceColor": "#FCFBEE",
                "roleName": "CO",
                "roleId": "white-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-white"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-25T09:12:39.190Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "White-29",
            "title": "Order item 33",
            "startDate": "2022-05-01T00:30:00.000Z",
            "endDate": "2022-05-01T01:20:00.000Z",
            "activity": "f-white-Air-Transit",
            "ownAssets": [
                {
                    "asset": "a1153",
                    "number": 2
                },
                {
                    "asset": "a1038",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a845"
                },
                {
                    "asset": "a56"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T00:30:00.000Z",
                            "endDate": "2022-05-01T01:20:00.000Z",
                            "force": "f-white",
                            "startTime": 1651365000000,
                            "endTime": 1651368000000,
                            "geomId": "Transit-0",
                            "name": "f-white//4.630558369892242//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.7868,
                                    27.3045
                                ],
                                [
                                    65.95,
                                    29.14
                                ],
                                [
                                    74.28,
                                    30.15
                                ],
                                [
                                    81.9,
                                    31.45
                                ],
                                [
                                    81.9372,
                                    31.6337
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-white_29",
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
                    "asset": "a165",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a388"
                },
                {
                    "asset": "a1145"
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
                                    36.0123,
                                    31.9324
                                ],
                                [
                                    36.32,
                                    26.03
                                ],
                                [
                                    37.48,
                                    18.98
                                ],
                                [
                                    37.93,
                                    13.21
                                ],
                                [
                                    38.65,
                                    6.73
                                ],
                                [
                                    38.2927,
                                    6.6996
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
                                        35.41341095838336,
                                        9.530780645547331
                                    ],
                                    [
                                        35.41341095838336,
                                        3.8518514788140155
                                    ],
                                    [
                                        41.13864684854298,
                                        3.8518514788140155
                                    ],
                                    [
                                        41.13864684854298,
                                        9.530780645547331
                                    ],
                                    [
                                        35.41341095838336,
                                        9.530780645547331
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
                                    38.2927,
                                    6.6996
                                ],
                                [
                                    37.31,
                                    14.66
                                ],
                                [
                                    36.59,
                                    23.89
                                ],
                                [
                                    36.15,
                                    32.39
                                ],
                                [
                                    36.0123,
                                    31.9324
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
                "force": "White",
                "forceColor": "#FCFBEE",
                "roleName": "CO",
                "roleId": "white-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-white"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-22T13:55:40.797Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "White-35",
            "title": "Order item 39",
            "startDate": "2022-05-01T00:45:00.000Z",
            "endDate": "2022-05-01T01:35:00.000Z",
            "activity": "f-white-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a1142",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T00:45:00.000Z",
                            "endDate": "2022-05-01T01:35:00.000Z",
                            "force": "f-white",
                            "startTime": 1651365900000,
                            "endTime": 1651368900000,
                            "geomId": "Transit-0",
                            "name": "f-white//5.019377017772058//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    56.3955,
                                    27.177
                                ],
                                [
                                    45.81,
                                    32.51
                                ],
                                [
                                    34.44,
                                    38.07
                                ],
                                [
                                    23.36,
                                    42.92
                                ],
                                [
                                    23.2064,
                                    43.4092
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-white_35",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "White",
                "forceColor": "#FCFBEE",
                "roleName": "CO",
                "roleId": "white-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-white"
            },
            "messageType": "Land--Standard",
            "timestamp": "2022-09-28T00:53:12.787Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "White-38",
            "title": "Order item 42",
            "startDate": "2022-05-01T00:50:00.000Z",
            "endDate": "2022-05-01T04:30:00.000Z",
            "activity": "f-white-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "a1084",
                    "number": 2
                },
                {
                    "asset": "a1134",
                    "number": 1
                },
                {
                    "asset": "a969",
                    "number": 0
                },
                {
                    "asset": "a1190",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a845"
                },
                {
                    "asset": "a56"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T00:50:00.000Z",
                            "endDate": "2022-05-01T01:40:00.000Z",
                            "force": "f-white",
                            "startTime": 1651366200000,
                            "endTime": 1651369200000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-white//3.55391809566936//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.129,
                                    15.6106
                                ],
                                [
                                    61.36,
                                    20.8
                                ],
                                [
                                    49.84,
                                    26.24
                                ],
                                [
                                    36.61,
                                    31.96
                                ],
                                [
                                    37.0717,
                                    31.8912
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
                            "startDate": "2022-05-01T01:40:00.000Z",
                            "endDate": "2022-05-01T02:30:00.000Z",
                            "force": "f-white",
                            "startTime": 1651369200000,
                            "endTime": 1651372200000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-white//7.10783619133872//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        33.677116848593094,
                                        34.63978979199233
                                    ],
                                    [
                                        33.677116848593094,
                                        29.057689990825168
                                    ],
                                    [
                                        40.26650542510312,
                                        29.057689990825168
                                    ],
                                    [
                                        40.26650542510312,
                                        34.63978979199233
                                    ],
                                    [
                                        33.677116848593094,
                                        34.63978979199233
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
                            "startDate": "2022-05-01T02:30:00.000Z",
                            "endDate": "2022-05-01T04:30:00.000Z",
                            "force": "f-white",
                            "startTime": 1651372200000,
                            "endTime": 1651379400000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-white//10.66175428700808//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.0717,
                                    31.8912
                                ],
                                [
                                    55.59,
                                    23.62
                                ],
                                [
                                    74.61,
                                    15.84
                                ],
                                [
                                    74.129,
                                    15.6106
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-white_38",
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
                    "asset": "a290",
                    "number": 4
                },
                {
                    "asset": "a295",
                    "number": 0
                },
                {
                    "asset": "a85",
                    "number": 5
                },
                {
                    "asset": "a260",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a388"
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
                                    39.5793,
                                    44.2643
                                ],
                                [
                                    54.75,
                                    9.77
                                ],
                                [
                                    54.7088,
                                    10.125
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
                                        53.75845747658887,
                                        11.056341749468096
                                    ],
                                    [
                                        53.75845747658887,
                                        9.190946201514345
                                    ],
                                    [
                                        55.65363301727541,
                                        9.190946201514345
                                    ],
                                    [
                                        55.65363301727541,
                                        11.056341749468096
                                    ],
                                    [
                                        53.75845747658887,
                                        11.056341749468096
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
                                    54.7088,
                                    10.125
                                ],
                                [
                                    47.31,
                                    27.17
                                ],
                                [
                                    39.27,
                                    44.57
                                ],
                                [
                                    39.5793,
                                    44.2643
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
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-27T16:00:19.138Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-44",
            "title": "Order item 48",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T02:00:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "a860",
                    "number": 5
                },
                {
                    "asset": "a821",
                    "number": 4
                },
                {
                    "asset": "a866",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a1145"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.303263759415131//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.0152,
                                    27.4049
                                ],
                                [
                                    32.36,
                                    23.14
                                ],
                                [
                                    40.57,
                                    19.74
                                ],
                                [
                                    48.06,
                                    15.63
                                ],
                                [
                                    55.83,
                                    10.79
                                ],
                                [
                                    56.1382,
                                    11.1116
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_44",
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
            "messageType": "Other--SOFAttack",
            "timestamp": "2022-09-21T20:09:53.499Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-47",
            "title": "Order item 51",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T06:30:00.000Z",
            "activity": "f-red-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a396",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a1145"
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
                            "force": "f-red",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "SOF Activity-0",
                            "name": "f-red//2.5180683452636003//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.3994,
                                    47.629
                                ],
                                [
                                    68.27,
                                    38.58
                                ],
                                [
                                    72.98,
                                    28.38
                                ],
                                [
                                    76.98,
                                    19.47
                                ],
                                [
                                    80.27,
                                    9.84
                                ],
                                [
                                    80.6218,
                                    10.0781
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
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651375800000,
                            "geomId": "SOF Activity-1",
                            "name": "f-red//5.036136690527201//Activity Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        77.90259305387768,
                                        12.719504381407617
                                    ],
                                    [
                                        77.90259305387768,
                                        7.414827656523795
                                    ],
                                    [
                                        83.2966117146784,
                                        7.414827656523795
                                    ],
                                    [
                                        83.2966117146784,
                                        12.719504381407617
                                    ],
                                    [
                                        77.90259305387768,
                                        12.719504381407617
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
                            "force": "f-red",
                            "startTime": 1651375800000,
                            "endTime": 1651381800000,
                            "geomId": "SOF Activity-2",
                            "name": "f-red//7.554205035790801//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        78.64234853598536,
                                        12.008363663116574
                                    ],
                                    [
                                        78.64234853598536,
                                        8.136195731162491
                                    ],
                                    [
                                        82.57761279487298,
                                        8.136195731162491
                                    ],
                                    [
                                        82.57761279487298,
                                        12.008363663116574
                                    ],
                                    [
                                        78.64234853598536,
                                        12.008363663116574
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
                            "force": "f-red",
                            "startTime": 1651381800000,
                            "endTime": 1651386600000,
                            "geomId": "SOF Activity-3",
                            "name": "f-red//10.072273381054401//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    80.6218,
                                    10.0781
                                ],
                                [
                                    72.93,
                                    28.51
                                ],
                                [
                                    64.62,
                                    47.33
                                ],
                                [
                                    64.3994,
                                    47.629
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_47",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-28T22:03:28.651Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-50",
            "title": "Order item 54",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T02:00:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "a696",
                    "number": 3
                },
                {
                    "asset": "a866",
                    "number": 0
                },
                {
                    "asset": "a821",
                    "number": 0
                },
                {
                    "asset": "a860",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a1145"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.6262941003078595//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.3231,
                                    11.6182
                                ],
                                [
                                    31.59,
                                    22.78
                                ],
                                [
                                    28.11,
                                    34.21
                                ],
                                [
                                    22.92,
                                    45.91
                                ],
                                [
                                    23.3815,
                                    45.8477
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_50",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "White",
                "forceColor": "#FCFBEE",
                "roleName": "CO",
                "roleId": "white-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-white"
            },
            "messageType": "Land--Standard",
            "timestamp": "2022-09-23T21:41:04.593Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "White-53",
            "title": "Order item 57",
            "startDate": "2022-05-01T01:20:00.000Z",
            "endDate": "2022-05-01T05:00:00.000Z",
            "activity": "f-white-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "a1160",
                    "number": 3
                },
                {
                    "asset": "a985",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T01:20:00.000Z",
                            "endDate": "2022-05-01T02:10:00.000Z",
                            "force": "f-white",
                            "startTime": 1651368000000,
                            "endTime": 1651371000000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-white//4.627941024693428//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.9884,
                                    13.798
                                ],
                                [
                                    48.66,
                                    10.1
                                ],
                                [
                                    37.53,
                                    6.61
                                ],
                                [
                                    26.69,
                                    2.4
                                ],
                                [
                                    26.532,
                                    2.8415
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
                            "startDate": "2022-05-01T02:10:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-white",
                            "startTime": 1651371000000,
                            "endTime": 1651381200000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-white//9.255882049386855//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        23.745210333325787,
                                        5.611577090659638
                                    ],
                                    [
                                        23.745210333325787,
                                        0.06474521033589842
                                    ],
                                    [
                                        29.30542573562706,
                                        0.06474521033589842
                                    ],
                                    [
                                        29.30542573562706,
                                        5.611577090659638
                                    ],
                                    [
                                        23.745210333325787,
                                        5.611577090659638
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
                            "startDate": "2022-05-01T05:00:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-white",
                            "startTime": 1651381200000,
                            "endTime": 1651381200000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-white//13.883823074080283//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.532,
                                    2.8415
                                ],
                                [
                                    42.86,
                                    8.07
                                ],
                                [
                                    58.68,
                                    13.8
                                ],
                                [
                                    58.9884,
                                    13.798
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-white_53",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-23T11:02:41.326Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-56",
            "title": "Order item 60",
            "startDate": "2022-05-01T01:30:00.000Z",
            "endDate": "2022-05-01T02:20:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "a890",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a1145"
                },
                {
                    "asset": "a56"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T01:30:00.000Z",
                            "endDate": "2022-05-01T02:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651368600000,
                            "endTime": 1651371600000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.523009118420305//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.7497,
                                    15.7345
                                ],
                                [
                                    45.47,
                                    22.57
                                ],
                                [
                                    46.5,
                                    29.73
                                ],
                                [
                                    46.8024,
                                    29.3718
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_56",
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
            "messageType": "Maritime--ASWBarrier",
            "timestamp": "2022-09-27T14:08:18.849Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-59",
            "title": "Order item 63",
            "startDate": "2022-05-01T01:50:00.000Z",
            "endDate": "2022-05-01T04:50:00.000Z",
            "activity": "f-red-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "a483",
                    "number": 4
                },
                {
                    "asset": "a518",
                    "number": 1
                },
                {
                    "asset": "a337",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
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
                            "force": "f-red",
                            "startTime": 1651369800000,
                            "endTime": 1651372800000,
                            "geomId": "ASW Barrier-0",
                            "name": "f-red//2.311498381488491//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.3687,
                                    53.7869
                                ],
                                [
                                    49.56,
                                    44.02
                                ],
                                [
                                    32.11,
                                    34.61
                                ],
                                [
                                    32.4647,
                                    34.2658
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
                            "force": "f-red",
                            "startTime": 1651372800000,
                            "endTime": 1651374000000,
                            "geomId": "ASW Barrier-1",
                            "name": "f-red//4.622996762976982//ASW Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        27.614448609487415,
                                        37.99513728376647
                                    ],
                                    [
                                        27.614448609487415,
                                        30.361919580735396
                                    ],
                                    [
                                        36.893680361556925,
                                        30.361919580735396
                                    ],
                                    [
                                        36.893680361556925,
                                        37.99513728376647
                                    ],
                                    [
                                        27.614448609487415,
                                        37.99513728376647
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
                            "force": "f-red",
                            "startTime": 1651374000000,
                            "endTime": 1651380600000,
                            "geomId": "ASW Barrier-2",
                            "name": "f-red//6.9344951444654725//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.4647,
                                    34.2658
                                ],
                                [
                                    49.41,
                                    44.21
                                ],
                                [
                                    66.69,
                                    53.49
                                ],
                                [
                                    66.3687,
                                    53.7869
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_59",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--SOFAttack",
            "timestamp": "2022-09-27T22:57:57.163Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-62",
            "title": "Order item 66",
            "startDate": "2022-05-01T01:50:00.000Z",
            "endDate": "2022-05-01T06:00:00.000Z",
            "activity": "f-green-Land-Raid",
            "ownAssets": [
                {
                    "asset": "a842",
                    "number": 0
                },
                {
                    "asset": "a831",
                    "number": 5
                },
                {
                    "asset": "a605",
                    "number": 0
                },
                {
                    "asset": "a765",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a1145"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T01:50:00.000Z",
                            "endDate": "2022-05-01T02:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651369800000,
                            "endTime": 1651372800000,
                            "geomId": "Raid-0",
                            "name": "f-green//6.993408813752467//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.3099,
                                    19.0611
                                ],
                                [
                                    61.15,
                                    18.33
                                ],
                                [
                                    69.4,
                                    18.01
                                ],
                                [
                                    69.0147,
                                    18.5152
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Raid Location",
                            "startDate": "2022-05-01T02:40:00.000Z",
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651372800000,
                            "endTime": 1651380600000,
                            "geomId": "Raid-1",
                            "name": "f-green//13.986817627504934//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        67.93775246850879,
                                        19.527168566273282
                                    ],
                                    [
                                        67.93775246850879,
                                        17.497207961454027
                                    ],
                                    [
                                        70.07894432548964,
                                        17.497207961454027
                                    ],
                                    [
                                        70.07894432548964,
                                        19.527168566273282
                                    ],
                                    [
                                        67.93775246850879,
                                        19.527168566273282
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route back",
                            "startDate": "2022-05-01T04:50:00.000Z",
                            "endDate": "2022-05-01T06:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651380600000,
                            "endTime": 1651384800000,
                            "geomId": "Raid-2",
                            "name": "f-green//20.9802264412574//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    69.0147,
                                    18.5152
                                ],
                                [
                                    51.83,
                                    19.17
                                ],
                                [
                                    52.3099,
                                    19.0611
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_62",
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
                    "asset": "a165",
                    "number": 3
                },
                {
                    "asset": "a109",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a388"
                },
                {
                    "asset": "a1145"
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
                                    36.6999,
                                    50.5531
                                ],
                                [
                                    58.82,
                                    37.44
                                ],
                                [
                                    80.42,
                                    24.81
                                ],
                                [
                                    80.7746,
                                    24.7278
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
                                        78.05739553241472,
                                        27.122020958540233
                                    ],
                                    [
                                        78.05739553241472,
                                        22.28648479326102
                                    ],
                                    [
                                        83.38818321820656,
                                        22.28648479326102
                                    ],
                                    [
                                        83.38818321820656,
                                        27.122020958540233
                                    ],
                                    [
                                        78.05739553241472,
                                        27.122020958540233
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
                                    80.7746,
                                    24.7278
                                ],
                                [
                                    36.38,
                                    50.44
                                ],
                                [
                                    36.6999,
                                    50.5531
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
                    "asset": "a252",
                    "number": 5
                },
                {
                    "asset": "a151",
                    "number": 1
                },
                {
                    "asset": "a135",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a388"
                },
                {
                    "asset": "a1145"
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
                                    52.6489,
                                    50.855
                                ],
                                [
                                    44.84,
                                    35.59
                                ],
                                [
                                    37.24,
                                    19.53
                                ],
                                [
                                    28.92,
                                    3.75
                                ],
                                [
                                    29.2677,
                                    3.6815
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
                                        25.8059885049927,
                                        7.109887826357559
                                    ],
                                    [
                                        25.8059885049927,
                                        0.23981728216927173
                                    ],
                                    [
                                        32.70279104859914,
                                        0.23981728216927173
                                    ],
                                    [
                                        32.70279104859914,
                                        7.109887826357559
                                    ],
                                    [
                                        25.8059885049927,
                                        7.109887826357559
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
                                    29.2677,
                                    3.6815
                                ],
                                [
                                    37.4,
                                    19.45
                                ],
                                [
                                    44.77,
                                    35.45
                                ],
                                [
                                    52.42,
                                    50.73
                                ],
                                [
                                    52.6489,
                                    50.855
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
                    "asset": "a204",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a388"
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
                                    50.7146,
                                    54.265
                                ],
                                [
                                    42.4,
                                    40.1
                                ],
                                [
                                    34.14,
                                    27
                                ],
                                [
                                    25.16,
                                    13.17
                                ],
                                [
                                    25.6494,
                                    12.6848
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
                                        23.983950728009866,
                                        14.29352684026452
                                    ],
                                    [
                                        23.983950728009866,
                                        11.065833459089438
                                    ],
                                    [
                                        27.293862321744456,
                                        11.065833459089438
                                    ],
                                    [
                                        27.293862321744456,
                                        14.29352684026452
                                    ],
                                    [
                                        23.983950728009866,
                                        14.29352684026452
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
                                        23.738479724870373,
                                        14.527822209791315
                                    ],
                                    [
                                        23.738479724870373,
                                        10.828322362298698
                                    ],
                                    [
                                        27.53274445801903,
                                        10.828322362298698
                                    ],
                                    [
                                        27.53274445801903,
                                        14.527822209791315
                                    ],
                                    [
                                        23.738479724870373,
                                        14.527822209791315
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
                                    25.6494,
                                    12.6848
                                ],
                                [
                                    34.44,
                                    26.76
                                ],
                                [
                                    42.33,
                                    39.93
                                ],
                                [
                                    50.51,
                                    54.39
                                ],
                                [
                                    50.7146,
                                    54.265
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
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-25T03:36:38.323Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-74",
            "title": "Order item 78",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-red-Maritime-Sea Denial",
            "ownAssets": [
                {
                    "asset": "a321",
                    "number": 1
                },
                {
                    "asset": "a430",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a1145"
                },
                {
                    "asset": "a56"
                }
            ],
            "location": [
                {
                    "uniqid": "Sea Denial-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Sea Denial//Sea Denial Area",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Sea Denial-0",
                            "name": "f-red//4.6552622360759415//Sea Denial Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.96264874790683,
                                        55.225220031924664
                                    ],
                                    [
                                        32.96264874790683,
                                        51.91822265836925
                                    ],
                                    [
                                        38.54830203510288,
                                        51.91822265836925
                                    ],
                                    [
                                        38.54830203510288,
                                        55.225220031924664
                                    ],
                                    [
                                        32.96264874790683,
                                        55.225220031924664
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_74",
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
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a388"
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
                                    28.4405,
                                    38.4115
                                ],
                                [
                                    39.32,
                                    22.27
                                ],
                                [
                                    50.52,
                                    5.45
                                ],
                                [
                                    50.474,
                                    5.4354
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
                                        48.39893458722415,
                                        7.489225340857488
                                    ],
                                    [
                                        48.39893458722415,
                                        3.3745370009039655
                                    ],
                                    [
                                        52.53493120951152,
                                        3.3745370009039655
                                    ],
                                    [
                                        52.53493120951152,
                                        7.489225340857488
                                    ],
                                    [
                                        48.39893458722415,
                                        7.489225340857488
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
                                    50.474,
                                    5.4354
                                ],
                                [
                                    28.15,
                                    38.46
                                ],
                                [
                                    28.4405,
                                    38.4115
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
                "force": "White",
                "forceColor": "#FCFBEE",
                "roleName": "CO",
                "roleId": "white-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-white"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-26T04:20:03.647Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "White-80",
            "title": "Order item 84",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-white-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a1049",
                    "number": 5
                },
                {
                    "asset": "a1067",
                    "number": 0
                },
                {
                    "asset": "a1171",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a845"
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
                            "force": "f-white",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Transit-0",
                            "name": "f-white//6.846715963212773//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.8944,
                                    8.2318
                                ],
                                [
                                    49.72,
                                    29.42
                                ],
                                [
                                    49.5895,
                                    29.1364
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-white_80",
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
            "messageType": "f-blue--Land--MissileStrike",
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
                    "asset": "a159",
                    "number": 3,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a133",
                    "number": 2,
                    "missileType": "Standard Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a388",
                    "missileType": "Standard Cruise",
                    "number": 5
                },
                {
                    "asset": "a1145",
                    "missileType": "Standard Cruise",
                    "number": 0
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
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-28T19:59:32.132Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-86",
            "title": "Order item 90",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a634",
                    "number": 3
                },
                {
                    "asset": "a863",
                    "number": 1
                },
                {
                    "asset": "a876",
                    "number": 1
                },
                {
                    "asset": "a674",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
                },
                {
                    "asset": "a1145"
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
                            "force": "f-green",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Transit-0",
                            "name": "f-green//4.611854367132764//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.8092,
                                    22.3513
                                ],
                                [
                                    31.93,
                                    23.98
                                ],
                                [
                                    39.98,
                                    25.55
                                ],
                                [
                                    47.33,
                                    27.4
                                ],
                                [
                                    55.95,
                                    29.53
                                ],
                                [
                                    55.8093,
                                    29.4531
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_86",
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
            "timestamp": "2022-09-28T16:25:17.560Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-89",
            "title": "Order item 93",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T04:10:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a374",
                    "number": 1
                },
                {
                    "asset": "a557",
                    "number": 2
                },
                {
                    "asset": "a525",
                    "number": 3
                },
                {
                    "asset": "a578",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a88"
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
                            "name": "f-red//4.334555323177483//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.1593,
                                    52.3252
                                ],
                                [
                                    69.16,
                                    41.97
                                ],
                                [
                                    64.05,
                                    31.51
                                ],
                                [
                                    59.23,
                                    20.34
                                ],
                                [
                                    54.69,
                                    10.45
                                ],
                                [
                                    54.7088,
                                    10.125
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
                            "force": "f-red",
                            "startTime": 1651373400000,
                            "endTime": 1651375800000,
                            "geomId": "Patrol-1",
                            "name": "f-red//8.669110646354966//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        53.34746434729452,
                                        11.456420484163768
                                    ],
                                    [
                                        53.34746434729452,
                                        8.788028505259465
                                    ],
                                    [
                                        56.058859675742994,
                                        8.788028505259465
                                    ],
                                    [
                                        56.058859675742994,
                                        11.456420484163768
                                    ],
                                    [
                                        53.34746434729452,
                                        11.456420484163768
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
                            "force": "f-red",
                            "startTime": 1651375800000,
                            "endTime": 1651378200000,
                            "geomId": "Patrol-2",
                            "name": "f-red//13.003665969532449//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    54.7088,
                                    10.125
                                ],
                                [
                                    59.11,
                                    20.39
                                ],
                                [
                                    64.31,
                                    31.45
                                ],
                                [
                                    68.8,
                                    41.79
                                ],
                                [
                                    74.56,
                                    52.42
                                ],
                                [
                                    74.1593,
                                    52.3252
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_89",
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
            "timestamp": "2023-02-08T18:35:12.344Z",
            "turnNumber": 3,
            "counter": 1,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T04:50:00.000Z",
                "id": "umpire-1",
                "orders1": "m_f-blue_77",
                "orders2": "m_f-red_59",
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
        "_id": "2023-02-08T18:35:12.344Z//0"
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
            "timestamp": "2023-02-08T18:35:12.344Z",
            "turnNumber": 3,
            "counter": 2,
            "interaction": {
                "startTime": "2022-05-01T01:50:00.000Z",
                "endTime": "2022-05-01T02:45:00.000Z",
                "id": "umpire-2",
                "orders1": "m_f-blue_32",
                "orders2": "m_f-red_59",
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
        "_id": "2023-02-08T18:35:12.344Z//1"
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
            "timestamp": "2023-02-08T18:35:12.344Z",
            "turnNumber": 3,
            "counter": 3,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T05:35:00.000Z",
                "id": "umpire-3",
                "orders1": "m_f-blue_65",
                "orders2": "m_f-red_11",
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
        "_id": "2023-02-08T18:35:12.345Z//2"
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
            "timestamp": "2023-02-08T18:35:12.345Z",
            "turnNumber": 3,
            "counter": 4,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T03:45:00.000Z",
                "id": "umpire-4",
                "orders1": "m_f-blue_68",
                "orders2": "m_f-red_20",
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
        "_id": "2023-02-08T18:35:12.345Z//3"
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
            "timestamp": "2023-02-08T18:35:12.345Z",
            "turnNumber": 3,
            "counter": 5,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T04:10:00.000Z",
                "id": "umpire-5",
                "orders1": "m_f-blue_17",
                "orders2": "m_f-red_89",
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
        "_id": "2023-02-08T18:35:12.345Z//4"
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
            "timestamp": "2023-02-08T18:35:12.345Z",
            "turnNumber": 3,
            "counter": 6,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T03:45:00.000Z",
                "id": "umpire-6",
                "orders1": "m_f-blue_68",
                "orders2": "m_f-red_20",
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
        "_id": "2023-02-08T18:35:12.345Z//5"
    }
]