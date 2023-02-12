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
            "messageType": "Air--Standard",
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
                    "asset": "a64",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a478"
                },
                {
                    "asset": "a1151"
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
                                    38.1315,
                                    31.7269
                                ],
                                [
                                    57.77,
                                    18.43
                                ],
                                [
                                    77.77,
                                    4.51
                                ],
                                [
                                    77.4852,
                                    4.8381
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
                                        76.84156712729109,
                                        5.478489182342386
                                    ],
                                    [
                                        76.84156712729109,
                                        4.197104342326625
                                    ],
                                    [
                                        78.1276156237202,
                                        4.197104342326625
                                    ],
                                    [
                                        78.1276156237202,
                                        5.478489182342386
                                    ],
                                    [
                                        76.84156712729109,
                                        5.478489182342386
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
                                    77.4852,
                                    4.8381
                                ],
                                [
                                    64.1,
                                    13.42
                                ],
                                [
                                    50.97,
                                    23.25
                                ],
                                [
                                    38.12,
                                    31.37
                                ],
                                [
                                    38.1315,
                                    31.7269
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
            "messageType": "Land--Standard",
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
                    "asset": "a1172",
                    "number": 1
                },
                {
                    "asset": "a1101",
                    "number": 4
                },
                {
                    "asset": "a1144",
                    "number": 2
                },
                {
                    "asset": "a900",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
                },
                {
                    "asset": "a751"
                },
                {
                    "asset": "a50"
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
                                    48.5322,
                                    25.9506
                                ],
                                [
                                    47.63,
                                    30.93
                                ],
                                [
                                    45.63,
                                    36.81
                                ],
                                [
                                    44.92,
                                    41.98
                                ],
                                [
                                    43.49,
                                    46.43
                                ],
                                [
                                    43.7036,
                                    46.9273
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
                                        38.856538586933254,
                                        49.94768391688642
                                    ],
                                    [
                                        38.856538586933254,
                                        43.724600704079066
                                    ],
                                    [
                                        48.01849597285817,
                                        43.724600704079066
                                    ],
                                    [
                                        48.01849597285817,
                                        49.94768391688642
                                    ],
                                    [
                                        38.856538586933254,
                                        49.94768391688642
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
                                    43.7036,
                                    46.9273
                                ],
                                [
                                    45.32,
                                    39.57
                                ],
                                [
                                    47.04,
                                    33.32
                                ],
                                [
                                    48.04,
                                    26.35
                                ],
                                [
                                    48.5322,
                                    25.9506
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
            "messageType": "Land--SOFAttack",
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
                    "asset": "a100",
                    "number": 2
                },
                {
                    "asset": "a369",
                    "number": 4
                },
                {
                    "asset": "a351",
                    "number": 2
                },
                {
                    "asset": "a46",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a478"
                },
                {
                    "asset": "a1151"
                },
                {
                    "asset": "a450"
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
                                    24.0019,
                                    39.046
                                ],
                                [
                                    24.45,
                                    32.54
                                ],
                                [
                                    23.98,
                                    25.12
                                ],
                                [
                                    23.79,
                                    18.98
                                ],
                                [
                                    24.295,
                                    18.5356
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
                                        24.033403872711848,
                                        18.783084835741413
                                    ],
                                    [
                                        24.033403872711848,
                                        18.287756218241093
                                    ],
                                    [
                                        24.55583896282998,
                                        18.287756218241093
                                    ],
                                    [
                                        24.55583896282998,
                                        18.783084835741413
                                    ],
                                    [
                                        24.033403872711848,
                                        18.783084835741413
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
                                    24.295,
                                    18.5356
                                ],
                                [
                                    24.38,
                                    28.65
                                ],
                                [
                                    23.85,
                                    39.14
                                ],
                                [
                                    24.0019,
                                    39.046
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
            "messageType": "Air--Standard",
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
                    "asset": "a446",
                    "number": 4
                },
                {
                    "asset": "a655",
                    "number": 5
                },
                {
                    "asset": "a577",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
                },
                {
                    "asset": "a1151"
                },
                {
                    "asset": "a50"
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
                                    75.2378,
                                    14.7604
                                ],
                                [
                                    55.1,
                                    15.15
                                ],
                                [
                                    35.27,
                                    14.84
                                ],
                                [
                                    35.0627,
                                    14.9593
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
                                        31.17607382481029,
                                        18.610112007474754
                                    ],
                                    [
                                        31.17607382481029,
                                        11.244974088786693
                                    ],
                                    [
                                        38.818007887745104,
                                        11.244974088786693
                                    ],
                                    [
                                        38.818007887745104,
                                        18.610112007474754
                                    ],
                                    [
                                        31.17607382481029,
                                        18.610112007474754
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
                                    35.0627,
                                    14.9593
                                ],
                                [
                                    48.93,
                                    15.18
                                ],
                                [
                                    61.85,
                                    14.45
                                ],
                                [
                                    75.04,
                                    14.99
                                ],
                                [
                                    75.2378,
                                    14.7604
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
            "messageType": "Space--Cyber",
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
                    "asset": "a213",
                    "number": 4
                },
                {
                    "asset": "a362",
                    "number": 0
                },
                {
                    "asset": "a223",
                    "number": 3
                },
                {
                    "asset": "a199",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a478"
                },
                {
                    "asset": "a1151"
                },
                {
                    "asset": "a450"
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
                    "asset": "a199",
                    "number": 2
                },
                {
                    "asset": "a287",
                    "number": 0
                },
                {
                    "asset": "a89",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a478"
                },
                {
                    "asset": "a1151"
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
                                    24.2254,
                                    47.2045
                                ],
                                [
                                    24.1,
                                    38.55
                                ],
                                [
                                    24.04,
                                    29.94
                                ],
                                [
                                    24.26,
                                    21.63
                                ],
                                [
                                    24.5277,
                                    21.3655
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
                                        23.63621048106458,
                                        22.188626215469256
                                    ],
                                    [
                                        23.63621048106458,
                                        20.537720399348125
                                    ],
                                    [
                                        25.40919670046564,
                                        20.537720399348125
                                    ],
                                    [
                                        25.40919670046564,
                                        22.188626215469256
                                    ],
                                    [
                                        23.63621048106458,
                                        22.188626215469256
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
                                        23.486519457486324,
                                        22.325438687401906
                                    ],
                                    [
                                        23.486519457486324,
                                        20.399225949663858
                                    ],
                                    [
                                        25.555276167164603,
                                        20.399225949663858
                                    ],
                                    [
                                        25.555276167164603,
                                        22.325438687401906
                                    ],
                                    [
                                        23.486519457486324,
                                        22.325438687401906
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
                                    24.5277,
                                    21.3655
                                ],
                                [
                                    24.86,
                                    28.26
                                ],
                                [
                                    24.2,
                                    34.15
                                ],
                                [
                                    23.82,
                                    40.33
                                ],
                                [
                                    23.72,
                                    46.79
                                ],
                                [
                                    24.2254,
                                    47.2045
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
            "messageType": "Cyber--Cyber",
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
                    "asset": "a404",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
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
            "messageType": "Maritime--Transit",
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
                    "asset": "a829",
                    "number": 2
                },
                {
                    "asset": "a1197",
                    "number": 1
                },
                {
                    "asset": "a878",
                    "number": 0
                },
                {
                    "asset": "a1073",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
                },
                {
                    "asset": "a751"
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
                                    41.642,
                                    20.1649
                                ],
                                [
                                    28.46,
                                    36.92
                                ],
                                [
                                    28.3513,
                                    37.2836
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
            "messageType": "Land--Standard",
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
                    "asset": "a1073",
                    "number": 5
                },
                {
                    "asset": "a981",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
                },
                {
                    "asset": "a751"
                },
                {
                    "asset": "a50"
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
                                    23.0397,
                                    16.4523
                                ],
                                [
                                    34.99,
                                    24.8
                                ],
                                [
                                    47.22,
                                    32.43
                                ],
                                [
                                    58.73,
                                    40.34
                                ],
                                [
                                    58.7875,
                                    40.7251
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
                                        55.55083349056416,
                                        43.046264393529135
                                    ],
                                    [
                                        55.55083349056416,
                                        38.31969931646879
                                    ],
                                    [
                                        61.802168641129185,
                                        38.31969931646879
                                    ],
                                    [
                                        61.802168641129185,
                                        43.046264393529135
                                    ],
                                    [
                                        55.55083349056416,
                                        43.046264393529135
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
                                    58.7875,
                                    40.7251
                                ],
                                [
                                    50.22,
                                    34.56
                                ],
                                [
                                    40.44,
                                    28.19
                                ],
                                [
                                    31.94,
                                    22.09
                                ],
                                [
                                    22.72,
                                    16.29
                                ],
                                [
                                    23.0397,
                                    16.4523
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
                    "asset": "a1137",
                    "number": 4
                },
                {
                    "asset": "a984",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
                },
                {
                    "asset": "a751"
                },
                {
                    "asset": "a50"
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
                                    50.5694,
                                    13.3397
                                ],
                                [
                                    44.9,
                                    21.83
                                ],
                                [
                                    39.4,
                                    29.49
                                ],
                                [
                                    33.19,
                                    37.43
                                ],
                                [
                                    33.226,
                                    37.6172
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
            "messageType": "Maritime--Standard",
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
                    "asset": "a220",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a478"
                },
                {
                    "asset": "a1151"
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
                                    23.5128,
                                    51.2098
                                ],
                                [
                                    31.46,
                                    39.62
                                ],
                                [
                                    40.26,
                                    26.89
                                ],
                                [
                                    48.35,
                                    15.44
                                ],
                                [
                                    56.72,
                                    3.28
                                ],
                                [
                                    56.3544,
                                    3.2485
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
                                        53.49878997484716,
                                        6.083998954009986
                                    ],
                                    [
                                        53.49878997484716,
                                        0.4049958417572593
                                    ],
                                    [
                                        59.19398381321139,
                                        0.4049958417572593
                                    ],
                                    [
                                        59.19398381321139,
                                        6.083998954009986
                                    ],
                                    [
                                        53.49878997484716,
                                        6.083998954009986
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
                                    56.3544,
                                    3.2485
                                ],
                                [
                                    45.18,
                                    18.79
                                ],
                                [
                                    34.27,
                                    35.59
                                ],
                                [
                                    23.65,
                                    51.67
                                ],
                                [
                                    23.5128,
                                    51.2098
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
                    "asset": "a1122",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
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
                                    24.3181,
                                    10.2213
                                ],
                                [
                                    26.62,
                                    18.78
                                ],
                                [
                                    28.14,
                                    27.56
                                ],
                                [
                                    29.95,
                                    35.62
                                ],
                                [
                                    29.7934,
                                    36.1135
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
            "messageType": "Land--Standard",
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
                    "asset": "a1045",
                    "number": 1
                },
                {
                    "asset": "a1112",
                    "number": 5
                },
                {
                    "asset": "a892",
                    "number": 2
                },
                {
                    "asset": "a1186",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
                },
                {
                    "asset": "a751"
                },
                {
                    "asset": "a50"
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
                                    23.1363,
                                    8.1112
                                ],
                                [
                                    22.94,
                                    19.94
                                ],
                                [
                                    24,
                                    32.01
                                ],
                                [
                                    23.33,
                                    44.37
                                ],
                                [
                                    23.7958,
                                    44.2996
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
                                        19.69788699298195,
                                        47.02211310750169
                                    ],
                                    [
                                        19.69788699298195,
                                        41.443773027122994
                                    ],
                                    [
                                        27.52202672489131,
                                        41.443773027122994
                                    ],
                                    [
                                        27.52202672489131,
                                        47.02211310750169
                                    ],
                                    [
                                        19.69788699298195,
                                        47.02211310750169
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
                                    23.7958,
                                    44.2996
                                ],
                                [
                                    23.46,
                                    26.07
                                ],
                                [
                                    23.62,
                                    8.34
                                ],
                                [
                                    23.1363,
                                    8.1112
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
                    "asset": "a386",
                    "number": 0
                },
                {
                    "asset": "a393",
                    "number": 4
                },
                {
                    "asset": "a113",
                    "number": 0
                },
                {
                    "asset": "a347",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a478"
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
                                    36.7885,
                                    34.9861
                                ],
                                [
                                    34.44,
                                    16.65
                                ],
                                [
                                    34.3968,
                                    17.0044
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
                                        33.416456859918846,
                                        17.93476792754937
                                    ],
                                    [
                                        33.416456859918846,
                                        16.069387617077865
                                    ],
                                    [
                                        35.36743039887959,
                                        16.069387617077865
                                    ],
                                    [
                                        35.36743039887959,
                                        17.93476792754937
                                    ],
                                    [
                                        33.416456859918846,
                                        17.93476792754937
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
                                    34.3968,
                                    17.0044
                                ],
                                [
                                    35.76,
                                    25.97
                                ],
                                [
                                    36.48,
                                    35.29
                                ],
                                [
                                    36.7885,
                                    34.9861
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
                    "asset": "a747",
                    "number": 5,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "a694",
                    "number": 4,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "a754",
                    "number": 5,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78",
                    "missileType": "Propellor OWA UAV",
                    "number": 3
                },
                {
                    "asset": "a1151",
                    "missileType": "Jet OWA UAV",
                    "number": 0
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
                                    61.7433,
                                    17.0258
                                ],
                                [
                                    45.97,
                                    32.27
                                ],
                                [
                                    30.61,
                                    46.93
                                ],
                                [
                                    30.9809,
                                    46.7087
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
                                        29.043551359084635,
                                        47.98921535673657
                                    ],
                                    [
                                        29.043551359084635,
                                        45.3970161827082
                                    ],
                                    [
                                        32.82739078939251,
                                        45.3970161827082
                                    ],
                                    [
                                        32.82739078939251,
                                        47.98921535673657
                                    ],
                                    [
                                        29.043551359084635,
                                        47.98921535673657
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
                                    30.9809,
                                    46.7087
                                ],
                                [
                                    38.31,
                                    38.84
                                ],
                                [
                                    46.46,
                                    31.81
                                ],
                                [
                                    53.9,
                                    24.06
                                ],
                                [
                                    61.62,
                                    16.59
                                ],
                                [
                                    61.7433,
                                    17.0258
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
            "messageType": "SOF--SOFAttack",
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
                    "asset": "a528",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
                },
                {
                    "asset": "a1151"
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
                                    73.1458,
                                    39.636
                                ],
                                [
                                    67.98,
                                    36.48
                                ],
                                [
                                    63.66,
                                    32.17
                                ],
                                [
                                    58.63,
                                    29.15
                                ],
                                [
                                    52.88,
                                    25.41
                                ],
                                [
                                    53.2329,
                                    25.6519
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
                                        50.22083167214628,
                                        28.274118314885186
                                    ],
                                    [
                                        50.22083167214628,
                                        22.970575577487416
                                    ],
                                    [
                                        56.11395049562757,
                                        22.970575577487416
                                    ],
                                    [
                                        56.11395049562757,
                                        28.274118314885186
                                    ],
                                    [
                                        50.22083167214628,
                                        28.274118314885186
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
                                        51.04860985146853,
                                        27.572034548018173
                                    ],
                                    [
                                        51.04860985146853,
                                        23.70030718127302
                                    ],
                                    [
                                        55.34742836307462,
                                        23.70030718127302
                                    ],
                                    [
                                        55.34742836307462,
                                        27.572034548018173
                                    ],
                                    [
                                        51.04860985146853,
                                        27.572034548018173
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
                                    53.2329,
                                    25.6519
                                ],
                                [
                                    63.61,
                                    32.3
                                ],
                                [
                                    73.37,
                                    39.34
                                ],
                                [
                                    73.1458,
                                    39.636
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
            "messageType": "Air--Standard",
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
                    "asset": "a528",
                    "number": 5
                },
                {
                    "asset": "a754",
                    "number": 5
                },
                {
                    "asset": "a694",
                    "number": 1
                },
                {
                    "asset": "a747",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
                },
                {
                    "asset": "a1151"
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
                                    85.7395,
                                    41.5796
                                ],
                                [
                                    70.98,
                                    37.94
                                ],
                                [
                                    57.48,
                                    34.55
                                ],
                                [
                                    42.26,
                                    31.45
                                ],
                                [
                                    42.7179,
                                    31.3894
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
                                        38.899437097523595,
                                        34.481553312546325
                                    ],
                                    [
                                        38.899437097523595,
                                        28.191411282856823
                                    ],
                                    [
                                        46.288799582475285,
                                        28.191411282856823
                                    ],
                                    [
                                        46.288799582475285,
                                        34.481553312546325
                                    ],
                                    [
                                        38.899437097523595,
                                        34.481553312546325
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
                                    42.7179,
                                    31.3894
                                ],
                                [
                                    64.01,
                                    36.67
                                ],
                                [
                                    85.74,
                                    41.4
                                ],
                                [
                                    85.7395,
                                    41.5796
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
            "messageType": "Land--Standard",
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
                    "asset": "a1147",
                    "number": 0
                },
                {
                    "asset": "a913",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
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
                                    53.2916,
                                    23.4065
                                ],
                                [
                                    57.77,
                                    20.49
                                ],
                                [
                                    61.44,
                                    17.77
                                ],
                                [
                                    65.39,
                                    14.33
                                ],
                                [
                                    65.2376,
                                    14.7722
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
                                        62.32902778919378,
                                        17.527657060599086
                                    ],
                                    [
                                        62.32902778919378,
                                        11.981262067025648
                                    ],
                                    [
                                        68.07283688156643,
                                        11.981262067025648
                                    ],
                                    [
                                        68.07283688156643,
                                        17.527657060599086
                                    ],
                                    [
                                        62.32902778919378,
                                        17.527657060599086
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
                                    65.2376,
                                    14.7722
                                ],
                                [
                                    59.36,
                                    18.84
                                ],
                                [
                                    52.98,
                                    23.41
                                ],
                                [
                                    53.2916,
                                    23.4065
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
            "messageType": "Cyber--Cyber",
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
                    "asset": "a786",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
                },
                {
                    "asset": "a1151"
                },
                {
                    "asset": "a50"
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
                    "asset": "a644",
                    "number": 1
                },
                {
                    "asset": "a690",
                    "number": 4
                },
                {
                    "asset": "a450",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
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
                                    85.8204,
                                    24.5767
                                ],
                                [
                                    54.88,
                                    29.76
                                ],
                                [
                                    23.29,
                                    35.3
                                ],
                                [
                                    23.643,
                                    34.9589
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
                                        18.7461771315492,
                                        38.68573159621705
                                    ],
                                    [
                                        18.7461771315492,
                                        31.052935008263393
                                    ],
                                    [
                                        28.103884326047645,
                                        31.052935008263393
                                    ],
                                    [
                                        28.103884326047645,
                                        38.68573159621705
                                    ],
                                    [
                                        18.7461771315492,
                                        38.68573159621705
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
                                    23.643,
                                    34.9589
                                ],
                                [
                                    54.72,
                                    29.95
                                ],
                                [
                                    86.14,
                                    24.28
                                ],
                                [
                                    85.8204,
                                    24.5767
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
                    "asset": "a1122",
                    "number": 2
                },
                {
                    "asset": "a1108",
                    "number": 1
                },
                {
                    "asset": "a807",
                    "number": 3
                },
                {
                    "asset": "a1019",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
                },
                {
                    "asset": "a751"
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
                                    51.9824,
                                    16.1946
                                ],
                                [
                                    57.15,
                                    34.84
                                ],
                                [
                                    61.72,
                                    53.88
                                ],
                                [
                                    61.3342,
                                    54.3858
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
                                        59.54708912696207,
                                        55.38792720224545
                                    ],
                                    [
                                        59.54708912696207,
                                        53.35855195647001
                                    ],
                                    [
                                        63.03507943422756,
                                        53.35855195647001
                                    ],
                                    [
                                        63.03507943422756,
                                        55.38792720224545
                                    ],
                                    [
                                        59.54708912696207,
                                        55.38792720224545
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
                                    61.3342,
                                    54.3858
                                ],
                                [
                                    51.51,
                                    16.31
                                ],
                                [
                                    51.9824,
                                    16.1946
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
            "activity": "f-blue-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "a219",
                    "number": 1
                },
                {
                    "asset": "a145",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a478"
                },
                {
                    "asset": "a1151"
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
                                    28.6649,
                                    40.4185
                                ],
                                [
                                    34.48,
                                    23.85
                                ],
                                [
                                    39.78,
                                    7.76
                                ],
                                [
                                    40.1327,
                                    7.6784
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
                                        37.67646509467739,
                                        10.089694934640454
                                    ],
                                    [
                                        37.67646509467739,
                                        5.253321857898721
                                    ],
                                    [
                                        42.56113216832861,
                                        5.253321857898721
                                    ],
                                    [
                                        42.56113216832861,
                                        10.089694934640454
                                    ],
                                    [
                                        37.67646509467739,
                                        10.089694934640454
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
                                    40.1327,
                                    7.6784
                                ],
                                [
                                    28.34,
                                    40.3
                                ],
                                [
                                    28.6649,
                                    40.4185
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
                    "asset": "a336",
                    "number": 0,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a202",
                    "number": 3,
                    "missileType": "IRBM"
                },
                {
                    "asset": "a180",
                    "number": 2,
                    "missileType": "Standard Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a478",
                    "missileType": "Standard Cruise",
                    "number": 2
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
                                    42.2739,
                                    54.6152
                                ],
                                [
                                    56.37,
                                    8.36
                                ],
                                [
                                    55.9367,
                                    8.0537
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
                                        55.625803252291895,
                                        8.36117530441046
                                    ],
                                    [
                                        55.625803252291895,
                                        7.74599103466565
                                    ],
                                    [
                                        56.247124774449595,
                                        7.74599103466565
                                    ],
                                    [
                                        56.247124774449595,
                                        8.36117530441046
                                    ],
                                    [
                                        55.625803252291895,
                                        8.36117530441046
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
                                    55.9367,
                                    8.0537
                                ],
                                [
                                    52.41,
                                    20.05
                                ],
                                [
                                    48.69,
                                    30.85
                                ],
                                [
                                    45.25,
                                    42.93
                                ],
                                [
                                    42.09,
                                    54.29
                                ],
                                [
                                    42.2739,
                                    54.6152
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
            "messageType": "Maritime--Standard",
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
                    "asset": "a272",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a478"
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
                                    46.0198,
                                    52.6705
                                ],
                                [
                                    45.19,
                                    35.6
                                ],
                                [
                                    44.41,
                                    19.6
                                ],
                                [
                                    42.92,
                                    2.87
                                ],
                                [
                                    43.4041,
                                    2.3805
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
                                        41.78629183357232,
                                        3.9934324577399387
                                    ],
                                    [
                                        41.78629183357232,
                                        0.765676368836224
                                    ],
                                    [
                                        45.018123308014296,
                                        0.765676368836224
                                    ],
                                    [
                                        45.018123308014296,
                                        3.9934324577399387
                                    ],
                                    [
                                        41.78629183357232,
                                        3.9934324577399387
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
                                    43.4041,
                                    2.3805
                                ],
                                [
                                    44.91,
                                    27.47
                                ],
                                [
                                    45.77,
                                    52.92
                                ],
                                [
                                    46.0198,
                                    52.6705
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
                    "asset": "a428",
                    "number": 2,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "a573",
                    "number": 5,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78",
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
                    "asset": "a3",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a478",
                    "missileType": "SRBM",
                    "number": 1
                },
                {
                    "asset": "a1151",
                    "missileType": "SRBM",
                    "number": 5
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
            "messageType": "Land--Transit",
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
                    "asset": "a998",
                    "number": 3
                },
                {
                    "asset": "a1023",
                    "number": 2
                },
                {
                    "asset": "a1161",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
                },
                {
                    "asset": "a751"
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
                                    43.4041,
                                    2.3805
                                ],
                                [
                                    53.42,
                                    34.74
                                ],
                                [
                                    53.2943,
                                    34.4566
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
                    "asset": "a212",
                    "number": 1
                },
                {
                    "asset": "a177",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a478"
                },
                {
                    "asset": "a1151"
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
                                    42.3977,
                                    34.5977
                                ],
                                [
                                    42.44,
                                    30.45
                                ],
                                [
                                    41.68,
                                    26.51
                                ],
                                [
                                    41.2,
                                    21.84
                                ],
                                [
                                    41.3869,
                                    21.9436
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
                    "asset": "a846",
                    "number": 3
                },
                {
                    "asset": "a1150",
                    "number": 3
                },
                {
                    "asset": "a1168",
                    "number": 5
                },
                {
                    "asset": "a899",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
                },
                {
                    "asset": "a751"
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
                                    49.687,
                                    17.591
                                ],
                                [
                                    45.62,
                                    24.64
                                ],
                                [
                                    41.5,
                                    31.63
                                ],
                                [
                                    36.66,
                                    38.9
                                ],
                                [
                                    33.1,
                                    46.46
                                ],
                                [
                                    32.9641,
                                    46.3822
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
                                        27.193722913964134,
                                        49.95556779971182
                                    ],
                                    [
                                        27.193722913964134,
                                        42.55503392493982
                                    ],
                                    [
                                        38.002003189100364,
                                        42.55503392493982
                                    ],
                                    [
                                        38.002003189100364,
                                        49.95556779971182
                                    ],
                                    [
                                        27.193722913964134,
                                        49.95556779971182
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
                                    32.9641,
                                    46.3822
                                ],
                                [
                                    38.57,
                                    36.34
                                ],
                                [
                                    44.32,
                                    27.42
                                ],
                                [
                                    49.34,
                                    17.79
                                ],
                                [
                                    49.687,
                                    17.591
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
            "messageType": "Maritime--Standard",
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
                    "asset": "a499",
                    "number": 2
                },
                {
                    "asset": "a743",
                    "number": 0
                },
                {
                    "asset": "a700",
                    "number": 0
                },
                {
                    "asset": "a771",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a78"
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
                                    74.4569,
                                    22.1936
                                ],
                                [
                                    61.67,
                                    20.49
                                ],
                                [
                                    48.78,
                                    18.68
                                ],
                                [
                                    36.17,
                                    16.16
                                ],
                                [
                                    23.85,
                                    14.92
                                ],
                                [
                                    23.8714,
                                    14.5935
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
                                        22.483943461247808,
                                        15.92363635079542
                                    ],
                                    [
                                        22.483943461247808,
                                        13.255270357083118
                                    ],
                                    [
                                        25.24213305954134,
                                        13.255270357083118
                                    ],
                                    [
                                        25.24213305954134,
                                        15.92363635079542
                                    ],
                                    [
                                        22.483943461247808,
                                        15.92363635079542
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
                                    23.8714,
                                    14.5935
                                ],
                                [
                                    36.06,
                                    16.2
                                ],
                                [
                                    49.04,
                                    18.62
                                ],
                                [
                                    61.31,
                                    20.31
                                ],
                                [
                                    74.86,
                                    22.29
                                ],
                                [
                                    74.4569,
                                    22.1936
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
            "timestamp": "2023-02-12T12:07:52.017Z",
            "turnNumber": 3,
            "counter": 1,
            "interaction": {
                "startTime": "2022-05-01T01:10:00.000Z",
                "endTime": "2022-05-01T02:45:00.000Z",
                "id": "umpire-1",
                "orders1": "m_f-blue_32",
                "orders2": "m_f-red_44",
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
        "_id": "2023-02-12T12:07:52.017Z//0"
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
            "timestamp": "2023-02-12T12:07:52.017Z",
            "turnNumber": 3,
            "counter": 2,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T04:50:00.000Z",
                "id": "umpire-2",
                "orders1": "m_f-blue_71",
                "orders2": "m_f-red_74",
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
        "_id": "2023-02-12T12:07:52.017Z//1"
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
            "timestamp": "2023-02-12T12:07:52.017Z",
            "turnNumber": 3,
            "counter": 3,
            "interaction": {
                "startTime": "2022-05-01T01:50:00.000Z",
                "endTime": "2022-05-01T04:50:00.000Z",
                "id": "umpire-3",
                "orders1": "m_f-blue_17",
                "orders2": "m_f-red_59",
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
        "_id": "2023-02-12T12:07:52.017Z//2"
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
            "timestamp": "2023-02-12T12:07:52.017Z",
            "turnNumber": 3,
            "counter": 4,
            "interaction": {
                "startTime": "2022-05-01T00:05:00.000Z",
                "endTime": "2022-05-01T05:35:00.000Z",
                "id": "umpire-4",
                "orders1": "m_f-blue_17",
                "orders2": "m_f-red_11",
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
        "_id": "2023-02-12T12:07:52.017Z//3"
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
            "timestamp": "2023-02-12T12:07:52.018Z",
            "turnNumber": 3,
            "counter": 5,
            "interaction": {
                "startTime": "2022-05-01T01:10:00.000Z",
                "endTime": "2022-05-01T04:00:00.000Z",
                "id": "umpire-5",
                "orders1": "m_f-blue_41",
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
        "_id": "2023-02-12T12:07:52.018Z//4"
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
            "timestamp": "2023-02-12T12:07:52.018Z",
            "turnNumber": 3,
            "counter": 6,
            "interaction": {
                "startTime": "2022-05-01T01:10:00.000Z",
                "endTime": "2022-05-01T04:00:00.000Z",
                "id": "umpire-6",
                "orders1": "m_f-blue_41",
                "orders2": "m_f-red_44",
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
        "_id": "2023-02-12T12:07:52.018Z//5"
    }
]