
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
        }
    ]