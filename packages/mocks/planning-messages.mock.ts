
import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'

export const planningMessages: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> = [
    {
        messageType: "InteractionMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Blue",
                forceColor: "#00F",
                roleName: "Logs",
                roleId: "rk116f5e",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Blue"
            },
            messageType: "Land Activity",
            interaction: {
                startTime: "2022-11-15T00:00:00.000Z",
                endTime: "2022-11-15T05:30:00.000Z",
                orders1: "m_F-Blue_12",
                orders2: "m_F-Red_27"
            },
            timestamp: "2022-09-23T14:47:47.015Z",
            turnNumber: 3
        },
        message: {
            Reference: "Blue-21",
            locationOutcomes: [],
            perceptionOutcomes: [],
            healthOutcomes: []
        },
        hasBeenRead: false,
        _id: "adjud_23423",
        _rev: "m_F-Red_27"
    },
    {
        messageType: "InteractionMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Blue",
                forceColor: "#00F",
                roleName: "Logs",
                roleId: "rk116f5e",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Blue"
            },
            messageType: "Land Activity",
            interaction: {
                complete: true,
                startTime: "2022-11-15T04:00:00.000Z",
                endTime: "2022-11-15T06:30:00.000Z",
                orders1: "m_F-Blue_24",
                orders2: "m_F-Red_30"
            },
            timestamp: "2022-09-23T14:41:47.015Z",
            turnNumber: 3
        },
        message: {
            Reference: "Blue-15",
            locationOutcomes: [],
            perceptionOutcomes: [],
            healthOutcomes: []
        },
        hasBeenRead: false,
        _id: "adjud_23111",
        _rev: "m_F-Red_34"
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    131.44,
                                    -12.85
                                ],
                                [
                                    123.82,
                                    -16.41
                                ],
                                [
                                    116.47,
                                    -21.68
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
                    "uniqid": "aa9",
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
                    "uniqid": "aa9",
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
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    143.55,
                                    -15.17
                                ],
                                [
                                    144.9,
                                    -11.27
                                ],
                                [
                                    145.54,
                                    -8.08
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
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    136.81,
                                    -10.77
                                ],
                                [
                                    132.82,
                                    -13.99
                                ],
                                [
                                    129.12,
                                    -15.93
                                ],
                                [
                                    129.3162,
                                    -16.1699
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
                    "uniqid": "aa9",
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
                    "uniqid": "aa9",
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
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    134.27,
                                    -9.03
                                ],
                                [
                                    128.97,
                                    -12.74
                                ],
                                [
                                    123.95,
                                    -16.17
                                ],
                                [
                                    119.21,
                                    -19.31
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
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    143.22,
                                    -13.68
                                ],
                                [
                                    141.18,
                                    -17.35
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
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    125.26,
                                    -16.41
                                ],
                                [
                                    131.89,
                                    -12.69
                                ],
                                [
                                    138.81,
                                    -7.68
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
            "startDate": "2022-11-15T00:15:00.000Z",
            "endDate": "2022-11-15T03:25:00.000Z",
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
            "startDate": "2022-11-15T00:45:00.000Z",
            "endDate": "2022-11-15T03:05:00.000Z",
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
                            "startDate": "2022-11-15T01:35:00.000Z",
                            "endDate": "2022-11-15T01:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668476100000,
                            "endTime": 1668476100000
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
                            "startDate": "2022-11-15T01:35:00.000Z",
                            "endDate": "2022-11-15T03:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668476100000,
                            "endTime": 1668481500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    132.42,
                                    -15.1
                                ],
                                [
                                    137.83,
                                    -13.32
                                ],
                                [
                                    143.52,
                                    -12.25
                                ],
                                [
                                    149.5,
                                    -9.89
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
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T03:10:00.000Z",
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
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T03:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668481200000
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
                            "startDate": "2022-11-15T03:00:00.000Z",
                            "endDate": "2022-11-15T03:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668481200000,
                            "endTime": 1668481800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    134.07,
                                    -7.95
                                ],
                                [
                                    132,
                                    -9.63
                                ],
                                [
                                    130.2,
                                    -12.03
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
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T04:20:00.000Z",
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
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668477600000,
                            "endTime": 1668484200000
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
                            "startDate": "2022-11-15T03:50:00.000Z",
                            "endDate": "2022-11-15T04:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668484200000,
                            "endTime": 1668486000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    122.0714,
                                    -17.8384
                                ],
                                [
                                    125.52,
                                    -14.35
                                ],
                                [
                                    129.84,
                                    -10
                                ],
                                [
                                    133.44,
                                    -6.36
                                ],
                                [
                                    137.32,
                                    -1.45
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
            "startDate": "2022-11-15T01:15:00.000Z",
            "endDate": "2022-11-15T02:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T01:15:00.000Z",
                            "endDate": "2022-11-15T02:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668474900000,
                            "endTime": 1668477900000
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
            "startDate": "2022-11-15T01:45:00.000Z",
            "endDate": "2022-11-15T03:45:00.000Z",
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
            "startDate": "2022-11-15T01:45:00.000Z",
            "endDate": "2022-11-15T04:05:00.000Z",
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
            "startDate": "2022-11-15T01:45:00.000Z",
            "endDate": "2022-11-15T05:45:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T01:45:00.000Z",
                            "endDate": "2022-11-15T02:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668476700000,
                            "endTime": 1668479700000
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
                            "startDate": "2022-11-15T02:35:00.000Z",
                            "endDate": "2022-11-15T04:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668479700000,
                            "endTime": 1668485100000
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
                            "startDate": "2022-11-15T04:05:00.000Z",
                            "endDate": "2022-11-15T05:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668485100000,
                            "endTime": 1668491100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    137.49,
                                    -9.98
                                ],
                                [
                                    129.91,
                                    -12.76
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
            "startDate": "2022-11-15T01:45:00.000Z",
            "endDate": "2022-11-15T05:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T01:45:00.000Z",
                            "endDate": "2022-11-15T02:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668476700000,
                            "endTime": 1668479700000
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
                            "startDate": "2022-11-15T02:35:00.000Z",
                            "endDate": "2022-11-15T04:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668479700000,
                            "endTime": 1668488100000
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
                            "startDate": "2022-11-15T04:55:00.000Z",
                            "endDate": "2022-11-15T05:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668488100000,
                            "endTime": 1668489300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    130.0699,
                                    -12.4965
                                ],
                                [
                                    138.15,
                                    -9.93
                                ],
                                [
                                    146.68,
                                    -7.93
                                ],
                                [
                                    146.6751,
                                    -7.7565
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
                            "force": "F-Red",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
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
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T05:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668480600000,
                            "endTime": 1668490800000
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
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Target Area",
                            "startDate": "2022-11-15T05:40:00.000Z",
                            "endDate": "2022-11-15T05:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668490800000,
                            "endTime": 1668490800000
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
                            "startDate": "2022-11-15T05:40:00.000Z",
                            "endDate": "2022-11-15T08:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668490800000,
                            "endTime": 1668499800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    137.46,
                                    -13.81
                                ],
                                [
                                    140.77,
                                    -11.17
                                ],
                                [
                                    143.36,
                                    -9.24
                                ],
                                [
                                    146.23,
                                    -8.04
                                ],
                                [
                                    146.6751,
                                    -7.7565
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
            "startDate": "2022-11-15T02:15:00.000Z",
            "endDate": "2022-11-15T08:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T02:15:00.000Z",
                            "endDate": "2022-11-15T03:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668478500000,
                            "endTime": 1668481500000
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
                            "startDate": "2022-11-15T03:05:00.000Z",
                            "endDate": "2022-11-15T05:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668481500000,
                            "endTime": 1668491700000
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
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T08:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668491700000,
                            "endTime": 1668501300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    132.65,
                                    -11.75
                                ],
                                [
                                    137,
                                    -9.72
                                ],
                                [
                                    141.64,
                                    -8.41
                                ],
                                [
                                    146.56,
                                    -5.81
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
            "startDate": "2022-11-15T02:45:00.000Z",
            "endDate": "2022-11-15T03:25:00.000Z",
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
            "startDate": "2022-11-15T02:45:00.000Z",
            "endDate": "2022-11-15T06:55:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T02:45:00.000Z",
                            "endDate": "2022-11-15T03:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668480300000,
                            "endTime": 1668483300000
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
                            "startDate": "2022-11-15T03:35:00.000Z",
                            "endDate": "2022-11-15T05:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668483300000,
                            "endTime": 1668491100000
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
                            "startDate": "2022-11-15T05:45:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668491100000,
                            "endTime": 1668495300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    146.93,
                                    -10.25
                                ],
                                [
                                    147.4089,
                                    -10.3741
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
            "startDate": "2022-11-15T03:00:00.000Z",
            "endDate": "2022-11-15T03:00:00.000Z",
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
            "startDate": "2022-11-15T03:00:00.000Z",
            "endDate": "2022-11-15T03:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T03:00:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668481200000,
                            "endTime": 1668484200000
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
            "startDate": "2022-11-15T03:00:00.000Z",
            "endDate": "2022-11-15T04:40:00.000Z",
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
            "startDate": "2022-11-15T03:00:00.000Z",
            "endDate": "2022-11-15T06:40:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T03:00:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668481200000,
                            "endTime": 1668484200000
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
                            "startDate": "2022-11-15T03:50:00.000Z",
                            "endDate": "2022-11-15T04:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668484200000,
                            "endTime": 1668487800000
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
                            "startDate": "2022-11-15T04:50:00.000Z",
                            "endDate": "2022-11-15T06:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668487800000,
                            "endTime": 1668494400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    142.61,
                                    -13.44
                                ],
                                [
                                    146.12,
                                    -20.1
                                ],
                                [
                                    146.5324,
                                    -20.2695
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
            "startDate": "2022-11-15T03:00:00.000Z",
            "endDate": "2022-11-15T07:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T03:00:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668481200000,
                            "endTime": 1668484200000
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
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
                            "startDate": "2022-11-15T03:50:00.000Z",
                            "endDate": "2022-11-15T04:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668484200000,
                            "endTime": 1668487800000
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
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Target Area",
                            "startDate": "2022-11-15T04:50:00.000Z",
                            "endDate": "2022-11-15T06:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668487800000,
                            "endTime": 1668492000000
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
                            "startDate": "2022-11-15T06:00:00.000Z",
                            "endDate": "2022-11-15T07:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668492000000,
                            "endTime": 1668495600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    136.78,
                                    -13.06
                                ],
                                [
                                    135.5,
                                    -18.87
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
            "startDate": "2022-11-15T03:00:00.000Z",
            "endDate": "2022-11-15T04:00:00.000Z",
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
            "startDate": "2022-11-15T03:00:00.000Z",
            "endDate": "2022-11-15T05:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T03:00:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668481200000,
                            "endTime": 1668484200000
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
                            "startDate": "2022-11-15T03:50:00.000Z",
                            "endDate": "2022-11-15T04:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668484200000,
                            "endTime": 1668487200000
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
                            "startDate": "2022-11-15T04:40:00.000Z",
                            "endDate": "2022-11-15T05:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668487200000,
                            "endTime": 1668489000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    144.39,
                                    -13.45
                                ],
                                [
                                    140.69,
                                    -16.99
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
            "startDate": "2022-11-15T03:00:00.000Z",
            "endDate": "2022-11-15T08:10:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T03:00:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668481200000,
                            "endTime": 1668484200000
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
                            "startDate": "2022-11-15T03:50:00.000Z",
                            "endDate": "2022-11-15T07:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668484200000,
                            "endTime": 1668495600000
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
                            "startDate": "2022-11-15T07:00:00.000Z",
                            "endDate": "2022-11-15T08:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668495600000,
                            "endTime": 1668499800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    134.75,
                                    -12.07
                                ],
                                [
                                    139.88,
                                    -10.38
                                ],
                                [
                                    144.3,
                                    -9.41
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
            "startDate": "2022-11-15T03:05:00.000Z",
            "endDate": "2022-11-15T06:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T03:05:00.000Z",
                            "endDate": "2022-11-15T03:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668481500000,
                            "endTime": 1668484500000
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
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
                            "startDate": "2022-11-15T03:55:00.000Z",
                            "endDate": "2022-11-15T04:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668484500000,
                            "endTime": 1668486900000
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
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Target Area",
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668486900000,
                            "endTime": 1668489300000
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
                            "startDate": "2022-11-15T05:15:00.000Z",
                            "endDate": "2022-11-15T06:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668489300000,
                            "endTime": 1668492900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.2461,
                                    -10.1388
                                ],
                                [
                                    146.46,
                                    -12.4
                                ],
                                [
                                    145.66,
                                    -15.69
                                ],
                                [
                                    144.13,
                                    -17.7
                                ],
                                [
                                    142.89,
                                    -20.43
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
                "a198"
            ],
            "otherAssets": [
                "a111"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_93",
        "_rev": "2"
    }
]