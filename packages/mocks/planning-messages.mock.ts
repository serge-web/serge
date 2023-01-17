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
                    "asset": "a818",
                    "number": 2,
                    "missileType": "Jet OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a915",
                    "number": 2,
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
                    "asset": "a902",
                    "number": 1
                },
                {
                    "asset": "a983",
                    "number": 3
                },
                {
                    "asset": "a994",
                    "number": 3
                },
                {
                    "asset": "a932",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a813",
                    "number": 3
                },
                {
                    "asset": "a848",
                    "number": 1
                },
                {
                    "asset": "a809",
                    "number": 1
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
                                    44.7917,
                                    20.9105
                                ],
                                [
                                    48.94,
                                    26.07
                                ],
                                [
                                    51.99,
                                    32.13
                                ],
                                [
                                    56.32,
                                    37.47
                                ],
                                [
                                    59.94,
                                    42.1
                                ],
                                [
                                    60.1528,
                                    42.6043
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
                                        55.69263526817927,
                                        45.63889714066207
                                    ],
                                    [
                                        55.69263526817927,
                                        39.41305027883381
                                    ],
                                    [
                                        64.18842378510327,
                                        39.41305027883381
                                    ],
                                    [
                                        64.18842378510327,
                                        45.63889714066207
                                    ],
                                    [
                                        55.69263526817927,
                                        45.63889714066207
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
                                        56.16247902727745,
                                        45.34169412946665
                                    ],
                                    [
                                        56.16247902727745,
                                        39.7402725827475
                                    ],
                                    [
                                        63.79976146757364,
                                        39.7402725827475
                                    ],
                                    [
                                        63.79976146757364,
                                        45.34169412946665
                                    ],
                                    [
                                        56.16247902727745,
                                        45.34169412946665
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
                                    60.1528,
                                    42.6043
                                ],
                                [
                                    55.12,
                                    35.02
                                ],
                                [
                                    50.14,
                                    28.49
                                ],
                                [
                                    44.45,
                                    21.25
                                ],
                                [
                                    44.7917,
                                    20.9105
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
                    "asset": "a827",
                    "number": 4
                },
                {
                    "asset": "a845",
                    "number": 0
                },
                {
                    "asset": "a899",
                    "number": 0
                },
                {
                    "asset": "a814",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a915",
                    "number": 2
                },
                {
                    "asset": "a912",
                    "number": 1
                },
                {
                    "asset": "a909",
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
                                    68.5569,
                                    39.5299
                                ],
                                [
                                    65.33,
                                    33.33
                                ],
                                [
                                    61.19,
                                    26.21
                                ],
                                [
                                    57.33,
                                    20.38
                                ],
                                [
                                    57.8329,
                                    19.9346
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
                                        57.56903424190788,
                                        20.182070129120962
                                    ],
                                    [
                                        57.56903424190788,
                                        19.6867416000931
                                    ],
                                    [
                                        58.095939727833205,
                                        19.6867416000931
                                    ],
                                    [
                                        58.095939727833205,
                                        20.182070129120962
                                    ],
                                    [
                                        57.56903424190788,
                                        20.182070129120962
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
                                    57.8329,
                                    19.9346
                                ],
                                [
                                    63.43,
                                    29.59
                                ],
                                [
                                    68.4,
                                    39.62
                                ],
                                [
                                    68.5569,
                                    39.5299
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
                    "asset": "a814",
                    "number": 5
                },
                {
                    "asset": "a874",
                    "number": 0
                },
                {
                    "asset": "a851",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a915",
                    "number": 5
                },
                {
                    "asset": "a912",
                    "number": 2
                },
                {
                    "asset": "a909",
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
                                    44.137,
                                    33.6046
                                ],
                                [
                                    33.51,
                                    24.09
                                ],
                                [
                                    23.19,
                                    13.87
                                ],
                                [
                                    22.984,
                                    13.9871
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
                                        19.118885530958664,
                                        17.640135466371717
                                    ],
                                    [
                                        19.118885530958664,
                                        10.274854725578944
                                    ],
                                    [
                                        26.727226581301363,
                                        10.274854725578944
                                    ],
                                    [
                                        26.727226581301363,
                                        17.640135466371717
                                    ],
                                    [
                                        19.118885530958664,
                                        17.640135466371717
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
                                    22.984,
                                    13.9871
                                ],
                                [
                                    30.52,
                                    20.82
                                ],
                                [
                                    37.09,
                                    26.68
                                ],
                                [
                                    43.94,
                                    33.84
                                ],
                                [
                                    44.137,
                                    33.6046
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
                    "asset": "a862",
                    "number": 3
                },
                {
                    "asset": "a830",
                    "number": 2
                },
                {
                    "asset": "a865",
                    "number": 1
                },
                {
                    "asset": "a859",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a915",
                    "number": 3
                },
                {
                    "asset": "a912",
                    "number": 4
                },
                {
                    "asset": "a909",
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
                                    82.4565,
                                    32.264
                                ],
                                [
                                    71.55,
                                    29.17
                                ],
                                [
                                    59.99,
                                    26.43
                                ],
                                [
                                    60.2405,
                                    26.1788
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
                    "asset": "a859",
                    "number": 0
                },
                {
                    "asset": "a882",
                    "number": 5
                },
                {
                    "asset": "a824",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a915",
                    "number": 1
                },
                {
                    "asset": "a912",
                    "number": 1
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
                                    64.08902711064734,
                                    41.63182144492648
                                ],
                                [
                                    62.01,
                                    36.76
                                ],
                                [
                                    59.98,
                                    31.94
                                ],
                                [
                                    58.25,
                                    27.4
                                ],
                                [
                                    58.5102,
                                    27.1419
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
                                        57.57560228699779,
                                        27.964294439780197
                                    ],
                                    [
                                        57.57560228699779,
                                        26.3134074357786
                                    ],
                                    [
                                        59.43109347806487,
                                        26.3134074357786
                                    ],
                                    [
                                        59.43109347806487,
                                        27.964294439780197
                                    ],
                                    [
                                        57.57560228699779,
                                        27.964294439780197
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
                                    58.5102,
                                    27.1419
                                ],
                                [
                                    63.73,
                                    41.67
                                ],
                                [
                                    64.08902711064734,
                                    41.63182144492648
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
                    "asset": "a801",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a915",
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
                            "name": "f-blue//5.747989167804917//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    39.937,
                                    37.5717
                                ],
                                [
                                    50.03,
                                    31
                                ],
                                [
                                    59.58,
                                    24.88
                                ],
                                [
                                    59.7183690827196,
                                    24.92080290907068
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
                    "asset": "a910",
                    "number": 1
                },
                {
                    "asset": "a999",
                    "number": 2
                },
                {
                    "asset": "a927",
                    "number": 2
                },
                {
                    "asset": "a977",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a813",
                    "number": 3
                },
                {
                    "asset": "a848",
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
                                    58.70559142877407,
                                    27.096006294591653
                                ],
                                [
                                    71.3,
                                    28.8
                                ],
                                [
                                    71.1881,
                                    29.1576
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
                                        66.85305208833522,
                                        32.735794216333886
                                    ],
                                    [
                                        66.85305208833522,
                                        25.449394339519767
                                    ],
                                    [
                                        75.22597995558947,
                                        25.449394339519767
                                    ],
                                    [
                                        75.22597995558947,
                                        32.735794216333886
                                    ],
                                    [
                                        66.85305208833522,
                                        32.735794216333886
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
                                    71.1881,
                                    29.1576
                                ],
                                [
                                    67.35,
                                    28.75
                                ],
                                [
                                    62.63,
                                    27.47
                                ],
                                [
                                    58.2,
                                    27.47
                                ],
                                [
                                    58.70559142877407,
                                    27.096006294591653
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
                    "asset": "a977",
                    "number": 0
                },
                {
                    "asset": "a955",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a813",
                    "number": 2
                },
                {
                    "asset": "a848",
                    "number": 3
                },
                {
                    "asset": "a809",
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
                                    58.31688047325408,
                                    27.08953071088588
                                ],
                                [
                                    67.13,
                                    35.64
                                ],
                                [
                                    76.22,
                                    43.47
                                ],
                                [
                                    84.6,
                                    51.58
                                ],
                                [
                                    84.6587,
                                    51.9617
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
                                        80.60788978524594,
                                        54.26057577912807
                                    ],
                                    [
                                        80.60788978524594,
                                        49.53761609521913
                                    ],
                                    [
                                        88.30413894130399,
                                        49.53761609521913
                                    ],
                                    [
                                        88.30413894130399,
                                        54.26057577912807
                                    ],
                                    [
                                        80.60788978524594,
                                        54.26057577912807
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
                                    84.6587,
                                    51.9617
                                ],
                                [
                                    78.44,
                                    45.65
                                ],
                                [
                                    71.01,
                                    39.12
                                ],
                                [
                                    64.86,
                                    32.88
                                ],
                                [
                                    58,
                                    26.92
                                ],
                                [
                                    58.31688047325408,
                                    27.08953071088588
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
                    "asset": "a992",
                    "number": 2
                },
                {
                    "asset": "a956",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a813",
                    "number": 3
                },
                {
                    "asset": "a848",
                    "number": 4
                },
                {
                    "asset": "a809",
                    "number": 0
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
                                    28.4284,
                                    10.6514
                                ],
                                [
                                    34.1,
                                    22.04
                                ],
                                [
                                    39.95,
                                    32.59
                                ],
                                [
                                    45.08,
                                    43.43
                                ],
                                [
                                    45.1157,
                                    43.617
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
                                        43.72103615552222,
                                        44.60162295927001
                                    ],
                                    [
                                        43.72103615552222,
                                        42.61597205098563
                                    ],
                                    [
                                        46.46505681815357,
                                        42.61597205098563
                                    ],
                                    [
                                        46.46505681815357,
                                        44.60162295927001
                                    ],
                                    [
                                        43.72103615552222,
                                        44.60162295927001
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
                                        39.778908574167076,
                                        47.12831508650575
                                    ],
                                    [
                                        39.778908574167076,
                                        39.885370255954186
                                    ],
                                    [
                                        49.846144949647915,
                                        39.885370255954186
                                    ],
                                    [
                                        49.846144949647915,
                                        47.12831508650575
                                    ],
                                    [
                                        39.778908574167076,
                                        47.12831508650575
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
                                    45.1157,
                                    43.617
                                ],
                                [
                                    36.71,
                                    27.22
                                ],
                                [
                                    28.71,
                                    10.24
                                ],
                                [
                                    28.4284,
                                    10.6514
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
                    "asset": "a864",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a915",
                    "number": 2
                },
                {
                    "asset": "a912",
                    "number": 4
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
                                    68.73009976193539,
                                    50.6036744725445
                                ],
                                [
                                    58.62,
                                    44.75
                                ],
                                [
                                    49.36,
                                    37.74
                                ],
                                [
                                    39.38,
                                    32.02
                                ],
                                [
                                    29.69,
                                    25.58
                                ],
                                [
                                    29.3246,
                                    25.5549
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
                                        26.097427321217317,
                                        28.359879900484007
                                    ],
                                    [
                                        26.097427321217317,
                                        22.68245288945094
                                    ],
                                    [
                                        32.40236179088029,
                                        22.68245288945094
                                    ],
                                    [
                                        32.40236179088029,
                                        28.359879900484007
                                    ],
                                    [
                                        26.097427321217317,
                                        28.359879900484007
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
                                    29.3246,
                                    25.5549
                                ],
                                [
                                    42.24,
                                    33.46
                                ],
                                [
                                    55.41,
                                    42.62
                                ],
                                [
                                    68.86,
                                    51.07
                                ],
                                [
                                    68.73009976193539,
                                    50.6036744725445
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
                    "asset": "a988",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a813",
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
                                    38.7466,
                                    11.0743
                                ],
                                [
                                    51.19,
                                    17.08
                                ],
                                [
                                    62.87,
                                    23.3
                                ],
                                [
                                    74.82,
                                    28.81
                                ],
                                [
                                    74.6702,
                                    29.3023
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
                                        74.06406417234918,
                                        29.826779114389122
                                    ],
                                    [
                                        74.06406417234918,
                                        28.775112155161928
                                    ],
                                    [
                                        75.27012375113604,
                                        28.775112155161928
                                    ],
                                    [
                                        75.27012375113604,
                                        29.826779114389122
                                    ],
                                    [
                                        74.06406417234918,
                                        29.826779114389122
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
                                    74.6702,
                                    29.3023
                                ],
                                [
                                    65.3,
                                    24.25
                                ],
                                [
                                    56.79,
                                    20.06
                                ],
                                [
                                    47.57,
                                    15.16
                                ],
                                [
                                    38.64,
                                    11.55
                                ],
                                [
                                    38.7466,
                                    11.0743
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
                    "asset": "a917",
                    "number": 3,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a995",
                    "number": 4,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a1000",
                    "number": 0,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "a932",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a813",
                    "number": 3,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "a848",
                    "number": 5,
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
                    "asset": "a826",
                    "number": 3
                },
                {
                    "asset": "a896",
                    "number": 2
                },
                {
                    "asset": "a885",
                    "number": 3
                },
                {
                    "asset": "a845",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a915",
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
                                    82.4565,
                                    32.264
                                ],
                                [
                                    76.99,
                                    28.55
                                ],
                                [
                                    71.42,
                                    24.74
                                ],
                                [
                                    66.14,
                                    20.21
                                ],
                                [
                                    61.14,
                                    16.96
                                ],
                                [
                                    61.1572,
                                    16.6385
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
                                        59.75457191799607,
                                        17.968030359556796
                                    ],
                                    [
                                        59.75457191799607,
                                        15.299679944722339
                                    ],
                                    [
                                        62.54044011930549,
                                        15.299679944722339
                                    ],
                                    [
                                        62.54044011930549,
                                        17.968030359556796
                                    ],
                                    [
                                        59.75457191799607,
                                        17.968030359556796
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
                                    61.1572,
                                    16.6385
                                ],
                                [
                                    66.02,
                                    20.26
                                ],
                                [
                                    71.68,
                                    24.67
                                ],
                                [
                                    76.63,
                                    28.37
                                ],
                                [
                                    82.86,
                                    32.36
                                ],
                                [
                                    82.4565,
                                    32.264
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
                    "asset": "a902",
                    "number": 0
                },
                {
                    "asset": "a947",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a813",
                    "number": 2
                },
                {
                    "asset": "a848",
                    "number": 2
                },
                {
                    "asset": "a809",
                    "number": 4
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
                                    63.7465,
                                    20.1043
                                ],
                                [
                                    61.04,
                                    23.74
                                ],
                                [
                                    58.63,
                                    26.67
                                ],
                                [
                                    55.49,
                                    29.88
                                ],
                                [
                                    55.5546,
                                    30.2753
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
                                        52.92951645149081,
                                        32.464332860201516
                                    ],
                                    [
                                        52.92951645149081,
                                        28.03620784500599
                                    ],
                                    [
                                        58.06384133857516,
                                        28.03620784500599
                                    ],
                                    [
                                        58.06384133857516,
                                        32.464332860201516
                                    ],
                                    [
                                        52.92951645149081,
                                        32.464332860201516
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
                                    55.5546,
                                    30.2753
                                ],
                                [
                                    59.49,
                                    25.37
                                ],
                                [
                                    63.84,
                                    19.88
                                ],
                                [
                                    63.7465,
                                    20.1043
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
                    "asset": "a924",
                    "number": 4
                },
                {
                    "asset": "a956",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a813",
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
                                    56.6099,
                                    9.4257
                                ],
                                [
                                    55.37,
                                    16.03
                                ],
                                [
                                    54.12,
                                    22.62
                                ],
                                [
                                    53.15,
                                    29.49
                                ],
                                [
                                    51.46,
                                    35.64
                                ],
                                [
                                    51.9384,
                                    36.0488
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
                                        51.377947245856426,
                                        36.49803593854321
                                    ],
                                    [
                                        51.377947245856426,
                                        35.59698534295567
                                    ],
                                    [
                                        52.492474117106475,
                                        35.59698534295567
                                    ],
                                    [
                                        52.492474117106475,
                                        36.49803593854321
                                    ],
                                    [
                                        51.377947245856426,
                                        36.49803593854321
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
                                    51.9384,
                                    36.0488
                                ],
                                [
                                    56.78,
                                    9.65
                                ],
                                [
                                    56.6099,
                                    9.4257
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
                    "asset": "a910",
                    "number": 0,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "a953",
                    "number": 3,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a813",
                    "number": 4,
                    "missileType": "SRBM"
                },
                {
                    "asset": "a848",
                    "number": 5,
                    "missileType": "IRBM"
                },
                {
                    "asset": "a809",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_143",
        "_rev": "2"
    }
]