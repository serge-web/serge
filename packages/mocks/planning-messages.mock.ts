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
            "Reference": "Blue-6",
            "title": "Order item 6",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-blue-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "a14",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
                },
                {
                    "asset": "a194"
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
                                    39.9206,
                                    54.37
                                ],
                                [
                                    38.99,
                                    33.36
                                ],
                                [
                                    38.42,
                                    11.71
                                ],
                                [
                                    38.1328,
                                    12.0359
                                ]
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
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T06:45:00.000Z",
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a193",
                    "number": 2
                },
                {
                    "asset": "a176",
                    "number": 4
                },
                {
                    "asset": "a186",
                    "number": 3
                },
                {
                    "asset": "a127",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
                },
                {
                    "asset": "a93"
                },
                {
                    "asset": "a6"
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
                                    41.3754,
                                    10.8007
                                ],
                                [
                                    50.05,
                                    18.98
                                ],
                                [
                                    57.62,
                                    28.07
                                ],
                                [
                                    66.48,
                                    36.44
                                ],
                                [
                                    74.62,
                                    44.1
                                ],
                                [
                                    74.8334,
                                    44.5993
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
                                        70.2058933016498,
                                        47.62763026602858
                                    ],
                                    [
                                        70.2058933016498,
                                        41.40295601556113
                                    ],
                                    [
                                        78.99035465557196,
                                        41.40295601556113
                                    ],
                                    [
                                        78.99035465557196,
                                        47.62763026602858
                                    ],
                                    [
                                        70.2058933016498,
                                        47.62763026602858
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
                                        70.69490626471381,
                                        47.331679388308004
                                    ],
                                    [
                                        70.69490626471381,
                                        41.7311105259274
                                    ],
                                    [
                                        78.59132090361821,
                                        41.7311105259274
                                    ],
                                    [
                                        78.59132090361821,
                                        47.331679388308004
                                    ],
                                    [
                                        70.69490626471381,
                                        47.331679388308004
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
                                    74.8334,
                                    44.5993
                                ],
                                [
                                    63.77,
                                    32.98
                                ],
                                [
                                    52.76,
                                    22.42
                                ],
                                [
                                    41.03,
                                    11.14
                                ],
                                [
                                    41.3754,
                                    10.8007
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-29T05:18:28.464Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-12",
            "title": "Order item 12",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T03:15:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a24",
                    "number": 5
                },
                {
                    "asset": "a92",
                    "number": 1
                },
                {
                    "asset": "a87",
                    "number": 3
                },
                {
                    "asset": "a11",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
                },
                {
                    "asset": "a194"
                },
                {
                    "asset": "a106"
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
                                    39.54269395607191,
                                    54.85852207777224
                                ],
                                [
                                    52.74,
                                    39.02
                                ],
                                [
                                    65.03,
                                    22.27
                                ],
                                [
                                    77.6,
                                    6.81
                                ],
                                [
                                    78.0996803106867,
                                    6.361626382146199
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
                                        77.85035879918293,
                                        6.6092312437344924
                                    ],
                                    [
                                        77.85035879918293,
                                        6.113902163535662
                                    ],
                                    [
                                        78.34876163028545,
                                        6.113902163535662
                                    ],
                                    [
                                        78.34876163028545,
                                        6.6092312437344924
                                    ],
                                    [
                                        77.85035879918293,
                                        6.6092312437344924
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
                                    78.0996803106867,
                                    6.361626382146199
                                ],
                                [
                                    59.05,
                                    30.47
                                ],
                                [
                                    39.39,
                                    54.95
                                ],
                                [
                                    39.54269395607191,
                                    54.85852207777224
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
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T05:35:00.000Z",
            "activity": "f-blue-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a11",
                    "number": 3
                },
                {
                    "asset": "a61",
                    "number": 3
                },
                {
                    "asset": "a42",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
                },
                {
                    "asset": "a194"
                },
                {
                    "asset": "a106"
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
                                    27.3296,
                                    52.2103
                                ],
                                [
                                    31.46,
                                    32.1
                                ],
                                [
                                    35.89,
                                    11.3
                                ],
                                [
                                    35.6829,
                                    11.4134
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
                                        31.868377295387244,
                                        15.072210800826328
                                    ],
                                    [
                                        31.868377295387244,
                                        7.706604656433418
                                    ],
                                    [
                                        39.39963149005186,
                                        7.706604656433418
                                    ],
                                    [
                                        39.39963149005186,
                                        15.072210800826328
                                    ],
                                    [
                                        31.868377295387244,
                                        15.072210800826328
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
                                    35.6829,
                                    11.4134
                                ],
                                [
                                    33.38,
                                    25.3
                                ],
                                [
                                    30.11,
                                    38.23
                                ],
                                [
                                    27.13,
                                    52.44
                                ],
                                [
                                    27.3296,
                                    52.2103
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
                    "asset": "a51",
                    "number": 4
                },
                {
                    "asset": "a89",
                    "number": 1
                },
                {
                    "asset": "a53",
                    "number": 3
                },
                {
                    "asset": "a48",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
                },
                {
                    "asset": "a194"
                },
                {
                    "asset": "a106"
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
                                    39.52137707624843,
                                    54.86750791546363
                                ],
                                [
                                    40.54,
                                    28.57
                                ],
                                [
                                    40.92,
                                    2.62
                                ],
                                [
                                    41.17003629083843,
                                    2.3641436978865835
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
                    "asset": "a48",
                    "number": 1
                },
                {
                    "asset": "a68",
                    "number": 3
                },
                {
                    "asset": "a22",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
                },
                {
                    "asset": "a194"
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
                                    67.5387,
                                    44.4622
                                ],
                                [
                                    58.31,
                                    33.29
                                ],
                                [
                                    49.13,
                                    22.17
                                ],
                                [
                                    40.24,
                                    11.33
                                ],
                                [
                                    40.50596757416454,
                                    11.07125961176953
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
                                        39.66238430644417,
                                        11.895558606565922
                                    ],
                                    [
                                        39.66238430644417,
                                        10.244633124995497
                                    ],
                                    [
                                        41.34480785610437,
                                        10.244633124995497
                                    ],
                                    [
                                        41.34480785610437,
                                        11.895558606565922
                                    ],
                                    [
                                        39.66238430644417,
                                        11.895558606565922
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
                                    40.50596757416454,
                                    11.07125961176953
                                ],
                                [
                                    67.18,
                                    44.5
                                ],
                                [
                                    67.5387,
                                    44.4622
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
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
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
                                    65.0533,
                                    53.5684
                                ],
                                [
                                    72.02,
                                    38.56
                                ],
                                [
                                    78.44,
                                    23.99
                                ],
                                [
                                    78.5787,
                                    24.0336
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-29T19:25:40.744Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-27",
            "title": "Order item 27",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T03:35:00.000Z",
            "activity": "f-red-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a108",
                    "number": 2
                },
                {
                    "asset": "a200",
                    "number": 2
                },
                {
                    "asset": "a121",
                    "number": 4
                },
                {
                    "asset": "a170",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
                },
                {
                    "asset": "a93"
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
                                    34.2781,
                                    17.0439
                                ],
                                [
                                    51.77,
                                    46.03
                                ],
                                [
                                    51.660863623427666,
                                    46.392813662446464
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
                                        45.994930161038404,
                                        49.90753000737898
                                    ],
                                    [
                                        45.994930161038404,
                                        42.63286583253974
                                    ],
                                    [
                                        56.618801506203866,
                                        42.63286583253974
                                    ],
                                    [
                                        56.618801506203866,
                                        49.90753000737898
                                    ],
                                    [
                                        45.994930161038404,
                                        49.90753000737898
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
                                    51.660863623427666,
                                    46.392813662446464
                                ],
                                [
                                    46.19,
                                    36.89
                                ],
                                [
                                    39.84,
                                    26.51
                                ],
                                [
                                    33.77,
                                    17.41
                                ],
                                [
                                    34.2781,
                                    17.0439
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
            "messageType": "Land--Standard",
            "timestamp": "2022-09-25T07:27:09.572Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-30",
            "title": "Order item 30",
            "startDate": "2022-05-01T00:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-red-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "a170",
                    "number": 3
                },
                {
                    "asset": "a146",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
                },
                {
                    "asset": "a93"
                },
                {
                    "asset": "a6"
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
                                    49.9233,
                                    26.0661
                                ],
                                [
                                    54,
                                    27.76
                                ],
                                [
                                    58.35,
                                    28.73
                                ],
                                [
                                    61.98,
                                    29.98
                                ],
                                [
                                    62.04247564897565,
                                    30.361650096972443
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
                                        59.232080052655455,
                                        32.69709127673877
                                    ],
                                    [
                                        59.232080052655455,
                                        27.968919504733876
                                    ],
                                    [
                                        64.72019544455712,
                                        27.968919504733876
                                    ],
                                    [
                                        64.72019544455712,
                                        32.69709127673877
                                    ],
                                    [
                                        59.232080052655455,
                                        32.69709127673877
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
                                    62.04247564897565,
                                    30.361650096972443
                                ],
                                [
                                    59.38,
                                    29.19
                                ],
                                [
                                    55.5,
                                    27.81
                                ],
                                [
                                    52.91,
                                    26.71
                                ],
                                [
                                    49.61,
                                    25.9
                                ],
                                [
                                    49.9233,
                                    26.0661
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
                    "number": 1
                },
                {
                    "asset": "a147",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
                },
                {
                    "asset": "a93"
                },
                {
                    "asset": "a6"
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
                                    56.1128,
                                    7.6144
                                ],
                                [
                                    63.07,
                                    20.1
                                ],
                                [
                                    70.2,
                                    31.76
                                ],
                                [
                                    76.61,
                                    43.69
                                ],
                                [
                                    76.6514,
                                    43.8809
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
                                        75.25035798236539,
                                        44.86544442453982
                                    ],
                                    [
                                        75.25035798236539,
                                        42.87979855817896
                                    ],
                                    [
                                        78.0065132411834,
                                        42.87979855817896
                                    ],
                                    [
                                        78.0065132411834,
                                        44.86544442453982
                                    ],
                                    [
                                        75.25035798236539,
                                        44.86544442453982
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
                                        71.28798045705791,
                                        47.39106542753973
                                    ],
                                    [
                                        71.28798045705791,
                                        40.14836786133995
                                    ],
                                    [
                                        81.40015278046678,
                                        40.14836786133995
                                    ],
                                    [
                                        81.40015278046678,
                                        47.39106542753973
                                    ],
                                    [
                                        71.28798045705791,
                                        47.39106542753973
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
                                    76.6514,
                                    43.8809
                                ],
                                [
                                    66.32,
                                    25.84
                                ],
                                [
                                    56.4,
                                    7.2
                                ],
                                [
                                    56.1128,
                                    7.6144
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
                    "asset": "a52",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
                },
                {
                    "asset": "a194"
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
                                    65.5047,
                                    46.7161
                                ],
                                [
                                    57.81,
                                    38.61
                                ],
                                [
                                    50.97,
                                    29.36
                                ],
                                [
                                    43.42,
                                    21.39
                                ],
                                [
                                    36.15,
                                    12.71
                                ],
                                [
                                    35.785,
                                    12.6806
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
                                        32.83816674674587,
                                        15.504067023182225
                                    ],
                                    [
                                        32.83816674674587,
                                        9.825395343289436
                                    ],
                                    [
                                        38.666817174182064,
                                        9.825395343289436
                                    ],
                                    [
                                        38.666817174182064,
                                        15.504067023182225
                                    ],
                                    [
                                        32.83816674674587,
                                        15.504067023182225
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
                                    35.785,
                                    12.6806
                                ],
                                [
                                    45.47,
                                    23.58
                                ],
                                [
                                    55.41,
                                    35.74
                                ],
                                [
                                    65.64,
                                    47.18
                                ],
                                [
                                    65.5047,
                                    46.7161
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
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-22T13:55:40.797Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-39",
            "title": "Order item 39",
            "startDate": "2022-05-01T00:45:00.000Z",
            "endDate": "2022-05-01T03:55:00.000Z",
            "activity": "f-red-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "a181",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
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
                                    78.6075,
                                    19.2395
                                ],
                                [
                                    70.07,
                                    28.21
                                ],
                                [
                                    60.75,
                                    37.41
                                ],
                                [
                                    51.72,
                                    45.89
                                ],
                                [
                                    51.570029040752495,
                                    46.3830848991446
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
                                        50.800335577592755,
                                        46.90636819815821
                                    ],
                                    [
                                        50.800335577592755,
                                        45.8547360751713
                                    ],
                                    [
                                        52.32503760617694,
                                        45.8547360751713
                                    ],
                                    [
                                        52.32503760617694,
                                        46.90636819815821
                                    ],
                                    [
                                        50.800335577592755,
                                        46.90636819815821
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
                                    51.570029040752495,
                                    46.3830848991446
                                ],
                                [
                                    57.94,
                                    39.1
                                ],
                                [
                                    65.17,
                                    32.69
                                ],
                                [
                                    71.69,
                                    25.56
                                ],
                                [
                                    78.5,
                                    19.71
                                ],
                                [
                                    78.6075,
                                    19.2395
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
                    "asset": "a163",
                    "number": 3
                },
                {
                    "asset": "a179",
                    "number": 3
                },
                {
                    "asset": "a125",
                    "number": 5
                },
                {
                    "asset": "a196",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
                },
                {
                    "asset": "a93"
                },
                {
                    "asset": "a6"
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
                                    61.3075,
                                    10.2658
                                ],
                                [
                                    53.63,
                                    24.9
                                ],
                                [
                                    47.2,
                                    39.78
                                ],
                                [
                                    39.06,
                                    54.94
                                ],
                                [
                                    39.52137707624843,
                                    54.86750791546363
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
                                        34.31130780994285,
                                        57.55586675701658
                                    ],
                                    [
                                        34.31130780994285,
                                        51.98463469729294
                                    ],
                                    [
                                        44.05827336503961,
                                        51.98463469729294
                                    ],
                                    [
                                        44.05827336503961,
                                        57.55586675701658
                                    ],
                                    [
                                        34.31130780994285,
                                        57.55586675701658
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
                                    39.52137707624843,
                                    54.86750791546363
                                ],
                                [
                                    50.41,
                                    32.43
                                ],
                                [
                                    61.79,
                                    10.49
                                ],
                                [
                                    61.3075,
                                    10.2658
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-29T17:34:45.567Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-45",
            "title": "Order item 45",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a96",
                    "number": 3
                },
                {
                    "asset": "a99",
                    "number": 5
                },
                {
                    "asset": "a27",
                    "number": 5
                },
                {
                    "asset": "a86",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
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
                                    43.3486,
                                    37.2916
                                ],
                                [
                                    24.77,
                                    25.68
                                ],
                                [
                                    24.7305,
                                    26.0409
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
                                        23.683972760596628,
                                        26.969861747839854
                                    ],
                                    [
                                        23.683972760596628,
                                        25.104517341520776
                                    ],
                                    [
                                        25.760510323519636,
                                        25.104517341520776
                                    ],
                                    [
                                        25.760510323519636,
                                        26.969861747839854
                                    ],
                                    [
                                        23.683972760596628,
                                        26.969861747839854
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
                                    24.7305,
                                    26.0409
                                ],
                                [
                                    34.21,
                                    31.64
                                ],
                                [
                                    43.04,
                                    37.6
                                ],
                                [
                                    43.3486,
                                    37.2916
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
                    "asset": "a187",
                    "number": 1
                },
                {
                    "asset": "a175",
                    "number": 4
                },
                {
                    "asset": "a189",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
                },
                {
                    "asset": "a93"
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
                                    69.8971,
                                    15.058
                                ],
                                [
                                    63.96,
                                    18.35
                                ],
                                [
                                    57.89,
                                    22.51
                                ],
                                [
                                    51.1,
                                    25.95
                                ],
                                [
                                    44.59,
                                    28.67
                                ],
                                [
                                    44.8984,
                                    28.9942
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
                                        43.2362791939618,
                                        30.417414730151332
                                    ],
                                    [
                                        43.2362791939618,
                                        27.551101057711495
                                    ],
                                    [
                                        46.51506764361621,
                                        27.551101057711495
                                    ],
                                    [
                                        46.51506764361621,
                                        30.417414730151332
                                    ],
                                    [
                                        43.2362791939618,
                                        30.417414730151332
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
                                    44.8984,
                                    28.9942
                                ],
                                [
                                    57.16,
                                    22.06
                                ],
                                [
                                    69.95,
                                    14.65
                                ],
                                [
                                    69.8971,
                                    15.058
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
                    "asset": "a30",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
                },
                {
                    "asset": "a194"
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
                                    72.6178,
                                    45.379
                                ],
                                [
                                    62.86,
                                    38.68
                                ],
                                [
                                    53.96,
                                    30.83
                                ],
                                [
                                    44.33,
                                    24.26
                                ],
                                [
                                    33.99,
                                    16.97
                                ],
                                [
                                    34.350128623069835,
                                    17.210071310574804
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
                                        31.53014080054548,
                                        19.84316916929565
                                    ],
                                    [
                                        31.53014080054548,
                                        14.538859061276458
                                    ],
                                    [
                                        37.09036982640282,
                                        14.538859061276458
                                    ],
                                    [
                                        37.09036982640282,
                                        19.84316916929565
                                    ],
                                    [
                                        31.53014080054548,
                                        19.84316916929565
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
                                        32.300722228800645,
                                        19.135940149161698
                                    ],
                                    [
                                        32.300722228800645,
                                        15.26391465615122
                                    ],
                                    [
                                        36.35707314729603,
                                        15.26391465615122
                                    ],
                                    [
                                        36.35707314729603,
                                        19.135940149161698
                                    ],
                                    [
                                        32.300722228800645,
                                        19.135940149161698
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
                                    34.350128623069835,
                                    17.210071310574804
                                ],
                                [
                                    53.9,
                                    30.95
                                ],
                                [
                                    72.84,
                                    45.08
                                ],
                                [
                                    72.6178,
                                    45.379
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
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T04:40:00.000Z",
            "activity": "f-red-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a134",
                    "number": 2
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
                    "asset": "a187",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
                },
                {
                    "asset": "a93"
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
                                    24.3135,
                                    7.8918
                                ],
                                [
                                    43.58,
                                    17.21
                                ],
                                [
                                    64.1,
                                    26.79
                                ],
                                [
                                    82.9,
                                    36.65
                                ],
                                [
                                    83.366,
                                    36.5889
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
                                        79.27643699203578,
                                        39.66870844829771
                                    ],
                                    [
                                        79.27643699203578,
                                        33.380270200649576
                                    ],
                                    [
                                        87.13533051746509,
                                        33.380270200649576
                                    ],
                                    [
                                        87.13533051746509,
                                        39.66870844829771
                                    ],
                                    [
                                        79.27643699203578,
                                        39.66870844829771
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
                                    83.366,
                                    36.5889
                                ],
                                [
                                    53.62,
                                    22.43
                                ],
                                [
                                    24.31,
                                    7.71
                                ],
                                [
                                    24.3135,
                                    7.8918
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-23T21:41:04.593Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-57",
            "title": "Order item 57",
            "startDate": "2022-05-01T01:20:00.000Z",
            "endDate": "2022-05-01T07:30:00.000Z",
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a187",
                    "number": 1
                },
                {
                    "asset": "a130",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
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
                                    24.3135,
                                    7.8918
                                ],
                                [
                                    33.17,
                                    19.24
                                ],
                                [
                                    41.23,
                                    30.78
                                ],
                                [
                                    49.57,
                                    41.61
                                ],
                                [
                                    49.418,
                                    42.0476
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
                                        45.510771345632364,
                                        44.75761656820245
                                    ],
                                    [
                                        45.510771345632364,
                                        39.21606955776042
                                    ],
                                    [
                                        52.99861932786276,
                                        39.21606955776042
                                    ],
                                    [
                                        52.99861932786276,
                                        44.75761656820245
                                    ],
                                    [
                                        45.510771345632364,
                                        44.75761656820245
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
                                        47.64774581741145,
                                        43.32205163734025
                                    ],
                                    [
                                        47.64774581741145,
                                        40.7470232672731
                                    ],
                                    [
                                        51.11792255113885,
                                        40.7470232672731
                                    ],
                                    [
                                        51.11792255113885,
                                        43.32205163734025
                                    ],
                                    [
                                        47.64774581741145,
                                        43.32205163734025
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
                                    49.418,
                                    42.0476
                                ],
                                [
                                    43.38,
                                    33.29
                                ],
                                [
                                    37.26,
                                    25.44
                                ],
                                [
                                    30.42,
                                    16.88
                                ],
                                [
                                    23.87,
                                    7.6
                                ],
                                [
                                    24.3135,
                                    7.8918
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
                    "asset": "a196",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
                },
                {
                    "asset": "a93"
                },
                {
                    "asset": "a6"
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
                                    49.7238,
                                    16.1247
                                ],
                                [
                                    50.98,
                                    22.98
                                ],
                                [
                                    51.56,
                                    30.17
                                ],
                                [
                                    51.8633526617029,
                                    29.81354679675008
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
                                        48.23531548398229,
                                        32.814026294360545
                                    ],
                                    [
                                        48.23531548398229,
                                        26.719815464414964
                                    ],
                                    [
                                        55.27673962599262,
                                        26.719815464414964
                                    ],
                                    [
                                        55.27673962599262,
                                        32.814026294360545
                                    ],
                                    [
                                        48.23531548398229,
                                        32.814026294360545
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
                                    51.8633526617029,
                                    29.81354679675008
                                ],
                                [
                                    51.14,
                                    26.59
                                ],
                                [
                                    50.33,
                                    23.28
                                ],
                                [
                                    49.81,
                                    19.26
                                ],
                                [
                                    49.57,
                                    16.53
                                ],
                                [
                                    49.7238,
                                    16.1247
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
            "messageType": "Maritime--ASWBarrier",
            "timestamp": "2022-09-27T14:08:18.849Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-63",
            "title": "Order item 63",
            "startDate": "2022-05-01T01:50:00.000Z",
            "endDate": "2022-05-01T04:50:00.000Z",
            "activity": "f-blue-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "a59",
                    "number": 1
                },
                {
                    "asset": "a69",
                    "number": 5
                },
                {
                    "asset": "a11",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
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
                                    25.7194,
                                    32.9712
                                ],
                                [
                                    33.57,
                                    17.65
                                ],
                                [
                                    40.78,
                                    2.67
                                ],
                                [
                                    41.133736298147326,
                                    2.330701244818076
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
                                        37.291045615337865,
                                        6.1460521790799385
                                    ],
                                    [
                                        37.291045615337865,
                                        -1.4950611967589291
                                    ],
                                    [
                                        44.955610102881664,
                                        -1.4950611967589291
                                    ],
                                    [
                                        44.955610102881664,
                                        6.1460521790799385
                                    ],
                                    [
                                        37.291045615337865,
                                        6.1460521790799385
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
                                    41.133736298147326,
                                    2.330701244818076
                                ],
                                [
                                    33.42,
                                    17.83
                                ],
                                [
                                    26.04,
                                    32.68
                                ],
                                [
                                    25.7194,
                                    32.9712
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
            "startDate": "2022-05-01T01:50:00.000Z",
            "endDate": "2022-05-01T02:40:00.000Z",
            "activity": "f-red-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a181",
                    "number": 5
                },
                {
                    "asset": "a178",
                    "number": 2
                },
                {
                    "asset": "a102",
                    "number": 3
                },
                {
                    "asset": "a155",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
                },
                {
                    "asset": "a93"
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
                                    32.9816,
                                    18.0051
                                ],
                                [
                                    42.81,
                                    31.65
                                ],
                                [
                                    52.04,
                                    45.71
                                ],
                                [
                                    51.6547,
                                    46.213
                                ]
                            ]
                        }
                    }
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
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T07:40:00.000Z",
            "activity": "f-blue-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a52",
                    "number": 2
                },
                {
                    "asset": "a34",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
                },
                {
                    "asset": "a194"
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
                                    51.82758499243218,
                                    29.93131570333072
                                ],
                                [
                                    47.2,
                                    19.74
                                ],
                                [
                                    42.05,
                                    10.04
                                ],
                                [
                                    42.4052,
                                    9.9569
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
                                        39.92950155324388,
                                        12.366085529187712
                                    ],
                                    [
                                        39.92950155324388,
                                        7.52976700649646
                                    ],
                                    [
                                        44.84447236459057,
                                        7.52976700649646
                                    ],
                                    [
                                        44.84447236459057,
                                        12.366085529187712
                                    ],
                                    [
                                        39.92950155324388,
                                        12.366085529187712
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
                                    42.4052,
                                    9.9569
                                ],
                                [
                                    51.51,
                                    29.82
                                ],
                                [
                                    51.82758499243218,
                                    29.93131570333072
                                ]
                            ]
                        }
                    }
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-25T17:49:16.162Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-72",
            "title": "Order item 72",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T07:30:00.000Z",
            "activity": "f-blue-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "a83",
                    "number": 4
                },
                {
                    "asset": "a48",
                    "number": 5
                },
                {
                    "asset": "a44",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
                },
                {
                    "asset": "a194"
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
                                    25.7993,
                                    40.1232
                                ],
                                [
                                    37.13,
                                    33.23
                                ],
                                [
                                    48.67,
                                    25.54
                                ],
                                [
                                    59.49,
                                    18.14
                                ],
                                [
                                    59.8379,
                                    18.0741
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
                                        56.14624075650641,
                                        21.474775537343696
                                    ],
                                    [
                                        56.14624075650641,
                                        14.605973555381642
                                    ],
                                    [
                                        63.387824190056705,
                                        14.605973555381642
                                    ],
                                    [
                                        63.387824190056705,
                                        21.474775537343696
                                    ],
                                    [
                                        56.14624075650641,
                                        21.474775537343696
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
                                    59.8379,
                                    18.0741
                                ],
                                [
                                    48.83,
                                    25.47
                                ],
                                [
                                    37.06,
                                    33.09
                                ],
                                [
                                    25.57,
                                    40
                                ],
                                [
                                    25.7993,
                                    40.1232
                                ]
                            ]
                        }
                    }
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
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-23T03:50:56.847Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-75",
            "title": "Order item 75",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T08:10:00.000Z",
            "activity": "f-blue-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a65",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
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
                                    65.5047,
                                    46.7161
                                ],
                                [
                                    57.88,
                                    34.3
                                ],
                                [
                                    50.31,
                                    22.94
                                ],
                                [
                                    42.03,
                                    10.86
                                ],
                                [
                                    42.5171,
                                    10.3741
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
                                        40.86725512212568,
                                        11.983793547294109
                                    ],
                                    [
                                        40.86725512212568,
                                        8.756078191057396
                                    ],
                                    [
                                        44.15001524412959,
                                        8.756078191057396
                                    ],
                                    [
                                        44.15001524412959,
                                        11.983793547294109
                                    ],
                                    [
                                        40.86725512212568,
                                        11.983793547294109
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
                                        40.62441296037575,
                                        12.218394634737434
                                    ],
                                    [
                                        40.62441296037575,
                                        8.518861689304808
                                    ],
                                    [
                                        44.38754233595236,
                                        8.518861689304808
                                    ],
                                    [
                                        44.38754233595236,
                                        12.218394634737434
                                    ],
                                    [
                                        40.62441296037575,
                                        12.218394634737434
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
                                    42.5171,
                                    10.3741
                                ],
                                [
                                    50.62,
                                    22.7
                                ],
                                [
                                    57.82,
                                    34.13
                                ],
                                [
                                    65.3,
                                    46.84
                                ],
                                [
                                    65.5047,
                                    46.7161
                                ]
                            ]
                        }
                    }
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
            "messageType": "Maritime--MissileStrike",
            "timestamp": "2022-09-23T09:06:20.590Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-81",
            "title": "Order item 81",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T04:50:00.000Z",
            "activity": "f-blue-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "a7",
                    "number": 5,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "a40",
                    "number": 4,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111",
                    "missileType": "SRBM",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_81",
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
            "Reference": "Blue-81",
            "title": "Order item 81",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T05:00:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "a1",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
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
                                    51.660863623427666,
                                    46.392813662446464
                                ],
                                [
                                    37.47,
                                    36.92
                                ],
                                [
                                    23.6,
                                    26.76
                                ],
                                [
                                    23.5538,
                                    26.7423
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
                                        21.206324475579077,
                                        28.78068063734883
                                    ],
                                    [
                                        21.206324475579077,
                                        24.666642654664297
                                    ],
                                    [
                                        25.81784021423858,
                                        24.666642654664297
                                    ],
                                    [
                                        25.81784021423858,
                                        28.78068063734883
                                    ],
                                    [
                                        21.206324475579077,
                                        28.78068063734883
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
                                    23.5538,
                                    26.7423
                                ],
                                [
                                    51.37,
                                    46.44
                                ],
                                [
                                    51.660863623427666,
                                    46.392813662446464
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_81",
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
            "Reference": "Red-84",
            "title": "Order item 84",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T06:20:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a150",
                    "number": 0
                },
                {
                    "asset": "a156",
                    "number": 0
                },
                {
                    "asset": "a190",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
                },
                {
                    "asset": "a93"
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
                                    34.2781,
                                    17.0439
                                ],
                                [
                                    51.61,
                                    46.64
                                ],
                                [
                                    51.48362531431719,
                                    46.34854276455371
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
                                        47.40460248946374,
                                        48.95663519543338
                                    ],
                                    [
                                        47.40460248946374,
                                        43.608832862291855
                                    ],
                                    [
                                        55.18219450257067,
                                        43.608832862291855
                                    ],
                                    [
                                        55.18219450257067,
                                        48.95663519543338
                                    ],
                                    [
                                        47.40460248946374,
                                        48.95663519543338
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
                                    51.48362531431719,
                                    46.34854276455371
                                ],
                                [
                                    45.61,
                                    36.39
                                ],
                                [
                                    39.82,
                                    26.52
                                ],
                                [
                                    34.32,
                                    16.93
                                ],
                                [
                                    34.2781,
                                    17.0439
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
            "Reference": "Blue-91",
            "title": "Order item 91",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:00:00.000Z",
            "activity": "f-blue-Land-Strike",
            "ownAssets": [
                {
                    "asset": "a51",
                    "number": 4,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a42",
                    "number": 4,
                    "missileType": "Standard Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111",
                    "missileType": "Standard Cruise",
                    "number": 5
                },
                {
                    "asset": "a194",
                    "missileType": "Standard Cruise",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_91",
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
            "Reference": "Red-90",
            "title": "Order item 90",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-red-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "a112",
                    "number": 4
                },
                {
                    "asset": "a188",
                    "number": 5
                },
                {
                    "asset": "a192",
                    "number": 5
                },
                {
                    "asset": "a126",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a9"
                },
                {
                    "asset": "a93"
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
                                    81.9023,
                                    21.6005
                                ],
                                [
                                    71.38,
                                    29.73
                                ],
                                [
                                    60.8,
                                    37.8
                                ],
                                [
                                    49.5,
                                    46.16
                                ],
                                [
                                    39.49,
                                    54.8
                                ],
                                [
                                    39.3482,
                                    54.7179
                                ]
                            ]
                        }
                    }
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-28T16:25:17.560Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-93",
            "title": "Order item 93",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T04:10:00.000Z",
            "activity": "f-blue-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a24",
                    "number": 1
                },
                {
                    "asset": "a84",
                    "number": 1
                },
                {
                    "asset": "a71",
                    "number": 0
                },
                {
                    "asset": "a92",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a111"
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
                                    29.3437,
                                    38.3893
                                ],
                                [
                                    33.48,
                                    33.2
                                ],
                                [
                                    37.51,
                                    27.91
                                ],
                                [
                                    41.82,
                                    21.91
                                ],
                                [
                                    46.41,
                                    17.19
                                ],
                                [
                                    46.4354,
                                    16.8626
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
                                        45.03097993948053,
                                        18.1920631264274
                                    ],
                                    [
                                        45.03097993948053,
                                        15.523714570318722
                                    ],
                                    [
                                        47.82013219818736,
                                        15.523714570318722
                                    ],
                                    [
                                        47.82013219818736,
                                        18.1920631264274
                                    ],
                                    [
                                        45.03097993948053,
                                        18.1920631264274
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
                                    46.4354,
                                    16.8626
                                ],
                                [
                                    41.7,
                                    21.96
                                ],
                                [
                                    37.77,
                                    27.85
                                ],
                                [
                                    33.12,
                                    33.02
                                ],
                                [
                                    29.75,
                                    38.48
                                ],
                                [
                                    29.3437,
                                    38.3893
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
            "timestamp": "2023-01-30T17:41:44.496Z",
            "turnNumber": 3,
            "counter": 1,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T02:00:00.000Z",
                "id": "umpire-1",
                "orders1": "m_f-blue_91",
                "orders2": "m_f-red_66",
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
        "_id": "2023-01-30T17:41:44.496Z//0"
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
            "timestamp": "2023-01-30T17:41:44.496Z",
            "turnNumber": 3,
            "counter": 2,
            "interaction": {
                "startTime": "2022-05-01T01:10:00.000Z",
                "endTime": "2022-05-01T05:00:00.000Z",
                "id": "umpire-2",
                "orders1": "m_f-blue_51",
                "orders2": "m_f-red_33",
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
        "_id": "2023-01-30T17:41:44.496Z//1"
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
            "timestamp": "2023-01-30T17:41:44.496Z",
            "turnNumber": 3,
            "counter": 3,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T03:35:00.000Z",
                "id": "umpire-3",
                "orders1": "m_f-blue_75",
                "orders2": "m_f-red_27",
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
        "_id": "2023-01-30T17:41:44.496Z//2"
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
            "timestamp": "2023-01-30T17:41:44.496Z",
            "turnNumber": 3,
            "counter": 4,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T05:00:00.000Z",
                "id": "umpire-4",
                "orders1": "m_f-blue_81",
                "orders2": "m_f-red_57",
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
        "_id": "2023-01-30T17:41:44.496Z//3"
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
            "timestamp": "2023-01-30T17:41:44.496Z",
            "turnNumber": 3,
            "counter": 5,
            "interaction": {
                "startTime": "2022-05-01T00:10:00.000Z",
                "endTime": "2022-05-01T04:00:00.000Z",
                "id": "umpire-5",
                "orders1": "m_f-blue_15",
                "orders2": "m_f-red_30",
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
        "_id": "2023-01-30T17:41:44.496Z//4"
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
            "timestamp": "2023-01-30T17:41:44.496Z",
            "turnNumber": 3,
            "counter": 6,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T00:55:00.000Z",
                "id": "umpire-6",
                "orders1": "m_f-blue_18",
                "orders2": "m_f-red_90",
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
        "_id": "2023-01-30T17:41:44.496Z//5"
    }
]