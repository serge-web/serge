
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
                                26.548,
                                15.9234
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-SAM MEZ",
            "ownAssets": [
                {
                    "asset": "a19",
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
            ],
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a194",
                    "number": 4
                },
                {
                    "asset": "a176",
                    "number": 2
                },
                {
                    "asset": "a187",
                    "number": 2
                },
                {
                    "asset": "a128",
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
                    "number": 2
                },
                {
                    "asset": "a10",
                    "number": 3
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
                    "number": 0
                },
                {
                    "asset": "a15",
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
            ],
            "activity": "f-blue-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a15",
                    "number": 3
                },
                {
                    "asset": "a65",
                    "number": 0
                },
                {
                    "asset": "a46",
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
                    "number": 3
                },
                {
                    "asset": "a110",
                    "number": 5
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
            ],
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "a55",
                    "number": 5
                },
                {
                    "asset": "a91",
                    "number": 0
                },
                {
                    "asset": "a58",
                    "number": 4
                },
                {
                    "asset": "a52",
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
                    "number": 0
                },
                {
                    "asset": "a110",
                    "number": 3
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
            ],
            "activity": "f-blue-Air-Defensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a52",
                    "number": 3
                },
                {
                    "asset": "a73",
                    "number": 2
                },
                {
                    "asset": "a25",
                    "number": 0
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
                                        26.7474495850092,
                                        8.006940164472654
                                    ],
                                    [
                                        26.7474495850092,
                                        1.084950198600952
                                    ],
                                    [
                                        33.70425655659431,
                                        1.084950198600952
                                    ],
                                    [
                                        33.70425655659431,
                                        8.006940164472654
                                    ],
                                    [
                                        26.7474495850092,
                                        8.006940164472654
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
                                    30.2426,
                                    4.5543
                                ],
                                [
                                    36.49,
                                    26.75
                                ],
                                [
                                    42.15,
                                    49.35
                                ],
                                [
                                    41.9327,
                                    49.665
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
                                        46.81708657917372,
                                        53.58638727276792
                                    ],
                                    [
                                        46.81708657917372,
                                        48.151240603253015
                                    ],
                                    [
                                        55.488442556111,
                                        48.151240603253015
                                    ],
                                    [
                                        55.488442556111,
                                        53.58638727276792
                                    ],
                                    [
                                        46.81708657917372,
                                        53.58638727276792
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
                                    51.4062,
                                    50.9489
                                ],
                                [
                                    37.09,
                                    36.22
                                ],
                                [
                                    23.09,
                                    21.81
                                ],
                                [
                                    23.5758,
                                    22.2655
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
                    "number": 0
                },
                {
                    "asset": "a200",
                    "number": 3
                },
                {
                    "asset": "a122",
                    "number": 0
                },
                {
                    "asset": "a170",
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
                    "number": 4
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
                                        46.58545548638611,
                                        45.2220437050271
                                    ],
                                    [
                                        46.58545548638611,
                                        37.24990688987386
                                    ],
                                    [
                                        57.27946184964109,
                                        37.24990688987386
                                    ],
                                    [
                                        57.27946184964109,
                                        45.2220437050271
                                    ],
                                    [
                                        46.58545548638611,
                                        45.2220437050271
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
                                    52.26,
                                    41.3594
                                ],
                                [
                                    38.99,
                                    29.01
                                ],
                                [
                                    26.17,
                                    16.11
                                ],
                                [
                                    26.548,
                                    15.9234
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
                    "number": 3
                },
                {
                    "asset": "a10",
                    "number": 1
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
                                    60.6398,
                                    10.3372
                                ],
                                [
                                    51.01,
                                    22.69
                                ],
                                [
                                    41.55,
                                    34.22
                                ],
                                [
                                    31.37,
                                    46.03
                                ],
                                [
                                    31.4094,
                                    46.2154
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
                                        29.947898911025774,
                                        47.199216600707004
                                    ],
                                    [
                                        29.947898911025774,
                                        45.21361959294809
                                    ],
                                    [
                                        32.81899539675576,
                                        45.21361959294809
                                    ],
                                    [
                                        32.81899539675576,
                                        47.199216600707004
                                    ],
                                    [
                                        29.947898911025774,
                                        47.199216600707004
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
                                        25.793032300360622,
                                        49.714865886095446
                                    ],
                                    [
                                        25.793032300360622,
                                        42.47456480261045
                                    ],
                                    [
                                        36.33111896573476,
                                        42.47456480261045
                                    ],
                                    [
                                        36.33111896573476,
                                        49.714865886095446
                                    ],
                                    [
                                        25.793032300360622,
                                        49.714865886095446
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
                                    31.4094,
                                    46.2154
                                ],
                                [
                                    45.96,
                                    28.36
                                ],
                                [
                                    60.92,
                                    9.93
                                ],
                                [
                                    60.6398,
                                    10.3372
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
                    "number": 2
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
                                    58.4246,
                                    43.6888
                                ],
                                [
                                    53.13,
                                    35.4
                                ],
                                [
                                    48.69,
                                    25.96
                                ],
                                [
                                    43.53,
                                    17.8
                                ],
                                [
                                    38.66,
                                    8.93
                                ],
                                [
                                    38.2954,
                                    8.9043
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
                                        35.39524402014364,
                                        11.732677911868805
                                    ],
                                    [
                                        35.39524402014364,
                                        6.053823889277354
                                    ],
                                    [
                                        41.15084999982204,
                                        6.053823889277354
                                    ],
                                    [
                                        41.15084999982204,
                                        11.732677911868805
                                    ],
                                    [
                                        35.39524402014364,
                                        11.732677911868805
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
                                    38.2954,
                                    8.9043
                                ],
                                [
                                    44.78,
                                    20.05
                                ],
                                [
                                    51.53,
                                    32.46
                                ],
                                [
                                    58.56,
                                    44.15
                                ],
                                [
                                    58.4246,
                                    43.6888
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
                    "number": 5
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
                                    81.5244,
                                    24.842
                                ],
                                [
                                    75.74,
                                    26.14
                                ],
                                [
                                    69.17,
                                    27.66
                                ],
                                [
                                    62.89,
                                    28.47
                                ],
                                [
                                    62.7401,
                                    28.9586
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
                                        62.136030774784466,
                                        29.483098281395904
                                    ],
                                    [
                                        62.136030774784466,
                                        28.43143093402306
                                    ],
                                    [
                                        63.338064610608896,
                                        28.43143093402306
                                    ],
                                    [
                                        63.338064610608896,
                                        29.483098281395904
                                    ],
                                    [
                                        62.136030774784466,
                                        29.483098281395904
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
                                    62.7401,
                                    28.9586
                                ],
                                [
                                    67.04,
                                    27.43
                                ],
                                [
                                    72.22,
                                    26.78
                                ],
                                [
                                    76.67,
                                    25.4
                                ],
                                [
                                    81.41,
                                    25.31
                                ],
                                [
                                    81.5244,
                                    24.842
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
                                77.48,
                                29.2408
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
                    "number": 2
                },
                {
                    "asset": "a126",
                    "number": 1
                },
                {
                    "asset": "a197",
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
                    "number": 5
                },
                {
                    "asset": "a10",
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
            ],
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a97",
                    "number": 2
                },
                {
                    "asset": "a99",
                    "number": 1
                },
                {
                    "asset": "a31",
                    "number": 2
                },
                {
                    "asset": "a88",
                    "number": 4
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
            ],
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a188",
                    "number": 1
                },
                {
                    "asset": "a175",
                    "number": 4
                },
                {
                    "asset": "a189",
                    "number": 5
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
                    "number": 2,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 4,
                    "missileType": "SRBM"
                },
                {
                    "asset": "a194",
                    "number": 4,
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
            ],
            "activity": "f-red-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a151",
                    "number": 3
                },
                {
                    "asset": "a157",
                    "number": 2
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
                                    38.5576,
                                    37.9583
                                ],
                                [
                                    53.26,
                                    33.66
                                ],
                                [
                                    67.15,
                                    29.56
                                ],
                                [
                                    81.34,
                                    24.74
                                ],
                                [
                                    81.5244,
                                    24.842
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
                    "number": 2
                },
                {
                    "asset": "a46",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 5
                },
                {
                    "asset": "a194",
                    "number": 3
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
                                        45.37352075486259,
                                        50.385124735563835
                                    ],
                                    [
                                        45.37352075486259,
                                        43.54568896335724
                                    ],
                                    [
                                        55.482964721723945,
                                        43.54568896335724
                                    ],
                                    [
                                        55.482964721723945,
                                        50.385124735563835
                                    ],
                                    [
                                        45.37352075486259,
                                        50.385124735563835
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
                                    81.2415,
                                    48.5674
                                ],
                                [
                                    75.14,
                                    42.37
                                ],
                                [
                                    68.95,
                                    36.06
                                ],
                                [
                                    63.03,
                                    29.04
                                ],
                                [
                                    57.4,
                                    23.31
                                ],
                                [
                                    57.4198,
                                    22.9856
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
                                        55.955716546746956,
                                        24.313149299505834
                                    ],
                                    [
                                        55.955716546746956,
                                        21.644864483399765
                                    ],
                                    [
                                        58.85524252395678,
                                        21.644864483399765
                                    ],
                                    [
                                        58.85524252395678,
                                        24.313149299505834
                                    ],
                                    [
                                        55.955716546746956,
                                        24.313149299505834
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
                                    57.4198,
                                    22.9856
                                ],
                                [
                                    62.91,
                                    29.09
                                ],
                                [
                                    69.21,
                                    36
                                ],
                                [
                                    74.79,
                                    42.19
                                ],
                                [
                                    81.65,
                                    48.66
                                ],
                                [
                                    81.2415,
                                    48.5674
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
                    "number": 4
                },
                {
                    "asset": "a87",
                    "number": 4
                },
                {
                    "asset": "a76",
                    "number": 0
                },
                {
                    "asset": "a93",
                    "number": 0
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
                                    36.4626,
                                    27.3767
                                ],
                                [
                                    49.22,
                                    28.36
                                ],
                                [
                                    62.27,
                                    28.62
                                ],
                                [
                                    74.6,
                                    29.17
                                ],
                                [
                                    74.6604,
                                    29.5655
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
                                        72.05563845311269,
                                        31.755271929848337
                                    ],
                                    [
                                        72.05563845311269,
                                        27.32708399637606
                                    ],
                                    [
                                        77.1533916213212,
                                        27.32708399637606
                                    ],
                                    [
                                        77.1533916213212,
                                        31.755271929848337
                                    ],
                                    [
                                        72.05563845311269,
                                        31.755271929848337
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
                                    74.6604,
                                    29.5655
                                ],
                                [
                                    55.4,
                                    28.65
                                ],
                                [
                                    36.56,
                                    27.15
                                ],
                                [
                                    36.4626,
                                    27.3767
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
                    "number": 5
                },
                {
                    "asset": "a141",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 0
                },
                {
                    "asset": "a94",
                    "number": 5
                },
                {
                    "asset": "a10",
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
                                    66.157,
                                    20.9919
                                ],
                                [
                                    62.75,
                                    29.26
                                ],
                                [
                                    59.33,
                                    37.52
                                ],
                                [
                                    56.2,
                                    46.07
                                ],
                                [
                                    52.35,
                                    53.89
                                ],
                                [
                                    52.8239,
                                    54.2985
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
                                        52.04332781530902,
                                        54.746540408326894
                                    ],
                                    [
                                        52.04332781530902,
                                        53.84552900331871
                                    ],
                                    [
                                        53.58757572699923,
                                        53.84552900331871
                                    ],
                                    [
                                        53.58757572699923,
                                        54.746540408326894
                                    ],
                                    [
                                        52.04332781530902,
                                        54.746540408326894
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
                                    52.8239,
                                    54.2985
                                ],
                                [
                                    66.32,
                                    21.22
                                ],
                                [
                                    66.157,
                                    20.9919
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
                    "number": 3
                },
                {
                    "asset": "a149",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
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
                                    48.7018,
                                    47.4351
                                ],
                                [
                                    41.95,
                                    32.09
                                ],
                                [
                                    35.34,
                                    17.89
                                ],
                                [
                                    29.02,
                                    2.97
                                ],
                                [
                                    28.5674,
                                    2.5894
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
                                        26.10264773195907,
                                        5.042220677062133
                                    ],
                                    [
                                        26.10264773195907,
                                        0.13181326584366546
                                    ],
                                    [
                                        31.022614825716804,
                                        0.13181326584366546
                                    ],
                                    [
                                        31.022614825716804,
                                        5.042220677062133
                                    ],
                                    [
                                        26.10264773195907,
                                        5.042220677062133
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
                                        26.01047749703443,
                                        5.133490403359802
                                    ],
                                    [
                                        26.01047749703443,
                                        0.0401812183456608
                                    ],
                                    [
                                        31.114060374307645,
                                        0.0401812183456608
                                    ],
                                    [
                                        31.114060374307645,
                                        5.133490403359802
                                    ],
                                    [
                                        26.01047749703443,
                                        5.133490403359802
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
                                    28.5674,
                                    2.5894
                                ],
                                [
                                    35.29,
                                    17.23
                                ],
                                [
                                    42.09,
                                    32.95
                                ],
                                [
                                    49.17,
                                    46.94
                                ],
                                [
                                    48.7018,
                                    47.4351
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
                    "number": 2
                },
                {
                    "asset": "a194",
                    "number": 1
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
                                    47.2238,
                                    52.3448
                                ],
                                [
                                    49.14,
                                    13.49
                                ],
                                [
                                    48.861,
                                    13.4781
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
                                        46.4150880653245,
                                        15.819604048002837
                                    ],
                                    [
                                        46.4150880653245,
                                        11.113393831559742
                                    ],
                                    [
                                        51.259217113406756,
                                        11.113393831559742
                                    ],
                                    [
                                        51.259217113406756,
                                        15.819604048002837
                                    ],
                                    [
                                        46.4150880653245,
                                        15.819604048002837
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
                                    48.861,
                                    13.4781
                                ],
                                [
                                    48.78,
                                    22.97
                                ],
                                [
                                    47.57,
                                    33.33
                                ],
                                [
                                    47.65,
                                    42.98
                                ],
                                [
                                    47.01,
                                    51.91
                                ],
                                [
                                    47.2238,
                                    52.3448
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
                    "number": 0
                },
                {
                    "asset": "a30",
                    "number": 4
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
                                    57.0232,
                                    17.7834
                                ],
                                [
                                    64.07,
                                    29.57
                                ],
                                [
                                    70.33,
                                    41.57
                                ],
                                [
                                    76.88,
                                    52.86
                                ],
                                [
                                    77.2973,
                                    52.77
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
                                        72.48026723132197,
                                        55.41081558519872
                                    ],
                                    [
                                        72.48026723132197,
                                        49.956835505735626
                                    ],
                                    [
                                        81.5466150440789,
                                        49.956835505735626
                                    ],
                                    [
                                        81.5466150440789,
                                        55.41081558519872
                                    ],
                                    [
                                        72.48026723132197,
                                        55.41081558519872
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
                                    77.2973,
                                    52.77
                                ],
                                [
                                    56.9,
                                    17.44
                                ],
                                [
                                    57.0232,
                                    17.7834
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
                    "number": 3
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
                    "number": 2
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
                    "number": 4,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 4,
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
            ],
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
                    "number": 5
                },
                {
                    "asset": "a10",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_144",
        "_rev": "2"
    }]