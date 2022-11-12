
import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'

export const planningMessages: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> = [
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T08:51:37.924Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-6",
            "title": "Order item 6",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T04:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T00:05:00.000Z",
                            "endDate": "2022-11-15T00:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.8489,
                                    48.0445
                                ],
                                [
                                    36.57,
                                    33.75
                                ],
                                [
                                    41.67,
                                    18.83
                                ],
                                [
                                    41.3792,
                                    19.1569
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T00:55:00.000Z",
                            "endDate": "2022-11-15T02:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668473700000,
                            "endTime": 1668480900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        40.69826386175043,
                                        19.796343290464108
                                    ],
                                    [
                                        40.69826386175043,
                                        18.514967545915432
                                    ],
                                    [
                                        42.05486619175082,
                                        18.514967545915432
                                    ],
                                    [
                                        42.05486619175082,
                                        19.796343290464108
                                    ],
                                    [
                                        40.69826386175043,
                                        19.796343290464108
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route out",
                            "startDate": "2022-11-15T02:55:00.000Z",
                            "endDate": "2022-11-15T04:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480900000,
                            "endTime": 1668486900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.3792,
                                    19.1569
                                ],
                                [
                                    37.94,
                                    28.41
                                ],
                                [
                                    34.74,
                                    38.9
                                ],
                                [
                                    31.83,
                                    47.68
                                ],
                                [
                                    31.8489,
                                    48.0445
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a431",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a408",
                "a419",
                "a411"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_6",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T21:06:20.164Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-9",
            "title": "Order item 9",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T00:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T00:05:00.000Z",
                            "endDate": "2022-11-15T00:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.5837,
                                    24.2457
                                ],
                                [
                                    67.98,
                                    31.39
                                ],
                                [
                                    72.29,
                                    39.43
                                ],
                                [
                                    77.88,
                                    46.76
                                ],
                                [
                                    82.75,
                                    53.37
                                ],
                                [
                                    82.9657,
                                    53.8705
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a410",
                    "number": 0
                },
                {
                    "asset": "a419",
                    "number": 0
                },
                {
                    "asset": "a416",
                    "number": 5
                },
                {
                    "asset": "a418",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a421"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_9",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T07:05:03.194Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-12",
            "title": "Order item 12",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T03:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T00:05:00.000Z",
                            "endDate": "2022-11-15T00:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.8489,
                                    48.0445
                                ],
                                [
                                    33.39,
                                    39.83
                                ],
                                [
                                    34.02,
                                    30.7
                                ],
                                [
                                    34.93,
                                    22.86
                                ],
                                [
                                    35.4304,
                                    22.4181
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T00:55:00.000Z",
                            "endDate": "2022-11-15T02:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668473700000,
                            "endTime": 1668480900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        35.16200733067091,
                                        22.66554334941469
                                    ],
                                    [
                                        35.16200733067091,
                                        22.17021499926057
                                    ],
                                    [
                                        35.69783716094488,
                                        22.17021499926057
                                    ],
                                    [
                                        35.69783716094488,
                                        22.66554334941469
                                    ],
                                    [
                                        35.16200733067091,
                                        22.66554334941469
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route out",
                            "startDate": "2022-11-15T02:55:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480900000,
                            "endTime": 1668482100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    35.4304,
                                    22.4181
                                ],
                                [
                                    33.87,
                                    35.09
                                ],
                                [
                                    31.7,
                                    48.14
                                ],
                                [
                                    31.8489,
                                    48.0445
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-strike",
            "ownAssets": [
                {
                    "asset": "a438",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a408",
                "a419"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_12",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T14:47:47.015Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-15",
            "title": "Order item 15",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T05:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T00:05:00.000Z",
                            "endDate": "2022-11-15T00:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.0366,
                                    32.8544
                                ],
                                [
                                    76.93,
                                    24.3
                                ],
                                [
                                    77.13,
                                    15.05
                                ],
                                [
                                    76.9269,
                                    15.1664
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T00:55:00.000Z",
                            "endDate": "2022-11-15T03:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668473700000,
                            "endTime": 1668481500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        73.0355157354627,
                                        18.81673512205848
                                    ],
                                    [
                                        73.0355157354627,
                                        11.451629094708206
                                    ],
                                    [
                                        80.68493115096355,
                                        11.451629094708206
                                    ],
                                    [
                                        80.68493115096355,
                                        18.81673512205848
                                    ],
                                    [
                                        73.0355157354627,
                                        18.81673512205848
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route out",
                            "startDate": "2022-11-15T03:05:00.000Z",
                            "endDate": "2022-11-15T05:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668481500000,
                            "endTime": 1668490500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.9269,
                                    15.1664
                                ],
                                [
                                    77.44,
                                    21.35
                                ],
                                [
                                    77,
                                    26.58
                                ],
                                [
                                    76.84,
                                    33.09
                                ],
                                [
                                    77.0366,
                                    32.8544
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a438",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a408",
                "a419"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_15",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T12:14:31.627Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-18",
            "title": "Order item 18",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T03:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T00:05:00.000Z",
                            "endDate": "2022-11-15T00:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    82.9657,
                                    53.8705
                                ],
                                [
                                    84.43,
                                    28.04
                                ],
                                [
                                    85.25,
                                    2.57
                                ],
                                [
                                    85.4999,
                                    2.315
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T00:55:00.000Z",
                            "endDate": "2022-11-15T01:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668473700000,
                            "endTime": 1668474300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        83.52132155794683,
                                        4.286664519989491
                                    ],
                                    [
                                        83.52132155794683,
                                        0.34058576634278453
                                    ],
                                    [
                                        87.47297616420047,
                                        0.34058576634278453
                                    ],
                                    [
                                        87.47297616420047,
                                        4.286664519989491
                                    ],
                                    [
                                        83.52132155794683,
                                        4.286664519989491
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route out",
                            "startDate": "2022-11-15T01:05:00.000Z",
                            "endDate": "2022-11-15T03:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668474300000,
                            "endTime": 1668482700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.4999,
                                    2.315
                                ],
                                [
                                    84.4,
                                    28.07
                                ],
                                [
                                    82.66,
                                    54.18
                                ],
                                [
                                    82.9657,
                                    53.8705
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a431",
                    "number": 4
                },
                {
                    "asset": "a433",
                    "number": 3
                },
                {
                    "asset": "a439",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a408",
                "a419"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_18",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-1",
                "roleId": "1rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T23:25:17.028Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-21",
            "title": "Order item 21",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T10:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T00:05:00.000Z",
                            "endDate": "2022-11-15T00:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.4879,
                                    36.495
                                ],
                                [
                                    51.08,
                                    29.34
                                ],
                                [
                                    63.73,
                                    22.24
                                ],
                                [
                                    76.66,
                                    15.43
                                ],
                                [
                                    76.9269,
                                    15.1664
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
                            "startDate": "2022-11-15T00:55:00.000Z",
                            "endDate": "2022-11-15T04:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668473700000,
                            "endTime": 1668485100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        76.06820762201139,
                                        15.990247574221657
                                    ],
                                    [
                                        76.06820762201139,
                                        14.339328123067165
                                    ],
                                    [
                                        77.77891148613443,
                                        14.339328123067165
                                    ],
                                    [
                                        77.77891148613443,
                                        15.990247574221657
                                    ],
                                    [
                                        76.06820762201139,
                                        15.990247574221657
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9b",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Target Area",
                            "startDate": "2022-11-15T04:05:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668485100000,
                            "endTime": 1668495300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        75.9243140453862,
                                        16.127322340819582
                                    ],
                                    [
                                        75.9243140453862,
                                        14.201087943804202
                                    ],
                                    [
                                        77.92039048658734,
                                        14.201087943804202
                                    ],
                                    [
                                        77.92039048658734,
                                        16.127322340819582
                                    ],
                                    [
                                        75.9243140453862,
                                        16.127322340819582
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route out",
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T10:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668495300000,
                            "endTime": 1668506700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.9269,
                                    15.1664
                                ],
                                [
                                    67.72,
                                    20.93
                                ],
                                [
                                    57.53,
                                    25.7
                                ],
                                [
                                    47.61,
                                    30.75
                                ],
                                [
                                    37.98,
                                    36.08
                                ],
                                [
                                    38.4879,
                                    36.495
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a433",
                    "number": 2
                },
                {
                    "asset": "a432",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a408"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_21",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T16:20:03.221Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-24",
            "title": "Order item 24",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T00:55:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a427",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a408",
                "a419",
                "a411"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_24",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T14:58:50.204Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-27",
            "title": "Order item 27",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T00:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T00:05:00.000Z",
                            "endDate": "2022-11-15T00:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    53.1911,
                                    14.5274
                                ],
                                [
                                    63.2,
                                    44.54
                                ],
                                [
                                    63.0884,
                                    44.8998
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a411",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a421",
                "a438"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_27",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T03:21:37.977Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-30",
            "title": "Order item 30",
            "startDate": "2022-11-15T00:10:00.000Z",
            "endDate": "2022-11-15T03:20:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a407",
                    "number": 4
                },
                {
                    "asset": "a415",
                    "number": 2
                },
                {
                    "asset": "a411",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a421",
                "a438"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_30",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T05:28:26.541Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-33",
            "title": "Order item 33",
            "startDate": "2022-11-15T00:30:00.000Z",
            "endDate": "2022-11-15T01:20:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T00:30:00.000Z",
                            "endDate": "2022-11-15T01:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668472200000,
                            "endTime": 1668475200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    80.1819,
                                    4.3081
                                ],
                                [
                                    60.92,
                                    14.13
                                ],
                                [
                                    41.83,
                                    23.13
                                ],
                                [
                                    22.02,
                                    32.41
                                ],
                                [
                                    22.0544,
                                    32.5963
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a412",
                    "number": 0
                },
                {
                    "asset": "a418",
                    "number": 1
                },
                {
                    "asset": "a411",
                    "number": 2
                },
                {
                    "asset": "a410",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a421",
                "a438",
                "a434"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_33",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-3",
                "roleId": "rk116f52",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T13:19:15.896Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-36",
            "title": "Order item 36",
            "startDate": "2022-11-15T00:45:00.000Z",
            "endDate": "2022-11-15T02:45:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T00:45:00.000Z",
                            "endDate": "2022-11-15T01:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668473100000,
                            "endTime": 1668476100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.5986,
                                    43.2109
                                ],
                                [
                                    42.28,
                                    35.01
                                ],
                                [
                                    39.81,
                                    25.66
                                ],
                                [
                                    36.62,
                                    17.59
                                ],
                                [
                                    33.72,
                                    8.81
                                ],
                                [
                                    33.3618,
                                    8.7822
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T01:35:00.000Z",
                            "endDate": "2022-11-15T02:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668476100000,
                            "endTime": 1668479700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                33.3618,
                                8.7822
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
                            "startDate": "2022-11-15T02:35:00.000Z",
                            "endDate": "2022-11-15T02:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668479700000,
                            "endTime": 1668480300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.3618,
                                    8.7822
                                ],
                                [
                                    37.22,
                                    19.81
                                ],
                                [
                                    41.33,
                                    32.1
                                ],
                                [
                                    45.73,
                                    43.67
                                ],
                                [
                                    45.5986,
                                    43.2109
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a430",
                    "number": 5
                },
                {
                    "asset": "a433",
                    "number": 0
                },
                {
                    "asset": "a421",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a408",
                "a419"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_36",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T02:54:06.041Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-39",
            "title": "Order item 39",
            "startDate": "2022-11-15T00:45:00.000Z",
            "endDate": "2022-11-15T03:55:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T00:45:00.000Z",
                            "endDate": "2022-11-15T01:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668473100000,
                            "endTime": 1668476100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.6617,
                                    9.2578
                                ],
                                [
                                    63.28,
                                    21.06
                                ],
                                [
                                    63.12,
                                    33.1
                                ],
                                [
                                    63.24,
                                    44.41
                                ],
                                [
                                    63.0884,
                                    44.8998
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T01:35:00.000Z",
                            "endDate": "2022-11-15T03:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668476100000,
                            "endTime": 1668482700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                63.0884,
                                44.8998
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
                            "startDate": "2022-11-15T03:25:00.000Z",
                            "endDate": "2022-11-15T03:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668482700000,
                            "endTime": 1668484500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0884,
                                    44.8998
                                ],
                                [
                                    62.59,
                                    35.49
                                ],
                                [
                                    62.96,
                                    26.96
                                ],
                                [
                                    62.61,
                                    17.7
                                ],
                                [
                                    62.55,
                                    9.73
                                ],
                                [
                                    62.6617,
                                    9.2578
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a417",
                    "number": 3
                },
                {
                    "asset": "a410",
                    "number": 2
                },
                {
                    "asset": "a406",
                    "number": 2
                },
                {
                    "asset": "a416",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a421",
                "a438"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_39",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T06:12:56.977Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-42",
            "title": "Order item 42",
            "startDate": "2022-11-15T00:50:00.000Z",
            "endDate": "2022-11-15T04:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T00:50:00.000Z",
                            "endDate": "2022-11-15T01:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668473400000,
                            "endTime": 1668476400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.4999,
                                    2.315
                                ],
                                [
                                    77.61,
                                    16.27
                                ],
                                [
                                    70.98,
                                    30.48
                                ],
                                [
                                    62.63,
                                    44.97
                                ],
                                [
                                    63.0884,
                                    44.8998
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T01:40:00.000Z",
                            "endDate": "2022-11-15T02:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668476400000,
                            "endTime": 1668479400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                63.0884,
                                44.8998
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
                            "startDate": "2022-11-15T02:30:00.000Z",
                            "endDate": "2022-11-15T04:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668479400000,
                            "endTime": 1668486600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0884,
                                    44.8998
                                ],
                                [
                                    74.29,
                                    23.47
                                ],
                                [
                                    85.98,
                                    2.54
                                ],
                                [
                                    85.4999,
                                    2.315
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a416",
                    "number": 5
                },
                {
                    "asset": "a414",
                    "number": 3
                },
                {
                    "asset": "a417",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a421"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_42",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T15:15:48.703Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-45",
            "title": "Order item 45",
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T04:00:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T01:10:00.000Z",
                            "endDate": "2022-11-15T02:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668474600000,
                            "endTime": 1668477600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.7497,
                                    40.7126
                                ],
                                [
                                    35.47,
                                    22.06
                                ],
                                [
                                    35.4304,
                                    22.4181
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T02:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668477600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                35.4304,
                                22.4181
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T04:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668484800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    35.4304,
                                    22.4181
                                ],
                                [
                                    32.26,
                                    31.54
                                ],
                                [
                                    28.44,
                                    41.02
                                ],
                                [
                                    28.7497,
                                    40.7126
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a427",
                    "number": 0
                },
                {
                    "asset": "a440",
                    "number": 5
                },
                {
                    "asset": "a436",
                    "number": 4
                },
                {
                    "asset": "a428",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a408",
                "a419"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_45",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T14:02:41.219Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-48",
            "title": "Order item 48",
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T02:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T01:10:00.000Z",
                            "endDate": "2022-11-15T02:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668474600000,
                            "endTime": 1668477600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.8368,
                                    4.4695
                                ],
                                [
                                    58.09,
                                    13.97
                                ],
                                [
                                    54.21,
                                    24.33
                                ],
                                [
                                    49.61,
                                    33.97
                                ],
                                [
                                    45.29,
                                    42.89
                                ],
                                [
                                    45.5986,
                                    43.2109
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a408",
                    "number": 0
                },
                {
                    "asset": "a418",
                    "number": 3
                },
                {
                    "asset": "a416",
                    "number": 3
                },
                {
                    "asset": "a419",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a421",
                "a438",
                "a427"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_48",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T18:33:34.526Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-51",
            "title": "Order item 51",
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T02:00:00.000Z",
            "location": [
                {
                    "uniqid": "ab1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Ballistic Strike//Route to target",
                            "startDate": "2022-11-15T01:10:00.000Z",
                            "endDate": "2022-11-15T02:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668474600000,
                            "endTime": 1668477600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.5986,
                                    43.2109
                                ],
                                [
                                    42.87,
                                    38.35
                                ],
                                [
                                    40.99,
                                    32.35
                                ],
                                [
                                    38.39,
                                    27.62
                                ],
                                [
                                    35.07,
                                    22.18
                                ],
                                [
                                    35.4304,
                                    22.4181
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-ballistic-strike",
            "ownAssets": [
                {
                    "asset": "a439",
                    "number": 5
                },
                {
                    "asset": "a429",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a408",
                "a419",
                "a418"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_51",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T04:48:28.624Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-54",
            "title": "Order item 54",
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T04:40:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T01:10:00.000Z",
                            "endDate": "2022-11-15T02:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668474600000,
                            "endTime": 1668477600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    56.9826,
                                    13.0939
                                ],
                                [
                                    58.6,
                                    23.45
                                ],
                                [
                                    61.47,
                                    34.07
                                ],
                                [
                                    62.63,
                                    44.96
                                ],
                                [
                                    63.0884,
                                    44.8998
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T04:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668477600000,
                            "endTime": 1668486000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                63.0884,
                                44.8998
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
                            "startDate": "2022-11-15T04:20:00.000Z",
                            "endDate": "2022-11-15T04:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668486000000,
                            "endTime": 1668487200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0884,
                                    44.8998
                                ],
                                [
                                    59.82,
                                    29.18
                                ],
                                [
                                    56.98,
                                    12.91
                                ],
                                [
                                    56.9826,
                                    13.0939
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a401",
                    "number": 4
                },
                {
                    "asset": "a409",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a421",
                "a438",
                "a427"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_54",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T04:47:23.512Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-57",
            "title": "Order item 57",
            "startDate": "2022-11-15T01:20:00.000Z",
            "endDate": "2022-11-15T05:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T01:20:00.000Z",
                            "endDate": "2022-11-15T02:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668475200000,
                            "endTime": 1668478200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    56.9826,
                                    13.0939
                                ],
                                [
                                    53.68,
                                    23.09
                                ],
                                [
                                    49.58,
                                    33.29
                                ],
                                [
                                    45.76,
                                    42.77
                                ],
                                [
                                    45.5986,
                                    43.2109
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T02:10:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668478200000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                45.5986,
                                43.2109
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668488400000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.5986,
                                    43.2109
                                ],
                                [
                                    51.39,
                                    27.91
                                ],
                                [
                                    56.67,
                                    13.1
                                ],
                                [
                                    56.9826,
                                    13.0939
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a416",
                    "number": 1
                },
                {
                    "asset": "a418",
                    "number": 4
                },
                {
                    "asset": "a408",
                    "number": 0
                },
                {
                    "asset": "a420",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a421",
                "a438"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_57",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T18:30:19.191Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-60",
            "title": "Order item 60",
            "startDate": "2022-11-15T01:30:00.000Z",
            "endDate": "2022-11-15T02:00:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a420",
                    "number": 2
                },
                {
                    "asset": "a416",
                    "number": 2
                },
                {
                    "asset": "a407",
                    "number": 4
                },
                {
                    "asset": "a417",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a421"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_60",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T13:57:15.660Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-63",
            "title": "Order item 63",
            "startDate": "2022-11-15T01:50:00.000Z",
            "endDate": "2022-11-15T02:30:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a437",
                    "number": 4
                },
                {
                    "asset": "a434",
                    "number": 5
                },
                {
                    "asset": "a436",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a408",
                "a419",
                "a409"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_63",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T15:08:12.920Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-66",
            "title": "Order item 66",
            "startDate": "2022-11-15T01:50:00.000Z",
            "endDate": "2022-11-15T06:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T01:50:00.000Z",
                            "endDate": "2022-11-15T02:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668477000000,
                            "endTime": 1668480000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.7285,
                                    20.5444
                                ],
                                [
                                    46.23,
                                    30.17
                                ],
                                [
                                    29.14,
                                    40.21
                                ],
                                [
                                    28.7497,
                                    40.7126
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T02:40:00.000Z",
                            "endDate": "2022-11-15T04:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668480000000,
                            "endTime": 1668487800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                28.7497,
                                40.7126
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
                            "startDate": "2022-11-15T04:50:00.000Z",
                            "endDate": "2022-11-15T06:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668487800000,
                            "endTime": 1668492000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.7497,
                                    40.7126
                                ],
                                [
                                    62.25,
                                    20.66
                                ],
                                [
                                    62.7285,
                                    20.5444
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a406",
                    "number": 2
                },
                {
                    "asset": "a417",
                    "number": 2
                },
                {
                    "asset": "a414",
                    "number": 3
                },
                {
                    "asset": "a401",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a421"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_66",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T06:03:10.970Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-69",
            "title": "Order item 69",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T02:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.6849,
                                    47.4702
                                ],
                                [
                                    46.64,
                                    34.74
                                ],
                                [
                                    35.07,
                                    22.5
                                ],
                                [
                                    35.4304,
                                    22.4181
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a421",
                    "number": 1
                },
                {
                    "asset": "a433",
                    "number": 3
                },
                {
                    "asset": "a430",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a408"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_69",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T02:42:09.811Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-72",
            "title": "Order item 72",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T02:50:00.000Z",
            "location": [
                {
                    "uniqid": "ab1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Ballistic Strike//Route to target",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.4879,
                                    36.495
                                ],
                                [
                                    33.1,
                                    31.11
                                ],
                                [
                                    27.92,
                                    24.93
                                ],
                                [
                                    22.02,
                                    19.03
                                ],
                                [
                                    22.3757,
                                    18.9666
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-ballistic-strike",
            "ownAssets": [
                {
                    "asset": "a431",
                    "number": 5
                },
                {
                    "asset": "a438",
                    "number": 3
                },
                {
                    "asset": "a432",
                    "number": 2
                },
                {
                    "asset": "a421",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a408"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_72",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T13:05:09.442Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-75",
            "title": "Order item 75",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T08:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.5986,
                                    43.2109
                                ],
                                [
                                    41.56,
                                    31.43
                                ],
                                [
                                    37.58,
                                    20.71
                                ],
                                [
                                    32.88,
                                    9.27
                                ],
                                [
                                    33.3618,
                                    8.7822
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480600000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        31.720996175218605,
                                        10.392549775070986
                                    ],
                                    [
                                        31.720996175218605,
                                        7.1648220570295225
                                    ],
                                    [
                                        34.98838376093876,
                                        7.1648220570295225
                                    ],
                                    [
                                        34.98838376093876,
                                        10.392549775070986
                                    ],
                                    [
                                        31.720996175218605,
                                        10.392549775070986
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9b",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Target Area",
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T07:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668488400000,
                            "endTime": 1668496200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        31.4797070827729,
                                        10.62735814059714
                                    ],
                                    [
                                        31.4797070827729,
                                        6.927806576350032
                                    ],
                                    [
                                        35.22520845463838,
                                        6.927806576350032
                                    ],
                                    [
                                        35.22520845463838,
                                        10.62735814059714
                                    ],
                                    [
                                        31.4797070827729,
                                        10.62735814059714
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route out",
                            "startDate": "2022-11-15T07:10:00.000Z",
                            "endDate": "2022-11-15T08:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668496200000,
                            "endTime": 1668499800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.3618,
                                    8.7822
                                ],
                                [
                                    37.88,
                                    20.47
                                ],
                                [
                                    41.49,
                                    31.26
                                ],
                                [
                                    45.39,
                                    43.33
                                ],
                                [
                                    45.5986,
                                    43.2109
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a431",
                    "number": 4
                },
                {
                    "asset": "a435",
                    "number": 5
                },
                {
                    "asset": "a427",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a408",
                "a419",
                "a418"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_75",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T05:12:09.864Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-78",
            "title": "Order item 78",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T05:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.7978,
                                    54.6854
                                ],
                                [
                                    67.03,
                                    33.79
                                ],
                                [
                                    56.67,
                                    13.3
                                ],
                                [
                                    56.9826,
                                    13.0939
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480600000,
                            "endTime": 1668484200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        56.079906342521895,
                                        13.968334760447725
                                    ],
                                    [
                                        56.079906342521895,
                                        12.216349353867534
                                    ],
                                    [
                                        57.878895970207715,
                                        12.216349353867534
                                    ],
                                    [
                                        57.878895970207715,
                                        13.968334760447725
                                    ],
                                    [
                                        56.079906342521895,
                                        13.968334760447725
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9b",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Target Area",
                            "startDate": "2022-11-15T03:50:00.000Z",
                            "endDate": "2022-11-15T05:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668484200000,
                            "endTime": 1668490800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        55.5526886654426,
                                        14.474500604536887
                                    ],
                                    [
                                        55.5526886654426,
                                        11.705513361180344
                                    ],
                                    [
                                        58.39652630018483,
                                        11.705513361180344
                                    ],
                                    [
                                        58.39652630018483,
                                        14.474500604536887
                                    ],
                                    [
                                        55.5526886654426,
                                        14.474500604536887
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route out",
                            "startDate": "2022-11-15T05:40:00.000Z",
                            "endDate": "2022-11-15T05:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668490800000,
                            "endTime": 1668490800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    56.9826,
                                    13.0939
                                ],
                                [
                                    76.77,
                                    54.3
                                ],
                                [
                                    76.7978,
                                    54.6854
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a440",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a408",
                "a419"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_78",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T03:03:11.077Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-81",
            "title": "Order item 81",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T04:50:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a425",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a408"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_81",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T14:38:13.080Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-84",
            "title": "Order item 84",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T06:20:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    53.1911,
                                    14.5274
                                ],
                                [
                                    83.1,
                                    54.16
                                ],
                                [
                                    82.9657,
                                    53.8705
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T04:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668480600000,
                            "endTime": 1668487800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        78.11688490704216,
                                        56.45600882895889
                                    ],
                                    [
                                        78.11688490704216,
                                        51.11276936287356
                                    ],
                                    [
                                        87.23245131898025,
                                        51.11276936287356
                                    ],
                                    [
                                        87.23245131898025,
                                        56.45600882895889
                                    ],
                                    [
                                        78.11688490704216,
                                        56.45600882895889
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route out",
                            "startDate": "2022-11-15T04:50:00.000Z",
                            "endDate": "2022-11-15T06:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668487800000,
                            "endTime": 1668493200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    82.9657,
                                    53.8705
                                ],
                                [
                                    72.9,
                                    40.56
                                ],
                                [
                                    62.92,
                                    27.35
                                ],
                                [
                                    53.23,
                                    14.41
                                ],
                                [
                                    53.1911,
                                    14.5274
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a416",
                    "number": 4
                },
                {
                    "asset": "a412",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a421"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_84",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T15:57:15.873Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-87",
            "title": "Order item 87",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T04:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.9669,
                                    45.7995
                                ],
                                [
                                    54.14,
                                    33.53
                                ],
                                [
                                    43.52,
                                    21.47
                                ],
                                [
                                    33.17,
                                    8.68
                                ],
                                [
                                    33.3618,
                                    8.7822
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Flight box",
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T03:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480600000,
                            "endTime": 1668483600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        31.091231987313964,
                                        11.004250932672386
                                    ],
                                    [
                                        31.091231987313964,
                                        6.546735820591545
                                    ],
                                    [
                                        35.60523429019408,
                                        6.546735820591545
                                    ],
                                    [
                                        35.60523429019408,
                                        11.004250932672386
                                    ],
                                    [
                                        31.091231987313964,
                                        11.004250932672386
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9b",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Target Area",
                            "startDate": "2022-11-15T03:40:00.000Z",
                            "endDate": "2022-11-15T04:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668483600000,
                            "endTime": 1668485400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        31.94646133271101,
                                        10.17265745362765
                                    ],
                                    [
                                        31.94646133271101,
                                        7.386506864114029
                                    ],
                                    [
                                        34.76654475761608,
                                        7.386506864114029
                                    ],
                                    [
                                        34.76654475761608,
                                        10.17265745362765
                                    ],
                                    [
                                        31.94646133271101,
                                        10.17265745362765
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route out",
                            "startDate": "2022-11-15T04:10:00.000Z",
                            "endDate": "2022-11-15T04:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668485400000,
                            "endTime": 1668485400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.3618,
                                    8.7822
                                ],
                                [
                                    48.19,
                                    27.78
                                ],
                                [
                                    64.44,
                                    46.19
                                ],
                                [
                                    63.9669,
                                    45.7995
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-air-recce",
            "ownAssets": [
                {
                    "asset": "a439",
                    "number": 2
                },
                {
                    "asset": "a432",
                    "number": 2
                },
                {
                    "asset": "a431",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a408",
                "a419"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_87",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T23:00:19.457Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-90",
            "title": "Order item 90",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T07:10:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.25,
                                    25.8074
                                ],
                                [
                                    25.32,
                                    27.36
                                ],
                                [
                                    24.33,
                                    28.85
                                ],
                                [
                                    22.62,
                                    30.62
                                ],
                                [
                                    22.19,
                                    32.67
                                ],
                                [
                                    22.0544,
                                    32.5963
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T06:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668480600000,
                            "endTime": 1668492000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                22.0544,
                                32.5963
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
                            "startDate": "2022-11-15T06:00:00.000Z",
                            "endDate": "2022-11-15T07:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668492000000,
                            "endTime": 1668496200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.0544,
                                    32.5963
                                ],
                                [
                                    23.49,
                                    29.89
                                ],
                                [
                                    25.05,
                                    28.3
                                ],
                                [
                                    25.9,
                                    26.01
                                ],
                                [
                                    26.25,
                                    25.8074
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a414",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a421",
                "a438"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_90",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T11:47:23.831Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-93",
            "title": "Order item 93",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T04:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    82.9657,
                                    53.8705
                                ],
                                [
                                    81.31,
                                    44.39
                                ],
                                [
                                    79.56,
                                    34.81
                                ],
                                [
                                    78.09,
                                    24.51
                                ],
                                [
                                    76.91,
                                    15.49
                                ],
                                [
                                    76.9269,
                                    15.1664
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T03:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480600000,
                            "endTime": 1668483000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        75.53540479990124,
                                        16.496367898805932
                                    ],
                                    [
                                        75.53540479990124,
                                        13.828006023195327
                                    ],
                                    [
                                        78.30093779367697,
                                        13.828006023195327
                                    ],
                                    [
                                        78.30093779367697,
                                        16.496367898805932
                                    ],
                                    [
                                        75.53540479990124,
                                        16.496367898805932
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route out",
                            "startDate": "2022-11-15T03:30:00.000Z",
                            "endDate": "2022-11-15T04:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668483000000,
                            "endTime": 1668485400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.9269,
                                    15.1664
                                ],
                                [
                                    77.98,
                                    24.55
                                ],
                                [
                                    79.82,
                                    34.74
                                ],
                                [
                                    80.96,
                                    44.21
                                ],
                                [
                                    83.37,
                                    53.96
                                ],
                                [
                                    82.9657,
                                    53.8705
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-area-strike",
            "ownAssets": [
                {
                    "asset": "a439",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a408"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_93",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T14:18:28.996Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-96",
            "title": "Order item 96",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T08:30:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.3792,
                                    19.1569
                                ],
                                [
                                    46.84,
                                    28.84
                                ],
                                [
                                    52.59,
                                    37.82
                                ],
                                [
                                    57.62,
                                    47.07
                                ],
                                [
                                    57.6849,
                                    47.4702
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T05:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668480600000,
                            "endTime": 1668489600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                57.6849,
                                47.4702
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
                            "startDate": "2022-11-15T05:20:00.000Z",
                            "endDate": "2022-11-15T08:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668489600000,
                            "endTime": 1668501000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.6849,
                                    47.4702
                                ],
                                [
                                    49.37,
                                    33.49
                                ],
                                [
                                    41.47,
                                    18.93
                                ],
                                [
                                    41.3792,
                                    19.1569
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a416",
                    "number": 5
                },
                {
                    "asset": "a419",
                    "number": 0
                },
                {
                    "asset": "a410",
                    "number": 3
                },
                {
                    "asset": "a406",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a421",
                "a438",
                "a425"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_96",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T06:33:34.952Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-99",
            "title": "Order item 99",
            "startDate": "2022-11-15T02:10:00.000Z",
            "endDate": "2022-11-15T03:40:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a406",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a421",
                "a438"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_99",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T20:32:41.698Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-102",
            "title": "Order item 102",
            "startDate": "2022-11-15T02:20:00.000Z",
            "endDate": "2022-11-15T03:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T02:20:00.000Z",
                            "endDate": "2022-11-15T03:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668478800000,
                            "endTime": 1668481800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.106,
                                    45.8304
                                ],
                                [
                                    32.49,
                                    33.08
                                ],
                                [
                                    33.01,
                                    21.48
                                ],
                                [
                                    33.82,
                                    9.16
                                ],
                                [
                                    33.3618,
                                    8.7822
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a425",
                    "number": 5
                },
                {
                    "asset": "a439",
                    "number": 3
                },
                {
                    "asset": "a426",
                    "number": 5
                },
                {
                    "asset": "a433",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a408",
                "a419",
                "a409"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_102",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-1",
                "roleId": "1rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T08:15:49.235Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-105",
            "title": "Order item 105",
            "startDate": "2022-11-15T02:20:00.000Z",
            "endDate": "2022-11-15T05:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T02:20:00.000Z",
                            "endDate": "2022-11-15T03:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668478800000,
                            "endTime": 1668481800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.8489,
                                    48.0445
                                ],
                                [
                                    41.66,
                                    19.17
                                ],
                                [
                                    41.3792,
                                    19.1569
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T03:10:00.000Z",
                            "endDate": "2022-11-15T03:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668481800000,
                            "endTime": 1668483600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                41.3792,
                                19.1569
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
                            "startDate": "2022-11-15T03:40:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668483600000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.3792,
                                    19.1569
                                ],
                                [
                                    39.32,
                                    26.15
                                ],
                                [
                                    36.14,
                                    34.02
                                ],
                                [
                                    34.25,
                                    41.17
                                ],
                                [
                                    31.63,
                                    47.61
                                ],
                                [
                                    31.8489,
                                    48.0445
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a433",
                    "number": 4
                },
                {
                    "asset": "a428",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a408",
                "a419",
                "a411"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_105",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T17:42:57.562Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-108",
            "title": "Order item 108",
            "startDate": "2022-11-15T02:20:00.000Z",
            "endDate": "2022-11-15T03:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T02:20:00.000Z",
                            "endDate": "2022-11-15T03:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668478800000,
                            "endTime": 1668481800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.3792,
                                    19.1569
                                ],
                                [
                                    39.86,
                                    30.69
                                ],
                                [
                                    37.56,
                                    42.45
                                ],
                                [
                                    35.54,
                                    53.49
                                ],
                                [
                                    35.9549,
                                    53.4044
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a413",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a421",
                "a438",
                "a427"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_108",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T16:54:06.679Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-111",
            "title": "Order item 111",
            "startDate": "2022-11-15T02:25:00.000Z",
            "endDate": "2022-11-15T07:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T02:25:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668479100000,
                            "endTime": 1668482100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.106,
                                    45.8304
                                ],
                                [
                                    47.11,
                                    36.09
                                ],
                                [
                                    62.27,
                                    25.5
                                ],
                                [
                                    76.71,
                                    15.2
                                ],
                                [
                                    76.9269,
                                    15.1664
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T04:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668482100000,
                            "endTime": 1668486300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                76.9269,
                                15.1664
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T07:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668486300000,
                            "endTime": 1668497700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.9269,
                                    15.1664
                                ],
                                [
                                    62.32,
                                    25.69
                                ],
                                [
                                    46.82,
                                    35.33
                                ],
                                [
                                    32.6,
                                    46.24
                                ],
                                [
                                    32.106,
                                    45.8304
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a426",
                    "number": 0
                },
                {
                    "asset": "a433",
                    "number": 2
                },
                {
                    "asset": "a428",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a408",
                "a419"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_111",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T05:49:16.588Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-114",
            "title": "Order item 114",
            "startDate": "2022-11-15T02:25:00.000Z",
            "endDate": "2022-11-15T06:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T02:25:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668479100000,
                            "endTime": 1668482100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.6617,
                                    9.2578
                                ],
                                [
                                    35.9,
                                    53.06
                                ],
                                [
                                    35.9549,
                                    53.4044
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T04:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668482100000,
                            "endTime": 1668486300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.09535788346377,
                                        55.528663768198726
                                    ],
                                    [
                                        32.09535788346377,
                                        51.167718217180635
                                    ],
                                    [
                                        39.43818805836694,
                                        51.167718217180635
                                    ],
                                    [
                                        39.43818805836694,
                                        55.528663768198726
                                    ],
                                    [
                                        32.09535788346377,
                                        55.528663768198726
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route out",
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668486300000,
                            "endTime": 1668493500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    35.9549,
                                    53.4044
                                ],
                                [
                                    62.95,
                                    9.28
                                ],
                                [
                                    62.6617,
                                    9.2578
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a408",
                    "number": 5
                },
                {
                    "asset": "a413",
                    "number": 2
                },
                {
                    "asset": "a405",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a421"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_114",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T00:28:27.286Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-117",
            "title": "Order item 117",
            "startDate": "2022-11-15T02:25:00.000Z",
            "endDate": "2022-11-15T06:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T02:25:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668479100000,
                            "endTime": 1668482100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.6617,
                                    9.2578
                                ],
                                [
                                    62.92,
                                    21.54
                                ],
                                [
                                    63.34,
                                    32.99
                                ],
                                [
                                    63.05,
                                    44.72
                                ],
                                [
                                    63.0884,
                                    44.8998
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T06:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668482100000,
                            "endTime": 1668492300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                63.0884,
                                44.8998
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
                            "startDate": "2022-11-15T06:05:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668492300000,
                            "endTime": 1668493500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0884,
                                    44.8998
                                ],
                                [
                                    62.25,
                                    9.07
                                ],
                                [
                                    62.6617,
                                    9.2578
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-precis-strike",
            "ownAssets": [
                {
                    "asset": "a419",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a421",
                "a438",
                "a433"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_117",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T00:51:38.775Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-120",
            "title": "Order item 120",
            "startDate": "2022-11-15T02:40:00.000Z",
            "endDate": "2022-11-15T07:00:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T02:40:00.000Z",
                            "endDate": "2022-11-15T03:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480000000,
                            "endTime": 1668483000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0884,
                                    44.8998
                                ],
                                [
                                    33.68,
                                    9.03
                                ],
                                [
                                    33.3618,
                                    8.7822
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T03:30:00.000Z",
                            "endDate": "2022-11-15T05:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668483000000,
                            "endTime": 1668491400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                33.3618,
                                8.7822
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
                            "startDate": "2022-11-15T05:50:00.000Z",
                            "endDate": "2022-11-15T07:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668491400000,
                            "endTime": 1668495600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.3618,
                                    8.7822
                                ],
                                [
                                    43.54,
                                    20.99
                                ],
                                [
                                    52.92,
                                    32.41
                                ],
                                [
                                    62.58,
                                    45.11
                                ],
                                [
                                    63.0884,
                                    44.8998
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a426",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a408"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_120",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T14:58:51.055Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-123",
            "title": "Order item 123",
            "startDate": "2022-11-15T02:40:00.000Z",
            "endDate": "2022-11-15T03:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T02:40:00.000Z",
                            "endDate": "2022-11-15T03:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668480000000,
                            "endTime": 1668483000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.5837,
                                    24.2457
                                ],
                                [
                                    42.18,
                                    28.56
                                ],
                                [
                                    22.21,
                                    32.3
                                ],
                                [
                                    22.0544,
                                    32.5963
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a419",
                    "number": 5
                },
                {
                    "asset": "a416",
                    "number": 2
                },
                {
                    "asset": "a418",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a421"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_123",
        "_rev": "2"
    }
]