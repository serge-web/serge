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
                    "number": 2
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
                    "number": 5
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
                    "number": 4
                },
                {
                    "asset": "Blue.6.369",
                    "number": 1
                },
                {
                    "asset": "Blue.4.351",
                    "number": 2
                },
                {
                    "asset": "Blue.7.46",
                    "number": 3
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
                    "number": 1
                },
                {
                    "asset": "Red.7.255",
                    "number": 4
                },
                {
                    "asset": "Red.3.177",
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
                    "number": 1
                },
                {
                    "asset": "Blue.3.362",
                    "number": 1
                },
                {
                    "asset": "Blue.7.223",
                    "number": 4
                },
                {
                    "asset": "Blue.9.199",
                    "number": 0
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
                    "number": 1
                },
                {
                    "asset": "Blue.11.287",
                    "number": 0
                },
                {
                    "asset": "Blue.12.89",
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
                    "number": 1
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
                    "number": 4,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.5.78",
                    "number": 3,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "Green.8.273",
                    "number": 0,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "MRBM",
                    "number": 4
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
                    "number": 2
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
                    "number": 3
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
                    "number": 3,
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
                    "number": 1
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
                    "number": 2
                },
                {
                    "asset": "Green.3.312",
                    "number": 2
                },
                {
                    "asset": "Green.13.92",
                    "number": 1
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
                    "number": 5
                },
                {
                    "asset": "Blue.13.393",
                    "number": 4
                },
                {
                    "asset": "Blue.2.113",
                    "number": 2
                },
                {
                    "asset": "Blue.13.347",
                    "number": 4
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
                    "number": 3
                },
                {
                    "asset": "Red.2.294",
                    "number": 0
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
                    "number": 4
                },
                {
                    "asset": "Red.2.294",
                    "number": 2
                },
                {
                    "asset": "Red.2.347",
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
                    "number": 1
                },
                {
                    "asset": "Red.8.50",
                    "number": 5
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
                    "number": 4
                },
                {
                    "asset": "Green.6.308",
                    "number": 2
                },
                {
                    "asset": "Green.12.7",
                    "number": 5
                },
                {
                    "asset": "Green.4.219",
                    "number": 2
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
                    "number": 2
                },
                {
                    "asset": "Blue.7.145",
                    "number": 4
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
                    "number": 2
                },
                {
                    "asset": "Blue.9.202",
                    "number": 2
                },
                {
                    "asset": "Blue.6.180",
                    "number": 2
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
                    "number": 0
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
                    "number": 5
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
                    "number": 0,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78",
                    "missileType": "SRBM",
                    "number": 3
                },
                {
                    "asset": "Green.4.351",
                    "missileType": "SRBM",
                    "number": 4
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
                    "number": 4,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.13.223",
                    "number": 2,
                    "missileType": "MRBM"
                },
                {
                    "asset": "Green.8.361",
                    "number": 3,
                    "missileType": "Propellor OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Standard Cruise",
                    "number": 1
                },
                {
                    "asset": "Red.10.351",
                    "missileType": "Jet OWA UAV",
                    "number": 2
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
                    "number": 3
                },
                {
                    "asset": "Blue.3.177",
                    "number": 0
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
                    "number": 5
                },
                {
                    "asset": "Green.12.350",
                    "number": 1
                },
                {
                    "asset": "Green.10.368",
                    "number": 0
                },
                {
                    "asset": "Green.11.99",
                    "number": 2
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
                    "number": 0
                },
                {
                    "asset": "Red.5.343",
                    "number": 5
                },
                {
                    "asset": "Red.6.300",
                    "number": 4
                },
                {
                    "asset": "Red.11.371",
                    "number": 2
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
            "messageType": "Space--AreaEffects",
            "timestamp": "2022-09-24T18:35:03.780Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-92",
            "title": "Order item 96",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-red-Space-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.11.371",
                    "number": 4
                },
                {
                    "asset": "Red.3.155",
                    "number": 2
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//2.9506774487090297//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        44.556926999437565,
                                        9.589701050422304
                                    ],
                                    [
                                        44.556926999437565,
                                        5.378513543516911
                                    ],
                                    [
                                        48.80733422502659,
                                        5.378513543516911
                                    ],
                                    [
                                        48.80733422502659,
                                        9.589701050422304
                                    ],
                                    [
                                        44.556926999437565,
                                        9.589701050422304
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_92",
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
            "timestamp": "2022-09-25T10:28:50.789Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-95",
            "title": "Order item 99",
            "startDate": "2022-05-01T02:10:00.000Z",
            "endDate": "2022-05-01T03:00:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.11.63",
                    "number": 3
                },
                {
                    "asset": "Green.6.187",
                    "number": 4
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
                            "startDate": "2022-05-01T02:10:00.000Z",
                            "endDate": "2022-05-01T03:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651371000000,
                            "endTime": 1651374000000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.460220743145328//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.2794,
                                    25.4976
                                ],
                                [
                                    39.26,
                                    27.48
                                ],
                                [
                                    36.23,
                                    29.46
                                ],
                                [
                                    33.49,
                                    31.72
                                ],
                                [
                                    30.02,
                                    33.26
                                ],
                                [
                                    30.4972,
                                    33.6593
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_95",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-22T08:06:38.589Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-98",
            "title": "Order item 102",
            "startDate": "2022-05-01T02:20:00.000Z",
            "endDate": "2022-05-01T06:00:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Red.7.375",
                    "number": 0
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
                            "name": "f-red//6.863185207359493//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    56.2058,
                                    48.5645
                                ],
                                [
                                    54.84,
                                    46.67
                                ],
                                [
                                    53.61,
                                    45.92
                                ],
                                [
                                    52.67,
                                    44.45
                                ],
                                [
                                    52.2191,
                                    44.0692
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
                            "endDate": "2022-05-01T05:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651374600000,
                            "endTime": 1651383000000,
                            "geomId": "Patrol-1",
                            "name": "f-red//13.726370414718986//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.65299710917845,
                                        46.47121698118153
                                    ],
                                    [
                                        48.65299710917845,
                                        41.56503457182101
                                    ],
                                    [
                                        55.50136376007622,
                                        41.56503457182101
                                    ],
                                    [
                                        55.50136376007622,
                                        46.47121698118153
                                    ],
                                    [
                                        48.65299710917845,
                                        46.47121698118153
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
                            "startDate": "2022-05-01T05:30:00.000Z",
                            "endDate": "2022-05-01T06:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651383000000,
                            "endTime": 1651384800000,
                            "geomId": "Patrol-2",
                            "name": "f-red//20.58955562207848//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.2191,
                                    44.0692
                                ],
                                [
                                    53.21,
                                    45.41
                                ],
                                [
                                    55.37,
                                    46.93
                                ],
                                [
                                    55.82,
                                    48.73
                                ],
                                [
                                    56.2058,
                                    48.5645
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_98",
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
            "messageType": "f-red--Maritime--MissileStrike",
            "timestamp": "2022-09-26T05:49:16.588Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-101",
            "title": "Order item 110",
            "startDate": "2022-05-01T02:20:00.000Z",
            "endDate": "2022-05-01T03:10:00.000Z",
            "activity": "f-red-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Red.5.105",
                    "number": 1,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Red.13.109",
                    "number": 5,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "MRBM",
                    "number": 3
                },
                {
                    "asset": "Green.4.351",
                    "missileType": "MRBM",
                    "number": 1
                },
                {
                    "asset": "Blue.4.50",
                    "missileType": "Standard Cruise",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_101",
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
            "Reference": "Red-104",
            "title": "Order item 108",
            "startDate": "2022-05-01T02:20:00.000Z",
            "endDate": "2022-05-01T04:40:00.000Z",
            "activity": "f-red-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Red.6.56",
                    "number": 5
                },
                {
                    "asset": "Red.12.399",
                    "number": 5
                },
                {
                    "asset": "Red.5.105",
                    "number": 3
                },
                {
                    "asset": "Red.11.226",
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
                                    61.8377,
                                    29.9276
                                ],
                                [
                                    50.78,
                                    35.02
                                ],
                                [
                                    38.94,
                                    40.32
                                ],
                                [
                                    27.38,
                                    44.91
                                ],
                                [
                                    27.7981,
                                    44.8272
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
                                        23.752479196365428,
                                        47.49150483267338
                                    ],
                                    [
                                        23.752479196365428,
                                        42.032884538853054
                                    ],
                                    [
                                        31.477928346644305,
                                        42.032884538853054
                                    ],
                                    [
                                        31.477928346644305,
                                        47.49150483267338
                                    ],
                                    [
                                        23.752479196365428,
                                        47.49150483267338
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
                                    27.7981,
                                    44.8272
                                ],
                                [
                                    61.72,
                                    29.59
                                ],
                                [
                                    61.8377,
                                    29.9276
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_104",
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
            "Reference": "Blue-107",
            "title": "Order item 111",
            "startDate": "2022-05-01T02:25:00.000Z",
            "endDate": "2022-05-01T07:35:00.000Z",
            "activity": "f-blue-Maritime-EW Attack",
            "ownAssets": [
                {
                    "asset": "Blue.9.226",
                    "number": 4
                },
                {
                    "asset": "Blue.11.109",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
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
                                    22.4774,
                                    40.9314
                                ],
                                [
                                    31.72,
                                    31.4
                                ],
                                [
                                    41.11,
                                    21.02
                                ],
                                [
                                    49.78,
                                    10.92
                                ],
                                [
                                    49.9999,
                                    10.883
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
                                        46.858657110411684,
                                        13.916155983378877
                                    ],
                                    [
                                        46.858657110411684,
                                        7.818566262244837
                                    ],
                                    [
                                        53.07749193241914,
                                        7.818566262244837
                                    ],
                                    [
                                        53.07749193241914,
                                        13.916155983378877
                                    ],
                                    [
                                        46.858657110411684,
                                        13.916155983378877
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
                                    49.9999,
                                    10.883
                                ],
                                [
                                    41.16,
                                    21.2
                                ],
                                [
                                    31.42,
                                    30.63
                                ],
                                [
                                    22.97,
                                    41.34
                                ],
                                [
                                    22.4774,
                                    40.9314
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_107",
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
            "timestamp": "2022-09-22T07:57:57.695Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-110",
            "title": "Order item 114",
            "startDate": "2022-05-01T02:25:00.000Z",
            "endDate": "2022-05-01T03:15:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.6.215",
                    "number": 0
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
                            "startDate": "2022-05-01T02:25:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651371900000,
                            "endTime": 1651374900000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.40925475617405//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.6806,
                                    10.2205
                                ],
                                [
                                    27.74,
                                    44.48
                                ],
                                [
                                    27.7981,
                                    44.8272
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_110",
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
            "timestamp": "2022-09-25T10:15:49.447Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-113",
            "title": "Order item 117",
            "startDate": "2022-05-01T02:25:00.000Z",
            "endDate": "2022-05-01T06:25:00.000Z",
            "activity": "f-green-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Green.13.24",
                    "number": 1
                },
                {
                    "asset": "Green.6.187",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T02:25:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651371900000,
                            "endTime": 1651374900000,
                            "geomId": "Raid-0",
                            "name": "f-green//2.2793250663671643//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.4781,
                                    20.8676
                                ],
                                [
                                    39.23,
                                    30.98
                                ],
                                [
                                    32.15,
                                    40.26
                                ],
                                [
                                    24.35,
                                    49.82
                                ],
                                [
                                    24.3865,
                                    49.994
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
                            "startDate": "2022-05-01T03:15:00.000Z",
                            "endDate": "2022-05-01T06:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651374900000,
                            "endTime": 1651385100000,
                            "geomId": "Raid-1",
                            "name": "f-green//4.5586501327343285//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.67926175277844,
                                        51.64320145992241
                                    ],
                                    [
                                        21.67926175277844,
                                        48.28603233871993
                                    ],
                                    [
                                        26.911119972399153,
                                        48.28603233871993
                                    ],
                                    [
                                        26.911119972399153,
                                        51.64320145992241
                                    ],
                                    [
                                        21.67926175277844,
                                        51.64320145992241
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
                            "startDate": "2022-05-01T06:05:00.000Z",
                            "endDate": "2022-05-01T06:25:00.000Z",
                            "force": "f-green",
                            "startTime": 1651385100000,
                            "endTime": 1651386300000,
                            "geomId": "Raid-2",
                            "name": "f-green//6.837975199101493//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.3865,
                                    49.994
                                ],
                                [
                                    46.07,
                                    20.68
                                ],
                                [
                                    46.4781,
                                    20.8676
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_113",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-24T18:17:41.991Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-116",
            "title": "Order item 120",
            "startDate": "2022-05-01T02:40:00.000Z",
            "endDate": "2022-05-01T07:00:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Blue.2.52",
                    "number": 2
                },
                {
                    "asset": "Blue.4.155",
                    "number": 0
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T02:40:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651372800000,
                            "endTime": 1651375800000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//2.0428165460471064//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    39.9693,
                                    51.815
                                ],
                                [
                                    55.67,
                                    35.77
                                ],
                                [
                                    55.3551,
                                    35.5259
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
                            "startDate": "2022-05-01T03:30:00.000Z",
                            "endDate": "2022-05-01T05:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651375800000,
                            "endTime": 1651384200000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//4.085633092094213//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        50.49184162374553,
                                        39.19977621100012
                                    ],
                                    [
                                        50.49184162374553,
                                        31.67420355041127
                                    ],
                                    [
                                        59.782575389682854,
                                        31.67420355041127
                                    ],
                                    [
                                        59.782575389682854,
                                        39.19977621100012
                                    ],
                                    [
                                        50.49184162374553,
                                        39.19977621100012
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
                            "startDate": "2022-05-01T05:50:00.000Z",
                            "endDate": "2022-05-01T07:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651384200000,
                            "endTime": 1651388400000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//6.128449638141319//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.3551,
                                    35.5259
                                ],
                                [
                                    50.49,
                                    41.13
                                ],
                                [
                                    44.84,
                                    45.93
                                ],
                                [
                                    39.47,
                                    52.02
                                ],
                                [
                                    39.9693,
                                    51.815
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_116",
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
            "timestamp": "2022-09-28T16:03:35.324Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-119",
            "title": "Order item 123",
            "startDate": "2022-05-01T02:40:00.000Z",
            "endDate": "2022-05-01T03:30:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.3.300",
                    "number": 4
                },
                {
                    "asset": "Green.4.342",
                    "number": 1
                },
                {
                    "asset": "Green.3.98",
                    "number": 2
                },
                {
                    "asset": "Green.6.367",
                    "number": 5
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
                            "startDate": "2022-05-01T02:40:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651372800000,
                            "endTime": 1651375800000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.699729195213877//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.5408,
                                    18.9118
                                ],
                                [
                                    37.17,
                                    30.58
                                ],
                                [
                                    22.22,
                                    41.68
                                ],
                                [
                                    22.0703,
                                    41.9732
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_119",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-28T19:33:29.449Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-122",
            "title": "Order item 126",
            "startDate": "2022-05-01T02:40:00.000Z",
            "endDate": "2022-05-01T05:00:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Red.3.367",
                    "number": 4
                },
                {
                    "asset": "Red.2.349",
                    "number": 5
                },
                {
                    "asset": "Red.6.45",
                    "number": 5
                },
                {
                    "asset": "Red.8.253",
                    "number": 0
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T02:40:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651372800000,
                            "endTime": 1651375800000,
                            "geomId": "Patrol-0",
                            "name": "f-red//3.250063013867475//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.4238,
                                    6.3868
                                ],
                                [
                                    26.08,
                                    14.41
                                ],
                                [
                                    25.8806,
                                    13.9803
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
                            "startDate": "2022-05-01T03:30:00.000Z",
                            "endDate": "2022-05-01T03:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651375800000,
                            "endTime": 1651377000000,
                            "geomId": "Patrol-1",
                            "name": "f-red//6.50012602773495//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        22.13705698996423,
                                        17.521704351815895
                                    ],
                                    [
                                        22.13705698996423,
                                        10.383320219031276
                                    ],
                                    [
                                        29.509731545027204,
                                        10.383320219031276
                                    ],
                                    [
                                        29.509731545027204,
                                        17.521704351815895
                                    ],
                                    [
                                        22.13705698996423,
                                        17.521704351815895
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
                            "startDate": "2022-05-01T03:50:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651377000000,
                            "endTime": 1651381200000,
                            "geomId": "Patrol-2",
                            "name": "f-red//9.750189041602425//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.8806,
                                    13.9803
                                ],
                                [
                                    61.37,
                                    6.17
                                ],
                                [
                                    61.4238,
                                    6.3868
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_122",
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
            "timestamp": "2022-09-25T04:47:24.363Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-125",
            "title": "Order item 129",
            "startDate": "2022-05-01T02:55:00.000Z",
            "endDate": "2022-05-01T03:45:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.12.253",
                    "number": 3
                },
                {
                    "asset": "Green.6.176",
                    "number": 2
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
                            "startDate": "2022-05-01T02:55:00.000Z",
                            "endDate": "2022-05-01T03:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651373700000,
                            "endTime": 1651376700000,
                            "geomId": "Transit-0",
                            "name": "f-green//4.693818001425825//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.677,
                                    12.6221
                                ],
                                [
                                    52.55,
                                    7.11
                                ],
                                [
                                    74.76,
                                    1.93
                                ],
                                [
                                    74.3715,
                                    2.2901
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_125",
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
            "messageType": "Space--AreaEffects",
            "timestamp": "2022-09-26T03:45:20.069Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-128",
            "title": "Order item 132",
            "startDate": "2022-05-01T03:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-blue-Space-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.1.360",
                    "number": 2
                },
                {
                    "asset": "Blue.5.222",
                    "number": 3
                },
                {
                    "asset": "Blue.6.197",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T03:10:00.000Z",
                            "endDate": "2022-05-01T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651374600000,
                            "endTime": 1651377600000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//5.030994158471003//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        57.12525841288518,
                                        14.88384054462338
                                    ],
                                    [
                                        57.12525841288518,
                                        13.890254377214651
                                    ],
                                    [
                                        58.15105992053573,
                                        13.890254377214651
                                    ],
                                    [
                                        58.15105992053573,
                                        14.88384054462338
                                    ],
                                    [
                                        57.12525841288518,
                                        14.88384054462338
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_128",
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
            "timestamp": "2022-09-22T02:18:19.789Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-131",
            "title": "Order item 139",
            "startDate": "2022-05-01T03:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.8.285",
                    "number": 5,
                    "missileType": "Jet OWA UAV"
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
                    "missileType": "Low Obs Cruise",
                    "number": 2
                },
                {
                    "asset": "Blue.4.50",
                    "missileType": "MRBM",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_131",
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
            "timestamp": "2022-09-25T02:53:13.851Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-134",
            "title": "Order item 138",
            "startDate": "2022-05-01T03:15:00.000Z",
            "endDate": "2022-05-01T04:05:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.7.30",
                    "number": 4
                },
                {
                    "asset": "Green.9.172",
                    "number": 0
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
                            "startDate": "2022-05-01T03:15:00.000Z",
                            "endDate": "2022-05-01T04:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651374900000,
                            "endTime": 1651377900000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.3856099798576906//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.6924,
                                    7.4892
                                ],
                                [
                                    39.12,
                                    31.51
                                ],
                                [
                                    38.7034,
                                    31.2378
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_134",
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
            "messageType": "Land--Transit",
            "timestamp": "2022-09-23T03:03:11.928Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-137",
            "title": "Order item 141",
            "startDate": "2022-05-01T03:35:00.000Z",
            "endDate": "2022-05-01T04:25:00.000Z",
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.2.395",
                    "number": 3
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
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T03:35:00.000Z",
                            "endDate": "2022-05-01T04:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651376100000,
                            "endTime": 1651379100000,
                            "geomId": "Transit-0",
                            "name": "f-blue//4.403049644781277//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    39.1863,
                                    35.9143
                                ],
                                [
                                    48.42,
                                    25.4
                                ],
                                [
                                    57.95,
                                    14.18
                                ],
                                [
                                    57.6393,
                                    14.3876
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_137",
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
            "timestamp": "2022-09-21T15:31:37.331Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-140",
            "title": "Order item 149",
            "startDate": "2022-05-01T03:35:00.000Z",
            "endDate": "2022-05-01T04:55:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.4.179",
                    "number": 5,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Green.10.200",
                    "number": 0,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Standard Cruise",
                    "number": 3
                },
                {
                    "asset": "Red.10.351",
                    "missileType": "Standard Cruise",
                    "number": 1
                },
                {
                    "asset": "Blue.4.50",
                    "missileType": "Propellor OWA UAV",
                    "number": 2
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_140",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-24T12:35:10.453Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-143",
            "title": "Order item 147",
            "startDate": "2022-05-01T03:40:00.000Z",
            "endDate": "2022-05-01T07:20:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.6.182",
                    "number": 2
                },
                {
                    "asset": "Green.5.143",
                    "number": 1
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T03:40:00.000Z",
                            "endDate": "2022-05-01T04:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651376400000,
                            "endTime": 1651379400000,
                            "geomId": "Patrol-0",
                            "name": "f-green//5.118192482506856//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.3004,
                                    14.8355
                                ],
                                [
                                    41.54,
                                    35.2
                                ],
                                [
                                    41.9425,
                                    35.4772
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
                            "startDate": "2022-05-01T04:30:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651379400000,
                            "endTime": 1651381200000,
                            "geomId": "Patrol-1",
                            "name": "f-green//10.236384965013713//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        38.245304883016516,
                                        38.3226276878367
                                    ],
                                    [
                                        38.245304883016516,
                                        32.52682843470919
                                    ],
                                    [
                                        45.38237533173604,
                                        32.52682843470919
                                    ],
                                    [
                                        45.38237533173604,
                                        38.3226276878367
                                    ],
                                    [
                                        38.245304883016516,
                                        38.3226276878367
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
                            "startDate": "2022-05-01T05:00:00.000Z",
                            "endDate": "2022-05-01T07:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651381200000,
                            "endTime": 1651389600000,
                            "geomId": "Patrol-2",
                            "name": "f-green//15.354577447520569//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.9425,
                                    35.4772
                                ],
                                [
                                    40.45,
                                    30.23
                                ],
                                [
                                    38.96,
                                    24.99
                                ],
                                [
                                    37.76,
                                    20.03
                                ],
                                [
                                    35.85,
                                    14.36
                                ],
                                [
                                    36.3004,
                                    14.8355
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_143",
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
            "timestamp": "2022-09-27T21:57:10.902Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-146",
            "title": "Order item 150",
            "startDate": "2022-05-01T04:00:00.000Z",
            "endDate": "2022-05-01T04:50:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.4.5",
                    "number": 4
                },
                {
                    "asset": "Green.7.306",
                    "number": 5
                },
                {
                    "asset": "Green.9.320",
                    "number": 0
                },
                {
                    "asset": "Green.11.47",
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
                            "startDate": "2022-05-01T04:00:00.000Z",
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651377600000,
                            "endTime": 1651380600000,
                            "geomId": "Transit-0",
                            "name": "f-green//3.8158956558909267//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.1214,
                                    16.2995
                                ],
                                [
                                    35.01,
                                    42
                                ],
                                [
                                    35.2805,
                                    42.0371
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_146",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-27T13:03:12.141Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-149",
            "title": "Order item 153",
            "startDate": "2022-05-01T04:15:00.000Z",
            "endDate": "2022-05-01T06:25:00.000Z",
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "Blue.1.47",
                    "number": 5
                },
                {
                    "asset": "Blue.4.288",
                    "number": 2
                },
                {
                    "asset": "Blue.6.242",
                    "number": 4
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
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-05-01T04:15:00.000Z",
                            "endDate": "2022-05-01T05:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651378500000,
                            "endTime": 1651381500000,
                            "geomId": "Mine Laying-0",
                            "name": "f-blue//6.407019997015595//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.0323,
                                    43.6197
                                ],
                                [
                                    47.62,
                                    38.17
                                ],
                                [
                                    44.07,
                                    32.58
                                ],
                                [
                                    40.8,
                                    27.27
                                ],
                                [
                                    36.82,
                                    21.25
                                ],
                                [
                                    37.1076,
                                    21.5704
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
                            "startDate": "2022-05-01T05:05:00.000Z",
                            "endDate": "2022-05-01T05:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381500000,
                            "endTime": 1651384500000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//12.81403999403119//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        34.283084372170734,
                                        24.12466449217405
                                    ],
                                    [
                                        34.283084372170734,
                                        18.970195326412977
                                    ],
                                    [
                                        39.833389566849085,
                                        18.970195326412977
                                    ],
                                    [
                                        39.833389566849085,
                                        24.12466449217405
                                    ],
                                    [
                                        34.283084372170734,
                                        24.12466449217405
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
                            "startDate": "2022-05-01T05:55:00.000Z",
                            "endDate": "2022-05-01T06:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651384500000,
                            "endTime": 1651386300000,
                            "geomId": "Mine Laying-2",
                            "name": "f-blue//19.221059991046786//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.1076,
                                    21.5704
                                ],
                                [
                                    43.81,
                                    32.7
                                ],
                                [
                                    51.01,
                                    43.33
                                ],
                                [
                                    51.0323,
                                    43.6197
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_149",
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
            "timestamp": "2022-09-23T09:53:14.170Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-152",
            "title": "Order item 156",
            "startDate": "2022-05-01T04:15:00.000Z",
            "endDate": "2022-05-01T07:55:00.000Z",
            "activity": "f-blue-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "Blue.10.309",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-05-01T04:15:00.000Z",
                            "endDate": "2022-05-01T05:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651378500000,
                            "endTime": 1651381500000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-blue//2.891565509373322//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.3049,
                                    50.3925
                                ],
                                [
                                    48.57,
                                    22.96
                                ],
                                [
                                    48.1616,
                                    22.7075
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
                            "startDate": "2022-05-01T05:05:00.000Z",
                            "endDate": "2022-05-01T05:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381500000,
                            "endTime": 1651383900000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-blue//5.783131018746644//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        43.83628697220651,
                                        26.520456117392833
                                    ],
                                    [
                                        43.83628697220651,
                                        18.784665744398875
                                    ],
                                    [
                                        52.24910791475042,
                                        18.784665744398875
                                    ],
                                    [
                                        52.24910791475042,
                                        26.520456117392833
                                    ],
                                    [
                                        43.83628697220651,
                                        26.520456117392833
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
                            "startDate": "2022-05-01T05:45:00.000Z",
                            "endDate": "2022-05-01T07:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651383900000,
                            "endTime": 1651391700000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-blue//8.674696528119966//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.1616,
                                    22.7075
                                ],
                                [
                                    49.4,
                                    31.74
                                ],
                                [
                                    50.73,
                                    40.86
                                ],
                                [
                                    52.35,
                                    50.27
                                ],
                                [
                                    52.3049,
                                    50.3925
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_152",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-23T20:27:16.990Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-155",
            "title": "Order item 159",
            "startDate": "2022-05-01T04:15:00.000Z",
            "endDate": "2022-05-01T08:05:00.000Z",
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Blue.12.391",
                    "number": 3
                },
                {
                    "asset": "Blue.7.111",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T04:15:00.000Z",
                            "endDate": "2022-05-01T05:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651378500000,
                            "endTime": 1651381500000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-blue//3.269532189471647//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.0703,
                                    41.9732
                                ],
                                [
                                    32.97,
                                    32.33
                                ],
                                [
                                    44.89,
                                    22.72
                                ],
                                [
                                    56.1,
                                    12.38
                                ],
                                [
                                    66.58,
                                    2.33
                                ],
                                [
                                    67.0777,
                                    2.789
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
                            "startDate": "2022-05-01T05:05:00.000Z",
                            "endDate": "2022-05-01T05:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381500000,
                            "endTime": 1651381500000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-blue//6.539064378943294//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        66.14533277407736,
                                        3.7190352131878948
                                    ],
                                    [
                                        66.14533277407736,
                                        1.8582285891804478
                                    ],
                                    [
                                        68.00859318243056,
                                        1.8582285891804478
                                    ],
                                    [
                                        68.00859318243056,
                                        3.7190352131878948
                                    ],
                                    [
                                        66.14533277407736,
                                        3.7190352131878948
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
                            "startDate": "2022-05-01T05:05:00.000Z",
                            "endDate": "2022-05-01T08:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381500000,
                            "endTime": 1651392300000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-blue//9.808596568414941//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    67.0777,
                                    2.789
                                ],
                                [
                                    56.12,
                                    12.36
                                ],
                                [
                                    45.05,
                                    22.81
                                ],
                                [
                                    33.27,
                                    32.56
                                ],
                                [
                                    21.77,
                                    41.58
                                ],
                                [
                                    22.0703,
                                    41.9732
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_155",
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
            "timestamp": "2022-09-28T20:45:20.601Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-158",
            "title": "Order item 162",
            "startDate": "2022-05-01T04:15:00.000Z",
            "endDate": "2022-05-01T05:05:00.000Z",
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.3.291",
                    "number": 4
                },
                {
                    "asset": "Blue.9.352",
                    "number": 5
                },
                {
                    "asset": "Blue.5.125",
                    "number": 0
                },
                {
                    "asset": "Blue.3.12",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T04:15:00.000Z",
                            "endDate": "2022-05-01T05:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651378500000,
                            "endTime": 1651381500000,
                            "geomId": "Transit-0",
                            "name": "f-blue//2.540920039638877//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0852,
                                    52.2171
                                ],
                                [
                                    84.98,
                                    36.3
                                ],
                                [
                                    84.8219,
                                    35.9367
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_158",
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
            "timestamp": "2022-09-21T18:47:25.002Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-161",
            "title": "Order item 165",
            "startDate": "2022-05-01T04:15:00.000Z",
            "endDate": "2022-05-01T08:35:00.000Z",
            "activity": "f-green-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Green.6.12",
                    "number": 3
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
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T04:15:00.000Z",
                            "endDate": "2022-05-01T05:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651378500000,
                            "endTime": 1651381500000,
                            "geomId": "Raid-0",
                            "name": "f-green//5.705729058710858//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.9049,
                                    8.9746
                                ],
                                [
                                    59.81,
                                    27.48
                                ],
                                [
                                    60.2749,
                                    27.2773
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
                            "startDate": "2022-05-01T05:05:00.000Z",
                            "endDate": "2022-05-01T08:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651381500000,
                            "endTime": 1651392300000,
                            "geomId": "Raid-1",
                            "name": "f-green//11.411458117421716//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        59.38683509543089,
                                        28.05820026014488
                                    ],
                                    [
                                        59.38683509543089,
                                        26.4908714109202
                                    ],
                                    [
                                        61.15052595086204,
                                        26.4908714109202
                                    ],
                                    [
                                        61.15052595086204,
                                        28.05820026014488
                                    ],
                                    [
                                        59.38683509543089,
                                        28.05820026014488
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
                            "startDate": "2022-05-01T08:05:00.000Z",
                            "endDate": "2022-05-01T08:35:00.000Z",
                            "force": "f-green",
                            "startTime": 1651392300000,
                            "endTime": 1651394100000,
                            "geomId": "Raid-2",
                            "name": "f-green//17.117187176132575//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.2749,
                                    27.2773
                                ],
                                [
                                    53.67,
                                    22.74
                                ],
                                [
                                    46.97,
                                    18.12
                                ],
                                [
                                    40.56,
                                    13.78
                                ],
                                [
                                    33.43,
                                    8.73
                                ],
                                [
                                    33.9049,
                                    8.9746
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_161",
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
            "timestamp": "2022-09-27T14:33:30.194Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-164",
            "title": "Order item 168",
            "startDate": "2022-05-01T04:20:00.000Z",
            "endDate": "2022-05-01T05:10:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.4.351",
                    "number": 4
                },
                {
                    "asset": "Green.4.291",
                    "number": 0
                },
                {
                    "asset": "Green.13.344",
                    "number": 3
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
                            "startDate": "2022-05-01T04:20:00.000Z",
                            "endDate": "2022-05-01T05:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651378800000,
                            "endTime": 1651381800000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.7639592478517443//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.2246,
                                    24.9088
                                ],
                                [
                                    49.58,
                                    28.03
                                ],
                                [
                                    49.14,
                                    31.35
                                ],
                                [
                                    47.99,
                                    34.95
                                ],
                                [
                                    47.6436,
                                    34.583
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_164",
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
            "timestamp": "2022-09-29T16:03:36.176Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-167",
            "title": "Order item 171",
            "startDate": "2022-05-01T04:40:00.000Z",
            "endDate": "2022-05-01T07:10:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.8.111",
                    "number": 3
                },
                {
                    "asset": "Green.13.390",
                    "number": 0
                },
                {
                    "asset": "Green.2.383",
                    "number": 0
                },
                {
                    "asset": "Green.1.89",
                    "number": 4
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
                            "startDate": "2022-05-01T04:40:00.000Z",
                            "endDate": "2022-05-01T05:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651380000000,
                            "endTime": 1651383000000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//3.715610605897382//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.5628,
                                    10.2075
                                ],
                                [
                                    62.97,
                                    34.7
                                ],
                                [
                                    63.0615,
                                    35.1056
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
                            "startDate": "2022-05-01T05:30:00.000Z",
                            "endDate": "2022-05-01T05:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651383000000,
                            "endTime": 1651383000000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//7.431221211794764//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        58.784888619643674,
                                        38.384628272689085
                                    ],
                                    [
                                        58.784888619643674,
                                        31.68818804862343
                                    ],
                                    [
                                        67.00052486783916,
                                        31.68818804862343
                                    ],
                                    [
                                        67.00052486783916,
                                        38.384628272689085
                                    ],
                                    [
                                        58.784888619643674,
                                        38.384628272689085
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
                            "startDate": "2022-05-01T05:30:00.000Z",
                            "endDate": "2022-05-01T07:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651383000000,
                            "endTime": 1651389000000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//11.146831817692146//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0615,
                                    35.1056
                                ],
                                [
                                    42.91,
                                    22.42
                                ],
                                [
                                    22.26,
                                    10.23
                                ],
                                [
                                    22.5628,
                                    10.2075
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_167",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-27T23:17:42.948Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-170",
            "title": "Order item 174",
            "startDate": "2022-05-01T04:55:00.000Z",
            "endDate": "2022-05-01T09:25:00.000Z",
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Blue.12.89",
                    "number": 4
                },
                {
                    "asset": "Blue.10.309",
                    "number": 0
                },
                {
                    "asset": "Blue.12.241",
                    "number": 3
                },
                {
                    "asset": "Blue.11.287",
                    "number": 4
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
                            "startDate": "2022-05-01T04:55:00.000Z",
                            "endDate": "2022-05-01T05:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651380900000,
                            "endTime": 1651383900000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-blue//3.560683132847771//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    27.5577,
                                    50.2645
                                ],
                                [
                                    33.23,
                                    42.32
                                ],
                                [
                                    39.8,
                                    33.27
                                ],
                                [
                                    45.65,
                                    25.51
                                ],
                                [
                                    51.79,
                                    17.03
                                ],
                                [
                                    51.9132,
                                    16.608
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
                            "startDate": "2022-05-01T05:45:00.000Z",
                            "endDate": "2022-05-01T07:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651383900000,
                            "endTime": 1651390500000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-blue//7.121366265695542//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        50.20216705274108,
                                        18.226226839585983
                                    ],
                                    [
                                        50.20216705274108,
                                        14.976013164520005
                                    ],
                                    [
                                        53.59552223963556,
                                        14.976013164520005
                                    ],
                                    [
                                        53.59552223963556,
                                        18.226226839585983
                                    ],
                                    [
                                        50.20216705274108,
                                        18.226226839585983
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
                            "startDate": "2022-05-01T07:35:00.000Z",
                            "endDate": "2022-05-01T09:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651390500000,
                            "endTime": 1651397100000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-blue//10.682049398543313//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.9132,
                                    16.608
                                ],
                                [
                                    39.5,
                                    33.46
                                ],
                                [
                                    27.62,
                                    49.85
                                ],
                                [
                                    27.5577,
                                    50.2645
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_170",
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
            "timestamp": "2022-09-22T12:15:50.511Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-173",
            "title": "Order item 177",
            "startDate": "2022-05-01T04:55:00.000Z",
            "endDate": "2022-05-01T05:45:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.11.287",
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
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T04:55:00.000Z",
                            "endDate": "2022-05-01T05:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651380900000,
                            "endTime": 1651383900000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.2991768287029117//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.9223,
                                    2.8115
                                ],
                                [
                                    61.52,
                                    17.92
                                ],
                                [
                                    61.2778,
                                    17.8353
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_173",
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
            "timestamp": "2022-09-24T11:57:11.540Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-176",
            "title": "Order item 182",
            "startDate": "2022-05-01T05:00:00.000Z",
            "endDate": "2022-05-01T08:10:00.000Z",
            "activity": "f-green-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Green.12.305",
                    "number": 5,
                    "missileType": "Propellor OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Propellor OWA UAV",
                    "number": 2
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_176",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-25T07:24:08.009Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-179",
            "title": "Order item 183",
            "startDate": "2022-05-01T05:20:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Blue.6.142",
                    "number": 1
                },
                {
                    "asset": "Blue.10.181",
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T05:20:00.000Z",
                            "endDate": "2022-05-01T06:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651382400000,
                            "endTime": 1651385400000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//6.456427729455754//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.5059,
                                    39.3538
                                ],
                                [
                                    72.26,
                                    41.02
                                ],
                                [
                                    72.6508,
                                    41.0566
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
                            "startDate": "2022-05-01T06:10:00.000Z",
                            "endDate": "2022-05-01T07:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651385400000,
                            "endTime": 1651390800000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//12.912855458911508//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        68.81422520707122,
                                        43.76532736005236
                                    ],
                                    [
                                        68.81422520707122,
                                        38.230847213534155
                                    ],
                                    [
                                        76.17758361772042,
                                        38.230847213534155
                                    ],
                                    [
                                        76.17758361772042,
                                        43.76532736005236
                                    ],
                                    [
                                        68.81422520707122,
                                        43.76532736005236
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
                            "startDate": "2022-05-01T07:40:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651390800000,
                            "endTime": 1651398000000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//19.369283188367262//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.6508,
                                    41.0566
                                ],
                                [
                                    51.74,
                                    40.65
                                ],
                                [
                                    31.2,
                                    39.62
                                ],
                                [
                                    31.5059,
                                    39.3538
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_179",
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
            "timestamp": "2022-09-25T05:34:17.944Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-182",
            "title": "Order item 186",
            "startDate": "2022-05-01T05:20:00.000Z",
            "endDate": "2022-05-01T10:40:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.5.198",
                    "number": 2
                },
                {
                    "asset": "Green.9.177",
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
                            "startDate": "2022-05-01T05:20:00.000Z",
                            "endDate": "2022-05-01T06:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651382400000,
                            "endTime": 1651385400000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//6.875184934353456//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    49.9844,
                                    20.9693
                                ],
                                [
                                    34.42,
                                    33.79
                                ],
                                [
                                    34.1889,
                                    33.4511
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
                            "startDate": "2022-05-01T06:10:00.000Z",
                            "endDate": "2022-05-01T08:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651385400000,
                            "endTime": 1651392000000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//13.750369868706912//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.554912992567427,
                                        36.32690555395603
                                    ],
                                    [
                                        30.554912992567427,
                                        30.476183790629925
                                    ],
                                    [
                                        37.58567223404259,
                                        30.476183790629925
                                    ],
                                    [
                                        37.58567223404259,
                                        36.32690555395603
                                    ],
                                    [
                                        30.554912992567427,
                                        36.32690555395603
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
                            "startDate": "2022-05-01T08:00:00.000Z",
                            "endDate": "2022-05-01T10:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651392000000,
                            "endTime": 1651401600000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//20.625554803060368//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.1889,
                                    33.4511
                                ],
                                [
                                    49.99,
                                    21.35
                                ],
                                [
                                    49.9844,
                                    20.9693
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_182",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-29T17:28:28.669Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-185",
            "title": "Order item 189",
            "startDate": "2022-05-01T05:25:00.000Z",
            "endDate": "2022-05-01T06:15:00.000Z",
            "activity": "f-red-Maritime-Sea Denial",
            "ownAssets": [
                {
                    "asset": "Red.8.74",
                    "number": 3
                },
                {
                    "asset": "Red.6.393",
                    "number": 4
                },
                {
                    "asset": "Red.10.25",
                    "number": 5
                },
                {
                    "asset": "Red.9.170",
                    "number": 0
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
                    "uniqid": "Sea Denial-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Sea Denial//Area",
                            "startDate": "2022-05-01T05:25:00.000Z",
                            "endDate": "2022-05-01T06:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651382700000,
                            "endTime": 1651385700000,
                            "geomId": "Sea Denial-0",
                            "name": "f-red//6.187363308155909//Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        31.53321934166749,
                                        53.253872949958975
                                    ],
                                    [
                                        31.53321934166749,
                                        50.334525386063426
                                    ],
                                    [
                                        36.26316354928714,
                                        50.334525386063426
                                    ],
                                    [
                                        36.26316354928714,
                                        53.253872949958975
                                    ],
                                    [
                                        31.53321934166749,
                                        53.253872949958975
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_185",
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
            "timestamp": "2022-09-23T07:23:14.968Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-188",
            "title": "Order item 194",
            "startDate": "2022-05-01T05:40:00.000Z",
            "endDate": "2022-05-01T08:20:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.4.170",
                    "number": 0,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "SRBM",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_188",
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
            "messageType": "SOF--SOFActivity",
            "timestamp": "2022-09-27T10:28:52.492Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-191",
            "title": "Order item 195",
            "startDate": "2022-05-01T05:55:00.000Z",
            "endDate": "2022-05-01T10:05:00.000Z",
            "activity": "f-blue-SOF-Activity",
            "ownAssets": [
                {
                    "asset": "Blue.9.85",
                    "number": 1
                },
                {
                    "asset": "Blue.13.283",
                    "number": 4
                },
                {
                    "asset": "Blue.13.194",
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
                    "uniqid": "Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route out",
                            "startDate": "2022-05-01T05:55:00.000Z",
                            "endDate": "2022-05-01T06:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651384500000,
                            "endTime": 1651387500000,
                            "geomId": "Activity-0",
                            "name": "f-blue//6.491983563639224//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.532,
                                    53.1032
                                ],
                                [
                                    52.94,
                                    52.87
                                ],
                                [
                                    63.2,
                                    53.48
                                ],
                                [
                                    72.75,
                                    53.37
                                ],
                                [
                                    82.57,
                                    53.55
                                ],
                                [
                                    83.0755,
                                    53.6356
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
                            "startDate": "2022-05-01T06:45:00.000Z",
                            "endDate": "2022-05-01T09:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651387500000,
                            "endTime": 1651397100000,
                            "geomId": "Activity-1",
                            "name": "f-blue//12.983967127278447//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        79.12028855692394,
                                        55.79596269728328
                                    ],
                                    [
                                        79.12028855692394,
                                        51.357780361481126
                                    ],
                                    [
                                        86.63548858064729,
                                        51.357780361481126
                                    ],
                                    [
                                        86.63548858064729,
                                        55.79596269728328
                                    ],
                                    [
                                        79.12028855692394,
                                        55.79596269728328
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
                            "startDate": "2022-05-01T09:25:00.000Z",
                            "endDate": "2022-05-01T10:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651397100000,
                            "endTime": 1651399500000,
                            "geomId": "Activity-2",
                            "name": "f-blue//19.47595069091767//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.0755,
                                    53.6356
                                ],
                                [
                                    63.72,
                                    53.19
                                ],
                                [
                                    43.67,
                                    53.05
                                ],
                                [
                                    43.532,
                                    53.1032
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_191",
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
            "timestamp": "2022-09-28T23:35:05.588Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-194",
            "title": "Order item 198",
            "startDate": "2022-05-01T05:55:00.000Z",
            "endDate": "2022-05-01T09:15:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.4.219",
                    "number": 4
                },
                {
                    "asset": "Green.11.357",
                    "number": 5
                },
                {
                    "asset": "Green.2.208",
                    "number": 0
                },
                {
                    "asset": "Green.8.173",
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
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T05:55:00.000Z",
                            "endDate": "2022-05-01T06:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651384500000,
                            "endTime": 1651387500000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//2.4844254453200847//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.6036,
                                    17.486
                                ],
                                [
                                    51.38,
                                    28.09
                                ],
                                [
                                    59.66,
                                    39.2
                                ],
                                [
                                    59.4303,
                                    38.7503
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
                            "startDate": "2022-05-01T06:45:00.000Z",
                            "endDate": "2022-05-01T06:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651387500000,
                            "endTime": 1651388100000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//4.968850890640169//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        56.337640919381656,
                                        41.04292428180254
                                    ],
                                    [
                                        56.337640919381656,
                                        36.381317496635845
                                    ],
                                    [
                                        62.327377286807625,
                                        36.381317496635845
                                    ],
                                    [
                                        62.327377286807625,
                                        41.04292428180254
                                    ],
                                    [
                                        56.337640919381656,
                                        41.04292428180254
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
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T09:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651388100000,
                            "endTime": 1651396500000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//7.453276335960254//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.4303,
                                    38.7503
                                ],
                                [
                                    53.68,
                                    31.69
                                ],
                                [
                                    49.08,
                                    24.78
                                ],
                                [
                                    43.77,
                                    17.15
                                ],
                                [
                                    43.6036,
                                    17.486
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_194",
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
            "timestamp": "2022-09-28T14:33:31.045Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-197",
            "title": "Order item 206",
            "startDate": "2022-05-01T05:55:00.000Z",
            "endDate": "2022-05-01T08:25:00.000Z",
            "activity": "f-green-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Green.8.173",
                    "number": 1,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "Green.5.251",
                    "number": 4,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Green.5.42",
                    "number": 0,
                    "missileType": "Standard Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Low Obs Cruise",
                    "number": 0
                },
                {
                    "asset": "Red.10.351",
                    "missileType": "SRBM",
                    "number": 2
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_197",
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
            "messageType": "Space--Effects",
            "timestamp": "2022-09-29T02:59:34.154Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-200",
            "title": "Order item 204",
            "startDate": "2022-05-01T06:15:00.000Z",
            "endDate": "2022-05-01T09:25:00.000Z",
            "activity": "f-blue-Space-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Blue.7.346",
                    "number": 2
                },
                {
                    "asset": "Blue.11.364",
                    "number": 1
                },
                {
                    "asset": "Blue.8.95",
                    "number": 1
                },
                {
                    "asset": "Blue.4.339",
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
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_200",
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
            "messageType": "Air--ISTAR",
            "timestamp": "2022-09-27T17:17:49.622Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-203",
            "title": "Order item 207",
            "startDate": "2022-05-01T06:15:00.000Z",
            "endDate": "2022-05-01T09:25:00.000Z",
            "activity": "f-red-Air-ISTAR",
            "ownAssets": [
                {
                    "asset": "Red.7.339",
                    "number": 5
                },
                {
                    "asset": "Red.4.297",
                    "number": 0
                },
                {
                    "asset": "Red.3.367",
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
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T06:15:00.000Z",
                            "endDate": "2022-05-01T07:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651385700000,
                            "endTime": 1651388700000,
                            "geomId": "ISTAR-0",
                            "name": "f-red//3.8222781061194837//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0615,
                                    35.1056
                                ],
                                [
                                    55.05,
                                    28.88
                                ],
                                [
                                    46.08,
                                    21.7
                                ],
                                [
                                    38.39,
                                    14.8
                                ],
                                [
                                    38.0701,
                                    15.0902
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
                            "startDate": "2022-05-01T07:05:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651388700000,
                            "endTime": 1651391100000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//7.644556212238967//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        36.787923193640985,
                                        16.317139101367708
                                    ],
                                    [
                                        36.787923193640985,
                                        13.85613184036086
                                    ],
                                    [
                                        39.33751154553239,
                                        13.85613184036086
                                    ],
                                    [
                                        39.33751154553239,
                                        16.317139101367708
                                    ],
                                    [
                                        36.787923193640985,
                                        16.317139101367708
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
                            "startDate": "2022-05-01T07:05:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651388700000,
                            "endTime": 1651391100000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//11.466834318358451//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        34.20273425077257,
                                        18.720444030394482
                                    ],
                                    [
                                        34.20273425077257,
                                        11.39657866232614
                                    ],
                                    [
                                        41.806348179941,
                                        11.39657866232614
                                    ],
                                    [
                                        41.806348179941,
                                        18.720444030394482
                                    ],
                                    [
                                        34.20273425077257,
                                        18.720444030394482
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
                            "startDate": "2022-05-01T07:45:00.000Z",
                            "endDate": "2022-05-01T09:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1651391100000,
                            "endTime": 1651397100000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//15.289112424477935//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0701,
                                    15.0902
                                ],
                                [
                                    46.25,
                                    21.55
                                ],
                                [
                                    54.53,
                                    28.12
                                ],
                                [
                                    63.1,
                                    34.97
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
        "_id": "m_f-red_203",
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
            "messageType": "Space--Effects",
            "timestamp": "2022-09-22T13:20:05.881Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-206",
            "title": "Order item 210",
            "startDate": "2022-05-01T06:15:00.000Z",
            "endDate": "2022-05-01T06:15:00.000Z",
            "activity": "f-red-Space-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Red.3.151",
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
        "_id": "m_f-red_206",
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
            "timestamp": "2022-09-21T23:06:22.930Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-209",
            "title": "Order item 213",
            "startDate": "2022-05-01T06:15:00.000Z",
            "endDate": "2022-05-01T12:25:00.000Z",
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Red.13.183",
                    "number": 0
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
                            "startDate": "2022-05-01T06:15:00.000Z",
                            "endDate": "2022-05-01T07:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651385700000,
                            "endTime": 1651388700000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//5.847952391952276//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.7362,
                                    33.4624
                                ],
                                [
                                    69,
                                    39.1
                                ],
                                [
                                    60.33,
                                    44.79
                                ],
                                [
                                    51.93,
                                    50.77
                                ],
                                [
                                    52.3049,
                                    50.3925
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
                            "startDate": "2022-05-01T07:05:00.000Z",
                            "endDate": "2022-05-01T09:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651388700000,
                            "endTime": 1651396500000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//11.695904783904552//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        46.108601333477246,
                                        53.887493128591
                                    ],
                                    [
                                        46.108601333477246,
                                        46.61464021208645
                                    ],
                                    [
                                        57.61868003164199,
                                        46.61464021208645
                                    ],
                                    [
                                        57.61868003164199,
                                        53.887493128591
                                    ],
                                    [
                                        46.108601333477246,
                                        53.887493128591
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
                            "startDate": "2022-05-01T09:15:00.000Z",
                            "endDate": "2022-05-01T12:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1651396500000,
                            "endTime": 1651407900000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//17.54385717585683//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.3049,
                                    50.3925
                                ],
                                [
                                    65.02,
                                    41.81
                                ],
                                [
                                    78.22,
                                    33.71
                                ],
                                [
                                    77.7362,
                                    33.4624
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_209",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-25T22:36:40.770Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-212",
            "title": "Order item 216",
            "startDate": "2022-05-01T06:15:00.000Z",
            "endDate": "2022-05-01T12:15:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.1.34",
                    "number": 0
                },
                {
                    "asset": "Green.11.211",
                    "number": 4
                },
                {
                    "asset": "Green.3.101",
                    "number": 5
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T06:15:00.000Z",
                            "endDate": "2022-05-01T07:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651385700000,
                            "endTime": 1651388700000,
                            "geomId": "Patrol-0",
                            "name": "f-green//5.200921290554106//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.325,
                                    23.6413
                                ],
                                [
                                    33.84,
                                    25.08
                                ],
                                [
                                    30.49,
                                    27.66
                                ],
                                [
                                    27.43,
                                    29.51
                                ],
                                [
                                    26.9714,
                                    29.1128
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
                            "startDate": "2022-05-01T07:05:00.000Z",
                            "endDate": "2022-05-01T10:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651388700000,
                            "endTime": 1651400100000,
                            "geomId": "Patrol-1",
                            "name": "f-green//10.401842581108212//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        24.11209578426052,
                                        31.52033976423708
                                    ],
                                    [
                                        24.11209578426052,
                                        26.64740916601481
                                    ],
                                    [
                                        29.698386795245487,
                                        26.64740916601481
                                    ],
                                    [
                                        29.698386795245487,
                                        31.52033976423708
                                    ],
                                    [
                                        24.11209578426052,
                                        31.52033976423708
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
                            "startDate": "2022-05-01T10:15:00.000Z",
                            "endDate": "2022-05-01T12:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651400100000,
                            "endTime": 1651407300000,
                            "geomId": "Patrol-2",
                            "name": "f-green//15.602763871662319//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.9714,
                                    29.1128
                                ],
                                [
                                    30.05,
                                    27.07
                                ],
                                [
                                    34.35,
                                    25.25
                                ],
                                [
                                    36.93,
                                    23.71
                                ],
                                [
                                    37.325,
                                    23.6413
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_212",
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
            "timestamp": "2022-09-26T03:50:59.401Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-215",
            "title": "Order item 219",
            "startDate": "2022-05-01T06:25:00.000Z",
            "endDate": "2022-05-01T08:25:00.000Z",
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "Red.5.105",
                    "number": 4
                },
                {
                    "asset": "Red.4.222",
                    "number": 1
                },
                {
                    "asset": "Red.9.52",
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
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T06:25:00.000Z",
                            "endDate": "2022-05-01T07:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651386300000,
                            "endTime": 1651389300000,
                            "geomId": "ISTAR-0",
                            "name": "f-red//3.4473113557323813//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    84.148,
                                    28.3666
                                ],
                                [
                                    22.3,
                                    7.86
                                ],
                                [
                                    22.1451,
                                    7.6455
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
                            "startDate": "2022-05-01T07:15:00.000Z",
                            "endDate": "2022-05-01T07:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651389300000,
                            "endTime": 1651391700000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//6.894622711464763//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        19.03516274338394,
                                        10.690362398145512
                                    ],
                                    [
                                        19.03516274338394,
                                        4.578700427495391
                                    ],
                                    [
                                        25.210802647318197,
                                        4.578700427495391
                                    ],
                                    [
                                        25.210802647318197,
                                        10.690362398145512
                                    ],
                                    [
                                        19.03516274338394,
                                        10.690362398145512
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
                            "startDate": "2022-05-01T07:15:00.000Z",
                            "endDate": "2022-05-01T07:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651389300000,
                            "endTime": 1651391700000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//10.341934067197144//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        20.931353644040986,
                                        8.843126000793363
                                    ],
                                    [
                                        20.931353644040986,
                                        6.444502728440988
                                    ],
                                    [
                                        23.35204412273536,
                                        6.444502728440988
                                    ],
                                    [
                                        23.35204412273536,
                                        8.843126000793363
                                    ],
                                    [
                                        20.931353644040986,
                                        8.843126000793363
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
                            "startDate": "2022-05-01T07:55:00.000Z",
                            "endDate": "2022-05-01T08:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1651391700000,
                            "endTime": 1651393500000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//13.789245422929525//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.1451,
                                    7.6455
                                ],
                                [
                                    53.64,
                                    17.55
                                ],
                                [
                                    84.54,
                                    27.86
                                ],
                                [
                                    84.148,
                                    28.3666
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_215",
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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-22T14:49:18.822Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-218",
            "title": "Order item 222",
            "startDate": "2022-05-01T06:45:00.000Z",
            "endDate": "2022-05-01T11:15:00.000Z",
            "activity": "f-red-Air-Air to Air Refuel",
            "ownAssets": [
                {
                    "asset": "Red.11.395",
                    "number": 0
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
                    "uniqid": "Air to Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route out",
                            "startDate": "2022-05-01T06:45:00.000Z",
                            "endDate": "2022-05-01T07:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651387500000,
                            "endTime": 1651390500000,
                            "geomId": "Air to Air Refuel-0",
                            "name": "f-red//5.587122592143714//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.8377,
                                    29.9276
                                ],
                                [
                                    28.14,
                                    22.51
                                ],
                                [
                                    28.3015,
                                    22.9265
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T07:35:00.000Z",
                            "endDate": "2022-05-01T10:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651390500000,
                            "endTime": 1651399500000,
                            "geomId": "Air to Air Refuel-1",
                            "name": "f-red//11.174245184287429//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        26.550006150502025,
                                        24.510622381663918
                                    ],
                                    [
                                        26.550006150502025,
                                        21.32361480769748
                                    ],
                                    [
                                        30.012261772898317,
                                        21.32361480769748
                                    ],
                                    [
                                        30.012261772898317,
                                        24.510622381663918
                                    ],
                                    [
                                        26.550006150502025,
                                        24.510622381663918
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route back",
                            "startDate": "2022-05-01T10:05:00.000Z",
                            "endDate": "2022-05-01T11:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651399500000,
                            "endTime": 1651403700000,
                            "geomId": "Air to Air Refuel-2",
                            "name": "f-red//16.761367776431143//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.3015,
                                    22.9265
                                ],
                                [
                                    61.97,
                                    30.22
                                ],
                                [
                                    61.8377,
                                    29.9276
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_218",
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
            "timestamp": "2022-09-23T15:31:39.034Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-221",
            "title": "Order item 225",
            "startDate": "2022-05-01T06:45:00.000Z",
            "endDate": "2022-05-01T07:35:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.4.105",
                    "number": 4
                },
                {
                    "asset": "Green.3.101",
                    "number": 5
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
                            "startDate": "2022-05-01T06:45:00.000Z",
                            "endDate": "2022-05-01T07:35:00.000Z",
                            "force": "f-green",
                            "startTime": 1651387500000,
                            "endTime": 1651390500000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.620354997459799//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.8086,
                                    16.6126
                                ],
                                [
                                    45.1,
                                    47.93
                                ],
                                [
                                    45.4237,
                                    47.8446
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_221",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-29T05:58:00.036Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-224",
            "title": "Order item 228",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T12:25:00.000Z",
            "activity": "f-blue-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Blue.3.34",
                    "number": 5
                },
                {
                    "asset": "Blue.12.370",
                    "number": 4
                },
                {
                    "asset": "Blue.6.19",
                    "number": 0
                },
                {
                    "asset": "Blue.5.182",
                    "number": 2
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
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Raid-0",
                            "name": "f-blue//6.547008571680635//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0852,
                                    52.2171
                                ],
                                [
                                    52.73,
                                    33.11
                                ],
                                [
                                    67.85,
                                    13.47
                                ],
                                [
                                    67.6026,
                                    13.963
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
                            "startDate": "2022-05-01T07:45:00.000Z",
                            "endDate": "2022-05-01T09:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651391100000,
                            "endTime": 1651396500000,
                            "geomId": "Raid-1",
                            "name": "f-blue//13.09401714336127//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        64.63534315284296,
                                        16.785949436960657
                                    ],
                                    [
                                        64.63534315284296,
                                        11.104948123173504
                                    ],
                                    [
                                        70.49756720156482,
                                        11.104948123173504
                                    ],
                                    [
                                        70.49756720156482,
                                        16.785949436960657
                                    ],
                                    [
                                        64.63534315284296,
                                        16.785949436960657
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
                            "startDate": "2022-05-01T09:15:00.000Z",
                            "endDate": "2022-05-01T12:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651396500000,
                            "endTime": 1651407900000,
                            "geomId": "Raid-2",
                            "name": "f-blue//19.641025715041906//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    67.6026,
                                    13.963
                                ],
                                [
                                    57.78,
                                    26.37
                                ],
                                [
                                    48.05,
                                    39.86
                                ],
                                [
                                    37.6,
                                    52.64
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
        "_id": "m_f-blue_224",
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
            "timestamp": "2022-09-22T18:08:21.828Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-227",
            "title": "Order item 231",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T09:55:00.000Z",
            "activity": "f-green-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Green.6.182",
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
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Raid-0",
                            "name": "f-green//5.367083317134529//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.8086,
                                    16.6126
                                ],
                                [
                                    41.01,
                                    14.92
                                ],
                                [
                                    59.27,
                                    13.28
                                ],
                                [
                                    76.81,
                                    10.93
                                ],
                                [
                                    76.6324,
                                    11.0932
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
                            "startDate": "2022-05-01T07:45:00.000Z",
                            "endDate": "2022-05-01T09:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651391100000,
                            "endTime": 1651398900000,
                            "geomId": "Raid-1",
                            "name": "f-green//10.734166634269059//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        74.60415255061372,
                                        13.062214087366158
                                    ],
                                    [
                                        74.60415255061372,
                                        9.110812664405016
                                    ],
                                    [
                                        78.63340073994625,
                                        9.110812664405016
                                    ],
                                    [
                                        78.63340073994625,
                                        13.062214087366158
                                    ],
                                    [
                                        74.60415255061372,
                                        13.062214087366158
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
                            "startDate": "2022-05-01T09:55:00.000Z",
                            "endDate": "2022-05-01T09:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398900000,
                            "endTime": 1651398900000,
                            "geomId": "Raid-2",
                            "name": "f-green//16.101249951403588//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.6324,
                                    11.0932
                                ],
                                [
                                    23.88,
                                    16.81
                                ],
                                [
                                    23.8086,
                                    16.6126
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_227",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-29T04:02:44.411Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-230",
            "title": "Order item 234",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T07:45:00.000Z",
            "activity": "f-blue-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.2.150",
                    "number": 4
                },
                {
                    "asset": "Blue.4.366",
                    "number": 4
                },
                {
                    "asset": "Blue.2.295",
                    "number": 2
                },
                {
                    "asset": "Blue.12.338",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//3.0805792291648686//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        69.44226742986089,
                                        4.75555558084226
                                    ],
                                    [
                                        69.44226742986089,
                                        3.1432611214817143
                                    ],
                                    [
                                        71.05856232376931,
                                        3.1432611214817143
                                    ],
                                    [
                                        71.05856232376931,
                                        4.75555558084226
                                    ],
                                    [
                                        69.44226742986089,
                                        4.75555558084226
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_230",
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
            "messageType": "Land--Resupply",
            "timestamp": "2022-09-23T11:41:07.785Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-233",
            "title": "Order item 237",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T08:05:00.000Z",
            "activity": "f-red-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.1.338",
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
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Resupply-0",
                            "name": "f-red//4.687496312428266//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    84.3899,
                                    42.4279
                                ],
                                [
                                    34.48,
                                    27.89
                                ],
                                [
                                    34.2437,
                                    27.7938
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
                            "startDate": "2022-05-01T07:45:00.000Z",
                            "endDate": "2022-05-01T08:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651391100000,
                            "endTime": 1651392300000,
                            "geomId": "Resupply-1",
                            "name": "f-red//9.374992624856532//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        31.044773087661625,
                                        30.513433407012208
                                    ],
                                    [
                                        31.044773087661625,
                                        25.004131498818438
                                    ],
                                    [
                                        37.28445786970117,
                                        25.004131498818438
                                    ],
                                    [
                                        37.28445786970117,
                                        30.513433407012208
                                    ],
                                    [
                                        31.044773087661625,
                                        30.513433407012208
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
                            "startDate": "2022-05-01T08:05:00.000Z",
                            "endDate": "2022-05-01T08:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651392300000,
                            "endTime": 1651392300000,
                            "geomId": "Resupply-2",
                            "name": "f-red//14.062488937284797//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.2437,
                                    27.7938
                                ],
                                [
                                    46.53,
                                    31.78
                                ],
                                [
                                    59.7,
                                    34.65
                                ],
                                [
                                    72.16,
                                    38.8
                                ],
                                [
                                    83.89,
                                    42.24
                                ],
                                [
                                    84.3899,
                                    42.4279
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_233",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-22T09:03:31.949Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-236",
            "title": "Order item 240",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T07:45:00.000Z",
            "activity": "f-blue-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.3.345",
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
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//5.187834564596415//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        68.44604619141303,
                                        32.507405103334015
                                    ],
                                    [
                                        68.44604619141303,
                                        32.019539265373815
                                    ],
                                    [
                                        69.02300313372285,
                                        32.019539265373815
                                    ],
                                    [
                                        69.02300313372285,
                                        32.507405103334015
                                    ],
                                    [
                                        68.44604619141303,
                                        32.507405103334015
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_236",
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
            "messageType": "Land--Transit",
            "timestamp": "2022-09-25T20:09:56.904Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-239",
            "title": "Order item 243",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T07:45:00.000Z",
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.9.171",
                    "number": 3
                },
                {
                    "asset": "Blue.7.206",
                    "number": 1
                },
                {
                    "asset": "Blue.10.355",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Transit-0",
                            "name": "f-blue//4.581593985669315//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.7822,
                                    48.827
                                ],
                                [
                                    53.21,
                                    29.48
                                ],
                                [
                                    62.99,
                                    10.49
                                ],
                                [
                                    63.457,
                                    10.0566
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_239",
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
            "timestamp": "2022-09-25T13:00:22.649Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-242",
            "title": "Order item 246",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T11:15:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Blue.6.217",
                    "number": 4
                },
                {
                    "asset": "Blue.5.192",
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//2.8687745756469667//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.6467,
                                    41.1429
                                ],
                                [
                                    42.08,
                                    35.24
                                ],
                                [
                                    46.73,
                                    30.56
                                ],
                                [
                                    51.67,
                                    25.16
                                ],
                                [
                                    51.2246,
                                    24.9088
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
                            "startDate": "2022-05-01T07:45:00.000Z",
                            "endDate": "2022-05-01T08:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651391100000,
                            "endTime": 1651393500000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//5.737549151293933//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        50.87738358648533,
                                        25.222511477695644
                                    ],
                                    [
                                        50.87738358648533,
                                        24.59428882290355
                                    ],
                                    [
                                        51.57005300067462,
                                        24.59428882290355
                                    ],
                                    [
                                        51.57005300067462,
                                        25.222511477695644
                                    ],
                                    [
                                        50.87738358648533,
                                        25.222511477695644
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
                            "startDate": "2022-05-01T08:25:00.000Z",
                            "endDate": "2022-05-01T11:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651393500000,
                            "endTime": 1651403700000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//8.6063237269409//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.2246,
                                    24.9088
                                ],
                                [
                                    44.25,
                                    33.09
                                ],
                                [
                                    37.77,
                                    40.75
                                ],
                                [
                                    37.6467,
                                    41.1429
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_242",
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
            "timestamp": "2022-09-29T19:34:49.185Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-245",
            "title": "Order item 249",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T07:45:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.8.82",
                    "number": 0
                },
                {
                    "asset": "Green.12.397",
                    "number": 0
                },
                {
                    "asset": "Green.7.25",
                    "number": 2
                },
                {
                    "asset": "Green.6.167",
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
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.04937633452937//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    47.0719,
                                    23.3347
                                ],
                                [
                                    45.87,
                                    29.58
                                ],
                                [
                                    44.21,
                                    35.36
                                ],
                                [
                                    43.8912,
                                    35.0533
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_245",
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
            "messageType": "f-red--Maritime--MissileStrike",
            "timestamp": "2022-09-23T00:36:41.834Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-248",
            "title": "Order item 254",
            "startDate": "2022-05-01T07:00:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-red-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Red.4.167",
                    "number": 1,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "SRBM",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_248",
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
            "timestamp": "2022-09-27T01:55:44.628Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-251",
            "title": "Order item 255",
            "startDate": "2022-05-01T07:00:00.000Z",
            "endDate": "2022-05-01T12:40:00.000Z",
            "activity": "f-red-SOF-Activity",
            "ownAssets": [
                {
                    "asset": "Red.10.71",
                    "number": 0
                },
                {
                    "asset": "Red.5.266",
                    "number": 3
                },
                {
                    "asset": "Red.9.174",
                    "number": 0
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
                            "startDate": "2022-05-01T07:00:00.000Z",
                            "endDate": "2022-05-01T07:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651388400000,
                            "endTime": 1651391400000,
                            "geomId": "Activity-0",
                            "name": "f-red//6.090843363665044//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.4841,
                                    12.85
                                ],
                                [
                                    52.58,
                                    22.9
                                ],
                                [
                                    38.15,
                                    33.42
                                ],
                                [
                                    38.0858,
                                    33.7503
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
                            "startDate": "2022-05-01T07:50:00.000Z",
                            "endDate": "2022-05-01T10:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651391400000,
                            "endTime": 1651401600000,
                            "geomId": "Activity-1",
                            "name": "f-red//12.181686727330089//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        33.506410612286516,
                                        37.31017901671118
                                    ],
                                    [
                                        33.506410612286516,
                                        30.035046593738382
                                    ],
                                    [
                                        42.292340588457535,
                                        30.035046593738382
                                    ],
                                    [
                                        42.292340588457535,
                                        37.31017901671118
                                    ],
                                    [
                                        33.506410612286516,
                                        37.31017901671118
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
                            "startDate": "2022-05-01T10:40:00.000Z",
                            "endDate": "2022-05-01T12:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651401600000,
                            "endTime": 1651408800000,
                            "geomId": "Activity-2",
                            "name": "f-red//18.272530090995133//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0858,
                                    33.7503
                                ],
                                [
                                    47.75,
                                    26.32
                                ],
                                [
                                    57.46,
                                    19.95
                                ],
                                [
                                    66.47,
                                    12.87
                                ],
                                [
                                    66.4841,
                                    12.85
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_251",
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
            "timestamp": "2022-09-28T09:42:13.535Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-254",
            "title": "Order item 258",
            "startDate": "2022-05-01T07:10:00.000Z",
            "endDate": "2022-05-01T11:10:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.2.195",
                    "number": 3
                },
                {
                    "asset": "Green.5.329",
                    "number": 4
                },
                {
                    "asset": "Green.9.177",
                    "number": 2
                },
                {
                    "asset": "Green.1.138",
                    "number": 4
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
                            "startDate": "2022-05-01T07:10:00.000Z",
                            "endDate": "2022-05-01T08:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651389000000,
                            "endTime": 1651392000000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//4.951708631590009//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.1974,
                                    7.0777
                                ],
                                [
                                    49.28,
                                    12.37
                                ],
                                [
                                    54.41,
                                    16.71
                                ],
                                [
                                    60.82,
                                    21.34
                                ],
                                [
                                    60.4998,
                                    21.6368
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
                            "startDate": "2022-05-01T08:00:00.000Z",
                            "endDate": "2022-05-01T10:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651392000000,
                            "endTime": 1651400400000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//9.903417263180017//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        60.14651721328183,
                                        21.964068282468162
                                    ],
                                    [
                                        60.14651721328183,
                                        21.308788495667876
                                    ],
                                    [
                                        60.85148368816209,
                                        21.308788495667876
                                    ],
                                    [
                                        60.85148368816209,
                                        21.964068282468162
                                    ],
                                    [
                                        60.14651721328183,
                                        21.964068282468162
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
                            "startDate": "2022-05-01T10:20:00.000Z",
                            "endDate": "2022-05-01T11:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651400400000,
                            "endTime": 1651403400000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//14.855125894770026//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.4998,
                                    21.6368
                                ],
                                [
                                    55.89,
                                    18.18
                                ],
                                [
                                    52.26,
                                    14.69
                                ],
                                [
                                    47.91,
                                    10.49
                                ],
                                [
                                    42.85,
                                    7.57
                                ],
                                [
                                    43.1974,
                                    7.0777
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_254",
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
            "messageType": "Air--Resupply",
            "timestamp": "2022-09-25T23:12:43.233Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-257",
            "title": "Order item 261",
            "startDate": "2022-05-01T07:20:00.000Z",
            "endDate": "2022-05-01T09:50:00.000Z",
            "activity": "f-red-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.2.138",
                    "number": 5
                },
                {
                    "asset": "Red.11.212",
                    "number": 1
                },
                {
                    "asset": "Red.6.400",
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
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T07:20:00.000Z",
                            "endDate": "2022-05-01T08:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651389600000,
                            "endTime": 1651392600000,
                            "geomId": "Resupply-0",
                            "name": "f-red//2.7059950684197247//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.5317,
                                    26.2925
                                ],
                                [
                                    57.94,
                                    23.29
                                ],
                                [
                                    40.8,
                                    20.73
                                ],
                                [
                                    41.3013,
                                    20.432
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
                            "startDate": "2022-05-01T08:10:00.000Z",
                            "endDate": "2022-05-01T09:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651392600000,
                            "endTime": 1651395600000,
                            "geomId": "Resupply-1",
                            "name": "f-red//5.411990136839449//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        40.86359009005282,
                                        20.84052642486198
                                    ],
                                    [
                                        40.86359009005282,
                                        20.022385488397916
                                    ],
                                    [
                                        41.73668767751961,
                                        20.022385488397916
                                    ],
                                    [
                                        41.73668767751961,
                                        20.84052642486198
                                    ],
                                    [
                                        40.86359009005282,
                                        20.84052642486198
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
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Resupply-2",
                            "name": "f-red//8.117985205259174//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.3013,
                                    20.432
                                ],
                                [
                                    49.8,
                                    21.9
                                ],
                                [
                                    58.12,
                                    23.2
                                ],
                                [
                                    65.73,
                                    24.78
                                ],
                                [
                                    74.62,
                                    26.65
                                ],
                                [
                                    74.5317,
                                    26.2925
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_257",
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
            "messageType": "Cyber--AreaEffects",
            "timestamp": "2022-09-28T02:27:13.721Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-260",
            "title": "Order item 264",
            "startDate": "2022-05-01T07:40:00.000Z",
            "endDate": "2022-05-01T08:30:00.000Z",
            "activity": "f-red-Cyber-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.3.301",
                    "number": 1
                },
                {
                    "asset": "Red.9.315",
                    "number": 5
                },
                {
                    "asset": "Red.11.42",
                    "number": 5
                },
                {
                    "asset": "Red.10.283",
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
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T07:40:00.000Z",
                            "endDate": "2022-05-01T08:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651390800000,
                            "endTime": 1651393800000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//4.353702674154192//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        31.15823094048186,
                                        10.987136393521983
                                    ],
                                    [
                                        31.15823094048186,
                                        7.292265235883728
                                    ],
                                    [
                                        34.90273065202071,
                                        7.292265235883728
                                    ],
                                    [
                                        34.90273065202071,
                                        10.987136393521983
                                    ],
                                    [
                                        31.15823094048186,
                                        10.987136393521983
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_260",
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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-26T11:25:45.000Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-263",
            "title": "Order item 267",
            "startDate": "2022-05-01T07:40:00.000Z",
            "endDate": "2022-05-01T11:30:00.000Z",
            "activity": "f-red-Air-Air to Air Refuel",
            "ownAssets": [
                {
                    "asset": "Red.10.283",
                    "number": 1
                },
                {
                    "asset": "Red.4.237",
                    "number": 3
                },
                {
                    "asset": "Red.5.304",
                    "number": 5
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
                    "uniqid": "Air to Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route out",
                            "startDate": "2022-05-01T07:40:00.000Z",
                            "endDate": "2022-05-01T08:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651390800000,
                            "endTime": 1651393800000,
                            "geomId": "Air to Air Refuel-0",
                            "name": "f-red//4.894831448793411//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.6798,
                                    39.5455
                                ],
                                [
                                    61.6,
                                    20.99
                                ],
                                [
                                    40.04,
                                    1.95
                                ],
                                [
                                    40.1312,
                                    2.176
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T08:30:00.000Z",
                            "endDate": "2022-05-01T10:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651393800000,
                            "endTime": 1651400400000,
                            "geomId": "Air to Air Refuel-1",
                            "name": "f-red//9.789662897586823//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        39.750965323927936,
                                        2.5558085776456285
                                    ],
                                    [
                                        39.750965323927936,
                                        1.7960957296129536
                                    ],
                                    [
                                        40.511243154596954,
                                        1.7960957296129536
                                    ],
                                    [
                                        40.511243154596954,
                                        2.5558085776456285
                                    ],
                                    [
                                        39.750965323927936,
                                        2.5558085776456285
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route back",
                            "startDate": "2022-05-01T10:20:00.000Z",
                            "endDate": "2022-05-01T11:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651400400000,
                            "endTime": 1651404600000,
                            "geomId": "Air to Air Refuel-2",
                            "name": "f-red//14.684494346380234//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.1312,
                                    2.176
                                ],
                                [
                                    83.69,
                                    39.94
                                ],
                                [
                                    83.6798,
                                    39.5455
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_263",
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
            "messageType": "Air--Transit",
            "timestamp": "2022-09-29T10:08:17.070Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-266",
            "title": "Order item 270",
            "startDate": "2022-05-01T07:50:00.000Z",
            "endDate": "2022-05-01T08:40:00.000Z",
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.9.85",
                    "number": 3
                },
                {
                    "asset": "Blue.11.378",
                    "number": 5
                },
                {
                    "asset": "Blue.9.385",
                    "number": 3
                },
                {
                    "asset": "Blue.5.106",
                    "number": 4
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
                            "startDate": "2022-05-01T07:50:00.000Z",
                            "endDate": "2022-05-01T08:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651391400000,
                            "endTime": 1651394400000,
                            "geomId": "Transit-0",
                            "name": "f-blue//4.329381394665688//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.1084,
                                    48.1788
                                ],
                                [
                                    37.55,
                                    33.03
                                ],
                                [
                                    38.12,
                                    17.01
                                ],
                                [
                                    38.97,
                                    2.27
                                ],
                                [
                                    39.3792,
                                    2.0076
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_266",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-28T14:34:49.930Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-269",
            "title": "Order item 273",
            "startDate": "2022-05-01T07:50:00.000Z",
            "endDate": "2022-05-01T11:10:00.000Z",
            "activity": "f-green-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.6.106",
                    "number": 1
                },
                {
                    "asset": "Green.9.339",
                    "number": 3
                },
                {
                    "asset": "Green.9.286",
                    "number": 3
                },
                {
                    "asset": "Green.2.346",
                    "number": 2
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T07:50:00.000Z",
                            "endDate": "2022-05-01T08:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651391400000,
                            "endTime": 1651394400000,
                            "geomId": "Patrol-0",
                            "name": "f-green//2.657352509442717//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.6036,
                                    17.486
                                ],
                                [
                                    54.18,
                                    27.95
                                ],
                                [
                                    64.18,
                                    38.84
                                ],
                                [
                                    64.0692,
                                    39.1277
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
                            "startDate": "2022-05-01T08:40:00.000Z",
                            "endDate": "2022-05-01T09:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651394400000,
                            "endTime": 1651396800000,
                            "geomId": "Patrol-1",
                            "name": "f-green//5.314705018885434//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        63.37950508419542,
                                        39.65666201466007
                                    ],
                                    [
                                        63.37950508419542,
                                        38.59473455856534
                                    ],
                                    [
                                        64.74857402773799,
                                        38.59473455856534
                                    ],
                                    [
                                        64.74857402773799,
                                        39.65666201466007
                                    ],
                                    [
                                        63.37950508419542,
                                        39.65666201466007
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
                            "startDate": "2022-05-01T09:20:00.000Z",
                            "endDate": "2022-05-01T11:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651396800000,
                            "endTime": 1651403400000,
                            "geomId": "Patrol-2",
                            "name": "f-green//7.9720575283281505//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.0692,
                                    39.1277
                                ],
                                [
                                    56.86,
                                    32.02
                                ],
                                [
                                    50.72,
                                    24.97
                                ],
                                [
                                    43.86,
                                    17.21
                                ],
                                [
                                    43.6036,
                                    17.486
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_269",
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
            "timestamp": "2022-09-24T00:45:23.580Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-272",
            "title": "Order item 276",
            "startDate": "2022-05-01T07:50:00.000Z",
            "endDate": "2022-05-01T08:40:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.2.346",
                    "number": 1
                },
                {
                    "asset": "Green.13.120",
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
                            "startDate": "2022-05-01T07:50:00.000Z",
                            "endDate": "2022-05-01T08:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651391400000,
                            "endTime": 1651394400000,
                            "geomId": "Transit-0",
                            "name": "f-green//4.8787447907961905//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.7982,
                                    19.3002
                                ],
                                [
                                    35.01,
                                    24.47
                                ],
                                [
                                    46.19,
                                    29.6
                                ],
                                [
                                    57.65,
                                    34.01
                                ],
                                [
                                    69.39,
                                    39.71
                                ],
                                [
                                    69.53,
                                    39.4112
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_272",
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-24T00:39:58.021Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-275",
            "title": "Order item 279",
            "startDate": "2022-05-01T08:10:00.000Z",
            "endDate": "2022-05-01T08:40:00.000Z",
            "activity": "f-blue-Cyber-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Blue.3.6",
                    "number": 4
                },
                {
                    "asset": "Blue.2.119",
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
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_275",
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
            "timestamp": "2022-09-28T14:18:33.253Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-278",
            "title": "Order item 282",
            "startDate": "2022-05-01T08:10:00.000Z",
            "endDate": "2022-05-01T11:50:00.000Z",
            "activity": "f-green-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Green.9.286",
                    "number": 4
                },
                {
                    "asset": "Green.9.339",
                    "number": 0
                },
                {
                    "asset": "Green.4.105",
                    "number": 4
                },
                {
                    "asset": "Green.12.385",
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
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T08:10:00.000Z",
                            "endDate": "2022-05-01T09:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651392600000,
                            "endTime": 1651395600000,
                            "geomId": "Raid-0",
                            "name": "f-green//6.001792867202312//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.678,
                                    10.0519
                                ],
                                [
                                    39.58,
                                    21.28
                                ],
                                [
                                    34.49,
                                    31.51
                                ],
                                [
                                    29.67,
                                    42.02
                                ],
                                [
                                    26.14,
                                    52.81
                                ],
                                [
                                    25.6745,
                                    53.1762
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
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Raid-1",
                            "name": "f-green//12.003585734404624//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        24.28010427996004,
                                        53.98800233241049
                                    ],
                                    [
                                        24.28010427996004,
                                        52.34872480761245
                                    ],
                                    [
                                        27.016613740012584,
                                        52.34872480761245
                                    ],
                                    [
                                        27.016613740012584,
                                        53.98800233241049
                                    ],
                                    [
                                        24.28010427996004,
                                        53.98800233241049
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
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T11:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398600000,
                            "endTime": 1651405800000,
                            "geomId": "Raid-2",
                            "name": "f-green//18.005378601606935//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.6745,
                                    53.1762
                                ],
                                [
                                    29.97,
                                    42.57
                                ],
                                [
                                    34.21,
                                    31.9
                                ],
                                [
                                    38.73,
                                    20.52
                                ],
                                [
                                    43.53,
                                    10.42
                                ],
                                [
                                    43.678,
                                    10.0519
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_278",
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
            "timestamp": "2022-09-29T09:41:09.275Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-281",
            "title": "Order item 285",
            "startDate": "2022-05-01T08:15:00.000Z",
            "endDate": "2022-05-01T11:55:00.000Z",
            "activity": "f-green-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Green.12.385",
                    "number": 2
                },
                {
                    "asset": "Green.13.377",
                    "number": 1
                },
                {
                    "asset": "Green.5.83",
                    "number": 3
                },
                {
                    "asset": "Green.9.303",
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
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T08:15:00.000Z",
                            "endDate": "2022-05-01T09:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651392900000,
                            "endTime": 1651395900000,
                            "geomId": "Raid-0",
                            "name": "f-green//4.9034486575983465//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.9776,
                                    20.9191
                                ],
                                [
                                    34.92,
                                    28.65
                                ],
                                [
                                    44.68,
                                    36.2
                                ],
                                [
                                    54.72,
                                    43.04
                                ],
                                [
                                    65.05,
                                    51.16
                                ],
                                [
                                    64.9617,
                                    50.7792
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
                            "startDate": "2022-05-01T09:05:00.000Z",
                            "endDate": "2022-05-01T09:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395900000,
                            "endTime": 1651395900000,
                            "geomId": "Raid-1",
                            "name": "f-green//9.806897315196693//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        59.75286301494174,
                                        53.748069957697226
                                    ],
                                    [
                                        59.75286301494174,
                                        47.60661889779987
                                    ],
                                    [
                                        69.52876860755133,
                                        47.60661889779987
                                    ],
                                    [
                                        69.52876860755133,
                                        53.748069957697226
                                    ],
                                    [
                                        59.75286301494174,
                                        53.748069957697226
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
                            "startDate": "2022-05-01T09:05:00.000Z",
                            "endDate": "2022-05-01T11:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395900000,
                            "endTime": 1651406100000,
                            "geomId": "Raid-2",
                            "name": "f-green//14.71034597279504//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.9617,
                                    50.7792
                                ],
                                [
                                    24.89,
                                    21.32
                                ],
                                [
                                    24.9776,
                                    20.9191
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_281",
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
            "timestamp": "2022-09-26T10:47:46.087Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-284",
            "title": "Order item 288",
            "startDate": "2022-05-01T08:35:00.000Z",
            "endDate": "2022-05-01T09:25:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.9.303",
                    "number": 1
                },
                {
                    "asset": "Green.12.236",
                    "number": 3
                },
                {
                    "asset": "Green.9.282",
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
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T08:35:00.000Z",
                            "endDate": "2022-05-01T09:25:00.000Z",
                            "force": "f-green",
                            "startTime": 1651394100000,
                            "endTime": 1651397100000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.698525619227439//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    29.8135,
                                    4.3762
                                ],
                                [
                                    40.17,
                                    12.97
                                ],
                                [
                                    51.43,
                                    20.47
                                ],
                                [
                                    61.98,
                                    29.26
                                ],
                                [
                                    71.81,
                                    37.33
                                ],
                                [
                                    72.3082,
                                    37.5656
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_284",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-28T01:38:23.690Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-287",
            "title": "Order item 291",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-red-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.4.41",
                    "number": 0
                },
                {
                    "asset": "Red.13.313",
                    "number": 1
                },
                {
                    "asset": "Red.8.299",
                    "number": 2
                },
                {
                    "asset": "Red.9.398",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//4.387023749761283//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        41.04081189847771,
                                        9.201584582835173
                                    ],
                                    [
                                        41.04081189847771,
                                        4.943982097568851
                                    ],
                                    [
                                        45.3341776162569,
                                        4.943982097568851
                                    ],
                                    [
                                        45.3341776162569,
                                        9.201584582835173
                                    ],
                                    [
                                        41.04081189847771,
                                        9.201584582835173
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_287",
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
            "messageType": "Air--EWAttack",
            "timestamp": "2022-09-25T22:13:02.084Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-290",
            "title": "Order item 294",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T13:00:00.000Z",
            "activity": "f-blue-Air-EW Attack",
            "ownAssets": [
                {
                    "asset": "Blue.5.398",
                    "number": 2
                },
                {
                    "asset": "Blue.9.210",
                    "number": 3
                },
                {
                    "asset": "Blue.12.136",
                    "number": 3
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
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "EW Attack-0",
                            "name": "f-blue//4.968943049199879//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.8147,
                                    31.8334
                                ],
                                [
                                    25.13,
                                    24.98
                                ],
                                [
                                    23.51,
                                    17.19
                                ],
                                [
                                    22.18,
                                    10.69
                                ],
                                [
                                    22.6806,
                                    10.2205
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
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T12:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398000000,
                            "endTime": 1651406400000,
                            "geomId": "EW Attack-1",
                            "name": "f-blue//9.937886098399758//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.376344122031547,
                                        11.496004605889057
                                    ],
                                    [
                                        21.376344122031547,
                                        8.939852689762368
                                    ],
                                    [
                                        23.974406058396454,
                                        8.939852689762368
                                    ],
                                    [
                                        23.974406058396454,
                                        11.496004605889057
                                    ],
                                    [
                                        21.376344122031547,
                                        11.496004605889057
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
                            "startDate": "2022-05-01T12:00:00.000Z",
                            "endDate": "2022-05-01T13:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651406400000,
                            "endTime": 1651410000000,
                            "geomId": "EW Attack-2",
                            "name": "f-blue//14.906829147599638//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.6806,
                                    10.2205
                                ],
                                [
                                    23.93,
                                    21.13
                                ],
                                [
                                    25.71,
                                    31.57
                                ],
                                [
                                    25.8147,
                                    31.8334
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_290",
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
            "timestamp": "2022-09-28T08:31:41.268Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-293",
            "title": "Order item 297",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.8.175",
                    "number": 0
                },
                {
                    "asset": "Blue.1.327",
                    "number": 0
                },
                {
                    "asset": "Blue.5.192",
                    "number": 3
                },
                {
                    "asset": "Blue.9.171",
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
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Transit-0",
                            "name": "f-blue//4.44428351521492//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.6467,
                                    41.1429
                                ],
                                [
                                    30.73,
                                    28.97
                                ],
                                [
                                    24.29,
                                    16.29
                                ],
                                [
                                    24.1755,
                                    16.6829
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_293",
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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-27T00:34:21.243Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-296",
            "title": "Order item 300",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T12:40:00.000Z",
            "activity": "f-red-Air-Air to Air Refuel",
            "ownAssets": [
                {
                    "asset": "Red.13.171",
                    "number": 2
                },
                {
                    "asset": "Red.9.263",
                    "number": 1
                },
                {
                    "asset": "Red.12.68",
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
                    "uniqid": "Air to Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Air to Air Refuel-0",
                            "name": "f-red//2.813045152463019//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.7804,
                                    18.0285
                                ],
                                [
                                    55.15,
                                    12.02
                                ],
                                [
                                    49.92,
                                    5.42
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
                    "uniqid": "Air to Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T12:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651398000000,
                            "endTime": 1651407600000,
                            "geomId": "Air to Air Refuel-1",
                            "name": "f-red//5.626090304926038//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.63681318697363,
                                        6.795615006278284
                                    ],
                                    [
                                        48.63681318697363,
                                        3.615159640009622
                                    ],
                                    [
                                        51.83170433686169,
                                        3.615159640009622
                                    ],
                                    [
                                        51.83170433686169,
                                        6.795615006278284
                                    ],
                                    [
                                        48.63681318697363,
                                        6.795615006278284
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route back",
                            "startDate": "2022-05-01T12:20:00.000Z",
                            "endDate": "2022-05-01T12:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651407600000,
                            "endTime": 1651408800000,
                            "geomId": "Air to Air Refuel-2",
                            "name": "f-red//8.439135457389057//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    50.2383,
                                    5.2074
                                ],
                                [
                                    60.86,
                                    18.23
                                ],
                                [
                                    60.7804,
                                    18.0285
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_296",
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
            "messageType": "Cyber--AreaEffects",
            "timestamp": "2022-09-21T22:21:02.008Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-299",
            "title": "Order item 303",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-blue-Cyber-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.6.387",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//5.075227960944176//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        39.032537465038914,
                                        12.925197713766394
                                    ],
                                    [
                                        39.032537465038914,
                                        12.18667221598848
                                    ],
                                    [
                                        39.789176431028096,
                                        12.18667221598848
                                    ],
                                    [
                                        39.789176431028096,
                                        12.925197713766394
                                    ],
                                    [
                                        39.032537465038914,
                                        12.925197713766394
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_299",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-29T17:51:43.564Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-302",
            "title": "Order item 306",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T13:20:00.000Z",
            "activity": "f-green-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.3.22",
                    "number": 1
                },
                {
                    "asset": "Green.1.394",
                    "number": 5
                },
                {
                    "asset": "Green.11.79",
                    "number": 1
                },
                {
                    "asset": "Green.7.277",
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Patrol-0",
                            "name": "f-green//6.230831936001778//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.0976,
                                    25.3062
                                ],
                                [
                                    30.82,
                                    31.95
                                ],
                                [
                                    38.41,
                                    38.46
                                ],
                                [
                                    45.29,
                                    44.26
                                ],
                                [
                                    51.45,
                                    50.34
                                ],
                                [
                                    51.8054,
                                    50.6289
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
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T12:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398000000,
                            "endTime": 1651407600000,
                            "geomId": "Patrol-1",
                            "name": "f-green//12.461663872003555//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        46.41115338494122,
                                        53.7027939884175
                                    ],
                                    [
                                        46.41115338494122,
                                        47.33717271630212
                                    ],
                                    [
                                        56.51576411700016,
                                        47.33717271630212
                                    ],
                                    [
                                        56.51576411700016,
                                        53.7027939884175
                                    ],
                                    [
                                        46.41115338494122,
                                        53.7027939884175
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
                            "startDate": "2022-05-01T12:20:00.000Z",
                            "endDate": "2022-05-01T13:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651407600000,
                            "endTime": 1651411200000,
                            "geomId": "Patrol-2",
                            "name": "f-green//18.692495808005333//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.8054,
                                    50.6289
                                ],
                                [
                                    37.75,
                                    38.06
                                ],
                                [
                                    24.17,
                                    24.97
                                ],
                                [
                                    24.0976,
                                    25.3062
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_302",
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-25T11:06:25.910Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-305",
            "title": "Order item 309",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T15:20:00.000Z",
            "activity": "f-blue-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.10.277",
                    "number": 1
                },
                {
                    "asset": "Blue.8.188",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//6.2798570822924376//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.1804,
                                    40.1928
                                ],
                                [
                                    23.92,
                                    24.86
                                ],
                                [
                                    24.0976,
                                    25.3062
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
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T12:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398000000,
                            "endTime": 1651409400000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//12.559714164584875//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        20.497716807799485,
                                        28.428932954482995
                                    ],
                                    [
                                        20.497716807799485,
                                        22.100510739636682
                                    ],
                                    [
                                        27.514193619195584,
                                        22.100510739636682
                                    ],
                                    [
                                        27.514193619195584,
                                        28.428932954482995
                                    ],
                                    [
                                        20.497716807799485,
                                        28.428932954482995
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
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T12:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398000000,
                            "endTime": 1651409400000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//18.839571246877313//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        19.782605479387506,
                                        29.017850034320958
                                    ],
                                    [
                                        19.782605479387506,
                                        21.476549910442888
                                    ],
                                    [
                                        28.15201781091657,
                                        21.476549910442888
                                    ],
                                    [
                                        28.15201781091657,
                                        29.017850034320958
                                    ],
                                    [
                                        19.782605479387506,
                                        29.017850034320958
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
                            "startDate": "2022-05-01T12:50:00.000Z",
                            "endDate": "2022-05-01T15:20:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651409400000,
                            "endTime": 1651418400000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//25.11942832916975//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.0976,
                                    25.3062
                                ],
                                [
                                    26.12,
                                    28.98
                                ],
                                [
                                    27.96,
                                    32.48
                                ],
                                [
                                    29.08,
                                    36.26
                                ],
                                [
                                    31.49,
                                    40.33
                                ],
                                [
                                    31.1804,
                                    40.1928
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_305",
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
            "messageType": "SOF--SOFActivity",
            "timestamp": "2022-09-25T18:05:09.046Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-308",
            "title": "Order item 312",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T11:40:00.000Z",
            "activity": "f-red-SOF-Activity",
            "ownAssets": [
                {
                    "asset": "Red.10.351",
                    "number": 3
                },
                {
                    "asset": "Red.7.202",
                    "number": 2
                },
                {
                    "asset": "Red.4.167",
                    "number": 2
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
                    "uniqid": "Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Activity-0",
                            "name": "f-red//5.222303399816155//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.9617,
                                    50.7792
                                ],
                                [
                                    53.9,
                                    47.06
                                ],
                                [
                                    43.97,
                                    43.47
                                ],
                                [
                                    33.31,
                                    39.16
                                ],
                                [
                                    33.1486,
                                    39.4751
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
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T10:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651398000000,
                            "endTime": 1651399800000,
                            "geomId": "Activity-1",
                            "name": "f-red//10.44460679963231//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        29.367449403073625,
                                        42.2157829544166
                                    ],
                                    [
                                        29.367449403073625,
                                        36.6213780532263
                                    ],
                                    [
                                        36.63739808157414,
                                        36.6213780532263
                                    ],
                                    [
                                        36.63739808157414,
                                        42.2157829544166
                                    ],
                                    [
                                        29.367449403073625,
                                        42.2157829544166
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
                            "startDate": "2022-05-01T10:10:00.000Z",
                            "endDate": "2022-05-01T11:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651399800000,
                            "endTime": 1651405200000,
                            "geomId": "Activity-2",
                            "name": "f-red//15.666910199448466//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.1486,
                                    39.4751
                                ],
                                [
                                    41.58,
                                    42.05
                                ],
                                [
                                    48.83,
                                    45.43
                                ],
                                [
                                    57.36,
                                    48.09
                                ],
                                [
                                    65.17,
                                    51.04
                                ],
                                [
                                    64.9617,
                                    50.7792
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_308",
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
            "timestamp": "2022-09-23T09:14:37.692Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-311",
            "title": "Order item 318",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-blue-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Blue.13.245",
                    "number": 3,
                    "missileType": "Jet OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78",
                    "missileType": "IRBM",
                    "number": 2
                },
                {
                    "asset": "Green.4.351",
                    "missileType": "Low Obs Cruise",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_311",
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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-23T09:14:37.692Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-314",
            "title": "Order item 318",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T14:30:00.000Z",
            "activity": "f-blue-Air-Air to Air Refuel",
            "ownAssets": [
                {
                    "asset": "Blue.1.358",
                    "number": 4
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
                    "uniqid": "Air to Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Air to Air Refuel-0",
                            "name": "f-blue//4.787459539249539//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.202,
                                    29.5448
                                ],
                                [
                                    66.95,
                                    47.91
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
                    "uniqid": "Air to Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T11:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398000000,
                            "endTime": 1651404600000,
                            "geomId": "Air to Air Refuel-1",
                            "name": "f-blue//9.574919078499079//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        62.906348589850666,
                                        50.73497905482832
                                    ],
                                    [
                                        62.906348589850666,
                                        45.20808222264275
                                    ],
                                    [
                                        71.21111733007982,
                                        45.20808222264275
                                    ],
                                    [
                                        71.21111733007982,
                                        50.73497905482832
                                    ],
                                    [
                                        62.906348589850666,
                                        50.73497905482832
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route back",
                            "startDate": "2022-05-01T11:30:00.000Z",
                            "endDate": "2022-05-01T14:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651404600000,
                            "endTime": 1651415400000,
                            "geomId": "Air to Air Refuel-2",
                            "name": "f-blue//14.362378617748618//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    67.2815,
                                    48.0462
                                ],
                                [
                                    57.71,
                                    42.29
                                ],
                                [
                                    48.29,
                                    35.69
                                ],
                                [
                                    38.17,
                                    29.38
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
        "_id": "m_f-blue_314",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-29T01:25:23.200Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-317",
            "title": "Order item 321",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T10:10:00.000Z",
            "activity": "f-red-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Red.5.290",
                    "number": 0
                },
                {
                    "asset": "Red.7.361",
                    "number": 0
                },
                {
                    "asset": "Red.8.145",
                    "number": 5
                },
                {
                    "asset": "Red.11.42",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Patrol-0",
                            "name": "f-red//5.410169361159205//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.8297,
                                    50.6523
                                ],
                                [
                                    58.08,
                                    51.38
                                ],
                                [
                                    49.63,
                                    51.41
                                ],
                                [
                                    49.3121,
                                    51.623
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
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T10:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651398000000,
                            "endTime": 1651399800000,
                            "geomId": "Patrol-1",
                            "name": "f-red//10.82033872231841//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        46.42672273232567,
                                        53.312369658529626
                                    ],
                                    [
                                        46.42672273232567,
                                        49.868047321179176
                                    ],
                                    [
                                        51.986479872599624,
                                        49.868047321179176
                                    ],
                                    [
                                        51.986479872599624,
                                        53.312369658529626
                                    ],
                                    [
                                        46.42672273232567,
                                        53.312369658529626
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
                            "startDate": "2022-05-01T10:10:00.000Z",
                            "endDate": "2022-05-01T10:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651399800000,
                            "endTime": 1651399800000,
                            "geomId": "Patrol-2",
                            "name": "f-red//16.230508083477616//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    49.3121,
                                    51.623
                                ],
                                [
                                    67.21,
                                    50.67
                                ],
                                [
                                    66.8297,
                                    50.6523
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_317",
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
            "messageType": "Land--Transit",
            "timestamp": "2022-09-22T15:20:09.499Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-320",
            "title": "Order item 324",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T09:45:00.000Z",
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.4.42",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T08:55:00.000Z",
                            "endDate": "2022-05-01T09:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395300000,
                            "endTime": 1651398300000,
                            "geomId": "Transit-0",
                            "name": "f-blue//4.9263003543019295//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    50.8476,
                                    45.6251
                                ],
                                [
                                    45.6,
                                    39.62
                                ],
                                [
                                    40.2,
                                    33.47
                                ],
                                [
                                    35.1,
                                    26.61
                                ],
                                [
                                    30.27,
                                    21.03
                                ],
                                [
                                    30.177,
                                    20.753
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_320",
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
            "timestamp": "2022-09-29T02:58:56.588Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-323",
            "title": "Order item 327",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T09:45:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.5.14",
                    "number": 3
                },
                {
                    "asset": "Green.13.364",
                    "number": 4
                },
                {
                    "asset": "Green.10.28",
                    "number": 1
                },
                {
                    "asset": "Green.11.205",
                    "number": 1
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
                            "startDate": "2022-05-01T08:55:00.000Z",
                            "endDate": "2022-05-01T09:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395300000,
                            "endTime": 1651398300000,
                            "geomId": "Transit-0",
                            "name": "f-green//3.3358525140210986//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.8059,
                                    25.3124
                                ],
                                [
                                    42.48,
                                    34.72
                                ],
                                [
                                    40.39,
                                    43.38
                                ],
                                [
                                    37.59,
                                    52.33
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
        "_id": "m_f-green_323",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-23T12:21:44.468Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-326",
            "title": "Order item 330",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T13:25:00.000Z",
            "activity": "f-blue-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Blue.4.205",
                    "number": 2
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
                            "startDate": "2022-05-01T08:55:00.000Z",
                            "endDate": "2022-05-01T09:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395300000,
                            "endTime": 1651398300000,
                            "geomId": "Raid-0",
                            "name": "f-blue//5.638825844973326//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.2191,
                                    44.0692
                                ],
                                [
                                    47.6,
                                    34.07
                                ],
                                [
                                    43.02,
                                    25.12
                                ],
                                [
                                    37.73,
                                    15.45
                                ],
                                [
                                    38.0701,
                                    15.0902
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
                            "startDate": "2022-05-01T09:45:00.000Z",
                            "endDate": "2022-05-01T12:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398300000,
                            "endTime": 1651408500000,
                            "geomId": "Raid-1",
                            "name": "f-blue//11.277651689946651//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        35.26323169052286,
                                        17.746342361538385
                                    ],
                                    [
                                        35.26323169052286,
                                        12.400356806598728
                                    ],
                                    [
                                        40.80720581247941,
                                        12.400356806598728
                                    ],
                                    [
                                        40.80720581247941,
                                        17.746342361538385
                                    ],
                                    [
                                        35.26323169052286,
                                        17.746342361538385
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
                            "startDate": "2022-05-01T12:35:00.000Z",
                            "endDate": "2022-05-01T13:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651408500000,
                            "endTime": 1651411500000,
                            "geomId": "Raid-2",
                            "name": "f-blue//16.916477534919977//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0701,
                                    15.0902
                                ],
                                [
                                    52.49,
                                    44.22
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
        "_id": "m_f-blue_326",
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
            "timestamp": "2022-09-22T11:28:33.138Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-329",
            "title": "Order item 333",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T09:55:00.000Z",
            "activity": "f-red-Space-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Red.3.215",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.4.351"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_329",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-26T00:19:22.599Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-332",
            "title": "Order item 336",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T16:05:00.000Z",
            "activity": "f-blue-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "Blue.13.45",
                    "number": 1
                },
                {
                    "asset": "Blue.2.215",
                    "number": 0
                },
                {
                    "asset": "Blue.5.98",
                    "number": 3
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
                    "uniqid": "ASW Barrier-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route out",
                            "startDate": "2022-05-01T08:55:00.000Z",
                            "endDate": "2022-05-01T09:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395300000,
                            "endTime": 1651398300000,
                            "geomId": "ASW Barrier-0",
                            "name": "f-blue//6.925036015920341//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.6054,
                                    54.4903
                                ],
                                [
                                    43.7,
                                    44.39
                                ],
                                [
                                    62.89,
                                    34.4
                                ],
                                [
                                    82.36,
                                    24.68
                                ],
                                [
                                    82.1939,
                                    24.9287
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
                            "startDate": "2022-05-01T09:45:00.000Z",
                            "endDate": "2022-05-01T12:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398300000,
                            "endTime": 1651409700000,
                            "geomId": "ASW Barrier-1",
                            "name": "f-blue//13.850072031840682//ASW Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        80.49842250444122,
                                        26.437353050597434
                                    ],
                                    [
                                        80.49842250444122,
                                        23.401336658074175
                                    ],
                                    [
                                        83.84812430975732,
                                        23.401336658074175
                                    ],
                                    [
                                        83.84812430975732,
                                        26.437353050597434
                                    ],
                                    [
                                        80.49842250444122,
                                        26.437353050597434
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
                            "startDate": "2022-05-01T12:55:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651409700000,
                            "endTime": 1651421100000,
                            "geomId": "ASW Barrier-2",
                            "name": "f-blue//20.775108047761023//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    82.1939,
                                    24.9287
                                ],
                                [
                                    24.32,
                                    54.43
                                ],
                                [
                                    24.6054,
                                    54.4903
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_332",
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
            "timestamp": "2022-09-25T18:54:12.851Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-335",
            "title": "Order item 339",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T14:05:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Blue.6.94",
                    "number": 4
                },
                {
                    "asset": "Blue.9.204",
                    "number": 2
                },
                {
                    "asset": "Blue.8.27",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T08:55:00.000Z",
                            "endDate": "2022-05-01T09:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395300000,
                            "endTime": 1651398300000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//5.908272851258516//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.9282,
                                    48.1367
                                ],
                                [
                                    45.05,
                                    40.98
                                ],
                                [
                                    46.98,
                                    33.63
                                ],
                                [
                                    48.2,
                                    26.57
                                ],
                                [
                                    50.71,
                                    19.8
                                ],
                                [
                                    50.3947,
                                    19.639
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
                            "startDate": "2022-05-01T09:45:00.000Z",
                            "endDate": "2022-05-01T11:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398300000,
                            "endTime": 1651403100000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//11.816545702517033//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        49.84374371359166,
                                        20.155379868056308
                                    ],
                                    [
                                        49.84374371359166,
                                        19.12095386849865
                                    ],
                                    [
                                        50.94211802902903,
                                        19.12095386849865
                                    ],
                                    [
                                        50.94211802902903,
                                        20.155379868056308
                                    ],
                                    [
                                        49.84374371359166,
                                        20.155379868056308
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
                            "startDate": "2022-05-01T11:05:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651403100000,
                            "endTime": 1651413900000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//17.72481855377555//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    50.3947,
                                    19.639
                                ],
                                [
                                    48.22,
                                    26.9
                                ],
                                [
                                    47.06,
                                    34.18
                                ],
                                [
                                    45.18,
                                    40.73
                                ],
                                [
                                    42.58,
                                    48.57
                                ],
                                [
                                    42.9282,
                                    48.1367
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_335",
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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-21T19:13:03.893Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-338",
            "title": "Order item 342",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T12:35:00.000Z",
            "activity": "f-red-Air-Air to Air Refuel",
            "ownAssets": [
                {
                    "asset": "Red.4.363",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Air to Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route out",
                            "startDate": "2022-05-01T08:55:00.000Z",
                            "endDate": "2022-05-01T09:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395300000,
                            "endTime": 1651398300000,
                            "geomId": "Air to Air Refuel-0",
                            "name": "f-red//3.7849308624863625//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.4396,
                                    46.0718
                                ],
                                [
                                    62.18,
                                    31.97
                                ],
                                [
                                    45.06,
                                    17.01
                                ],
                                [
                                    29.23,
                                    2.34
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
                    "uniqid": "Air to Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T09:45:00.000Z",
                            "endDate": "2022-05-01T10:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651398300000,
                            "endTime": 1651402500000,
                            "geomId": "Air to Air Refuel-1",
                            "name": "f-red//7.569861724972725//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        25.890023751141964,
                                        5.824189058310715
                                    ],
                                    [
                                        25.890023751141964,
                                        -0.20900869798805657
                                    ],
                                    [
                                        31.938929079488187,
                                        -0.20900869798805657
                                    ],
                                    [
                                        31.938929079488187,
                                        5.824189058310715
                                    ],
                                    [
                                        25.890023751141964,
                                        5.824189058310715
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route back",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T12:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651402500000,
                            "endTime": 1651408500000,
                            "geomId": "Air to Air Refuel-2",
                            "name": "f-red//11.354792587459087//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.9223,
                                    2.8115
                                ],
                                [
                                    78.45,
                                    46.54
                                ],
                                [
                                    78.4396,
                                    46.0718
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_338",
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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-22T09:15:55.725Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-341",
            "title": "Order item 345",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T13:20:00.000Z",
            "activity": "f-blue-Air-Air to Air Refuel",
            "ownAssets": [
                {
                    "asset": "Blue.10.51",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Air to Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route out",
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Air to Air Refuel-0",
                            "name": "f-blue//5.555010040290654//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.2974,
                                    54.9518
                                ],
                                [
                                    44.22,
                                    43.08
                                ],
                                [
                                    55.53,
                                    30.6
                                ],
                                [
                                    55.5709,
                                    30.6457
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T12:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398600000,
                            "endTime": 1651408200000,
                            "geomId": "Air to Air Refuel-1",
                            "name": "f-blue//11.110020080581307//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        53.085534402263285,
                                        32.71352321183749
                                    ],
                                    [
                                        53.085534402263285,
                                        28.532595469525745
                                    ],
                                    [
                                        57.951073365426716,
                                        28.532595469525745
                                    ],
                                    [
                                        57.951073365426716,
                                        32.71352321183749
                                    ],
                                    [
                                        53.085534402263285,
                                        32.71352321183749
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route back",
                            "startDate": "2022-05-01T12:30:00.000Z",
                            "endDate": "2022-05-01T13:20:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651408200000,
                            "endTime": 1651411200000,
                            "geomId": "Air to Air Refuel-2",
                            "name": "f-blue//16.66503012087196//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.5709,
                                    30.6457
                                ],
                                [
                                    33.11,
                                    54.83
                                ],
                                [
                                    33.2974,
                                    54.9518
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_341",
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
            "timestamp": "2022-09-27T13:02:48.348Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-344",
            "title": "Order item 348",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T12:20:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.10.359",
                    "number": 5
                },
                {
                    "asset": "Green.5.288",
                    "number": 5
                },
                {
                    "asset": "Green.3.330",
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
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//6.21851038467139//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.7689,
                                    9.56
                                ],
                                [
                                    48.6,
                                    15.49
                                ],
                                [
                                    45.45,
                                    21.45
                                ],
                                [
                                    42.59,
                                    27.68
                                ],
                                [
                                    40,
                                    33.2
                                ],
                                [
                                    40.0106,
                                    33.1265
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
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398600000,
                            "endTime": 1651398600000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//12.43702076934278//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        39.111854829894895,
                                        33.869527845671236
                                    ],
                                    [
                                        39.111854829894895,
                                        32.377128722437675
                                    ],
                                    [
                                        40.89419752529863,
                                        32.377128722437675
                                    ],
                                    [
                                        40.89419752529863,
                                        33.869527845671236
                                    ],
                                    [
                                        39.111854829894895,
                                        33.869527845671236
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
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T12:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398600000,
                            "endTime": 1651407600000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//18.65553115401417//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.0106,
                                    33.1265
                                ],
                                [
                                    42.71,
                                    27.49
                                ],
                                [
                                    46.33,
                                    21.77
                                ],
                                [
                                    49.23,
                                    15.33
                                ],
                                [
                                    51.42,
                                    9.18
                                ],
                                [
                                    51.7689,
                                    9.56
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_344",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-28T22:33:41.762Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-347",
            "title": "Order item 351",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T12:50:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Blue.7.86",
                    "number": 4
                },
                {
                    "asset": "Blue.10.355",
                    "number": 0
                },
                {
                    "asset": "Blue.8.337",
                    "number": 2
                },
                {
                    "asset": "Blue.5.33",
                    "number": 2
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//5.775431900285184//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0852,
                                    52.2171
                                ],
                                [
                                    41.49,
                                    42.83
                                ],
                                [
                                    45.07,
                                    32.62
                                ],
                                [
                                    47.94,
                                    22.69
                                ],
                                [
                                    48.1616,
                                    22.7075
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
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T10:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398600000,
                            "endTime": 1651401000000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//11.550863800570369//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        44.99679085268856,
                                        25.532491301247596
                                    ],
                                    [
                                        44.99679085268856,
                                        19.82280242168768
                                    ],
                                    [
                                        51.19708581873853,
                                        19.82280242168768
                                    ],
                                    [
                                        51.19708581873853,
                                        25.532491301247596
                                    ],
                                    [
                                        44.99679085268856,
                                        25.532491301247596
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
                            "startDate": "2022-05-01T10:30:00.000Z",
                            "endDate": "2022-05-01T12:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651401000000,
                            "endTime": 1651409400000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//17.326295700855553//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.1616,
                                    22.7075
                                ],
                                [
                                    43.05,
                                    37.56
                                ],
                                [
                                    38.35,
                                    51.82
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
        "_id": "m_f-blue_347",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-26T13:48:35.966Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-350",
            "title": "Order item 354",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T11:50:00.000Z",
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Red.2.33",
                    "number": 3
                },
                {
                    "asset": "Red.3.242",
                    "number": 5
                },
                {
                    "asset": "Red.7.164",
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
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//4.225774587132037//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.2579,
                                    53.7477
                                ],
                                [
                                    35.73,
                                    18.79
                                ],
                                [
                                    36.1131,
                                    18.8018
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
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T11:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651398600000,
                            "endTime": 1651405200000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//8.451549174264073//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        35.14057570193275,
                                        19.714808756139753
                                    ],
                                    [
                                        35.14057570193275,
                                        17.88380942886466
                                    ],
                                    [
                                        37.07509993639059,
                                        17.88380942886466
                                    ],
                                    [
                                        37.07509993639059,
                                        19.714808756139753
                                    ],
                                    [
                                        35.14057570193275,
                                        19.714808756139753
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
                            "startDate": "2022-05-01T11:40:00.000Z",
                            "endDate": "2022-05-01T11:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651405200000,
                            "endTime": 1651405800000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//12.67732376139611//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.1131,
                                    18.8018
                                ],
                                [
                                    61.15,
                                    36.63
                                ],
                                [
                                    85.7,
                                    53.98
                                ],
                                [
                                    85.2579,
                                    53.7477
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_350",
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
            "messageType": "Space--Effects",
            "timestamp": "2022-09-28T18:47:30.961Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-353",
            "title": "Order item 357",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-blue-Space-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Blue.9.199",
                    "number": 1
                },
                {
                    "asset": "Blue.2.348",
                    "number": 4
                },
                {
                    "asset": "Blue.6.209",
                    "number": 0
                },
                {
                    "asset": "Blue.10.185",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_353",
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
            "messageType": "Air--ISTAR",
            "timestamp": "2022-09-27T05:30:26.746Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-356",
            "title": "Order item 360",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T13:40:00.000Z",
            "activity": "f-blue-Air-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.10.185",
                    "number": 2
                },
                {
                    "asset": "Blue.13.273",
                    "number": 1
                },
                {
                    "asset": "Blue.5.75",
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
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//2.8067234652116895//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.8147,
                                    31.8334
                                ],
                                [
                                    26.97,
                                    27.71
                                ],
                                [
                                    29.28,
                                    23.75
                                ],
                                [
                                    30.89,
                                    19.08
                                ],
                                [
                                    30.6517,
                                    19.5374
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
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T11:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398600000,
                            "endTime": 1651405200000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//5.613446930423379//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        27.61794313776531,
                                        22.318822284327673
                                    ],
                                    [
                                        27.61794313776531,
                                        16.707084694457098
                                    ],
                                    [
                                        33.58178260315283,
                                        16.707084694457098
                                    ],
                                    [
                                        33.58178260315283,
                                        22.318822284327673
                                    ],
                                    [
                                        27.61794313776531,
                                        22.318822284327673
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
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T11:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398600000,
                            "endTime": 1651405200000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//8.420170395635068//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        28.963425369499447,
                                        21.10464040293747
                                    ],
                                    [
                                        28.963425369499447,
                                        17.954784390595727
                                    ],
                                    [
                                        32.30735404466674,
                                        17.954784390595727
                                    ],
                                    [
                                        32.30735404466674,
                                        21.10464040293747
                                    ],
                                    [
                                        28.963425369499447,
                                        21.10464040293747
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
                            "startDate": "2022-05-01T11:40:00.000Z",
                            "endDate": "2022-05-01T13:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405200000,
                            "endTime": 1651412400000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//11.226893860846758//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.6517,
                                    19.5374
                                ],
                                [
                                    28.51,
                                    25.57
                                ],
                                [
                                    25.71,
                                    31.95
                                ],
                                [
                                    25.8147,
                                    31.8334
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_356",
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
            "messageType": "Space--AreaEffects",
            "timestamp": "2022-09-21T21:57:23.321Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-359",
            "title": "Order item 363",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T09:50:00.000Z",
            "activity": "f-red-Space-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.1.390",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//2.937329661101103//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        37.3274351819128,
                                        24.045400858865104
                                    ],
                                    [
                                        37.3274351819128,
                                        20.13465900553704
                                    ],
                                    [
                                        41.55180429966567,
                                        20.13465900553704
                                    ],
                                    [
                                        41.55180429966567,
                                        24.045400858865104
                                    ],
                                    [
                                        37.3274351819128,
                                        24.045400858865104
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_359",
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
            "timestamp": "2022-09-24T06:11:44.283Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-362",
            "title": "Order item 373",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T11:00:00.000Z",
            "activity": "f-green-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Green.5.14",
                    "number": 3,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Green.4.382",
                    "number": 0,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.4.64",
                    "number": 0,
                    "missileType": "IRBM"
                },
                {
                    "asset": "Green.2.258",
                    "number": 5,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "MRBM",
                    "number": 5
                },
                {
                    "asset": "Red.10.351",
                    "missileType": "Low Obs Cruise",
                    "number": 4
                },
                {
                    "asset": "Blue.4.50",
                    "missileType": "IRBM",
                    "number": 2
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_362",
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
            "timestamp": "2022-09-25T00:03:18.844Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-365",
            "title": "Order item 369",
            "startDate": "2022-05-01T09:05:00.000Z",
            "endDate": "2022-05-01T14:05:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.2.258",
                    "number": 5
                },
                {
                    "asset": "Green.2.166",
                    "number": 5
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
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T09:05:00.000Z",
                            "endDate": "2022-05-01T09:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395900000,
                            "endTime": 1651398900000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//4.878805552609265//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.7642,
                                    20.8273
                                ],
                                [
                                    52.44,
                                    29.17
                                ],
                                [
                                    52.97,
                                    37.38
                                ],
                                [
                                    53.79,
                                    44.87
                                ],
                                [
                                    54.9,
                                    52.64
                                ],
                                [
                                    55.066,
                                    53.1008
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
                            "startDate": "2022-05-01T09:55:00.000Z",
                            "endDate": "2022-05-01T12:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398900000,
                            "endTime": 1651406700000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//9.75761110521853//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        51.17563189572434,
                                        55.25656547428077
                                    ],
                                    [
                                        51.17563189572434,
                                        50.83049828678301
                                    ],
                                    [
                                        58.57574532671466,
                                        50.83049828678301
                                    ],
                                    [
                                        58.57574532671466,
                                        55.25656547428077
                                    ],
                                    [
                                        51.17563189572434,
                                        55.25656547428077
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
                            "startDate": "2022-05-01T12:05:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651406700000,
                            "endTime": 1651413900000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//14.636416657827795//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.066,
                                    53.1008
                                ],
                                [
                                    51.72,
                                    21.31
                                ],
                                [
                                    51.7642,
                                    20.8273
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_365",
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
            "timestamp": "2022-09-25T01:42:17.791Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-368",
            "title": "Order item 372",
            "startDate": "2022-05-01T09:25:00.000Z",
            "endDate": "2022-05-01T10:15:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.8.322",
                    "number": 4
                },
                {
                    "asset": "Green.11.169",
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
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T09:25:00.000Z",
                            "endDate": "2022-05-01T10:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651397100000,
                            "endTime": 1651400100000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.689675252884626//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.3013,
                                    20.432
                                ],
                                [
                                    46.56,
                                    31.13
                                ],
                                [
                                    52.3,
                                    41.29
                                ],
                                [
                                    52.0503,
                                    41.7764
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_368",
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
            "messageType": "Maritime--Resupply",
            "timestamp": "2022-09-29T17:05:17.529Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-371",
            "title": "Order item 375",
            "startDate": "2022-05-01T09:40:00.000Z",
            "endDate": "2022-05-01T13:50:00.000Z",
            "activity": "f-blue-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.4.205",
                    "number": 3
                },
                {
                    "asset": "Blue.4.392",
                    "number": 5
                },
                {
                    "asset": "Blue.5.293",
                    "number": 2
                },
                {
                    "asset": "Blue.12.307",
                    "number": 2
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
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T10:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398000000,
                            "endTime": 1651401000000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//2.393966124393046//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.3865,
                                    49.994
                                ],
                                [
                                    44.39,
                                    38.6
                                ],
                                [
                                    64.63,
                                    26.44
                                ],
                                [
                                    84.15,
                                    14.57
                                ],
                                [
                                    84.39,
                                    14.6958
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
                            "startDate": "2022-05-01T10:30:00.000Z",
                            "endDate": "2022-05-01T11:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651401000000,
                            "endTime": 1651405800000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//4.787932248786092//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        80.33424374098128,
                                        18.506895197198972
                                    ],
                                    [
                                        80.33424374098128,
                                        10.816711340095129
                                    ],
                                    [
                                        88.30536209792368,
                                        10.816711340095129
                                    ],
                                    [
                                        88.30536209792368,
                                        18.506895197198972
                                    ],
                                    [
                                        80.33424374098128,
                                        18.506895197198972
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
                            "startDate": "2022-05-01T11:50:00.000Z",
                            "endDate": "2022-05-01T13:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405800000,
                            "endTime": 1651413000000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//7.181898373179138//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    84.39,
                                    14.6958
                                ],
                                [
                                    64.75,
                                    26.54
                                ],
                                [
                                    44.31,
                                    38.59
                                ],
                                [
                                    24.16,
                                    49.92
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
        "_id": "m_f-blue_371",
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
            "timestamp": "2022-09-27T17:03:19.376Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-374",
            "title": "Order item 381",
            "startDate": "2022-05-01T09:40:00.000Z",
            "endDate": "2022-05-01T11:30:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.9.307",
                    "number": 0,
                    "missileType": "Standard Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Propellor OWA UAV",
                    "number": 0
                },
                {
                    "asset": "Red.10.351",
                    "missileType": "Propellor OWA UAV",
                    "number": 2
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_374",
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
            "timestamp": "2022-09-27T17:03:19.376Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-377",
            "title": "Order item 381",
            "startDate": "2022-05-01T09:45:00.000Z",
            "endDate": "2022-05-01T10:35:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.8.229",
                    "number": 1
                },
                {
                    "asset": "Green.7.296",
                    "number": 0
                },
                {
                    "asset": "Green.8.77",
                    "number": 2
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
                            "startDate": "2022-05-01T09:45:00.000Z",
                            "endDate": "2022-05-01T10:35:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398300000,
                            "endTime": 1651401300000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.482811371795833//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    29.6706,
                                    10.8875
                                ],
                                [
                                    24.31,
                                    49.62
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
        "_id": "m_f-green_377",
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
            "timestamp": "2022-09-29T09:38:21.485Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-380",
            "title": "Order item 384",
            "startDate": "2022-05-01T10:05:00.000Z",
            "endDate": "2022-05-01T13:45:00.000Z",
            "activity": "f-blue-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Blue.12.370",
                    "number": 3
                },
                {
                    "asset": "Blue.8.377",
                    "number": 0
                },
                {
                    "asset": "Blue.5.98",
                    "number": 3
                },
                {
                    "asset": "Blue.5.331",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T10:05:00.000Z",
                            "endDate": "2022-05-01T10:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651399500000,
                            "endTime": 1651402500000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-blue//2.8673657523468137//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.6467,
                                    41.1429
                                ],
                                [
                                    30.87,
                                    25.77
                                ],
                                [
                                    23.61,
                                    10.91
                                ],
                                [
                                    23.5647,
                                    11.2976
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
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651402500000,
                            "endTime": 1651404300000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-blue//5.734731504693627//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        20.32657757163672,
                                        14.416275703095174
                                    ],
                                    [
                                        20.32657757163672,
                                        8.144535063983795
                                    ],
                                    [
                                        26.732743885557444,
                                        8.144535063983795
                                    ],
                                    [
                                        26.732743885557444,
                                        14.416275703095174
                                    ],
                                    [
                                        20.32657757163672,
                                        14.416275703095174
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
                            "startDate": "2022-05-01T11:25:00.000Z",
                            "endDate": "2022-05-01T13:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651404300000,
                            "endTime": 1651412700000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-blue//8.602097257040441//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.5647,
                                    11.2976
                                ],
                                [
                                    28.42,
                                    20.78
                                ],
                                [
                                    33.36,
                                    31.34
                                ],
                                [
                                    37.58,
                                    41.18
                                ],
                                [
                                    37.6467,
                                    41.1429
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_380",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-27T07:57:24.385Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-383",
            "title": "Order item 387",
            "startDate": "2022-05-01T10:05:00.000Z",
            "endDate": "2022-05-01T14:05:00.000Z",
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Red.3.331",
                    "number": 1
                },
                {
                    "asset": "Red.12.278",
                    "number": 4
                },
                {
                    "asset": "Red.1.338",
                    "number": 4
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
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T10:05:00.000Z",
                            "endDate": "2022-05-01T10:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651399500000,
                            "endTime": 1651402500000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//4.145341299474239//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.5079,
                                    50.938
                                ],
                                [
                                    68.92,
                                    40.02
                                ],
                                [
                                    61.14,
                                    28.9
                                ],
                                [
                                    52.64,
                                    18.07
                                ],
                                [
                                    44.43,
                                    7.52
                                ],
                                [
                                    44.8802,
                                    7.5847
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
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T12:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651402500000,
                            "endTime": 1651407300000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//8.290682598948479//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        41.29646087345236,
                                        11.086929494590073
                                    ],
                                    [
                                        41.29646087345236,
                                        4.053626717856685
                                    ],
                                    [
                                        48.40580030892927,
                                        4.053626717856685
                                    ],
                                    [
                                        48.40580030892927,
                                        11.086929494590073
                                    ],
                                    [
                                        41.29646087345236,
                                        11.086929494590073
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
                            "startDate": "2022-05-01T12:15:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651407300000,
                            "endTime": 1651413900000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//12.436023898422718//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.8802,
                                    7.5847
                                ],
                                [
                                    76.78,
                                    51.09
                                ],
                                [
                                    76.5079,
                                    50.938
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_383",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-29T20:00:28.076Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-386",
            "title": "Order item 390",
            "startDate": "2022-05-01T10:05:00.000Z",
            "endDate": "2022-05-01T10:55:00.000Z",
            "activity": "f-red-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.10.111",
                    "number": 4
                },
                {
                    "asset": "Red.9.398",
                    "number": 1
                },
                {
                    "asset": "Red.3.331",
                    "number": 4
                },
                {
                    "asset": "Red.12.278",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T10:05:00.000Z",
                            "endDate": "2022-05-01T10:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651399500000,
                            "endTime": 1651402500000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//4.316738017834723//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.940394592187225,
                                        13.23781743735621
                                    ],
                                    [
                                        32.940394592187225,
                                        9.026725727177936
                                    ],
                                    [
                                        37.23551750532217,
                                        9.026725727177936
                                    ],
                                    [
                                        37.23551750532217,
                                        13.23781743735621
                                    ],
                                    [
                                        32.940394592187225,
                                        13.23781743735621
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_386",
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
            "messageType": "f-red--Air--MissileStrike",
            "timestamp": "2022-09-23T02:33:43.890Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-389",
            "title": "Order item 399",
            "startDate": "2022-05-01T10:05:00.000Z",
            "endDate": "2022-05-01T14:35:00.000Z",
            "activity": "f-red-Air-Stand Off Strike",
            "ownAssets": [
                {
                    "asset": "Red.10.111",
                    "number": 2,
                    "missileType": "MRBM"
                },
                {
                    "asset": "Red.1.338",
                    "number": 1,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Red.2.277",
                    "number": 1,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Red.3.330",
                    "number": 2,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Low Obs Cruise",
                    "number": 2
                },
                {
                    "asset": "Green.4.351",
                    "missileType": "Propellor OWA UAV",
                    "number": 4
                }
            ],
            "location": [
                {
                    "uniqid": "Stand Off Strike-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route out",
                            "startDate": "2022-05-01T10:05:00.000Z",
                            "endDate": "2022-05-01T10:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651399500000,
                            "endTime": 1651402500000,
                            "geomId": "Stand Off Strike-0",
                            "name": "f-red//3.1914551816880703//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.6803,
                                    41.4528
                                ],
                                [
                                    56.62,
                                    44.59
                                ],
                                [
                                    53.58,
                                    47.76
                                ],
                                [
                                    49.82,
                                    50.21
                                ],
                                [
                                    45.34,
                                    52.94
                                ],
                                [
                                    45.8386,
                                    53.3903
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Stand Off Strike-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Launch Location",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T12:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1651402500000,
                            "endTime": 1651407900000,
                            "geomId": "Stand Off Strike-1",
                            "name": "f-red//6.382910363376141//Launch Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.311736736705846,
                                        55.34535699587487
                                    ],
                                    [
                                        42.311736736705846,
                                        51.34057529343896
                                    ],
                                    [
                                        49.048605292988576,
                                        51.34057529343896
                                    ],
                                    [
                                        49.048605292988576,
                                        55.34535699587487
                                    ],
                                    [
                                        42.311736736705846,
                                        55.34535699587487
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Stand Off Strike-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route back",
                            "startDate": "2022-05-01T12:25:00.000Z",
                            "endDate": "2022-05-01T14:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651407900000,
                            "endTime": 1651415700000,
                            "geomId": "Stand Off Strike-2",
                            "name": "f-red//9.574365545064211//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.8386,
                                    53.3903
                                ],
                                [
                                    61.08,
                                    41.51
                                ],
                                [
                                    60.6803,
                                    41.4528
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_389",
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
            "timestamp": "2022-09-23T13:18:37.828Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-392",
            "title": "Order item 396",
            "startDate": "2022-05-01T10:15:00.000Z",
            "endDate": "2022-05-01T11:05:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.3.330",
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
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T10:15:00.000Z",
                            "endDate": "2022-05-01T11:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651400100000,
                            "endTime": 1651403100000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.3397949589416385//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.9679,
                                    21.8748
                                ],
                                [
                                    63.7,
                                    25.49
                                ],
                                [
                                    63.3575,
                                    25.3544
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_392",
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-23T02:33:43.890Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-395",
            "title": "Order item 399",
            "startDate": "2022-05-01T10:25:00.000Z",
            "endDate": "2022-05-01T13:35:00.000Z",
            "activity": "f-red-Cyber-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Red.8.369",
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
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_395",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-27T05:32:50.742Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-398",
            "title": "Order item 402",
            "startDate": "2022-05-01T10:45:00.000Z",
            "endDate": "2022-05-01T17:15:00.000Z",
            "activity": "f-red-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "Red.10.227",
                    "number": 1
                },
                {
                    "asset": "Red.2.273",
                    "number": 0
                },
                {
                    "asset": "Red.10.32",
                    "number": 0
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
                    "uniqid": "ASW Barrier-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route out",
                            "startDate": "2022-05-01T10:45:00.000Z",
                            "endDate": "2022-05-01T11:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651401900000,
                            "endTime": 1651404900000,
                            "geomId": "ASW Barrier-0",
                            "name": "f-red//3.93653657566756//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.4237,
                                    23.3087
                                ],
                                [
                                    57.21,
                                    33.31
                                ],
                                [
                                    52.42,
                                    43.72
                                ],
                                [
                                    52.2191,
                                    44.0692
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
                            "startDate": "2022-05-01T11:35:00.000Z",
                            "endDate": "2022-05-01T14:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1651404900000,
                            "endTime": 1651415100000,
                            "geomId": "ASW Barrier-1",
                            "name": "f-red//7.87307315133512//ASW Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.60710802980728,
                                        46.50011786363771
                                    ],
                                    [
                                        48.60710802980728,
                                        41.53359334831325
                                    ],
                                    [
                                        55.54020672234833,
                                        41.53359334831325
                                    ],
                                    [
                                        55.54020672234833,
                                        46.50011786363771
                                    ],
                                    [
                                        48.60710802980728,
                                        46.50011786363771
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
                            "startDate": "2022-05-01T14:25:00.000Z",
                            "endDate": "2022-05-01T17:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651415100000,
                            "endTime": 1651425300000,
                            "geomId": "ASW Barrier-2",
                            "name": "f-red//11.80960972700268//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.2191,
                                    44.0692
                                ],
                                [
                                    61.54,
                                    23.59
                                ],
                                [
                                    61.4237,
                                    23.3087
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_398",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-27T14:15:58.385Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-401",
            "title": "Order item 405",
            "startDate": "2022-05-01T10:45:00.000Z",
            "endDate": "2022-05-01T14:15:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.12.305",
                    "number": 3
                },
                {
                    "asset": "Green.4.291",
                    "number": 2
                },
                {
                    "asset": "Green.13.390",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T10:45:00.000Z",
                            "endDate": "2022-05-01T11:35:00.000Z",
                            "force": "f-green",
                            "startTime": 1651401900000,
                            "endTime": 1651404900000,
                            "geomId": "Patrol-0",
                            "name": "f-green//3.575039140880108//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.9223,
                                    2.8115
                                ],
                                [
                                    64.89,
                                    9.87
                                ],
                                [
                                    65.0242,
                                    9.444
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
                            "startDate": "2022-05-01T11:35:00.000Z",
                            "endDate": "2022-05-01T12:25:00.000Z",
                            "force": "f-green",
                            "startTime": 1651404900000,
                            "endTime": 1651407900000,
                            "geomId": "Patrol-1",
                            "name": "f-green//7.150078281760216//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        63.09850164058375,
                                        11.326967672792014
                                    ],
                                    [
                                        63.09850164058375,
                                        7.550671452577928
                                    ],
                                    [
                                        66.92889808102059,
                                        7.550671452577928
                                    ],
                                    [
                                        66.92889808102059,
                                        11.326967672792014
                                    ],
                                    [
                                        63.09850164058375,
                                        11.326967672792014
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
                            "startDate": "2022-05-01T12:25:00.000Z",
                            "endDate": "2022-05-01T14:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651407900000,
                            "endTime": 1651414500000,
                            "geomId": "Patrol-2",
                            "name": "f-green//10.725117422640324//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    65.0242,
                                    9.444
                                ],
                                [
                                    55.57,
                                    8.23
                                ],
                                [
                                    47.04,
                                    5.93
                                ],
                                [
                                    37.79,
                                    4.91
                                ],
                                [
                                    28.82,
                                    3.18
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
        "_id": "m_f-green_401",
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
            "messageType": "f-blue--Air--MissileStrike",
            "timestamp": "2022-09-26T20:12:49.298Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-404",
            "title": "Order item 413",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T15:45:00.000Z",
            "activity": "f-blue-Air-Stand Off Strike",
            "ownAssets": [
                {
                    "asset": "Blue.9.202",
                    "number": 5,
                    "missileType": "Propellor OWA UAV"
                },
                {
                    "asset": "Blue.3.127",
                    "number": 0,
                    "missileType": "Propellor OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78",
                    "missileType": "Standard Cruise",
                    "number": 4
                },
                {
                    "asset": "Green.4.351",
                    "missileType": "IRBM",
                    "number": 3
                },
                {
                    "asset": "Red.8.50",
                    "missileType": "IRBM",
                    "number": 4
                }
            ],
            "location": [
                {
                    "uniqid": "Stand Off Strike-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Stand Off Strike-0",
                            "name": "f-blue//6.089993918314576//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.6449,
                                    38.8203
                                ],
                                [
                                    42.4,
                                    29.6
                                ],
                                [
                                    43.35,
                                    19.58
                                ],
                                [
                                    43.59,
                                    9.84
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
                    "uniqid": "Stand Off Strike-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Launch Location",
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T14:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405500000,
                            "endTime": 1651415100000,
                            "geomId": "Stand Off Strike-1",
                            "name": "f-blue//12.179987836629152//Launch Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        43.22660422321681,
                                        10.49543833880499
                                    ],
                                    [
                                        43.22660422321681,
                                        9.607752159239068
                                    ],
                                    [
                                        44.12815778985146,
                                        9.607752159239068
                                    ],
                                    [
                                        44.12815778985146,
                                        10.49543833880499
                                    ],
                                    [
                                        43.22660422321681,
                                        10.49543833880499
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Stand Off Strike-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route back",
                            "startDate": "2022-05-01T14:25:00.000Z",
                            "endDate": "2022-05-01T15:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651415100000,
                            "endTime": 1651419900000,
                            "geomId": "Stand Off Strike-2",
                            "name": "f-blue//18.26998175494373//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.678,
                                    10.0519
                                ],
                                [
                                    42.06,
                                    39.1
                                ],
                                [
                                    41.6449,
                                    38.8203
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_404",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-25T08:54:16.043Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-407",
            "title": "Order item 411",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T14:45:00.000Z",
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Blue.10.318",
                    "number": 5
                },
                {
                    "asset": "Blue.11.184",
                    "number": 0
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
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-blue//4.532307775691152//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.0106,
                                    33.1265
                                ],
                                [
                                    70.01,
                                    48.96
                                ],
                                [
                                    69.9075,
                                    49.4014
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
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405500000,
                            "endTime": 1651413900000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-blue//9.064615551382303//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        68.96192651183516,
                                        50.00531174134446
                                    ],
                                    [
                                        68.96192651183516,
                                        48.78996568216649
                                    ],
                                    [
                                        70.82995728337654,
                                        48.78996568216649
                                    ],
                                    [
                                        70.82995728337654,
                                        50.00531174134446
                                    ],
                                    [
                                        68.96192651183516,
                                        50.00531174134446
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
                            "startDate": "2022-05-01T14:05:00.000Z",
                            "endDate": "2022-05-01T14:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413900000,
                            "endTime": 1651416300000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-blue//13.596923327073455//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    69.9075,
                                    49.4014
                                ],
                                [
                                    55.15,
                                    41.2
                                ],
                                [
                                    39.75,
                                    33.37
                                ],
                                [
                                    40.0106,
                                    33.1265
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_407",
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
            "timestamp": "2022-09-22T18:49:26.057Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-410",
            "title": "Order item 414",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T15:45:00.000Z",
            "activity": "f-blue-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.9.254",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//5.8510738499462605//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.0106,
                                    33.1265
                                ],
                                [
                                    45.03,
                                    27.72
                                ],
                                [
                                    50.26,
                                    22.51
                                ],
                                [
                                    55.76,
                                    17.58
                                ],
                                [
                                    55.7656,
                                    17.8609
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
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T14:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405500000,
                            "endTime": 1651415700000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//11.702147699892521//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        52.484935336486764,
                                        20.898584646141884
                                    ],
                                    [
                                        52.484935336486764,
                                        14.770243380500078
                                    ],
                                    [
                                        58.935060788715866,
                                        14.770243380500078
                                    ],
                                    [
                                        58.935060788715866,
                                        20.898584646141884
                                    ],
                                    [
                                        52.484935336486764,
                                        20.898584646141884
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
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T14:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405500000,
                            "endTime": 1651415700000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//17.55322154983878//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        54.34906310918251,
                                        19.193607963285853
                                    ],
                                    [
                                        54.34906310918251,
                                        16.51812134096588
                                    ],
                                    [
                                        57.16097939322112,
                                        16.51812134096588
                                    ],
                                    [
                                        57.16097939322112,
                                        19.193607963285853
                                    ],
                                    [
                                        54.34906310918251,
                                        19.193607963285853
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
                            "startDate": "2022-05-01T14:35:00.000Z",
                            "endDate": "2022-05-01T15:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651415700000,
                            "endTime": 1651419900000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//23.404295399785042//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.7656,
                                    17.8609
                                ],
                                [
                                    40.01,
                                    32.79
                                ],
                                [
                                    40.0106,
                                    33.1265
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_410",
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
            "messageType": "f-red--Maritime--MissileStrike",
            "timestamp": "2022-09-25T06:38:23.294Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-413",
            "title": "Order item 422",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T13:35:00.000Z",
            "activity": "f-red-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Red.8.10",
                    "number": 5,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "Red.3.155",
                    "number": 2,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "SRBM",
                    "number": 5
                },
                {
                    "asset": "Green.4.351",
                    "missileType": "IRBM",
                    "number": 5
                },
                {
                    "asset": "Blue.4.50",
                    "missileType": "SRBM",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_413",
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
            "messageType": "Land--Resupply",
            "timestamp": "2022-09-22T23:51:48.458Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-416",
            "title": "Order item 420",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T14:45:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.9.385",
                    "number": 4
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
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//5.1688694935292006//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    27.401,
                                    33.6029
                                ],
                                [
                                    41.98,
                                    28.66
                                ],
                                [
                                    55.43,
                                    24.58
                                ],
                                [
                                    70.16,
                                    19.79
                                ],
                                [
                                    84.17,
                                    14.28
                                ],
                                [
                                    84.39,
                                    14.6958
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
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T12:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405500000,
                            "endTime": 1651406700000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//10.337738987058401//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        83.431870340026,
                                        15.616599306144565
                                    ],
                                    [
                                        83.431870340026,
                                        13.771102134094283
                                    ],
                                    [
                                        85.34006947238808,
                                        13.771102134094283
                                    ],
                                    [
                                        85.34006947238808,
                                        15.616599306144565
                                    ],
                                    [
                                        83.431870340026,
                                        15.616599306144565
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
                            "startDate": "2022-05-01T12:05:00.000Z",
                            "endDate": "2022-05-01T14:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651406700000,
                            "endTime": 1651416300000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//15.506608480587602//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    84.39,
                                    14.6958
                                ],
                                [
                                    56.29,
                                    23.78
                                ],
                                [
                                    27.61,
                                    33.27
                                ],
                                [
                                    27.401,
                                    33.6029
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_416",
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
            "timestamp": "2022-09-28T10:25:27.988Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-419",
            "title": "Order item 429",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T12:55:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.4.179",
                    "number": 3,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Green.13.204",
                    "number": 4,
                    "missileType": "MRBM"
                },
                {
                    "asset": "Green.4.342",
                    "number": 3,
                    "missileType": "Low Obs Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Standard Cruise",
                    "number": 3
                },
                {
                    "asset": "Red.10.351",
                    "missileType": "Propellor OWA UAV",
                    "number": 4
                },
                {
                    "asset": "Blue.4.50",
                    "missileType": "Standard Cruise",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_419",
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
            "messageType": "Land--Resupply",
            "timestamp": "2022-09-24T19:50:14.021Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-422",
            "title": "Order item 426",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T15:55:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.8.193",
                    "number": 1
                },
                {
                    "asset": "Blue.9.158",
                    "number": 3
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
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//5.060349822044373//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.9631,
                                    53.7193
                                ],
                                [
                                    24.94,
                                    36.34
                                ],
                                [
                                    27.04,
                                    20.1
                                ],
                                [
                                    28.43,
                                    3.14
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
                    "uniqid": "Resupply-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Resupply at this location",
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T14:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405500000,
                            "endTime": 1651415700000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//10.120699644088745//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        28.589498150231393,
                                        3.1437536664710404
                                    ],
                                    [
                                        28.589498150231393,
                                        2.4791516840301684
                                    ],
                                    [
                                        29.254912324244938,
                                        2.4791516840301684
                                    ],
                                    [
                                        29.254912324244938,
                                        3.1437536664710404
                                    ],
                                    [
                                        28.589498150231393,
                                        3.1437536664710404
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
                            "startDate": "2022-05-01T14:35:00.000Z",
                            "endDate": "2022-05-01T15:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651415700000,
                            "endTime": 1651420500000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//15.181049466133118//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.9223,
                                    2.8115
                                ],
                                [
                                    26,
                                    28.11
                                ],
                                [
                                    22.55,
                                    53.88
                                ],
                                [
                                    22.9631,
                                    53.7193
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_422",
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
            "timestamp": "2022-09-28T10:25:27.988Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-425",
            "title": "Order item 429",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T11:45:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.11.27",
                    "number": 1
                },
                {
                    "asset": "Green.9.331",
                    "number": 0
                },
                {
                    "asset": "Green.7.348",
                    "number": 4
                },
                {
                    "asset": "Green.11.79",
                    "number": 4
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
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.8462217431515455//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    29.8135,
                                    4.3762
                                ],
                                [
                                    39.38,
                                    52.42
                                ],
                                [
                                    39.1927,
                                    52.0059
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_425",
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
            "timestamp": "2022-09-28T06:44:42.746Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-428",
            "title": "Order item 432",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T14:05:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Red.5.79",
                    "number": 5
                },
                {
                    "asset": "Red.10.323",
                    "number": 1
                },
                {
                    "asset": "Red.4.281",
                    "number": 3
                },
                {
                    "asset": "Red.11.352",
                    "number": 5
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Patrol-0",
                            "name": "f-red//5.525514826178551//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.2579,
                                    53.7477
                                ],
                                [
                                    59.7,
                                    38.57
                                ],
                                [
                                    34.46,
                                    22.7
                                ],
                                [
                                    34.2517,
                                    22.8183
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
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T11:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651405500000,
                            "endTime": 1651406100000,
                            "geomId": "Patrol-1",
                            "name": "f-red//11.051029652357101//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.47224685567364,
                                        24.428646688811813
                                    ],
                                    [
                                        32.47224685567364,
                                        21.18866296859913
                                    ],
                                    [
                                        35.989309570056065,
                                        21.18866296859913
                                    ],
                                    [
                                        35.989309570056065,
                                        24.428646688811813
                                    ],
                                    [
                                        32.47224685567364,
                                        24.428646688811813
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
                            "startDate": "2022-05-01T11:55:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651406100000,
                            "endTime": 1651413900000,
                            "geomId": "Patrol-2",
                            "name": "f-red//16.576544478535652//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.2517,
                                    22.8183
                                ],
                                [
                                    60.14,
                                    38.67
                                ],
                                [
                                    85.58,
                                    54.05
                                ],
                                [
                                    85.2579,
                                    53.7477
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_428",
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
            "messageType": "Cyber--AreaEffects",
            "timestamp": "2022-09-24T08:47:58.294Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-431",
            "title": "Order item 435",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T11:45:00.000Z",
            "activity": "f-red-Cyber-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.11.352",
                    "number": 3
                },
                {
                    "asset": "Red.3.136",
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
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//4.09822908975184//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        40.195921401428755,
                                        13.420787200924904
                                    ],
                                    [
                                        40.195921401428755,
                                        6.647407175401043
                                    ],
                                    [
                                        47.087826582212266,
                                        6.647407175401043
                                    ],
                                    [
                                        47.087826582212266,
                                        13.420787200924904
                                    ],
                                    [
                                        40.195921401428755,
                                        13.420787200924904
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_431",
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
            "timestamp": "2022-09-25T00:35:14.633Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-434",
            "title": "Order item 438",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T11:45:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.11.43",
                    "number": 0
                },
                {
                    "asset": "Green.6.167",
                    "number": 2
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
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.564364515244961//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.089,
                                    12.8933
                                ],
                                [
                                    42.9,
                                    35.94
                                ],
                                [
                                    43.2173,
                                    35.9364
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_434",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-21T22:06:31.762Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-437",
            "title": "Order item 441",
            "startDate": "2022-05-01T11:05:00.000Z",
            "endDate": "2022-05-01T16:05:00.000Z",
            "activity": "f-red-Maritime-Mine Clearance",
            "ownAssets": [
                {
                    "asset": "Red.11.355",
                    "number": 5
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
                    "uniqid": "Mine Clearance-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Route out",
                            "startDate": "2022-05-01T11:05:00.000Z",
                            "endDate": "2022-05-01T11:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651403100000,
                            "endTime": 1651406100000,
                            "geomId": "Mine Clearance-0",
                            "name": "f-red//2.92392111197114//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.8216,
                                    7.9011
                                ],
                                [
                                    50.04,
                                    20.97
                                ],
                                [
                                    33.71,
                                    33.48
                                ],
                                [
                                    33.4356,
                                    33.9367
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
                            "startDate": "2022-05-01T11:55:00.000Z",
                            "endDate": "2022-05-01T13:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651406100000,
                            "endTime": 1651413300000,
                            "geomId": "Mine Clearance-1",
                            "name": "f-red//5.84784222394228//Mine Clearance Area Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.834254968014562,
                                        36.013930327157794
                                    ],
                                    [
                                        30.834254968014562,
                                        31.807395826125628
                                    ],
                                    [
                                        35.91151364158791,
                                        31.807395826125628
                                    ],
                                    [
                                        35.91151364158791,
                                        36.013930327157794
                                    ],
                                    [
                                        30.834254968014562,
                                        36.013930327157794
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
                            "startDate": "2022-05-01T13:55:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651413300000,
                            "endTime": 1651421100000,
                            "geomId": "Mine Clearance-2",
                            "name": "f-red//8.77176333591342//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.4356,
                                    33.9367
                                ],
                                [
                                    44.64,
                                    24.88
                                ],
                                [
                                    55.92,
                                    16.9
                                ],
                                [
                                    66.48,
                                    8.2
                                ],
                                [
                                    66.8216,
                                    7.9011
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_437",
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
            "messageType": "Maritime--Resupply",
            "timestamp": "2022-09-23T09:21:49.682Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-440",
            "title": "Order item 444",
            "startDate": "2022-05-01T11:05:00.000Z",
            "endDate": "2022-05-01T17:05:00.000Z",
            "activity": "f-red-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.10.85",
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
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T11:05:00.000Z",
                            "endDate": "2022-05-01T11:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651403100000,
                            "endTime": 1651406100000,
                            "geomId": "Resupply-0",
                            "name": "f-red//3.1768988706171513//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.2468,
                                    35.858
                                ],
                                [
                                    49.54,
                                    35.01
                                ],
                                [
                                    42.65,
                                    34.98
                                ],
                                [
                                    35.04,
                                    34.23
                                ],
                                [
                                    27.71,
                                    33.77
                                ],
                                [
                                    28.1233,
                                    33.8869
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
                            "startDate": "2022-05-01T11:55:00.000Z",
                            "endDate": "2022-05-01T14:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651406100000,
                            "endTime": 1651415700000,
                            "geomId": "Resupply-1",
                            "name": "f-red//6.3537977412343025//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        24.89844691811747,
                                        36.44000631928593
                                    ],
                                    [
                                        24.89844691811747,
                                        31.254722348663798
                                    ],
                                    [
                                        31.157882097405476,
                                        31.254722348663798
                                    ],
                                    [
                                        31.157882097405476,
                                        36.44000631928593
                                    ],
                                    [
                                        24.89844691811747,
                                        36.44000631928593
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
                            "startDate": "2022-05-01T14:35:00.000Z",
                            "endDate": "2022-05-01T17:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651415700000,
                            "endTime": 1651424700000,
                            "geomId": "Resupply-2",
                            "name": "f-red//9.530696611851454//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.1233,
                                    33.8869
                                ],
                                [
                                    35.2,
                                    34.69
                                ],
                                [
                                    43.15,
                                    35.37
                                ],
                                [
                                    50.38,
                                    35.32
                                ],
                                [
                                    56.89,
                                    35.57
                                ],
                                [
                                    57.2468,
                                    35.858
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_440",
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-29T10:21:08.392Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-443",
            "title": "Order item 447",
            "startDate": "2022-05-01T11:05:00.000Z",
            "endDate": "2022-05-01T14:05:00.000Z",
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "Red.10.35",
                    "number": 3
                },
                {
                    "asset": "Red.5.379",
                    "number": 3
                },
                {
                    "asset": "Red.10.85",
                    "number": 4
                },
                {
                    "asset": "Red.12.205",
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
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T11:05:00.000Z",
                            "endDate": "2022-05-01T11:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651403100000,
                            "endTime": 1651406100000,
                            "geomId": "ISTAR-0",
                            "name": "f-red//2.3232978098094463//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.4998,
                                    21.6368
                                ],
                                [
                                    49.76,
                                    32.1
                                ],
                                [
                                    38.31,
                                    42.85
                                ],
                                [
                                    27.14,
                                    52.88
                                ],
                                [
                                    27.608,
                                    52.8678
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
                            "startDate": "2022-05-01T11:55:00.000Z",
                            "endDate": "2022-05-01T13:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651406100000,
                            "endTime": 1651413300000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//4.646595619618893//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        24.867726215181815,
                                        54.43097483000843
                                    ],
                                    [
                                        24.867726215181815,
                                        51.24598863382142
                                    ],
                                    [
                                        30.15423697480565,
                                        51.24598863382142
                                    ],
                                    [
                                        30.15423697480565,
                                        54.43097483000843
                                    ],
                                    [
                                        24.867726215181815,
                                        54.43097483000843
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
                            "startDate": "2022-05-01T11:55:00.000Z",
                            "endDate": "2022-05-01T13:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651406100000,
                            "endTime": 1651413300000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//6.969893429428339//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        22.8770729609649,
                                        55.45976289647093
                                    ],
                                    [
                                        22.8770729609649,
                                        50.109436596085885
                                    ],
                                    [
                                        31.789505769750033,
                                        50.109436596085885
                                    ],
                                    [
                                        31.789505769750033,
                                        55.45976289647093
                                    ],
                                    [
                                        22.8770729609649,
                                        55.45976289647093
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
                            "startDate": "2022-05-01T13:55:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651413300000,
                            "endTime": 1651413900000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//9.293191239237785//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    27.608,
                                    52.8678
                                ],
                                [
                                    44.24,
                                    36.98
                                ],
                                [
                                    60.35,
                                    21.55
                                ],
                                [
                                    60.4998,
                                    21.6368
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_443",
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
            "messageType": "Land--Transit",
            "timestamp": "2022-09-23T09:04:27.893Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-446",
            "title": "Order item 450",
            "startDate": "2022-05-01T11:10:00.000Z",
            "endDate": "2022-05-01T12:00:00.000Z",
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.4.205",
                    "number": 0
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
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T11:10:00.000Z",
                            "endDate": "2022-05-01T12:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651403400000,
                            "endTime": 1651406400000,
                            "geomId": "Transit-0",
                            "name": "f-blue//5.363117910921574//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.1889,
                                    33.4511
                                ],
                                [
                                    37.11,
                                    29.67
                                ],
                                [
                                    39.48,
                                    27.33
                                ],
                                [
                                    39.1278,
                                    26.8644
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_446",
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
            "timestamp": "2022-09-21T21:31:48.184Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-449",
            "title": "Order item 453",
            "startDate": "2022-05-01T11:10:00.000Z",
            "endDate": "2022-05-01T12:00:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.5.194",
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
                            "startDate": "2022-05-01T11:10:00.000Z",
                            "endDate": "2022-05-01T12:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651403400000,
                            "endTime": 1651406400000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.296359183266759//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.6806,
                                    10.2205
                                ],
                                [
                                    31.32,
                                    23.68
                                ],
                                [
                                    40.17,
                                    37.36
                                ],
                                [
                                    49.3,
                                    51.32
                                ],
                                [
                                    49.3121,
                                    51.623
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_449",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-24T23:43:09.266Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-452",
            "title": "Order item 456",
            "startDate": "2022-05-01T11:10:00.000Z",
            "endDate": "2022-05-01T15:50:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.2.3",
                    "number": 2
                },
                {
                    "asset": "Green.6.165",
                    "number": 3
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T11:10:00.000Z",
                            "endDate": "2022-05-01T12:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651403400000,
                            "endTime": 1651406400000,
                            "geomId": "Patrol-0",
                            "name": "f-green//3.123021626845002//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.678,
                                    10.0519
                                ],
                                [
                                    34.78,
                                    23.37
                                ],
                                [
                                    26.38,
                                    36.18
                                ],
                                [
                                    26.6679,
                                    36.1697
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
                            "startDate": "2022-05-01T12:00:00.000Z",
                            "endDate": "2022-05-01T13:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651406400000,
                            "endTime": 1651410600000,
                            "geomId": "Patrol-1",
                            "name": "f-green//6.246043253690004//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.803511649475602,
                                        39.810750156857395
                                    ],
                                    [
                                        21.803511649475602,
                                        32.349668433352214
                                    ],
                                    [
                                        31.090098607339783,
                                        32.349668433352214
                                    ],
                                    [
                                        31.090098607339783,
                                        39.810750156857395
                                    ],
                                    [
                                        21.803511649475602,
                                        39.810750156857395
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
                            "startDate": "2022-05-01T13:10:00.000Z",
                            "endDate": "2022-05-01T15:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651410600000,
                            "endTime": 1651420200000,
                            "geomId": "Patrol-2",
                            "name": "f-green//9.369064880535007//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.6679,
                                    36.1697
                                ],
                                [
                                    43.3,
                                    9.93
                                ],
                                [
                                    43.678,
                                    10.0519
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_452",
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-24T07:38:31.139Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-455",
            "title": "Order item 459",
            "startDate": "2022-05-01T11:25:00.000Z",
            "endDate": "2022-05-01T13:05:00.000Z",
            "activity": "f-blue-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.6.31",
                    "number": 2
                },
                {
                    "asset": "Blue.1.133",
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
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T11:25:00.000Z",
                            "endDate": "2022-05-01T12:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651404300000,
                            "endTime": 1651407300000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//2.8431052323430777//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.0099,
                                    37.1086
                                ],
                                [
                                    54.58,
                                    38.6
                                ],
                                [
                                    57.37,
                                    40.33
                                ],
                                [
                                    60.45,
                                    41.34
                                ],
                                [
                                    60.6803,
                                    41.4528
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
                            "startDate": "2022-05-01T12:15:00.000Z",
                            "endDate": "2022-05-01T12:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651407300000,
                            "endTime": 1651408500000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//5.686210464686155//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        57.388033767865394,
                                        43.783811039655916
                                    ],
                                    [
                                        57.388033767865394,
                                        39.034518264178516
                                    ],
                                    [
                                        63.7400248385692,
                                        39.034518264178516
                                    ],
                                    [
                                        63.7400248385692,
                                        43.783811039655916
                                    ],
                                    [
                                        57.388033767865394,
                                        43.783811039655916
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
                            "startDate": "2022-05-01T12:15:00.000Z",
                            "endDate": "2022-05-01T12:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651407300000,
                            "endTime": 1651408500000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//8.529315697029233//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        60.307914052952185,
                                        41.73010861823491
                                    ],
                                    [
                                        60.307914052952185,
                                        41.17430074986095
                                    ],
                                    [
                                        61.049508878606346,
                                        41.17430074986095
                                    ],
                                    [
                                        61.049508878606346,
                                        41.73010861823491
                                    ],
                                    [
                                        60.307914052952185,
                                        41.73010861823491
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
                            "startDate": "2022-05-01T12:35:00.000Z",
                            "endDate": "2022-05-01T13:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651408500000,
                            "endTime": 1651410300000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//11.37242092937231//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.6803,
                                    41.4528
                                ],
                                [
                                    51.43,
                                    37.19
                                ],
                                [
                                    51.0099,
                                    37.1086
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_455",
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
            "timestamp": "2022-09-25T11:27:36.423Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-458",
            "title": "Order item 469",
            "startDate": "2022-05-01T11:25:00.000Z",
            "endDate": "2022-05-01T13:25:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.5.278",
                    "number": 4,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.13.321",
                    "number": 0,
                    "missileType": "IRBM"
                },
                {
                    "asset": "Green.8.76",
                    "number": 1,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Green.2.345",
                    "number": 3,
                    "missileType": "Low Obs Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "MRBM",
                    "number": 4
                },
                {
                    "asset": "Red.10.351",
                    "missileType": "Jet OWA UAV",
                    "number": 1
                },
                {
                    "asset": "Blue.4.50",
                    "missileType": "Propellor OWA UAV",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_458",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-28T08:41:17.255Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-461",
            "title": "Order item 465",
            "startDate": "2022-05-01T11:25:00.000Z",
            "endDate": "2022-05-01T15:55:00.000Z",
            "activity": "f-red-Maritime-Mine Clearance",
            "ownAssets": [
                {
                    "asset": "Red.11.345",
                    "number": 5
                },
                {
                    "asset": "Red.2.327",
                    "number": 0
                },
                {
                    "asset": "Red.1.23",
                    "number": 3
                },
                {
                    "asset": "Red.1.232",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Mine Clearance-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Route out",
                            "startDate": "2022-05-01T11:25:00.000Z",
                            "endDate": "2022-05-01T12:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651404300000,
                            "endTime": 1651407300000,
                            "geomId": "Mine Clearance-0",
                            "name": "f-red//3.9635359663516283//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    69.53,
                                    39.4112
                                ],
                                [
                                    43.8,
                                    4.11
                                ],
                                [
                                    43.8744,
                                    4.481
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
                            "startDate": "2022-05-01T12:15:00.000Z",
                            "endDate": "2022-05-01T12:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651407300000,
                            "endTime": 1651409700000,
                            "geomId": "Mine Clearance-1",
                            "name": "f-red//7.927071932703257//Mine Clearance Area Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        43.231721342805166,
                                        5.120832914035981
                                    ],
                                    [
                                        43.231721342805166,
                                        3.840606580050917
                                    ],
                                    [
                                        44.51595424399989,
                                        3.840606580050917
                                    ],
                                    [
                                        44.51595424399989,
                                        5.120832914035981
                                    ],
                                    [
                                        43.231721342805166,
                                        5.120832914035981
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
                            "startDate": "2022-05-01T12:55:00.000Z",
                            "endDate": "2022-05-01T15:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651409700000,
                            "endTime": 1651420500000,
                            "geomId": "Mine Clearance-2",
                            "name": "f-red//11.890607899054885//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.8744,
                                    4.481
                                ],
                                [
                                    69.18,
                                    39.33
                                ],
                                [
                                    69.53,
                                    39.4112
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_461",
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
            "timestamp": "2022-09-24T17:48:41.499Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-464",
            "title": "Order item 468",
            "startDate": "2022-05-01T11:40:00.000Z",
            "endDate": "2022-05-01T12:30:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.10.232",
                    "number": 2
                },
                {
                    "asset": "Green.13.154",
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
                            "startDate": "2022-05-01T11:40:00.000Z",
                            "endDate": "2022-05-01T12:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651405200000,
                            "endTime": 1651408200000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.363883085548878//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0701,
                                    15.0902
                                ],
                                [
                                    49.07,
                                    26.83
                                ],
                                [
                                    59.14,
                                    37.66
                                ],
                                [
                                    69.5,
                                    49.76
                                ],
                                [
                                    69.9075,
                                    49.4014
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_464",
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
            "messageType": "Cyber--AreaEffects",
            "timestamp": "2022-09-25T16:40:06.533Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-467",
            "title": "Order item 471",
            "startDate": "2022-05-01T11:55:00.000Z",
            "endDate": "2022-05-01T12:45:00.000Z",
            "activity": "f-blue-Cyber-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.8.337",
                    "number": 3
                },
                {
                    "asset": "Blue.9.199",
                    "number": 0
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
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T11:55:00.000Z",
                            "endDate": "2022-05-01T12:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651406100000,
                            "endTime": 1651409100000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//5.657651366665959//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.14597463316855,
                                        31.634094970370487
                                    ],
                                    [
                                        71.14597463316855,
                                        29.04861358957244
                                    ],
                                    [
                                        74.1434242100792,
                                        29.04861358957244
                                    ],
                                    [
                                        74.1434242100792,
                                        31.634094970370487
                                    ],
                                    [
                                        71.14597463316855,
                                        31.634094970370487
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_467",
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
            "timestamp": "2022-09-24T15:34:58.974Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-470",
            "title": "Order item 477",
            "startDate": "2022-05-01T11:55:00.000Z",
            "endDate": "2022-05-01T13:25:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.6.263",
                    "number": 3,
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
                    "missileType": "Low Obs Cruise",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_470",
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
            "timestamp": "2022-09-24T15:34:58.974Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-473",
            "title": "Order item 477",
            "startDate": "2022-05-01T12:00:00.000Z",
            "endDate": "2022-05-01T12:50:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.12.8",
                    "number": 3
                },
                {
                    "asset": "Green.1.149",
                    "number": 1
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
                            "startDate": "2022-05-01T12:00:00.000Z",
                            "endDate": "2022-05-01T12:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651406400000,
                            "endTime": 1651409400000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.9254514519125223//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.3759,
                                    23.6077
                                ],
                                [
                                    41.96,
                                    46.1
                                ],
                                [
                                    42.086,
                                    45.6456
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_473",
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
            "messageType": "Land--Resupply",
            "timestamp": "2022-09-22T15:38:26.380Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-476",
            "title": "Order item 480",
            "startDate": "2022-05-01T12:20:00.000Z",
            "endDate": "2022-05-01T16:20:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.4.372",
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
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T12:20:00.000Z",
                            "endDate": "2022-05-01T13:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651407600000,
                            "endTime": 1651410600000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//4.899483246728778//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.088,
                                    54.6363
                                ],
                                [
                                    52.1,
                                    41.77
                                ],
                                [
                                    60.07,
                                    28.88
                                ],
                                [
                                    67.33,
                                    15.27
                                ],
                                [
                                    73.88,
                                    1.94
                                ],
                                [
                                    74.3715,
                                    2.2901
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
                            "startDate": "2022-05-01T13:10:00.000Z",
                            "endDate": "2022-05-01T15:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651410600000,
                            "endTime": 1651420200000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//9.798966493457556//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        74.07110333632055,
                                        2.5901583246344497
                                    ],
                                    [
                                        74.07110333632055,
                                        1.9899788183395752
                                    ],
                                    [
                                        74.67177085000824,
                                        1.9899788183395752
                                    ],
                                    [
                                        74.67177085000824,
                                        2.5901583246344497
                                    ],
                                    [
                                        74.07110333632055,
                                        2.5901583246344497
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
                            "startDate": "2022-05-01T15:50:00.000Z",
                            "endDate": "2022-05-01T16:20:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651420200000,
                            "endTime": 1651422000000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//14.698449740186334//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.3715,
                                    2.2901
                                ],
                                [
                                    64.76,
                                    19.24
                                ],
                                [
                                    55.24,
                                    37.29
                                ],
                                [
                                    45.01,
                                    54.62
                                ],
                                [
                                    45.088,
                                    54.6363
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_476",
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
            "timestamp": "2022-09-25T14:04:20.068Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-479",
            "title": "Order item 487",
            "startDate": "2022-05-01T12:20:00.000Z",
            "endDate": "2022-05-01T13:10:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.11.156",
                    "number": 0,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Green.9.177",
                    "number": 3,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "IRBM",
                    "number": 0
                },
                {
                    "asset": "Red.10.351",
                    "missileType": "Standard Cruise",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_479",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-24T00:57:23.564Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-482",
            "title": "Order item 486",
            "startDate": "2022-05-01T12:25:00.000Z",
            "endDate": "2022-05-01T14:05:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.7.159",
                    "number": 1
                },
                {
                    "asset": "Green.13.120",
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T12:25:00.000Z",
                            "endDate": "2022-05-01T13:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651407900000,
                            "endTime": 1651410900000,
                            "geomId": "Patrol-0",
                            "name": "f-green//5.527810350060463//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    39.6341,
                                    18.9988
                                ],
                                [
                                    33.51,
                                    30.97
                                ],
                                [
                                    27.84,
                                    42.39
                                ],
                                [
                                    27.8456,
                                    42.5851
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
                            "startDate": "2022-05-01T13:15:00.000Z",
                            "endDate": "2022-05-01T13:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651410900000,
                            "endTime": 1651412700000,
                            "geomId": "Patrol-1",
                            "name": "f-green//11.055620700120926//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        24.674008981865306,
                                        44.793091886741166
                                    ],
                                    [
                                        24.674008981865306,
                                        40.29569541333075
                                    ],
                                    [
                                        30.796344924486732,
                                        40.29569541333075
                                    ],
                                    [
                                        30.796344924486732,
                                        44.793091886741166
                                    ],
                                    [
                                        24.674008981865306,
                                        44.793091886741166
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
                            "startDate": "2022-05-01T13:45:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651412700000,
                            "endTime": 1651413900000,
                            "geomId": "Patrol-2",
                            "name": "f-green//16.58343105018139//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    27.8456,
                                    42.5851
                                ],
                                [
                                    33.58,
                                    30.97
                                ],
                                [
                                    39.73,
                                    18.77
                                ],
                                [
                                    39.6341,
                                    18.9988
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_482",
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
            "timestamp": "2022-09-26T02:08:40.941Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-485",
            "title": "Order item 493",
            "startDate": "2022-05-01T12:45:00.000Z",
            "endDate": "2022-05-01T15:05:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.4.382",
                    "number": 1,
                    "missileType": "IRBM"
                },
                {
                    "asset": "Green.9.282",
                    "number": 1,
                    "missileType": "IRBM"
                },
                {
                    "asset": "Green.7.296",
                    "number": 5,
                    "missileType": "Standard Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Low Obs Cruise",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_485",
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
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-27T01:12:23.910Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-488",
            "title": "Order item 492",
            "startDate": "2022-05-01T13:00:00.000Z",
            "endDate": "2022-05-01T16:40:00.000Z",
            "activity": "f-blue-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.7.24",
                    "number": 4
                },
                {
                    "asset": "Blue.3.264",
                    "number": 5
                },
                {
                    "asset": "Blue.10.218",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T13:00:00.000Z",
                            "endDate": "2022-05-01T13:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651410000000,
                            "endTime": 1651413000000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//6.729822129011154//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.0854,
                                    28.6874
                                ],
                                [
                                    46.8,
                                    21.49
                                ],
                                [
                                    44.76,
                                    14.55
                                ],
                                [
                                    43.01,
                                    6.89
                                ],
                                [
                                    43.1974,
                                    7.0777
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
                            "startDate": "2022-05-01T13:50:00.000Z",
                            "endDate": "2022-05-01T16:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413000000,
                            "endTime": 1651420800000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//13.459644258022308//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        40.14625920682825,
                                        10.071909337069602
                                    ],
                                    [
                                        40.14625920682825,
                                        4.063884379058904
                                    ],
                                    [
                                        46.20905561456845,
                                        4.063884379058904
                                    ],
                                    [
                                        46.20905561456845,
                                        10.071909337069602
                                    ],
                                    [
                                        40.14625920682825,
                                        10.071909337069602
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
                            "startDate": "2022-05-01T13:50:00.000Z",
                            "endDate": "2022-05-01T16:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413000000,
                            "endTime": 1651420800000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//20.189466387033463//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        41.59502122694841,
                                        8.659079400289128
                                    ],
                                    [
                                        41.59502122694841,
                                        5.4908788000696
                                    ],
                                    [
                                        44.788813797936584,
                                        5.4908788000696
                                    ],
                                    [
                                        44.788813797936584,
                                        8.659079400289128
                                    ],
                                    [
                                        41.59502122694841,
                                        8.659079400289128
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
                            "startDate": "2022-05-01T16:00:00.000Z",
                            "endDate": "2022-05-01T16:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651420800000,
                            "endTime": 1651423200000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//26.919288516044617//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.1974,
                                    7.0777
                                ],
                                [
                                    44.48,
                                    14
                                ],
                                [
                                    46,
                                    21.17
                                ],
                                [
                                    47.81,
                                    28.61
                                ],
                                [
                                    48.0854,
                                    28.6874
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_488",
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
            "messageType": "f-blue--Air--MissileStrike",
            "timestamp": "2022-09-23T08:23:27.417Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-491",
            "title": "Order item 498",
            "startDate": "2022-05-01T13:00:00.000Z",
            "endDate": "2022-05-01T19:50:00.000Z",
            "activity": "f-blue-Air-Stand Off Strike",
            "ownAssets": [
                {
                    "asset": "Blue.5.285",
                    "number": 0,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78",
                    "missileType": "Standard Cruise",
                    "number": 3
                },
                {
                    "asset": "Green.4.351",
                    "missileType": "Low Obs Cruise",
                    "number": 5
                }
            ],
            "location": [
                {
                    "uniqid": "Stand Off Strike-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route out",
                            "startDate": "2022-05-01T13:00:00.000Z",
                            "endDate": "2022-05-01T13:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651410000000,
                            "endTime": 1651413000000,
                            "geomId": "Stand Off Strike-0",
                            "name": "f-blue//3.5055185835808516//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    39.56,
                                    32.765
                                ],
                                [
                                    50.25,
                                    26.98
                                ],
                                [
                                    60.36,
                                    21.62
                                ],
                                [
                                    60.4998,
                                    21.6368
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Stand Off Strike-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Launch Location",
                            "startDate": "2022-05-01T13:50:00.000Z",
                            "endDate": "2022-05-01T17:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413000000,
                            "endTime": 1651424400000,
                            "geomId": "Stand Off Strike-1",
                            "name": "f-blue//7.011037167161703//Launch Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        58.55277480568646,
                                        23.4122733058851
                                    ],
                                    [
                                        58.55277480568646,
                                        19.839204181123396
                                    ],
                                    [
                                        62.39924339696659,
                                        19.839204181123396
                                    ],
                                    [
                                        62.39924339696659,
                                        23.4122733058851
                                    ],
                                    [
                                        58.55277480568646,
                                        23.4122733058851
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Stand Off Strike-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route back",
                            "startDate": "2022-05-01T17:00:00.000Z",
                            "endDate": "2022-05-01T19:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651424400000,
                            "endTime": 1651434600000,
                            "geomId": "Stand Off Strike-2",
                            "name": "f-blue//10.516555750742555//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.4998,
                                    21.6368
                                ],
                                [
                                    39.62,
                                    32.31
                                ],
                                [
                                    39.56,
                                    32.765
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_491",
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
            "messageType": "Air--Resupply",
            "timestamp": "2022-09-23T08:23:27.417Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-494",
            "title": "Order item 498",
            "startDate": "2022-05-01T13:00:00.000Z",
            "endDate": "2022-05-01T19:50:00.000Z",
            "activity": "f-blue-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.3.367",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T13:00:00.000Z",
                            "endDate": "2022-05-01T13:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651410000000,
                            "endTime": 1651413000000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//3.5055185835808516//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    39.56,
                                    32.765
                                ],
                                [
                                    50.25,
                                    26.98
                                ],
                                [
                                    60.36,
                                    21.62
                                ],
                                [
                                    60.4998,
                                    21.6368
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
                            "startDate": "2022-05-01T13:50:00.000Z",
                            "endDate": "2022-05-01T17:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413000000,
                            "endTime": 1651424400000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//7.011037167161703//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        58.55277480568646,
                                        23.4122733058851
                                    ],
                                    [
                                        58.55277480568646,
                                        19.839204181123396
                                    ],
                                    [
                                        62.39924339696659,
                                        19.839204181123396
                                    ],
                                    [
                                        62.39924339696659,
                                        23.4122733058851
                                    ],
                                    [
                                        58.55277480568646,
                                        23.4122733058851
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
                            "startDate": "2022-05-01T17:00:00.000Z",
                            "endDate": "2022-05-01T19:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651424400000,
                            "endTime": 1651434600000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//10.516555750742555//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.4998,
                                    21.6368
                                ],
                                [
                                    39.62,
                                    32.31
                                ],
                                [
                                    39.56,
                                    32.765
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_494",
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
            "messageType": "Land--Resupply",
            "timestamp": "2022-09-28T08:35:00.357Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-497",
            "title": "Order item 501",
            "startDate": "2022-05-01T13:00:00.000Z",
            "endDate": "2022-05-01T17:00:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.10.267",
                    "number": 3
                },
                {
                    "asset": "Blue.1.327",
                    "number": 3
                },
                {
                    "asset": "Blue.11.101",
                    "number": 2
                },
                {
                    "asset": "Blue.6.387",
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
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T13:00:00.000Z",
                            "endDate": "2022-05-01T13:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651410000000,
                            "endTime": 1651413000000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//2.7334985584020615//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.6083,
                                    33.7888
                                ],
                                [
                                    43.4,
                                    32.91
                                ],
                                [
                                    49.08,
                                    32.91
                                ],
                                [
                                    56.05,
                                    32.2
                                ],
                                [
                                    62.3,
                                    31.78
                                ],
                                [
                                    62.0752,
                                    31.6829
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
                            "startDate": "2022-05-01T13:50:00.000Z",
                            "endDate": "2022-05-01T15:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413000000,
                            "endTime": 1651417800000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//5.466997116804123//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        57.88942486012697,
                                        35.04304236834563
                                    ],
                                    [
                                        57.88942486012697,
                                        28.195776203051935
                                    ],
                                    [
                                        65.96310912639075,
                                        28.195776203051935
                                    ],
                                    [
                                        65.96310912639075,
                                        35.04304236834563
                                    ],
                                    [
                                        57.88942486012697,
                                        35.04304236834563
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
                            "startDate": "2022-05-01T15:10:00.000Z",
                            "endDate": "2022-05-01T17:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651417800000,
                            "endTime": 1651424400000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//8.200495675206184//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.0752,
                                    31.6829
                                ],
                                [
                                    53.13,
                                    32.44
                                ],
                                [
                                    45.31,
                                    33.32
                                ],
                                [
                                    36.77,
                                    33.48
                                ],
                                [
                                    36.6083,
                                    33.7888
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_497",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-29T14:30:34.087Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-500",
            "title": "Order item 504",
            "startDate": "2022-05-01T13:00:00.000Z",
            "endDate": "2022-05-01T15:10:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.7.387",
                    "number": 1
                },
                {
                    "asset": "Green.3.267",
                    "number": 5
                },
                {
                    "asset": "Green.8.100",
                    "number": 3
                },
                {
                    "asset": "Green.10.327",
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T13:00:00.000Z",
                            "endDate": "2022-05-01T13:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651410000000,
                            "endTime": 1651413000000,
                            "geomId": "Patrol-0",
                            "name": "f-green//5.854899713769555//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.6084,
                                    28.3124
                                ],
                                [
                                    70.29,
                                    49.62
                                ],
                                [
                                    69.9075,
                                    49.4014
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
                            "startDate": "2022-05-01T13:50:00.000Z",
                            "endDate": "2022-05-01T14:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651413000000,
                            "endTime": 1651414200000,
                            "geomId": "Patrol-1",
                            "name": "f-green//11.70979942753911//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        65.52537047555306,
                                        52.01822431439174
                                    ],
                                    [
                                        65.52537047555306,
                                        46.636016647697026
                                    ],
                                    [
                                        73.83434447597442,
                                        46.636016647697026
                                    ],
                                    [
                                        73.83434447597442,
                                        52.01822431439174
                                    ],
                                    [
                                        65.52537047555306,
                                        52.01822431439174
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
                            "startDate": "2022-05-01T14:10:00.000Z",
                            "endDate": "2022-05-01T15:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651414200000,
                            "endTime": 1651417800000,
                            "geomId": "Patrol-2",
                            "name": "f-green//17.564699141308665//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    69.9075,
                                    49.4014
                                ],
                                [
                                    59.45,
                                    38.93
                                ],
                                [
                                    48.29,
                                    28.75
                                ],
                                [
                                    48.6084,
                                    28.3124
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_500",
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
            "timestamp": "2022-09-27T02:10:08.608Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-503",
            "title": "Order item 507",
            "startDate": "2022-05-01T13:05:00.000Z",
            "endDate": "2022-05-01T13:55:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.10.327",
                    "number": 4
                },
                {
                    "asset": "Green.3.266",
                    "number": 1
                },
                {
                    "asset": "Green.7.319",
                    "number": 0
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
                            "startDate": "2022-05-01T13:05:00.000Z",
                            "endDate": "2022-05-01T13:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651410300000,
                            "endTime": 1651413300000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.869722031056881//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.0976,
                                    25.3062
                                ],
                                [
                                    75.81,
                                    26.25
                                ],
                                [
                                    75.7539,
                                    26.7025
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_503",
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
            "timestamp": "2022-09-29T03:33:43.920Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-506",
            "title": "Order item 510",
            "startDate": "2022-05-01T13:25:00.000Z",
            "endDate": "2022-05-01T14:15:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.8.86",
                    "number": 3
                },
                {
                    "asset": "Green.3.365",
                    "number": 5
                },
                {
                    "asset": "Green.3.358",
                    "number": 0
                },
                {
                    "asset": "Green.4.64",
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
                            "startDate": "2022-05-01T13:25:00.000Z",
                            "endDate": "2022-05-01T14:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651411500000,
                            "endTime": 1651414500000,
                            "geomId": "Transit-0",
                            "name": "f-green//3.777965519577265//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0701,
                                    15.0902
                                ],
                                [
                                    46.8,
                                    18.5
                                ],
                                [
                                    56.36,
                                    20.73
                                ],
                                [
                                    65.2,
                                    24.24
                                ],
                                [
                                    73.32,
                                    27.03
                                ],
                                [
                                    73.816,
                                    27.0849
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_506",
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
            "messageType": "Air--Resupply",
            "timestamp": "2022-09-27T10:41:20.021Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-509",
            "title": "Order item 513",
            "startDate": "2022-05-01T13:40:00.000Z",
            "endDate": "2022-05-01T16:40:00.000Z",
            "activity": "f-blue-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.11.64",
                    "number": 4
                },
                {
                    "asset": "Blue.13.283",
                    "number": 1
                },
                {
                    "asset": "Blue.8.216",
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
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T13:40:00.000Z",
                            "endDate": "2022-05-01T14:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651412400000,
                            "endTime": 1651415400000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//3.5796301793307066//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.1862,
                                    46.9858
                                ],
                                [
                                    26.94,
                                    4.43
                                ],
                                [
                                    26.9525,
                                    4.8847
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
                            "startDate": "2022-05-01T14:30:00.000Z",
                            "endDate": "2022-05-01T16:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651415400000,
                            "endTime": 1651420800000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//7.159260358661413//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        26.744164697051986,
                                        5.092180913664452
                                    ],
                                    [
                                        26.744164697051986,
                                        4.677154855637433
                                    ],
                                    [
                                        27.16070637372036,
                                        4.677154855637433
                                    ],
                                    [
                                        27.16070637372036,
                                        5.092180913664452
                                    ],
                                    [
                                        26.744164697051986,
                                        5.092180913664452
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
                            "startDate": "2022-05-01T16:00:00.000Z",
                            "endDate": "2022-05-01T16:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651420800000,
                            "endTime": 1651423200000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//10.73889053799212//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.9525,
                                    4.8847
                                ],
                                [
                                    51.75,
                                    46.74
                                ],
                                [
                                    52.1862,
                                    46.9858
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_509",
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
            "timestamp": "2022-09-21T23:32:56.914Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-512",
            "title": "Order item 516",
            "startDate": "2022-05-01T13:40:00.000Z",
            "endDate": "2022-05-01T14:30:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.1.262",
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
                            "startDate": "2022-05-01T13:40:00.000Z",
                            "endDate": "2022-05-01T14:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651412400000,
                            "endTime": 1651415400000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.2747160103172064//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    29.8135,
                                    4.3762
                                ],
                                [
                                    51.43,
                                    19.16
                                ],
                                [
                                    73.44,
                                    33.34
                                ],
                                [
                                    73.1647,
                                    33.6917
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_512",
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
            "timestamp": "2022-09-26T14:29:32.264Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-515",
            "title": "Order item 526",
            "startDate": "2022-05-01T13:45:00.000Z",
            "endDate": "2022-05-01T14:15:00.000Z",
            "activity": "f-green-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Green.1.279",
                    "number": 2,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "Green.9.378",
                    "number": 4,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.9.191",
                    "number": 4,
                    "missileType": "Propellor OWA UAV"
                },
                {
                    "asset": "Green.6.116",
                    "number": 3,
                    "missileType": "Low Obs Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Standard Cruise",
                    "number": 2
                },
                {
                    "asset": "Red.10.351",
                    "missileType": "IRBM",
                    "number": 2
                },
                {
                    "asset": "Blue.4.50",
                    "missileType": "IRBM",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_515",
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-24T18:28:13.070Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-518",
            "title": "Order item 522",
            "startDate": "2022-05-01T14:05:00.000Z",
            "endDate": "2022-05-01T15:35:00.000Z",
            "activity": "f-blue-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.2.116",
                    "number": 2
                },
                {
                    "asset": "Blue.4.155",
                    "number": 2
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
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T14:05:00.000Z",
                            "endDate": "2022-05-01T14:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413900000,
                            "endTime": 1651416900000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//6.345151167362928//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.0099,
                                    37.1086
                                ],
                                [
                                    47.81,
                                    23.33
                                ],
                                [
                                    43.93,
                                    9.86
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
                    "uniqid": "ISTAR-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Patrol Area",
                            "startDate": "2022-05-01T14:55:00.000Z",
                            "endDate": "2022-05-01T15:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651416900000,
                            "endTime": 1651419300000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//12.690302334725857//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        40.733475071669,
                                        12.909056035546566
                                    ],
                                    [
                                        40.733475071669,
                                        7.169199727252335
                                    ],
                                    [
                                        46.570675722718576,
                                        7.169199727252335
                                    ],
                                    [
                                        46.570675722718576,
                                        12.909056035546566
                                    ],
                                    [
                                        40.733475071669,
                                        12.909056035546566
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
                            "startDate": "2022-05-01T14:55:00.000Z",
                            "endDate": "2022-05-01T15:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651416900000,
                            "endTime": 1651419300000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//19.035453502088785//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.780636668645954,
                                        10.931773815205661
                                    ],
                                    [
                                        42.780636668645954,
                                        9.169623945055921
                                    ],
                                    [
                                        44.57048426941708,
                                        9.169623945055921
                                    ],
                                    [
                                        44.57048426941708,
                                        10.931773815205661
                                    ],
                                    [
                                        42.780636668645954,
                                        10.931773815205661
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
                            "startDate": "2022-05-01T15:35:00.000Z",
                            "endDate": "2022-05-01T15:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651419300000,
                            "endTime": 1651419300000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//25.380604669451714//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.678,
                                    10.0519
                                ],
                                [
                                    47.61,
                                    23.12
                                ],
                                [
                                    51.06,
                                    36.72
                                ],
                                [
                                    51.0099,
                                    37.1086
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_518",
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
            "timestamp": "2022-09-24T16:31:52.334Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-521",
            "title": "Order item 525",
            "startDate": "2022-05-01T14:05:00.000Z",
            "endDate": "2022-05-01T14:55:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.9.172",
                    "number": 2
                },
                {
                    "asset": "Green.1.151",
                    "number": 3
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
                            "startDate": "2022-05-01T14:05:00.000Z",
                            "endDate": "2022-05-01T14:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651413900000,
                            "endTime": 1651416900000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.720500502735376//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.917,
                                    5.3522
                                ],
                                [
                                    21.58,
                                    42.15
                                ],
                                [
                                    22.0703,
                                    41.9732
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_521",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-29T04:19:32.388Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-524",
            "title": "Order item 528",
            "startDate": "2022-05-01T14:10:00.000Z",
            "endDate": "2022-05-01T16:40:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Red.6.48",
                    "number": 1
                },
                {
                    "asset": "Red.3.367",
                    "number": 0
                },
                {
                    "asset": "Red.9.398",
                    "number": 4
                },
                {
                    "asset": "Red.3.143",
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T14:10:00.000Z",
                            "endDate": "2022-05-01T15:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651414200000,
                            "endTime": 1651417200000,
                            "geomId": "Patrol-0",
                            "name": "f-red//5.989271009340882//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.0225,
                                    37.505
                                ],
                                [
                                    54.99,
                                    37.69
                                ],
                                [
                                    53.23,
                                    37.16
                                ],
                                [
                                    50.76,
                                    36.91
                                ],
                                [
                                    51.0099,
                                    37.1086
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
                            "startDate": "2022-05-01T15:00:00.000Z",
                            "endDate": "2022-05-01T16:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651417200000,
                            "endTime": 1651422600000,
                            "geomId": "Patrol-1",
                            "name": "f-red//11.978542018681765//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        45.71272816877454,
                                        40.99271749771365
                                    ],
                                    [
                                        45.71272816877454,
                                        33.012276730990166
                                    ],
                                    [
                                        55.77665890979387,
                                        33.012276730990166
                                    ],
                                    [
                                        55.77665890979387,
                                        40.99271749771365
                                    ],
                                    [
                                        45.71272816877454,
                                        40.99271749771365
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
                            "startDate": "2022-05-01T16:30:00.000Z",
                            "endDate": "2022-05-01T16:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651422600000,
                            "endTime": 1651423200000,
                            "geomId": "Patrol-2",
                            "name": "f-red//17.967813028022647//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.0099,
                                    37.1086
                                ],
                                [
                                    53.51,
                                    37.03
                                ],
                                [
                                    55.29,
                                    37.24
                                ],
                                [
                                    57.35,
                                    37.73
                                ],
                                [
                                    57.0225,
                                    37.505
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_524",
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
            "timestamp": "2022-09-26T21:06:54.869Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-527",
            "title": "Order item 534",
            "startDate": "2022-05-01T14:25:00.000Z",
            "endDate": "2022-05-01T16:15:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.5.143",
                    "number": 1,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Jet OWA UAV",
                    "number": 4
                },
                {
                    "asset": "Red.10.351",
                    "missileType": "IRBM",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_527",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-26T21:06:54.869Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-530",
            "title": "Order item 534",
            "startDate": "2022-05-01T14:40:00.000Z",
            "endDate": "2022-05-01T15:30:00.000Z",
            "activity": "f-blue-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.6.58",
                    "number": 3
                },
                {
                    "asset": "Blue.6.256",
                    "number": 2
                },
                {
                    "asset": "Blue.7.168",
                    "number": 2
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
                            "startDate": "2022-05-01T14:40:00.000Z",
                            "endDate": "2022-05-01T15:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651416000000,
                            "endTime": 1651419000000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//6.207075526937842//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        70.33640877608315,
                                        5.644810042306647
                                    ],
                                    [
                                        70.33640877608315,
                                        -0.022715809521002796
                                    ],
                                    [
                                        76.01777154609601,
                                        -0.022715809521002796
                                    ],
                                    [
                                        76.01777154609601,
                                        5.644810042306647
                                    ],
                                    [
                                        70.33640877608315,
                                        5.644810042306647
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_530",
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
            "timestamp": "2022-09-28T10:06:37.295Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-533",
            "title": "Order item 537",
            "startDate": "2022-05-01T14:40:00.000Z",
            "endDate": "2022-05-01T15:50:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.8.192",
                    "number": 1
                },
                {
                    "asset": "Green.3.330",
                    "number": 1
                },
                {
                    "asset": "Green.11.181",
                    "number": 5
                },
                {
                    "asset": "Green.2.146",
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
                            "startDate": "2022-05-01T14:40:00.000Z",
                            "endDate": "2022-05-01T15:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651416000000,
                            "endTime": 1651419000000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//2.1561095379292965//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    50.1962,
                                    28.2765
                                ],
                                [
                                    78.01,
                                    5.36
                                ],
                                [
                                    78.2597,
                                    5.3662
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
                            "startDate": "2022-05-01T15:30:00.000Z",
                            "endDate": "2022-05-01T15:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419000000,
                            "endTime": 1651419600000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//4.312219075858593//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        74.6159949017794,
                                        8.9547147996937
                                    ],
                                    [
                                        74.6159949017794,
                                        1.7563694947569544
                                    ],
                                    [
                                        81.86062954379621,
                                        1.7563694947569544
                                    ],
                                    [
                                        81.86062954379621,
                                        8.9547147996937
                                    ],
                                    [
                                        74.6159949017794,
                                        8.9547147996937
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
                            "startDate": "2022-05-01T15:40:00.000Z",
                            "endDate": "2022-05-01T15:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419600000,
                            "endTime": 1651420200000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//6.4683286137878895//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.2597,
                                    5.3662
                                ],
                                [
                                    69.07,
                                    13.49
                                ],
                                [
                                    59.98,
                                    20.72
                                ],
                                [
                                    50.17,
                                    28.22
                                ],
                                [
                                    50.1962,
                                    28.2765
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_533",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-26T04:50:20.511Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-536",
            "title": "Order item 540",
            "startDate": "2022-05-01T14:40:00.000Z",
            "endDate": "2022-05-01T17:20:00.000Z",
            "activity": "f-green-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.2.146",
                    "number": 2
                },
                {
                    "asset": "Green.7.224",
                    "number": 5
                },
                {
                    "asset": "Green.13.15",
                    "number": 5
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T14:40:00.000Z",
                            "endDate": "2022-05-01T15:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651416000000,
                            "endTime": 1651419000000,
                            "geomId": "Patrol-0",
                            "name": "f-green//6.998564720153809//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.5647,
                                    11.2976
                                ],
                                [
                                    43.71,
                                    23.6
                                ],
                                [
                                    63.38,
                                    35.42
                                ],
                                [
                                    63.0615,
                                    35.1056
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
                            "startDate": "2022-05-01T15:30:00.000Z",
                            "endDate": "2022-05-01T15:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419000000,
                            "endTime": 1651419000000,
                            "geomId": "Patrol-1",
                            "name": "f-green//13.997129440307617//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        61.81180485099489,
                                        36.10886649592612
                                    ],
                                    [
                                        61.81180485099489,
                                        34.08982290027884
                                    ],
                                    [
                                        64.28061626791174,
                                        34.08982290027884
                                    ],
                                    [
                                        64.28061626791174,
                                        36.10886649592612
                                    ],
                                    [
                                        61.81180485099489,
                                        36.10886649592612
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
                            "startDate": "2022-05-01T15:30:00.000Z",
                            "endDate": "2022-05-01T17:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419000000,
                            "endTime": 1651425600000,
                            "geomId": "Patrol-2",
                            "name": "f-green//20.995694160461426//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0615,
                                    35.1056
                                ],
                                [
                                    23.65,
                                    10.9
                                ],
                                [
                                    23.5647,
                                    11.2976
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_536",
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-28T13:18:04.519Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-539",
            "title": "Order item 543",
            "startDate": "2022-05-01T14:55:00.000Z",
            "endDate": "2022-05-01T17:15:00.000Z",
            "activity": "f-blue-Cyber-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Blue.7.319",
                    "number": 2
                },
                {
                    "asset": "Blue.8.337",
                    "number": 4
                },
                {
                    "asset": "Blue.3.67",
                    "number": 3
                },
                {
                    "asset": "Blue.9.312",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                },
                {
                    "asset": "Green.4.351"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_539",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-27T03:29:49.316Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-542",
            "title": "Order item 546",
            "startDate": "2022-05-01T14:55:00.000Z",
            "endDate": "2022-05-01T18:35:00.000Z",
            "activity": "f-red-Air-Defensive Counter Air",
            "ownAssets": [
                {
                    "asset": "Red.9.312",
                    "number": 5
                },
                {
                    "asset": "Red.11.269",
                    "number": 5
                },
                {
                    "asset": "Red.9.340",
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
                    "uniqid": "Defensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Defensive Counter Air//Route out",
                            "startDate": "2022-05-01T14:55:00.000Z",
                            "endDate": "2022-05-01T15:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651416900000,
                            "endTime": 1651419900000,
                            "geomId": "Defensive Counter Air-0",
                            "name": "f-red//3.3637385983020067//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.8006,
                                    23.6427
                                ],
                                [
                                    58.2,
                                    23.07
                                ],
                                [
                                    54.61,
                                    23.49
                                ],
                                [
                                    50.31,
                                    23.21
                                ],
                                [
                                    47.29,
                                    22.2
                                ],
                                [
                                    46.9292,
                                    22.4782
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
                            "startDate": "2022-05-01T15:45:00.000Z",
                            "endDate": "2022-05-01T16:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651419900000,
                            "endTime": 1651424100000,
                            "geomId": "Defensive Counter Air-1",
                            "name": "f-red//6.727477196604013//DCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.979363404348305,
                                        25.981446998514855
                                    ],
                                    [
                                        42.979363404348305,
                                        18.883570640968003
                                    ],
                                    [
                                        50.68153313008013,
                                        18.883570640968003
                                    ],
                                    [
                                        50.68153313008013,
                                        25.981446998514855
                                    ],
                                    [
                                        42.979363404348305,
                                        25.981446998514855
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
                            "startDate": "2022-05-01T16:55:00.000Z",
                            "endDate": "2022-05-01T18:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651424100000,
                            "endTime": 1651430100000,
                            "geomId": "Defensive Counter Air-2",
                            "name": "f-red//10.09121579490602//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.9292,
                                    22.4782
                                ],
                                [
                                    51.09,
                                    22.3
                                ],
                                [
                                    54.2,
                                    23.06
                                ],
                                [
                                    57.58,
                                    23.1
                                ],
                                [
                                    62.25,
                                    23.42
                                ],
                                [
                                    61.8006,
                                    23.6427
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_542",
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-21T23:25:34.904Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-545",
            "title": "Order item 549",
            "startDate": "2022-05-01T14:55:00.000Z",
            "endDate": "2022-05-01T17:25:00.000Z",
            "activity": "f-red-Cyber-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Red.6.124",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_545",
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
            "messageType": "Air--Resupply",
            "timestamp": "2022-09-29T17:05:21.283Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-548",
            "title": "Order item 552",
            "startDate": "2022-05-01T14:55:00.000Z",
            "endDate": "2022-05-01T18:55:00.000Z",
            "activity": "f-red-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.3.155",
                    "number": 0
                },
                {
                    "asset": "Red.3.392",
                    "number": 2
                },
                {
                    "asset": "Red.11.342",
                    "number": 0
                },
                {
                    "asset": "Red.13.6",
                    "number": 2
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
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T14:55:00.000Z",
                            "endDate": "2022-05-01T15:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651416900000,
                            "endTime": 1651419900000,
                            "geomId": "Resupply-0",
                            "name": "f-red//5.302597142755985//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    82.9017,
                                    14.7895
                                ],
                                [
                                    25.5,
                                    31.48
                                ],
                                [
                                    25.8147,
                                    31.8334
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
                            "startDate": "2022-05-01T15:45:00.000Z",
                            "endDate": "2022-05-01T18:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651419900000,
                            "endTime": 1651430100000,
                            "geomId": "Resupply-1",
                            "name": "f-red//10.60519428551197//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.88996314857167,
                                        34.98977713440643
                                    ],
                                    [
                                        21.88996314857167,
                                        28.564630518691605
                                    ],
                                    [
                                        29.475305798256176,
                                        28.564630518691605
                                    ],
                                    [
                                        29.475305798256176,
                                        34.98977713440643
                                    ],
                                    [
                                        21.88996314857167,
                                        34.98977713440643
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
                            "startDate": "2022-05-01T18:35:00.000Z",
                            "endDate": "2022-05-01T18:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651430100000,
                            "endTime": 1651431300000,
                            "geomId": "Resupply-2",
                            "name": "f-red//15.907791428267956//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.8147,
                                    31.8334
                                ],
                                [
                                    39.63,
                                    27.29
                                ],
                                [
                                    54.24,
                                    23.55
                                ],
                                [
                                    68.13,
                                    19.08
                                ],
                                [
                                    83.3,
                                    14.9
                                ],
                                [
                                    82.9017,
                                    14.7895
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_548",
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
            "timestamp": "2022-09-25T08:29:08.452Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-551",
            "title": "Order item 555",
            "startDate": "2022-05-01T14:55:00.000Z",
            "endDate": "2022-05-01T17:05:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.9.6",
                    "number": 3
                },
                {
                    "asset": "Green.11.183",
                    "number": 1
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
                            "startDate": "2022-05-01T14:55:00.000Z",
                            "endDate": "2022-05-01T15:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651416900000,
                            "endTime": 1651419900000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//4.6121581718325615//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    35.1035,
                                    11.1399
                                ],
                                [
                                    46.83,
                                    12.28
                                ],
                                [
                                    57.99,
                                    14.86
                                ],
                                [
                                    57.6393,
                                    14.3876
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
                            "startDate": "2022-05-01T15:45:00.000Z",
                            "endDate": "2022-05-01T15:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419900000,
                            "endTime": 1651419900000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//9.224316343665123//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        55.87075967808192,
                                        16.080404442797576
                                    ],
                                    [
                                        55.87075967808192,
                                        12.681855697195399
                                    ],
                                    [
                                        59.38112969603692,
                                        12.681855697195399
                                    ],
                                    [
                                        59.38112969603692,
                                        16.080404442797576
                                    ],
                                    [
                                        55.87075967808192,
                                        16.080404442797576
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
                            "startDate": "2022-05-01T15:45:00.000Z",
                            "endDate": "2022-05-01T17:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419900000,
                            "endTime": 1651424700000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//13.836474515497684//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.6393,
                                    14.3876
                                ],
                                [
                                    46.29,
                                    12.84
                                ],
                                [
                                    35.37,
                                    10.72
                                ],
                                [
                                    35.1035,
                                    11.1399
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_551",
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
            "messageType": "SOF--SOFActivity",
            "timestamp": "2022-09-25T13:36:56.412Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-554",
            "title": "Order item 558",
            "startDate": "2022-05-01T15:05:00.000Z",
            "endDate": "2022-05-01T20:05:00.000Z",
            "activity": "f-red-SOF-Activity",
            "ownAssets": [
                {
                    "asset": "Red.13.77",
                    "number": 4
                },
                {
                    "asset": "Red.4.193",
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
                    "uniqid": "Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route out",
                            "startDate": "2022-05-01T15:05:00.000Z",
                            "endDate": "2022-05-01T15:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651417500000,
                            "endTime": 1651420500000,
                            "geomId": "Activity-0",
                            "name": "f-red//2.8151403721421957//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.1602,
                                    13.2857
                                ],
                                [
                                    52.25,
                                    18.87
                                ],
                                [
                                    44.34,
                                    24.45
                                ],
                                [
                                    36.71,
                                    30.32
                                ],
                                [
                                    28.36,
                                    36.47
                                ],
                                [
                                    28.2571,
                                    36.4836
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
                            "startDate": "2022-05-01T15:55:00.000Z",
                            "endDate": "2022-05-01T18:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651420500000,
                            "endTime": 1651431300000,
                            "geomId": "Activity-1",
                            "name": "f-red//5.630280744284391//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        26.901432527539107,
                                        37.55079267249896
                                    ],
                                    [
                                        26.901432527539107,
                                        35.40149150642419
                                    ],
                                    [
                                        29.575673312201523,
                                        35.40149150642419
                                    ],
                                    [
                                        29.575673312201523,
                                        37.55079267249896
                                    ],
                                    [
                                        26.901432527539107,
                                        37.55079267249896
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
                            "startDate": "2022-05-01T18:55:00.000Z",
                            "endDate": "2022-05-01T20:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651431300000,
                            "endTime": 1651435500000,
                            "geomId": "Activity-2",
                            "name": "f-red//8.445421116426587//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.2571,
                                    36.4836
                                ],
                                [
                                    38.52,
                                    28.59
                                ],
                                [
                                    49.97,
                                    20.9
                                ],
                                [
                                    59.7,
                                    13.48
                                ],
                                [
                                    60.1602,
                                    13.2857
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_554",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-22T00:28:45.162Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-557",
            "title": "Order item 561",
            "startDate": "2022-05-01T15:05:00.000Z",
            "endDate": "2022-05-01T15:55:00.000Z",
            "activity": "f-red-Maritime-Sea Denial",
            "ownAssets": [
                {
                    "asset": "Red.11.366",
                    "number": 5
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
                    "uniqid": "Sea Denial-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Sea Denial//Area",
                            "startDate": "2022-05-01T15:05:00.000Z",
                            "endDate": "2022-05-01T15:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651417500000,
                            "endTime": 1651420500000,
                            "geomId": "Sea Denial-0",
                            "name": "f-red//4.911543734371662//Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        20.98922697129007,
                                        42.76187432674415
                                    ],
                                    [
                                        20.98922697129007,
                                        41.17463270122182
                                    ],
                                    [
                                        23.124763997643353,
                                        41.17463270122182
                                    ],
                                    [
                                        23.124763997643353,
                                        42.76187432674415
                                    ],
                                    [
                                        20.98922697129007,
                                        42.76187432674415
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_557",
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
            "timestamp": "2022-09-23T01:04:34.703Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-560",
            "title": "Order item 564",
            "startDate": "2022-05-01T15:05:00.000Z",
            "endDate": "2022-05-01T15:55:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.8.76",
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
                            "startDate": "2022-05-01T15:05:00.000Z",
                            "endDate": "2022-05-01T15:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651417500000,
                            "endTime": 1651420500000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.901368277147412//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.5073,
                                    15.712
                                ],
                                [
                                    44.93,
                                    26.29
                                ],
                                [
                                    44.59,
                                    37.1
                                ],
                                [
                                    42.53,
                                    48.19
                                ],
                                [
                                    42.9282,
                                    48.1367
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_560",
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-28T15:24:25.034Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-563",
            "title": "Order item 567",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T20:15:00.000Z",
            "activity": "f-blue-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.2.5",
                    "number": 2
                },
                {
                    "asset": "Blue.8.341",
                    "number": 2
                },
                {
                    "asset": "Blue.4.390",
                    "number": 4
                },
                {
                    "asset": "Blue.7.153",
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
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T15:15:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651418100000,
                            "endTime": 1651421100000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//5.784613981842995//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0852,
                                    52.2171
                                ],
                                [
                                    84.69,
                                    12.31
                                ],
                                [
                                    84.2203,
                                    12.2894
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
                            "startDate": "2022-05-01T16:05:00.000Z",
                            "endDate": "2022-05-01T18:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651421100000,
                            "endTime": 1651430100000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//11.56922796368599//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        80.47414553774887,
                                        15.86750656364418
                                    ],
                                    [
                                        80.47414553774887,
                                        8.661744083655591
                                    ],
                                    [
                                        87.86514663804857,
                                        8.661744083655591
                                    ],
                                    [
                                        87.86514663804857,
                                        15.86750656364418
                                    ],
                                    [
                                        80.47414553774887,
                                        15.86750656364418
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
                            "startDate": "2022-05-01T16:05:00.000Z",
                            "endDate": "2022-05-01T18:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651421100000,
                            "endTime": 1651430100000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//17.353841945528984//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        83.4690008104938,
                                        13.020360711656517
                                    ],
                                    [
                                        83.4690008104938,
                                        11.55640184026108
                                    ],
                                    [
                                        84.96742892149199,
                                        11.55640184026108
                                    ],
                                    [
                                        84.96742892149199,
                                        13.020360711656517
                                    ],
                                    [
                                        83.4690008104938,
                                        13.020360711656517
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
                            "startDate": "2022-05-01T18:35:00.000Z",
                            "endDate": "2022-05-01T20:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651430100000,
                            "endTime": 1651436100000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//23.13845592737198//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    84.2203,
                                    12.2894
                                ],
                                [
                                    68.56,
                                    25.19
                                ],
                                [
                                    53.17,
                                    39.37
                                ],
                                [
                                    38.06,
                                    51.82
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
        "_id": "m_f-blue_563",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-22T03:28:16.156Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-566",
            "title": "Order item 570",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T20:05:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.9.153",
                    "number": 0
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T15:15:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651418100000,
                            "endTime": 1651421100000,
                            "geomId": "Patrol-0",
                            "name": "f-green//4.561280857771635//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.678,
                                    10.0519
                                ],
                                [
                                    49.65,
                                    18.23
                                ],
                                [
                                    56.88,
                                    26.66
                                ],
                                [
                                    63.4,
                                    35.38
                                ],
                                [
                                    63.0615,
                                    35.1056
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
                            "startDate": "2022-05-01T16:05:00.000Z",
                            "endDate": "2022-05-01T16:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651421100000,
                            "endTime": 1651424100000,
                            "geomId": "Patrol-1",
                            "name": "f-green//9.12256171554327//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        57.91788215464635,
                                        38.99758352732833
                                    ],
                                    [
                                        57.91788215464635,
                                        31.01653964162385
                                    ],
                                    [
                                        67.72478506888334,
                                        31.01653964162385
                                    ],
                                    [
                                        67.72478506888334,
                                        38.99758352732833
                                    ],
                                    [
                                        57.91788215464635,
                                        38.99758352732833
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
                            "startDate": "2022-05-01T16:55:00.000Z",
                            "endDate": "2022-05-01T20:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651424100000,
                            "endTime": 1651435500000,
                            "geomId": "Patrol-2",
                            "name": "f-green//13.683842573314905//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0615,
                                    35.1056
                                ],
                                [
                                    43.24,
                                    9.95
                                ],
                                [
                                    43.678,
                                    10.0519
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_566",
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-28T13:16:08.068Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-569",
            "title": "Order item 573",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T17:45:00.000Z",
            "activity": "f-blue-Cyber-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Blue.11.121",
                    "number": 2
                },
                {
                    "asset": "Blue.8.337",
                    "number": 4
                },
                {
                    "asset": "Blue.2.266",
                    "number": 0
                },
                {
                    "asset": "Blue.3.308",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_569",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-22T20:48:00.771Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-572",
            "title": "Order item 576",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T22:05:00.000Z",
            "activity": "f-red-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Red.13.308",
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
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T15:15:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651418100000,
                            "endTime": 1651421100000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-red//3.794878114014864//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.0225,
                                    37.505
                                ],
                                [
                                    52.19,
                                    29.76
                                ],
                                [
                                    46.79,
                                    22.44
                                ],
                                [
                                    46.9292,
                                    22.4782
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
                            "startDate": "2022-05-01T16:05:00.000Z",
                            "endDate": "2022-05-01T18:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651421100000,
                            "endTime": 1651431300000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-red//7.589756228029728//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        45.14272272865172,
                                        24.099200245931584
                                    ],
                                    [
                                        45.14272272865172,
                                        20.837979345461314
                                    ],
                                    [
                                        48.674088546716845,
                                        20.837979345461314
                                    ],
                                    [
                                        48.674088546716845,
                                        24.099200245931584
                                    ],
                                    [
                                        45.14272272865172,
                                        24.099200245931584
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
                            "startDate": "2022-05-01T18:55:00.000Z",
                            "endDate": "2022-05-01T22:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651431300000,
                            "endTime": 1651442700000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-red//11.384634342044592//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.9292,
                                    22.4782
                                ],
                                [
                                    57.17,
                                    37.83
                                ],
                                [
                                    57.0225,
                                    37.505
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_572",
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-21T18:03:54.264Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-575",
            "title": "Order item 579",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T17:35:00.000Z",
            "activity": "f-blue-Cyber-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Blue.13.315",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                },
                {
                    "asset": "Green.4.351"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_575",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-25T05:03:48.548Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-578",
            "title": "Order item 582",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T19:05:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.12.141",
                    "number": 2
                },
                {
                    "asset": "Green.6.176",
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T15:15:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651418100000,
                            "endTime": 1651421100000,
                            "geomId": "Patrol-0",
                            "name": "f-green//3.602160055190325//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.6155,
                                    21.7006
                                ],
                                [
                                    46.27,
                                    26.32
                                ],
                                [
                                    40.18,
                                    31.2
                                ],
                                [
                                    34.38,
                                    36.37
                                ],
                                [
                                    34.1687,
                                    35.9881
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
                            "startDate": "2022-05-01T16:05:00.000Z",
                            "endDate": "2022-05-01T17:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651421100000,
                            "endTime": 1651427700000,
                            "geomId": "Patrol-1",
                            "name": "f-green//7.20432011038065//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.68740790620402,
                                        37.159607947591006
                                    ],
                                    [
                                        32.68740790620402,
                                        34.79891925243905
                                    ],
                                    [
                                        35.60632109715056,
                                        34.79891925243905
                                    ],
                                    [
                                        35.60632109715056,
                                        37.159607947591006
                                    ],
                                    [
                                        32.68740790620402,
                                        37.159607947591006
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
                            "startDate": "2022-05-01T17:55:00.000Z",
                            "endDate": "2022-05-01T19:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651427700000,
                            "endTime": 1651431900000,
                            "geomId": "Patrol-2",
                            "name": "f-green//10.806480165570974//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.1687,
                                    35.9881
                                ],
                                [
                                    51.76,
                                    22.02
                                ],
                                [
                                    51.6155,
                                    21.7006
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_578",
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
            "messageType": "Land--EWAttack",
            "timestamp": "2022-09-24T21:47:43.623Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-581",
            "title": "Order item 585",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T18:55:00.000Z",
            "activity": "f-blue-Land-EW Attack",
            "ownAssets": [
                {
                    "asset": "Blue.5.186",
                    "number": 1
                },
                {
                    "asset": "Blue.4.162",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.3.78"
                }
            ],
            "location": [
                {
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-05-01T15:15:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651418100000,
                            "endTime": 1651421100000,
                            "geomId": "EW Attack-0",
                            "name": "f-blue//6.845932777971029//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.2191,
                                    44.0692
                                ],
                                [
                                    72.6,
                                    27.86
                                ],
                                [
                                    72.8728,
                                    27.9588
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
                            "startDate": "2022-05-01T16:05:00.000Z",
                            "endDate": "2022-05-01T17:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651421100000,
                            "endTime": 1651427700000,
                            "geomId": "EW Attack-1",
                            "name": "f-blue//13.691865555942059//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.14911677614764,
                                        29.449127808085525
                                    ],
                                    [
                                        71.14911677614764,
                                        26.447586596287113
                                    ],
                                    [
                                        74.5492074740528,
                                        26.447586596287113
                                    ],
                                    [
                                        74.5492074740528,
                                        29.449127808085525
                                    ],
                                    [
                                        71.14911677614764,
                                        29.449127808085525
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
                            "startDate": "2022-05-01T17:55:00.000Z",
                            "endDate": "2022-05-01T18:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651427700000,
                            "endTime": 1651431300000,
                            "geomId": "EW Attack-2",
                            "name": "f-blue//20.537798333913088//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.8728,
                                    27.9588
                                ],
                                [
                                    68.13,
                                    32.44
                                ],
                                [
                                    62.38,
                                    35.91
                                ],
                                [
                                    56.9,
                                    39.66
                                ],
                                [
                                    51.72,
                                    43.7
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
        "_id": "m_f-blue_581",
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
            "timestamp": "2022-09-22T09:06:41.019Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-584",
            "title": "Order item 593",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T16:55:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.4.52",
                    "number": 4,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "Green.6.367",
                    "number": 2,
                    "missileType": "IRBM"
                },
                {
                    "asset": "Green.2.395",
                    "number": 4,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "Green.3.136",
                    "number": 4,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Jet OWA UAV",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_584",
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
            "messageType": "Maritime--Resupply",
            "timestamp": "2022-09-29T16:27:36.143Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-587",
            "title": "Order item 591",
            "startDate": "2022-05-01T15:20:00.000Z",
            "endDate": "2022-05-01T17:20:00.000Z",
            "activity": "f-red-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.3.136",
                    "number": 5
                },
                {
                    "asset": "Red.6.391",
                    "number": 1
                },
                {
                    "asset": "Red.6.359",
                    "number": 0
                },
                {
                    "asset": "Red.7.40",
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
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T15:20:00.000Z",
                            "endDate": "2022-05-01T16:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651418400000,
                            "endTime": 1651421400000,
                            "geomId": "Resupply-0",
                            "name": "f-red//5.0137417279183865//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0615,
                                    35.1056
                                ],
                                [
                                    42.92,
                                    22.49
                                ],
                                [
                                    22.26,
                                    10.37
                                ],
                                [
                                    22.6806,
                                    10.2205
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
                            "startDate": "2022-05-01T16:10:00.000Z",
                            "endDate": "2022-05-01T16:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651421400000,
                            "endTime": 1651423800000,
                            "geomId": "Resupply-1",
                            "name": "f-red//10.027483455836773//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.393077692580732,
                                        11.479745368628633
                                    ],
                                    [
                                        21.393077692580732,
                                        8.956242522561048
                                    ],
                                    [
                                        23.95793781869625,
                                        8.956242522561048
                                    ],
                                    [
                                        23.95793781869625,
                                        11.479745368628633
                                    ],
                                    [
                                        21.393077692580732,
                                        11.479745368628633
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
                            "startDate": "2022-05-01T16:50:00.000Z",
                            "endDate": "2022-05-01T17:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651423800000,
                            "endTime": 1651425600000,
                            "geomId": "Resupply-2",
                            "name": "f-red//15.04122518375516//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.6806,
                                    10.2205
                                ],
                                [
                                    32.54,
                                    16.7
                                ],
                                [
                                    43.31,
                                    23.09
                                ],
                                [
                                    53.37,
                                    28.76
                                ],
                                [
                                    62.71,
                                    34.72
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
        "_id": "m_f-red_587",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-26T10:23:33.589Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-590",
            "title": "Order item 594",
            "startDate": "2022-05-01T15:20:00.000Z",
            "endDate": "2022-05-01T16:10:00.000Z",
            "activity": "f-red-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.7.40",
                    "number": 1
                },
                {
                    "asset": "Red.11.235",
                    "number": 2
                },
                {
                    "asset": "Red.3.143",
                    "number": 0
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
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T15:20:00.000Z",
                            "endDate": "2022-05-01T16:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651418400000,
                            "endTime": 1651421400000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//4.937777955085039//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.888496868586515,
                                        15.605009718721277
                                    ],
                                    [
                                        48.888496868586515,
                                        15.03039565948629
                                    ],
                                    [
                                        49.48428482346261,
                                        15.03039565948629
                                    ],
                                    [
                                        49.48428482346261,
                                        15.605009718721277
                                    ],
                                    [
                                        48.888496868586515,
                                        15.605009718721277
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_590",
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
            "timestamp": "2022-09-27T18:03:31.825Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-593",
            "title": "Order item 597",
            "startDate": "2022-05-01T15:30:00.000Z",
            "endDate": "2022-05-01T16:20:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.2.164",
                    "number": 1
                },
                {
                    "asset": "Green.4.298",
                    "number": 2
                },
                {
                    "asset": "Green.2.146",
                    "number": 3
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
                            "startDate": "2022-05-01T15:30:00.000Z",
                            "endDate": "2022-05-01T16:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419000000,
                            "endTime": 1651422000000,
                            "geomId": "Transit-0",
                            "name": "f-green//3.755235344171524//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.2196,
                                    17.307
                                ],
                                [
                                    40.13,
                                    27.31
                                ],
                                [
                                    59.15,
                                    37.43
                                ],
                                [
                                    76.46,
                                    47.83
                                ],
                                [
                                    76.9192,
                                    47.4924
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_593",
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
            "messageType": "Air--EWAttack",
            "timestamp": "2022-09-25T07:27:30.852Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-596",
            "title": "Order item 600",
            "startDate": "2022-05-01T15:40:00.000Z",
            "endDate": "2022-05-01T19:00:00.000Z",
            "activity": "f-red-Air-EW Attack",
            "ownAssets": [
                {
                    "asset": "Red.2.107",
                    "number": 5
                },
                {
                    "asset": "Red.8.181",
                    "number": 2
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
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-05-01T15:40:00.000Z",
                            "endDate": "2022-05-01T16:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651419600000,
                            "endTime": 1651422600000,
                            "geomId": "EW Attack-0",
                            "name": "f-red//6.466113913804293//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.059,
                                    3.8497
                                ],
                                [
                                    58.41,
                                    8.39
                                ],
                                [
                                    56.71,
                                    11.87
                                ],
                                [
                                    54.28,
                                    16.63
                                ],
                                [
                                    52.14,
                                    20.68
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
                    "uniqid": "EW Attack-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//EW Area of Effect",
                            "startDate": "2022-05-01T16:30:00.000Z",
                            "endDate": "2022-05-01T16:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651422600000,
                            "endTime": 1651423800000,
                            "geomId": "EW Attack-1",
                            "name": "f-red//12.932227827608585//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.59190733903491,
                                        23.703120558139958
                                    ],
                                    [
                                        48.59190733903491,
                                        17.89532307693307
                                    ],
                                    [
                                        54.81643893093919,
                                        17.89532307693307
                                    ],
                                    [
                                        54.81643893093919,
                                        23.703120558139958
                                    ],
                                    [
                                        48.59190733903491,
                                        23.703120558139958
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
                            "startDate": "2022-05-01T16:50:00.000Z",
                            "endDate": "2022-05-01T19:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651423800000,
                            "endTime": 1651431600000,
                            "geomId": "EW Attack-2",
                            "name": "f-red//19.398341741412878//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.7642,
                                    20.8273
                                ],
                                [
                                    55.93,
                                    11.94
                                ],
                                [
                                    61.47,
                                    3.41
                                ],
                                [
                                    61.059,
                                    3.8497
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_596",
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
            "timestamp": "2022-09-27T10:35:30.670Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-599",
            "title": "Order item 603",
            "startDate": "2022-05-01T16:00:00.000Z",
            "endDate": "2022-05-01T17:10:00.000Z",
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "Red.11.269",
                    "number": 0
                },
                {
                    "asset": "Red.10.283",
                    "number": 4
                },
                {
                    "asset": "Red.8.10",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-05-01T16:00:00.000Z",
                            "endDate": "2022-05-01T16:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651420800000,
                            "endTime": 1651423800000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-red//3.070413663983345//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.2597,
                                    5.3662
                                ],
                                [
                                    55.86,
                                    19.71
                                ],
                                [
                                    33.91,
                                    33.52
                                ],
                                [
                                    34.1889,
                                    33.4511
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
                            "startDate": "2022-05-01T16:50:00.000Z",
                            "endDate": "2022-05-01T17:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651423800000,
                            "endTime": 1651424400000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-red//6.14082732796669//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        33.795776374540864,
                                        33.777247709666256
                                    ],
                                    [
                                        33.795776374540864,
                                        33.12372104379035
                                    ],
                                    [
                                        34.57907231314509,
                                        33.12372104379035
                                    ],
                                    [
                                        34.57907231314509,
                                        33.777247709666256
                                    ],
                                    [
                                        33.795776374540864,
                                        33.777247709666256
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
                            "startDate": "2022-05-01T17:00:00.000Z",
                            "endDate": "2022-05-01T17:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651424400000,
                            "endTime": 1651425000000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-red//9.211240991950035//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.1889,
                                    33.4511
                                ],
                                [
                                    45.25,
                                    26.57
                                ],
                                [
                                    56.14,
                                    19.52
                                ],
                                [
                                    67.32,
                                    12.76
                                ],
                                [
                                    77.78,
                                    5.28
                                ],
                                [
                                    78.2597,
                                    5.3662
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_599",
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
            "timestamp": "2023-02-27T09:00:47.863Z",
            "turnNumber": 3,
            "counter": 1,
            "interaction": {
                "startTime": "2022-05-01T16:00:00.000Z",
                "endTime": "2022-05-01T16:40:00.000Z",
                "id": "umpire-1",
                "orders1": "m_f-blue_509",
                "orders2": "m_f-red_599",
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
        "_id": "2023-02-27T09:00:47.863Z//0"
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
            "timestamp": "2023-02-27T09:00:47.863Z",
            "turnNumber": 3,
            "counter": 2,
            "interaction": {
                "startTime": "2022-05-01T06:15:00.000Z",
                "endTime": "2022-05-01T05:05:00.000Z",
                "id": "umpire-2",
                "orders1": "m_f-blue_158",
                "orders2": "m_f-red_209",
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
        "_id": "2023-02-27T09:00:47.863Z//1"
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
            "timestamp": "2023-02-27T09:00:47.863Z",
            "turnNumber": 3,
            "counter": 3,
            "interaction": {
                "startTime": "2022-05-01T08:55:00.000Z",
                "endTime": "2022-05-01T02:50:00.000Z",
                "id": "umpire-3",
                "orders1": "m_f-blue_335",
                "orders2": "m_f-red_92",
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
        "_id": "2023-02-27T09:00:47.863Z//2"
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
            "timestamp": "2023-02-27T09:00:47.863Z",
            "turnNumber": 3,
            "counter": 4,
            "interaction": {
                "startTime": "2022-05-01T08:55:00.000Z",
                "endTime": "2022-05-01T05:35:00.000Z",
                "id": "umpire-4",
                "orders1": "m_f-blue_332",
                "orders2": "m_f-red_11",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-4",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:00:47.863Z//3"
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
            "timestamp": "2023-02-27T09:00:47.863Z",
            "turnNumber": 3,
            "counter": 5,
            "interaction": {
                "startTime": "2022-05-01T08:55:00.000Z",
                "endTime": "2022-05-01T07:45:00.000Z",
                "id": "umpire-5",
                "orders1": "m_f-blue_239",
                "orders2": "m_f-red_338",
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
        "_id": "2023-02-27T09:00:47.863Z//4"
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
            "timestamp": "2023-02-27T09:00:47.863Z",
            "turnNumber": 3,
            "counter": 6,
            "interaction": {
                "startTime": "2022-05-01T08:55:00.000Z",
                "endTime": "2022-05-01T09:40:00.000Z",
                "id": "umpire-6",
                "orders1": "m_f-blue_326",
                "orders2": "m_f-red_248",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-6",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:00:47.863Z//5"
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
            "timestamp": "2023-02-27T09:00:47.863Z",
            "turnNumber": 3,
            "counter": 7,
            "interaction": {
                "startTime": "2022-05-01T09:00:00.000Z",
                "endTime": "2022-05-01T09:40:00.000Z",
                "id": "umpire-7",
                "orders1": "m_f-blue_353",
                "orders2": "m_f-red_287",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-7",
            "healthOutcomes": [],
            "important": true,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:00:47.863Z//6"
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
            "timestamp": "2023-02-27T09:00:47.863Z",
            "turnNumber": 3,
            "counter": 8,
            "interaction": {
                "startTime": "2022-05-01T07:40:00.000Z",
                "endTime": "2022-05-01T04:00:00.000Z",
                "id": "umpire-8",
                "orders1": "m_f-blue_41",
                "orders2": "m_f-red_260",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-8",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:00:47.863Z//7"
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
            "timestamp": "2023-02-27T09:00:47.863Z",
            "turnNumber": 3,
            "counter": 9,
            "interaction": {
                "startTime": "2022-05-01T08:50:00.000Z",
                "endTime": "2022-05-01T00:55:00.000Z",
                "id": "umpire-9",
                "orders1": "m_f-blue_14",
                "orders2": "m_f-red_317",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-9",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:00:47.863Z//8"
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
            "timestamp": "2023-02-27T09:00:47.863Z",
            "turnNumber": 3,
            "counter": 10,
            "interaction": {
                "startTime": "2022-05-01T08:50:00.000Z",
                "endTime": "2022-05-01T10:10:00.000Z",
                "id": "umpire-10",
                "orders1": "m_f-blue_305",
                "orders2": "m_f-red_317",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-10",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:00:47.863Z//9"
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
            "timestamp": "2023-02-27T09:00:47.863Z",
            "turnNumber": 3,
            "counter": 11,
            "interaction": {
                "startTime": "2022-05-01T13:00:00.000Z",
                "endTime": "2022-05-01T08:05:00.000Z",
                "id": "umpire-11",
                "orders1": "m_f-blue_491",
                "orders2": "m_f-red_233",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-11",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:00:47.863Z//10"
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
            "timestamp": "2023-02-27T09:00:47.863Z",
            "turnNumber": 3,
            "counter": 12,
            "interaction": {
                "startTime": "2022-05-01T10:05:00.000Z",
                "endTime": "2022-05-01T13:40:00.000Z",
                "id": "umpire-12",
                "orders1": "m_f-blue_356",
                "orders2": "m_f-red_389",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-12",
            "healthOutcomes": [],
            "important": true,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:00:47.863Z//11"
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
            "timestamp": "2023-02-27T09:00:47.864Z",
            "turnNumber": 3,
            "counter": 13,
            "interaction": {
                "startTime": "2022-05-01T09:00:00.000Z",
                "endTime": "2022-05-01T08:05:00.000Z",
                "id": "umpire-13",
                "orders1": "m_f-blue_155",
                "orders2": "m_f-red_350",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-13",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:00:47.864Z//12"
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
            "timestamp": "2023-02-27T09:00:47.864Z",
            "turnNumber": 3,
            "counter": 14,
            "interaction": {
                "startTime": "2022-05-01T11:25:00.000Z",
                "endTime": "2022-05-01T12:25:00.000Z",
                "id": "umpire-14",
                "orders1": "m_f-blue_455",
                "orders2": "m_f-red_209",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-14",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:00:47.864Z//13"
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
            "timestamp": "2023-02-27T09:00:47.864Z",
            "turnNumber": 3,
            "counter": 15,
            "interaction": {
                "startTime": "2022-05-01T10:55:00.000Z",
                "endTime": "2022-05-01T04:50:00.000Z",
                "id": "umpire-15",
                "orders1": "m_f-blue_422",
                "orders2": "m_f-red_59",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-15",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:00:47.864Z//14"
    }
]