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
                    "number": 0,
                    "missileType": "Jet OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
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
                    "number": 1
                },
                {
                    "asset": "a187",
                    "number": 5
                },
                {
                    "asset": "a128",
                    "number": 3
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
                },
                {
                    "asset": "a10",
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
                                    57.6974,
                                    6.0685
                                ],
                                [
                                    56.67,
                                    16.72
                                ],
                                [
                                    54.55,
                                    28.28
                                ],
                                [
                                    53.72,
                                    39.12
                                ],
                                [
                                    52.16,
                                    49.24
                                ],
                                [
                                    52.3733,
                                    49.7437
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
                                        47.2191953651836,
                                        52.75337852619472
                                    ],
                                    [
                                        47.2191953651836,
                                        46.53261765807108
                                    ],
                                    [
                                        56.90646679470926,
                                        46.53261765807108
                                    ],
                                    [
                                        56.90646679470926,
                                        52.75337852619472
                                    ],
                                    [
                                        47.2191953651836,
                                        52.75337852619472
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
                                        47.768896553093725,
                                        52.46117595577971
                                    ],
                                    [
                                        47.768896553093725,
                                        46.86345257459911
                                    ],
                                    [
                                        56.47549877467809,
                                        46.86345257459911
                                    ],
                                    [
                                        56.47549877467809,
                                        52.46117595577971
                                    ],
                                    [
                                        47.768896553093725,
                                        52.46117595577971
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
                                    52.3733,
                                    49.7437
                                ],
                                [
                                    54.23,
                                    34.83
                                ],
                                [
                                    56.15,
                                    20.98
                                ],
                                [
                                    57.36,
                                    6.41
                                ],
                                [
                                    57.6974,
                                    6.0685
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
                    "number": 4
                },
                {
                    "asset": "a93",
                    "number": 1
                },
                {
                    "asset": "a88",
                    "number": 5
                },
                {
                    "asset": "a15",
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
                                    74.5433,
                                    48.5056
                                ],
                                [
                                    78.42,
                                    33.69
                                ],
                                [
                                    81.39,
                                    17.96
                                ],
                                [
                                    84.64,
                                    3.52
                                ],
                                [
                                    85.1412,
                                    3.0753
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
                                        84.89311832719645,
                                        3.3229358037772294
                                    ],
                                    [
                                        84.89311832719645,
                                        2.8276066794148704
                                    ],
                                    [
                                        85.38916647383064,
                                        2.8276066794148704
                                    ],
                                    [
                                        85.38916647383064,
                                        3.3229358037772294
                                    ],
                                    [
                                        84.89311832719645,
                                        3.3229358037772294
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
                                    85.1412,
                                    3.0753
                                ],
                                [
                                    80.08,
                                    25.65
                                ],
                                [
                                    74.39,
                                    48.6
                                ],
                                [
                                    74.5433,
                                    48.5056
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
                    "number": 0
                },
                {
                    "asset": "a65",
                    "number": 5
                },
                {
                    "asset": "a46",
                    "number": 5
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
                            "name": "f-blue//6.906210489443765//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.9556,
                                    47.5087
                                ],
                                [
                                    41.27,
                                    33.76
                                ],
                                [
                                    22.9,
                                    19.32
                                ],
                                [
                                    22.6885,
                                    19.4392
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
                                        18.68444958080815,
                                        23.07940841772268
                                    ],
                                    [
                                        18.68444958080815,
                                        15.715083181395324
                                    ],
                                    [
                                        26.514842547858123,
                                        15.715083181395324
                                    ],
                                    [
                                        26.514842547858123,
                                        23.07940841772268
                                    ],
                                    [
                                        18.68444958080815,
                                        23.07940841772268
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
                                    22.6885,
                                    19.4392
                                ],
                                [
                                    35.59,
                                    29.08
                                ],
                                [
                                    47.53,
                                    37.77
                                ],
                                [
                                    59.76,
                                    47.74
                                ],
                                [
                                    59.9556,
                                    47.5087
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
                    "number": 4
                },
                {
                    "asset": "a91",
                    "number": 3
                },
                {
                    "asset": "a58",
                    "number": 3
                },
                {
                    "asset": "a52",
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
                    "number": 1
                },
                {
                    "asset": "a110",
                    "number": 5
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
                                    30.4416,
                                    34.7011
                                ],
                                [
                                    31.06,
                                    21.58
                                ],
                                [
                                    31.03,
                                    8.8
                                ],
                                [
                                    31.2874,
                                    8.5449
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
                    "number": 2
                },
                {
                    "asset": "a73",
                    "number": 1
                },
                {
                    "asset": "a25",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 0
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
                                    36.1116,
                                    54.7929
                                ],
                                [
                                    47.58,
                                    38.49
                                ],
                                [
                                    59.1,
                                    22.25
                                ],
                                [
                                    70.9,
                                    6.29
                                ],
                                [
                                    71.16890939579538,
                                    6.032221535949144
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
                                        70.33749594648724,
                                        6.857058118951237
                                    ],
                                    [
                                        70.33749594648724,
                                        5.206127989643588
                                    ],
                                    [
                                        71.99779505686395,
                                        5.206127989643588
                                    ],
                                    [
                                        71.99779505686395,
                                        6.857058118951237
                                    ],
                                    [
                                        70.33749594648724,
                                        6.857058118951237
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
                                    71.16890939579538,
                                    6.032221535949144
                                ],
                                [
                                    35.76,
                                    54.83
                                ],
                                [
                                    36.1116,
                                    54.7929
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
                    "number": 3
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
                                    57.2946,
                                    36.0335
                                ],
                                [
                                    56.27,
                                    24.44
                                ],
                                [
                                    54.7,
                                    13.29
                                ],
                                [
                                    54.841,
                                    13.3316
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
                    "number": 0,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "a193",
                    "number": 4,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "a127",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 4,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "a94",
                    "number": 0,
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
                    "asset": "a27",
                    "number": 1
                },
                {
                    "asset": "a87",
                    "number": 4
                },
                {
                    "asset": "a76",
                    "number": 2
                },
                {
                    "asset": "a93",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 2
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
                                    83.7688,
                                    35.3541
                                ],
                                [
                                    69.07,
                                    28.73
                                ],
                                [
                                    54.28,
                                    22
                                ],
                                [
                                    39.77,
                                    14.55
                                ],
                                [
                                    25.54,
                                    8.39
                                ],
                                [
                                    25.557674526771823,
                                    8.064720013487564
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
                                        24.205317104965822,
                                        9.396718053303488
                                    ],
                                    [
                                        24.205317104965822,
                                        6.728317523274952
                                    ],
                                    [
                                        26.901136338980493,
                                        6.728317523274952
                                    ],
                                    [
                                        26.901136338980493,
                                        9.396718053303488
                                    ],
                                    [
                                        24.205317104965822,
                                        9.396718053303488
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
                                    25.557674526771823,
                                    8.064720013487564
                                ],
                                [
                                    39.65,
                                    14.6
                                ],
                                [
                                    54.54,
                                    21.93
                                ],
                                [
                                    68.72,
                                    28.55
                                ],
                                [
                                    84.17,
                                    35.45
                                ],
                                [
                                    83.7688,
                                    35.3541
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
                    "asset": "a193",
                    "number": 5
                },
                {
                    "asset": "a141",
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
                    "number": 5
                },
                {
                    "asset": "a10",
                    "number": 3
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
                                    46.0074,
                                    7.9621
                                ],
                                [
                                    56.14,
                                    16.24
                                ],
                                [
                                    66.55,
                                    23.81
                                ],
                                [
                                    76.25,
                                    31.66
                                ],
                                [
                                    76.3083,
                                    32.0591
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
                                        73.62887697841853,
                                        34.24622253302508
                                    ],
                                    [
                                        73.62887697841853,
                                        29.818268099059352
                                    ],
                                    [
                                        78.86107863551068,
                                        29.818268099059352
                                    ],
                                    [
                                        78.86107863551068,
                                        34.24622253302508
                                    ],
                                    [
                                        73.62887697841853,
                                        34.24622253302508
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
                                    76.3083,
                                    32.0591
                                ],
                                [
                                    61,
                                    20.19
                                ],
                                [
                                    46.1,
                                    7.73
                                ],
                                [
                                    46.0074,
                                    7.9621
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
                    "asset": "a119",
                    "number": 4
                },
                {
                    "asset": "a149",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
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
                                    22.6885,
                                    19.4392
                                ],
                                [
                                    23.9,
                                    26.88
                                ],
                                [
                                    25.1,
                                    34.31
                                ],
                                [
                                    26.58,
                                    42.03
                                ],
                                [
                                    27.35,
                                    49.02
                                ],
                                [
                                    27.820967297493702,
                                    49.42743932808314
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
                                        27.12185590140034,
                                        49.875884106073954
                                    ],
                                    [
                                        27.12185590140034,
                                        48.97485674862316
                                    ],
                                    [
                                        28.507356034207643,
                                        48.97485674862316
                                    ],
                                    [
                                        28.507356034207643,
                                        49.875884106073954
                                    ],
                                    [
                                        27.12185590140034,
                                        49.875884106073954
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
                                    27.820967297493702,
                                    49.42743932808314
                                ],
                                [
                                    22.85,
                                    19.66
                                ],
                                [
                                    22.6885,
                                    19.4392
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
                    "asset": "a94",
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
                                    38.4056,
                                    31.5539
                                ],
                                [
                                    33.28,
                                    24.83
                                ],
                                [
                                    28.31,
                                    19.24
                                ],
                                [
                                    23.61,
                                    12.94
                                ],
                                [
                                    23.1582,
                                    12.563
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
                                        20.61624982410407,
                                        15.006352734153865
                                    ],
                                    [
                                        20.61624982410407,
                                        10.096160394422274
                                    ],
                                    [
                                        25.652049601589155,
                                        10.096160394422274
                                    ],
                                    [
                                        25.652049601589155,
                                        15.006352734153865
                                    ],
                                    [
                                        20.61624982410407,
                                        15.006352734153865
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
                                    23.1582,
                                    12.563
                                ],
                                [
                                    27.9,
                                    18.74
                                ],
                                [
                                    33.82,
                                    25.09
                                ],
                                [
                                    38.02,
                                    31.72
                                ],
                                [
                                    38.4056,
                                    31.5539
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
                    "asset": "a29",
                    "number": 0
                },
                {
                    "asset": "a30",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 2
                },
                {
                    "asset": "a194",
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
                                    74.5433,
                                    48.5056
                                ],
                                [
                                    25.93,
                                    7.93
                                ],
                                [
                                    25.646916128285717,
                                    7.9134412025283405
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
                                        23.25543523069332,
                                        10.259894330819568
                                    ],
                                    [
                                        23.25543523069332,
                                        5.553532523633144
                                    ],
                                    [
                                        28.01123933271258,
                                        5.553532523633144
                                    ],
                                    [
                                        28.01123933271258,
                                        10.259894330819568
                                    ],
                                    [
                                        23.25543523069332,
                                        10.259894330819568
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
                                    25.646916128285717,
                                    7.9134412025283405
                                ],
                                [
                                    38.2,
                                    17.83
                                ],
                                [
                                    49.63,
                                    28.63
                                ],
                                [
                                    62.34,
                                    38.71
                                ],
                                [
                                    74.33,
                                    48.07
                                ],
                                [
                                    74.5433,
                                    48.5056
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
                    "asset": "a117",
                    "number": 1
                },
                {
                    "asset": "a200",
                    "number": 2
                },
                {
                    "asset": "a129",
                    "number": 5
                },
                {
                    "asset": "a158",
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
                                    33.1276,
                                    18.8404
                                ],
                                [
                                    47.17,
                                    26.45
                                ],
                                [
                                    60.44,
                                    34.28
                                ],
                                [
                                    73.99,
                                    41.39
                                ],
                                [
                                    74.402,
                                    41.3052
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
                                        70.60361448966741,
                                        43.977739707085085
                                    ],
                                    [
                                        70.60361448966741,
                                        38.51777323964861
                                    ],
                                    [
                                        77.89508968907506,
                                        38.51777323964861
                                    ],
                                    [
                                        77.89508968907506,
                                        43.977739707085085
                                    ],
                                    [
                                        70.60361448966741,
                                        43.977739707085085
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
                                    74.402,
                                    41.3052
                                ],
                                [
                                    33.01,
                                    18.5
                                ],
                                [
                                    33.1276,
                                    18.8404
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
                    "asset": "a58",
                    "number": 0
                },
                {
                    "asset": "a30",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
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
                                    69.38500807947561,
                                    47.896414947183075
                                ],
                                [
                                    57.19,
                                    40.02
                                ],
                                [
                                    45.14,
                                    31.3
                                ],
                                [
                                    32.38,
                                    22.86
                                ],
                                [
                                    32.6019,
                                    22.8249
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
                                        29.213885335731398,
                                        25.838843346371704
                                    ],
                                    [
                                        29.213885335731398,
                                        19.742467449821106
                                    ],
                                    [
                                        35.84146043765996,
                                        19.742467449821106
                                    ],
                                    [
                                        35.84146043765996,
                                        25.838843346371704
                                    ],
                                    [
                                        29.213885335731398,
                                        25.838843346371704
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
                                    32.6019,
                                    22.8249
                                ],
                                [
                                    45.2,
                                    31.49
                                ],
                                [
                                    56.89,
                                    39.26
                                ],
                                [
                                    69.88,
                                    48.31
                                ],
                                [
                                    69.38500807947561,
                                    47.896414947183075
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
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Other--SOFAttack",
            "timestamp": "2022-09-22T07:57:57.695Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-114",
            "title": "Order item 114",
            "startDate": "2022-11-14T02:25:00.000Z",
            "endDate": "2022-11-14T09:35:00.000Z",
            "activity": "f-red-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a156",
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
                    "number": 2
                },
                {
                    "asset": "a10",
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
                            "startDate": "2022-11-14T02:25:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668392700000,
                            "endTime": 1668395700000,
                            "geomId": "SOF Activity-0",
                            "name": "f-red//6.40925475617405//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    69.3607,
                                    15.3546
                                ],
                                [
                                    74.35,
                                    40.96
                                ],
                                [
                                    74.402,
                                    41.3052
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
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T04:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395700000,
                            "endTime": 1668399900000,
                            "geomId": "SOF Activity-1",
                            "name": "f-red//12.8185095123481//Activity Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.39383253091304,
                                        43.45069499712578
                                    ],
                                    [
                                        71.39383253091304,
                                        39.08643931726361
                                    ],
                                    [
                                        77.21534081076265,
                                        39.08643931726361
                                    ],
                                    [
                                        77.21534081076265,
                                        43.45069499712578
                                    ],
                                    [
                                        71.39383253091304,
                                        43.45069499712578
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
                            "startDate": "2022-11-14T04:25:00.000Z",
                            "endDate": "2022-11-14T06:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668399900000,
                            "endTime": 1668407100000,
                            "geomId": "SOF Activity-2",
                            "name": "f-red//19.22776426852215//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        74.04562043662995,
                                        41.57127048541309
                                    ],
                                    [
                                        74.04562043662995,
                                        41.03803932604911
                                    ],
                                    [
                                        74.755477106431,
                                        41.03803932604911
                                    ],
                                    [
                                        74.755477106431,
                                        41.57127048541309
                                    ],
                                    [
                                        74.04562043662995,
                                        41.57127048541309
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
                            "startDate": "2022-11-14T06:25:00.000Z",
                            "endDate": "2022-11-14T09:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668407100000,
                            "endTime": 1668418500000,
                            "geomId": "SOF Activity-3",
                            "name": "f-red//25.6370190246962//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.402,
                                    41.3052
                                ],
                                [
                                    68.95,
                                    15.16
                                ],
                                [
                                    69.3607,
                                    15.3546
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_114",
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
            "messageType": "Maritime--EWAttack",
            "timestamp": "2022-09-25T10:15:49.447Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-117",
            "title": "Order item 117",
            "startDate": "2022-11-14T02:25:00.000Z",
            "endDate": "2022-11-14T06:25:00.000Z",
            "activity": "f-red-Maritime-EW Attack",
            "ownAssets": [
                {
                    "asset": "a109",
                    "number": 3
                },
                {
                    "asset": "a149",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
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
                            "startDate": "2022-11-14T02:25:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668392700000,
                            "endTime": 1668395700000,
                            "geomId": "EW Attack-0",
                            "name": "f-red//2.2793250663671643//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    81.59322501460352,
                                    26.69869792879997
                                ],
                                [
                                    67.65,
                                    28.38
                                ],
                                [
                                    53.87,
                                    29.22
                                ],
                                [
                                    39.38,
                                    30.35
                                ],
                                [
                                    39.4146,
                                    30.5229
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
                            "endDate": "2022-11-14T06:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395700000,
                            "endTime": 1668405900000,
                            "geomId": "EW Attack-1",
                            "name": "f-red//4.5586501327343285//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        37.42985316055394,
                                        32.18772976223796
                                    ],
                                    [
                                        37.42985316055394,
                                        28.82901133281828
                                    ],
                                    [
                                        41.33190951777344,
                                        28.82901133281828
                                    ],
                                    [
                                        41.33190951777344,
                                        32.18772976223796
                                    ],
                                    [
                                        37.42985316055394,
                                        32.18772976223796
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
                            "startDate": "2022-11-14T06:05:00.000Z",
                            "endDate": "2022-11-14T06:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668405900000,
                            "endTime": 1668407100000,
                            "geomId": "EW Attack-2",
                            "name": "f-red//6.837975199101493//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    39.4146,
                                    30.5229
                                ],
                                [
                                    81.18,
                                    26.51
                                ],
                                [
                                    81.59322501460352,
                                    26.69869792879997
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_117",
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
            "Reference": "Blue-120",
            "title": "Order item 120",
            "startDate": "2022-11-14T02:40:00.000Z",
            "endDate": "2022-11-14T07:00:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a16",
                    "number": 4
                },
                {
                    "asset": "a41",
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
                            "startDate": "2022-11-14T02:40:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668393600000,
                            "endTime": 1668396600000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//2.0428165460471064//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.68105540956102,
                                    54.42209157516146
                                ],
                                [
                                    23.48,
                                    12.81
                                ],
                                [
                                    23.1582,
                                    12.563
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T05:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668396600000,
                            "endTime": 1668405000000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//4.085633092094213//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        19.233211585472663,
                                        16.30184087989824
                                    ],
                                    [
                                        19.233211585472663,
                                        8.76873964443336
                                    ],
                                    [
                                        26.969772175873373,
                                        8.76873964443336
                                    ],
                                    [
                                        26.969772175873373,
                                        16.30184087989824
                                    ],
                                    [
                                        19.233211585472663,
                                        16.30184087989824
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
                            "startDate": "2022-11-14T05:50:00.000Z",
                            "endDate": "2022-11-14T07:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668405000000,
                            "endTime": 1668409200000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//6.128449638141319//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.1582,
                                    12.563
                                ],
                                [
                                    29.93,
                                    26.69
                                ],
                                [
                                    35.91,
                                    40.02
                                ],
                                [
                                    42.18,
                                    54.63
                                ],
                                [
                                    42.68105540956102,
                                    54.42209157516146
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_120",
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
            "timestamp": "2022-09-28T16:03:35.324Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-123",
            "title": "Order item 123",
            "startDate": "2022-11-14T02:40:00.000Z",
            "endDate": "2022-11-14T05:20:00.000Z",
            "activity": "f-red-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "a176",
                    "number": 5
                },
                {
                    "asset": "a186",
                    "number": 2
                },
                {
                    "asset": "a127",
                    "number": 5
                },
                {
                    "asset": "a192",
                    "number": 1
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
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-11-14T02:40:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668393600000,
                            "endTime": 1668396600000,
                            "geomId": "Resupply-0",
                            "name": "f-red//5.699729195213877//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.2149,
                                    3.708
                                ],
                                [
                                    27.88,
                                    26.71
                                ],
                                [
                                    27.97,
                                    49.13
                                ],
                                [
                                    27.820967297493702,
                                    49.42743932808314
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396600000,
                            "endTime": 1668403200000,
                            "geomId": "Resupply-1",
                            "name": "f-red//11.399458390427753//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.412034759108042,
                                        53.106168548703636
                                    ],
                                    [
                                        21.412034759108042,
                                        45.44515377445228
                                    ],
                                    [
                                        33.30185392816972,
                                        45.44515377445228
                                    ],
                                    [
                                        33.30185392816972,
                                        53.106168548703636
                                    ],
                                    [
                                        21.412034759108042,
                                        53.106168548703636
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
                            "startDate": "2022-11-14T05:20:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668403200000,
                            "endTime": 1668403200000,
                            "geomId": "Resupply-2",
                            "name": "f-red//17.09918758564163//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    27.820967297493702,
                                    49.42743932808314
                                ],
                                [
                                    28.07,
                                    3.21
                                ],
                                [
                                    28.2149,
                                    3.708
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_123",
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
                    "number": 1
                },
                {
                    "asset": "a188",
                    "number": 2
                },
                {
                    "asset": "a114",
                    "number": 5
                },
                {
                    "asset": "a165",
                    "number": 1
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
                                    85.1412,
                                    3.0753
                                ],
                                [
                                    45.28,
                                    44.16
                                ],
                                [
                                    45.0841,
                                    43.7301
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
                                        39.827719105102815,
                                        47.186316134460235
                                    ],
                                    [
                                        39.827719105102815,
                                        40.05980976565871
                                    ],
                                    [
                                        49.75013915916338,
                                        40.05980976565871
                                    ],
                                    [
                                        49.75013915916338,
                                        47.186316134460235
                                    ],
                                    [
                                        39.827719105102815,
                                        47.186316134460235
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
                                    45.0841,
                                    43.7301
                                ],
                                [
                                    85.09,
                                    2.86
                                ],
                                [
                                    85.1412,
                                    3.0753
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
                                    84.7308,
                                    22.7776
                                ],
                                [
                                    70.06,
                                    29.51
                                ],
                                [
                                    56.73,
                                    36.57
                                ],
                                [
                                    56.3377,
                                    36.9287
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
                                        51.34904340330077,
                                        40.61439704326652
                                    ],
                                    [
                                        51.34904340330077,
                                        33.05397950486134
                                    ],
                                    [
                                        60.85483165482167,
                                        33.05397950486134
                                    ],
                                    [
                                        60.85483165482167,
                                        40.61439704326652
                                    ],
                                    [
                                        51.34904340330077,
                                        40.61439704326652
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
                                    56.3377,
                                    36.9287
                                ],
                                [
                                    63.74,
                                    33.12
                                ],
                                [
                                    70.05,
                                    30.22
                                ],
                                [
                                    77.64,
                                    26.61
                                ],
                                [
                                    84.52,
                                    22.27
                                ],
                                [
                                    84.7308,
                                    22.7776
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
                    "number": 5
                },
                {
                    "asset": "a57",
                    "number": 3
                },
                {
                    "asset": "a51",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a113",
                    "number": 5
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
                                    35.225,
                                    33.6
                                ],
                                [
                                    26.1,
                                    2.26
                                ],
                                [
                                    26.2555787451333,
                                    2.6678604104700696
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
                                        25.738262375033138,
                                        3.1842695101936815
                                    ],
                                    [
                                        25.738262375033138,
                                        2.1512343233100824
                                    ],
                                    [
                                        26.772460678368013,
                                        2.1512343233100824
                                    ],
                                    [
                                        26.772460678368013,
                                        3.1842695101936815
                                    ],
                                    [
                                        25.738262375033138,
                                        3.1842695101936815
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
                                    26.2555787451333,
                                    2.6678604104700696
                                ],
                                [
                                    28.33,
                                    10.54
                                ],
                                [
                                    30.34,
                                    18.36
                                ],
                                [
                                    32.63,
                                    25.46
                                ],
                                [
                                    35.21,
                                    33.84
                                ],
                                [
                                    35.225,
                                    33.6
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
                    "number": 0
                },
                {
                    "asset": "a94",
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
                                    71.16890939579538,
                                    6.032221535949144
                                ],
                                [
                                    69.95,
                                    14.92
                                ],
                                [
                                    67.78,
                                    22.87
                                ],
                                [
                                    66.89,
                                    31.1
                                ],
                                [
                                    66.574,
                                    31.414
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
                                        65.60449995348333,
                                        32.230481454375074
                                    ],
                                    [
                                        65.60449995348333,
                                        30.59034769729261
                                    ],
                                    [
                                        67.52669697002628,
                                        30.59034769729261
                                    ],
                                    [
                                        67.52669697002628,
                                        32.230481454375074
                                    ],
                                    [
                                        65.60449995348333,
                                        32.230481454375074
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
                                    66.574,
                                    31.414
                                ],
                                [
                                    69.26,
                                    18.44
                                ],
                                [
                                    71.31,
                                    5.84
                                ],
                                [
                                    71.16890939579538,
                                    6.032221535949144
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
                    "asset": "a111",
                    "number": 4,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "a145",
                    "number": 2,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a13",
                    "number": 5,
                    "missileType": "SRBM"
                },
                {
                    "asset": "a94",
                    "number": 3,
                    "missileType": "IRBM"
                },
                {
                    "asset": "a10",
                    "number": 0,
                    "missileType": "SRBM"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_143",
        "_rev": "2"
    }]