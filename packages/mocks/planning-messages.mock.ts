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
                    "asset": "a3019",
                    "number": 0,
                    "missileType": "Jet OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3113",
                    "number": 4,
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
                    "asset": "a3194",
                    "number": 4
                },
                {
                    "asset": "a3176",
                    "number": 2
                },
                {
                    "asset": "a3187",
                    "number": 4
                },
                {
                    "asset": "a3128",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3013",
                    "number": 2
                },
                {
                    "asset": "a3094",
                    "number": 4
                },
                {
                    "asset": "a3010",
                    "number": 0
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
                                    51.2623,
                                    26.3923
                                ],
                                [
                                    47.89,
                                    32.83
                                ],
                                [
                                    43.43,
                                    40.17
                                ],
                                [
                                    40.25,
                                    46.79
                                ],
                                [
                                    36.35,
                                    52.7
                                ],
                                [
                                    36.5667,
                                    53.2024
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
                                        30.958122070195778,
                                        56.19687077030998
                                    ],
                                    [
                                        30.958122070195778,
                                        49.97974843886867
                                    ],
                                    [
                                        41.416998781572474,
                                        49.97974843886867
                                    ],
                                    [
                                        41.416998781572474,
                                        56.19687077030998
                                    ],
                                    [
                                        30.958122070195778,
                                        56.19687077030998
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
                                        31.560682782991034,
                                        55.907747972597626
                                    ],
                                    [
                                        31.560682782991034,
                                        50.31266995572139
                                    ],
                                    [
                                        40.959428994089066,
                                        50.31266995572139
                                    ],
                                    [
                                        40.959428994089066,
                                        55.907747972597626
                                    ],
                                    [
                                        31.560682782991034,
                                        55.907747972597626
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
                                    36.5667,
                                    53.2024
                                ],
                                [
                                    41.55,
                                    43.91
                                ],
                                [
                                    46.59,
                                    35.68
                                ],
                                [
                                    50.92,
                                    26.73
                                ],
                                [
                                    51.2623,
                                    26.3923
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
                    "asset": "a3028",
                    "number": 3
                },
                {
                    "asset": "a3093",
                    "number": 4
                },
                {
                    "asset": "a3088",
                    "number": 5
                },
                {
                    "asset": "a3015",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3113",
                    "number": 0
                },
                {
                    "asset": "a3194",
                    "number": 4
                },
                {
                    "asset": "a3110",
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
                                    45.3158,
                                    34.0096
                                ],
                                [
                                    47.06,
                                    25.59
                                ],
                                [
                                    47.89,
                                    16.26
                                ],
                                [
                                    49.01,
                                    8.21
                                ],
                                [
                                    49.51423920879168,
                                    7.767410098010713
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
                                        49.26413147107889,
                                        8.015001609457611
                                    ],
                                    [
                                        49.26413147107889,
                                        7.5196725578384624
                                    ],
                                    [
                                        49.76405218603009,
                                        7.5196725578384624
                                    ],
                                    [
                                        49.76405218603009,
                                        8.015001609457611
                                    ],
                                    [
                                        49.26413147107889,
                                        8.015001609457611
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
                                    49.51423920879168,
                                    7.767410098010713
                                ],
                                [
                                    47.65,
                                    20.74
                                ],
                                [
                                    45.16,
                                    34.1
                                ],
                                [
                                    45.3158,
                                    34.0096
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
                    "asset": "a3015",
                    "number": 0
                },
                {
                    "asset": "a3065",
                    "number": 1
                },
                {
                    "asset": "a3046",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3113",
                    "number": 4
                },
                {
                    "asset": "a3194",
                    "number": 4
                },
                {
                    "asset": "a3110",
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
                                    52.52526875193154,
                                    52.087909779103
                                ],
                                [
                                    66.42,
                                    34.84
                                ],
                                [
                                    80.61,
                                    16.89
                                ],
                                [
                                    80.4032,
                                    17.0051
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
                                        76.46679080502804,
                                        20.65114769417416
                                    ],
                                    [
                                        76.46679080502804,
                                        13.28634820906481
                                    ],
                                    [
                                        84.18775488572206,
                                        13.28634820906481
                                    ],
                                    [
                                        84.18775488572206,
                                        20.65114769417416
                                    ],
                                    [
                                        76.46679080502804,
                                        20.65114769417416
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
                                    80.4032,
                                    17.0051
                                ],
                                [
                                    71.59,
                                    28.99
                                ],
                                [
                                    61.82,
                                    40.01
                                ],
                                [
                                    52.33,
                                    52.32
                                ],
                                [
                                    52.52526875193154,
                                    52.087909779103
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
                    "asset": "a3055",
                    "number": 1
                },
                {
                    "asset": "a3091",
                    "number": 4
                },
                {
                    "asset": "a3058",
                    "number": 4
                },
                {
                    "asset": "a3052",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3113",
                    "number": 4
                },
                {
                    "asset": "a3194",
                    "number": 1
                },
                {
                    "asset": "a3110",
                    "number": 1
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
                                    52.82559190318179,
                                    51.78522617852784
                                ],
                                [
                                    64.05,
                                    38.56
                                ],
                                [
                                    74.62,
                                    25.68
                                ],
                                [
                                    74.8742,
                                    25.423
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
                    "asset": "a3052",
                    "number": 3
                },
                {
                    "asset": "a3073",
                    "number": 4
                },
                {
                    "asset": "a3025",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3113",
                    "number": 1
                },
                {
                    "asset": "a3194",
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
                                    83.2987,
                                    42.9044
                                ],
                                [
                                    64.96,
                                    30.09
                                ],
                                [
                                    46.68,
                                    17.33
                                ],
                                [
                                    28.69,
                                    4.86
                                ],
                                [
                                    28.9548,
                                    4.5981
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
                                        28.12562229113422,
                                        5.423087147444046
                                    ],
                                    [
                                        28.12562229113422,
                                        3.77215621291935
                                    ],
                                    [
                                        29.782058353447045,
                                        3.77215621291935
                                    ],
                                    [
                                        29.782058353447045,
                                        5.423087147444046
                                    ],
                                    [
                                        28.12562229113422,
                                        5.423087147444046
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
                                    28.9548,
                                    4.5981
                                ],
                                [
                                    82.94,
                                    42.94
                                ],
                                [
                                    83.2987,
                                    42.9044
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
                    "asset": "a3001",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3113",
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
                                    82.8088,
                                    51.6045
                                ],
                                [
                                    81.25,
                                    38.34
                                ],
                                [
                                    79.12,
                                    25.53
                                ],
                                [
                                    79.268,
                                    25.5708
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
                    "asset": "a3110",
                    "number": 5
                },
                {
                    "asset": "a3200",
                    "number": 2
                },
                {
                    "asset": "a3122",
                    "number": 2
                },
                {
                    "asset": "a3170",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3013",
                    "number": 2
                },
                {
                    "asset": "a3094",
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
                                    59.201,
                                    21.4963
                                ],
                                [
                                    52.32,
                                    48.08
                                ],
                                [
                                    52.21168730973854,
                                    48.44054123867719
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
                                        46.2911506447795,
                                        51.94480632548899
                                    ],
                                    [
                                        46.2911506447795,
                                        44.67266804537328
                                    ],
                                    [
                                        57.34140168949694,
                                        44.67266804537328
                                    ],
                                    [
                                        57.34140168949694,
                                        51.94480632548899
                                    ],
                                    [
                                        46.2911506447795,
                                        51.94480632548899
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
                                    52.21168730973854,
                                    48.44054123867719
                                ],
                                [
                                    54.86,
                                    39.74
                                ],
                                [
                                    56.64,
                                    30.16
                                ],
                                [
                                    58.7,
                                    21.87
                                ],
                                [
                                    59.201,
                                    21.4963
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
                    "asset": "a3170",
                    "number": 5
                },
                {
                    "asset": "a3147",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3013",
                    "number": 1
                },
                {
                    "asset": "a3094",
                    "number": 5
                },
                {
                    "asset": "a3010",
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
                                    47.4306,
                                    25.8987
                                ],
                                [
                                    56.42,
                                    32.79
                                ],
                                [
                                    65.68,
                                    38.96
                                ],
                                [
                                    74.22,
                                    45.41
                                ],
                                [
                                    74.2828,
                                    45.794
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
                                        70.74013773548225,
                                        48.10632595390153
                                    ],
                                    [
                                        70.74013773548225,
                                        43.38103639363115
                                    ],
                                    [
                                        77.53730209330426,
                                        43.38103639363115
                                    ],
                                    [
                                        77.53730209330426,
                                        48.10632595390153
                                    ],
                                    [
                                        70.74013773548225,
                                        48.10632595390153
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
                                    74.2828,
                                    45.794
                                ],
                                [
                                    67.94,
                                    40.72
                                ],
                                [
                                    60.38,
                                    35.44
                                ],
                                [
                                    54.1,
                                    30.45
                                ],
                                [
                                    47.11,
                                    25.73
                                ],
                                [
                                    47.4306,
                                    25.8987
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
                    "asset": "a3114",
                    "number": 2,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a3188",
                    "number": 5,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a3193",
                    "number": 1,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "a3127",
                    "number": 3,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3013",
                    "number": 2,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "a3094",
                    "number": 4,
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
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T04:10:00.000Z",
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a3027",
                    "number": 0
                },
                {
                    "asset": "a3087",
                    "number": 2
                },
                {
                    "asset": "a3076",
                    "number": 4
                },
                {
                    "asset": "a3093",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3113",
                    "number": 0
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
                                    78.07012832510902,
                                    44.80141324739462
                                ],
                                [
                                    77.86,
                                    35.3
                                ],
                                [
                                    77.55,
                                    25.7
                                ],
                                [
                                    77.53,
                                    15.38
                                ],
                                [
                                    77.79,
                                    6.34
                                ],
                                [
                                    77.8075,
                                    6.0179
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
                                        76.46223526657505,
                                        7.350465050503726
                                    ],
                                    [
                                        76.46223526657505,
                                        4.682058032055833
                                    ],
                                    [
                                        79.14617550510359,
                                        4.682058032055833
                                    ],
                                    [
                                        79.14617550510359,
                                        7.350465050503726
                                    ],
                                    [
                                        76.46223526657505,
                                        7.350465050503726
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
                                    77.8075,
                                    6.0179
                                ],
                                [
                                    77.41,
                                    15.42
                                ],
                                [
                                    77.82,
                                    25.63
                                ],
                                [
                                    77.5,
                                    35.12
                                ],
                                [
                                    78.47,
                                    44.89
                                ],
                                [
                                    78.07012832510902,
                                    44.80141324739462
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
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T08:30:00.000Z",
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a3193",
                    "number": 1
                },
                {
                    "asset": "a3141",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3013",
                    "number": 1
                },
                {
                    "asset": "a3094",
                    "number": 5
                },
                {
                    "asset": "a3010",
                    "number": 2
                }
            ],
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-red//2.9506774487090297//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.9115,
                                    25.7976
                                ],
                                [
                                    73.46,
                                    33.63
                                ],
                                [
                                    63.28,
                                    40.75
                                ],
                                [
                                    52.4,
                                    48.15
                                ],
                                [
                                    52.45812732646946,
                                    48.547450202397584
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668394200000,
                            "endTime": 1668403200000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-red//5.901354897418059//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.95945974708337,
                                        50.71135864290208
                                    ],
                                    [
                                        48.95945974708337,
                                        46.28635377567223
                                    ],
                                    [
                                        55.663708126605194,
                                        46.28635377567223
                                    ],
                                    [
                                        55.663708126605194,
                                        50.71135864290208
                                    ],
                                    [
                                        48.95945974708337,
                                        50.71135864290208
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
                            "startDate": "2022-11-14T05:20:00.000Z",
                            "endDate": "2022-11-14T08:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668403200000,
                            "endTime": 1668414600000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-red//8.85203234612709//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.45812732646946,
                                    48.547450202397584
                                ],
                                [
                                    68.02,
                                    37.35
                                ],
                                [
                                    84.01,
                                    25.57
                                ],
                                [
                                    83.9115,
                                    25.7976
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
            "startDate": "2022-11-14T02:10:00.000Z",
            "endDate": "2022-11-14T04:40:00.000Z",
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a3119",
                    "number": 2
                },
                {
                    "asset": "a3149",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3013",
                    "number": 1
                }
            ],
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
                                    80.4032,
                                    17.0051
                                ],
                                [
                                    73.41,
                                    25.69
                                ],
                                [
                                    66.4,
                                    34.36
                                ],
                                [
                                    59.68,
                                    43.31
                                ],
                                [
                                    52.24,
                                    51.55
                                ],
                                [
                                    52.7169,
                                    51.9521
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
                                        51.978478933227706,
                                        52.40034633671547
                                    ],
                                    [
                                        51.978478933227706,
                                        51.499326466305114
                                    ],
                                    [
                                        53.44063134762462,
                                        51.499326466305114
                                    ],
                                    [
                                        53.44063134762462,
                                        52.40034633671547
                                    ],
                                    [
                                        51.978478933227706,
                                        52.40034633671547
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
                                    52.7169,
                                    51.9521
                                ],
                                [
                                    80.57,
                                    17.23
                                ],
                                [
                                    80.4032,
                                    17.0051
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
            "startDate": "2022-11-14T02:20:00.000Z",
            "endDate": "2022-11-14T06:00:00.000Z",
            "activity": "f-blue-Maritime-Mine Clearance",
            "ownAssets": [
                {
                    "asset": "a3094",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3113",
                    "number": 1
                },
                {
                    "asset": "a3194",
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
                            "startDate": "2022-11-14T02:20:00.000Z",
                            "endDate": "2022-11-14T03:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668392400000,
                            "endTime": 1668395400000,
                            "geomId": "Mine Clearance-0",
                            "name": "f-blue//6.863185207359493//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.94555776554388,
                                    48.664126395601784
                                ],
                                [
                                    59.16,
                                    37.86
                                ],
                                [
                                    66.52,
                                    28.19
                                ],
                                [
                                    74.16,
                                    17.81
                                ],
                                [
                                    73.7064,
                                    17.4311
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
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T05:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395400000,
                            "endTime": 1668403800000,
                            "geomId": "Mine Clearance-1",
                            "name": "f-blue//13.726370414718986//Mine Clearance Area Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.09567422417304,
                                        19.86953893330563
                                    ],
                                    [
                                        71.09567422417304,
                                        14.959567564556272
                                    ],
                                    [
                                        76.24779436672915,
                                        14.959567564556272
                                    ],
                                    [
                                        76.24779436672915,
                                        19.86953893330563
                                    ],
                                    [
                                        71.09567422417304,
                                        19.86953893330563
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
                            "startDate": "2022-11-14T05:30:00.000Z",
                            "endDate": "2022-11-14T06:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668403800000,
                            "endTime": 1668405600000,
                            "geomId": "Mine Clearance-2",
                            "name": "f-blue//20.58955562207848//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.7064,
                                    17.4311
                                ],
                                [
                                    66.11,
                                    27.69
                                ],
                                [
                                    59.69,
                                    38.12
                                ],
                                [
                                    51.56,
                                    48.83
                                ],
                                [
                                    51.94555776554388,
                                    48.664126395601784
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
            "startDate": "2022-11-14T02:20:00.000Z",
            "endDate": "2022-11-14T05:00:00.000Z",
            "activity": "f-blue-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a3029",
                    "number": 3
                },
                {
                    "asset": "a3030",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3113",
                    "number": 2
                },
                {
                    "asset": "a3194",
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
                            "startDate": "2022-11-14T02:20:00.000Z",
                            "endDate": "2022-11-14T03:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668392400000,
                            "endTime": 1668395400000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//2.1595708401873708//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.3158,
                                    34.0096
                                ],
                                [
                                    66.5,
                                    11.92
                                ],
                                [
                                    66.2178,
                                    11.9088
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
                            "endDate": "2022-11-14T03:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395400000,
                            "endTime": 1668397200000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//4.3191416803747416//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        63.78981304426483,
                                        14.251723099590931
                                    ],
                                    [
                                        63.78981304426483,
                                        9.545461317479244
                                    ],
                                    [
                                        68.60407764086025,
                                        9.545461317479244
                                    ],
                                    [
                                        68.60407764086025,
                                        14.251723099590931
                                    ],
                                    [
                                        63.78981304426483,
                                        14.251723099590931
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
                            "startDate": "2022-11-14T03:40:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668397200000,
                            "endTime": 1668402000000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//6.478712520562112//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.2178,
                                    11.9088
                                ],
                                [
                                    61.32,
                                    17.21
                                ],
                                [
                                    55.3,
                                    23.38
                                ],
                                [
                                    50.56,
                                    28.83
                                ],
                                [
                                    45.1,
                                    33.57
                                ],
                                [
                                    45.3158,
                                    34.0096
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
            "startDate": "2022-11-14T02:20:00.000Z",
            "endDate": "2022-11-14T04:40:00.000Z",
            "activity": "f-red-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a3117",
                    "number": 1
                },
                {
                    "asset": "a3200",
                    "number": 5
                },
                {
                    "asset": "a3129",
                    "number": 2
                },
                {
                    "asset": "a3158",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3013",
                    "number": 3
                },
                {
                    "asset": "a3094",
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
                                    50.6119,
                                    5.7935
                                ],
                                [
                                    51.52,
                                    21.27
                                ],
                                [
                                    51.65,
                                    36.96
                                ],
                                [
                                    52.06,
                                    51.94
                                ],
                                [
                                    52.479079297139116,
                                    51.848092994099346
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
                                        47.771164572821455,
                                        54.49209095538415
                                    ],
                                    [
                                        47.771164572821455,
                                        49.03741541924066
                                    ],
                                    [
                                        56.64916406099652,
                                        49.03741541924066
                                    ],
                                    [
                                        56.64916406099652,
                                        54.49209095538415
                                    ],
                                    [
                                        47.771164572821455,
                                        54.49209095538415
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
                                    52.479079297139116,
                                    51.848092994099346
                                ],
                                [
                                    50.49,
                                    5.45
                                ],
                                [
                                    50.6119,
                                    5.7935
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
            "startDate": "2022-11-14T02:25:00.000Z",
            "endDate": "2022-11-14T07:35:00.000Z",
            "activity": "f-blue-Maritime-EW Attack",
            "ownAssets": [
                {
                    "asset": "a3058",
                    "number": 5
                },
                {
                    "asset": "a3030",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3113",
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
                            "startDate": "2022-11-14T02:25:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668392700000,
                            "endTime": 1668395700000,
                            "geomId": "EW Attack-0",
                            "name": "f-blue//4.432605614885688//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.54871986274047,
                                    44.6976097596115
                                ],
                                [
                                    79.72,
                                    37.54
                                ],
                                [
                                    81.04,
                                    29.54
                                ],
                                [
                                    81.64,
                                    21.81
                                ],
                                [
                                    81.86178410934637,
                                    21.781299765182144
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
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T04:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395700000,
                            "endTime": 1668399900000,
                            "geomId": "EW Attack-1",
                            "name": "f-blue//8.865211229771376//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        78.50282220647927,
                                        24.797051367328258
                                    ],
                                    [
                                        78.50282220647927,
                                        18.70052426468237
                                    ],
                                    [
                                        85.08084696458668,
                                        18.70052426468237
                                    ],
                                    [
                                        85.08084696458668,
                                        24.797051367328258
                                    ],
                                    [
                                        78.50282220647927,
                                        24.797051367328258
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
                            "startDate": "2022-11-14T04:25:00.000Z",
                            "endDate": "2022-11-14T07:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668399900000,
                            "endTime": 1668411300000,
                            "geomId": "EW Attack-2",
                            "name": "f-blue//13.297816844657063//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    81.86178410934637,
                                    21.781299765182144
                                ],
                                [
                                    81.09,
                                    29.73
                                ],
                                [
                                    79.42,
                                    36.78
                                ],
                                [
                                    79.04,
                                    45.11
                                ],
                                [
                                    78.54871986274047,
                                    44.6976097596115
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
            "startDate": "2022-11-14T03:15:00.000Z",
            "endDate": "2022-11-14T06:25:00.000Z",
            "activity": "f-red-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "a3111",
                    "number": 4,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "a3145",
                    "number": 5,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a3013",
                    "number": 2,
                    "missileType": "SRBM"
                },
                {
                    "asset": "a3094",
                    "number": 0,
                    "missileType": "IRBM"
                },
                {
                    "asset": "a3010",
                    "number": 0,
                    "missileType": "SRBM"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_143",
        "_rev": "2"
    }]