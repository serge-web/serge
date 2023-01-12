
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
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T00:25:00.000Z",
            "activity": "f-blue-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "a19",
                    "number": 2,
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
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T06:45:00.000Z",
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a194",
                    "number": 0
                },
                {
                    "asset": "a176",
                    "number": 0
                },
                {
                    "asset": "a187",
                    "number": 3
                },
                {
                    "asset": "a128",
                    "number": 4
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
                    "number": 3
                }
            ],
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
                                    33.7977,
                                    26.1484
                                ],
                                [
                                    34.75,
                                    32.2
                                ],
                                [
                                    34.62,
                                    39.16
                                ],
                                [
                                    35.76,
                                    45.4
                                ],
                                [
                                    36.19,
                                    50.93
                                ],
                                [
                                    36.4031,
                                    51.4312
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
                                        31.039236668411647,
                                        54.43377894477958
                                    ],
                                    [
                                        31.039236668411647,
                                        48.21466811267835
                                    ],
                                    [
                                        41.08353504161842,
                                        48.21466811267835
                                    ],
                                    [
                                        41.08353504161842,
                                        54.43377894477958
                                    ],
                                    [
                                        31.039236668411647,
                                        54.43377894477958
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
                                        31.613277532104064,
                                        54.143011527751916
                                    ],
                                    [
                                        31.613277532104064,
                                        48.54648782201511
                                    ],
                                    [
                                        40.64017492905686,
                                        48.54648782201511
                                    ],
                                    [
                                        40.64017492905686,
                                        54.143011527751916
                                    ],
                                    [
                                        31.613277532104064,
                                        54.143011527751916
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
                                    36.4031,
                                    51.4312
                                ],
                                [
                                    35.62,
                                    42.65
                                ],
                                [
                                    34.9,
                                    34.93
                                ],
                                [
                                    33.46,
                                    26.49
                                ],
                                [
                                    33.7977,
                                    26.1484
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
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T03:15:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "a28",
                    "number": 0
                },
                {
                    "asset": "a93",
                    "number": 3
                },
                {
                    "asset": "a88",
                    "number": 1
                },
                {
                    "asset": "a15",
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
                                    47.2238,
                                    52.3448
                                ],
                                [
                                    58.6,
                                    36.73
                                ],
                                [
                                    69.07,
                                    20.2
                                ],
                                [
                                    79.82,
                                    4.96
                                ],
                                [
                                    80.3225,
                                    4.5174
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
                                        80.07397646804611,
                                        4.7650222632435755
                                    ],
                                    [
                                        80.07397646804611,
                                        4.26969315441
                                    ],
                                    [
                                        80.57085384091415,
                                        4.26969315441
                                    ],
                                    [
                                        80.57085384091415,
                                        4.7650222632435755
                                    ],
                                    [
                                        80.07397646804611,
                                        4.7650222632435755
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
                                    80.3225,
                                    4.5174
                                ],
                                [
                                    64.01,
                                    28.29
                                ],
                                [
                                    47.07,
                                    52.44
                                ],
                                [
                                    47.2238,
                                    52.3448
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
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T05:35:00.000Z",
            "activity": "f-blue-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "a15",
                    "number": 4
                },
                {
                    "asset": "a65",
                    "number": 3
                },
                {
                    "asset": "a46",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 4
                },
                {
                    "asset": "a194",
                    "number": 2
                },
                {
                    "asset": "a110",
                    "number": 0
                }
            ],
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
                            "name": "f-blue//6.906210489443765//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.6013,
                                    54.7095
                                ],
                                [
                                    61.83,
                                    38.14
                                ],
                                [
                                    66.36,
                                    20.88
                                ],
                                [
                                    66.157,
                                    20.9919
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
                            "endDate": "2022-11-14T03:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668395100000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//13.81242097888753//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        62.10471752387249,
                                        24.62827329098949
                                    ],
                                    [
                                        62.10471752387249,
                                        17.264294624290812
                                    ],
                                    [
                                        70.01413979482957,
                                        17.264294624290812
                                    ],
                                    [
                                        70.01413979482957,
                                        24.62827329098949
                                    ],
                                    [
                                        62.10471752387249,
                                        24.62827329098949
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
                            "startDate": "2022-11-14T03:05:00.000Z",
                            "endDate": "2022-11-14T05:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395100000,
                            "endTime": 1668404100000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//20.718631468331296//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.157,
                                    20.9919
                                ],
                                [
                                    63.79,
                                    32.52
                                ],
                                [
                                    60.45,
                                    43.09
                                ],
                                [
                                    57.4,
                                    54.94
                                ],
                                [
                                    57.6013,
                                    54.7095
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
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T00:55:00.000Z",
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "a55",
                    "number": 3
                },
                {
                    "asset": "a91",
                    "number": 5
                },
                {
                    "asset": "a58",
                    "number": 0
                },
                {
                    "asset": "a52",
                    "number": 3
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
                },
                {
                    "asset": "a110",
                    "number": 0
                }
            ],
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
                                    77.48,
                                    29.2408
                                ],
                                [
                                    52.85,
                                    16.73
                                ],
                                [
                                    27.57,
                                    4.56
                                ],
                                [
                                    27.8224,
                                    4.3088
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
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T06:55:00.000Z",
            "activity": "f-blue-Air-EW Attack",
            "ownAssets": [
                {
                    "asset": "a52",
                    "number": 4
                },
                {
                    "asset": "a73",
                    "number": 1
                },
                {
                    "asset": "a25",
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
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "EW Attack-0",
                            "name": "f-blue//5.573975105719001//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    56.6082,
                                    42.6358
                                ],
                                [
                                    49.86,
                                    37
                                ],
                                [
                                    43.17,
                                    31.42
                                ],
                                [
                                    36.76,
                                    26.12
                                ],
                                [
                                    37.0233,
                                    25.8624
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
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T04:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668398700000,
                            "geomId": "EW Attack-1",
                            "name": "f-blue//11.147950211438001//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        36.09942407521588,
                                        26.684962690831128
                                    ],
                                    [
                                        36.09942407521588,
                                        25.034070920199817
                                    ],
                                    [
                                        37.934360643058355,
                                        25.034070920199817
                                    ],
                                    [
                                        37.934360643058355,
                                        26.684962690831128
                                    ],
                                    [
                                        36.09942407521588,
                                        26.684962690831128
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
                            "startDate": "2022-11-14T04:05:00.000Z",
                            "endDate": "2022-11-14T06:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668398700000,
                            "endTime": 1668408900000,
                            "geomId": "EW Attack-2",
                            "name": "f-blue//16.721925317157//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.0233,
                                    25.8624
                                ],
                                [
                                    56.25,
                                    42.67
                                ],
                                [
                                    56.6082,
                                    42.6358
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
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T00:55:00.000Z",
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "a1",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 0
                }
            ],
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
                            "name": "f-blue//5.747989167804917//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.9327,
                                    49.665
                                ],
                                [
                                    36.29,
                                    26.87
                                ],
                                [
                                    30.1,
                                    4.51
                                ],
                                [
                                    30.2426,
                                    4.5543
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
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T03:35:00.000Z",
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a110",
                    "number": 2
                },
                {
                    "asset": "a200",
                    "number": 3
                },
                {
                    "asset": "a122",
                    "number": 3
                },
                {
                    "asset": "a170",
                    "number": 4
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
            ],
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
                            "name": "f-red//4.815424399195763//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.5758,
                                    22.2655
                                ],
                                [
                                    51.52,
                                    50.59
                                ],
                                [
                                    51.4062,
                                    50.9489
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
                            "endDate": "2022-11-14T01:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387300000,
                            "endTime": 1668388500000,
                            "geomId": "Patrol-1",
                            "name": "f-red//9.630848798391526//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        45.12948833610499,
                                        54.43898555943095
                                    ],
                                    [
                                        45.12948833610499,
                                        47.17051992717058
                                    ],
                                    [
                                        56.7728953848573,
                                        47.17051992717058
                                    ],
                                    [
                                        56.7728953848573,
                                        54.43898555943095
                                    ],
                                    [
                                        45.12948833610499,
                                        54.43898555943095
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
                            "startDate": "2022-11-14T01:15:00.000Z",
                            "endDate": "2022-11-14T03:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388500000,
                            "endTime": 1668396900000,
                            "geomId": "Patrol-2",
                            "name": "f-red//14.446273197587288//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.4062,
                                    50.9489
                                ],
                                [
                                    42.45,
                                    41.67
                                ],
                                [
                                    32.62,
                                    31.51
                                ],
                                [
                                    23.07,
                                    22.64
                                ],
                                [
                                    23.5758,
                                    22.2655
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
            "startDate": "2022-11-14T00:10:00.000Z",
            "endDate": "2022-11-14T04:00:00.000Z",
            "activity": "f-red-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a170",
                    "number": 4
                },
                {
                    "asset": "a147",
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
                    "number": 2
                },
                {
                    "asset": "a10",
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
                            "startDate": "2022-11-14T00:10:00.000Z",
                            "endDate": "2022-11-14T01:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668384600000,
                            "endTime": 1668387600000,
                            "geomId": "Patrol-0",
                            "name": "f-red//2.7762807999097276//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.548,
                                    15.9234
                                ],
                                [
                                    35.15,
                                    24.66
                                ],
                                [
                                    44.04,
                                    32.68
                                ],
                                [
                                    52.2,
                                    40.98
                                ],
                                [
                                    52.26,
                                    41.3594
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
                            "startDate": "2022-11-14T01:00:00.000Z",
                            "endDate": "2022-11-14T01:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387600000,
                            "endTime": 1668390600000,
                            "geomId": "Patrol-1",
                            "name": "f-red//5.552561599819455//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.98933304025635,
                                        43.67954197624441
                                    ],
                                    [
                                        48.98933304025635,
                                        38.95311373183502
                                    ],
                                    [
                                        55.30145200816455,
                                        38.95311373183502
                                    ],
                                    [
                                        55.30145200816455,
                                        43.67954197624441
                                    ],
                                    [
                                        48.98933304025635,
                                        43.67954197624441
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
                            "startDate": "2022-11-14T01:50:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668390600000,
                            "endTime": 1668398400000,
                            "geomId": "Patrol-2",
                            "name": "f-red//8.328842399729183//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.26,
                                    41.3594
                                ],
                                [
                                    46.2,
                                    34.9
                                ],
                                [
                                    38.93,
                                    28.24
                                ],
                                [
                                    32.94,
                                    21.86
                                ],
                                [
                                    26.23,
                                    15.76
                                ],
                                [
                                    26.548,
                                    15.9234
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
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T04:40:00.000Z",
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a134",
                    "number": 3
                },
                {
                    "asset": "a189",
                    "number": 3
                },
                {
                    "asset": "a175",
                    "number": 3
                },
                {
                    "asset": "a188",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 2
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
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "Patrol-0",
                            "name": "f-red//6.6262941003078595//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.7084,
                                    19.865
                                ],
                                [
                                    64.85,
                                    26.64
                                ],
                                [
                                    70.25,
                                    33.68
                                ],
                                [
                                    73.94,
                                    41
                                ],
                                [
                                    74.3969,
                                    40.9348
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
                            "endDate": "2022-11-14T04:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391200000,
                            "endTime": 1668399600000,
                            "geomId": "Patrol-1",
                            "name": "f-red//13.252588200615719//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        70.02001097146812,
                                        44.00277706128616
                                    ],
                                    [
                                        70.02001097146812,
                                        37.71625524462418
                                    ],
                                    [
                                        78.37615775721653,
                                        37.71625524462418
                                    ],
                                    [
                                        78.37615775721653,
                                        44.00277706128616
                                    ],
                                    [
                                        70.02001097146812,
                                        44.00277706128616
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
                            "startDate": "2022-11-14T04:20:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668399600000,
                            "endTime": 1668400800000,
                            "geomId": "Patrol-2",
                            "name": "f-red//19.87888230092358//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.3969,
                                    40.9348
                                ],
                                [
                                    67.33,
                                    30.59
                                ],
                                [
                                    60.71,
                                    19.68
                                ],
                                [
                                    60.7084,
                                    19.865
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
            "startDate": "2022-11-14T01:20:00.000Z",
            "endDate": "2022-11-14T05:00:00.000Z",
            "activity": "f-red-Land-EW Attack",
            "ownAssets": [
                {
                    "asset": "a188",
                    "number": 5
                },
                {
                    "asset": "a131",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 3
                }
            ],
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
                                    60.7084,
                                    19.865
                                ],
                                [
                                    55.15,
                                    24.15
                                ],
                                [
                                    48.79,
                                    28.63
                                ],
                                [
                                    42.71,
                                    32.39
                                ],
                                [
                                    42.5511,
                                    32.8288
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
                                        39.14130808941491,
                                        35.557436663095096
                                    ],
                                    [
                                        39.14130808941491,
                                        30.013300621311227
                                    ],
                                    [
                                        45.75442141371015,
                                        30.013300621311227
                                    ],
                                    [
                                        45.75442141371015,
                                        35.557436663095096
                                    ],
                                    [
                                        39.14130808941491,
                                        35.557436663095096
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
                                    42.5511,
                                    32.8288
                                ],
                                [
                                    51.73,
                                    26.1
                                ],
                                [
                                    60.4,
                                    19.87
                                ],
                                [
                                    60.7084,
                                    19.865
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
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T02:10:00.000Z",
            "activity": "f-red-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "a114",
                    "number": 3,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a188",
                    "number": 4,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a193",
                    "number": 3,
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
                    "number": 5,
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
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-28T19:33:29.449Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-126",
            "title": "Order item 126",
            "startDate": "2022-11-14T02:40:00.000Z",
            "endDate": "2022-11-14T05:00:00.000Z",
            "activity": "f-red-Maritime-Mine Clearance",
            "ownAssets": [
                {
                    "asset": "a192",
                    "number": 0
                },
                {
                    "asset": "a188",
                    "number": 1
                },
                {
                    "asset": "a114",
                    "number": 4
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
                    "number": 2
                }
            ],
            "location": [
                {
                    "uniqid": "Mine Clearance-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Route out",
                            "startDate": "2022-11-14T02:40:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668393600000,
                            "endTime": 1668396600000,
                            "geomId": "Mine Clearance-0",
                            "name": "f-red//3.250063013867475//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    80.3225,
                                    4.5174
                                ],
                                [
                                    35.91,
                                    40.04
                                ],
                                [
                                    35.711,
                                    39.6126
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T03:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396600000,
                            "endTime": 1668397800000,
                            "geomId": "Mine Clearance-1",
                            "name": "f-red//6.50012602773495//Mine Clearance Area Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.82062177093161,
                                        43.084912728958926
                                    ],
                                    [
                                        30.82062177093161,
                                        35.95520041393587
                                    ],
                                    [
                                        40.12229774718568,
                                        35.95520041393587
                                    ],
                                    [
                                        40.12229774718568,
                                        43.084912728958926
                                    ],
                                    [
                                        30.82062177093161,
                                        43.084912728958926
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
                            "startDate": "2022-11-14T03:50:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668397800000,
                            "endTime": 1668402000000,
                            "geomId": "Mine Clearance-2",
                            "name": "f-red//9.750189041602425//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    35.711,
                                    39.6126
                                ],
                                [
                                    80.27,
                                    4.3
                                ],
                                [
                                    80.3225,
                                    4.5174
                                ]
                            ]
                        }
                    }
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
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a165",
                    "number": 2
                },
                {
                    "asset": "a146",
                    "number": 5
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
            ],
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
                                    75.65,
                                    10.9995
                                ],
                                [
                                    71.97,
                                    28.98
                                ],
                                [
                                    69.63,
                                    47.3
                                ],
                                [
                                    69.2405,
                                    47.6602
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
                                        63.18054532161326,
                                        51.29680708056765
                                    ],
                                    [
                                        63.18054532161326,
                                        43.74701760331384
                                    ],
                                    [
                                        74.48334118434903,
                                        43.74701760331384
                                    ],
                                    [
                                        74.48334118434903,
                                        51.29680708056765
                                    ],
                                    [
                                        63.18054532161326,
                                        51.29680708056765
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
                                    69.2405,
                                    47.6602
                                ],
                                [
                                    71.15,
                                    38.23
                                ],
                                [
                                    71.96,
                                    29.7
                                ],
                                [
                                    74.06,
                                    20.46
                                ],
                                [
                                    75.44,
                                    10.5
                                ],
                                [
                                    75.65,
                                    10.9995
                                ]
                            ]
                        }
                    }
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
            "messageType": "Air--TST",
            "timestamp": "2022-09-26T03:45:20.069Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-132",
            "title": "Order item 132",
            "startDate": "2022-11-14T03:10:00.000Z",
            "endDate": "2022-11-14T05:20:00.000Z",
            "activity": "f-blue-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a91",
                    "number": 4
                },
                {
                    "asset": "a57",
                    "number": 5
                },
                {
                    "asset": "a51",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
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
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395400000,
                            "endTime": 1668398400000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-blue//5.030994158471003//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.008,
                                    46.8903
                                ],
                                [
                                    70.63,
                                    4.96
                                ],
                                [
                                    70.7928,
                                    5.3657
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
                            "startDate": "2022-11-14T04:00:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668398400000,
                            "endTime": 1668400800000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-blue//10.061988316942006//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        70.2735484603252,
                                        5.88199876519739
                                    ],
                                    [
                                        70.2735484603252,
                                        4.848963857501601
                                    ],
                                    [
                                        71.31117295346122,
                                        4.848963857501601
                                    ],
                                    [
                                        71.31117295346122,
                                        5.88199876519739
                                    ],
                                    [
                                        70.2735484603252,
                                        5.88199876519739
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
                            "startDate": "2022-11-14T04:40:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668400800000,
                            "endTime": 1668403200000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-blue//15.09298247541301//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    70.7928,
                                    5.3657
                                ],
                                [
                                    66.68,
                                    15.89
                                ],
                                [
                                    62.5,
                                    26.35
                                ],
                                [
                                    58.6,
                                    36.1
                                ],
                                [
                                    54.99,
                                    47.13
                                ],
                                [
                                    55.008,
                                    46.8903
                                ]
                            ]
                        }
                    }
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-23T08:27:16.565Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-135",
            "title": "Order item 135",
            "startDate": "2022-11-14T03:10:00.000Z",
            "endDate": "2022-11-14T07:30:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a173",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 2
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
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395400000,
                            "endTime": 1668398400000,
                            "geomId": "Patrol-0",
                            "name": "f-red//4.261591484420933//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.0233,
                                    25.8624
                                ],
                                [
                                    50.83,
                                    33.45
                                ],
                                [
                                    63.69,
                                    40.1
                                ],
                                [
                                    77.83,
                                    47.03
                                ],
                                [
                                    77.5164,
                                    47.3372
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
                            "startDate": "2022-11-14T04:00:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668398400000,
                            "endTime": 1668403200000,
                            "geomId": "Patrol-1",
                            "name": "f-red//8.523182968841866//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        76.28713207961057,
                                        48.150828244927084
                                    ],
                                    [
                                        76.28713207961057,
                                        46.51082968661398
                                    ],
                                    [
                                        78.70807181332273,
                                        46.51082968661398
                                    ],
                                    [
                                        78.70807181332273,
                                        48.150828244927084
                                    ],
                                    [
                                        76.28713207961057,
                                        48.150828244927084
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
                            "endDate": "2022-11-14T07:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668403200000,
                            "endTime": 1668411000000,
                            "geomId": "Patrol-2",
                            "name": "f-red//12.784774453262798//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.5164,
                                    47.3372
                                ],
                                [
                                    57.66,
                                    36.32
                                ],
                                [
                                    37.17,
                                    25.67
                                ],
                                [
                                    37.0233,
                                    25.8624
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_135",
        "_rev": "2"
    }]