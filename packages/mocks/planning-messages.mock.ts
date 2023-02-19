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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-22T15:47:41.086Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-2",
            "title": "Order item 6",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T04:35:00.000Z",
            "activity": "f-blue-Air-Air-Air Refuel",
            "ownAssets": [
                {
                    "asset": "Blue.9.160",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.1.195"
                },
                {
                    "asset": "Green.9.877"
                }
            ],
            "location": [
                {
                    "uniqid": "Air-Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air-Air Refuel//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Air-Air Refuel-0",
                            "name": "f-blue//3.105222334795144//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    16.9048,
                                    45.0615
                                ],
                                [
                                    56.39,
                                    19.98
                                ],
                                [
                                    96.24,
                                    -5.72
                                ],
                                [
                                    95.9539,
                                    -5.4016
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air-Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air-Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T02:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651373700000,
                            "geomId": "Air-Air Refuel-1",
                            "name": "f-blue//6.210444669590288//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        95.3109892938149,
                                        -4.760568895785871
                                    ],
                                    [
                                        95.3109892938149,
                                        -6.041953593457632
                                    ],
                                    [
                                        96.59817172803888,
                                        -6.041953593457632
                                    ],
                                    [
                                        96.59817172803888,
                                        -4.760568895785871
                                    ],
                                    [
                                        95.3109892938149,
                                        -4.760568895785871
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air-Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air-Air Refuel//Route back",
                            "startDate": "2022-05-01T02:55:00.000Z",
                            "endDate": "2022-05-01T04:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373700000,
                            "endTime": 1651379700000,
                            "geomId": "Air-Air Refuel-2",
                            "name": "f-blue//9.315667004385432//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    95.9539,
                                    -5.4016
                                ],
                                [
                                    69.34,
                                    11.04
                                ],
                                [
                                    42.97,
                                    28.73
                                ],
                                [
                                    16.89,
                                    44.7
                                ],
                                [
                                    16.9048,
                                    45.0615
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
                    "asset": "Green.4.930",
                    "number": 0
                },
                {
                    "asset": "Green.11.753",
                    "number": 2
                },
                {
                    "asset": "Green.10.859",
                    "number": 3
                },
                {
                    "asset": "Green.2.248",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
                },
                {
                    "asset": "Red.9.877"
                },
                {
                    "asset": "Blue.7.124"
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
                                    57.7443,
                                    16.6624
                                ],
                                [
                                    42.83,
                                    30.19
                                ],
                                [
                                    26.83,
                                    44.62
                                ],
                                [
                                    12.11,
                                    58.33
                                ],
                                [
                                    -3.32,
                                    71.33
                                ],
                                [
                                    -3.1216,
                                    71.8288
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
                                        -14.965472495407504,
                                        74.63820152773721
                                    ],
                                    [
                                        -14.965472495407504,
                                        68.49091871761301
                                    ],
                                    [
                                        5.4065470195104615,
                                        68.49091871761301
                                    ],
                                    [
                                        5.4065470195104615,
                                        74.63820152773721
                                    ],
                                    [
                                        -14.965472495407504,
                                        74.63820152773721
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
                                    -3.1216,
                                    71.8288
                                ],
                                [
                                    17.17,
                                    53.08
                                ],
                                [
                                    37.57,
                                    35.43
                                ],
                                [
                                    57.26,
                                    17.06
                                ],
                                [
                                    57.7443,
                                    16.6624
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
                    "asset": "Blue.1.248",
                    "number": 2
                },
                {
                    "asset": "Blue.5.921",
                    "number": 1
                },
                {
                    "asset": "Blue.11.877",
                    "number": 4
                },
                {
                    "asset": "Blue.7.115",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.1.195"
                },
                {
                    "asset": "Green.9.877"
                },
                {
                    "asset": "Red.8.124"
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
                                    35.2555,
                                    44.6625
                                ],
                                [
                                    30.31,
                                    32.49
                                ],
                                [
                                    24.45,
                                    19.41
                                ],
                                [
                                    18.88,
                                    7.61
                                ],
                                [
                                    19.3846,
                                    7.1613
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
                                        19.13485029531982,
                                        7.408897277778077
                                    ],
                                    [
                                        19.13485029531982,
                                        6.913568213110494
                                    ],
                                    [
                                        19.634078572708315,
                                        6.913568213110494
                                    ],
                                    [
                                        19.634078572708315,
                                        7.408897277778077
                                    ],
                                    [
                                        19.13485029531982,
                                        7.408897277778077
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
                                    19.3846,
                                    7.1613
                                ],
                                [
                                    27.55,
                                    25.77
                                ],
                                [
                                    35.1,
                                    44.75
                                ],
                                [
                                    35.2555,
                                    44.6625
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-26T20:39:53.339Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-11",
            "title": "Order item 15",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T05:35:00.000Z",
            "activity": "f-red-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.5.115",
                    "number": 2
                },
                {
                    "asset": "Red.5.638",
                    "number": 4
                },
                {
                    "asset": "Red.7.443",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
                },
                {
                    "asset": "Green.9.877"
                },
                {
                    "asset": "Blue.7.124"
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
                            "force": "f-red",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Resupply-0",
                            "name": "f-red//6.906210489443765//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    131.3435,
                                    -4.8544
                                ],
                                [
                                    87.95,
                                    6.68
                                ],
                                [
                                    44.87,
                                    17.52
                                ],
                                [
                                    44.6628,
                                    17.6345
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
                            "force": "f-red",
                            "startTime": 1651366500000,
                            "endTime": 1651374300000,
                            "geomId": "Resupply-1",
                            "name": "f-red//13.81242097888753//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        40.70980005366596,
                                        21.27905662336135
                                    ],
                                    [
                                        40.70980005366596,
                                        13.914372053803453
                                    ],
                                    [
                                        48.45741903759925,
                                        13.914372053803453
                                    ],
                                    [
                                        48.45741903759925,
                                        21.27905662336135
                                    ],
                                    [
                                        40.70980005366596,
                                        21.27905662336135
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
                            "force": "f-red",
                            "startTime": 1651374300000,
                            "endTime": 1651383300000,
                            "geomId": "Resupply-2",
                            "name": "f-red//20.718631468331296//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.6628,
                                    17.6345
                                ],
                                [
                                    74.04,
                                    10.43
                                ],
                                [
                                    102.45,
                                    2.26
                                ],
                                [
                                    131.15,
                                    -4.61
                                ],
                                [
                                    131.3435,
                                    -4.8544
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
            "messageType": "Space--Effects",
            "timestamp": "2022-09-29T01:45:19.005Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-14",
            "title": "Order item 18",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T01:15:00.000Z",
            "activity": "f-blue-Space-Activity",
            "ownAssets": [
                {
                    "asset": "Blue.4.531",
                    "number": 4
                },
                {
                    "asset": "Blue.5.903",
                    "number": 2
                },
                {
                    "asset": "Blue.11.558",
                    "number": 1
                },
                {
                    "asset": "Blue.7.496",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.1.195"
                },
                {
                    "asset": "Green.9.877"
                },
                {
                    "asset": "Red.8.124"
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
            "messageType": "Air--ISTAR",
            "timestamp": "2022-09-27T12:34:45.461Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-17",
            "title": "Order item 21",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T07:15:00.000Z",
            "activity": "f-blue-Air-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.7.496",
                    "number": 3
                },
                {
                    "asset": "Blue.13.717",
                    "number": 5
                },
                {
                    "asset": "Blue.1.222",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.1.195"
                },
                {
                    "asset": "Green.9.877"
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
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//5.573975105719001//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.5737,
                                    68.9485
                                ],
                                [
                                    39.4,
                                    46.16
                                ],
                                [
                                    23.29,
                                    23.44
                                ],
                                [
                                    7.46,
                                    1
                                ],
                                [
                                    7.7236,
                                    0.7355
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
                            "endDate": "2022-05-01T04:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651377900000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//11.147950211438001//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        6.89782754748251,
                                        1.5608896567955135
                                    ],
                                    [
                                        6.89782754748251,
                                        -0.0900423579504412
                                    ],
                                    [
                                        8.549067040902738,
                                        -0.0900423579504412
                                    ],
                                    [
                                        8.549067040902738,
                                        1.5608896567955135
                                    ],
                                    [
                                        6.89782754748251,
                                        1.5608896567955135
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T04:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651377900000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//16.721925317157//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        6.76004939995083,
                                        1.6985232303324291
                                    ],
                                    [
                                        6.76004939995083,
                                        -0.22773112391565162
                                    ],
                                    [
                                        8.686734808018969,
                                        -0.22773112391565162
                                    ],
                                    [
                                        8.686734808018969,
                                        1.6985232303324291
                                    ],
                                    [
                                        6.76004939995083,
                                        1.6985232303324291
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
                            "startDate": "2022-05-01T04:05:00.000Z",
                            "endDate": "2022-05-01T07:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651377900000,
                            "endTime": 1651389300000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//22.295900422876002//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    7.7236,
                                    0.7355
                                ],
                                [
                                    20.09,
                                    18.22
                                ],
                                [
                                    31.47,
                                    34.71
                                ],
                                [
                                    43.13,
                                    51.48
                                ],
                                [
                                    55.07,
                                    68.54
                                ],
                                [
                                    55.5737,
                                    68.9485
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-22T05:08:12.707Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-20",
            "title": "Order item 24",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-red-Cyber-Activity",
            "ownAssets": [
                {
                    "asset": "Red.10.9",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-29T19:25:40.744Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-23",
            "title": "Order item 27",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.8.71",
                    "number": 4
                },
                {
                    "asset": "Green.12.991",
                    "number": 5
                },
                {
                    "asset": "Green.9.195",
                    "number": 3
                },
                {
                    "asset": "Green.2.682",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
                },
                {
                    "asset": "Red.9.877"
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
                            "force": "f-green",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Transit-0",
                            "name": "f-green//4.815424399195763//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.7304,
                                    7.6611
                                ],
                                [
                                    -11.96,
                                    50.3
                                ],
                                [
                                    -12.0792,
                                    50.6635
                                ]
                            ]
                        }
                    }
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
                    "asset": "Green.2.682",
                    "number": 3
                },
                {
                    "asset": "Green.2.452",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
                },
                {
                    "asset": "Red.9.877"
                },
                {
                    "asset": "Blue.7.124"
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
                                    20.8481,
                                    14.5061
                                ],
                                [
                                    47.92,
                                    7.81
                                ],
                                [
                                    75.28,
                                    0.38
                                ],
                                [
                                    101.91,
                                    -6.75
                                ],
                                [
                                    101.9719,
                                    -6.375
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
                                        99.60132995239401,
                                        -4.0047858840103085
                                    ],
                                    [
                                        99.60132995239401,
                                        -8.73429220156065
                                    ],
                                    [
                                        104.36444006267347,
                                        -8.73429220156065
                                    ],
                                    [
                                        104.36444006267347,
                                        -4.0047858840103085
                                    ],
                                    [
                                        99.60132995239401,
                                        -4.0047858840103085
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
                                    101.9719,
                                    -6.375
                                ],
                                [
                                    82.06,
                                    -1.24
                                ],
                                [
                                    60.93,
                                    3.66
                                ],
                                [
                                    41.09,
                                    8.86
                                ],
                                [
                                    20.53,
                                    14.34
                                ],
                                [
                                    20.8481,
                                    14.5061
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
            "messageType": "Air--Activity",
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
                    "asset": "Green.11.841",
                    "number": 4
                },
                {
                    "asset": "Green.13.460",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
                },
                {
                    "asset": "Red.9.877"
                },
                {
                    "asset": "Blue.7.124"
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
                                    -6.4012,
                                    4.0414
                                ],
                                [
                                    -3.73,
                                    25.97
                                ],
                                [
                                    -0.91,
                                    47.06
                                ],
                                [
                                    1.19,
                                    68.44
                                ],
                                [
                                    1.233,
                                    68.6258
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-21T16:42:09.598Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-32",
            "title": "Order item 36",
            "startDate": "2022-05-01T00:45:00.000Z",
            "endDate": "2022-05-01T02:45:00.000Z",
            "activity": "f-blue-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.2.549",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.1.195"
                },
                {
                    "asset": "Green.9.877"
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
                            "force": "f-blue",
                            "startTime": 1651365900000,
                            "endTime": 1651368900000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//5.378257109216065//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -12.6994,
                                    42.6747
                                ],
                                [
                                    14.42,
                                    46.99
                                ],
                                [
                                    42.4,
                                    50.16
                                ],
                                [
                                    69.66,
                                    54.61
                                ],
                                [
                                    97.21,
                                    58.34
                                ],
                                [
                                    96.8466,
                                    58.3108
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
                            "endDate": "2022-05-01T02:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651368900000,
                            "endTime": 1651372500000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//10.75651421843213//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        90.97690940854801,
                                        61.02634670780029
                                    ],
                                    [
                                        90.97690940854801,
                                        55.365693362002816
                                    ],
                                    [
                                        101.84708303118057,
                                        55.365693362002816
                                    ],
                                    [
                                        101.84708303118057,
                                        61.02634670780029
                                    ],
                                    [
                                        90.97690940854801,
                                        61.02634670780029
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
                            "startDate": "2022-05-01T02:35:00.000Z",
                            "endDate": "2022-05-01T02:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651372500000,
                            "endTime": 1651373100000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//16.134771327648195//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    96.8466,
                                    58.3108
                                ],
                                [
                                    60.11,
                                    52.65
                                ],
                                [
                                    23.63,
                                    48.25
                                ],
                                [
                                    -12.56,
                                    43.14
                                ],
                                [
                                    -12.6994,
                                    42.6747
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
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
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
                    "asset": "Green.4.805",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
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
                                    45.3493,
                                    18.5164
                                ],
                                [
                                    25.23,
                                    36.45
                                ],
                                [
                                    4.34,
                                    54.6
                                ],
                                [
                                    -16.25,
                                    72.04
                                ],
                                [
                                    -16.4175,
                                    72.532
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
                    "asset": "Green.4.611",
                    "number": 2
                },
                {
                    "asset": "Green.3.779",
                    "number": 2
                },
                {
                    "asset": "Green.4.230",
                    "number": 2
                },
                {
                    "asset": "Green.11.964",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
                },
                {
                    "asset": "Red.9.877"
                },
                {
                    "asset": "Blue.7.124"
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
                                    32.5343,
                                    3.8158
                                ],
                                [
                                    35.39,
                                    18.79
                                ],
                                [
                                    39.49,
                                    34.01
                                ],
                                [
                                    41.87,
                                    49.52
                                ],
                                [
                                    42.3361,
                                    49.4458
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
                                        37.78195608110094,
                                        52.15371166295928
                                    ],
                                    [
                                        37.78195608110094,
                                        46.578123371155556
                                    ],
                                    [
                                        46.40027910582739,
                                        46.578123371155556
                                    ],
                                    [
                                        46.40027910582739,
                                        52.15371166295928
                                    ],
                                    [
                                        37.78195608110094,
                                        52.15371166295928
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
                                    42.3361,
                                    49.4458
                                ],
                                [
                                    37.43,
                                    26.5
                                ],
                                [
                                    33.02,
                                    4.04
                                ],
                                [
                                    32.5343,
                                    3.8158
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
                    "asset": "Blue.11.964",
                    "number": 4
                },
                {
                    "asset": "Blue.11.982",
                    "number": 5
                },
                {
                    "asset": "Blue.5.283",
                    "number": 5
                },
                {
                    "asset": "Blue.3.867",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.1.195"
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
                                    35.2749,
                                    73.3981
                                ],
                                [
                                    53.38,
                                    -5.69
                                ],
                                [
                                    53.3437,
                                    -5.3404
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
                                        52.4082322219761,
                                        -4.406989540333887
                                    ],
                                    [
                                        52.4082322219761,
                                        -6.27239081204613
                                    ],
                                    [
                                        54.28201925754787,
                                        -6.27239081204613
                                    ],
                                    [
                                        54.28201925754787,
                                        -4.406989540333887
                                    ],
                                    [
                                        52.4082322219761,
                                        -4.406989540333887
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
                                    53.3437,
                                    -5.3404
                                ],
                                [
                                    44.48,
                                    34
                                ],
                                [
                                    34.97,
                                    73.7
                                ],
                                [
                                    35.2749,
                                    73.3981
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
            "messageType": "f-red--Air--MissileStrike",
            "timestamp": "2022-09-24T04:47:23.512Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-44",
            "title": "Order item 53",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T05:20:00.000Z",
            "activity": "f-red-Air-Stand Off Strike",
            "ownAssets": [
                {
                    "asset": "Red.2.867",
                    "number": 1,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Red.3.734",
                    "number": 2,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Red.7.885",
                    "number": 1,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195",
                    "missileType": "Propellor OWA UAV",
                    "number": 4
                },
                {
                    "asset": "Green.9.877",
                    "missileType": "Jet OWA UAV",
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
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Stand Off Strike-0",
                            "name": "f-red//2.6020609408733435//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    100.7449,
                                    7.5067
                                ],
                                [
                                    55.01,
                                    21.23
                                ],
                                [
                                    9.7,
                                    34.37
                                ],
                                [
                                    10.0632,
                                    34.1496
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651381200000,
                            "geomId": "Stand Off Strike-1",
                            "name": "f-red//5.204121881746687//Launch Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        8.471905056274155,
                                        35.43596498281878
                                    ],
                                    [
                                        8.471905056274155,
                                        32.84332295077223
                                    ],
                                    [
                                        11.606388118027716,
                                        32.84332295077223
                                    ],
                                    [
                                        11.606388118027716,
                                        35.43596498281878
                                    ],
                                    [
                                        8.471905056274155,
                                        35.43596498281878
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
                            "startDate": "2022-05-01T05:00:00.000Z",
                            "endDate": "2022-05-01T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651381200000,
                            "endTime": 1651382400000,
                            "geomId": "Stand Off Strike-2",
                            "name": "f-red//7.8061828226200305//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    10.0632,
                                    34.1496
                                ],
                                [
                                    32.37,
                                    27.05
                                ],
                                [
                                    55.51,
                                    20.77
                                ],
                                [
                                    77.92,
                                    13.78
                                ],
                                [
                                    100.63,
                                    7.07
                                ],
                                [
                                    100.7449,
                                    7.5067
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
            "messageType": "SOF--Attack",
            "timestamp": "2022-09-21T20:09:53.499Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-47",
            "title": "Order item 51",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T04:50:00.000Z",
            "activity": "f-red-SOF-SOF Activity",
            "ownAssets": [
                {
                    "asset": "Red.12.318",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
                },
                {
                    "asset": "Green.9.877"
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
                                    115.456,
                                    34.104
                                ],
                                [
                                    95.87,
                                    23.91
                                ],
                                [
                                    77.13,
                                    12.56
                                ],
                                [
                                    57.68,
                                    2.5
                                ],
                                [
                                    37.51,
                                    -8.27
                                ],
                                [
                                    37.8627,
                                    -8.0364
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
                                        35.19854731304506,
                                        -5.375342783715326
                                    ],
                                    [
                                        35.19854731304506,
                                        -10.680085902694152
                                    ],
                                    [
                                        40.561919926791255,
                                        -10.680085902694152
                                    ],
                                    [
                                        40.561919926791255,
                                        -5.375342783715326
                                    ],
                                    [
                                        35.19854731304506,
                                        -5.375342783715326
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651375800000,
                            "geomId": "SOF Activity-2",
                            "name": "f-red//7.554205035790801//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        35.91556769574575,
                                        -6.095679605466295
                                    ],
                                    [
                                        35.91556769574575,
                                        -9.967873333510791
                                    ],
                                    [
                                        39.828504193295956,
                                        -9.967873333510791
                                    ],
                                    [
                                        39.828504193295956,
                                        -6.095679605466295
                                    ],
                                    [
                                        35.91556769574575,
                                        -6.095679605466295
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
                            "startDate": "2022-05-01T03:30:00.000Z",
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651375800000,
                            "endTime": 1651380600000,
                            "geomId": "SOF Activity-3",
                            "name": "f-red//10.072273381054401//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.8627,
                                    -8.0364
                                ],
                                [
                                    77.08,
                                    12.69
                                ],
                                [
                                    115.68,
                                    33.81
                                ],
                                [
                                    115.456,
                                    34.104
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
            "activity": "f-red-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.12.318",
                    "number": 3
                },
                {
                    "asset": "Red.7.885",
                    "number": 4
                },
                {
                    "asset": "Red.3.734",
                    "number": 1
                },
                {
                    "asset": "Red.2.867",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
                },
                {
                    "asset": "Green.9.877"
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
                            "name": "f-red//6.6262941003078595//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.3194,
                                    49.6635
                                ],
                                [
                                    110.79,
                                    52.99
                                ],
                                [
                                    85.52,
                                    56.56
                                ],
                                [
                                    58.53,
                                    60.43
                                ],
                                [
                                    58.9873,
                                    60.3638
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
                            "endDate": "2022-05-01T04:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651378800000,
                            "geomId": "Resupply-1",
                            "name": "f-red//13.252588200615719//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        51.95927749101704,
                                        63.342525728262075
                                    ],
                                    [
                                        51.95927749101704,
                                        57.078320405126874
                                    ],
                                    [
                                        64.7843199681653,
                                        57.078320405126874
                                    ],
                                    [
                                        64.7843199681653,
                                        63.342525728262075
                                    ],
                                    [
                                        51.95927749101704,
                                        63.342525728262075
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
                            "startDate": "2022-05-01T04:20:00.000Z",
                            "endDate": "2022-05-01T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651378800000,
                            "endTime": 1651380000000,
                            "geomId": "Resupply-2",
                            "name": "f-red//19.87888230092358//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.9873,
                                    60.3638
                                ],
                                [
                                    97.93,
                                    55.2
                                ],
                                [
                                    137.32,
                                    49.48
                                ],
                                [
                                    137.3194,
                                    49.6635
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
                    "asset": "Green.13.867",
                    "number": 4
                },
                {
                    "asset": "Green.11.283",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
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
                                    3.3617,
                                    18.1266
                                ],
                                [
                                    44.06,
                                    36.3
                                ],
                                [
                                    83.96,
                                    54.67
                                ],
                                [
                                    124.14,
                                    72.32
                                ],
                                [
                                    123.9871,
                                    72.7601
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
                                        113.01029261435548,
                                        75.27884027393138
                                    ],
                                    [
                                        113.01029261435548,
                                        69.80000601213469
                                    ],
                                    [
                                        132.04244474752622,
                                        69.80000601213469
                                    ],
                                    [
                                        132.04244474752622,
                                        75.27884027393138
                                    ],
                                    [
                                        113.01029261435548,
                                        75.27884027393138
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
                                    123.9871,
                                    72.7601
                                ],
                                [
                                    63.77,
                                    45.2
                                ],
                                [
                                    3.05,
                                    18.13
                                ],
                                [
                                    3.3617,
                                    18.1266
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-23T11:02:41.326Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-56",
            "title": "Order item 60",
            "startDate": "2022-05-01T01:30:00.000Z",
            "endDate": "2022-05-01T02:00:00.000Z",
            "activity": "f-red-Cyber-Activity",
            "ownAssets": [
                {
                    "asset": "Red.6.964",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
                },
                {
                    "asset": "Green.9.877"
                },
                {
                    "asset": "Blue.7.124"
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
                    "asset": "Red.5.610",
                    "number": 0
                },
                {
                    "asset": "Red.12.725",
                    "number": 2
                },
                {
                    "asset": "Red.9.123",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
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
                                    104.4848,
                                    8.6916
                                ],
                                [
                                    68.05,
                                    22.66
                                ],
                                [
                                    30.97,
                                    36.99
                                ],
                                [
                                    31.3263,
                                    36.6435
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
                                        26.309372339053773,
                                        40.36403304232137
                                    ],
                                    [
                                        26.309372339053773,
                                        32.73233844541093
                                    ],
                                    [
                                        35.86947364787854,
                                        32.73233844541093
                                    ],
                                    [
                                        35.86947364787854,
                                        40.36403304232137
                                    ],
                                    [
                                        26.309372339053773,
                                        40.36403304232137
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
                                    31.3263,
                                    36.6435
                                ],
                                [
                                    67.9,
                                    22.85
                                ],
                                [
                                    104.8,
                                    8.4
                                ],
                                [
                                    104.4848,
                                    8.6916
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
                    "asset": "Green.4.805",
                    "number": 1
                },
                {
                    "asset": "Green.3.769",
                    "number": 5
                },
                {
                    "asset": "Green.10.17",
                    "number": 1
                },
                {
                    "asset": "Green.11.548",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
                },
                {
                    "asset": "Red.9.877"
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
                                    -15.9656,
                                    32.0724
                                ],
                                [
                                    46.16,
                                    35.09
                                ],
                                [
                                    107.69,
                                    38.51
                                ],
                                [
                                    107.2957,
                                    39.0163
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
                                        105.97020092601308,
                                        40.0239058509567
                                    ],
                                    [
                                        105.97020092601308,
                                        37.99411870667638
                                    ],
                                    [
                                        108.58368899395938,
                                        37.99411870667638
                                    ],
                                    [
                                        108.58368899395938,
                                        40.0239058509567
                                    ],
                                    [
                                        105.97020092601308,
                                        40.0239058509567
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
                                    107.2957,
                                    39.0163
                                ],
                                [
                                    -16.43,
                                    32.18
                                ],
                                [
                                    -15.9656,
                                    32.0724
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
            "activity": "f-blue-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.3.548",
                    "number": 3
                },
                {
                    "asset": "Blue.12.362",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.1.195"
                },
                {
                    "asset": "Green.9.877"
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
                            "name": "f-blue//5.568740415357752//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.9386,
                                    50.3286
                                ],
                                [
                                    14.1,
                                    34.36
                                ],
                                [
                                    4.76,
                                    18.88
                                ],
                                [
                                    5.111,
                                    18.7935
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
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651380600000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//11.137480830715504//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        2.517226390779151,
                                        21.194078593516984
                                    ],
                                    [
                                        2.517226390779151,
                                        16.358126844093327
                                    ],
                                    [
                                        7.631309644374278,
                                        16.358126844093327
                                    ],
                                    [
                                        7.631309644374278,
                                        21.194078593516984
                                    ],
                                    [
                                        2.517226390779151,
                                        21.194078593516984
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
                            "startDate": "2022-05-01T04:50:00.000Z",
                            "endDate": "2022-05-01T07:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651380600000,
                            "endTime": 1651390800000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//16.706221246073255//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    5.111,
                                    18.7935
                                ],
                                [
                                    22.62,
                                    50.21
                                ],
                                [
                                    22.9386,
                                    50.3286
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
            "messageType": "f-blue--Air--MissileStrike",
            "timestamp": "2022-09-29T19:07:57.251Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-68",
            "title": "Order item 76",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T06:50:00.000Z",
            "activity": "f-blue-Air-Stand Off Strike",
            "ownAssets": [
                {
                    "asset": "Blue.12.840",
                    "number": 0,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "Blue.10.503",
                    "number": 4,
                    "missileType": "IRBM"
                },
                {
                    "asset": "Blue.4.450",
                    "number": 4,
                    "missileType": "Standard Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.1.195",
                    "missileType": "Standard Cruise",
                    "number": 3
                }
            ],
            "location": [
                {
                    "uniqid": "Stand Off Strike-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Stand Off Strike-0",
                            "name": "f-blue//6.830040922097396//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.8299,
                                    44.903
                                ],
                                [
                                    69.4,
                                    9.84
                                ],
                                [
                                    68.9654,
                                    9.5377
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T04:20:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651378800000,
                            "geomId": "Stand Off Strike-1",
                            "name": "f-blue//13.660081844194792//Launch Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        68.65321025545212,
                                        9.845153369098043
                                    ],
                                    [
                                        68.65321025545212,
                                        9.229969172129344
                                    ],
                                    [
                                        69.27702705313732,
                                        9.229969172129344
                                    ],
                                    [
                                        69.27702705313732,
                                        9.845153369098043
                                    ],
                                    [
                                        68.65321025545212,
                                        9.845153369098043
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
                            "startDate": "2022-05-01T04:20:00.000Z",
                            "endDate": "2022-05-01T06:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651378800000,
                            "endTime": 1651387800000,
                            "geomId": "Stand Off Strike-2",
                            "name": "f-blue//20.49012276629219//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    68.9654,
                                    9.5377
                                ],
                                [
                                    62.07,
                                    18.73
                                ],
                                [
                                    54.98,
                                    26.73
                                ],
                                [
                                    48.17,
                                    36.01
                                ],
                                [
                                    41.65,
                                    44.58
                                ],
                                [
                                    41.8299,
                                    44.903
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
            "activity": "f-blue-Maritime-Mine Clearance",
            "ownAssets": [
                {
                    "asset": "Blue.7.680",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.1.195"
                }
            ],
            "location": [
                {
                    "uniqid": "Mine Clearance-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Mine Clearance-0",
                            "name": "f-blue//4.399667126592249//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.233,
                                    68.6258
                                ],
                                [
                                    11.71,
                                    46.72
                                ],
                                [
                                    22.24,
                                    25.87
                                ],
                                [
                                    32.05,
                                    4.3
                                ],
                                [
                                    32.5343,
                                    3.8158
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651381200000,
                            "geomId": "Mine Clearance-1",
                            "name": "f-blue//8.799334253184497//Mine Clearance Area Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.91314901960138,
                                        5.42815920835103
                                    ],
                                    [
                                        30.91314901960138,
                                        2.2004066054526583
                                    ],
                                    [
                                        34.14937034881423,
                                        2.2004066054526583
                                    ],
                                    [
                                        34.14937034881423,
                                        5.42815920835103
                                    ],
                                    [
                                        30.91314901960138,
                                        5.42815920835103
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
                            "startDate": "2022-05-01T05:00:00.000Z",
                            "endDate": "2022-05-01T07:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381200000,
                            "endTime": 1651389000000,
                            "geomId": "Mine Clearance-2",
                            "name": "f-blue//13.199001379776746//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.5343,
                                    3.8158
                                ],
                                [
                                    17.08,
                                    36.17
                                ],
                                [
                                    0.98,
                                    68.87
                                ],
                                [
                                    1.233,
                                    68.6258
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
            "messageType": "f-red--Maritime--MissileStrike",
            "timestamp": "2022-09-23T09:06:20.590Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-74",
            "title": "Order item 81",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T04:50:00.000Z",
            "activity": "f-red-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Red.3.70",
                    "number": 3,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "Red.2.432",
                    "number": 3,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195",
                    "missileType": "SRBM",
                    "number": 5
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
                    "asset": "Blue.1.7",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.1.195",
                    "missileType": "SRBM",
                    "number": 3
                },
                {
                    "asset": "Green.9.877",
                    "missileType": "SRBM",
                    "number": 2
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-26T04:20:03.647Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-80",
            "title": "Order item 84",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.2.494",
                    "number": 0
                },
                {
                    "asset": "Green.7.556",
                    "number": 1
                },
                {
                    "asset": "Green.4.901",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
                },
                {
                    "asset": "Red.9.877"
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
                            "name": "f-green//6.846715963212773//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.4569,
                                    14.7084
                                ],
                                [
                                    56.75,
                                    57.88
                                ],
                                [
                                    56.6237,
                                    57.5893
                                ]
                            ]
                        }
                    }
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
            "messageType": "Land--Activity",
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
                    "asset": "Blue.11.529",
                    "number": 3
                },
                {
                    "asset": "Blue.11.441",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.1.195"
                },
                {
                    "asset": "Green.9.877"
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
                                    18.2132,
                                    69.5009
                                ],
                                [
                                    19.22,
                                    50.77
                                ],
                                [
                                    19.42,
                                    32.24
                                ],
                                [
                                    19.91,
                                    13
                                ],
                                [
                                    20.0949,
                                    13.0989
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-28T19:59:32.132Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-86",
            "title": "Order item 90",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T07:10:00.000Z",
            "activity": "f-green-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.2.113",
                    "number": 3
                },
                {
                    "asset": "Green.5.874",
                    "number": 2
                },
                {
                    "asset": "Green.11.918",
                    "number": 2
                },
                {
                    "asset": "Green.4.246",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
                },
                {
                    "asset": "Red.9.877"
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
                            "force": "f-green",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Patrol-0",
                            "name": "f-green//4.611854367132764//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.701,
                                    30.5346
                                ],
                                [
                                    41.8,
                                    32.61
                                ],
                                [
                                    31.84,
                                    34.62
                                ],
                                [
                                    21.16,
                                    36.91
                                ],
                                [
                                    11.76,
                                    39.49
                                ],
                                [
                                    11.6231,
                                    39.4155
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
                            "endDate": "2022-05-01T06:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651373400000,
                            "endTime": 1651384800000,
                            "geomId": "Patrol-1",
                            "name": "f-green//9.223708734265529//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        6.547125139276351,
                                        43.01984872271723
                                    ],
                                    [
                                        6.547125139276351,
                                        35.61265638950074
                                    ],
                                    [
                                        16.186851491955597,
                                        35.61265638950074
                                    ],
                                    [
                                        16.186851491955597,
                                        43.01984872271723
                                    ],
                                    [
                                        6.547125139276351,
                                        43.01984872271723
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
                            "startDate": "2022-05-01T06:00:00.000Z",
                            "endDate": "2022-05-01T07:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651384800000,
                            "endTime": 1651389000000,
                            "geomId": "Patrol-2",
                            "name": "f-green//13.835563101398293//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    11.6231,
                                    39.4155
                                ],
                                [
                                    25.02,
                                    36.01
                                ],
                                [
                                    38.54,
                                    33.73
                                ],
                                [
                                    51.35,
                                    30.73
                                ],
                                [
                                    51.701,
                                    30.5346
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
            "endDate": "2022-05-01T04:10:00.000Z",
            "activity": "f-red-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.4.246",
                    "number": 3
                },
                {
                    "asset": "Red.7.856",
                    "number": 5
                },
                {
                    "asset": "Red.7.750",
                    "number": 1
                },
                {
                    "asset": "Red.5.927",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.10.195"
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
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Resupply-0",
                            "name": "f-red//4.334555323177483//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    123.9871,
                                    72.7601
                                ],
                                [
                                    88.97,
                                    52.29
                                ],
                                [
                                    53.85,
                                    31.73
                                ],
                                [
                                    19.01,
                                    10.44
                                ],
                                [
                                    -15.53,
                                    -9.55
                                ],
                                [
                                    -15.5195,
                                    -9.8809
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
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651373400000,
                            "endTime": 1651375800000,
                            "geomId": "Resupply-1",
                            "name": "f-red//8.669110646354966//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -16.868683393832967,
                                        -8.543996221849058
                                    ],
                                    [
                                        -16.868683393832967,
                                        -11.212389322504324
                                    ],
                                    [
                                        -14.159326273141833,
                                        -11.212389322504324
                                    ],
                                    [
                                        -14.159326273141833,
                                        -8.543996221849058
                                    ],
                                    [
                                        -16.868683393832967,
                                        -8.543996221849058
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
                            "startDate": "2022-05-01T03:30:00.000Z",
                            "endDate": "2022-05-01T04:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651375800000,
                            "endTime": 1651378200000,
                            "geomId": "Resupply-2",
                            "name": "f-red//13.003665969532449//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -15.5195,
                                    -9.8809
                                ],
                                [
                                    18.9,
                                    10.49
                                ],
                                [
                                    54.11,
                                    31.66
                                ],
                                [
                                    88.61,
                                    52.12
                                ],
                                [
                                    124.39,
                                    72.85
                                ],
                                [
                                    123.9871,
                                    72.7601
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
            "timestamp": "2023-02-19T12:35:42.494Z",
            "turnNumber": 3,
            "counter": 1,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T02:50:00.000Z",
                "id": "umpire-1",
                "orders1": "m_f-blue_83",
                "orders2": "m_f-red_89",
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
        "_id": "2023-02-19T12:35:42.494Z//0"
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
            "timestamp": "2023-02-19T12:35:42.494Z",
            "turnNumber": 3,
            "counter": 2,
            "interaction": {
                "startTime": "2022-05-01T00:05:00.000Z",
                "endTime": "2022-05-01T00:55:00.000Z",
                "id": "umpire-2",
                "orders1": "m_f-blue_14",
                "orders2": "m_f-red_20",
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
        "_id": "2023-02-19T12:35:42.494Z//1"
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
            "timestamp": "2023-02-19T12:35:42.494Z",
            "turnNumber": 3,
            "counter": 3,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T04:50:00.000Z",
                "id": "umpire-3",
                "orders1": "m_f-blue_71",
                "orders2": "m_f-red_74",
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
        "_id": "2023-02-19T12:35:42.494Z//2"
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
            "timestamp": "2023-02-19T12:35:42.494Z",
            "turnNumber": 3,
            "counter": 4,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T04:40:00.000Z",
                "id": "umpire-4",
                "orders1": "m_f-blue_71",
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
        "_id": "2023-02-19T12:35:42.494Z//3"
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
            "timestamp": "2023-02-19T12:35:42.494Z",
            "turnNumber": 3,
            "counter": 5,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T01:15:00.000Z",
                "id": "umpire-5",
                "orders1": "m_f-blue_14",
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
        "_id": "2023-02-19T12:35:42.494Z//4"
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
            "timestamp": "2023-02-19T12:35:42.494Z",
            "turnNumber": 3,
            "counter": 6,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T00:55:00.000Z",
                "id": "umpire-6",
                "orders1": "m_f-blue_83",
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
        "_id": "2023-02-19T12:35:42.494Z//5"
    }
]