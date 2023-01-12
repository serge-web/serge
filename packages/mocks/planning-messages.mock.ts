
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
            "activity": "f-blue-Maritime-SAM MEZ",
            "ownAssets": [
                {
                    "asset": "a19",
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
                    "number": 4
                }
            ],
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
                                26.548,
                                15.9234
                            ]
                        }
                    }
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
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
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
                    "number": 0
                },
                {
                    "asset": "a128",
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
                    "number": 3
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
                    "number": 2
                },
                {
                    "asset": "a93",
                    "number": 0
                },
                {
                    "asset": "a88",
                    "number": 4
                },
                {
                    "asset": "a15",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 3
                },
                {
                    "asset": "a194",
                    "number": 4
                },
                {
                    "asset": "a110",
                    "number": 1
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
            "messageType": "Air--Patrol",
            "timestamp": "2022-09-26T20:39:53.339Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-15",
            "title": "Order item 15",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T05:35:00.000Z",
            "activity": "f-blue-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a15",
                    "number": 1
                },
                {
                    "asset": "a65",
                    "number": 0
                },
                {
                    "asset": "a46",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 3
                },
                {
                    "asset": "a194",
                    "number": 3
                },
                {
                    "asset": "a110",
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
                    "number": 1
                },
                {
                    "asset": "a91",
                    "number": 1
                },
                {
                    "asset": "a58",
                    "number": 1
                },
                {
                    "asset": "a52",
                    "number": 1
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-27T12:34:45.461Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-21",
            "title": "Order item 21",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T06:55:00.000Z",
            "activity": "f-blue-Air-Defensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a52",
                    "number": 0
                },
                {
                    "asset": "a73",
                    "number": 3
                },
                {
                    "asset": "a25",
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
                    "number": 4
                }
            ],
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-29T17:34:45.567Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-45",
            "title": "Order item 45",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T04:00:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a97",
                    "number": 4
                },
                {
                    "asset": "a99",
                    "number": 5
                },
                {
                    "asset": "a31",
                    "number": 0
                },
                {
                    "asset": "a88",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
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
                                    64.1859,
                                    52.6566
                                ],
                                [
                                    25.57,
                                    13.81
                                ],
                                [
                                    25.5344,
                                    14.1615
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
                                        24.568374891117877,
                                        15.092277814635997
                                    ],
                                    [
                                        24.568374891117877,
                                        13.226890123042923
                                    ],
                                    [
                                        26.492521394979534,
                                        13.226890123042923
                                    ],
                                    [
                                        26.492521394979534,
                                        15.092277814635997
                                    ],
                                    [
                                        24.568374891117877,
                                        15.092277814635997
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
                                    25.5344,
                                    14.1615
                                ],
                                [
                                    45.03,
                                    33.38
                                ],
                                [
                                    63.88,
                                    52.96
                                ],
                                [
                                    64.1859,
                                    52.6566
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
            "messageType": "Air--Patrol",
            "timestamp": "2022-09-27T16:00:19.138Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-48",
            "title": "Order item 48",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T07:00:00.000Z",
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a188",
                    "number": 0
                },
                {
                    "asset": "a175",
                    "number": 2
                },
                {
                    "asset": "a189",
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
                                    30.0496,
                                    14.2664
                                ],
                                [
                                    38.02,
                                    22.3
                                ],
                                [
                                    45.85,
                                    31.2
                                ],
                                [
                                    52.97,
                                    39.37
                                ],
                                [
                                    60.37,
                                    46.84
                                ],
                                [
                                    60.6691,
                                    47.1552
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
                                        58.50280440697678,
                                        48.56862169977971
                                    ],
                                    [
                                        58.50280440697678,
                                        45.70307594313583
                                    ],
                                    [
                                        62.72164760393016,
                                        45.70307594313583
                                    ],
                                    [
                                        62.72164760393016,
                                        48.56862169977971
                                    ],
                                    [
                                        58.50280440697678,
                                        48.56862169977971
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
                                    60.6691,
                                    47.1552
                                ],
                                [
                                    45.12,
                                    30.74
                                ],
                                [
                                    30.1,
                                    13.86
                                ],
                                [
                                    30.0496,
                                    14.2664
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
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T06:30:00.000Z",
            "activity": "f-blue-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a34",
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
                }
            ],
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
                                    69.2405,
                                    47.6602
                                ],
                                [
                                    63.01,
                                    37.31
                                ],
                                [
                                    57.62,
                                    25.81
                                ],
                                [
                                    51.51,
                                    15.59
                                ],
                                [
                                    44.69,
                                    4.66
                                ],
                                [
                                    45.0498,
                                    4.8978
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
                                        42.374190096781426,
                                        7.54493595196814
                                    ],
                                    [
                                        42.374190096781426,
                                        2.240121104629899
                                    ],
                                    [
                                        47.7042583521296,
                                        2.240121104629899
                                    ],
                                    [
                                        47.7042583521296,
                                        7.54493595196814
                                    ],
                                    [
                                        42.374190096781426,
                                        7.54493595196814
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
                                        43.09983313171981,
                                        6.83110467321256
                                    ],
                                    [
                                        43.09983313171981,
                                        2.9588830763898932
                                    ],
                                    [
                                        46.98850452216003,
                                        2.9588830763898932
                                    ],
                                    [
                                        46.98850452216003,
                                        6.83110467321256
                                    ],
                                    [
                                        43.09983313171981,
                                        6.83110467321256
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
                                    45.0498,
                                    4.8978
                                ],
                                [
                                    57.56,
                                    25.94
                                ],
                                [
                                    69.46,
                                    47.36
                                ],
                                [
                                    69.2405,
                                    47.6602
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-28T22:03:28.651Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-54",
            "title": "Order item 54",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T04:40:00.000Z",
            "activity": "f-red-Air-Offensive Counter Air",
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
                    "number": 1
                }
            ],
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
            "activity": "f-blue-Land-Strike",
            "ownAssets": [
                {
                    "asset": "a1",
                    "number": 3,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 0,
                    "missileType": "SRBM"
                },
                {
                    "asset": "a194",
                    "number": 0,
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
            "activity": "f-red-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a151",
                    "number": 0
                },
                {
                    "asset": "a157",
                    "number": 1
                },
                {
                    "asset": "a191",
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
                }
            ],
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
                                    23.5758,
                                    22.2655
                                ],
                                [
                                    68.29,
                                    39.62
                                ],
                                [
                                    68.1565,
                                    39.3368
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
                                        64.55524940856341,
                                        41.960535422754155
                                    ],
                                    [
                                        64.55524940856341,
                                        36.6102291636884
                                    ],
                                    [
                                        71.49227015004286,
                                        36.6102291636884
                                    ],
                                    [
                                        71.49227015004286,
                                        41.960535422754155
                                    ],
                                    [
                                        64.55524940856341,
                                        41.960535422754155
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
                                    68.1565,
                                    39.3368
                                ],
                                [
                                    53.15,
                                    33.45
                                ],
                                [
                                    38.24,
                                    27.66
                                ],
                                [
                                    23.62,
                                    22.15
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
            "activity": "f-blue-Land-Strike",
            "ownAssets": [
                {
                    "asset": "a99",
                    "number": 5,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 3,
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
            "activity": "f-red-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a147",
                    "number": 1
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
                    "number": 3
                },
                {
                    "asset": "a10",
                    "number": 3
                }
            ],
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
                                    60.4695,
                                    20.7495
                                ],
                                [
                                    44.49,
                                    33.46
                                ],
                                [
                                    28.89,
                                    45.54
                                ],
                                [
                                    28.5787,
                                    45.8823
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
                                        26.781880675641087,
                                        47.091741619459185
                                    ],
                                    [
                                        26.781880675641087,
                                        44.645905855022924
                                    ],
                                    [
                                        30.298121516075746,
                                        44.645905855022924
                                    ],
                                    [
                                        30.298121516075746,
                                        47.091741619459185
                                    ],
                                    [
                                        26.781880675641087,
                                        47.091741619459185
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
                                    28.5787,
                                    45.8823
                                ],
                                [
                                    44.42,
                                    33.35
                                ],
                                [
                                    60.72,
                                    20.27
                                ],
                                [
                                    60.4695,
                                    20.7495
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_144",
        "_rev": "2"
    }]