
import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'

export const planningMessagesBulk: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> = [
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
            "title": "Order item 6 Transit",
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    127.86,
                                    -14.53
                                ],
                                [
                                    116.77,
                                    -21.64
                                ],
                                [
                                    116.4863,
                                    -21.3267
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
                                        115.80145984954203,
                                        -20.68461466370769
                                    ],
                                    [
                                        115.80145984954203,
                                        -21.965987864645918
                                    ],
                                    [
                                        117.1771461162646,
                                        -21.965987864645918
                                    ],
                                    [
                                        117.1771461162646,
                                        -20.68461466370769
                                    ],
                                    [
                                        115.80145984954203,
                                        -20.68461466370769
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
                                    116.4863,
                                    -21.3267
                                ],
                                [
                                    123.83,
                                    -17.27
                                ],
                                [
                                    131.43,
                                    -11.98
                                ],
                                [
                                    139.3,
                                    -8.41
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a179"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
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
            "title": "Order item 9 Transit",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T06:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    143.46,
                                    -15.88
                                ],
                                [
                                    143.58,
                                    -12.84
                                ],
                                [
                                    144.98,
                                    -10.52
                                ],
                                [
                                    145.67,
                                    -8.92
                                ],
                                [
                                    145.878,
                                    -8.4283
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
                            "endDate": "2022-11-15T03:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668473700000,
                            "endTime": 1668482100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        142.74777117084554,
                                        -5.298967139234306
                                    ],
                                    [
                                        142.74777117084554,
                                        -11.532440289640927
                                    ],
                                    [
                                        149.05912379326483,
                                        -11.532440289640927
                                    ],
                                    [
                                        149.05912379326483,
                                        -5.298967139234306
                                    ],
                                    [
                                        142.74777117084554,
                                        -5.298967139234306
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
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T04:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668482100000,
                            "endTime": 1668488100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.06091629862286,
                                        -5.614630087325914
                                    ],
                                    [
                                        143.06091629862286,
                                        -11.221597919763349
                                    ],
                                    [
                                        148.7362461871118,
                                        -11.221597919763349
                                    ],
                                    [
                                        148.7362461871118,
                                        -5.614630087325914
                                    ],
                                    [
                                        143.06091629862286,
                                        -5.614630087325914
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
                            "startDate": "2022-11-15T04:55:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668488100000,
                            "endTime": 1668494700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.878,
                                    -8.4283
                                ],
                                [
                                    144.75,
                                    -11.97
                                ],
                                [
                                    143.69,
                                    -14.47
                                ],
                                [
                                    141.91,
                                    -17.68
                                ],
                                [
                                    142.2515,
                                    -18.0243
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a128",
                "a157",
                "a147",
                "a153"
            ],
            "otherAssets": [
                "a168"
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
            "title": "Order item 12 Kinetic",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T00:45:00.000Z",
            "location": [],
            "activity": "Kinetic",
            "ownAssets": [
                "a196"
            ],
            "otherAssets": [
                "a111",
                "a157"
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
            "title": "Order item 15 Kinetic",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T05:35:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    134.53,
                                    -12.05
                                ],
                                [
                                    129.52,
                                    -16.28
                                ],
                                [
                                    129.3162,
                                    -16.1699
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
                            "startDate": "2022-11-15T00:55:00.000Z",
                            "endDate": "2022-11-15T03:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668473700000,
                            "endTime": 1668481500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                129.3162,
                                -16.1699
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
                                    129.3162,
                                    -16.1699
                                ],
                                [
                                    133.3,
                                    -13.32
                                ],
                                [
                                    136.33,
                                    -11.44
                                ],
                                [
                                    139.63,
                                    -8.28
                                ],
                                [
                                    139.8303,
                                    -8.5197
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a196"
            ],
            "otherAssets": [
                "a111",
                "a157"
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
            "title": "Order item 18 Asymmetric",
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
                            "force": "F-Blue",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    141.6,
                                    -14.63
                                ],
                                [
                                    142.73,
                                    -20.41
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a179",
                "a185",
                "a197"
            ],
            "otherAssets": [
                "a111",
                "a157"
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
            "title": "Order item 21 Asymmetric",
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
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    132.07,
                                    -10.56
                                ],
                                [
                                    125.62,
                                    -14.74
                                ],
                                [
                                    119.45,
                                    -18.64
                                ],
                                [
                                    119.7138,
                                    -18.9116
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
                                        118.84543534793804,
                                        -18.084106397505767
                                    ],
                                    [
                                        118.84543534793804,
                                        -19.735018325182658
                                    ],
                                    [
                                        120.5907796757433,
                                        -19.735018325182658
                                    ],
                                    [
                                        120.5907796757433,
                                        -18.084106397505767
                                    ],
                                    [
                                        118.84543534793804,
                                        -18.084106397505767
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
                                        118.7014143356327,
                                        -17.94571463432002
                                    ],
                                    [
                                        118.7014143356327,
                                        -19.871937080284393
                                    ],
                                    [
                                        120.7379142889207,
                                        -19.871937080284393
                                    ],
                                    [
                                        120.7379142889207,
                                        -17.94571463432002
                                    ],
                                    [
                                        118.7014143356327,
                                        -17.94571463432002
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
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    124.84,
                                    -15.32
                                ],
                                [
                                    128.97,
                                    -12.74
                                ],
                                [
                                    133.38,
                                    -9.87
                                ],
                                [
                                    138.08,
                                    -6.72
                                ],
                                [
                                    138.5853,
                                    -6.3233
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a185",
                "a180"
            ],
            "otherAssets": [
                "a111"
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
            "title": "Order item 24 Kinetic",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T03:45:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    143.02,
                                    -13.57
                                ],
                                [
                                    140.83,
                                    -17.08
                                ],
                                [
                                    140.9707,
                                    -17.0411
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
                            "startDate": "2022-11-15T00:55:00.000Z",
                            "endDate": "2022-11-15T02:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668473700000,
                            "endTime": 1668479700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                140.9707,
                                -17.0411
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
                            "endDate": "2022-11-15T03:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668479700000,
                            "endTime": 1668483900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    143.22,
                                    -13.68
                                ],
                                [
                                    144.86,
                                    -9.93
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a171"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
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
            "title": "Order item 27 Kinetic",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T03:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    139.43,
                                    -8.41
                                ],
                                [
                                    139.3171,
                                    -8.0633
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
                            "endDate": "2022-11-15T01:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668473700000,
                            "endTime": 1668474900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        135.660795472479,
                                        -4.4014498451590764
                                    ],
                                    [
                                        135.660795472479,
                                        -11.692166040138547
                                    ],
                                    [
                                        143.03995968857592,
                                        -11.692166040138547
                                    ],
                                    [
                                        143.03995968857592,
                                        -4.4014498451590764
                                    ],
                                    [
                                        135.660795472479,
                                        -4.4014498451590764
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
                            "startDate": "2022-11-15T01:15:00.000Z",
                            "endDate": "2022-11-15T03:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668474900000,
                            "endTime": 1668483300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    132.45,
                                    -12.09
                                ],
                                [
                                    124.7,
                                    -17.01
                                ],
                                [
                                    117.24,
                                    -20.64
                                ],
                                [
                                    117.7434,
                                    -21.0232
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a130"
            ],
            "otherAssets": [
                "a168",
                "a197"
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
            "title": "Order item 30 Transit",
            "startDate": "2022-11-15T00:10:00.000Z",
            "endDate": "2022-11-15T03:20:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a114",
                "a143",
                "a131"
            ],
            "otherAssets": [
                "a168",
                "a197"
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
            "title": "Order item 33 Kinetic",
            "startDate": "2022-11-15T00:30:00.000Z",
            "endDate": "2022-11-15T02:50:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    134.51,
                                    -14.31
                                ],
                                [
                                    142.29,
                                    -12.45
                                ],
                                [
                                    149.36,
                                    -10.3
                                ],
                                [
                                    149.3998,
                                    -10.1238
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
                            "startDate": "2022-11-15T01:20:00.000Z",
                            "endDate": "2022-11-15T01:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668475200000,
                            "endTime": 1668475200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.3998,
                                -10.1238
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
                            "startDate": "2022-11-15T01:20:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668475200000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3998,
                                    -10.1238
                                ],
                                [
                                    143.67,
                                    -11.66
                                ],
                                [
                                    137.83,
                                    -13.32
                                ],
                                [
                                    132.27,
                                    -15.69
                                ],
                                [
                                    127,
                                    -16.78
                                ],
                                [
                                    126.8957,
                                    -17.0157
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a134",
                "a152",
                "a131",
                "a126"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a190"
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
            "title": "Order item 36 Transit",
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
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    134.56,
                                    -6.47
                                ],
                                [
                                    133.57,
                                    -9.08
                                ],
                                [
                                    131.86,
                                    -10.41
                                ],
                                [
                                    130.43,
                                    -12.46
                                ],
                                [
                                    130.0699,
                                    -12.4965
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
                                130.0699,
                                -12.4965
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
                                    130.0699,
                                    -12.4965
                                ],
                                [
                                    131.96,
                                    -10.44
                                ],
                                [
                                    134.11,
                                    -7.13
                                ],
                                [
                                    136.54,
                                    -4.55
                                ],
                                [
                                    136.4064,
                                    -5.0168
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a176",
                "a185",
                "a161"
            ],
            "otherAssets": [
                "a111",
                "a157"
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
            "title": "Order item 39 Kinetic",
            "startDate": "2022-11-15T00:45:00.000Z",
            "endDate": "2022-11-15T03:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    122.0714,
                                    -17.8384
                                ],
                                [
                                    127.66,
                                    -12.6
                                ],
                                [
                                    132.48,
                                    -7.14
                                ],
                                [
                                    137.58,
                                    -2.41
                                ],
                                [
                                    137.4298,
                                    -1.926
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
                            "startDate": "2022-11-15T01:35:00.000Z",
                            "endDate": "2022-11-15T03:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668476100000,
                            "endTime": 1668482700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                137.4298,
                                -1.926
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
                                    137.4298,
                                    -1.926
                                ],
                                [
                                    133.2,
                                    -6.39
                                ],
                                [
                                    129.84,
                                    -10
                                ],
                                [
                                    125.76,
                                    -14.32
                                ],
                                [
                                    121.96,
                                    -17.36
                                ],
                                [
                                    122.0714,
                                    -17.8384
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a148",
                "a150",
                "a110",
                "a146"
            ],
            "otherAssets": [
                "a168",
                "a197"
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
            "title": "Order item 42 Kinetic",
            "startDate": "2022-11-15T00:50:00.000Z",
            "endDate": "2022-11-15T01:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
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
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    141.75,
                                    -13.33
                                ],
                                [
                                    144.71,
                                    -9.36
                                ],
                                [
                                    145.96,
                                    -5.1
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a146",
                "a139",
                "a149"
            ],
            "otherAssets": [
                "a168"
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
            "title": "Order item 45 Asymmetric",
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T03:10:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a171",
                "a199",
                "a200",
                "a173"
            ],
            "otherAssets": [
                "a111",
                "a157"
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
            "title": "Order item 48 Asymmetric",
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T03:30:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a119",
                "a153",
                "a146",
                "a154"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a199"
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
            "title": "Order item 51 Transit",
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T05:10:00.000Z",
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
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    140.55,
                                    -7.97
                                ],
                                [
                                    137.55,
                                    -10.22
                                ],
                                [
                                    133.82,
                                    -11.19
                                ],
                                [
                                    129.39,
                                    -12.87
                                ],
                                [
                                    129.7416,
                                    -12.6383
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
                            "endDate": "2022-11-15T03:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668483000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                129.7416,
                                -12.6383
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
                            "startDate": "2022-11-15T03:30:00.000Z",
                            "endDate": "2022-11-15T05:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668483000000,
                            "endTime": 1668489000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    137.49,
                                    -9.98
                                ],
                                [
                                    144.57,
                                    -7
                                ],
                                [
                                    144.4062,
                                    -6.8859
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a197",
                "a174"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
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
            "title": "Order item 54 Transit",
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T04:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    130.0699,
                                    -12.4965
                                ],
                                [
                                    135.19,
                                    -11.15
                                ],
                                [
                                    141.56,
                                    -9.56
                                ],
                                [
                                    146.21,
                                    -7.68
                                ],
                                [
                                    146.6751,
                                    -7.7565
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
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T04:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668477600000,
                            "endTime": 1668486000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                146.6751,
                                -7.7565
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
                                    146.6751,
                                    -7.7565
                                ],
                                [
                                    138.15,
                                    -9.93
                                ],
                                [
                                    130.07,
                                    -12.67
                                ],
                                [
                                    130.0699,
                                    -12.4965
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a105",
                "a121"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a174"
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
            "title": "Order item 57 Asymmetric",
            "startDate": "2022-11-15T01:20:00.000Z",
            "endDate": "2022-11-15T07:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    138.76,
                                    -12.98
                                ],
                                [
                                    142.66,
                                    -10.22
                                ],
                                [
                                    146.83,
                                    -8.19
                                ],
                                [
                                    146.6751,
                                    -7.7565
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
                            "startDate": "2022-11-15T02:10:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668478200000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.8911841147941,
                                        -4.973973507560322
                                    ],
                                    [
                                        143.8911841147941,
                                        -10.520700585951023
                                    ],
                                    [
                                        149.49598321330038,
                                        -10.520700585951023
                                    ],
                                    [
                                        149.49598321330038,
                                        -4.973973507560322
                                    ],
                                    [
                                        143.8911841147941,
                                        -4.973973507560322
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
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668488400000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.37907353713854,
                                        -6.46675494263499
                                    ],
                                    [
                                        145.37907353713854,
                                        -9.04230073998844
                                    ],
                                    [
                                        147.97908687847834,
                                        -9.04230073998844
                                    ],
                                    [
                                        147.97908687847834,
                                        -6.46675494263499
                                    ],
                                    [
                                        145.37907353713854,
                                        -6.46675494263499
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
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T07:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668488400000,
                            "endTime": 1668497400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.6751,
                                    -7.7565
                                ],
                                [
                                    143.76,
                                    -9.92
                                ],
                                [
                                    140.77,
                                    -11.17
                                ],
                                [
                                    137.06,
                                    -13.14
                                ],
                                [
                                    133.63,
                                    -15.82
                                ],
                                [
                                    134.0721,
                                    -15.5391
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a146",
                "a153",
                "a119",
                "a159"
            ],
            "otherAssets": [
                "a168",
                "a197"
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
            "title": "Order item 60 Transit",
            "startDate": "2022-11-15T01:30:00.000Z",
            "endDate": "2022-11-15T07:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T01:30:00.000Z",
                            "endDate": "2022-11-15T02:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668475800000,
                            "endTime": 1668478800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    137.66,
                                    -10.02
                                ],
                                [
                                    146.41,
                                    -5.86
                                ],
                                [
                                    146.7067,
                                    -6.2246
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
                            "startDate": "2022-11-15T02:20:00.000Z",
                            "endDate": "2022-11-15T05:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668478800000,
                            "endTime": 1668489000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                146.7067,
                                -6.2246
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
                            "startDate": "2022-11-15T05:10:00.000Z",
                            "endDate": "2022-11-15T07:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668489000000,
                            "endTime": 1668498600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    141.89,
                                    -7.93
                                ],
                                [
                                    137,
                                    -9.72
                                ],
                                [
                                    132.4,
                                    -12.23
                                ],
                                [
                                    128.08,
                                    -13.45
                                ],
                                [
                                    128.2265,
                                    -13.8618
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a159",
                "a146",
                "a116",
                "a148"
            ],
            "otherAssets": [
                "a168"
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
            "title": "Order item 63 Asymmetric",
            "startDate": "2022-11-15T01:50:00.000Z",
            "endDate": "2022-11-15T02:30:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a193",
                "a187",
                "a191"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
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
            "title": "Order item 66 Asymmetric",
            "startDate": "2022-11-15T01:50:00.000Z",
            "endDate": "2022-11-15T06:00:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    144.22,
                                    -14.16
                                ],
                                [
                                    147.8,
                                    -10.87
                                ],
                                [
                                    147.4089,
                                    -10.3741
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
                            "startDate": "2022-11-15T02:40:00.000Z",
                            "endDate": "2022-11-15T04:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668480000000,
                            "endTime": 1668487800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                147.4089,
                                -10.3741
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
                                    147.4089,
                                    -10.3741
                                ],
                                [
                                    139.56,
                                    -16.94
                                ],
                                [
                                    140.0406,
                                    -17.0574
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a110",
                "a150",
                "a148",
                "a101"
            ],
            "otherAssets": [
                "a168"
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
            "title": "Order item 69 Asymmetric",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T02:00:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a161",
                "a185",
                "a176"
            ],
            "otherAssets": [
                "a111"
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
            "title": "Order item 72 Transit",
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
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    133.87,
                                    -7.68
                                ],
                                [
                                    126.97,
                                    -13.4
                                ],
                                [
                                    119.36,
                                    -18.84
                                ],
                                [
                                    119.7138,
                                    -18.9116
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a179",
                "a195",
                "a181",
                "a161"
            ],
            "otherAssets": [
                "a111"
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
            "title": "Order item 75 Transit",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T03:40:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a179",
                "a190",
                "a170"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
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
            "title": "Order item 78 Kinetic",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T05:40:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    142.7,
                                    -13.38
                                ],
                                [
                                    146.22,
                                    -20.05
                                ],
                                [
                                    146.5324,
                                    -20.2695
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
                            "endDate": "2022-11-15T03:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480600000,
                            "endTime": 1668484200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                146.5324,
                                -20.2695
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
                            "startDate": "2022-11-15T03:50:00.000Z",
                            "endDate": "2022-11-15T05:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668484200000,
                            "endTime": 1668490800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.5324,
                                    -20.2695
                                ],
                                [
                                    142.61,
                                    -13.44
                                ],
                                [
                                    138.17,
                                    -6.15
                                ],
                                [
                                    138.5853,
                                    -6.3233
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a200"
            ],
            "otherAssets": [
                "a111",
                "a157"
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
            "title": "Order item 81 Kinetic",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T06:00:00.000Z",
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
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    136.36,
                                    -12.29
                                ],
                                [
                                    135.48,
                                    -18.51
                                ],
                                [
                                    135.4363,
                                    -18.5329
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
                                        133.29094897467317,
                                        -16.463294389876822
                                    ],
                                    [
                                        133.29094897467317,
                                        -20.577708270241896
                                    ],
                                    [
                                        137.63393571787222,
                                        -20.577708270241896
                                    ],
                                    [
                                        137.63393571787222,
                                        -16.463294389876822
                                    ],
                                    [
                                        133.29094897467317,
                                        -16.463294389876822
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
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668484200000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        134.2661810491764,
                                        -17.41278607906952
                                    ],
                                    [
                                        134.2661810491764,
                                        -19.645717668913296
                                    ],
                                    [
                                        136.62180763925556,
                                        -19.645717668913296
                                    ],
                                    [
                                        136.62180763925556,
                                        -17.41278607906952
                                    ],
                                    [
                                        134.2661810491764,
                                        -17.41278607906952
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
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T06:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668488400000,
                            "endTime": 1668492000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    136.78,
                                    -13.06
                                ],
                                [
                                    137.61,
                                    -7.1
                                ],
                                [
                                    137.5513,
                                    -6.7608
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a166"
            ],
            "otherAssets": [
                "a111"
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
            "title": "Order item 84 Asymmetric",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T03:00:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a145",
                "a133"
            ],
            "otherAssets": [
                "a168"
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
            "title": "Order item 87 Transit",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T04:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    146.42,
                                    -12.55
                                ],
                                [
                                    143.46,
                                    -14.48
                                ],
                                [
                                    140.78,
                                    -17.13
                                ],
                                [
                                    140.9707,
                                    -17.0411
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
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T03:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480600000,
                            "endTime": 1668483600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                140.9707,
                                -17.0411
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
                            "endDate": "2022-11-15T04:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668483600000,
                            "endTime": 1668485400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    144.39,
                                    -13.45
                                ],
                                [
                                    148.29,
                                    -10.39
                                ],
                                [
                                    148.5732,
                                    -10.4337
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a197",
                "a181",
                "a178"
            ],
            "otherAssets": [
                "a111",
                "a157"
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
            "title": "Order item 90 Asymmetric",
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
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    133.59,
                                    -12.02
                                ],
                                [
                                    137.37,
                                    -11.48
                                ],
                                [
                                    140.44,
                                    -10.65
                                ],
                                [
                                    144.79,
                                    -9.54
                                ],
                                [
                                    144.648,
                                    -9.6247
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
                                144.648,
                                -9.6247
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
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    139.72,
                                    -11.07
                                ],
                                [
                                    134.91,
                                    -11.39
                                ],
                                [
                                    129.39,
                                    -12.43
                                ],
                                [
                                    129.7416,
                                    -12.6383
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a141"
            ],
            "otherAssets": [
                "a168",
                "a197"
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
            "title": "Order item 93 Asymmetric",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T05:10:00.000Z",
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
                                    148.2461,
                                    -10.1388
                                ],
                                [
                                    146.79,
                                    -12.57
                                ],
                                [
                                    145.23,
                                    -15.11
                                ],
                                [
                                    143.95,
                                    -18.36
                                ],
                                [
                                    142.96,
                                    -20.34
                                ],
                                [
                                    142.9809,
                                    -20.6715
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
                                        141.56695849602957,
                                        -19.33147961129093
                                    ],
                                    [
                                        141.56695849602957,
                                        -21.99979162563761
                                    ],
                                    [
                                        144.41990829617802,
                                        -21.99979162563761
                                    ],
                                    [
                                        144.41990829617802,
                                        -19.33147961129093
                                    ],
                                    [
                                        141.56695849602957,
                                        -19.33147961129093
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
                            "startDate": "2022-11-15T03:30:00.000Z",
                            "endDate": "2022-11-15T04:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668483000000,
                            "endTime": 1668485400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        138.8491690933293,
                                        -16.663072290096956
                                    ],
                                    [
                                        138.8491690933293,
                                        -24.57626350159906
                                    ],
                                    [
                                        147.33384656090203,
                                        -24.57626350159906
                                    ],
                                    [
                                        147.33384656090203,
                                        -16.663072290096956
                                    ],
                                    [
                                        138.8491690933293,
                                        -16.663072290096956
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
                            "startDate": "2022-11-15T04:10:00.000Z",
                            "endDate": "2022-11-15T05:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668485400000,
                            "endTime": 1668489000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    143.83,
                                    -17.66
                                ],
                                [
                                    145.66,
                                    -15.69
                                ],
                                [
                                    146.76,
                                    -12.43
                                ],
                                [
                                    148.16,
                                    -9.89
                                ],
                                [
                                    148.2461,
                                    -10.1388
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a198"
            ],
            "otherAssets": [
                "a111"
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
            "title": "Order item 96 Kinetic",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T08:30:00.000Z",
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
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    126,
                                    -15.99
                                ],
                                [
                                    135.53,
                                    -11.77
                                ],
                                [
                                    144.35,
                                    -7.27
                                ],
                                [
                                    144.4062,
                                    -6.8859
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
                            "endDate": "2022-11-15T05:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668480600000,
                            "endTime": 1668489600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        142.18420467054827,
                                        -4.66612103792362
                                    ],
                                    [
                                        142.18420467054827,
                                        -9.09532713556342
                                    ],
                                    [
                                        146.6490412643439,
                                        -9.09532713556342
                                    ],
                                    [
                                        146.6490412643439,
                                        -4.66612103792362
                                    ],
                                    [
                                        142.18420467054827,
                                        -4.66612103792362
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
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    130.42,
                                    -13.72
                                ],
                                [
                                    116.85,
                                    -21.14
                                ],
                                [
                                    116.7521,
                                    -20.9262
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a147",
                "a157",
                "a127",
                "a111"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a173"
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
            "title": "Order item 99 Asymmetric",
            "startDate": "2022-11-15T02:10:00.000Z",
            "endDate": "2022-11-15T03:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T02:10:00.000Z",
                            "endDate": "2022-11-15T03:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668478200000,
                            "endTime": 1668481200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    134.07,
                                    -10.33
                                ],
                                [
                                    135.14,
                                    -7.46
                                ],
                                [
                                    136.49,
                                    -4.31
                                ],
                                [
                                    137.13,
                                    -1.88
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a111"
            ],
            "otherAssets": [
                "a168",
                "a197"
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
            "title": "Order item 102 Asymmetric",
            "startDate": "2022-11-15T02:20:00.000Z",
            "endDate": "2022-11-15T06:00:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    137.97,
                                    -8.92
                                ],
                                [
                                    138.79,
                                    -13.92
                                ],
                                [
                                    139.9,
                                    -19.64
                                ],
                                [
                                    139.4415,
                                    -20.0229
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
                            "startDate": "2022-11-15T03:10:00.000Z",
                            "endDate": "2022-11-15T05:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668481800000,
                            "endTime": 1668490200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                139.4415,
                                -20.0229
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
                            "startDate": "2022-11-15T05:30:00.000Z",
                            "endDate": "2022-11-15T06:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668490200000,
                            "endTime": 1668492000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.4415,
                                    -20.0229
                                ],
                                [
                                    138.38,
                                    -14.42
                                ],
                                [
                                    138.5,
                                    -8.66
                                ],
                                [
                                    136.89,
                                    -2.61
                                ],
                                [
                                    137.2844,
                                    -2.7856
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a166",
                "a198",
                "a167",
                "a185"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
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
            "title": "Order item 105 Transit",
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
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    116.76,
                                    -21.3
                                ],
                                [
                                    116.4863,
                                    -21.3267
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a185",
                "a172"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
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
            "title": "Order item 108 Transit",
            "startDate": "2022-11-15T02:20:00.000Z",
            "endDate": "2022-11-15T04:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    128.23,
                                    -14.77
                                ],
                                [
                                    135.97,
                                    -10.42
                                ],
                                [
                                    143.99,
                                    -6.79
                                ],
                                [
                                    144.4062,
                                    -6.8859
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
                            "endDate": "2022-11-15T04:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668481800000,
                            "endTime": 1668487200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                144.4062,
                                -6.8859
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
                            "startDate": "2022-11-15T04:40:00.000Z",
                            "endDate": "2022-11-15T04:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668487200000,
                            "endTime": 1668487200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    119.59,
                                    -19.24
                                ],
                                [
                                    119.7138,
                                    -18.9116
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a137"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a173"
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
            "title": "Order item 111 Kinetic",
            "startDate": "2022-11-15T02:25:00.000Z",
            "endDate": "2022-11-15T02:45:00.000Z",
            "location": [],
            "activity": "Kinetic",
            "ownAssets": [
                "a168",
                "a186",
                "a173"
            ],
            "otherAssets": [
                "a111",
                "a157"
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
            "title": "Order item 114 Kinetic",
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
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    137.37,
                                    -2.26
                                ],
                                [
                                    137.4298,
                                    -1.926
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
                            "force": "F-Red",
                            "startTime": 1668482100000,
                            "endTime": 1668486300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                137.4298,
                                -1.926
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
                            "endDate": "2022-11-15T06:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668486300000,
                            "endTime": 1668493500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.4298,
                                    -1.926
                                ],
                                [
                                    135.72,
                                    -18.5
                                ],
                                [
                                    135.4363,
                                    -18.5329
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a118",
                "a135",
                "a109"
            ],
            "otherAssets": [
                "a168"
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
            "title": "Order item 117 Transit",
            "startDate": "2022-11-15T02:25:00.000Z",
            "endDate": "2022-11-15T03:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
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
                                    139.571,
                                    -21.941
                                ],
                                [
                                    138.97,
                                    -14.86
                                ],
                                [
                                    138.54,
                                    -8.62
                                ],
                                [
                                    137.39,
                                    -2.09
                                ],
                                [
                                    137.4298,
                                    -1.926
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a157"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a186"
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
            "title": "Order item 120 Transit",
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
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    142.44,
                                    -19.08
                                ],
                                [
                                    142.1253,
                                    -19.3355
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
                                142.1253,
                                -19.3355
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
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    144.75,
                                    -16.25
                                ],
                                [
                                    146.58,
                                    -13.97
                                ],
                                [
                                    148.69,
                                    -10.4
                                ],
                                [
                                    149.1973,
                                    -10.6215
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a169"
            ],
            "otherAssets": [
                "a111"
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
            "title": "Order item 123 Asymmetric",
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
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    144.29,
                                    -14.4
                                ],
                                [
                                    146.03,
                                    -8.71
                                ],
                                [
                                    145.878,
                                    -8.4283
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a156",
                "a147",
                "a153"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_123",
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
            "timestamp": "2022-09-27T18:50:04.125Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-126",
            "title": "Order item 126 Transit",
            "startDate": "2022-11-15T02:40:00.000Z",
            "endDate": "2022-11-15T05:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    150.35,
                                    -10.28
                                ],
                                [
                                    150.1536,
                                    -10.7176
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
                            "startDate": "2022-11-15T03:30:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668483000000,
                            "endTime": 1668484200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.55614443366784,
                                        -7.127102413623947
                                    ],
                                    [
                                        146.55614443366784,
                                        -14.265850441218015
                                    ],
                                    [
                                        153.83695721316818,
                                        -14.265850441218015
                                    ],
                                    [
                                        153.83695721316818,
                                        -7.127102413623947
                                    ],
                                    [
                                        146.55614443366784,
                                        -7.127102413623947
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
                            "startDate": "2022-11-15T03:50:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668484200000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    116.7,
                                    -21.13
                                ],
                                [
                                    116.7521,
                                    -20.9262
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a117",
                "a156",
                "a154",
                "a109"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_126",
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
            "timestamp": "2022-09-29T04:25:17.986Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-129",
            "title": "Order item 129 Asymmetric",
            "startDate": "2022-11-15T02:55:00.000Z",
            "endDate": "2022-11-15T05:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T02:55:00.000Z",
                            "endDate": "2022-11-15T03:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668480900000,
                            "endTime": 1668483900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    124.4507,
                                    -20.6765
                                ],
                                [
                                    130.56,
                                    -11.42
                                ],
                                [
                                    137.99,
                                    -1.83
                                ],
                                [
                                    137.6034,
                                    -1.484
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
                            "startDate": "2022-11-15T03:45:00.000Z",
                            "endDate": "2022-11-15T05:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668483900000,
                            "endTime": 1668488700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        133.81543577518383,
                                        2.304143251670458
                                    ],
                                    [
                                        133.81543577518383,
                                        -5.265639924969364
                                    ],
                                    [
                                        141.40436096212844,
                                        -5.265639924969364
                                    ],
                                    [
                                        141.40436096212844,
                                        2.304143251670458
                                    ],
                                    [
                                        133.81543577518383,
                                        2.304143251670458
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
                            "startDate": "2022-11-15T05:05:00.000Z",
                            "endDate": "2022-11-15T05:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668488700000,
                            "endTime": 1668489300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        134.04886519365522,
                                        2.0710680689437804
                                    ],
                                    [
                                        134.04886519365522,
                                        -5.0333425254221025
                                    ],
                                    [
                                        141.16937866684415,
                                        -5.0333425254221025
                                    ],
                                    [
                                        141.16937866684415,
                                        2.0710680689437804
                                    ],
                                    [
                                        134.04886519365522,
                                        2.0710680689437804
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
                            "startDate": "2022-11-15T05:15:00.000Z",
                            "endDate": "2022-11-15T05:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668489300000,
                            "endTime": 1668490500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    131.27,
                                    -11.2
                                ],
                                [
                                    124.3,
                                    -20.55
                                ],
                                [
                                    124.4507,
                                    -20.6765
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a109",
                "a141",
                "a130"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_129",
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
            "timestamp": "2022-09-26T19:44:32.637Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-132",
            "title": "Order item 132 Transit",
            "startDate": "2022-11-15T03:10:00.000Z",
            "endDate": "2022-11-15T05:20:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T03:10:00.000Z",
                            "endDate": "2022-11-15T04:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668481800000,
                            "endTime": 1668484800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    120.32,
                                    -19.07
                                ],
                                [
                                    120.4755,
                                    -18.6674
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
                            "startDate": "2022-11-15T04:00:00.000Z",
                            "endDate": "2022-11-15T04:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668484800000,
                            "endTime": 1668487200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                120.4755,
                                -18.6674
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
                            "startDate": "2022-11-15T04:40:00.000Z",
                            "endDate": "2022-11-15T05:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668487200000,
                            "endTime": 1668489600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    120.4755,
                                    -18.6674
                                ],
                                [
                                    125.02,
                                    -15.86
                                ],
                                [
                                    129.49,
                                    -13.13
                                ],
                                [
                                    134.26,
                                    -11.11
                                ],
                                [
                                    139.3,
                                    -7.82
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a181",
                "a197",
                "a185",
                "a180"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_132",
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
            "timestamp": "2022-09-29T00:47:48.079Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-135",
            "title": "Order item 135 Transit",
            "startDate": "2022-11-15T03:10:00.000Z",
            "endDate": "2022-11-15T07:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T03:10:00.000Z",
                            "endDate": "2022-11-15T04:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668481800000,
                            "endTime": 1668484800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    125.98,
                                    -12.66
                                ],
                                [
                                    131.31,
                                    -7.36
                                ],
                                [
                                    137.92,
                                    -1.78
                                ],
                                [
                                    137.6034,
                                    -1.484
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
                            "startDate": "2022-11-15T04:00:00.000Z",
                            "endDate": "2022-11-15T05:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668484800000,
                            "endTime": 1668489600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                137.6034,
                                -1.484
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
                            "startDate": "2022-11-15T05:20:00.000Z",
                            "endDate": "2022-11-15T07:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668489600000,
                            "endTime": 1668497400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    129.05,
                                    -10.47
                                ],
                                [
                                    119.86,
                                    -19.09
                                ],
                                [
                                    119.7138,
                                    -18.9116
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a133",
                "a145",
                "a115"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_135",
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
            "timestamp": "2022-09-27T11:35:04.312Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-138",
            "title": "Order item 138 Kinetic",
            "startDate": "2022-11-15T03:15:00.000Z",
            "endDate": "2022-11-15T06:35:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T04:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668482100000,
                            "endTime": 1668485100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    150.57,
                                    -10.43
                                ],
                                [
                                    150.1536,
                                    -10.7176
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
                            "startDate": "2022-11-15T04:05:00.000Z",
                            "endDate": "2022-11-15T04:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668485100000,
                            "endTime": 1668486300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                150.1536,
                                -10.7176
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
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T06:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668486300000,
                            "endTime": 1668494100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    141.2,
                                    -16.95
                                ],
                                [
                                    140.9707,
                                    -17.0411
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a101"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a192"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_138",
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
            "timestamp": "2022-09-22T04:06:21.334Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-141",
            "title": "Order item 141 Kinetic",
            "startDate": "2022-11-15T03:35:00.000Z",
            "endDate": "2022-11-15T08:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T03:35:00.000Z",
                            "endDate": "2022-11-15T04:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668483300000,
                            "endTime": 1668486300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    138.21,
                                    -10.4
                                ],
                                [
                                    135.75,
                                    -18.73
                                ],
                                [
                                    135.4363,
                                    -18.5329
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
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T07:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668486300000,
                            "endTime": 1668495900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        133.23775350863735,
                                        -16.41109700381979
                                    ],
                                    [
                                        133.23775350863735,
                                        -20.62864500705523
                                    ],
                                    [
                                        137.6897880315315,
                                        -20.62864500705523
                                    ],
                                    [
                                        137.6897880315315,
                                        -16.41109700381979
                                    ],
                                    [
                                        133.23775350863735,
                                        -16.41109700381979
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
                            "startDate": "2022-11-15T07:05:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668495900000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        134.27629267435634,
                                        -17.422555929815868
                                    ],
                                    [
                                        134.27629267435634,
                                        -19.636074187856412
                                    ],
                                    [
                                        136.6114295181979,
                                        -19.636074187856412
                                    ],
                                    [
                                        136.6114295181979,
                                        -17.422555929815868
                                    ],
                                    [
                                        134.27629267435634,
                                        -17.422555929815868
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
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T08:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668498300000,
                            "endTime": 1668502500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    136.82,
                                    -14.52
                                ],
                                [
                                    138.09,
                                    -10.62
                                ],
                                [
                                    139.65,
                                    -6.44
                                ],
                                [
                                    140.48,
                                    -2.98
                                ],
                                [
                                    140.9611,
                                    -2.7755
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a166",
                "a200",
                "a170",
                "a189"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_141",
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
            "timestamp": "2022-09-29T18:21:39.148Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-144",
            "title": "Order item 144 Transit",
            "startDate": "2022-11-15T03:35:00.000Z",
            "endDate": "2022-11-15T06:45:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T03:35:00.000Z",
                            "endDate": "2022-11-15T04:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668483300000,
                            "endTime": 1668486300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    136.36,
                                    -13.6
                                ],
                                [
                                    147.82,
                                    -10.21
                                ],
                                [
                                    147.5097,
                                    -9.88
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
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T06:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668486300000,
                            "endTime": 1668492300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                147.5097,
                                -9.88
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
                            "startDate": "2022-11-15T06:05:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668492300000,
                            "endTime": 1668494700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    136.29,
                                    -13.72
                                ],
                                [
                                    125.52,
                                    -18.11
                                ],
                                [
                                    125.2749,
                                    -17.6467
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a143",
                "a131"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a199"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_144",
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
            "timestamp": "2022-09-25T06:20:57.752Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-147",
            "title": "Order item 147 Transit",
            "startDate": "2022-11-15T03:40:00.000Z",
            "endDate": "2022-11-15T06:00:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a152",
                "a131"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a178"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_147",
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
            "timestamp": "2022-09-25T08:04:17.146Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-150",
            "title": "Order item 150 Asymmetric",
            "startDate": "2022-11-15T04:00:00.000Z",
            "endDate": "2022-11-15T04:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T04:00:00.000Z",
                            "endDate": "2022-11-15T04:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668484800000,
                            "endTime": 1668487800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.0301,
                                    -15.4829
                                ],
                                [
                                    149.1,
                                    -10.35
                                ],
                                [
                                    149.3719,
                                    -10.3237
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a136"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_150",
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
            "timestamp": "2022-09-21T15:31:37.331Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-153",
            "title": "Order item 153 Asymmetric",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T05:35:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a194"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_153",
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
            "timestamp": "2022-09-22T12:42:58.307Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-156",
            "title": "Order item 156 Kinetic",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T07:55:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T04:15:00.000Z",
                            "endDate": "2022-11-15T05:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668485700000,
                            "endTime": 1668488700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    143.39,
                                    -20.41
                                ],
                                [
                                    142.9809,
                                    -20.6715
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
                            "startDate": "2022-11-15T05:05:00.000Z",
                            "endDate": "2022-11-15T05:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668488700000,
                            "endTime": 1668491100000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                142.9809,
                                -20.6715
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
                            "startDate": "2022-11-15T05:45:00.000Z",
                            "endDate": "2022-11-15T07:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668491100000,
                            "endTime": 1668498900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    143.98,
                                    -15.7
                                ],
                                [
                                    145.08,
                                    -10.64
                                ],
                                [
                                    146.46,
                                    -5.3
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a187",
                "a193",
                "a171",
                "a199"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_156",
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
            "timestamp": "2022-09-27T23:38:20.073Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-159",
            "title": "Order item 159 Asymmetric",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T06:55:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a199",
                "a200",
                "a173",
                "a196"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_159",
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
            "timestamp": "2022-09-29T16:17:42.629Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-162",
            "title": "Order item 162 Kinetic",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T06:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T04:15:00.000Z",
                            "endDate": "2022-11-15T05:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668485700000,
                            "endTime": 1668488700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    143.25,
                                    -17.72
                                ],
                                [
                                    143.0924,
                                    -18.0959
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
                            "startDate": "2022-11-15T05:05:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668488700000,
                            "endTime": 1668493500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                143.0924,
                                -18.0959
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
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668493500000,
                            "endTime": 1668494700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    143.0924,
                                    -18.0959
                                ],
                                [
                                    144.56,
                                    -15.74
                                ],
                                [
                                    146.15,
                                    -12.27
                                ],
                                [
                                    147.02,
                                    -9.52
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a196",
                "a191",
                "a199"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_162",
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
            "timestamp": "2022-09-27T14:41:05.976Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-165",
            "title": "Order item 165 Asymmetric",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T11:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T04:15:00.000Z",
                            "endDate": "2022-11-15T05:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668485700000,
                            "endTime": 1668488700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    149.68,
                                    -10.5
                                ],
                                [
                                    150.1536,
                                    -10.7176
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
                            "startDate": "2022-11-15T05:05:00.000Z",
                            "endDate": "2022-11-15T08:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668488700000,
                            "endTime": 1668499500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        149.3579894691663,
                                        -9.93290412310508
                                    ],
                                    [
                                        149.3579894691663,
                                        -11.500266709030587
                                    ],
                                    [
                                        150.95334070422527,
                                        -11.500266709030587
                                    ],
                                    [
                                        150.95334070422527,
                                        -9.93290412310508
                                    ],
                                    [
                                        149.3579894691663,
                                        -9.93290412310508
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
                            "startDate": "2022-11-15T08:05:00.000Z",
                            "endDate": "2022-11-15T08:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668499500000,
                            "endTime": 1668501300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.59148036855657,
                                        -7.1628513757680885
                                    ],
                                    [
                                        146.59148036855657,
                                        -14.230936815179875
                                    ],
                                    [
                                        153.7999245766837,
                                        -14.230936815179875
                                    ],
                                    [
                                        153.7999245766837,
                                        -7.1628513757680885
                                    ],
                                    [
                                        146.59148036855657,
                                        -7.1628513757680885
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
                            "startDate": "2022-11-15T08:35:00.000Z",
                            "endDate": "2022-11-15T11:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668501300000,
                            "endTime": 1668512100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    146,
                                    -20.52
                                ],
                                [
                                    146.1087,
                                    -20.2046
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a120"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_165",
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
            "timestamp": "2022-09-21T18:48:30.114Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-168",
            "title": "Order item 168 Asymmetric",
            "startDate": "2022-11-15T04:20:00.000Z",
            "endDate": "2022-11-15T08:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T04:20:00.000Z",
                            "endDate": "2022-11-15T05:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668486000000,
                            "endTime": 1668489000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    131.2525,
                                    -19.8426
                                ],
                                [
                                    133.49,
                                    -16.01
                                ],
                                [
                                    136.94,
                                    -11.99
                                ],
                                [
                                    139.66,
                                    -7.68
                                ],
                                [
                                    139.3171,
                                    -8.0633
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
                            "startDate": "2022-11-15T05:10:00.000Z",
                            "endDate": "2022-11-15T07:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668489000000,
                            "endTime": 1668497400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                139.3171,
                                -8.0633
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
                            "startDate": "2022-11-15T07:30:00.000Z",
                            "endDate": "2022-11-15T08:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668497400000,
                            "endTime": 1668499200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    136.69,
                                    -11.64
                                ],
                                [
                                    134.29,
                                    -16
                                ],
                                [
                                    131.17,
                                    -20.08
                                ],
                                [
                                    131.2525,
                                    -19.8426
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a120",
                "a154",
                "a146",
                "a153"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_168",
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
            "timestamp": "2022-09-28T20:39:55.042Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-171",
            "title": "Order item 171 Transit",
            "startDate": "2022-11-15T04:40:00.000Z",
            "endDate": "2022-11-15T07:10:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T04:40:00.000Z",
                            "endDate": "2022-11-15T05:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668487200000,
                            "endTime": 1668490200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    131.2525,
                                    -19.8426
                                ],
                                [
                                    146.61,
                                    -6.62
                                ],
                                [
                                    146.7067,
                                    -6.2246
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
                            "startDate": "2022-11-15T05:30:00.000Z",
                            "endDate": "2022-11-15T05:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668490200000,
                            "endTime": 1668490200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                146.7067,
                                -6.2246
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
                            "startDate": "2022-11-15T05:30:00.000Z",
                            "endDate": "2022-11-15T07:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668490200000,
                            "endTime": 1668496200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    139.08,
                                    -13.26
                                ],
                                [
                                    130.95,
                                    -19.81
                                ],
                                [
                                    131.2525,
                                    -19.8426
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a153",
                "a118"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_171",
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
            "timestamp": "2022-09-23T20:15:20.760Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-174",
            "title": "Order item 174 Transit",
            "startDate": "2022-11-15T04:55:00.000Z",
            "endDate": "2022-11-15T06:05:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a199"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_174",
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
            "timestamp": "2022-09-23T09:34:47.270Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-177",
            "title": "Order item 177 Asymmetric",
            "startDate": "2022-11-15T04:55:00.000Z",
            "endDate": "2022-11-15T07:35:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a139",
                "a145",
                "a110"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_177",
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
            "timestamp": "2022-09-27T12:38:14.569Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-180",
            "title": "Order item 180 Asymmetric",
            "startDate": "2022-11-15T05:00:00.000Z",
            "endDate": "2022-11-15T05:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T05:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668488400000,
                            "endTime": 1668491400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    120.4755,
                                    -18.6674
                                ],
                                [
                                    150.65,
                                    -10.65
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a150",
                "a148",
                "a101",
                "a136"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_180",
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
            "timestamp": "2022-09-27T21:25:42.659Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-183",
            "title": "Order item 183 Kinetic",
            "startDate": "2022-11-15T05:20:00.000Z",
            "endDate": "2022-11-15T09:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T05:20:00.000Z",
                            "endDate": "2022-11-15T06:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668489600000,
                            "endTime": 1668492600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    132.59,
                                    -13.24
                                ],
                                [
                                    132.9811,
                                    -13.2215
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
                            "startDate": "2022-11-15T06:10:00.000Z",
                            "endDate": "2022-11-15T07:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668492600000,
                            "endTime": 1668498000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                132.9811,
                                -13.2215
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
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668498000000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    139.36,
                                    -8.75
                                ],
                                [
                                    146.12,
                                    -4.91
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a185",
                "a176"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_183",
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
            "timestamp": "2022-09-24T11:57:11.540Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-186",
            "title": "Order item 186 Asymmetric",
            "startDate": "2022-11-15T05:20:00.000Z",
            "endDate": "2022-11-15T10:40:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T05:20:00.000Z",
                            "endDate": "2022-11-15T06:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668489600000,
                            "endTime": 1668492600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.579,
                                    -14.574
                                ],
                                [
                                    141.21,
                                    -7.82
                                ],
                                [
                                    140.9793,
                                    -8.1733
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
                            "startDate": "2022-11-15T06:10:00.000Z",
                            "endDate": "2022-11-15T08:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668492600000,
                            "endTime": 1668499200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                140.9793,
                                -8.1733
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
                            "startDate": "2022-11-15T08:00:00.000Z",
                            "endDate": "2022-11-15T10:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668499200000,
                            "endTime": 1668508800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    126.59,
                                    -14.18
                                ],
                                [
                                    126.579,
                                    -14.574
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a151",
                "a133"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a175"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_186",
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
            "timestamp": "2022-09-25T16:12:41.211Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-189",
            "title": "Order item 189 Kinetic",
            "startDate": "2022-11-15T05:25:00.000Z",
            "endDate": "2022-11-15T07:25:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T06:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668489900000,
                            "endTime": 1668492900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    121.1967,
                                    -18.1747
                                ],
                                [
                                    133.1,
                                    -14.13
                                ],
                                [
                                    144.46,
                                    -9.64
                                ],
                                [
                                    144.648,
                                    -9.6247
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
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T06:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668492900000,
                            "endTime": 1668492900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                144.648,
                                -9.6247
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
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T07:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668492900000,
                            "endTime": 1668497100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    121.44,
                                    -18.06
                                ],
                                [
                                    121.1967,
                                    -18.1747
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a143"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_189",
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
            "timestamp": "2022-09-23T02:12:11.673Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-192",
            "title": "Order item 192 Asymmetric",
            "startDate": "2022-11-15T05:40:00.000Z",
            "endDate": "2022-11-15T06:10:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a107",
                "a129"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a172"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_192",
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
            "timestamp": "2022-09-25T01:55:42.925Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-195",
            "title": "Order item 195 Asymmetric",
            "startDate": "2022-11-15T05:55:00.000Z",
            "endDate": "2022-11-15T10:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668491700000,
                            "endTime": 1668494700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    144.21,
                                    -11.42
                                ],
                                [
                                    141.73,
                                    -12.09
                                ],
                                [
                                    138.53,
                                    -13.47
                                ],
                                [
                                    135.62,
                                    -14.57
                                ],
                                [
                                    136.121,
                                    -14.4905
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
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T09:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668494700000,
                            "endTime": 1668504300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        133.8469541414583,
                                        -12.257277883201652
                                    ],
                                    [
                                        133.8469541414583,
                                        -16.701415742972042
                                    ],
                                    [
                                        138.44110357380026,
                                        -16.701415742972042
                                    ],
                                    [
                                        138.44110357380026,
                                        -12.257277883201652
                                    ],
                                    [
                                        133.8469541414583,
                                        -12.257277883201652
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
                            "startDate": "2022-11-15T09:25:00.000Z",
                            "endDate": "2022-11-15T10:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668504300000,
                            "endTime": 1668506700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    142.24,
                                    -12.38
                                ],
                                [
                                    147.68,
                                    -9.96
                                ],
                                [
                                    147.5427,
                                    -9.9158
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a200"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_195",
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
            "timestamp": "2022-09-23T07:23:14.968Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-198",
            "title": "Order item 198 Transit",
            "startDate": "2022-11-15T05:55:00.000Z",
            "endDate": "2022-11-15T09:15:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668491700000,
                            "endTime": 1668494700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    141.18,
                                    -11.62
                                ],
                                [
                                    149.53,
                                    -9.73
                                ],
                                [
                                    149.2994,
                                    -10.1887
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
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668494700000,
                            "endTime": 1668495300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.2994,
                                -10.1887
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
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T09:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668495300000,
                            "endTime": 1668503700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    143.51,
                                    -11.09
                                ],
                                [
                                    138.87,
                                    -11.86
                                ],
                                [
                                    133.51,
                                    -13.34
                                ],
                                [
                                    133.3442,
                                    -13.013
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a133",
                "a136",
                "a155"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a172"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_198",
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
            "timestamp": "2022-09-26T02:34:47.802Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-201",
            "title": "Order item 201 Asymmetric",
            "startDate": "2022-11-15T05:55:00.000Z",
            "endDate": "2022-11-15T10:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668491700000,
                            "endTime": 1668494700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    139.3,
                                    -9.72
                                ],
                                [
                                    137.12,
                                    -1.9
                                ],
                                [
                                    137.4298,
                                    -1.926
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
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T08:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668494700000,
                            "endTime": 1668500100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.0674392195455,
                                        -1.56373567207989
                                    ],
                                    [
                                        137.0674392195455,
                                        -2.288187317516016
                                    ],
                                    [
                                        137.7923148867781,
                                        -2.288187317516016
                                    ],
                                    [
                                        137.7923148867781,
                                        -1.56373567207989
                                    ],
                                    [
                                        137.0674392195455,
                                        -1.56373567207989
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
                            "startDate": "2022-11-15T08:15:00.000Z",
                            "endDate": "2022-11-15T08:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668500100000,
                            "endTime": 1668500100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        133.43104389761226,
                                        2.0748264434985995
                                    ],
                                    [
                                        133.43104389761226,
                                        -5.917411959004167
                                    ],
                                    [
                                        141.4473726225948,
                                        -5.917411959004167
                                    ],
                                    [
                                        141.4473726225948,
                                        2.0748264434985995
                                    ],
                                    [
                                        133.43104389761226,
                                        2.0748264434985995
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
                            "startDate": "2022-11-15T08:15:00.000Z",
                            "endDate": "2022-11-15T10:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668500100000,
                            "endTime": 1668509700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.4298,
                                    -1.926
                                ],
                                [
                                    138.93,
                                    -6.68
                                ],
                                [
                                    139.56,
                                    -12.31
                                ],
                                [
                                    140.47,
                                    -16.66
                                ],
                                [
                                    140.9707,
                                    -17.0411
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a135",
                "a130"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a186"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_201",
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
            "timestamp": "2022-09-25T03:30:21.425Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-204",
            "title": "Order item 204 Kinetic",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T07:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T07:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668492900000,
                            "endTime": 1668495900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    136.72,
                                    -6.97
                                ],
                                [
                                    136.06,
                                    -9.9
                                ],
                                [
                                    135.69,
                                    -12.56
                                ],
                                [
                                    136.6,
                                    -14.92
                                ],
                                [
                                    136.121,
                                    -14.4905
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a167",
                "a196",
                "a197",
                "a172"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_204",
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
            "timestamp": "2022-09-28T18:09:55.840Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-207",
            "title": "Order item 207 Kinetic",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T12:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T07:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668492900000,
                            "endTime": 1668495900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    143.97,
                                    -14.51
                                ],
                                [
                                    144.85,
                                    -10.65
                                ],
                                [
                                    147.02,
                                    -6.5
                                ],
                                [
                                    146.7067,
                                    -6.2246
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
                            "startDate": "2022-11-15T07:05:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668495900000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.47148847635395,
                                        -4.992637270471772
                                    ],
                                    [
                                        145.47148847635395,
                                        -7.4536790610810835
                                    ],
                                    [
                                        147.94771237034382,
                                        -7.4536790610810835
                                    ],
                                    [
                                        147.94771237034382,
                                        -4.992637270471772
                                    ],
                                    [
                                        145.47148847635395,
                                        -4.992637270471772
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
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T10:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668498300000,
                            "endTime": 1668509700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.04058753111025,
                                        -2.549394624483074
                                    ],
                                    [
                                        143.04058753111025,
                                        -9.874173800527807
                                    ],
                                    [
                                        150.42432486926654,
                                        -9.874173800527807
                                    ],
                                    [
                                        150.42432486926654,
                                        -2.549394624483074
                                    ],
                                    [
                                        143.04058753111025,
                                        -2.549394624483074
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
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T12:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668509700000,
                            "endTime": 1668515700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    145.03,
                                    -10.8
                                ],
                                [
                                    143.46,
                                    -15.27
                                ],
                                [
                                    142.17,
                                    -19.46
                                ],
                                [
                                    142.1253,
                                    -19.3355
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a116",
                "a152",
                "a146",
                "a156"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_207",
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
            "timestamp": "2022-09-28T14:33:31.045Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-210",
            "title": "Order item 210 Transit",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T06:15:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a198",
                "a176"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_210",
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
            "timestamp": "2022-09-24T16:41:07.040Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-213",
            "title": "Order item 213 Transit",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T07:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T07:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668492900000,
                            "endTime": 1668495900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    138.9,
                                    -13.56
                                ],
                                [
                                    128.65,
                                    -16.45
                                ],
                                [
                                    118.69,
                                    -19.06
                                ],
                                [
                                    119.0578,
                                    -19.4518
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a168",
                "a179"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_213",
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
            "timestamp": "2022-09-25T08:32:43.826Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-216",
            "title": "Order item 216 Asymmetric",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T12:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T07:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668492900000,
                            "endTime": 1668495900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    140.05,
                                    -16.17
                                ],
                                [
                                    144.8,
                                    -12.68
                                ],
                                [
                                    149.83,
                                    -9.92
                                ],
                                [
                                    149.3719,
                                    -10.3237
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
                            "startDate": "2022-11-15T07:05:00.000Z",
                            "endDate": "2022-11-15T10:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668495900000,
                            "endTime": 1668507300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.91151978140627,
                                        -7.87716486225643
                                    ],
                                    [
                                        146.91151978140627,
                                        -12.751319062298753
                                    ],
                                    [
                                        151.87071575427646,
                                        -12.751319062298753
                                    ],
                                    [
                                        151.87071575427646,
                                        -7.87716486225643
                                    ],
                                    [
                                        146.91151978140627,
                                        -7.87716486225643
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
                            "startDate": "2022-11-15T10:15:00.000Z",
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668507300000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    144.35,
                                    -13.27
                                ],
                                [
                                    140.55,
                                    -16
                                ],
                                [
                                    135.04,
                                    -18.45
                                ],
                                [
                                    135.4363,
                                    -18.5329
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a156"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a178"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_216",
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
            "timestamp": "2022-09-22T06:08:21.403Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-219",
            "title": "Order item 219 Transit",
            "startDate": "2022-11-15T06:25:00.000Z",
            "endDate": "2022-11-15T10:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T07:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668493500000,
                            "endTime": 1668496500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    137.44,
                                    -2.56
                                ],
                                [
                                    137.2844,
                                    -2.7856
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
                            "startDate": "2022-11-15T07:15:00.000Z",
                            "endDate": "2022-11-15T07:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668496500000,
                            "endTime": 1668498900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                137.2844,
                                -2.7856
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
                            "startDate": "2022-11-15T07:55:00.000Z",
                            "endDate": "2022-11-15T10:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668498900000,
                            "endTime": 1668509100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    127.17,
                                    -12.19
                                ],
                                [
                                    116.58,
                                    -21.09
                                ],
                                [
                                    116.7521,
                                    -20.9262
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a117",
                "a118"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a185"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_219",
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
            "timestamp": "2022-09-23T17:27:59.770Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-222",
            "title": "Order item 222 Asymmetric",
            "startDate": "2022-11-15T06:45:00.000Z",
            "endDate": "2022-11-15T11:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T07:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668494700000,
                            "endTime": 1668497700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    129.15,
                                    -16.58
                                ],
                                [
                                    129.3162,
                                    -16.1699
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
                            "startDate": "2022-11-15T07:35:00.000Z",
                            "endDate": "2022-11-15T10:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668497700000,
                            "endTime": 1668506700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                129.3162,
                                -16.1699
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
                            "startDate": "2022-11-15T10:05:00.000Z",
                            "endDate": "2022-11-15T11:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668506700000,
                            "endTime": 1668510900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.3162,
                                    -16.1699
                                ],
                                [
                                    149.43,
                                    -9.89
                                ],
                                [
                                    149.2994,
                                    -10.1887
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a168",
                "a200",
                "a172",
                "a185"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_222",
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
            "timestamp": "2022-09-29T18:31:38.927Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-225",
            "title": "Order item 225 Transit",
            "startDate": "2022-11-15T06:45:00.000Z",
            "endDate": "2022-11-15T07:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T07:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668494700000,
                            "endTime": 1668497700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.1529,
                                    -17.0936
                                ],
                                [
                                    147.18,
                                    -9.78
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a136",
                "a118"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_225",
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
            "timestamp": "2022-09-23T17:19:18.875Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-228",
            "title": "Order item 228 Transit",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T09:45:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a181"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_228",
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
            "timestamp": "2022-09-22T05:50:59.614Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-231",
            "title": "Order item 231 Kinetic",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T09:55:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668495300000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    125.17,
                                    -13.38
                                ],
                                [
                                    131.67,
                                    -7.8
                                ],
                                [
                                    137.46,
                                    -2.94
                                ],
                                [
                                    137.2844,
                                    -2.7856
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
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T09:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668498300000,
                            "endTime": 1668506100000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                137.2844,
                                -2.7856
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
                            "startDate": "2022-11-15T09:55:00.000Z",
                            "endDate": "2022-11-15T09:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668506100000,
                            "endTime": 1668506100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    119.79,
                                    -18.7
                                ],
                                [
                                    119.7138,
                                    -18.9116
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a106",
                "a131"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_231",
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
            "timestamp": "2022-09-25T08:06:41.143Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-234",
            "title": "Order item 234 Kinetic",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T13:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668495300000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.7545,
                                    -5.607
                                ],
                                [
                                    142.15,
                                    -18.32
                                ],
                                [
                                    142.2515,
                                    -18.0243
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
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T09:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668498300000,
                            "endTime": 1668504300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        139.0794660968176,
                                        -14.93321726031082
                                    ],
                                    [
                                        139.0794660968176,
                                        -21.061886504491145
                                    ],
                                    [
                                        145.53594161032015,
                                        -21.061886504491145
                                    ],
                                    [
                                        145.53594161032015,
                                        -14.93321726031082
                                    ],
                                    [
                                        139.0794660968176,
                                        -14.93321726031082
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
                            "startDate": "2022-11-15T09:25:00.000Z",
                            "endDate": "2022-11-15T10:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668504300000,
                            "endTime": 1668508500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        140.83379757500413,
                                        -16.660926164402312
                                    ],
                                    [
                                        140.83379757500413,
                                        -19.37719209682859
                                    ],
                                    [
                                        143.6912436868177,
                                        -19.37719209682859
                                    ],
                                    [
                                        143.6912436868177,
                                        -16.660926164402312
                                    ],
                                    [
                                        140.83379757500413,
                                        -16.660926164402312
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
                            "startDate": "2022-11-15T10:35:00.000Z",
                            "endDate": "2022-11-15T13:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668508500000,
                            "endTime": 1668518700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    145.83,
                                    -6.08
                                ],
                                [
                                    145.7545,
                                    -5.607
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a168",
                "a176"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_234",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T16:06:23.462Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-237",
            "title": "Order item 237 Transit",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T08:05:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668495300000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    119.3,
                                    -19.34
                                ],
                                [
                                    119.0578,
                                    -19.4518
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
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T08:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668498300000,
                            "endTime": 1668499500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                119.0578,
                                -19.4518
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
                            "startDate": "2022-11-15T08:05:00.000Z",
                            "endDate": "2022-11-15T08:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668499500000,
                            "endTime": 1668499500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.0578,
                                    -19.4518
                                ],
                                [
                                    123.36,
                                    -14.95
                                ],
                                [
                                    128.55,
                                    -11.57
                                ],
                                [
                                    133.03,
                                    -6.91
                                ],
                                [
                                    136.79,
                                    -2.96
                                ],
                                [
                                    137.2844,
                                    -2.7856
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a192",
                "a195",
                "a171",
                "a197"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_237",
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
            "timestamp": "2022-09-28T13:50:06.573Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-240",
            "title": "Order item 240 Transit",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T06:55:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a197",
                "a196",
                "a167",
                "a188"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_240",
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
            "timestamp": "2022-09-28T17:17:50.473Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-243",
            "title": "Order item 243 Asymmetric",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T07:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668495300000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    133.92,
                                    -6.95
                                ],
                                [
                                    129.61,
                                    -12.05
                                ],
                                [
                                    130.0699,
                                    -12.4965
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a188",
                "a178"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_243",
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
            "timestamp": "2022-09-25T02:29:35.164Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-246",
            "title": "Order item 246 Asymmetric",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T09:15:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a197",
                "a185",
                "a180"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_246",
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
            "timestamp": "2022-09-26T01:25:20.646Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-249",
            "title": "Order item 249 Kinetic",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T09:45:00.000Z",
            "location": [],
            "activity": "Kinetic",
            "ownAssets": [
                "a144"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_249",
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
            "timestamp": "2022-09-23T06:05:06.918Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-252",
            "title": "Order item 252 Asymmetric",
            "startDate": "2022-11-15T07:00:00.000Z",
            "endDate": "2022-11-15T07:50:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a166",
                "a178"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_252",
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
            "timestamp": "2022-09-25T00:28:53.981Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-255",
            "title": "Order item 255 Asymmetric",
            "startDate": "2022-11-15T07:00:00.000Z",
            "endDate": "2022-11-15T12:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T07:00:00.000Z",
                            "endDate": "2022-11-15T07:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668495600000,
                            "endTime": 1668498600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    137.62,
                                    -14.38
                                ],
                                [
                                    149.44,
                                    -10.64
                                ],
                                [
                                    149.3719,
                                    -10.3237
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
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T10:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668498600000,
                            "endTime": 1668508800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.70625298656904,
                                        -6.661929648494549
                                    ],
                                    [
                                        145.70625298656904,
                                        -13.94316564832977
                                    ],
                                    [
                                        153.12345287730523,
                                        -13.94316564832977
                                    ],
                                    [
                                        153.12345287730523,
                                        -6.661929648494549
                                    ],
                                    [
                                        145.70625298656904,
                                        -6.661929648494549
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
                            "startDate": "2022-11-15T10:40:00.000Z",
                            "endDate": "2022-11-15T12:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668508800000,
                            "endTime": 1668516000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    141.53,
                                    -13.22
                                ],
                                [
                                    133.75,
                                    -15.06
                                ],
                                [
                                    125.26,
                                    -17.62
                                ],
                                [
                                    125.2749,
                                    -17.6467
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a159"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_255",
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
            "timestamp": "2022-09-23T00:36:41.834Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-258",
            "title": "Order item 258 Transit",
            "startDate": "2022-11-15T07:10:00.000Z",
            "endDate": "2022-11-15T14:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T07:10:00.000Z",
                            "endDate": "2022-11-15T08:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668496200000,
                            "endTime": 1668499200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4245,
                                    -19.9708
                                ],
                                [
                                    147.69,
                                    -16.26
                                ],
                                [
                                    148.01,
                                    -13.51
                                ],
                                [
                                    149.62,
                                    -10.48
                                ],
                                [
                                    149.2994,
                                    -10.1887
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
                            "startDate": "2022-11-15T08:00:00.000Z",
                            "endDate": "2022-11-15T10:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668499200000,
                            "endTime": 1668507600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        148.96684621032304,
                                        -9.860891066776254
                                    ],
                                    [
                                        148.96684621032304,
                                        -10.51617219336611
                                    ],
                                    [
                                        149.63263805384713,
                                        -10.51617219336611
                                    ],
                                    [
                                        149.63263805384713,
                                        -9.860891066776254
                                    ],
                                    [
                                        148.96684621032304,
                                        -9.860891066776254
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
                            "startDate": "2022-11-15T10:20:00.000Z",
                            "endDate": "2022-11-15T11:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668507600000,
                            "endTime": 1668510600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.9864780159077,
                                        -6.88283616199734
                                    ],
                                    [
                                        145.9864780159077,
                                        -13.460525610600351
                                    ],
                                    [
                                        152.68142647333008,
                                        -13.460525610600351
                                    ],
                                    [
                                        152.68142647333008,
                                        -6.88283616199734
                                    ],
                                    [
                                        145.9864780159077,
                                        -6.88283616199734
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
                            "startDate": "2022-11-15T11:10:00.000Z",
                            "endDate": "2022-11-15T14:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668510600000,
                            "endTime": 1668520800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    147.62,
                                    -15.05
                                ],
                                [
                                    146.48,
                                    -20.39
                                ],
                                [
                                    146.4245,
                                    -19.9708
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a130",
                "a133"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_258",
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
            "timestamp": "2022-09-25T14:28:30.478Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-261",
            "title": "Order item 261 Asymmetric",
            "startDate": "2022-11-15T07:20:00.000Z",
            "endDate": "2022-11-15T09:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T07:20:00.000Z",
                            "endDate": "2022-11-15T08:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668496800000,
                            "endTime": 1668499800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    141.72,
                                    -12.87
                                ],
                                [
                                    144.15,
                                    -9.31
                                ],
                                [
                                    144.648,
                                    -9.6247
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
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668499800000,
                            "endTime": 1668502800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                144.648,
                                -9.6247
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
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    143.36,
                                    -11.2
                                ],
                                [
                                    141.9,
                                    -12.96
                                ],
                                [
                                    139.72,
                                    -14.43
                                ],
                                [
                                    138.83,
                                    -15.62
                                ],
                                [
                                    138.7422,
                                    -15.9904
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a130",
                "a125"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_261",
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
            "timestamp": "2022-09-24T10:04:19.913Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-264",
            "title": "Order item 264 Kinetic",
            "startDate": "2022-11-15T07:40:00.000Z",
            "endDate": "2022-11-15T10:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T08:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668498000000,
                            "endTime": 1668501000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    134.8,
                                    -12.81
                                ],
                                [
                                    131.37,
                                    -19.96
                                ],
                                [
                                    131.2525,
                                    -19.8426
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
                            "startDate": "2022-11-15T08:30:00.000Z",
                            "endDate": "2022-11-15T09:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668501000000,
                            "endTime": 1668503400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                131.2525,
                                -19.8426
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
                            "startDate": "2022-11-15T09:10:00.000Z",
                            "endDate": "2022-11-15T10:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668503400000,
                            "endTime": 1668506400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    131.2525,
                                    -19.8426
                                ],
                                [
                                    138.16,
                                    -6.61
                                ],
                                [
                                    138.5853,
                                    -6.3233
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a200",
                "a192",
                "a193",
                "a167"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_264",
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
            "timestamp": "2022-09-27T19:24:10.137Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-267",
            "title": "Order item 267 Kinetic",
            "startDate": "2022-11-15T07:40:00.000Z",
            "endDate": "2022-11-15T11:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T08:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668498000000,
                            "endTime": 1668501000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    141.45,
                                    -11.73
                                ],
                                [
                                    150.06,
                                    -10.94
                                ],
                                [
                                    150.1536,
                                    -10.7176
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
                            "startDate": "2022-11-15T08:30:00.000Z",
                            "endDate": "2022-11-15T10:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668501000000,
                            "endTime": 1668507600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                150.1536,
                                -10.7176
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
                            "startDate": "2022-11-15T10:20:00.000Z",
                            "endDate": "2022-11-15T11:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668507600000,
                            "endTime": 1668511800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    133.36,
                                    -12.61
                                ],
                                [
                                    133.3442,
                                    -13.013
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a109",
                "a145",
                "a138"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a192"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_267",
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
            "timestamp": "2022-09-27T10:28:01.153Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-270",
            "title": "Order item 270 Asymmetric",
            "startDate": "2022-11-15T07:50:00.000Z",
            "endDate": "2022-11-15T13:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T08:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668498600000,
                            "endTime": 1668501600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    136.83,
                                    -9.1
                                ],
                                [
                                    133.47,
                                    -11.01
                                ],
                                [
                                    130.39,
                                    -11.63
                                ],
                                [
                                    130.7986,
                                    -11.9046
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
                            "startDate": "2022-11-15T08:40:00.000Z",
                            "endDate": "2022-11-15T11:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668501600000,
                            "endTime": 1668513000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        127.41781541030745,
                                        -8.54097542444595
                                    ],
                                    [
                                        127.41781541030745,
                                        -15.226964795934803
                                    ],
                                    [
                                        134.26363633558438,
                                        -15.226964795934803
                                    ],
                                    [
                                        134.26363633558438,
                                        -8.54097542444595
                                    ],
                                    [
                                        127.41781541030745,
                                        -8.54097542444595
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
                            "startDate": "2022-11-15T11:50:00.000Z",
                            "endDate": "2022-11-15T13:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513000000,
                            "endTime": 1668517800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    130.7986,
                                    -11.9046
                                ],
                                [
                                    133.42,
                                    -10.92
                                ],
                                [
                                    136.22,
                                    -9.76
                                ],
                                [
                                    139.31,
                                    -8.31
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a192"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_270",
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
            "timestamp": "2022-09-23T07:15:52.959Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-273",
            "title": "Order item 273 Transit",
            "startDate": "2022-11-15T07:50:00.000Z",
            "endDate": "2022-11-15T11:10:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T08:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668498600000,
                            "endTime": 1668501600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    141.48,
                                    -12.06
                                ],
                                [
                                    149.41,
                                    -10.46
                                ],
                                [
                                    149.2994,
                                    -10.1887
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
                            "startDate": "2022-11-15T08:40:00.000Z",
                            "endDate": "2022-11-15T09:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668501600000,
                            "endTime": 1668504000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.2994,
                                -10.1887
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
                            "startDate": "2022-11-15T09:20:00.000Z",
                            "endDate": "2022-11-15T11:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668504000000,
                            "endTime": 1668510600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    143.47,
                                    -11.09
                                ],
                                [
                                    138.72,
                                    -11.93
                                ],
                                [
                                    133.24,
                                    -13.49
                                ],
                                [
                                    132.9811,
                                    -13.2215
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a158",
                "a118"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a172"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_273",
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
            "timestamp": "2022-09-23T17:47:45.555Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-276",
            "title": "Order item 276 Asymmetric",
            "startDate": "2022-11-15T07:50:00.000Z",
            "endDate": "2022-11-15T12:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T08:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668498600000,
                            "endTime": 1668501600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    143.0924,
                                    -18.0959
                                ],
                                [
                                    143.2,
                                    -15.15
                                ],
                                [
                                    143.27,
                                    -12.24
                                ],
                                [
                                    143.63,
                                    -10.05
                                ],
                                [
                                    144.27,
                                    -6.57
                                ],
                                [
                                    144.4062,
                                    -6.8859
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
                            "startDate": "2022-11-15T08:40:00.000Z",
                            "endDate": "2022-11-15T10:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668501600000,
                            "endTime": 1668509400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.3364705775138,
                                        -5.8204949512159905
                                    ],
                                    [
                                        143.3364705775138,
                                        -7.948917181301721
                                    ],
                                    [
                                        145.48073942251517,
                                        -7.948917181301721
                                    ],
                                    [
                                        145.48073942251517,
                                        -5.8204949512159905
                                    ],
                                    [
                                        143.3364705775138,
                                        -5.8204949512159905
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
                            "startDate": "2022-11-15T10:50:00.000Z",
                            "endDate": "2022-11-15T12:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668509400000,
                            "endTime": 1668516600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    143.56,
                                    -10.83
                                ],
                                [
                                    143.96,
                                    -14.55
                                ],
                                [
                                    142.63,
                                    -17.98
                                ],
                                [
                                    143.0924,
                                    -18.0959
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a145",
                "a153",
                "a120",
                "a101"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_276",
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
            "timestamp": "2022-09-28T18:03:38.942Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-279",
            "title": "Order item 279 Asymmetric",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T14:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668499800000,
                            "endTime": 1668502800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    130.16,
                                    -12.35
                                ],
                                [
                                    129.7416,
                                    -12.6383
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
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T11:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502800000,
                            "endTime": 1668511800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                129.7416,
                                -12.6383
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
                            "startDate": "2022-11-15T11:30:00.000Z",
                            "endDate": "2022-11-15T14:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668511800000,
                            "endTime": 1668523200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    134.17,
                                    -11.8
                                ],
                                [
                                    139.52,
                                    -11.04
                                ],
                                [
                                    144.16,
                                    -11.01
                                ],
                                [
                                    148.08,
                                    -10.68
                                ],
                                [
                                    148.5732,
                                    -10.4337
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a161"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_279",
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
            "timestamp": "2022-09-21T16:03:33.120Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-282",
            "title": "Order item 282 Asymmetric",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T11:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668499800000,
                            "endTime": 1668502800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    130.37,
                                    -12.55
                                ],
                                [
                                    132.89,
                                    -11.45
                                ],
                                [
                                    135.69,
                                    -10.08
                                ],
                                [
                                    139.78,
                                    -8.42
                                ],
                                [
                                    139.3171,
                                    -8.0633
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
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                139.3171,
                                -8.0633
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T11:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668505800000,
                            "endTime": 1668513000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    135.99,
                                    -9.53
                                ],
                                [
                                    132.61,
                                    -11.06
                                ],
                                [
                                    129.51,
                                    -13.31
                                ],
                                [
                                    126.69,
                                    -14.28
                                ],
                                [
                                    126.839,
                                    -14.6533
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a153",
                "a145",
                "a152"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_282",
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
            "timestamp": "2022-09-27T11:47:28.088Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-285",
            "title": "Order item 285 Transit",
            "startDate": "2022-11-15T08:15:00.000Z",
            "endDate": "2022-11-15T11:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T08:15:00.000Z",
                            "endDate": "2022-11-15T09:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668500100000,
                            "endTime": 1668503100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    147.07,
                                    -17.55
                                ],
                                [
                                    147.84,
                                    -15.1
                                ],
                                [
                                    148.9,
                                    -13.36
                                ],
                                [
                                    150.24,
                                    -10.33
                                ],
                                [
                                    150.1536,
                                    -10.7176
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
                            "startDate": "2022-11-15T09:05:00.000Z",
                            "endDate": "2022-11-15T09:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668503100000,
                            "endTime": 1668503100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        147.04870623558784,
                                        -7.624659069376766
                                    ],
                                    [
                                        147.04870623558784,
                                        -13.779170875173573
                                    ],
                                    [
                                        153.32229662147154,
                                        -13.779170875173573
                                    ],
                                    [
                                        153.32229662147154,
                                        -7.624659069376766
                                    ],
                                    [
                                        147.04870623558784,
                                        -7.624659069376766
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
                            "startDate": "2022-11-15T09:05:00.000Z",
                            "endDate": "2022-11-15T11:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668503100000,
                            "endTime": 1668513300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    146.02,
                                    -19.8
                                ],
                                [
                                    146.1087,
                                    -20.2046
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a118",
                "a158",
                "a157",
                "a115"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a192"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_285",
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
            "timestamp": "2022-09-29T13:15:23.846Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-288",
            "title": "Order item 288 Asymmetric",
            "startDate": "2022-11-15T08:35:00.000Z",
            "endDate": "2022-11-15T13:55:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T08:35:00.000Z",
                            "endDate": "2022-11-15T09:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668501300000,
                            "endTime": 1668504300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.571,
                                    -21.941
                                ],
                                [
                                    141.28,
                                    -18.62
                                ],
                                [
                                    143.91,
                                    -16.4
                                ],
                                [
                                    145.82,
                                    -12.89
                                ],
                                [
                                    147.01,
                                    -10.11
                                ],
                                [
                                    147.5097,
                                    -9.88
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
                            "startDate": "2022-11-15T09:25:00.000Z",
                            "endDate": "2022-11-15T12:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668504300000,
                            "endTime": 1668515700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                147.5097,
                                -9.88
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
                            "startDate": "2022-11-15T12:35:00.000Z",
                            "endDate": "2022-11-15T13:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668515700000,
                            "endTime": 1668520500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    143.66,
                                    -16.09
                                ],
                                [
                                    139.28,
                                    -21.86
                                ],
                                [
                                    139.571,
                                    -21.941
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a115",
                "a147",
                "a138",
                "a144"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a199"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_288",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T20:27:20.395Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-291",
            "title": "Order item 291 Transit",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T14:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T08:50:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.171,
                                    -8.2398
                                ],
                                [
                                    141.07,
                                    -10.03
                                ],
                                [
                                    134.26,
                                    -11.55
                                ],
                                [
                                    127.72,
                                    -13.79
                                ],
                                [
                                    128.2265,
                                    -13.8618
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
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T12:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505200000,
                            "endTime": 1668516600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        127.69704994972552,
                                        -13.346078647346088
                                    ],
                                    [
                                        127.69704994972552,
                                        -14.376378294170541
                                    ],
                                    [
                                        128.75830468805347,
                                        -14.376378294170541
                                    ],
                                    [
                                        128.75830468805347,
                                        -13.346078647346088
                                    ],
                                    [
                                        127.69704994972552,
                                        -13.346078647346088
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
                            "startDate": "2022-11-15T12:50:00.000Z",
                            "endDate": "2022-11-15T14:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668516600000,
                            "endTime": 1668523800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    146.67,
                                    -8
                                ],
                                [
                                    147.171,
                                    -8.2398
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a190"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_291",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T09:23:17.735Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-294",
            "title": "Order item 294 Transit",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T10:50:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a192",
                "a200",
                "a181",
                "a175"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_294",
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
            "timestamp": "2022-09-29T20:03:15.865Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-297",
            "title": "Order item 297 Asymmetric",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T12:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T08:50:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    146.44,
                                    -14.34
                                ],
                                [
                                    143.21,
                                    -18.48
                                ],
                                [
                                    143.0924,
                                    -18.0959
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
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                143.0924,
                                -18.0959
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
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T12:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505200000,
                            "endTime": 1668515400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    143.0924,
                                    -18.0959
                                ],
                                [
                                    145.16,
                                    -16.04
                                ],
                                [
                                    147.5,
                                    -12.73
                                ],
                                [
                                    150.13,
                                    -11.12
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a175",
                "a178"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_297",
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
            "timestamp": "2022-09-25T04:27:14.785Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-300",
            "title": "Order item 300 Asymmetric",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T12:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T08:50:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    138.19,
                                    -10.92
                                ],
                                [
                                    135.8,
                                    -14.27
                                ],
                                [
                                    136.121,
                                    -14.4905
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
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T12:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505200000,
                            "endTime": 1668514800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                136.121,
                                -14.4905
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
                            "startDate": "2022-11-15T12:20:00.000Z",
                            "endDate": "2022-11-15T12:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668514800000,
                            "endTime": 1668516000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    141.06,
                                    -7.96
                                ],
                                [
                                    140.9793,
                                    -8.1733
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a180",
                "a178"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_300",
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
            "timestamp": "2022-09-25T02:35:14.497Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-303",
            "title": "Order item 303 Kinetic",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T12:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T08:50:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    136.52,
                                    -14.51
                                ],
                                [
                                    136.121,
                                    -14.4905
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
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505200000,
                            "endTime": 1668513600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        135.4357981515902,
                                        -13.824151303660114
                                    ],
                                    [
                                        135.4357981515902,
                                        -15.154851598605767
                                    ],
                                    [
                                        136.8103271103413,
                                        -15.154851598605767
                                    ],
                                    [
                                        136.8103271103413,
                                        -13.824151303660114
                                    ],
                                    [
                                        135.4357981515902,
                                        -13.824151303660114
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
                            "startDate": "2022-11-15T12:00:00.000Z",
                            "endDate": "2022-11-15T12:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513600000,
                            "endTime": 1668514200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        135.25034568361292,
                                        -13.642804275570978
                                    ],
                                    [
                                        135.25034568361292,
                                        -15.334966041221413
                                    ],
                                    [
                                        136.9983254753054,
                                        -15.334966041221413
                                    ],
                                    [
                                        136.9983254753054,
                                        -13.642804275570978
                                    ],
                                    [
                                        135.25034568361292,
                                        -13.642804275570978
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
                            "startDate": "2022-11-15T12:10:00.000Z",
                            "endDate": "2022-11-15T12:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668514200000,
                            "endTime": 1668516600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    141.29,
                                    -8.67
                                ],
                                [
                                    141.6774,
                                    -8.4284
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a169",
                "a199",
                "a165",
                "a177"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_303",
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
            "timestamp": "2022-09-29T14:27:14.998Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-306",
            "title": "Order item 306 Kinetic",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T13:20:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T08:50:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.4415,
                                    -20.0229
                                ],
                                [
                                    141.25,
                                    -17.17
                                ],
                                [
                                    143.94,
                                    -14.45
                                ],
                                [
                                    145.9,
                                    -12.45
                                ],
                                [
                                    147.16,
                                    -10.16
                                ],
                                [
                                    147.5097,
                                    -9.88
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
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T12:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668505200000,
                            "endTime": 1668514800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        144.29772254235596,
                                        -6.674450869322263
                                    ],
                                    [
                                        144.29772254235596,
                                        -13.054521765165639
                                    ],
                                    [
                                        150.78461294199715,
                                        -13.054521765165639
                                    ],
                                    [
                                        150.78461294199715,
                                        -6.674450869322263
                                    ],
                                    [
                                        144.29772254235596,
                                        -6.674450869322263
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
                            "startDate": "2022-11-15T12:20:00.000Z",
                            "endDate": "2022-11-15T13:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668514800000,
                            "endTime": 1668518400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    143.27,
                                    -14.85
                                ],
                                [
                                    139.51,
                                    -20.35
                                ],
                                [
                                    139.4415,
                                    -20.0229
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a129"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_306",
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
            "timestamp": "2022-09-22T00:03:16.290Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-309",
            "title": "Order item 309 Transit",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T11:50:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a170",
                "a190",
                "a179"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_309",
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
            "timestamp": "2022-09-27T07:23:18.373Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-312",
            "title": "Order item 312 Kinetic",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T11:40:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T08:50:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    133.94,
                                    -14.66
                                ],
                                [
                                    142.11,
                                    -12.18
                                ],
                                [
                                    149.57,
                                    -10.42
                                ],
                                [
                                    149.3998,
                                    -10.1238
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
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T10:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668505200000,
                            "endTime": 1668507000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.3998,
                                -10.1238
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
                            "startDate": "2022-11-15T10:10:00.000Z",
                            "endDate": "2022-11-15T11:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668507000000,
                            "endTime": 1668512400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3998,
                                    -10.1238
                                ],
                                [
                                    144.26,
                                    -12.09
                                ],
                                [
                                    137.92,
                                    -13.26
                                ],
                                [
                                    132.87,
                                    -15.14
                                ],
                                [
                                    127.11,
                                    -16.74
                                ],
                                [
                                    126.8957,
                                    -17.0157
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a135",
                "a154",
                "a134",
                "a129"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a190"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_312",
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
            "timestamp": "2022-09-28T20:27:21.246Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-315",
            "title": "Order item 315 Transit",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T10:50:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a178",
                "a187",
                "a166"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_315",
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
            "timestamp": "2022-09-26T15:15:24.910Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-318",
            "title": "Order item 318 Kinetic",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T09:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T08:50:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    121.35,
                                    -18.17
                                ],
                                [
                                    121.6797,
                                    -18.0415
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a195",
                "a197",
                "a171",
                "a178"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_318",
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
            "timestamp": "2022-09-28T23:47:29.364Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-321",
            "title": "Order item 321 Kinetic",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T09:00:00.000Z",
            "location": [],
            "activity": "Kinetic",
            "ownAssets": [
                "a151",
                "a146",
                "a155"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_321",
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
            "timestamp": "2022-09-27T14:03:34.609Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-324",
            "title": "Order item 324 Asymmetric",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T16:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T09:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502500000,
                            "endTime": 1668505500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    142.65,
                                    -7.42
                                ],
                                [
                                    138.45,
                                    -8.77
                                ],
                                [
                                    134.53,
                                    -10.83
                                ],
                                [
                                    130.89,
                                    -11.61
                                ],
                                [
                                    130.7986,
                                    -11.9046
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
                            "startDate": "2022-11-15T09:45:00.000Z",
                            "endDate": "2022-11-15T10:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505500000,
                            "endTime": 1668509100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        129.006245898473,
                                        -10.13452524726527
                                    ],
                                    [
                                        129.006245898473,
                                        -13.663210168931267
                                    ],
                                    [
                                        132.61438095779783,
                                        -13.663210168931267
                                    ],
                                    [
                                        132.61438095779783,
                                        -10.13452524726527
                                    ],
                                    [
                                        129.006245898473,
                                        -10.13452524726527
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
                            "startDate": "2022-11-15T10:45:00.000Z",
                            "endDate": "2022-11-15T13:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509100000,
                            "endTime": 1668519300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        127.9827686758668,
                                        -9.110209682073215
                                    ],
                                    [
                                        127.9827686758668,
                                        -14.670484510341208
                                    ],
                                    [
                                        133.67265711373943,
                                        -14.670484510341208
                                    ],
                                    [
                                        133.67265711373943,
                                        -9.110209682073215
                                    ],
                                    [
                                        127.9827686758668,
                                        -9.110209682073215
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
                            "startDate": "2022-11-15T13:35:00.000Z",
                            "endDate": "2022-11-15T16:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668519300000,
                            "endTime": 1668529500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    130.7986,
                                    -11.9046
                                ],
                                [
                                    136.43,
                                    -9.97
                                ],
                                [
                                    141.31,
                                    -7.8
                                ],
                                [
                                    146.47,
                                    -6.35
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a176"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_324",
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
            "timestamp": "2022-09-22T10:03:40.645Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-327",
            "title": "Order item 327 Asymmetric",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T09:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T09:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668502500000,
                            "endTime": 1668505500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    122.0714,
                                    -17.8384
                                ],
                                [
                                    127.05,
                                    -12.37
                                ],
                                [
                                    132.28,
                                    -7.66
                                ],
                                [
                                    136.79,
                                    -2.67
                                ],
                                [
                                    137.2844,
                                    -2.7856
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a130"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_327",
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
            "timestamp": "2022-09-21T19:47:47.470Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-330",
            "title": "Order item 330 Kinetic",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T14:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T09:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502500000,
                            "endTime": 1668505500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    141.95,
                                    -12.09
                                ],
                                [
                                    134.58,
                                    -12.83
                                ],
                                [
                                    126.5,
                                    -14.28
                                ],
                                [
                                    126.839,
                                    -14.6533
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
                            "startDate": "2022-11-15T09:45:00.000Z",
                            "endDate": "2022-11-15T12:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505500000,
                            "endTime": 1668515700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        124.10639454250126,
                                        -11.963954416075632
                                    ],
                                    [
                                        124.10639454250126,
                                        -17.309965256519728
                                    ],
                                    [
                                        129.63911908794074,
                                        -17.309965256519728
                                    ],
                                    [
                                        129.63911908794074,
                                        -11.963954416075632
                                    ],
                                    [
                                        124.10639454250126,
                                        -11.963954416075632
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
                            "startDate": "2022-11-15T12:35:00.000Z",
                            "endDate": "2022-11-15T13:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668515700000,
                            "endTime": 1668518700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        126.3447702223223,
                                        -14.173592940851677
                                    ],
                                    [
                                        126.3447702223223,
                                        -15.131959109303862
                                    ],
                                    [
                                        127.33539609424265,
                                        -15.131959109303862
                                    ],
                                    [
                                        127.33539609424265,
                                        -14.173592940851677
                                    ],
                                    [
                                        126.3447702223223,
                                        -14.173592940851677
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
                            "startDate": "2022-11-15T13:25:00.000Z",
                            "endDate": "2022-11-15T14:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668518700000,
                            "endTime": 1668523500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    149.08,
                                    -10.39
                                ],
                                [
                                    149.3719,
                                    -10.3237
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a166",
                "a181",
                "a172"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_330",
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
            "timestamp": "2022-09-25T19:15:55.087Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-333",
            "title": "Order item 333 Kinetic",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T09:55:00.000Z",
            "location": [],
            "activity": "Kinetic",
            "ownAssets": [
                "a117",
                "a135",
                "a110"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a185"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_333",
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
            "timestamp": "2022-09-26T00:28:03.494Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-336",
            "title": "Order item 336 Transit",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T09:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T09:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502500000,
                            "endTime": 1668505500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    139.33,
                                    -13.33
                                ],
                                [
                                    129.46,
                                    -16.38
                                ],
                                [
                                    119.88,
                                    -19.15
                                ],
                                [
                                    119.7138,
                                    -18.9116
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a199"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_336",
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
            "timestamp": "2022-09-22T11:24:12.691Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-339",
            "title": "Order item 339 Transit",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T14:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T09:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502500000,
                            "endTime": 1668505500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    146.63,
                                    -12.6
                                ],
                                [
                                    145.57,
                                    -15.52
                                ],
                                [
                                    143.79,
                                    -18.15
                                ],
                                [
                                    143.29,
                                    -20.51
                                ],
                                [
                                    142.9809,
                                    -20.6715
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
                            "startDate": "2022-11-15T09:45:00.000Z",
                            "endDate": "2022-11-15T11:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505500000,
                            "endTime": 1668510300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                142.9809,
                                -20.6715
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
                            "startDate": "2022-11-15T11:05:00.000Z",
                            "endDate": "2022-11-15T14:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668510300000,
                            "endTime": 1668521100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    143.81,
                                    -17.82
                                ],
                                [
                                    145.64,
                                    -14.98
                                ],
                                [
                                    146.76,
                                    -12.85
                                ],
                                [
                                    147.16,
                                    -9.44
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a172"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_339",
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
            "timestamp": "2022-09-23T12:04:22.679Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-342",
            "title": "Order item 342 Asymmetric",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T09:55:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a107",
                "a155",
                "a105",
                "a130"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a172"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_342",
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
            "timestamp": "2022-09-29T02:28:33.458Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-345",
            "title": "Order item 345 Transit",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T13:20:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    131.93,
                                    -15.13
                                ],
                                [
                                    116.71,
                                    -20.96
                                ],
                                [
                                    116.7521,
                                    -20.9262
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T12:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505800000,
                            "endTime": 1668515400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                116.7521,
                                -20.9262
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
                            "startDate": "2022-11-15T12:30:00.000Z",
                            "endDate": "2022-11-15T13:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668515400000,
                            "endTime": 1668518400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    147.35,
                                    -10.03
                                ],
                                [
                                    147.5427,
                                    -9.9158
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a178"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_345",
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
            "timestamp": "2022-09-22T14:36:45.027Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-348",
            "title": "Order item 348 Transit",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T09:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    140.3,
                                    -14.05
                                ],
                                [
                                    141.87,
                                    -12.1
                                ],
                                [
                                    143.73,
                                    -9.86
                                ],
                                [
                                    145.87,
                                    -8.35
                                ],
                                [
                                    145.878,
                                    -8.4283
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a126",
                "a155",
                "a145",
                "a151"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_348",
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
            "timestamp": "2022-09-29T00:28:57.386Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-351",
            "title": "Order item 351 Kinetic",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T12:50:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.9287,
                                    -3.3935
                                ],
                                [
                                    136.58,
                                    -6.02
                                ],
                                [
                                    133.4,
                                    -9.47
                                ],
                                [
                                    129.52,
                                    -12.65
                                ],
                                [
                                    129.7416,
                                    -12.6383
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T10:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505800000,
                            "endTime": 1668508200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                129.7416,
                                -12.6383
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
                            "startDate": "2022-11-15T10:30:00.000Z",
                            "endDate": "2022-11-15T12:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668508200000,
                            "endTime": 1668516600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    134.76,
                                    -7.91
                                ],
                                [
                                    140.2,
                                    -3.78
                                ],
                                [
                                    139.9287,
                                    -3.3935
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a195"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_351",
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
            "timestamp": "2022-09-23T08:05:10.536Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-354",
            "title": "Order item 354 Kinetic",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T14:20:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    117.36,
                                    -21.02
                                ],
                                [
                                    117.7434,
                                    -21.0232
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T11:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505800000,
                            "endTime": 1668512400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        116.76847437980435,
                                        -20.10489219546109
                                    ],
                                    [
                                        116.76847437980435,
                                        -21.935884089010095
                                    ],
                                    [
                                        118.7303740133179,
                                        -21.935884089010095
                                    ],
                                    [
                                        118.7303740133179,
                                        -20.10489219546109
                                    ],
                                    [
                                        116.76847437980435,
                                        -20.10489219546109
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
                            "startDate": "2022-11-15T11:40:00.000Z",
                            "endDate": "2022-11-15T11:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512400000,
                            "endTime": 1668513000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        116.43501765433541,
                                        -19.787036459250732
                                    ],
                                    [
                                        116.43501765433541,
                                        -22.24919199795882
                                    ],
                                    [
                                        119.07357249727696,
                                        -22.24919199795882
                                    ],
                                    [
                                        119.07357249727696,
                                        -19.787036459250732
                                    ],
                                    [
                                        116.43501765433541,
                                        -19.787036459250732
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
                            "startDate": "2022-11-15T11:50:00.000Z",
                            "endDate": "2022-11-15T14:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513000000,
                            "endTime": 1668522000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    146.91,
                                    -5.8
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a195"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_354",
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
            "timestamp": "2022-09-22T05:25:24.477Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-357",
            "title": "Order item 357 Asymmetric",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T15:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    142.96,
                                    -10.64
                                ],
                                [
                                    139.29,
                                    -13.98
                                ],
                                [
                                    135.9,
                                    -18.03
                                ],
                                [
                                    135.4363,
                                    -18.5329
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T13:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505800000,
                            "endTime": 1668517200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        132.2604509771805,
                                        -15.44485318190864
                                    ],
                                    [
                                        132.2604509771805,
                                        -21.565966401622003
                                    ],
                                    [
                                        138.7280132048134,
                                        -21.565966401622003
                                    ],
                                    [
                                        138.7280132048134,
                                        -15.44485318190864
                                    ],
                                    [
                                        132.2604509771805,
                                        -15.44485318190864
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
                            "startDate": "2022-11-15T13:00:00.000Z",
                            "endDate": "2022-11-15T15:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668517200000,
                            "endTime": 1668526800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    147.14,
                                    -5.91
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a177",
                "a180"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_357",
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
            "timestamp": "2022-09-25T16:29:39.208Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-360",
            "title": "Order item 360 Asymmetric",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T12:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.2438,
                                    -5.6573
                                ],
                                [
                                    140.02,
                                    -9.47
                                ],
                                [
                                    140.97,
                                    -13.12
                                ],
                                [
                                    141.21,
                                    -17.49
                                ],
                                [
                                    140.9707,
                                    -17.0411
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T11:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505800000,
                            "endTime": 1668512400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        138.07570496063897,
                                        -14.214008126796909
                                    ],
                                    [
                                        138.07570496063897,
                                        -19.825961484358242
                                    ],
                                    [
                                        143.95396630121235,
                                        -19.825961484358242
                                    ],
                                    [
                                        143.95396630121235,
                                        -14.214008126796909
                                    ],
                                    [
                                        138.07570496063897,
                                        -14.214008126796909
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
                            "startDate": "2022-11-15T11:40:00.000Z",
                            "endDate": "2022-11-15T12:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512400000,
                            "endTime": 1668516000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    140.53,
                                    -11.26
                                ],
                                [
                                    140.51,
                                    -6.06
                                ],
                                [
                                    140.2438,
                                    -5.6573
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a181",
                "a179"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_360",
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
            "timestamp": "2022-09-25T09:17:54.729Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-363",
            "title": "Order item 363 Kinetic",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T13:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    139.33,
                                    -11.31
                                ],
                                [
                                    142.58,
                                    -18.29
                                ],
                                [
                                    142.2515,
                                    -18.0243
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T10:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505800000,
                            "endTime": 1668507600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        141.70724273596667,
                                        -17.504483305281
                                    ],
                                    [
                                        141.70724273596667,
                                        -18.54258652314625
                                    ],
                                    [
                                        142.79897545601216,
                                        -18.54258652314625
                                    ],
                                    [
                                        142.79897545601216,
                                        -17.504483305281
                                    ],
                                    [
                                        141.70724273596667,
                                        -17.504483305281
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
                            "startDate": "2022-11-15T10:20:00.000Z",
                            "endDate": "2022-11-15T11:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668507600000,
                            "endTime": 1668511200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        139.8463103077844,
                                        -15.693774479408498
                                    ],
                                    [
                                        139.8463103077844,
                                        -20.324327776278153
                                    ],
                                    [
                                        144.7207984252507,
                                        -20.324327776278153
                                    ],
                                    [
                                        144.7207984252507,
                                        -15.693774479408498
                                    ],
                                    [
                                        139.8463103077844,
                                        -15.693774479408498
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
                            "startDate": "2022-11-15T11:20:00.000Z",
                            "endDate": "2022-11-15T13:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668511200000,
                            "endTime": 1668519000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    140.92,
                                    -14.85
                                ],
                                [
                                    139.5,
                                    -11.79
                                ],
                                [
                                    138.36,
                                    -8.44
                                ],
                                [
                                    136.5,
                                    -4.81
                                ],
                                [
                                    136.4064,
                                    -5.0168
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a170",
                "a200",
                "a165",
                "a177"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_363",
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
            "timestamp": "2022-09-29T15:50:11.042Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-366",
            "title": "Order item 366 Kinetic",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T11:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    133.87,
                                    -14.2
                                ],
                                [
                                    141.01,
                                    -12.24
                                ],
                                [
                                    147.43,
                                    -10
                                ],
                                [
                                    147.5097,
                                    -9.88
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T11:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668505800000,
                            "endTime": 1668511200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.40554398120733,
                                        -8.787000591758494
                                    ],
                                    [
                                        146.40554398120733,
                                        -10.969378653125569
                                    ],
                                    [
                                        148.62120581514822,
                                        -10.969378653125569
                                    ],
                                    [
                                        148.62120581514822,
                                        -8.787000591758494
                                    ],
                                    [
                                        146.40554398120733,
                                        -8.787000591758494
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
                            "startDate": "2022-11-15T11:20:00.000Z",
                            "endDate": "2022-11-15T11:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668511200000,
                            "endTime": 1668513000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    127.01,
                                    -17.35
                                ],
                                [
                                    126.8957,
                                    -17.0157
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a128"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_366",
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
            "timestamp": "2022-09-21T20:06:28.144Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-369",
            "title": "Order item 369 Transit",
            "startDate": "2022-11-15T09:05:00.000Z",
            "endDate": "2022-11-15T14:05:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T09:05:00.000Z",
                            "endDate": "2022-11-15T09:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668503100000,
                            "endTime": 1668506100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.2905,
                                    -17.1496
                                ],
                                [
                                    140.65,
                                    -14.59
                                ],
                                [
                                    139.86,
                                    -12.18
                                ],
                                [
                                    139.36,
                                    -10.49
                                ],
                                [
                                    139.15,
                                    -8.51
                                ],
                                [
                                    139.3171,
                                    -8.0633
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
                            "startDate": "2022-11-15T09:55:00.000Z",
                            "endDate": "2022-11-15T12:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668506100000,
                            "endTime": 1668513900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                139.3171,
                                -8.0633
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
                            "startDate": "2022-11-15T12:05:00.000Z",
                            "endDate": "2022-11-15T14:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668513900000,
                            "endTime": 1668521100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    141.25,
                                    -16.65
                                ],
                                [
                                    141.2905,
                                    -17.1496
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a112",
                "a141",
                "a129"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a167"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_369",
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
            "timestamp": "2022-09-26T22:06:46.037Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-372",
            "title": "Order item 372 Kinetic",
            "startDate": "2022-11-15T09:25:00.000Z",
            "endDate": "2022-11-15T19:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T09:25:00.000Z",
                            "endDate": "2022-11-15T10:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668504300000,
                            "endTime": 1668507300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    145.08,
                                    -15.49
                                ],
                                [
                                    147.66,
                                    -10.85
                                ],
                                [
                                    147.4089,
                                    -10.3741
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
                            "startDate": "2022-11-15T10:15:00.000Z",
                            "endDate": "2022-11-15T13:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668507300000,
                            "endTime": 1668518700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        144.30237132900305,
                                        -7.2775600643418334
                                    ],
                                    [
                                        144.30237132900305,
                                        -13.440217737252778
                                    ],
                                    [
                                        150.57723486150311,
                                        -13.440217737252778
                                    ],
                                    [
                                        150.57723486150311,
                                        -7.2775600643418334
                                    ],
                                    [
                                        144.30237132900305,
                                        -7.2775600643418334
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
                            "startDate": "2022-11-15T13:25:00.000Z",
                            "endDate": "2022-11-15T16:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668518700000,
                            "endTime": 1668528900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.84964824709832,
                                        -8.829554433426797
                                    ],
                                    [
                                        145.84964824709832,
                                        -11.911055270700356
                                    ],
                                    [
                                        148.9835815535688,
                                        -11.911055270700356
                                    ],
                                    [
                                        148.9835815535688,
                                        -8.829554433426797
                                    ],
                                    [
                                        145.84964824709832,
                                        -8.829554433426797
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
                            "startDate": "2022-11-15T16:15:00.000Z",
                            "endDate": "2022-11-15T19:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668528900000,
                            "endTime": 1668540300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.4089,
                                    -10.3741
                                ],
                                [
                                    145.63,
                                    -15.04
                                ],
                                [
                                    143.32,
                                    -20.25
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a132",
                "a150",
                "a129",
                "a121"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_372",
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
            "timestamp": "2022-09-28T05:51:04.721Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-375",
            "title": "Order item 375 Transit",
            "startDate": "2022-11-15T09:40:00.000Z",
            "endDate": "2022-11-15T16:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T10:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505200000,
                            "endTime": 1668508200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    139.07,
                                    -9.52
                                ],
                                [
                                    139.79,
                                    -13.49
                                ],
                                [
                                    139.8,
                                    -17.17
                                ],
                                [
                                    140.0406,
                                    -17.0574
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
                            "startDate": "2022-11-15T10:30:00.000Z",
                            "endDate": "2022-11-15T11:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668508200000,
                            "endTime": 1668513000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        136.09082203193674,
                                        -13.172752519388712
                                    ],
                                    [
                                        136.09082203193674,
                                        -20.862494968381693
                                    ],
                                    [
                                        144.15656239083506,
                                        -20.862494968381693
                                    ],
                                    [
                                        144.15656239083506,
                                        -13.172752519388712
                                    ],
                                    [
                                        136.09082203193674,
                                        -13.172752519388712
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
                            "startDate": "2022-11-15T11:50:00.000Z",
                            "endDate": "2022-11-15T13:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513000000,
                            "endTime": 1668520200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.5528066288888,
                                        -14.635031737495344
                                    ],
                                    [
                                        137.5528066288888,
                                        -19.44868763111786
                                    ],
                                    [
                                        142.59337798367955,
                                        -19.44868763111786
                                    ],
                                    [
                                        142.59337798367955,
                                        -14.635031737495344
                                    ],
                                    [
                                        137.5528066288888,
                                        -14.635031737495344
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
                            "startDate": "2022-11-15T13:50:00.000Z",
                            "endDate": "2022-11-15T16:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668520200000,
                            "endTime": 1668529800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    138.24,
                                    -6.38
                                ],
                                [
                                    138.5853,
                                    -6.3233
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a175",
                "a181",
                "a200"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_375",
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
            "timestamp": "2022-09-25T19:19:24.195Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-378",
            "title": "Order item 378 Kinetic",
            "startDate": "2022-11-15T09:40:00.000Z",
            "endDate": "2022-11-15T12:20:00.000Z",
            "location": [],
            "activity": "Kinetic",
            "ownAssets": [
                "a146",
                "a148",
                "a108",
                "a144"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a185"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_378",
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
            "timestamp": "2022-09-27T22:31:44.460Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-381",
            "title": "Order item 381 Transit",
            "startDate": "2022-11-15T09:45:00.000Z",
            "endDate": "2022-11-15T14:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T09:45:00.000Z",
                            "endDate": "2022-11-15T10:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668505500000,
                            "endTime": 1668508500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    146.35,
                                    -5.55
                                ],
                                [
                                    146.4221,
                                    -5.1852
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
                            "startDate": "2022-11-15T10:35:00.000Z",
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668508500000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.77023262213592,
                                        -2.530374340388677
                                    ],
                                    [
                                        143.77023262213592,
                                        -7.828887292517161
                                    ],
                                    [
                                        149.0963233725091,
                                        -7.828887292517161
                                    ],
                                    [
                                        149.0963233725091,
                                        -2.530374340388677
                                    ],
                                    [
                                        143.77023262213592,
                                        -2.530374340388677
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
                            "startDate": "2022-11-15T12:15:00.000Z",
                            "endDate": "2022-11-15T14:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668514500000,
                            "endTime": 1668521700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    142.07,
                                    -7.32
                                ],
                                [
                                    137.53,
                                    -9.65
                                ],
                                [
                                    132.28,
                                    -11.7
                                ],
                                [
                                    128.31,
                                    -13.47
                                ],
                                [
                                    128.2265,
                                    -13.8618
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a144",
                "a137",
                "a146"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a194"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_381",
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
            "timestamp": "2022-09-26T07:28:05.515Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-384",
            "title": "Order item 384 Asymmetric",
            "startDate": "2022-11-15T10:05:00.000Z",
            "endDate": "2022-11-15T13:45:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:05:00.000Z",
                            "endDate": "2022-11-15T10:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668506700000,
                            "endTime": 1668509700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3998,
                                    -10.1238
                                ],
                                [
                                    138.16,
                                    -12.81
                                ],
                                [
                                    126.45,
                                    -14.99
                                ],
                                [
                                    126.3983,
                                    -14.6078
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
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509700000,
                            "endTime": 1668511500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                126.3983,
                                -14.6078
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
                            "startDate": "2022-11-15T11:25:00.000Z",
                            "endDate": "2022-11-15T13:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668511500000,
                            "endTime": 1668519900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.3983,
                                    -14.6078
                                ],
                                [
                                    134.23,
                                    -13.57
                                ],
                                [
                                    142.14,
                                    -11.46
                                ],
                                [
                                    149.33,
                                    -10.08
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a170",
                "a198",
                "a199",
                "a172"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_384",
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
            "timestamp": "2022-09-29T06:08:27.361Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-387",
            "title": "Order item 387 Asymmetric",
            "startDate": "2022-11-15T10:05:00.000Z",
            "endDate": "2022-11-15T14:05:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:05:00.000Z",
                            "endDate": "2022-11-15T10:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668506700000,
                            "endTime": 1668509700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    129.89,
                                    -13.2
                                ],
                                [
                                    132.7,
                                    -9.6
                                ],
                                [
                                    134.78,
                                    -5.71
                                ],
                                [
                                    137.15,
                                    -1.54
                                ],
                                [
                                    137.6034,
                                    -1.484
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
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668509700000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                137.6034,
                                -1.484
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
                            "startDate": "2022-11-15T12:15:00.000Z",
                            "endDate": "2022-11-15T14:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668514500000,
                            "endTime": 1668521100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    127.17,
                                    -16.85
                                ],
                                [
                                    126.8957,
                                    -17.0157
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a117",
                "a151",
                "a144",
                "a152"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_387",
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
            "timestamp": "2022-09-28T10:32:49.998Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-390",
            "title": "Order item 390 Transit",
            "startDate": "2022-11-15T10:05:00.000Z",
            "endDate": "2022-11-15T15:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:05:00.000Z",
                            "endDate": "2022-11-15T10:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668506700000,
                            "endTime": 1668509700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    145.77,
                                    -12.75
                                ],
                                [
                                    143.53,
                                    -15.04
                                ],
                                [
                                    139.58,
                                    -17.04
                                ],
                                [
                                    140.0406,
                                    -17.0574
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
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        138.0659225412968,
                                        -15.141663912880697
                                    ],
                                    [
                                        138.0659225412968,
                                        -18.953658515733288
                                    ],
                                    [
                                        142.05601055716002,
                                        -18.953658515733288
                                    ],
                                    [
                                        142.05601055716002,
                                        -15.141663912880697
                                    ],
                                    [
                                        138.0659225412968,
                                        -15.141663912880697
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T13:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668517500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        139.80926318806266,
                                        -16.835847566678606
                                    ],
                                    [
                                        139.80926318806266,
                                        -17.278689881250056
                                    ],
                                    [
                                        140.27248607488903,
                                        -17.278689881250056
                                    ],
                                    [
                                        140.27248607488903,
                                        -16.835847566678606
                                    ],
                                    [
                                        139.80926318806266,
                                        -16.835847566678606
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
                            "startDate": "2022-11-15T13:05:00.000Z",
                            "endDate": "2022-11-15T15:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668517500000,
                            "endTime": 1668524700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    143.06,
                                    -15.21
                                ],
                                [
                                    146.26,
                                    -12.18
                                ],
                                [
                                    149.75,
                                    -9.88
                                ],
                                [
                                    149.2994,
                                    -10.1887
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a195",
                "a173"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_390",
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
            "timestamp": "2022-09-23T20:41:13.424Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-393",
            "title": "Order item 393 Transit",
            "startDate": "2022-11-15T10:05:00.000Z",
            "endDate": "2022-11-15T11:25:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a160",
                "a118"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_393",
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
            "timestamp": "2022-09-23T20:33:37.642Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-396",
            "title": "Order item 396 Asymmetric",
            "startDate": "2022-11-15T10:15:00.000Z",
            "endDate": "2022-11-15T13:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T10:15:00.000Z",
                            "endDate": "2022-11-15T11:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668507300000,
                            "endTime": 1668510300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    144.75,
                                    -6.74
                                ],
                                [
                                    144.4062,
                                    -6.8859
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
                            "startDate": "2022-11-15T11:05:00.000Z",
                            "endDate": "2022-11-15T13:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668510300000,
                            "endTime": 1668520500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        140.83991253378406,
                                        -3.312271815414641
                                    ],
                                    [
                                        140.83991253378406,
                                        -10.43271488502231
                                    ],
                                    [
                                        148.02644907092755,
                                        -10.43271488502231
                                    ],
                                    [
                                        148.02644907092755,
                                        -3.312271815414641
                                    ],
                                    [
                                        140.83991253378406,
                                        -3.312271815414641
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
                            "startDate": "2022-11-15T13:55:00.000Z",
                            "endDate": "2022-11-15T13:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668520500000,
                            "endTime": 1668520500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    140.62,
                                    -9.04
                                ],
                                [
                                    136.86,
                                    -11.17
                                ],
                                [
                                    133.39,
                                    -13.02
                                ],
                                [
                                    133.3442,
                                    -13.013
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a144",
                "a151",
                "a116",
                "a157"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_396",
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
            "timestamp": "2022-09-28T10:10:02.650Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-399",
            "title": "Order item 399 Asymmetric",
            "startDate": "2022-11-15T10:25:00.000Z",
            "endDate": "2022-11-15T13:35:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a157",
                "a156",
                "a114",
                "a146"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_399",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T05:30:28.448Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-402",
            "title": "Order item 402 Asymmetric",
            "startDate": "2022-11-15T10:45:00.000Z",
            "endDate": "2022-11-15T17:15:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:45:00.000Z",
                            "endDate": "2022-11-15T11:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509100000,
                            "endTime": 1668512100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    133.37,
                                    -16.15
                                ],
                                [
                                    116.96,
                                    -21.26
                                ],
                                [
                                    116.7521,
                                    -20.9262
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
                            "startDate": "2022-11-15T11:35:00.000Z",
                            "endDate": "2022-11-15T14:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512100000,
                            "endTime": 1668522300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                116.7521,
                                -20.9262
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
                            "startDate": "2022-11-15T14:25:00.000Z",
                            "endDate": "2022-11-15T17:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668522300000,
                            "endTime": 1668532500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    149.32,
                                    -10.33
                                ],
                                [
                                    149.1973,
                                    -10.6215
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a191",
                "a186",
                "a190"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_402",
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
            "timestamp": "2022-09-26T06:34:55.037Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-405",
            "title": "Order item 405 Asymmetric",
            "startDate": "2022-11-15T10:45:00.000Z",
            "endDate": "2022-11-15T14:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:45:00.000Z",
                            "endDate": "2022-11-15T11:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668509100000,
                            "endTime": 1668512100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    137.29,
                                    -1.49
                                ],
                                [
                                    137.4298,
                                    -1.926
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
                            "startDate": "2022-11-15T11:35:00.000Z",
                            "endDate": "2022-11-15T12:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668512100000,
                            "endTime": 1668515100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        135.54162310127828,
                                        -0.03677737114672316
                                    ],
                                    [
                                        135.54162310127828,
                                        -3.8131280689511944
                                    ],
                                    [
                                        139.32216724341774,
                                        -3.8131280689511944
                                    ],
                                    [
                                        139.32216724341774,
                                        -0.03677737114672316
                                    ],
                                    [
                                        135.54162310127828,
                                        -0.03677737114672316
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
                            "startDate": "2022-11-15T12:25:00.000Z",
                            "endDate": "2022-11-15T14:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668515100000,
                            "endTime": 1668521700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        133.91304689922848,
                                        1.5930237891572852
                                    ],
                                    [
                                        133.91304689922848,
                                        -5.437745575447914
                                    ],
                                    [
                                        140.96110395506318,
                                        -5.437745575447914
                                    ],
                                    [
                                        140.96110395506318,
                                        1.5930237891572852
                                    ],
                                    [
                                        133.91304689922848,
                                        1.5930237891572852
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
                            "startDate": "2022-11-15T14:15:00.000Z",
                            "endDate": "2022-11-15T14:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668521700000,
                            "endTime": 1668523500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.4298,
                                    -1.926
                                ],
                                [
                                    135.25,
                                    -5.02
                                ],
                                [
                                    132.99,
                                    -8.2
                                ],
                                [
                                    131.02,
                                    -11.09
                                ],
                                [
                                    128.32,
                                    -13.7
                                ],
                                [
                                    128.2265,
                                    -13.8618
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a108",
                "a148",
                "a146",
                "a159"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a186"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_405",
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
            "timestamp": "2022-09-27T21:23:22.417Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-408",
            "title": "Order item 408 Asymmetric",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T15:25:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    144.01,
                                    -10.87
                                ],
                                [
                                    140.42,
                                    -11.9
                                ],
                                [
                                    137.11,
                                    -12.64
                                ],
                                [
                                    133.08,
                                    -13.1
                                ],
                                [
                                    132.9811,
                                    -13.2215
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                132.9811,
                                -13.2215
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
                            "startDate": "2022-11-15T12:15:00.000Z",
                            "endDate": "2022-11-15T15:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668514500000,
                            "endTime": 1668525900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    136.59,
                                    -12.38
                                ],
                                [
                                    140.14,
                                    -11.61
                                ],
                                [
                                    143.96,
                                    -10.56
                                ],
                                [
                                    147.08,
                                    -10.22
                                ],
                                [
                                    147.5427,
                                    -9.9158
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a200",
                "a181",
                "a174"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_408",
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
            "timestamp": "2022-09-25T17:55:50.587Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-411",
            "title": "Order item 411 Transit",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T14:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    141.07,
                                    -17.48
                                ],
                                [
                                    140.9707,
                                    -17.0411
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T14:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668521100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        140.33709950350146,
                                        -16.43239564360279
                                    ],
                                    [
                                        140.33709950350146,
                                        -17.647828369253954
                                    ],
                                    [
                                        141.60843380196317,
                                        -17.647828369253954
                                    ],
                                    [
                                        141.60843380196317,
                                        -16.43239564360279
                                    ],
                                    [
                                        140.33709950350146,
                                        -16.43239564360279
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
                            "startDate": "2022-11-15T14:05:00.000Z",
                            "endDate": "2022-11-15T14:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668521100000,
                            "endTime": 1668523500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    139.45,
                                    -11.95
                                ],
                                [
                                    137.3,
                                    -6.51
                                ],
                                [
                                    137.5513,
                                    -6.7608
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a178",
                "a194",
                "a179",
                "a177"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_411",
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
            "timestamp": "2022-09-28T04:12:19.547Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-414",
            "title": "Order item 414 Asymmetric",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T16:25:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    146.03,
                                    -12.88
                                ],
                                [
                                    142.89,
                                    -15.24
                                ],
                                [
                                    140.04,
                                    -17.32
                                ],
                                [
                                    140.0406,
                                    -17.0574
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T14:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668522900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                140.0406,
                                -17.0574
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
                            "startDate": "2022-11-15T14:35:00.000Z",
                            "endDate": "2022-11-15T16:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668522900000,
                            "endTime": 1668529500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    144.45,
                                    -13.55
                                ],
                                [
                                    149.36,
                                    -10.57
                                ],
                                [
                                    149.3719,
                                    -10.3237
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a177",
                "a188",
                "a169"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_414",
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
            "timestamp": "2022-09-26T20:12:49.298Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-417",
            "title": "Order item 417 Kinetic",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T14:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.2438,
                                    -5.6573
                                ],
                                [
                                    120.19,
                                    -18.78
                                ],
                                [
                                    120.4755,
                                    -18.6674
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T12:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668513900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        116.70105748778067,
                                        -14.982949784204367
                                    ],
                                    [
                                        116.70105748778067,
                                        -22.2731486460453
                                    ],
                                    [
                                        124.41585934530194,
                                        -22.2731486460453
                                    ],
                                    [
                                        124.41585934530194,
                                        -14.982949784204367
                                    ],
                                    [
                                        116.70105748778067,
                                        -14.982949784204367
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
                            "startDate": "2022-11-15T12:05:00.000Z",
                            "endDate": "2022-11-15T12:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513900000,
                            "endTime": 1668513900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        119.67035108017885,
                                        -17.899501826620504
                                    ],
                                    [
                                        119.67035108017885,
                                        -19.43183613748717
                                    ],
                                    [
                                        121.287957037466,
                                        -19.43183613748717
                                    ],
                                    [
                                        121.287957037466,
                                        -17.899501826620504
                                    ],
                                    [
                                        119.67035108017885,
                                        -17.899501826620504
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
                            "startDate": "2022-11-15T12:05:00.000Z",
                            "endDate": "2022-11-15T14:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513900000,
                            "endTime": 1668524100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    120.4755,
                                    -18.6674
                                ],
                                [
                                    125.66,
                                    -15.61
                                ],
                                [
                                    130.76,
                                    -11.66
                                ],
                                [
                                    135.14,
                                    -8.43
                                ],
                                [
                                    139.8,
                                    -5.91
                                ],
                                [
                                    140.2438,
                                    -5.6573
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a199"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_417",
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
            "timestamp": "2022-09-21T17:57:19.840Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-420",
            "title": "Order item 420 Kinetic",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T11:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    142.68,
                                    -11.28
                                ],
                                [
                                    136.71,
                                    -11.82
                                ],
                                [
                                    132.02,
                                    -13.09
                                ],
                                [
                                    126.62,
                                    -15.06
                                ],
                                [
                                    126.839,
                                    -14.6533
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a165",
                "a199",
                "a169",
                "a189"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_420",
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
            "timestamp": "2022-09-29T13:25:51.172Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-423",
            "title": "Order item 423 Asymmetric",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T17:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    137.28,
                                    -13.85
                                ],
                                [
                                    140.35,
                                    -12.3
                                ],
                                [
                                    143.7,
                                    -11.46
                                ],
                                [
                                    147.34,
                                    -10.34
                                ],
                                [
                                    147.5097,
                                    -9.88
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T13:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668512700000,
                            "endTime": 1668517500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        144.13792152799422,
                                        -6.513070176256365
                                    ],
                                    [
                                        144.13792152799422,
                                        -13.212705825562844
                                    ],
                                    [
                                        150.95089189202483,
                                        -13.212705825562844
                                    ],
                                    [
                                        150.95089189202483,
                                        -6.513070176256365
                                    ],
                                    [
                                        144.13792152799422,
                                        -6.513070176256365
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
                            "startDate": "2022-11-15T13:05:00.000Z",
                            "endDate": "2022-11-15T15:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668517500000,
                            "endTime": 1668524700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        144.92407646515088,
                                        -7.3054420958530715
                                    ],
                                    [
                                        144.92407646515088,
                                        -12.434526533364755
                                    ],
                                    [
                                        150.13596711556795,
                                        -12.434526533364755
                                    ],
                                    [
                                        150.13596711556795,
                                        -7.3054420958530715
                                    ],
                                    [
                                        144.92407646515088,
                                        -7.3054420958530715
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
                            "startDate": "2022-11-15T15:05:00.000Z",
                            "endDate": "2022-11-15T17:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668524700000,
                            "endTime": 1668534900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    143.88,
                                    -10.89
                                ],
                                [
                                    141.12,
                                    -13.05
                                ],
                                [
                                    137.63,
                                    -13.93
                                ],
                                [
                                    134.43,
                                    -15.52
                                ],
                                [
                                    134.0721,
                                    -15.5391
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a143",
                "a131"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_423",
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
            "timestamp": "2022-09-25T06:38:23.294Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-426",
            "title": "Order item 426 Transit",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T13:25:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a196",
                "a180"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_426",
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
            "timestamp": "2022-09-25T13:34:56.207Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-429",
            "title": "Order item 429 Asymmetric",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T16:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    144.84,
                                    -9.2
                                ],
                                [
                                    144.648,
                                    -9.6247
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T13:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668512700000,
                            "endTime": 1668519300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.14906323458538,
                                        -8.13761341472859
                                    ],
                                    [
                                        143.14906323458538,
                                        -11.105265770557475
                                    ],
                                    [
                                        146.160162178151,
                                        -11.105265770557475
                                    ],
                                    [
                                        146.160162178151,
                                        -8.13761341472859
                                    ],
                                    [
                                        143.14906323458538,
                                        -8.13761341472859
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
                            "startDate": "2022-11-15T13:35:00.000Z",
                            "endDate": "2022-11-15T15:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668519300000,
                            "endTime": 1668526500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.27233001126078,
                                        -8.26057225324931
                                    ],
                                    [
                                        143.27233001126078,
                                        -10.983339265577024
                                    ],
                                    [
                                        146.03480196024734,
                                        -10.983339265577024
                                    ],
                                    [
                                        146.03480196024734,
                                        -8.26057225324931
                                    ],
                                    [
                                        143.27233001126078,
                                        -8.26057225324931
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
                            "startDate": "2022-11-15T15:35:00.000Z",
                            "endDate": "2022-11-15T16:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668526500000,
                            "endTime": 1668531300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    145.25,
                                    -14.74
                                ],
                                [
                                    146.27,
                                    -20.47
                                ],
                                [
                                    146.1087,
                                    -20.2046
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a138"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_429",
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
            "timestamp": "2022-09-22T02:15:29.911Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-432",
            "title": "Order item 432 Asymmetric",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T14:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.4298,
                                    -1.926
                                ],
                                [
                                    139.73,
                                    -10.34
                                ],
                                [
                                    142.33,
                                    -19.45
                                ],
                                [
                                    142.1253,
                                    -19.3355
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T11:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668513300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                142.1253,
                                -19.3355
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
                            "startDate": "2022-11-15T11:55:00.000Z",
                            "endDate": "2022-11-15T14:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513300000,
                            "endTime": 1668521100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    140.17,
                                    -10.24
                                ],
                                [
                                    137.75,
                                    -1.61
                                ],
                                [
                                    137.4298,
                                    -1.926
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a196"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_432",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T04:40:04.405Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-435",
            "title": "Order item 435 Kinetic",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T12:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    137.05,
                                    -11.13
                                ],
                                [
                                    133.21,
                                    -12.81
                                ],
                                [
                                    129.66,
                                    -15.2
                                ],
                                [
                                    126.39,
                                    -17.3
                                ],
                                [
                                    126.8957,
                                    -17.0157
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                126.8957,
                                -17.0157
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T12:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668516300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    130.91,
                                    -14.25
                                ],
                                [
                                    135.04,
                                    -11.39
                                ],
                                [
                                    139.45,
                                    -8.24
                                ],
                                [
                                    139.8303,
                                    -8.5197
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a190",
                "a196",
                "a175",
                "a166"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_435",
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
            "timestamp": "2022-09-28T20:48:39.690Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-438",
            "title": "Order item 438 Asymmetric",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T16:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.6686,
                                    -14.5464
                                ],
                                [
                                    146.39,
                                    -6.21
                                ],
                                [
                                    146.7067,
                                    -6.2246
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T13:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668512700000,
                            "endTime": 1668519900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.34740342316755,
                                        -2.8588092197500554
                                    ],
                                    [
                                        143.34740342316755,
                                        -9.56889398091732
                                    ],
                                    [
                                        150.10920662702705,
                                        -9.56889398091732
                                    ],
                                    [
                                        150.10920662702705,
                                        -2.8588092197500554
                                    ],
                                    [
                                        143.34740342316755,
                                        -2.8588092197500554
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
                            "startDate": "2022-11-15T13:45:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668519900000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    141.59,
                                    -10.58
                                ],
                                [
                                    135.8,
                                    -14.62
                                ],
                                [
                                    135.6686,
                                    -14.5464
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a108"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a195"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_438",
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
            "timestamp": "2022-09-22T10:41:15.765Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-441",
            "title": "Order item 441 Asymmetric",
            "startDate": "2022-11-15T11:05:00.000Z",
            "endDate": "2022-11-15T17:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T11:05:00.000Z",
                            "endDate": "2022-11-15T11:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668510300000,
                            "endTime": 1668513300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    145.17,
                                    -15.24
                                ],
                                [
                                    143.25,
                                    -21.12
                                ],
                                [
                                    142.9809,
                                    -20.6715
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
                            "startDate": "2022-11-15T11:55:00.000Z",
                            "endDate": "2022-11-15T13:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513300000,
                            "endTime": 1668520500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        140.7615959843255,
                                        -18.55319725304011
                                    ],
                                    [
                                        140.7615959843255,
                                        -22.760613796017562
                                    ],
                                    [
                                        145.2625688611914,
                                        -22.760613796017562
                                    ],
                                    [
                                        145.2625688611914,
                                        -18.55319725304011
                                    ],
                                    [
                                        140.7615959843255,
                                        -18.55319725304011
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
                            "startDate": "2022-11-15T13:55:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668520500000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        139.94039014598624,
                                        -17.748684104098473
                                    ],
                                    [
                                        139.94039014598624,
                                        -23.538955791331244
                                    ],
                                    [
                                        146.13964063664778,
                                        -23.538955791331244
                                    ],
                                    [
                                        146.13964063664778,
                                        -17.748684104098473
                                    ],
                                    [
                                        139.94039014598624,
                                        -17.748684104098473
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T17:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668528300000,
                            "endTime": 1668533700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    145.67,
                                    -14.89
                                ],
                                [
                                    147.88,
                                    -9.6
                                ],
                                [
                                    147.5427,
                                    -9.9158
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a161",
                "a197",
                "a165",
                "a180"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_441",
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
            "timestamp": "2022-09-28T22:17:52.631Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-444",
            "title": "Order item 444 Transit",
            "startDate": "2022-11-15T11:05:00.000Z",
            "endDate": "2022-11-15T17:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T11:05:00.000Z",
                            "endDate": "2022-11-15T11:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668510300000,
                            "endTime": 1668513300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    137.73,
                                    -5.58
                                ],
                                [
                                    135.32,
                                    -7.59
                                ],
                                [
                                    132.18,
                                    -10.31
                                ],
                                [
                                    129.33,
                                    -12.75
                                ],
                                [
                                    129.7416,
                                    -12.6383
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
                            "startDate": "2022-11-15T11:55:00.000Z",
                            "endDate": "2022-11-15T14:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513300000,
                            "endTime": 1668522900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        127.10745891986112,
                                        -10.03139922366734
                                    ],
                                    [
                                        127.10745891986112,
                                        -15.218818886730782
                                    ],
                                    [
                                        132.4297830848956,
                                        -15.218818886730782
                                    ],
                                    [
                                        132.4297830848956,
                                        -10.03139922366734
                                    ],
                                    [
                                        127.10745891986112,
                                        -10.03139922366734
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
                            "startDate": "2022-11-15T14:35:00.000Z",
                            "endDate": "2022-11-15T17:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668522900000,
                            "endTime": 1668531900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    132.34,
                                    -9.85
                                ],
                                [
                                    135.81,
                                    -7.2
                                ],
                                [
                                    138.57,
                                    -5.27
                                ],
                                [
                                    140.61,
                                    -3.06
                                ],
                                [
                                    140.9611,
                                    -2.7755
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a180"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_444",
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
            "timestamp": "2022-09-23T07:38:30.287Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-447",
            "title": "Order item 447 Transit",
            "startDate": "2022-11-15T11:05:00.000Z",
            "endDate": "2022-11-15T13:25:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a134"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_447",
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
            "timestamp": "2022-09-22T06:43:08.734Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-450",
            "title": "Order item 450 Kinetic",
            "startDate": "2022-11-15T11:10:00.000Z",
            "endDate": "2022-11-15T14:10:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T11:10:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668510600000,
                            "endTime": 1668513600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    136.38,
                                    -12.26
                                ],
                                [
                                    135.79,
                                    -18.06
                                ],
                                [
                                    135.4363,
                                    -18.5329
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
                            "startDate": "2022-11-15T12:00:00.000Z",
                            "endDate": "2022-11-15T13:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513600000,
                            "endTime": 1668518400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                135.4363,
                                -18.5329
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
                            "startDate": "2022-11-15T13:20:00.000Z",
                            "endDate": "2022-11-15T14:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668518400000,
                            "endTime": 1668521400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    135.78,
                                    -14.31
                                ],
                                [
                                    136.19,
                                    -9.03
                                ],
                                [
                                    136.87,
                                    -5.48
                                ],
                                [
                                    136.4064,
                                    -5.0168
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a166",
                "a181",
                "a171"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_450",
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
            "timestamp": "2022-09-25T19:31:47.971Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-453",
            "title": "Order item 453 Kinetic",
            "startDate": "2022-11-15T11:10:00.000Z",
            "endDate": "2022-11-15T12:10:00.000Z",
            "location": [],
            "activity": "Kinetic",
            "ownAssets": [
                "a115",
                "a133"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_453",
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
            "timestamp": "2022-09-25T14:04:27.999Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-456",
            "title": "Order item 456 Transit",
            "startDate": "2022-11-15T11:10:00.000Z",
            "endDate": "2022-11-15T15:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T11:10:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668510600000,
                            "endTime": 1668513600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    130.81,
                                    -15.05
                                ],
                                [
                                    144.36,
                                    -9.6
                                ],
                                [
                                    144.648,
                                    -9.6247
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
                            "startDate": "2022-11-15T12:00:00.000Z",
                            "endDate": "2022-11-15T13:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668513600000,
                            "endTime": 1668517800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                144.648,
                                -9.6247
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
                            "startDate": "2022-11-15T13:10:00.000Z",
                            "endDate": "2022-11-15T15:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668517800000,
                            "endTime": 1668527400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    117.37,
                                    -21.14
                                ],
                                [
                                    117.7434,
                                    -21.0232
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a154"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_456",
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
            "timestamp": "2022-09-21T14:21:08.818Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-459",
            "title": "Order item 459 Transit",
            "startDate": "2022-11-15T11:25:00.000Z",
            "endDate": "2022-11-15T15:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T11:25:00.000Z",
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668511500000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    135.84,
                                    -10.51
                                ],
                                [
                                    131.08,
                                    -12.27
                                ],
                                [
                                    126.61,
                                    -14.76
                                ],
                                [
                                    126.839,
                                    -14.6533
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
                            "startDate": "2022-11-15T12:15:00.000Z",
                            "endDate": "2022-11-15T12:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668514500000,
                            "endTime": 1668515700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        124.40722625345336,
                                        -12.264290287679145
                                    ],
                                    [
                                        124.40722625345336,
                                        -17.016498305389938
                                    ],
                                    [
                                        129.3241043830244,
                                        -17.016498305389938
                                    ],
                                    [
                                        129.3241043830244,
                                        -12.264290287679145
                                    ],
                                    [
                                        124.40722625345336,
                                        -12.264290287679145
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
                            "startDate": "2022-11-15T12:35:00.000Z",
                            "endDate": "2022-11-15T15:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668515700000,
                            "endTime": 1668524700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        126.55211113651931,
                                        -14.375217507511602
                                    ],
                                    [
                                        126.55211113651931,
                                        -14.931030029669234
                                    ],
                                    [
                                        127.12661748301066,
                                        -14.931030029669234
                                    ],
                                    [
                                        127.12661748301066,
                                        -14.375217507511602
                                    ],
                                    [
                                        126.55211113651931,
                                        -14.375217507511602
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
                            "startDate": "2022-11-15T15:05:00.000Z",
                            "endDate": "2022-11-15T15:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668524700000,
                            "endTime": 1668526500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    140.25,
                                    -8.43
                                ],
                                [
                                    139.8303,
                                    -8.5197
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a167"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_459",
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
            "timestamp": "2022-09-22T04:21:50.427Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-462",
            "title": "Order item 462 Asymmetric",
            "startDate": "2022-11-15T11:25:00.000Z",
            "endDate": "2022-11-15T16:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T11:25:00.000Z",
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668511500000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    140.4,
                                    -13.34
                                ],
                                [
                                    138.92,
                                    -8.1
                                ],
                                [
                                    137.72,
                                    -2.59
                                ],
                                [
                                    137.2844,
                                    -2.7856
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
                            "startDate": "2022-11-15T12:15:00.000Z",
                            "endDate": "2022-11-15T13:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668514500000,
                            "endTime": 1668520500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        134.0781859182741,
                                        0.424891122518623
                                    ],
                                    [
                                        134.0781859182741,
                                        -5.9873366954910985
                                    ],
                                    [
                                        140.50812978939246,
                                        -5.9873366954910985
                                    ],
                                    [
                                        140.50812978939246,
                                        0.424891122518623
                                    ],
                                    [
                                        134.0781859182741,
                                        0.424891122518623
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
                            "startDate": "2022-11-15T13:55:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668520500000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    139.06,
                                    -8.12
                                ],
                                [
                                    140.1,
                                    -14.2
                                ],
                                [
                                    142.41,
                                    -19.01
                                ],
                                [
                                    142.1253,
                                    -19.3355
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a154",
                "a144",
                "a150"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a174"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_462",
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
            "timestamp": "2022-09-27T08:06:32.826Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-465",
            "title": "Order item 465 Transit",
            "startDate": "2022-11-15T11:25:00.000Z",
            "endDate": "2022-11-15T15:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T11:25:00.000Z",
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668511500000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    130.0699,
                                    -12.4965
                                ],
                                [
                                    149.33,
                                    -10.49
                                ],
                                [
                                    149.3998,
                                    -10.1238
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
                            "startDate": "2022-11-15T12:15:00.000Z",
                            "endDate": "2022-11-15T12:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668514500000,
                            "endTime": 1668516900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.3998,
                                -10.1238
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
                            "startDate": "2022-11-15T12:55:00.000Z",
                            "endDate": "2022-11-15T15:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668516900000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3998,
                                    -10.1238
                                ],
                                [
                                    129.72,
                                    -12.56
                                ],
                                [
                                    130.0699,
                                    -12.4965
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a114",
                "a153",
                "a151",
                "a107"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_465",
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
            "timestamp": "2022-09-28T17:35:16.016Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-468",
            "title": "Order item 468 Asymmetric",
            "startDate": "2022-11-15T11:40:00.000Z",
            "endDate": "2022-11-15T15:20:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T11:40:00.000Z",
                            "endDate": "2022-11-15T12:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668512400000,
                            "endTime": 1668515400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    133.88,
                                    -13.1
                                ],
                                [
                                    139.95,
                                    -10.12
                                ],
                                [
                                    146.3,
                                    -5.85
                                ],
                                [
                                    146.7067,
                                    -6.2246
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
                            "startDate": "2022-11-15T12:30:00.000Z",
                            "endDate": "2022-11-15T14:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668515400000,
                            "endTime": 1668520800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                146.7067,
                                -6.2246
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
                            "startDate": "2022-11-15T14:00:00.000Z",
                            "endDate": "2022-11-15T15:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668520800000,
                            "endTime": 1668525600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    127.14,
                                    -16.52
                                ],
                                [
                                    126.8957,
                                    -17.0157
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a107",
                "a138",
                "a127"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_468",
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
            "timestamp": "2022-09-26T08:47:59.996Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-471",
            "title": "Order item 471 Transit",
            "startDate": "2022-11-15T11:55:00.000Z",
            "endDate": "2022-11-15T12:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T11:55:00.000Z",
                            "endDate": "2022-11-15T12:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513300000,
                            "endTime": 1668516300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.7545,
                                    -5.607
                                ],
                                [
                                    136.11,
                                    -10.28
                                ],
                                [
                                    125.97,
                                    -14.47
                                ],
                                [
                                    126.3983,
                                    -14.6078
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a180",
                "a195",
                "a165",
                "a178"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_471",
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
            "timestamp": "2022-09-28T13:44:44.767Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-474",
            "title": "Order item 474 Transit",
            "startDate": "2022-11-15T11:55:00.000Z",
            "endDate": "2022-11-15T13:35:00.000Z",
            "location": [],
            "activity": "Transit",
            "ownAssets": [
                "a130",
                "a142",
                "a112"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_474",
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
            "timestamp": "2022-09-27T00:25:30.329Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-477",
            "title": "Order item 477 Kinetic",
            "startDate": "2022-11-15T12:00:00.000Z",
            "endDate": "2022-11-15T20:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T12:00:00.000Z",
                            "endDate": "2022-11-15T12:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668513600000,
                            "endTime": 1668516600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    149.28,
                                    -9.66
                                ],
                                [
                                    149.3998,
                                    -10.1238
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
                            "startDate": "2022-11-15T12:50:00.000Z",
                            "endDate": "2022-11-15T15:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668516600000,
                            "endTime": 1668524400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        148.4332034896393,
                                        -9.168137867294558
                                    ],
                                    [
                                        148.4332034896393,
                                        -11.076623650416288
                                    ],
                                    [
                                        150.37216282355945,
                                        -11.076623650416288
                                    ],
                                    [
                                        150.37216282355945,
                                        -9.168137867294558
                                    ],
                                    [
                                        148.4332034896393,
                                        -9.168137867294558
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
                            "startDate": "2022-11-15T15:00:00.000Z",
                            "endDate": "2022-11-15T17:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668524400000,
                            "endTime": 1668534600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.64048169210238,
                                        -6.366112907334141
                                    ],
                                    [
                                        145.64048169210238,
                                        -13.837812467163412
                                    ],
                                    [
                                        153.24774531809882,
                                        -13.837812467163412
                                    ],
                                    [
                                        153.24774531809882,
                                        -6.366112907334141
                                    ],
                                    [
                                        145.64048169210238,
                                        -6.366112907334141
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
                            "startDate": "2022-11-15T17:50:00.000Z",
                            "endDate": "2022-11-15T20:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668534600000,
                            "endTime": 1668544200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3998,
                                    -10.1238
                                ],
                                [
                                    146.96,
                                    -11.93
                                ],
                                [
                                    144.51,
                                    -12.76
                                ],
                                [
                                    141.35,
                                    -14.31
                                ],
                                [
                                    138.46,
                                    -15.57
                                ],
                                [
                                    138.7422,
                                    -15.9904
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a158"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_477",
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
            "timestamp": "2022-09-21T16:50:16.681Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-480",
            "title": "Order item 480 Kinetic",
            "startDate": "2022-11-15T12:20:00.000Z",
            "endDate": "2022-11-15T13:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T12:20:00.000Z",
                            "endDate": "2022-11-15T13:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668514800000,
                            "endTime": 1668517800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    142.03,
                                    -10.84
                                ],
                                [
                                    137.52,
                                    -11.84
                                ],
                                [
                                    132.29,
                                    -13.56
                                ],
                                [
                                    126.34,
                                    -14.99
                                ],
                                [
                                    126.839,
                                    -14.6533
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a161",
                "a198",
                "a168",
                "a188"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_480",
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
            "timestamp": "2022-09-29T06:59:03.824Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-483",
            "title": "Order item 483 Asymmetric",
            "startDate": "2022-11-15T12:20:00.000Z",
            "endDate": "2022-11-15T16:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T12:20:00.000Z",
                            "endDate": "2022-11-15T13:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668514800000,
                            "endTime": 1668517800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    132.09,
                                    -7.7
                                ],
                                [
                                    137.65,
                                    -1.44
                                ],
                                [
                                    137.6034,
                                    -1.484
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
                            "startDate": "2022-11-15T13:10:00.000Z",
                            "endDate": "2022-11-15T15:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668517800000,
                            "endTime": 1668525600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        136.6939137133438,
                                        -0.5743724656462499
                                    ],
                                    [
                                        136.6939137133438,
                                        -2.393253479931166
                                    ],
                                    [
                                        138.51363459926233,
                                        -2.393253479931166
                                    ],
                                    [
                                        138.51363459926233,
                                        -0.5743724656462499
                                    ],
                                    [
                                        136.6939137133438,
                                        -0.5743724656462499
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
                            "startDate": "2022-11-15T15:20:00.000Z",
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668525600000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.36921624493039,
                                        -1.2498595706288296
                                    ],
                                    [
                                        137.36921624493039,
                                        -1.7181156437807683
                                    ],
                                    [
                                        137.83763334267496,
                                        -1.7181156437807683
                                    ],
                                    [
                                        137.83763334267496,
                                        -1.2498595706288296
                                    ],
                                    [
                                        137.36921624493039,
                                        -1.2498595706288296
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
                            "startDate": "2022-11-15T15:30:00.000Z",
                            "endDate": "2022-11-15T16:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668526200000,
                            "endTime": 1668531000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    132.38,
                                    -8.33
                                ],
                                [
                                    126.64,
                                    -14.7
                                ],
                                [
                                    126.839,
                                    -14.6533
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a140",
                "a127"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_483",
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
            "timestamp": "2022-09-24T18:51:51.757Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-486",
            "title": "Order item 486 Transit",
            "startDate": "2022-11-15T12:25:00.000Z",
            "endDate": "2022-11-15T14:05:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T12:25:00.000Z",
                            "endDate": "2022-11-15T13:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668515100000,
                            "endTime": 1668518100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    122.0081,
                                    -17.4033
                                ],
                                [
                                    131.27,
                                    -12.6
                                ],
                                [
                                    140.98,
                                    -8.36
                                ],
                                [
                                    140.9793,
                                    -8.1733
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
                            "startDate": "2022-11-15T13:15:00.000Z",
                            "endDate": "2022-11-15T13:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668518100000,
                            "endTime": 1668519900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                140.9793,
                                -8.1733
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
                            "startDate": "2022-11-15T13:45:00.000Z",
                            "endDate": "2022-11-15T14:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668519900000,
                            "endTime": 1668521100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    131.33,
                                    -12.6
                                ],
                                [
                                    122.1,
                                    -17.63
                                ],
                                [
                                    122.0081,
                                    -17.4033
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a148",
                "a128"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_486",
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
            "timestamp": "2022-09-24T20:28:40.480Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-489",
            "title": "Order item 489 Kinetic",
            "startDate": "2022-11-15T12:45:00.000Z",
            "endDate": "2022-11-15T15:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T12:45:00.000Z",
                            "endDate": "2022-11-15T13:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668516300000,
                            "endTime": 1668519300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    140.34,
                                    -14.66
                                ],
                                [
                                    140.44,
                                    -12.46
                                ],
                                [
                                    140.83,
                                    -9.97
                                ],
                                [
                                    140.5,
                                    -8.2
                                ],
                                [
                                    140.9793,
                                    -8.1733
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
                            "startDate": "2022-11-15T13:35:00.000Z",
                            "endDate": "2022-11-15T14:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668519300000,
                            "endTime": 1668522900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                140.9793,
                                -8.1733
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
                            "startDate": "2022-11-15T14:35:00.000Z",
                            "endDate": "2022-11-15T15:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668522900000,
                            "endTime": 1668525900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    140.25,
                                    -11
                                ],
                                [
                                    140.59,
                                    -13.77
                                ],
                                [
                                    140.21,
                                    -17.25
                                ],
                                [
                                    140.0406,
                                    -17.0574
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a133",
                "a158",
                "a145",
                "a146"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_489",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T11:49:29.994Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-492",
            "title": "Order item 492 Asymmetric",
            "startDate": "2022-11-15T13:00:00.000Z",
            "endDate": "2022-11-15T18:10:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T13:00:00.000Z",
                            "endDate": "2022-11-15T13:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668517200000,
                            "endTime": 1668520200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    133.62,
                                    -12.71
                                ],
                                [
                                    124.82,
                                    -16.75
                                ],
                                [
                                    116.29,
                                    -21.51
                                ],
                                [
                                    116.4863,
                                    -21.3267
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
                            "startDate": "2022-11-15T13:50:00.000Z",
                            "endDate": "2022-11-15T16:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668520200000,
                            "endTime": 1668528000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                116.4863,
                                -21.3267
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
                            "startDate": "2022-11-15T16:00:00.000Z",
                            "endDate": "2022-11-15T18:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668528000000,
                            "endTime": 1668535800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.4863,
                                    -21.3267
                                ],
                                [
                                    128.74,
                                    -14.52
                                ],
                                [
                                    141.42,
                                    -8.3
                                ],
                                [
                                    141.6774,
                                    -8.4284
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a192"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_492",
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
            "timestamp": "2022-09-22T00:54:20.299Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-495",
            "title": "Order item 495 Kinetic",
            "startDate": "2022-11-15T13:00:00.000Z",
            "endDate": "2022-11-15T17:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T13:00:00.000Z",
                            "endDate": "2022-11-15T13:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668517200000,
                            "endTime": 1668520200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    147.64,
                                    -14.06
                                ],
                                [
                                    145.2,
                                    -16.32
                                ],
                                [
                                    142.05,
                                    -19.31
                                ],
                                [
                                    142.1253,
                                    -19.3355
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
                            "startDate": "2022-11-15T13:50:00.000Z",
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668520200000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        140.28522669044014,
                                        -17.571984769662897
                                    ],
                                    [
                                        140.28522669044014,
                                        -21.08015222037583
                                    ],
                                    [
                                        144.0053415829303,
                                        -21.08015222037583
                                    ],
                                    [
                                        144.0053415829303,
                                        -17.571984769662897
                                    ],
                                    [
                                        140.28522669044014,
                                        -17.571984769662897
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
                            "startDate": "2022-11-15T15:30:00.000Z",
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668526200000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        141.17126162300897,
                                        -18.427891465250116
                                    ],
                                    [
                                        141.17126162300897,
                                        -20.238090143785605
                                    ],
                                    [
                                        143.0899742046048,
                                        -20.238090143785605
                                    ],
                                    [
                                        143.0899742046048,
                                        -18.427891465250116
                                    ],
                                    [
                                        141.17126162300897,
                                        -18.427891465250116
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
                            "startDate": "2022-11-15T15:30:00.000Z",
                            "endDate": "2022-11-15T17:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668526200000,
                            "endTime": 1668533400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    150.06,
                                    -10.32
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a185",
                "a191",
                "a169"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_495",
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
            "timestamp": "2022-09-27T11:43:11.394Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-498",
            "title": "Order item 498 Asymmetric",
            "startDate": "2022-11-15T13:00:00.000Z",
            "endDate": "2022-11-15T19:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T13:00:00.000Z",
                            "endDate": "2022-11-15T13:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668517200000,
                            "endTime": 1668520200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    137.94,
                                    -10.97
                                ],
                                [
                                    130.66,
                                    -11.91
                                ],
                                [
                                    130.7986,
                                    -11.9046
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
                            "startDate": "2022-11-15T13:50:00.000Z",
                            "endDate": "2022-11-15T17:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668520200000,
                            "endTime": 1668531600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        128.98372745528124,
                                        -10.11208907124493
                                    ],
                                    [
                                        128.98372745528124,
                                        -13.685354551317655
                                    ],
                                    [
                                        132.6374954908301,
                                        -13.685354551317655
                                    ],
                                    [
                                        132.6374954908301,
                                        -10.11208907124493
                                    ],
                                    [
                                        128.98372745528124,
                                        -10.11208907124493
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
                            "startDate": "2022-11-15T17:00:00.000Z",
                            "endDate": "2022-11-15T19:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668531600000,
                            "endTime": 1668541800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        129.9560685097402,
                                        -11.076510538083124
                                    ],
                                    [
                                        129.9560685097402,
                                        -12.730173484444524
                                    ],
                                    [
                                        131.6462737456693,
                                        -12.730173484444524
                                    ],
                                    [
                                        131.6462737456693,
                                        -11.076510538083124
                                    ],
                                    [
                                        129.9560685097402,
                                        -11.076510538083124
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
                            "startDate": "2022-11-15T19:50:00.000Z",
                            "endDate": "2022-11-15T19:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668541800000,
                            "endTime": 1668541800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    130.7986,
                                    -11.9046
                                ],
                                [
                                    144.92,
                                    -9.46
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a197",
                "a198",
                "a171",
                "a194"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_498",
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
            "timestamp": "2022-09-29T04:16:03.280Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-501",
            "title": "Order item 501 Kinetic",
            "startDate": "2022-11-15T13:00:00.000Z",
            "endDate": "2022-11-15T17:00:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T13:00:00.000Z",
                            "endDate": "2022-11-15T13:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668517200000,
                            "endTime": 1668520200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    132.82,
                                    -6.69
                                ],
                                [
                                    126.92,
                                    -11.02
                                ],
                                [
                                    122.31,
                                    -16.06
                                ],
                                [
                                    116.97,
                                    -20.82
                                ],
                                [
                                    116.7521,
                                    -20.9262
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
                            "startDate": "2022-11-15T13:50:00.000Z",
                            "endDate": "2022-11-15T15:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668520200000,
                            "endTime": 1668525000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                116.7521,
                                -20.9262
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
                            "startDate": "2022-11-15T15:10:00.000Z",
                            "endDate": "2022-11-15T17:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668525000000,
                            "endTime": 1668531600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    123.25,
                                    -14.38
                                ],
                                [
                                    130.87,
                                    -7.72
                                ],
                                [
                                    137.77,
                                    -1.78
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a194",
                "a189",
                "a197"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_501",
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
            "timestamp": "2022-09-27T02:32:55.956Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-504",
            "title": "Order item 504 Asymmetric",
            "startDate": "2022-11-15T13:00:00.000Z",
            "endDate": "2022-11-15T15:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T13:00:00.000Z",
                            "endDate": "2022-11-15T13:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668517200000,
                            "endTime": 1668520200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.185,
                                    -13.1681
                                ],
                                [
                                    149.79,
                                    -9.9
                                ],
                                [
                                    149.3998,
                                    -10.1238
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
                            "startDate": "2022-11-15T13:50:00.000Z",
                            "endDate": "2022-11-15T14:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668520200000,
                            "endTime": 1668521400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.3998,
                                -10.1238
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
                            "startDate": "2022-11-15T14:10:00.000Z",
                            "endDate": "2022-11-15T15:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668521400000,
                            "endTime": 1668525000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3998,
                                    -10.1238
                                ],
                                [
                                    141.49,
                                    -11.56
                                ],
                                [
                                    132.86,
                                    -12.72
                                ],
                                [
                                    133.185,
                                    -13.1681
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a117",
                "a159",
                "a150",
                "a142"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_504",
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
            "timestamp": "2022-09-29T14:33:49.423Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-507",
            "title": "Order item 507 Asymmetric",
            "startDate": "2022-11-15T13:05:00.000Z",
            "endDate": "2022-11-15T15:25:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a117",
                "a151",
                "a142",
                "a150"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_507",
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
            "timestamp": "2022-09-28T08:18:43.680Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-510",
            "title": "Order item 510 Transit",
            "startDate": "2022-11-15T13:25:00.000Z",
            "endDate": "2022-11-15T18:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T13:25:00.000Z",
                            "endDate": "2022-11-15T14:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668518700000,
                            "endTime": 1668521700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    124.4507,
                                    -20.6765
                                ],
                                [
                                    129.74,
                                    -16.39
                                ],
                                [
                                    135.85,
                                    -13.28
                                ],
                                [
                                    141.25,
                                    -8.9
                                ],
                                [
                                    145.93,
                                    -5.23
                                ],
                                [
                                    146.4221,
                                    -5.1852
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
                            "startDate": "2022-11-15T14:15:00.000Z",
                            "endDate": "2022-11-15T14:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668521700000,
                            "endTime": 1668522300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        144.98430158251327,
                                        -3.7488514450319155
                                    ],
                                    [
                                        144.98430158251327,
                                        -6.618286475265213
                                    ],
                                    [
                                        147.86644833201902,
                                        -6.618286475265213
                                    ],
                                    [
                                        147.86644833201902,
                                        -3.7488514450319155
                                    ],
                                    [
                                        144.98430158251327,
                                        -3.7488514450319155
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
                            "startDate": "2022-11-15T14:25:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668522300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        142.73325132435681,
                                        -1.4868480955425865
                                    ],
                                    [
                                        142.73325132435681,
                                        -8.861931679922032
                                    ],
                                    [
                                        150.15432055087325,
                                        -8.861931679922032
                                    ],
                                    [
                                        150.15432055087325,
                                        -1.4868480955425865
                                    ],
                                    [
                                        142.73325132435681,
                                        -1.4868480955425865
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T18:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668528300000,
                            "endTime": 1668536100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    138.68,
                                    -10.21
                                ],
                                [
                                    132.01,
                                    -15.18
                                ],
                                [
                                    124.63,
                                    -20.86
                                ],
                                [
                                    124.4507,
                                    -20.6765
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a150"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_510",
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
            "timestamp": "2022-09-23T07:47:38.728Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-513",
            "title": "Order item 513 Transit",
            "startDate": "2022-11-15T13:40:00.000Z",
            "endDate": "2022-11-15T18:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T13:40:00.000Z",
                            "endDate": "2022-11-15T14:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668519600000,
                            "endTime": 1668522600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    117.73,
                                    -21.47
                                ],
                                [
                                    117.7434,
                                    -21.0232
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
                            "startDate": "2022-11-15T14:30:00.000Z",
                            "endDate": "2022-11-15T16:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668522600000,
                            "endTime": 1668528000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        117.52139657935072,
                                        -20.815542735606822
                                    ],
                                    [
                                        117.52139657935072,
                                        -21.230568411444
                                    ],
                                    [
                                        117.96602232074963,
                                        -21.230568411444
                                    ],
                                    [
                                        117.96602232074963,
                                        -20.815542735606822
                                    ],
                                    [
                                        117.52139657935072,
                                        -20.815542735606822
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
                            "startDate": "2022-11-15T16:00:00.000Z",
                            "endDate": "2022-11-15T16:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668528000000,
                            "endTime": 1668530400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        117.46047615339094,
                                        -20.758408467885587
                                    ],
                                    [
                                        117.46047615339094,
                                        -21.287522039392808
                                    ],
                                    [
                                        118.02732978486722,
                                        -21.287522039392808
                                    ],
                                    [
                                        118.02732978486722,
                                        -20.758408467885587
                                    ],
                                    [
                                        117.46047615339094,
                                        -20.758408467885587
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
                            "startDate": "2022-11-15T16:40:00.000Z",
                            "endDate": "2022-11-15T18:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668530400000,
                            "endTime": 1668535800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    146.85,
                                    -4.89
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a197"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_513",
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
            "timestamp": "2022-09-22T21:00:34.566Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-516",
            "title": "Order item 516 Asymmetric",
            "startDate": "2022-11-15T13:40:00.000Z",
            "endDate": "2022-11-15T18:40:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T13:40:00.000Z",
                            "endDate": "2022-11-15T14:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668519600000,
                            "endTime": 1668522600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    137.75,
                                    -10.4
                                ],
                                [
                                    146.16,
                                    -8.77
                                ],
                                [
                                    145.878,
                                    -8.4283
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
                            "startDate": "2022-11-15T14:30:00.000Z",
                            "endDate": "2022-11-15T16:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668522600000,
                            "endTime": 1668530400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                145.878,
                                -8.4283
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
                            "startDate": "2022-11-15T16:40:00.000Z",
                            "endDate": "2022-11-15T18:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668530400000,
                            "endTime": 1668537600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.878,
                                    -8.4283
                                ],
                                [
                                    129.57,
                                    -12.73
                                ],
                                [
                                    129.7416,
                                    -12.6383
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a136",
                "a142",
                "a106"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a170"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_516",
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
            "timestamp": "2022-09-26T23:57:31.195Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-519",
            "title": "Order item 519 Asymmetric",
            "startDate": "2022-11-15T13:45:00.000Z",
            "endDate": "2022-11-15T20:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T13:45:00.000Z",
                            "endDate": "2022-11-15T14:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668519900000,
                            "endTime": 1668522900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.579,
                                    -14.574
                                ],
                                [
                                    132.05,
                                    -13.19
                                ],
                                [
                                    138.43,
                                    -11.91
                                ],
                                [
                                    144.1,
                                    -11.34
                                ],
                                [
                                    149.05,
                                    -10.49
                                ],
                                [
                                    149.3998,
                                    -10.1238
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
                            "startDate": "2022-11-15T14:35:00.000Z",
                            "endDate": "2022-11-15T17:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668522900000,
                            "endTime": 1668531900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.95854846965838,
                                        -6.687924931088782
                                    ],
                                    [
                                        145.95854846965838,
                                        -13.523149084605995
                                    ],
                                    [
                                        152.91518631820986,
                                        -13.523149084605995
                                    ],
                                    [
                                        152.91518631820986,
                                        -6.687924931088782
                                    ],
                                    [
                                        145.95854846965838,
                                        -6.687924931088782
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
                            "startDate": "2022-11-15T17:05:00.000Z",
                            "endDate": "2022-11-15T20:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668531900000,
                            "endTime": 1668542700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3998,
                                    -10.1238
                                ],
                                [
                                    137.83,
                                    -12.17
                                ],
                                [
                                    126.67,
                                    -14.8
                                ],
                                [
                                    126.579,
                                    -14.574
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a146",
                "a144",
                "a158"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_519",
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
            "timestamp": "2022-09-27T08:38:28.614Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-522",
            "title": "Order item 522 Kinetic",
            "startDate": "2022-11-15T14:05:00.000Z",
            "endDate": "2022-11-15T15:55:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T14:05:00.000Z",
                            "endDate": "2022-11-15T14:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668521100000,
                            "endTime": 1668524100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    140.15,
                                    -11.41
                                ],
                                [
                                    131.05,
                                    -12.08
                                ],
                                [
                                    130.7986,
                                    -11.9046
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
                            "startDate": "2022-11-15T14:55:00.000Z",
                            "endDate": "2022-11-15T15:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668524100000,
                            "endTime": 1668526500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                130.7986,
                                -11.9046
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
                            "startDate": "2022-11-15T15:35:00.000Z",
                            "endDate": "2022-11-15T15:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668526500000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    130.7986,
                                    -11.9046
                                ],
                                [
                                    148.97,
                                    -10.19
                                ],
                                [
                                    148.5732,
                                    -10.4337
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a180",
                "a173"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_522",
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
            "timestamp": "2022-09-23T23:03:26.824Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-525",
            "title": "Order item 525 Asymmetric",
            "startDate": "2022-11-15T14:05:00.000Z",
            "endDate": "2022-11-15T14:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T14:05:00.000Z",
                            "endDate": "2022-11-15T14:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668521100000,
                            "endTime": 1668524100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    143.92,
                                    -6.7
                                ],
                                [
                                    144.4062,
                                    -6.8859
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a148",
                "a130"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_525",
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
            "timestamp": "2022-09-25T03:12:25.825Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-528",
            "title": "Order item 528 Kinetic",
            "startDate": "2022-11-15T14:10:00.000Z",
            "endDate": "2022-11-15T15:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T14:10:00.000Z",
                            "endDate": "2022-11-15T15:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668521400000,
                            "endTime": 1668524400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    143.12,
                                    -14.49
                                ],
                                [
                                    146.48,
                                    -12.64
                                ],
                                [
                                    149.12,
                                    -10.51
                                ],
                                [
                                    149.3719,
                                    -10.3237
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a139"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_528",
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
            "timestamp": "2022-09-22T13:05:25.616Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-531",
            "title": "Order item 531 Asymmetric",
            "startDate": "2022-11-15T14:25:00.000Z",
            "endDate": "2022-11-15T19:15:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T14:25:00.000Z",
                            "endDate": "2022-11-15T15:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668522300000,
                            "endTime": 1668525300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    120.4755,
                                    -18.6674
                                ],
                                [
                                    129.13,
                                    -15.67
                                ],
                                [
                                    137.83,
                                    -11.64
                                ],
                                [
                                    145.81,
                                    -8.33
                                ],
                                [
                                    145.878,
                                    -8.4283
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
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T17:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668525300000,
                            "endTime": 1668533700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                145.878,
                                -8.4283
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
                            "startDate": "2022-11-15T17:35:00.000Z",
                            "endDate": "2022-11-15T19:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668533700000,
                            "endTime": 1668539700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.878,
                                    -8.4283
                                ],
                                [
                                    120.12,
                                    -18.73
                                ],
                                [
                                    120.4755,
                                    -18.6674
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a160",
                "a126"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_531",
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
            "timestamp": "2022-09-24T12:42:26.197Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-534",
            "title": "Order item 534 Kinetic",
            "startDate": "2022-11-15T14:40:00.000Z",
            "endDate": "2022-11-15T17:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T14:40:00.000Z",
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668523200000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    131.67,
                                    -10.6
                                ],
                                [
                                    124.88,
                                    -15.36
                                ],
                                [
                                    119.37,
                                    -19.83
                                ],
                                [
                                    119.0578,
                                    -19.4518
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
                            "startDate": "2022-11-15T15:30:00.000Z",
                            "endDate": "2022-11-15T16:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668526200000,
                            "endTime": 1668529800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                119.0578,
                                -19.4518
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
                            "startDate": "2022-11-15T16:30:00.000Z",
                            "endDate": "2022-11-15T17:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668529800000,
                            "endTime": 1668534600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.0578,
                                    -19.4518
                                ],
                                [
                                    123.2,
                                    -16.72
                                ],
                                [
                                    128.23,
                                    -13.11
                                ],
                                [
                                    132.55,
                                    -10.22
                                ],
                                [
                                    137.15,
                                    -7.04
                                ],
                                [
                                    137.5513,
                                    -6.7608
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a198"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_534",
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
            "timestamp": "2022-09-22T18:03:27.569Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-537",
            "title": "Order item 537 Asymmetric",
            "startDate": "2022-11-15T14:40:00.000Z",
            "endDate": "2022-11-15T15:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T14:40:00.000Z",
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668523200000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.4863,
                                    -21.3267
                                ],
                                [
                                    145.62,
                                    -8.42
                                ],
                                [
                                    145.878,
                                    -8.4283
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a129",
                "a132"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_537",
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
            "timestamp": "2022-09-25T13:08:29.732Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-540",
            "title": "Order item 540 Asymmetric",
            "startDate": "2022-11-15T14:40:00.000Z",
            "endDate": "2022-11-15T17:20:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T14:40:00.000Z",
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668523200000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    123.6516,
                                    -16.579
                                ],
                                [
                                    134.54,
                                    -12.7
                                ],
                                [
                                    144.97,
                                    -9.3
                                ],
                                [
                                    144.648,
                                    -9.6247
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
                            "startDate": "2022-11-15T15:30:00.000Z",
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668526200000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                144.648,
                                -9.6247
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
                            "startDate": "2022-11-15T15:30:00.000Z",
                            "endDate": "2022-11-15T17:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668526200000,
                            "endTime": 1668532800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    123.74,
                                    -16.97
                                ],
                                [
                                    123.6516,
                                    -16.579
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a131",
                "a126"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a185"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_540",
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
            "timestamp": "2022-09-24T13:57:32.685Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-543",
            "title": "Order item 543 Kinetic",
            "startDate": "2022-11-15T14:55:00.000Z",
            "endDate": "2022-11-15T20:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T14:55:00.000Z",
                            "endDate": "2022-11-15T15:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668524100000,
                            "endTime": 1668527100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    128.54,
                                    -12.81
                                ],
                                [
                                    119.03,
                                    -19.78
                                ],
                                [
                                    119.0578,
                                    -19.4518
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
                            "startDate": "2022-11-15T15:45:00.000Z",
                            "endDate": "2022-11-15T17:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668527100000,
                            "endTime": 1668534900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                119.0578,
                                -19.4518
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
                            "startDate": "2022-11-15T17:55:00.000Z",
                            "endDate": "2022-11-15T20:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668534900000,
                            "endTime": 1668543300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.0578,
                                    -19.4518
                                ],
                                [
                                    128.67,
                                    -12.55
                                ],
                                [
                                    138.62,
                                    -6.32
                                ],
                                [
                                    138.5853,
                                    -6.3233
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a165",
                "a194",
                "a195",
                "a169"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_543",
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
            "timestamp": "2022-09-28T04:30:36.428Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-546",
            "title": "Order item 546 Kinetic",
            "startDate": "2022-11-15T14:55:00.000Z",
            "endDate": "2022-11-15T18:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T14:55:00.000Z",
                            "endDate": "2022-11-15T15:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668524100000,
                            "endTime": 1668527100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    137.28,
                                    -13.23
                                ],
                                [
                                    140.5,
                                    -9.92
                                ],
                                [
                                    143,
                                    -7.33
                                ],
                                [
                                    146.78,
                                    -5.45
                                ],
                                [
                                    146.4221,
                                    -5.1852
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
                            "startDate": "2022-11-15T15:45:00.000Z",
                            "endDate": "2022-11-15T16:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668527100000,
                            "endTime": 1668531300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        142.87056006933554,
                                        -1.6251305641276128
                                    ],
                                    [
                                        142.87056006933554,
                                        -8.725237034868105
                                    ],
                                    [
                                        150.01382965393682,
                                        -8.725237034868105
                                    ],
                                    [
                                        150.01382965393682,
                                        -1.6251305641276128
                                    ],
                                    [
                                        142.87056006933554,
                                        -1.6251305641276128
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
                            "startDate": "2022-11-15T16:55:00.000Z",
                            "endDate": "2022-11-15T18:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668531300000,
                            "endTime": 1668537300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    143.78,
                                    -8.23
                                ],
                                [
                                    140.08,
                                    -10.36
                                ],
                                [
                                    136.66,
                                    -13.2
                                ],
                                [
                                    134.52,
                                    -15.75
                                ],
                                [
                                    134.0721,
                                    -15.5391
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a113",
                "a148",
                "a143",
                "a152"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a194"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_546",
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
            "timestamp": "2022-09-28T00:47:40.962Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-549",
            "title": "Order item 549 Transit",
            "startDate": "2022-11-15T14:55:00.000Z",
            "endDate": "2022-11-15T21:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T14:55:00.000Z",
                            "endDate": "2022-11-15T15:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668524100000,
                            "endTime": 1668527100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5793,
                                    -9.9615
                                ],
                                [
                                    140.99,
                                    -11.56
                                ],
                                [
                                    132.71,
                                    -12.85
                                ],
                                [
                                    132.9811,
                                    -13.2215
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
                            "startDate": "2022-11-15T15:45:00.000Z",
                            "endDate": "2022-11-15T15:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668527100000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        130.7761710771416,
                                        -11.047924694867456
                                    ],
                                    [
                                        130.7761710771416,
                                        -15.37584579542202
                                    ],
                                    [
                                        135.2255186824572,
                                        -15.37584579542202
                                    ],
                                    [
                                        135.2255186824572,
                                        -11.047924694867456
                                    ],
                                    [
                                        130.7761710771416,
                                        -11.047924694867456
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
                            "startDate": "2022-11-15T15:55:00.000Z",
                            "endDate": "2022-11-15T18:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668527700000,
                            "endTime": 1668538500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        129.9427974899532,
                                        -10.21323082817245
                                    ],
                                    [
                                        129.9427974899532,
                                        -16.193011177186243
                                    ],
                                    [
                                        136.09486014696222,
                                        -16.193011177186243
                                    ],
                                    [
                                        136.09486014696222,
                                        -10.21323082817245
                                    ],
                                    [
                                        129.9427974899532,
                                        -10.21323082817245
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
                            "startDate": "2022-11-15T18:55:00.000Z",
                            "endDate": "2022-11-15T21:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668538500000,
                            "endTime": 1668548100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    138.42,
                                    -11.97
                                ],
                                [
                                    143.09,
                                    -11.5
                                ],
                                [
                                    149.04,
                                    -9.75
                                ],
                                [
                                    148.5793,
                                    -9.9615
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a195",
                "a174"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_549",
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
            "timestamp": "2022-09-24T02:48:46.287Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-552",
            "title": "Order item 552 Transit",
            "startDate": "2022-11-15T14:55:00.000Z",
            "endDate": "2022-11-15T18:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T14:55:00.000Z",
                            "endDate": "2022-11-15T15:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668524100000,
                            "endTime": 1668527100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    139.26,
                                    -22.28
                                ],
                                [
                                    139.571,
                                    -21.941
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
                            "startDate": "2022-11-15T15:45:00.000Z",
                            "endDate": "2022-11-15T18:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668527100000,
                            "endTime": 1668537300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        136.17729783862023,
                                        -18.690849811218442
                                    ],
                                    [
                                        136.17729783862023,
                                        -25.118262539947096
                                    ],
                                    [
                                        143.12167611214932,
                                        -25.118262539947096
                                    ],
                                    [
                                        143.12167611214932,
                                        -18.690849811218442
                                    ],
                                    [
                                        136.17729783862023,
                                        -18.690849811218442
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
                            "startDate": "2022-11-15T18:35:00.000Z",
                            "endDate": "2022-11-15T18:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668537300000,
                            "endTime": 1668538500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.571,
                                    -21.941
                                ],
                                [
                                    140.9,
                                    -18.28
                                ],
                                [
                                    143.02,
                                    -13.84
                                ],
                                [
                                    144.42,
                                    -10.11
                                ],
                                [
                                    147.11,
                                    -6.1
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a166",
                "a177"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_552",
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
            "timestamp": "2022-09-24T18:33:52.402Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-555",
            "title": "Order item 555 Asymmetric",
            "startDate": "2022-11-15T14:55:00.000Z",
            "endDate": "2022-11-15T16:45:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a153"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a175"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_555",
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
            "timestamp": "2022-09-21T16:02:59.308Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-558",
            "title": "Order item 558 Transit",
            "startDate": "2022-11-15T15:05:00.000Z",
            "endDate": "2022-11-15T20:05:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T15:05:00.000Z",
                            "endDate": "2022-11-15T15:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668524700000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    136.64,
                                    -10.26
                                ],
                                [
                                    133.46,
                                    -12.01
                                ],
                                [
                                    130.56,
                                    -13.48
                                ],
                                [
                                    126.95,
                                    -14.66
                                ],
                                [
                                    126.839,
                                    -14.6533
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
                            "startDate": "2022-11-15T15:55:00.000Z",
                            "endDate": "2022-11-15T18:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668527700000,
                            "endTime": 1668538500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                126.839,
                                -14.6533
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
                            "startDate": "2022-11-15T18:55:00.000Z",
                            "endDate": "2022-11-15T20:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668538500000,
                            "endTime": 1668542700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    130.8,
                                    -12.76
                                ],
                                [
                                    135.94,
                                    -10.68
                                ],
                                [
                                    139.37,
                                    -8.32
                                ],
                                [
                                    139.8303,
                                    -8.5197
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a170"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_558",
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
            "timestamp": "2022-09-23T03:16:07.004Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-561",
            "title": "Order item 561 Asymmetric",
            "startDate": "2022-11-15T15:05:00.000Z",
            "endDate": "2022-11-15T15:45:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a165",
                "a198",
                "a170",
                "a180"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_561",
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
            "timestamp": "2022-09-29T04:13:15.491Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-564",
            "title": "Order item 564 Transit",
            "startDate": "2022-11-15T15:05:00.000Z",
            "endDate": "2022-11-15T20:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T15:05:00.000Z",
                            "endDate": "2022-11-15T15:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668524700000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    129,
                                    -12.48
                                ],
                                [
                                    133.96,
                                    -7.09
                                ],
                                [
                                    137.2,
                                    -1.42
                                ],
                                [
                                    137.6034,
                                    -1.484
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
                            "startDate": "2022-11-15T15:55:00.000Z",
                            "endDate": "2022-11-15T19:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668527700000,
                            "endTime": 1668539100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        136.3170919618797,
                                        -0.1973255768674355
                                    ],
                                    [
                                        136.3170919618797,
                                        -2.769925958323886
                                    ],
                                    [
                                        138.89120528083464,
                                        -2.769925958323886
                                    ],
                                    [
                                        138.89120528083464,
                                        -0.1973255768674355
                                    ],
                                    [
                                        136.3170919618797,
                                        -0.1973255768674355
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
                            "startDate": "2022-11-15T19:05:00.000Z",
                            "endDate": "2022-11-15T20:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668539100000,
                            "endTime": 1668545100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    125.37,
                                    -18.09
                                ],
                                [
                                    125.2749,
                                    -17.6467
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a132"
            ],
            "otherAssets": [
                "a168"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_564",
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
            "timestamp": "2022-09-23T02:54:24.768Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-567",
            "title": "Order item 567 Transit",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T20:15:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    127.37,
                                    -16.98
                                ],
                                [
                                    126.8957,
                                    -17.0157
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T18:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668528300000,
                            "endTime": 1668537300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                126.8957,
                                -17.0157
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
                            "startDate": "2022-11-15T18:35:00.000Z",
                            "endDate": "2022-11-15T20:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668537300000,
                            "endTime": 1668543300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    141.86,
                                    -8.04
                                ],
                                [
                                    141.6774,
                                    -8.4284
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a179"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_567",
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
            "timestamp": "2022-09-21T15:19:34.836Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-570",
            "title": "Order item 570 Kinetic",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T20:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    136.7,
                                    -12.51
                                ],
                                [
                                    138.53,
                                    -10.29
                                ],
                                [
                                    139.65,
                                    -7.78
                                ],
                                [
                                    139.3171,
                                    -8.0633
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T16:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668528300000,
                            "endTime": 1668531300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        135.31174158683822,
                                        -4.048323309798692
                                    ],
                                    [
                                        135.31174158683822,
                                        -12.038627979295706
                                    ],
                                    [
                                        143.40244392944425,
                                        -12.038627979295706
                                    ],
                                    [
                                        143.40244392944425,
                                        -4.048323309798692
                                    ],
                                    [
                                        135.31174158683822,
                                        -4.048323309798692
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
                            "startDate": "2022-11-15T16:55:00.000Z",
                            "endDate": "2022-11-15T20:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668531300000,
                            "endTime": 1668542700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    135.69,
                                    -14.59
                                ],
                                [
                                    136.121,
                                    -14.4905
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a159",
                "a127"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_570",
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
            "timestamp": "2022-09-24T17:28:45.694Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-573",
            "title": "Order item 573 Kinetic",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T22:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    138.74,
                                    -15.61
                                ],
                                [
                                    138.7422,
                                    -15.9904
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T19:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668528300000,
                            "endTime": 1668539700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.38550548841502,
                                        -14.673681590479633
                                    ],
                                    [
                                        137.38550548841502,
                                        -17.29849897087058
                                    ],
                                    [
                                        140.11682431125243,
                                        -17.29849897087058
                                    ],
                                    [
                                        140.11682431125243,
                                        -14.673681590479633
                                    ],
                                    [
                                        137.38550548841502,
                                        -14.673681590479633
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
                            "startDate": "2022-11-15T19:15:00.000Z",
                            "endDate": "2022-11-15T22:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668539700000,
                            "endTime": 1668551100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    137.5,
                                    -7.18
                                ],
                                [
                                    137.5513,
                                    -6.7608
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a165",
                "a174"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_573",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T01:21:57.343Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-576",
            "title": "Order item 576 Asymmetric",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T22:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.7545,
                                    -5.607
                                ],
                                [
                                    142.87,
                                    -14
                                ],
                                [
                                    139.43,
                                    -21.97
                                ],
                                [
                                    139.571,
                                    -21.941
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T18:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668528300000,
                            "endTime": 1668538500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.83223912616228,
                                        -20.301027560727324
                                    ],
                                    [
                                        137.83223912616228,
                                        -23.562260271513793
                                    ],
                                    [
                                        141.35009539680095,
                                        -23.562260271513793
                                    ],
                                    [
                                        141.35009539680095,
                                        -20.301027560727324
                                    ],
                                    [
                                        137.83223912616228,
                                        -20.301027560727324
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
                            "startDate": "2022-11-15T18:55:00.000Z",
                            "endDate": "2022-11-15T22:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668538500000,
                            "endTime": 1668549900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.571,
                                    -21.941
                                ],
                                [
                                    145.9,
                                    -5.27
                                ],
                                [
                                    145.7545,
                                    -5.607
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a189",
                "a193",
                "a169",
                "a195"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_576",
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
            "timestamp": "2022-09-27T22:59:09.782Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-579",
            "title": "Order item 579 Transit",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T22:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.9287,
                                    -8.5974
                                ],
                                [
                                    137.78,
                                    -9.96
                                ],
                                [
                                    135.49,
                                    -10.46
                                ],
                                [
                                    134.49,
                                    -11.68
                                ],
                                [
                                    132.77,
                                    -13.62
                                ],
                                [
                                    132.9811,
                                    -13.2215
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T19:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668528300000,
                            "endTime": 1668539100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        130.01288425820138,
                                        -10.283686640425678
                                    ],
                                    [
                                        130.01288425820138,
                                        -16.124251435566563
                                    ],
                                    [
                                        136.02129429151,
                                        -16.124251435566563
                                    ],
                                    [
                                        136.02129429151,
                                        -10.283686640425678
                                    ],
                                    [
                                        130.01288425820138,
                                        -10.283686640425678
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
                            "startDate": "2022-11-15T19:05:00.000Z",
                            "endDate": "2022-11-15T19:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668539100000,
                            "endTime": 1668540900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        132.55574858134443,
                                        -12.806377382240639
                                    ],
                                    [
                                        132.55574858134443,
                                        -13.635917147260862
                                    ],
                                    [
                                        133.40790075546371,
                                        -13.635917147260862
                                    ],
                                    [
                                        133.40790075546371,
                                        -12.806377382240639
                                    ],
                                    [
                                        132.55574858134443,
                                        -12.806377382240639
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
                            "startDate": "2022-11-15T19:35:00.000Z",
                            "endDate": "2022-11-15T22:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668540900000,
                            "endTime": 1668552300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    134.85,
                                    -11.79
                                ],
                                [
                                    136.77,
                                    -10.33
                                ],
                                [
                                    138.96,
                                    -8.58
                                ],
                                [
                                    138.9287,
                                    -8.5974
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Transit",
            "ownAssets": [
                "a195",
                "a193",
                "a161",
                "a185"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_579",
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
            "timestamp": "2022-09-28T02:20:23.012Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-582",
            "title": "Order item 582 Kinetic",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T19:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    121.1967,
                                    -18.1747
                                ],
                                [
                                    130.08,
                                    -13.98
                                ],
                                [
                                    138.21,
                                    -9.53
                                ],
                                [
                                    146.64,
                                    -4.79
                                ],
                                [
                                    146.4221,
                                    -5.1852
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T17:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668528300000,
                            "endTime": 1668534900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                146.4221,
                                -5.1852
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
                            "startDate": "2022-11-15T17:55:00.000Z",
                            "endDate": "2022-11-15T19:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668534900000,
                            "endTime": 1668539100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    121.34,
                                    -17.84
                                ],
                                [
                                    121.1967,
                                    -18.1747
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a136",
                "a125"
            ],
            "otherAssets": [
                "a168",
                "a197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_582",
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
            "timestamp": "2022-09-24T11:25:37.032Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-585",
            "title": "Order item 585 Asymmetric",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T18:55:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    118.78,
                                    -19.54
                                ],
                                [
                                    119.0578,
                                    -19.4518
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T17:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668528300000,
                            "endTime": 1668534900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                119.0578,
                                -19.4518
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
                            "startDate": "2022-11-15T17:55:00.000Z",
                            "endDate": "2022-11-15T18:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668534900000,
                            "endTime": 1668538500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.0578,
                                    -19.4518
                                ],
                                [
                                    125.88,
                                    -16.53
                                ],
                                [
                                    131.68,
                                    -14.63
                                ],
                                [
                                    137.77,
                                    -12.45
                                ],
                                [
                                    144.14,
                                    -9.98
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a194",
                "a179"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_585",
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
            "timestamp": "2022-09-25T10:14:51.843Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-588",
            "title": "Order item 588 Kinetic",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T19:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.185,
                                    -13.1681
                                ],
                                [
                                    138.53,
                                    -12.62
                                ],
                                [
                                    144.04,
                                    -10.93
                                ],
                                [
                                    149.82,
                                    -9.96
                                ],
                                [
                                    149.3719,
                                    -10.3237
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T16:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668528300000,
                            "endTime": 1668530700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.82380305694898,
                                        -7.789059240800246
                                    ],
                                    [
                                        146.82380305694898,
                                        -12.838040756342126
                                    ],
                                    [
                                        151.96124297385356,
                                        -12.838040756342126
                                    ],
                                    [
                                        151.96124297385356,
                                        -7.789059240800246
                                    ],
                                    [
                                        146.82380305694898,
                                        -7.789059240800246
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
                            "startDate": "2022-11-15T16:45:00.000Z",
                            "endDate": "2022-11-15T19:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668530700000,
                            "endTime": 1668540300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.55994629302612,
                                        -7.523702713292877
                                    ],
                                    [
                                        146.55994629302612,
                                        -13.098934754625184
                                    ],
                                    [
                                        152.23416089463615,
                                        -13.098934754625184
                                    ],
                                    [
                                        152.23416089463615,
                                        -7.523702713292877
                                    ],
                                    [
                                        146.55994629302612,
                                        -7.523702713292877
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
                            "startDate": "2022-11-15T19:25:00.000Z",
                            "endDate": "2022-11-15T19:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668540300000,
                            "endTime": 1668542100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    145.38,
                                    -10.86
                                ],
                                [
                                    141.21,
                                    -11.59
                                ],
                                [
                                    137.32,
                                    -12.04
                                ],
                                [
                                    132.71,
                                    -13.2
                                ],
                                [
                                    133.185,
                                    -13.1681
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a140"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a178"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_588",
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
            "timestamp": "2022-09-22T14:48:07.445Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-591",
            "title": "Order item 591 Asymmetric",
            "startDate": "2022-11-15T15:20:00.000Z",
            "endDate": "2022-11-15T17:20:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T15:20:00.000Z",
                            "endDate": "2022-11-15T16:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668525600000,
                            "endTime": 1668528600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.2461,
                                    -10.1388
                                ],
                                [
                                    145.66,
                                    -15.56
                                ],
                                [
                                    142.56,
                                    -20.51
                                ],
                                [
                                    142.9809,
                                    -20.6715
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
                            "startDate": "2022-11-15T16:10:00.000Z",
                            "endDate": "2022-11-15T16:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668528600000,
                            "endTime": 1668531000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                142.9809,
                                -20.6715
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
                            "startDate": "2022-11-15T16:50:00.000Z",
                            "endDate": "2022-11-15T17:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668531000000,
                            "endTime": 1668532800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    144.06,
                                    -17.77
                                ],
                                [
                                    146.05,
                                    -14.97
                                ],
                                [
                                    147.33,
                                    -12.88
                                ],
                                [
                                    147.89,
                                    -10.51
                                ],
                                [
                                    148.2461,
                                    -10.1388
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a200",
                "a175"
            ],
            "otherAssets": [
                "a111",
                "a157"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_591",
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
            "timestamp": "2022-09-24T09:05:23.837Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-594",
            "title": "Order item 594 Kinetic",
            "startDate": "2022-11-15T15:20:00.000Z",
            "endDate": "2022-11-15T16:50:00.000Z",
            "location": [],
            "activity": "Kinetic",
            "ownAssets": [
                "a155"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a174"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_594",
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
            "timestamp": "2022-09-22T09:06:41.019Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-597",
            "title": "Order item 597 Asymmetric",
            "startDate": "2022-11-15T15:30:00.000Z",
            "endDate": "2022-11-15T20:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T15:30:00.000Z",
                            "endDate": "2022-11-15T16:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668526200000,
                            "endTime": 1668529200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    131.93,
                                    -9.4
                                ],
                                [
                                    135.24,
                                    -6.06
                                ],
                                [
                                    136.83,
                                    -2.44
                                ],
                                [
                                    137.2844,
                                    -2.7856
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
                            "startDate": "2022-11-15T16:20:00.000Z",
                            "endDate": "2022-11-15T19:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668529200000,
                            "endTime": 1668540000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        133.33482125596018,
                                        1.1697817388410208
                                    ],
                                    [
                                        133.33482125596018,
                                        -6.72768225643905
                                    ],
                                    [
                                        141.26057718941072,
                                        -6.72768225643905
                                    ],
                                    [
                                        141.26057718941072,
                                        1.1697817388410208
                                    ],
                                    [
                                        133.33482125596018,
                                        1.1697817388410208
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
                            "startDate": "2022-11-15T19:20:00.000Z",
                            "endDate": "2022-11-15T20:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668540000000,
                            "endTime": 1668542400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    130.12,
                                    -12.43
                                ],
                                [
                                    129.7416,
                                    -12.6383
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Asymmetric",
            "ownAssets": [
                "a126",
                "a129"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a186"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_597",
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
            "timestamp": "2022-09-24T22:51:58.992Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red Force-600",
            "title": "Order item 600 Asymmetric",
            "startDate": "2022-11-15T15:40:00.000Z",
            "endDate": "2022-11-15T16:10:00.000Z",
            "location": [],
            "activity": "Asymmetric",
            "ownAssets": [
                "a126",
                "a118"
            ],
            "otherAssets": [
                "a168",
                "a197",
                "a175"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_600",
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
            "timestamp": "2022-09-23T18:21:17.756Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-603",
            "title": "Order item 603 Kinetic",
            "startDate": "2022-11-15T16:00:00.000Z",
            "endDate": "2022-11-15T17:10:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T16:00:00.000Z",
                            "endDate": "2022-11-15T16:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668528000000,
                            "endTime": 1668531000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.9287,
                                    -3.3935
                                ],
                                [
                                    134.26,
                                    -9.47
                                ],
                                [
                                    129.04,
                                    -16.09
                                ],
                                [
                                    129.3162,
                                    -16.1699
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
                            "startDate": "2022-11-15T16:50:00.000Z",
                            "endDate": "2022-11-15T17:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668531000000,
                            "endTime": 1668531600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                129.3162,
                                -16.1699
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
                            "startDate": "2022-11-15T17:00:00.000Z",
                            "endDate": "2022-11-15T17:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668531600000,
                            "endTime": 1668532200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.3162,
                                    -16.1699
                                ],
                                [
                                    132.01,
                                    -12.83
                                ],
                                [
                                    134.54,
                                    -9.66
                                ],
                                [
                                    137.36,
                                    -6.21
                                ],
                                [
                                    139.45,
                                    -3.47
                                ],
                                [
                                    139.9287,
                                    -3.3935
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "Kinetic",
            "ownAssets": [
                "a198",
                "a189",
                "a191"
            ],
            "otherAssets": [
                "a111",
                "a157",
                "a109"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_603",
        "_rev": "2"
    }
]