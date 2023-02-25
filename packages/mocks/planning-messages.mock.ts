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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-22T15:47:41.086Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-2",
            "title": "Order item 6",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T04:35:00.000Z",
            "activity": "f-blue-Air-Defensive Counter Air",
            "ownAssets": [
                {
                    "asset": "Blue.11.64",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                },
                {
                    "asset": "Green.4.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Defensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Defensive Counter Air//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Defensive Counter Air-0",
                            "name": "f-blue//3.105222334795144//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.1486,
                                    39.4751
                                ],
                                [
                                    44.9,
                                    42.8
                                ],
                                [
                                    57.02,
                                    45.49
                                ],
                                [
                                    56.7332,
                                    45.8166
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T02:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651373700000,
                            "geomId": "Defensive Counter Air-1",
                            "name": "f-blue//6.210444669590288//DCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        55.80321276760422,
                                        46.45356373650701
                                    ],
                                    [
                                        55.80321276760422,
                                        45.17226314963616
                                    ],
                                    [
                                        57.64203198960384,
                                        45.17226314963616
                                    ],
                                    [
                                        57.64203198960384,
                                        46.45356373650701
                                    ],
                                    [
                                        55.80321276760422,
                                        46.45356373650701
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
                            "startDate": "2022-05-01T02:55:00.000Z",
                            "endDate": "2022-05-01T04:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373700000,
                            "endTime": 1651379700000,
                            "geomId": "Defensive Counter Air-2",
                            "name": "f-blue//9.315667004385432//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    56.7332,
                                    45.8166
                                ],
                                [
                                    48.61,
                                    43.32
                                ],
                                [
                                    40.73,
                                    42.08
                                ],
                                [
                                    33.13,
                                    39.12
                                ],
                                [
                                    33.1486,
                                    39.4751
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
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-27T19:41:04.380Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-5",
            "title": "Order item 9",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T04:55:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.6.372",
                    "number": 1
                },
                {
                    "asset": "Green.5.301",
                    "number": 1
                },
                {
                    "asset": "Green.13.344",
                    "number": 4
                },
                {
                    "asset": "Green.8.100",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.10.351"
                },
                {
                    "asset": "Blue.4.50"
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
                            "force": "f-green",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//3.8121305503746044//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    29.8135,
                                    4.3762
                                ],
                                [
                                    35.25,
                                    12.32
                                ],
                                [
                                    39.59,
                                    21.16
                                ],
                                [
                                    45.21,
                                    29.29
                                ],
                                [
                                    50.12,
                                    36.7
                                ],
                                [
                                    50.3286,
                                    37.2001
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
                            "force": "f-green",
                            "startTime": 1651366500000,
                            "endTime": 1651374900000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//7.624261100749209//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        46.243439998221284,
                                        40.24966553888385
                                    ],
                                    [
                                        46.243439998221284,
                                        34.02132139294264
                                    ],
                                    [
                                        54.08997696446518,
                                        34.02132139294264
                                    ],
                                    [
                                        54.08997696446518,
                                        40.24966553888385
                                    ],
                                    [
                                        46.243439998221284,
                                        40.24966553888385
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
                            "force": "f-green",
                            "startTime": 1651374900000,
                            "endTime": 1651380900000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//11.436391651123813//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    50.3286,
                                    37.2001
                                ],
                                [
                                    43.5,
                                    25.89
                                ],
                                [
                                    36.77,
                                    15.69
                                ],
                                [
                                    29.33,
                                    4.77
                                ],
                                [
                                    29.8135,
                                    4.3762
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_5",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-29T05:18:28.464Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-8",
            "title": "Order item 12",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T03:15:00.000Z",
            "activity": "f-blue-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Blue.13.100",
                    "number": 0
                },
                {
                    "asset": "Blue.6.369",
                    "number": 3
                },
                {
                    "asset": "Blue.4.351",
                    "number": 3
                },
                {
                    "asset": "Blue.7.46",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                },
                {
                    "asset": "Green.4.351"
                },
                {
                    "asset": "Red.8.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Raid-0",
                            "name": "f-blue//3.412459935258994//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0852,
                                    52.2171
                                ],
                                [
                                    40.3,
                                    38.49
                                ],
                                [
                                    41.59,
                                    23.85
                                ],
                                [
                                    43.17,
                                    10.5
                                ],
                                [
                                    43.678,
                                    10.0519
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T02:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651373700000,
                            "geomId": "Raid-1",
                            "name": "f-blue//6.824919870517988//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        43.42627935363535,
                                        10.29946961144367
                                    ],
                                    [
                                        43.42627935363535,
                                        9.804140619129738
                                    ],
                                    [
                                        43.92933519275947,
                                        9.804140619129738
                                    ],
                                    [
                                        43.92933519275947,
                                        10.29946961144367
                                    ],
                                    [
                                        43.42627935363535,
                                        10.29946961144367
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
                            "startDate": "2022-05-01T02:55:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373700000,
                            "endTime": 1651374900000,
                            "geomId": "Raid-2",
                            "name": "f-blue//10.237379805776982//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.678,
                                    10.0519
                                ],
                                [
                                    41.11,
                                    30.99
                                ],
                                [
                                    37.93,
                                    52.31
                                ],
                                [
                                    38.0852,
                                    52.2171
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
            "messageType": "Air--TST",
            "timestamp": "2022-09-26T20:39:53.339Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-11",
            "title": "Order item 15",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T05:35:00.000Z",
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "Red.3.46",
                    "number": 0
                },
                {
                    "asset": "Red.7.255",
                    "number": 0
                },
                {
                    "asset": "Red.3.177",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.4.351"
                },
                {
                    "asset": "Blue.4.50"
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
                            "name": "f-red//6.906210489443765//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0615,
                                    35.1056
                                ],
                                [
                                    45.94,
                                    19.25
                                ],
                                [
                                    29.13,
                                    2.69
                                ],
                                [
                                    28.9223,
                                    2.8115
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
                            "endDate": "2022-05-01T03:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651366500000,
                            "endTime": 1651374300000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-red//13.81242097888753//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        25.21540642617375,
                                        6.488760371022555
                                    ],
                                    [
                                        25.21540642617375,
                                        -0.8774317837456476
                                    ],
                                    [
                                        32.60584702795845,
                                        -0.8774317837456476
                                    ],
                                    [
                                        32.60584702795845,
                                        6.488760371022555
                                    ],
                                    [
                                        25.21540642617375,
                                        6.488760371022555
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
                            "startDate": "2022-05-01T03:05:00.000Z",
                            "endDate": "2022-05-01T05:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651374300000,
                            "endTime": 1651383300000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-red//20.718631468331296//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.9223,
                                    2.8115
                                ],
                                [
                                    40.78,
                                    13.87
                                ],
                                [
                                    51.68,
                                    23.96
                                ],
                                [
                                    62.87,
                                    35.34
                                ],
                                [
                                    63.0615,
                                    35.1056
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-29T01:45:19.005Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-14",
            "title": "Order item 18",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-blue-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.7.213",
                    "number": 5
                },
                {
                    "asset": "Blue.3.362",
                    "number": 3
                },
                {
                    "asset": "Blue.7.223",
                    "number": 0
                },
                {
                    "asset": "Blue.9.199",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                },
                {
                    "asset": "Green.4.351"
                },
                {
                    "asset": "Red.8.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//4.293382212938013//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.175414508490405,
                                        12.172403771993137
                                    ],
                                    [
                                        48.175414508490405,
                                        8.441734810797483
                                    ],
                                    [
                                        51.96950596691544,
                                        8.441734810797483
                                    ],
                                    [
                                        51.96950596691544,
                                        12.172403771993137
                                    ],
                                    [
                                        48.175414508490405,
                                        12.172403771993137
                                    ]
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-27T12:34:45.461Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-17",
            "title": "Order item 21",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T06:55:00.000Z",
            "activity": "f-blue-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "Blue.9.199",
                    "number": 0
                },
                {
                    "asset": "Blue.11.287",
                    "number": 3
                },
                {
                    "asset": "Blue.12.89",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                },
                {
                    "asset": "Green.4.351"
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
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Offensive Counter Air-0",
                            "name": "f-blue//5.573975105719001//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.8674,
                                    46.6467
                                ],
                                [
                                    45.61,
                                    37.99
                                ],
                                [
                                    48.41,
                                    29.4
                                ],
                                [
                                    51.5,
                                    21.09
                                ],
                                [
                                    51.7642,
                                    20.8273
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
                            "endDate": "2022-05-01T04:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651377900000,
                            "geomId": "Offensive Counter Air-1",
                            "name": "f-blue//11.147950211438001//OCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        50.876073695524994,
                                        21.650491115409
                                    ],
                                    [
                                        50.876073695524994,
                                        19.99958387226094
                                    ],
                                    [
                                        52.64264429586857,
                                        19.99958387226094
                                    ],
                                    [
                                        52.64264429586857,
                                        21.650491115409
                                    ],
                                    [
                                        50.876073695524994,
                                        21.650491115409
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
                            "startDate": "2022-05-01T04:05:00.000Z",
                            "endDate": "2022-05-01T06:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651377900000,
                            "endTime": 1651388100000,
                            "geomId": "Offensive Counter Air-2",
                            "name": "f-blue//16.721925317157//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.7642,
                                    20.8273
                                ],
                                [
                                    42.51,
                                    46.68
                                ],
                                [
                                    42.8674,
                                    46.6467
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
            "messageType": "Space--Effects",
            "timestamp": "2022-09-22T05:08:12.707Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-20",
            "title": "Order item 24",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-red-Space-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Red.4.4",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
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
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Maritime--MissileStrike",
            "timestamp": "2022-09-28T13:19:15.896Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-23",
            "title": "Order item 32",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T02:05:00.000Z",
            "activity": "f-green-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Green.13.29",
                    "number": 0,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.12.397",
                    "number": 2,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.5.78",
                    "number": 0,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "Green.8.273",
                    "number": 3,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "MRBM",
                    "number": 2
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_23",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-25T07:27:09.572Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-26",
            "title": "Order item 30",
            "startDate": "2022-05-01T00:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.8.273",
                    "number": 1
                },
                {
                    "asset": "Green.11.181",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.10.351"
                },
                {
                    "asset": "Blue.4.50"
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
                            "force": "f-green",
                            "startTime": 1651363800000,
                            "endTime": 1651366800000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//2.7762807999097276//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    50.3947,
                                    19.639
                                ],
                                [
                                    61.17,
                                    19.48
                                ],
                                [
                                    72.23,
                                    18.6
                                ],
                                [
                                    82.56,
                                    18
                                ],
                                [
                                    82.6208,
                                    18.3762
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
                            "force": "f-green",
                            "startTime": 1651366800000,
                            "endTime": 1651369800000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//5.552561599819455//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        80.09231394838602,
                                        20.724516640387634
                                    ],
                                    [
                                        80.09231394838602,
                                        15.995405270977308
                                    ],
                                    [
                                        85.08087845202705,
                                        15.995405270977308
                                    ],
                                    [
                                        85.08087845202705,
                                        20.724516640387634
                                    ],
                                    [
                                        80.09231394838602,
                                        20.724516640387634
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
                            "force": "f-green",
                            "startTime": 1651369800000,
                            "endTime": 1651377600000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//8.328842399729183//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    82.6208,
                                    18.3762
                                ],
                                [
                                    74.93,
                                    18.59
                                ],
                                [
                                    66.03,
                                    18.6
                                ],
                                [
                                    58.41,
                                    18.9
                                ],
                                [
                                    50.08,
                                    19.47
                                ],
                                [
                                    50.3947,
                                    19.639
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_26",
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
            "timestamp": "2022-09-25T09:12:39.190Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-29",
            "title": "Order item 33",
            "startDate": "2022-05-01T00:30:00.000Z",
            "endDate": "2022-05-01T01:20:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.5.337",
                    "number": 0
                },
                {
                    "asset": "Green.2.184",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.10.351"
                },
                {
                    "asset": "Blue.4.50"
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
                            "force": "f-green",
                            "startTime": 1651365000000,
                            "endTime": 1651368000000,
                            "geomId": "Transit-0",
                            "name": "f-green//4.630558369892242//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.9292,
                                    22.4782
                                ],
                                [
                                    42.79,
                                    26.53
                                ],
                                [
                                    38.83,
                                    29.76
                                ],
                                [
                                    34.15,
                                    33.26
                                ],
                                [
                                    34.1889,
                                    33.4511
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_29",
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
            "messageType": "f-blue--Maritime--MissileStrike",
            "timestamp": "2022-09-27T14:16:38.039Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-32",
            "title": "Order item 40",
            "startDate": "2022-05-01T00:45:00.000Z",
            "endDate": "2022-05-01T02:05:00.000Z",
            "activity": "f-blue-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Blue.2.220",
                    "number": 4,
                    "missileType": "Propellor OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78",
                    "missileType": "IRBM",
                    "number": 4
                },
                {
                    "asset": "Green.4.351",
                    "missileType": "Standard Cruise",
                    "number": 2
                },
                {
                    "asset": "Red.8.50",
                    "missileType": "SRBM",
                    "number": 3
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
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-22T13:55:40.797Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-35",
            "title": "Order item 39",
            "startDate": "2022-05-01T00:45:00.000Z",
            "endDate": "2022-05-01T01:35:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.8.322",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
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
                            "force": "f-green",
                            "startTime": 1651365900000,
                            "endTime": 1651368900000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.019377017772058//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    27.8877,
                                    27.4384
                                ],
                                [
                                    36.47,
                                    32.91
                                ],
                                [
                                    44.28,
                                    38.6
                                ],
                                [
                                    52.37,
                                    43.58
                                ],
                                [
                                    52.2191,
                                    44.0692
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_35",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-28T00:53:12.787Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-38",
            "title": "Order item 42",
            "startDate": "2022-05-01T00:50:00.000Z",
            "endDate": "2022-05-01T04:30:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.6.245",
                    "number": 1
                },
                {
                    "asset": "Green.3.312",
                    "number": 3
                },
                {
                    "asset": "Green.13.92",
                    "number": 5
                },
                {
                    "asset": "Green.1.386",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.10.351"
                },
                {
                    "asset": "Blue.4.50"
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
                            "force": "f-green",
                            "startTime": 1651366200000,
                            "endTime": 1651369200000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//3.55391809566936//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    49.0898,
                                    19.4187
                                ],
                                [
                                    44.42,
                                    24.82
                                ],
                                [
                                    41,
                                    30.48
                                ],
                                [
                                    35.87,
                                    36.42
                                ],
                                [
                                    36.3289,
                                    36.3491
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
                            "force": "f-green",
                            "startTime": 1651369200000,
                            "endTime": 1651372200000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//7.10783619133872//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.73034164452555,
                                        39.08940657948502
                                    ],
                                    [
                                        32.73034164452555,
                                        33.508333559090495
                                    ],
                                    [
                                        39.67838891995837,
                                        33.508333559090495
                                    ],
                                    [
                                        39.67838891995837,
                                        39.08940657948502
                                    ],
                                    [
                                        32.73034164452555,
                                        39.08940657948502
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
                            "force": "f-green",
                            "startTime": 1651372200000,
                            "endTime": 1651379400000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//10.66175428700808//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.3289,
                                    36.3491
                                ],
                                [
                                    42.7,
                                    27.75
                                ],
                                [
                                    49.57,
                                    19.65
                                ],
                                [
                                    49.0898,
                                    19.4187
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_38",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-29T17:34:45.567Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-41",
            "title": "Order item 45",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-blue-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Blue.9.386",
                    "number": 3
                },
                {
                    "asset": "Blue.13.393",
                    "number": 1
                },
                {
                    "asset": "Blue.2.113",
                    "number": 3
                },
                {
                    "asset": "Blue.13.347",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Raid-0",
                            "name": "f-blue//5.981880342907971//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.202,
                                    29.5448
                                ],
                                [
                                    49.97,
                                    21.94
                                ],
                                [
                                    49.9296,
                                    22.2955
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651370400000,
                            "geomId": "Raid-1",
                            "name": "f-blue//11.963760685815942//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.914641394957016,
                                        23.225067229288456
                                    ],
                                    [
                                        48.914641394957016,
                                        21.359705364510734
                                    ],
                                    [
                                        50.93109877057359,
                                        21.359705364510734
                                    ],
                                    [
                                        50.93109877057359,
                                        23.225067229288456
                                    ],
                                    [
                                        48.914641394957016,
                                        23.225067229288456
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651377600000,
                            "geomId": "Raid-2",
                            "name": "f-blue//17.945641028723912//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    49.9296,
                                    22.2955
                                ],
                                [
                                    44.23,
                                    25.9
                                ],
                                [
                                    37.89,
                                    29.85
                                ],
                                [
                                    38.202,
                                    29.5448
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
            "messageType": "Air--Transit",
            "timestamp": "2022-09-27T16:00:19.138Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-44",
            "title": "Order item 48",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T02:00:00.000Z",
            "activity": "f-red-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Red.2.347",
                    "number": 4
                },
                {
                    "asset": "Red.2.294",
                    "number": 5
                },
                {
                    "asset": "Red.3.354",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.4.351"
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
                            "force": "f-red",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Transit-0",
                            "name": "f-red//2.303263759415131//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0615,
                                    35.1056
                                ],
                                [
                                    57.68,
                                    29.42
                                ],
                                [
                                    52.17,
                                    24.6
                                ],
                                [
                                    45.93,
                                    19.06
                                ],
                                [
                                    39.98,
                                    12.8
                                ],
                                [
                                    40.2837,
                                    13.124
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
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "SOF--SOFActivity",
            "timestamp": "2022-09-21T20:09:53.499Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-47",
            "title": "Order item 51",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T05:10:00.000Z",
            "activity": "f-red-SOF-Activity",
            "ownAssets": [
                {
                    "asset": "Red.8.128",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.4.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Activity-0",
                            "name": "f-red//2.5180683452636003//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    80.7173,
                                    35.7354
                                ],
                                [
                                    72.91,
                                    28.45
                                ],
                                [
                                    65.95,
                                    20
                                ],
                                [
                                    58.28,
                                    12.84
                                ],
                                [
                                    49.88,
                                    4.97
                                ],
                                [
                                    50.2383,
                                    5.2074
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Activity-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Effect Location",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651375800000,
                            "geomId": "Activity-1",
                            "name": "f-red//5.036136690527201//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        47.56073543409809,
                                        7.85419819264447
                                    ],
                                    [
                                        47.56073543409809,
                                        2.5493888310420747
                                    ],
                                    [
                                        52.89335806088641,
                                        2.5493888310420747
                                    ],
                                    [
                                        52.89335806088641,
                                        7.85419819264447
                                    ],
                                    [
                                        47.56073543409809,
                                        7.85419819264447
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Activity-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route back",
                            "startDate": "2022-05-01T03:30:00.000Z",
                            "endDate": "2022-05-01T05:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651375800000,
                            "endTime": 1651381800000,
                            "geomId": "Activity-2",
                            "name": "f-red//7.554205035790801//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    50.2383,
                                    5.2074
                                ],
                                [
                                    65.9,
                                    20.24
                                ],
                                [
                                    80.88,
                                    35.61
                                ],
                                [
                                    80.7173,
                                    35.7354
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
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Air--Activity",
            "timestamp": "2022-09-28T22:03:28.651Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-50",
            "title": "Order item 54",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T04:40:00.000Z",
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Red.8.128",
                    "number": 5
                },
                {
                    "asset": "Red.3.354",
                    "number": 3
                },
                {
                    "asset": "Red.2.294",
                    "number": 3
                },
                {
                    "asset": "Red.2.347",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.4.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//6.6262941003078595//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    67.4128,
                                    48.9302
                                ],
                                [
                                    52.01,
                                    46.02
                                ],
                                [
                                    37.87,
                                    43.37
                                ],
                                [
                                    22.02,
                                    40.99
                                ],
                                [
                                    22.4774,
                                    40.9314
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T04:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651378800000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//13.252588200615719//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        18.100761548079465,
                                        43.99938697642196
                                    ],
                                    [
                                        18.100761548079465,
                                        37.71286344083877
                                    ],
                                    [
                                        26.456475307261336,
                                        37.71286344083877
                                    ],
                                    [
                                        26.456475307261336,
                                        43.99938697642196
                                    ],
                                    [
                                        18.100761548079465,
                                        43.99938697642196
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
                            "startDate": "2022-05-01T04:20:00.000Z",
                            "endDate": "2022-05-01T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651378800000,
                            "endTime": 1651380000000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//19.87888230092358//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.4774,
                                    40.9314
                                ],
                                [
                                    44.72,
                                    45.12
                                ],
                                [
                                    67.41,
                                    48.75
                                ],
                                [
                                    67.4128,
                                    48.9302
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
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-23T21:41:04.593Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-53",
            "title": "Order item 57",
            "startDate": "2022-05-01T01:20:00.000Z",
            "endDate": "2022-05-01T05:00:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.10.347",
                    "number": 1
                },
                {
                    "asset": "Green.6.113",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
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
                            "force": "f-green",
                            "startTime": 1651368000000,
                            "endTime": 1651371000000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//4.627941024693428//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.2261,
                                    19.1219
                                ],
                                [
                                    36.54,
                                    20.71
                                ],
                                [
                                    50.05,
                                    22.5
                                ],
                                [
                                    63.84,
                                    23.57
                                ],
                                [
                                    63.6855,
                                    24.0157
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
                            "force": "f-green",
                            "startTime": 1651371000000,
                            "endTime": 1651381200000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//9.255882049386855//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        60.57914793562826,
                                        26.758494811242485
                                    ],
                                    [
                                        60.57914793562826,
                                        21.212940121581465
                                    ],
                                    [
                                        66.66067918102463,
                                        21.212940121581465
                                    ],
                                    [
                                        66.66067918102463,
                                        26.758494811242485
                                    ],
                                    [
                                        60.57914793562826,
                                        26.758494811242485
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
                            "force": "f-green",
                            "startTime": 1651381200000,
                            "endTime": 1651381200000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//13.883823074080283//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.6855,
                                    24.0157
                                ],
                                [
                                    43.05,
                                    21.32
                                ],
                                [
                                    21.92,
                                    19.13
                                ],
                                [
                                    22.2261,
                                    19.1219
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_53",
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
            "messageType": "Space--AreaEffects",
            "timestamp": "2022-09-23T11:02:41.326Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-56",
            "title": "Order item 60",
            "startDate": "2022-05-01T01:30:00.000Z",
            "endDate": "2022-05-01T02:20:00.000Z",
            "activity": "f-red-Space-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.9.386",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.4.351"
                },
                {
                    "asset": "Blue.4.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T01:30:00.000Z",
                            "endDate": "2022-05-01T02:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651368600000,
                            "endTime": 1651371600000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//6.523009118420305//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        45.19460677327094,
                                        36.52686197670951
                                    ],
                                    [
                                        45.19460677327094,
                                        32.592477635287665
                                    ],
                                    [
                                        49.979325425469426,
                                        32.592477635287665
                                    ],
                                    [
                                        49.979325425469426,
                                        36.52686197670951
                                    ],
                                    [
                                        45.19460677327094,
                                        36.52686197670951
                                    ]
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
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Maritime--EWAttack",
            "timestamp": "2022-09-27T14:08:18.849Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-59",
            "title": "Order item 63",
            "startDate": "2022-05-01T01:50:00.000Z",
            "endDate": "2022-05-01T04:50:00.000Z",
            "activity": "f-red-Maritime-EW Attack",
            "ownAssets": [
                {
                    "asset": "Red.13.244",
                    "number": 5
                },
                {
                    "asset": "Red.5.290",
                    "number": 5
                },
                {
                    "asset": "Red.8.50",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
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
                            "force": "f-red",
                            "startTime": 1651369800000,
                            "endTime": 1651372800000,
                            "geomId": "EW Attack-0",
                            "name": "f-red//2.311498381488491//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0615,
                                    35.1056
                                ],
                                [
                                    50.66,
                                    36.44
                                ],
                                [
                                    37.61,
                                    38.12
                                ],
                                [
                                    37.9664,
                                    37.779
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
                            "force": "f-red",
                            "startTime": 1651372800000,
                            "endTime": 1651374000000,
                            "geomId": "EW Attack-1",
                            "name": "f-red//4.622996762976982//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.862620393296595,
                                        41.495107860233034
                                    ],
                                    [
                                        32.862620393296595,
                                        33.86422418571749
                                    ],
                                    [
                                        42.56903923282164,
                                        33.86422418571749
                                    ],
                                    [
                                        42.56903923282164,
                                        41.495107860233034
                                    ],
                                    [
                                        32.862620393296595,
                                        41.495107860233034
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
                            "force": "f-red",
                            "startTime": 1651374000000,
                            "endTime": 1651380600000,
                            "geomId": "EW Attack-2",
                            "name": "f-red//6.9344951444654725//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.9664,
                                    37.779
                                ],
                                [
                                    50.5,
                                    36.63
                                ],
                                [
                                    63.38,
                                    34.81
                                ],
                                [
                                    63.0615,
                                    35.1056
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
            "messageType": "Land--Activity",
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
                    "asset": "Green.8.322",
                    "number": 3
                },
                {
                    "asset": "Green.6.308",
                    "number": 5
                },
                {
                    "asset": "Green.12.7",
                    "number": 2
                },
                {
                    "asset": "Green.4.219",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.10.351"
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
                                    50.9985,
                                    25.5738
                                ],
                                [
                                    59.63,
                                    36.36
                                ],
                                [
                                    67.67,
                                    47.54
                                ],
                                [
                                    67.2815,
                                    48.0462
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
                                        65.73269204643131,
                                        49.050994182583594
                                    ],
                                    [
                                        65.73269204643131,
                                        47.021392175103934
                                    ],
                                    [
                                        68.77045662462525,
                                        47.021392175103934
                                    ],
                                    [
                                        68.77045662462525,
                                        49.050994182583594
                                    ],
                                    [
                                        65.73269204643131,
                                        49.050994182583594
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
                                    67.2815,
                                    48.0462
                                ],
                                [
                                    50.52,
                                    25.68
                                ],
                                [
                                    50.9985,
                                    25.5738
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-24T13:31:36.267Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-65",
            "title": "Order item 69",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T07:40:00.000Z",
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Blue.10.219",
                    "number": 4
                },
                {
                    "asset": "Blue.7.145",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                },
                {
                    "asset": "Green.4.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-blue//5.568740415357752//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.3865,
                                    49.994
                                ],
                                [
                                    35.51,
                                    35.23
                                ],
                                [
                                    46.12,
                                    20.95
                                ],
                                [
                                    46.4781,
                                    20.8676
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651380600000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-blue//11.137480830715504//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        43.84567463854559,
                                        23.26602247516076
                                    ],
                                    [
                                        43.84567463854559,
                                        18.43019813061732
                                    ],
                                    [
                                        49.02714742997096,
                                        18.43019813061732
                                    ],
                                    [
                                        49.02714742997096,
                                        23.26602247516076
                                    ],
                                    [
                                        43.84567463854559,
                                        23.26602247516076
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
                            "startDate": "2022-05-01T04:50:00.000Z",
                            "endDate": "2022-05-01T07:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651380600000,
                            "endTime": 1651390800000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-blue//16.706221246073255//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.4781,
                                    20.8676
                                ],
                                [
                                    24.07,
                                    49.88
                                ],
                                [
                                    24.3865,
                                    49.994
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
            "messageType": "Air--Transit",
            "timestamp": "2022-09-25T17:49:16.162Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-68",
            "title": "Order item 72",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.11.336",
                    "number": 0
                },
                {
                    "asset": "Blue.9.202",
                    "number": 2
                },
                {
                    "asset": "Blue.6.180",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                },
                {
                    "asset": "Green.4.351"
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
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Transit-0",
                            "name": "f-blue//3.0374931863043457//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.1889,
                                    33.4511
                                ],
                                [
                                    43.8,
                                    34.46
                                ],
                                [
                                    53.61,
                                    34.67
                                ],
                                [
                                    62.71,
                                    35.17
                                ],
                                [
                                    63.0615,
                                    35.1056
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-23T03:50:56.847Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-71",
            "title": "Order item 75",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T07:10:00.000Z",
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "Blue.8.272",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
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
                            "name": "f-blue//4.399667126592249//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    35.3747,
                                    53.8192
                                ],
                                [
                                    38.45,
                                    39.88
                                ],
                                [
                                    41.58,
                                    27
                                ],
                                [
                                    43.99,
                                    13.4
                                ],
                                [
                                    44.4775,
                                    12.9064
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
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651381200000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//8.799334253184497//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.81039576056443,
                                        14.515033136515063
                                    ],
                                    [
                                        42.81039576056443,
                                        11.287342122821292
                                    ],
                                    [
                                        46.12321928459613,
                                        11.287342122821292
                                    ],
                                    [
                                        46.12321928459613,
                                        14.515033136515063
                                    ],
                                    [
                                        42.81039576056443,
                                        14.515033136515063
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
                            "startDate": "2022-05-01T05:00:00.000Z",
                            "endDate": "2022-05-01T07:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381200000,
                            "endTime": 1651389000000,
                            "geomId": "Mine Laying-2",
                            "name": "f-blue//13.199001379776746//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.4775,
                                    12.9064
                                ],
                                [
                                    40.12,
                                    33.31
                                ],
                                [
                                    35.12,
                                    54.07
                                ],
                                [
                                    35.3747,
                                    53.8192
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
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-25T03:36:38.323Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-74",
            "title": "Order item 78",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-red-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Red.5.28",
                    "number": 2
                },
                {
                    "asset": "Red.3.173",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.4.351"
                },
                {
                    "asset": "Blue.4.50"
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
                            "name": "f-red//4.6552622360759415//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.3402,
                                    20.5331
                                ],
                                [
                                    64.45,
                                    31.89
                                ],
                                [
                                    52.96,
                                    43.66
                                ],
                                [
                                    53.2784,
                                    43.4503
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
            "messageType": "f-blue--Land--MissileStrike",
            "timestamp": "2022-09-26T04:20:03.647Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-77",
            "title": "Order item 84",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T03:00:00.000Z",
            "activity": "f-blue-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Blue.2.3",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78",
                    "missileType": "SRBM",
                    "number": 5
                },
                {
                    "asset": "Green.4.351",
                    "missileType": "SRBM",
                    "number": 0
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
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-22T11:47:23.831Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-80",
            "title": "Order item 89",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T04:20:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.5.198",
                    "number": 3,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.13.223",
                    "number": 1,
                    "missileType": "MRBM"
                },
                {
                    "asset": "Green.8.361",
                    "number": 1,
                    "missileType": "Propellor OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Standard Cruise",
                    "number": 5
                },
                {
                    "asset": "Red.10.351",
                    "missileType": "Jet OWA UAV",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_80",
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
            "Reference": "Blue-83",
            "title": "Order item 87",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.10.212",
                    "number": 5
                },
                {
                    "asset": "Blue.3.177",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                },
                {
                    "asset": "Green.4.351"
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
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Transit-0",
                            "name": "f-blue//3.782574580574874//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.5311,
                                    50.1295
                                ],
                                [
                                    26.37,
                                    34.43
                                ],
                                [
                                    27.41,
                                    18.93
                                ],
                                [
                                    28.74,
                                    2.71
                                ],
                                [
                                    28.9223,
                                    2.8115
                                ]
                            ]
                        }
                    }
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
                    "asset": "Green.8.46",
                    "number": 4
                },
                {
                    "asset": "Green.12.350",
                    "number": 5
                },
                {
                    "asset": "Green.10.368",
                    "number": 4
                },
                {
                    "asset": "Green.11.99",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.10.351"
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
                                    25.1782,
                                    5.0508
                                ],
                                [
                                    25.96,
                                    14.29
                                ],
                                [
                                    26.69,
                                    23.46
                                ],
                                [
                                    26.7,
                                    32.92
                                ],
                                [
                                    27.99,
                                    42.66
                                ],
                                [
                                    27.8456,
                                    42.5851
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-28T16:25:17.560Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-89",
            "title": "Order item 93",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-red-Maritime-Sea Denial",
            "ownAssets": [
                {
                    "asset": "Red.11.99",
                    "number": 5
                },
                {
                    "asset": "Red.5.343",
                    "number": 2
                },
                {
                    "asset": "Red.6.300",
                    "number": 5
                },
                {
                    "asset": "Red.11.371",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Sea Denial-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Sea Denial//Area",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Sea Denial-0",
                            "name": "f-red//4.334555323177483//Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        25.314602912880726,
                                        6.39120036351814
                                    ],
                                    [
                                        25.314602912880726,
                                        -0.7792575374443451
                                    ],
                                    [
                                        32.50787799756416,
                                        -0.7792575374443451
                                    ],
                                    [
                                        32.50787799756416,
                                        6.39120036351814
                                    ],
                                    [
                                        25.314602912880726,
                                        6.39120036351814
                                    ]
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
            "timestamp": "2023-02-20T15:43:22.773Z",
            "turnNumber": 3,
            "counter": 1,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T00:55:00.000Z",
                "id": "umpire-1",
                "orders1": "m_f-blue_14",
                "orders2": "m_f-red_74",
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
        "_id": "2023-02-20T15:43:22.773Z//0"
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
            "timestamp": "2023-02-20T15:43:22.773Z",
            "turnNumber": 3,
            "counter": 2,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T02:20:00.000Z",
                "id": "umpire-2",
                "orders1": "m_f-blue_71",
                "orders2": "m_f-red_56",
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
        "_id": "2023-02-20T15:43:22.773Z//1"
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
            "timestamp": "2023-02-20T15:43:22.773Z",
            "turnNumber": 3,
            "counter": 3,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T02:20:00.000Z",
                "id": "umpire-3",
                "orders1": "m_f-blue_68",
                "orders2": "m_f-red_56",
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
        "_id": "2023-02-20T15:43:22.773Z//2"
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
            "timestamp": "2023-02-20T15:43:22.773Z",
            "turnNumber": 3,
            "counter": 4,
            "interaction": {
                "startTime": "2022-05-01T01:10:00.000Z",
                "endTime": "2022-05-01T04:00:00.000Z",
                "id": "umpire-4",
                "orders1": "m_f-blue_41",
                "orders2": "m_f-red_50",
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
        "_id": "2023-02-20T15:43:22.773Z//3"
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
            "timestamp": "2023-02-20T15:43:22.773Z",
            "turnNumber": 3,
            "counter": 5,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T02:00:00.000Z",
                "id": "umpire-5",
                "orders1": "m_f-blue_77",
                "orders2": "m_f-red_44",
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
        "_id": "2023-02-20T15:43:22.773Z//4"
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
            "timestamp": "2023-02-20T15:43:22.773Z",
            "turnNumber": 3,
            "counter": 6,
            "interaction": {
                "startTime": "2022-05-01T01:10:00.000Z",
                "endTime": "2022-05-01T03:15:00.000Z",
                "id": "umpire-6",
                "orders1": "m_f-blue_8",
                "orders2": "m_f-red_50",
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
            "messageType": "AdjudicationOutcomes",
            "perForceNarratives" : [
                {
                    "force": "f-blue",
                    "feedback": "here is the feedback for umpire-6"
                }
            ]
        },
        "_id": "2023-02-20T15:43:22.773Z//5"
    }
]