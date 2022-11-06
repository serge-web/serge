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
            "title": "Order item 6",
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
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    145.62,
                                    -14.82
                                ],
                                [
                                    142.41,
                                    -19.65
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
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a179",
                    "number": 0
                }
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
            "title": "Order item 9",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T04:55:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    144.01,
                                    -17.87
                                ],
                                [
                                    143.95,
                                    -14.17
                                ],
                                [
                                    145.16,
                                    -11.19
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T00:55:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668473700000,
                            "endTime": 1668482100000
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
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T04:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668482100000,
                            "endTime": 1668488100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.878,
                                    -8.4283
                                ],
                                [
                                    144.92,
                                    -12.86
                                ],
                                [
                                    144.06,
                                    -16.21
                                ],
                                [
                                    142.49,
                                    -20.26
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
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a128",
                    "number": 1
                },
                {
                    "asset": "a157",
                    "number": 3
                },
                {
                    "asset": "a147",
                    "number": 0
                },
                {
                    "asset": "a153",
                    "number": 2
                }
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
            "title": "Order item 12",
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
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    142.55,
                                    -11.36
                                ],
                                [
                                    135,
                                    -13.03
                                ],
                                [
                                    127.72,
                                    -13.41
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
            "activity": "land-transit",
            "ownAssets": [
                {
                    "asset": "a196",
                    "number": 0
                }
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
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    132.98,
                                    -15.26
                                ],
                                [
                                    116.96,
                                    -21.03
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
                                        112.89633071233679,
                                        -17.198743389873794
                                    ],
                                    [
                                        112.89633071233679,
                                        -24.562737456048836
                                    ],
                                    [
                                        120.80225783113329,
                                        -24.562737456048836
                                    ],
                                    [
                                        120.80225783113329,
                                        -17.198743389873794
                                    ],
                                    [
                                        112.89633071233679,
                                        -17.198743389873794
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
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    128.08,
                                    -17.05
                                ],
                                [
                                    138.45,
                                    -14.14
                                ],
                                [
                                    149.1,
                                    -9.95
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
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a196",
                    "number": 4
                }
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
            "title": "Order item 18",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T03:55:00.000Z",
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    130.1,
                                    -13.4
                                ],
                                [
                                    120.22,
                                    -18.4
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
                                        118.41572292732938,
                                        -16.683001434113105
                                    ],
                                    [
                                        118.41572292732938,
                                        -20.628816633025632
                                    ],
                                    [
                                        122.58377391994813,
                                        -20.628816633025632
                                    ],
                                    [
                                        122.58377391994813,
                                        -16.683001434113105
                                    ],
                                    [
                                        118.41572292732938,
                                        -16.683001434113105
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
                            "startDate": "2022-11-15T01:05:00.000Z",
                            "endDate": "2022-11-15T03:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668474300000,
                            "endTime": 1668482700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        118.53362421231826,
                                        -16.79833018586864
                                    ],
                                    [
                                        118.53362421231826,
                                        -20.516070918772964
                                    ],
                                    [
                                        122.46042379583633,
                                        -20.516070918772964
                                    ],
                                    [
                                        122.46042379583633,
                                        -16.79833018586864
                                    ],
                                    [
                                        118.53362421231826,
                                        -16.79833018586864
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
                            "startDate": "2022-11-15T03:25:00.000Z",
                            "endDate": "2022-11-15T03:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668482700000,
                            "endTime": 1668484500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    120.4755,
                                    -18.6674
                                ],
                                [
                                    130.04,
                                    -13.51
                                ],
                                [
                                    139.04,
                                    -7.93
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
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a179",
                    "number": 3
                },
                {
                    "asset": "a185",
                    "number": 5
                },
                {
                    "asset": "a197",
                    "number": 2
                }
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
            "title": "Order item 21",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T06:55:00.000Z",
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
                                    135.13,
                                    -13.43
                                ],
                                [
                                    125.67,
                                    -17.18
                                ],
                                [
                                    116.49,
                                    -20.65
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
                            "startDate": "2022-11-15T00:55:00.000Z",
                            "endDate": "2022-11-15T04:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668473700000,
                            "endTime": 1668485100000
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
                            "startDate": "2022-11-15T04:05:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668485100000,
                            "endTime": 1668495300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    144.29,
                                    -9.58
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
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a185",
                    "number": 5
                },
                {
                    "asset": "a180",
                    "number": 5
                }
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
            "title": "Order item 24",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T03:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    136.44,
                                    -10.4
                                ],
                                [
                                    130.66,
                                    -11.94
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
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T00:55:00.000Z",
                            "endDate": "2022-11-15T02:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668473700000,
                            "endTime": 1668479700000
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
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
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
                                    130.7986,
                                    -11.9046
                                ],
                                [
                                    136.64,
                                    -10.52
                                ],
                                [
                                    141.89,
                                    -8.73
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
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a171",
                    "number": 3
                }
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
            "title": "Order item 27",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T00:05:00.000Z",
            "location": [],
            "activity": "maritime-cyber",
            "ownAssets": [
                {
                    "asset": "a130",
                    "number": 1
                }
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
            "title": "Order item 30",
            "startDate": "2022-11-15T00:10:00.000Z",
            "endDate": "2022-11-15T05:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T00:10:00.000Z",
                            "endDate": "2022-11-15T01:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668471000000,
                            "endTime": 1668474000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    132.72,
                                    -14.79
                                ],
                                [
                                    140.44,
                                    -12.66
                                ],
                                [
                                    147.45,
                                    -10.25
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
                            "startDate": "2022-11-15T01:00:00.000Z",
                            "endDate": "2022-11-15T01:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668474000000,
                            "endTime": 1668477000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.1244671906956,
                                        -7.506769661073324
                                    ],
                                    [
                                        145.1244671906956,
                                        -12.23620394136901
                                    ],
                                    [
                                        149.92948214888057,
                                        -12.23620394136901
                                    ],
                                    [
                                        149.92948214888057,
                                        -7.506769661073324
                                    ],
                                    [
                                        145.1244671906956,
                                        -7.506769661073324
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
                            "startDate": "2022-11-15T01:50:00.000Z",
                            "endDate": "2022-11-15T04:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668477000000,
                            "endTime": 1668484800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.49503928774186,
                                        -5.86231276762047
                                    ],
                                    [
                                        143.49503928774186,
                                        -13.84898279563646
                                    ],
                                    [
                                        151.62310435478463,
                                        -13.84898279563646
                                    ],
                                    [
                                        151.62310435478463,
                                        -5.86231276762047
                                    ],
                                    [
                                        143.49503928774186,
                                        -5.86231276762047
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
                            "startDate": "2022-11-15T04:00:00.000Z",
                            "endDate": "2022-11-15T05:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668484800000,
                            "endTime": 1668490800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    135.98,
                                    -13.38
                                ],
                                [
                                    124.9,
                                    -17.45
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
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a114",
                    "number": 2
                },
                {
                    "asset": "a143",
                    "number": 4
                },
                {
                    "asset": "a131",
                    "number": 3
                }
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
            "title": "Order item 33",
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
                                    131.5532,
                                    -12.4334
                                ],
                                [
                                    137.61,
                                    -11.32
                                ],
                                [
                                    143.83,
                                    -11.05
                                ],
                                [
                                    149.33,
                                    -10.5
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
                                149.3719,
                                -10.3237
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
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    144.82,
                                    -10.66
                                ],
                                [
                                    140.14,
                                    -11.13
                                ],
                                [
                                    135.76,
                                    -12.3
                                ],
                                [
                                    131.65,
                                    -12.2
                                ],
                                [
                                    131.5532,
                                    -12.4334
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-point-recce",
            "ownAssets": [
                {
                    "asset": "a134",
                    "number": 1
                },
                {
                    "asset": "a152",
                    "number": 1
                },
                {
                    "asset": "a131",
                    "number": 4
                },
                {
                    "asset": "a126",
                    "number": 0
                }
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
            "title": "Order item 36",
            "startDate": "2022-11-15T00:45:00.000Z",
            "endDate": "2022-11-15T02:15:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a176",
                    "number": 1
                },
                {
                    "asset": "a185",
                    "number": 3
                },
                {
                    "asset": "a161",
                    "number": 4
                }
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
            "title": "Order item 39",
            "startDate": "2022-11-15T00:45:00.000Z",
            "endDate": "2022-11-15T01:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
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
                                    126.579,
                                    -14.574
                                ],
                                [
                                    131.3,
                                    -12.47
                                ],
                                [
                                    135.24,
                                    -10.15
                                ],
                                [
                                    139.47,
                                    -8.54
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
            "activity": "land-transit",
            "ownAssets": [
                {
                    "asset": "a148",
                    "number": 5
                },
                {
                    "asset": "a150",
                    "number": 0
                },
                {
                    "asset": "a110",
                    "number": 1
                },
                {
                    "asset": "a146",
                    "number": 2
                }
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
            "title": "Order item 42",
            "startDate": "2022-11-15T00:50:00.000Z",
            "endDate": "2022-11-15T03:10:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a146",
                    "number": 2
                },
                {
                    "asset": "a139",
                    "number": 2
                },
                {
                    "asset": "a149",
                    "number": 1
                }
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
                                    147.4089,
                                    -10.3741
                                ],
                                [
                                    133.02,
                                    -13.57
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
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T02:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668477600000
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
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    140.36,
                                    -11.81
                                ],
                                [
                                    147.1,
                                    -10.06
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
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a171",
                    "number": 3
                },
                {
                    "asset": "a199",
                    "number": 4
                },
                {
                    "asset": "a200",
                    "number": 0
                },
                {
                    "asset": "a173",
                    "number": 5
                }
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
            "title": "Order item 48",
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T03:30:00.000Z",
            "location": [],
            "activity": "maritime-cyber",
            "ownAssets": [
                {
                    "asset": "a119",
                    "number": 0
                },
                {
                    "asset": "a153",
                    "number": 4
                },
                {
                    "asset": "a146",
                    "number": 1
                },
                {
                    "asset": "a154",
                    "number": 1
                }
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
            "title": "Order item 51",
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T05:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    136.74,
                                    -9.5
                                ],
                                [
                                    134.5,
                                    -11.65
                                ],
                                [
                                    131.54,
                                    -12.51
                                ],
                                [
                                    127.87,
                                    -14.09
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
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T03:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668483000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                128.2265,
                                -13.8618
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
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    134.45,
                                    -11.41
                                ],
                                [
                                    140,
                                    -8.64
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
            "activity": "land-precis-strike",
            "ownAssets": [
                {
                    "asset": "a197",
                    "number": 5
                },
                {
                    "asset": "a174",
                    "number": 5
                }
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
            "title": "Order item 54",
            "startDate": "2022-11-15T01:10:00.000Z",
            "endDate": "2022-11-15T05:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    117.0214,
                                    -20.7848
                                ],
                                [
                                    124.03,
                                    -16.78
                                ],
                                [
                                    132.3,
                                    -12.53
                                ],
                                [
                                    138.86,
                                    -7.99
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T04:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668477600000,
                            "endTime": 1668486000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        136.15868133061835,
                                        -4.904274807362774
                                    ],
                                    [
                                        136.15868133061835,
                                        -11.19777128728832
                                    ],
                                    [
                                        142.5250770548468,
                                        -11.19777128728832
                                    ],
                                    [
                                        142.5250770548468,
                                        -4.904274807362774
                                    ],
                                    [
                                        136.15868133061835,
                                        -4.904274807362774
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
                            "startDate": "2022-11-15T04:20:00.000Z",
                            "endDate": "2022-11-15T04:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668486000000,
                            "endTime": 1668487200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.79355475813242,
                                        -6.5468686647126155
                                    ],
                                    [
                                        137.79355475813242,
                                        -9.574062978838011
                                    ],
                                    [
                                        140.85209303260868,
                                        -9.574062978838011
                                    ],
                                    [
                                        140.85209303260868,
                                        -6.5468686647126155
                                    ],
                                    [
                                        137.79355475813242,
                                        -6.5468686647126155
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
                            "startDate": "2022-11-15T04:40:00.000Z",
                            "endDate": "2022-11-15T05:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668487200000,
                            "endTime": 1668490800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    116.82,
                                    -20.92
                                ],
                                [
                                    117.0214,
                                    -20.7848
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a105",
                    "number": 3
                },
                {
                    "asset": "a121",
                    "number": 4
                }
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
                                    117.0214,
                                    -20.7848
                                ],
                                [
                                    124.37,
                                    -14.38
                                ],
                                [
                                    130.93,
                                    -7.79
                                ],
                                [
                                    137.76,
                                    -1.91
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
                            "startDate": "2022-11-15T02:10:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668478200000,
                            "endTime": 1668488400000
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
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    127.41,
                                    -11.37
                                ],
                                [
                                    116.71,
                                    -20.77
                                ],
                                [
                                    117.0214,
                                    -20.7848
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a146",
                    "number": 5
                },
                {
                    "asset": "a153",
                    "number": 3
                },
                {
                    "asset": "a119",
                    "number": 1
                },
                {
                    "asset": "a159",
                    "number": 4
                }
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
            "title": "Order item 60",
            "startDate": "2022-11-15T01:30:00.000Z",
            "endDate": "2022-11-15T07:50:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    145.45,
                                    -13.52
                                ],
                                [
                                    144.11,
                                    -6.52
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T02:20:00.000Z",
                            "endDate": "2022-11-15T05:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668478800000,
                            "endTime": 1668489000000
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
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
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
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    144.64,
                                    -10.01
                                ],
                                [
                                    144.8,
                                    -13.22
                                ],
                                [
                                    145.23,
                                    -17.15
                                ],
                                [
                                    145.96,
                                    -19.79
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
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a159",
                    "number": 3
                },
                {
                    "asset": "a146",
                    "number": 2
                },
                {
                    "asset": "a116",
                    "number": 1
                },
                {
                    "asset": "a148",
                    "number": 5
                }
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
            "title": "Order item 63",
            "startDate": "2022-11-15T01:50:00.000Z",
            "endDate": "2022-11-15T02:30:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a193",
                    "number": 3
                },
                {
                    "asset": "a187",
                    "number": 2
                },
                {
                    "asset": "a191",
                    "number": 0
                }
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
            "title": "Order item 66",
            "startDate": "2022-11-15T01:50:00.000Z",
            "endDate": "2022-11-15T03:30:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a110",
                    "number": 4
                },
                {
                    "asset": "a150",
                    "number": 5
                },
                {
                    "asset": "a148",
                    "number": 4
                },
                {
                    "asset": "a101",
                    "number": 0
                }
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
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    139.78,
                                    -9.4
                                ],
                                [
                                    132.63,
                                    -13.13
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
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a161",
                    "number": 1
                },
                {
                    "asset": "a185",
                    "number": 2
                },
                {
                    "asset": "a176",
                    "number": 3
                }
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
            "title": "Order item 72",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T07:30:00.000Z",
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
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    136.11,
                                    -12.43
                                ],
                                [
                                    127.76,
                                    -16.05
                                ],
                                [
                                    118.71,
                                    -19.38
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
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T04:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480600000,
                            "endTime": 1668487200000
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
                            "startDate": "2022-11-15T04:40:00.000Z",
                            "endDate": "2022-11-15T07:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668487200000,
                            "endTime": 1668497400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.0578,
                                    -19.4518
                                ],
                                [
                                    127.93,
                                    -16.12
                                ],
                                [
                                    136.03,
                                    -12.57
                                ],
                                [
                                    144.42,
                                    -9.74
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
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a179",
                    "number": 1
                },
                {
                    "asset": "a195",
                    "number": 2
                },
                {
                    "asset": "a181",
                    "number": 1
                },
                {
                    "asset": "a161",
                    "number": 0
                }
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
            "title": "Order item 75",
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
                            "force": "F-Blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    144.83,
                                    -10.12
                                ],
                                [
                                    143.02,
                                    -12.97
                                ],
                                [
                                    140.48,
                                    -16.54
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
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480600000,
                            "endTime": 1668488400000
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
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T07:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668488400000,
                            "endTime": 1668496200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    144.04,
                                    -11.68
                                ],
                                [
                                    146.45,
                                    -5.97
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
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a179",
                    "number": 2
                },
                {
                    "asset": "a190",
                    "number": 0
                },
                {
                    "asset": "a170",
                    "number": 2
                }
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
            "title": "Order item 78",
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
                                    149.3998,
                                    -10.1238
                                ],
                                [
                                    138.29,
                                    -13.66
                                ],
                                [
                                    126.58,
                                    -16.8
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
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480600000,
                            "endTime": 1668484200000
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
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    138.2,
                                    -13.72
                                ],
                                [
                                    148.99,
                                    -9.95
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
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a200",
                    "number": 4
                }
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
            "title": "Order item 81",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T04:50:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a166",
                    "number": 0
                }
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
                                    126.839,
                                    -14.6533
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
                                        146.5991586252145,
                                        -7.50040980367591
                                    ],
                                    [
                                        146.5991586252145,
                                        -12.854462627401295
                                    ],
                                    [
                                        152.04539093026244,
                                        -12.854462627401295
                                    ],
                                    [
                                        152.04539093026244,
                                        -7.50040980367591
                                    ],
                                    [
                                        146.5991586252145,
                                        -7.50040980367591
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
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    141.67,
                                    -11.86
                                ],
                                [
                                    134.13,
                                    -13.45
                                ],
                                [
                                    126.88,
                                    -14.76
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
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a145",
                    "number": 5
                },
                {
                    "asset": "a133",
                    "number": 1
                }
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
            "title": "Order item 87",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T04:10:00.000Z",
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
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    136.96,
                                    -10.41
                                ],
                                [
                                    131.44,
                                    -12.19
                                ],
                                [
                                    126.21,
                                    -14.7
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
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T03:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668480600000,
                            "endTime": 1668483600000
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
                                    126.3983,
                                    -14.6078
                                ],
                                [
                                    133.66,
                                    -11.23
                                ],
                                [
                                    141.39,
                                    -8.38
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
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a197",
                    "number": 3
                },
                {
                    "asset": "a181",
                    "number": 2
                },
                {
                    "asset": "a178",
                    "number": 4
                }
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
            "title": "Order item 90",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T08:20:00.000Z",
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
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    127.25,
                                    -16.9
                                ],
                                [
                                    134.72,
                                    -14.96
                                ],
                                [
                                    141.47,
                                    -12.74
                                ],
                                [
                                    149.51,
                                    -10.24
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
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T06:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668480600000,
                            "endTime": 1668492000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.63830279606736,
                                        -6.593135325978456
                                    ],
                                    [
                                        145.63830279606736,
                                        -14.010358476948456
                                    ],
                                    [
                                        153.1946513696599,
                                        -14.010358476948456
                                    ],
                                    [
                                        153.1946513696599,
                                        -6.593135325978456
                                    ],
                                    [
                                        145.63830279606736,
                                        -6.593135325978456
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
                            "startDate": "2022-11-15T06:00:00.000Z",
                            "endDate": "2022-11-15T07:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668492000000,
                            "endTime": 1668496200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.65030022614425,
                                        -7.614625390504544
                                    ],
                                    [
                                        146.65030022614425,
                                        -13.009590916881429
                                    ],
                                    [
                                        152.14060137483943,
                                        -13.009590916881429
                                    ],
                                    [
                                        152.14060137483943,
                                        -7.614625390504544
                                    ],
                                    [
                                        146.65030022614425,
                                        -7.614625390504544
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
                            "endDate": "2022-11-15T08:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668496200000,
                            "endTime": 1668500400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    120.01,
                                    -18.45
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
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a141",
                    "number": 0
                }
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
            "title": "Order item 93",
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    136.78,
                                    -9
                                ],
                                [
                                    134.14,
                                    -10.05
                                ],
                                [
                                    131.79,
                                    -11.82
                                ],
                                [
                                    129.72,
                                    -12.31
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
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a198",
                    "number": 0
                }
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
                                    124.4507,
                                    -20.6765
                                ],
                                [
                                    131.9,
                                    -15.6
                                ],
                                [
                                    139.63,
                                    -11.25
                                ],
                                [
                                    146.65,
                                    -6.61
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
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T05:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668480600000,
                            "endTime": 1668489600000
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
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    135.42,
                                    -13.26
                                ],
                                [
                                    124.55,
                                    -20.89
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
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a147",
                    "number": 4
                },
                {
                    "asset": "a157",
                    "number": 2
                },
                {
                    "asset": "a127",
                    "number": 5
                },
                {
                    "asset": "a111",
                    "number": 0
                }
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
            "title": "Order item 99",
            "startDate": "2022-11-15T02:10:00.000Z",
            "endDate": "2022-11-15T03:40:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a111",
                    "number": 5
                }
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
                                    148.5793,
                                    -9.9615
                                ],
                                [
                                    146.43,
                                    -13.04
                                ],
                                [
                                    144.43,
                                    -14.98
                                ],
                                [
                                    142.71,
                                    -17.64
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
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a166",
                    "number": 1
                },
                {
                    "asset": "a198",
                    "number": 4
                },
                {
                    "asset": "a167",
                    "number": 1
                },
                {
                    "asset": "a185",
                    "number": 3
                }
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
            "title": "Order item 105",
            "startDate": "2022-11-15T02:20:00.000Z",
            "endDate": "2022-11-15T05:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    135.71,
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T03:10:00.000Z",
                            "endDate": "2022-11-15T03:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668481800000,
                            "endTime": 1668483600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        132.986172409426,
                                        -16.163676537097974
                                    ],
                                    [
                                        132.986172409426,
                                        -20.86966829057602
                                    ],
                                    [
                                        137.95484954483342,
                                        -20.86966829057602
                                    ],
                                    [
                                        137.95484954483342,
                                        -16.163676537097974
                                    ],
                                    [
                                        132.986172409426,
                                        -16.163676537097974
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
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    139.2,
                                    -16.77
                                ],
                                [
                                    141.85,
                                    -14.15
                                ],
                                [
                                    145.77,
                                    -12.24
                                ],
                                [
                                    148.98,
                                    -11.05
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
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a185",
                    "number": 3
                },
                {
                    "asset": "a172",
                    "number": 2
                }
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
            "title": "Order item 108",
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
                                    139.571,
                                    -21.941
                                ],
                                [
                                    141.47,
                                    -16.79
                                ],
                                [
                                    142.59,
                                    -11.43
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
                                    139.45,
                                    -22.27
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
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a137",
                    "number": 4
                }
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
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    139.29,
                                    -7.4
                                ],
                                [
                                    141.44,
                                    -12.87
                                ],
                                [
                                    142.87,
                                    -18.05
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
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T04:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668482100000,
                            "endTime": 1668486300000
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
                                    143.0924,
                                    -18.0959
                                ],
                                [
                                    141.49,
                                    -12.68
                                ],
                                [
                                    138.99,
                                    -8.16
                                ],
                                [
                                    137.78,
                                    -2.36
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
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a168",
                    "number": 0
                },
                {
                    "asset": "a186",
                    "number": 0
                },
                {
                    "asset": "a173",
                    "number": 1
                }
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
            "title": "Order item 114",
            "startDate": "2022-11-15T02:25:00.000Z",
            "endDate": "2022-11-15T09:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    126.3983,
                                    -14.6078
                                ],
                                [
                                    144.35,
                                    -7.22
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
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
                                        142.21548370627764,
                                        -4.6975386825676955
                                    ],
                                    [
                                        142.21548370627764,
                                        -9.064200179713488
                                    ],
                                    [
                                        146.61717707781236,
                                        -9.064200179713488
                                    ],
                                    [
                                        146.61717707781236,
                                        -4.6975386825676955
                                    ],
                                    [
                                        142.21548370627764,
                                        -4.6975386825676955
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
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668486300000,
                            "endTime": 1668493500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        144.13779302581466,
                                        -6.619207318343613
                                    ],
                                    [
                                        144.13779302581466,
                                        -7.152442851068775
                                    ],
                                    [
                                        144.67490881085251,
                                        -7.152442851068775
                                    ],
                                    [
                                        144.67490881085251,
                                        -6.619207318343613
                                    ],
                                    [
                                        144.13779302581466,
                                        -6.619207318343613
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
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T09:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668493500000,
                            "endTime": 1668504900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    125.98,
                                    -14.8
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
            "activity": "maritime-area-recce",
            "ownAssets": [
                {
                    "asset": "a118",
                    "number": 5
                },
                {
                    "asset": "a135",
                    "number": 4
                },
                {
                    "asset": "a109",
                    "number": 0
                }
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
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    125.69,
                                    -13.12
                                ],
                                [
                                    131.83,
                                    -8.18
                                ],
                                [
                                    137.25,
                                    -2.95
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
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T06:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668482100000,
                            "endTime": 1668492300000
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
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    119.3,
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
            "activity": "land-precis-strike",
            "ownAssets": [
                {
                    "asset": "a157",
                    "number": 3
                }
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
                                    145.7545,
                                    -5.607
                                ],
                                [
                                    142.57,
                                    -17.77
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
                                142.2515,
                                -18.0243
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
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    143.69,
                                    -13.7
                                ],
                                [
                                    144.33,
                                    -10.19
                                ],
                                [
                                    145.25,
                                    -5.39
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
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a169",
                    "number": 2
                }
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
            "title": "Order item 123",
            "startDate": "2022-11-15T02:40:00.000Z",
            "endDate": "2022-11-15T07:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    128.1529,
                                    -17.0936
                                ],
                                [
                                    134.43,
                                    -12.48
                                ],
                                [
                                    141.13,
                                    -8.46
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
                            "startDate": "2022-11-15T03:30:00.000Z",
                            "endDate": "2022-11-15T05:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668483000000,
                            "endTime": 1668489600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.12601178663218,
                                        -4.312534578996031
                                    ],
                                    [
                                        137.12601178663218,
                                        -11.996900527940104
                                    ],
                                    [
                                        144.90759071476543,
                                        -11.996900527940104
                                    ],
                                    [
                                        144.90759071476543,
                                        -4.312534578996031
                                    ],
                                    [
                                        137.12601178663218,
                                        -4.312534578996031
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
                            "startDate": "2022-11-15T05:20:00.000Z",
                            "endDate": "2022-11-15T05:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668489600000,
                            "endTime": 1668489600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        140.61680480619856,
                                        -7.8140092400797165
                                    ],
                                    [
                                        140.61680480619856,
                                        -8.532267442160784
                                    ],
                                    [
                                        141.3424484580494,
                                        -8.532267442160784
                                    ],
                                    [
                                        141.3424484580494,
                                        -7.8140092400797165
                                    ],
                                    [
                                        140.61680480619856,
                                        -7.8140092400797165
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
                            "startDate": "2022-11-15T05:20:00.000Z",
                            "endDate": "2022-11-15T07:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668489600000,
                            "endTime": 1668496200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    136.89,
                                    -11.61
                                ],
                                [
                                    132.87,
                                    -13.98
                                ],
                                [
                                    128.13,
                                    -17.08
                                ],
                                [
                                    128.1529,
                                    -17.0936
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-recce",
            "ownAssets": [
                {
                    "asset": "a156",
                    "number": 5
                },
                {
                    "asset": "a147",
                    "number": 4
                },
                {
                    "asset": "a153",
                    "number": 3
                }
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
            "title": "Order item 126",
            "startDate": "2022-11-15T02:40:00.000Z",
            "endDate": "2022-11-15T05:00:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    146.91,
                                    -5.78
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
                            "startDate": "2022-11-15T03:30:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668483000000,
                            "endTime": 1668484200000
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
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    132.93,
                                    -13.43
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
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a117",
                    "number": 3
                },
                {
                    "asset": "a156",
                    "number": 3
                },
                {
                    "asset": "a154",
                    "number": 2
                },
                {
                    "asset": "a109",
                    "number": 5
                }
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
            "title": "Order item 129",
            "startDate": "2022-11-15T02:55:00.000Z",
            "endDate": "2022-11-15T04:15:00.000Z",
            "location": [],
            "activity": "maritime-cyber",
            "ownAssets": [
                {
                    "asset": "a109",
                    "number": 0
                },
                {
                    "asset": "a141",
                    "number": 3
                },
                {
                    "asset": "a130",
                    "number": 0
                }
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
            "title": "Order item 132",
            "startDate": "2022-11-15T03:10:00.000Z",
            "endDate": "2022-11-15T04:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
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
                                    148.2461,
                                    -10.1388
                                ],
                                [
                                    135.96,
                                    -14.89
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
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a181",
                    "number": 5
                },
                {
                    "asset": "a197",
                    "number": 1
                },
                {
                    "asset": "a185",
                    "number": 0
                },
                {
                    "asset": "a180",
                    "number": 5
                }
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
            "title": "Order item 135",
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
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    132.61,
                                    -8.63
                                ],
                                [
                                    134.54,
                                    -5.57
                                ],
                                [
                                    137.75,
                                    -2.23
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
                            "startDate": "2022-11-15T04:00:00.000Z",
                            "endDate": "2022-11-15T05:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668484800000,
                            "endTime": 1668489600000
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
                                    137.4298,
                                    -1.926
                                ],
                                [
                                    133.97,
                                    -7.55
                                ],
                                [
                                    129.89,
                                    -12.82
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
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a133",
                    "number": 1
                },
                {
                    "asset": "a145",
                    "number": 0
                },
                {
                    "asset": "a115",
                    "number": 3
                }
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
            "title": "Order item 138",
            "startDate": "2022-11-15T03:15:00.000Z",
            "endDate": "2022-11-15T05:35:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a101",
                    "number": 2
                }
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
            "title": "Order item 141",
            "startDate": "2022-11-15T03:35:00.000Z",
            "endDate": "2022-11-15T07:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    141.84,
                                    -11.95
                                ],
                                [
                                    136.44,
                                    -14.69
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
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T07:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668486300000,
                            "endTime": 1668495900000
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
                            "startDate": "2022-11-15T07:05:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668495900000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    147.93,
                                    -9.54
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
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a166",
                    "number": 2
                },
                {
                    "asset": "a200",
                    "number": 3
                },
                {
                    "asset": "a170",
                    "number": 0
                },
                {
                    "asset": "a189",
                    "number": 4
                }
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
            "title": "Order item 144",
            "startDate": "2022-11-15T03:35:00.000Z",
            "endDate": "2022-11-15T06:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    141.29,
                                    -11.44
                                ],
                                [
                                    149.61,
                                    -10.52
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T06:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668486300000,
                            "endTime": 1668492300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        148.06106150718958,
                                        -8.963146757077354
                                    ],
                                    [
                                        148.06106150718958,
                                        -11.40955779619484
                                    ],
                                    [
                                        150.5472786554769,
                                        -11.40955779619484
                                    ],
                                    [
                                        150.5472786554769,
                                        -8.963146757077354
                                    ],
                                    [
                                        148.06106150718958,
                                        -8.963146757077354
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
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    141.21,
                                    -11.56
                                ],
                                [
                                    133.59,
                                    -13.48
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
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a143",
                    "number": 5
                },
                {
                    "asset": "a131",
                    "number": 4
                }
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
            "title": "Order item 147",
            "startDate": "2022-11-15T03:40:00.000Z",
            "endDate": "2022-11-15T10:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T03:40:00.000Z",
                            "endDate": "2022-11-15T04:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668483600000,
                            "endTime": 1668486600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    144.25,
                                    -9.89
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
                            "id": "Air Reconnaisance//Flight box",
                            "startDate": "2022-11-15T04:30:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668486600000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        141.7281762408026,
                                        -6.712541715877037
                                    ],
                                    [
                                        141.7281762408026,
                                        -12.511910471948296
                                    ],
                                    [
                                        147.6183964505538,
                                        -12.511910471948296
                                    ],
                                    [
                                        147.6183964505538,
                                        -6.712541715877037
                                    ],
                                    [
                                        141.7281762408026,
                                        -6.712541715877037
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
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T07:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668488400000,
                            "endTime": 1668496800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        141.48293139715335,
                                        -6.465238890061374
                                    ],
                                    [
                                        141.48293139715335,
                                        -12.754804737755604
                                    ],
                                    [
                                        147.87257072183633,
                                        -12.754804737755604
                                    ],
                                    [
                                        147.87257072183633,
                                        -6.465238890061374
                                    ],
                                    [
                                        141.48293139715335,
                                        -6.465238890061374
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
                            "startDate": "2022-11-15T07:20:00.000Z",
                            "endDate": "2022-11-15T10:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668496800000,
                            "endTime": 1668506400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    140.78,
                                    -12.32
                                ],
                                [
                                    136.27,
                                    -14.66
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
            "activity": "air-air-recce",
            "ownAssets": [
                {
                    "asset": "a152",
                    "number": 0
                },
                {
                    "asset": "a131",
                    "number": 4
                }
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
            "title": "Order item 150",
            "startDate": "2022-11-15T04:00:00.000Z",
            "endDate": "2022-11-15T08:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    140.71,
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T04:50:00.000Z",
                            "endDate": "2022-11-15T07:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668487800000,
                            "endTime": 1668498600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        138.55419963307816,
                                        -5.753157108516415
                                    ],
                                    [
                                        138.55419963307816,
                                        -10.57882444251682
                                    ],
                                    [
                                        143.43392335424278,
                                        -10.57882444251682
                                    ],
                                    [
                                        143.43392335424278,
                                        -5.753157108516415
                                    ],
                                    [
                                        138.55419963307816,
                                        -5.753157108516415
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
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T08:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668498600000,
                            "endTime": 1668499200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    135.64,
                                    -14.67
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
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a136",
                    "number": 2
                }
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
            "title": "Order item 153",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T06:25:00.000Z",
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
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    139.04,
                                    -5.31
                                ],
                                [
                                    136.97,
                                    -8
                                ],
                                [
                                    135.19,
                                    -10.41
                                ],
                                [
                                    132.69,
                                    -13.53
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
                            "startDate": "2022-11-15T05:05:00.000Z",
                            "endDate": "2022-11-15T05:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668488700000,
                            "endTime": 1668491700000
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
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668491700000,
                            "endTime": 1668493500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    136.71,
                                    -7.89
                                ],
                                [
                                    140.94,
                                    -3.05
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
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a194",
                    "number": 4
                }
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
            "title": "Order item 156",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T07:55:00.000Z",
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    131.21,
                                    -11.64
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
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T05:05:00.000Z",
                            "endDate": "2022-11-15T05:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668488700000,
                            "endTime": 1668491100000
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
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
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
                                    130.7986,
                                    -11.9046
                                ],
                                [
                                    133.49,
                                    -10.81
                                ],
                                [
                                    136.29,
                                    -9.63
                                ],
                                [
                                    139.36,
                                    -8.17
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
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a187",
                    "number": 3
                },
                {
                    "asset": "a193",
                    "number": 3
                },
                {
                    "asset": "a171",
                    "number": 1
                },
                {
                    "asset": "a199",
                    "number": 5
                }
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
            "title": "Order item 159",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T08:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    139.127,
                                    -8.1642
                                ],
                                [
                                    133.43,
                                    -11.21
                                ],
                                [
                                    128.75,
                                    -14.25
                                ],
                                [
                                    123.36,
                                    -18
                                ],
                                [
                                    117.25,
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T05:05:00.000Z",
                            "endDate": "2022-11-15T05:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668488700000,
                            "endTime": 1668488700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        116.75271228945024,
                                        -20.089910427525997
                                    ],
                                    [
                                        116.75271228945024,
                                        -21.9506813851663
                                    ],
                                    [
                                        118.74653128315401,
                                        -21.9506813851663
                                    ],
                                    [
                                        118.74653128315401,
                                        -20.089910427525997
                                    ],
                                    [
                                        116.75271228945024,
                                        -20.089910427525997
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
                            "startDate": "2022-11-15T05:05:00.000Z",
                            "endDate": "2022-11-15T08:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668488700000,
                            "endTime": 1668499500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    123.38,
                                    -18.03
                                ],
                                [
                                    128.91,
                                    -14.15
                                ],
                                [
                                    133.73,
                                    -10.99
                                ],
                                [
                                    138.83,
                                    -8.54
                                ],
                                [
                                    139.127,
                                    -8.1642
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-area-strike",
            "ownAssets": [
                {
                    "asset": "a199",
                    "number": 5
                },
                {
                    "asset": "a200",
                    "number": 0
                },
                {
                    "asset": "a173",
                    "number": 1
                },
                {
                    "asset": "a196",
                    "number": 2
                }
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
            "title": "Order item 162",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T05:25:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a196",
                    "number": 3
                },
                {
                    "asset": "a191",
                    "number": 5
                },
                {
                    "asset": "a199",
                    "number": 4
                }
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
            "title": "Order item 165",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T08:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    146.24,
                                    -6.01
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
                                        145.9194697582483,
                                        -5.4403322883535825
                                    ],
                                    [
                                        145.9194697582483,
                                        -7.007698383006534
                                    ],
                                    [
                                        147.4962826543691,
                                        -7.007698383006534
                                    ],
                                    [
                                        147.4962826543691,
                                        -5.4403322883535825
                                    ],
                                    [
                                        145.9194697582483,
                                        -5.4403322883535825
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
                            "startDate": "2022-11-15T08:05:00.000Z",
                            "endDate": "2022-11-15T08:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668499500000,
                            "endTime": 1668501300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    142.07,
                                    -8.08
                                ],
                                [
                                    137.35,
                                    -10.04
                                ],
                                [
                                    132.91,
                                    -11.71
                                ],
                                [
                                    127.75,
                                    -14.1
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
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a120",
                    "number": 3
                }
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
            "title": "Order item 168",
            "startDate": "2022-11-15T04:20:00.000Z",
            "endDate": "2022-11-15T08:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    135.37,
                                    -13.14
                                ],
                                [
                                    137.88,
                                    -10.55
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T05:10:00.000Z",
                            "endDate": "2022-11-15T07:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668489000000,
                            "endTime": 1668497400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.0960194278731,
                                        -5.847772608319425
                                    ],
                                    [
                                        137.0960194278731,
                                        -10.266739664570135
                                    ],
                                    [
                                        141.56258778077046,
                                        -10.266739664570135
                                    ],
                                    [
                                        141.56258778077046,
                                        -5.847772608319425
                                    ],
                                    [
                                        137.0960194278731,
                                        -5.847772608319425
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
                                    137.63,
                                    -10.2
                                ],
                                [
                                    136.17,
                                    -13.13
                                ],
                                [
                                    133.98,
                                    -15.77
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
            "activity": "land-area-strike",
            "ownAssets": [
                {
                    "asset": "a120",
                    "number": 4
                },
                {
                    "asset": "a154",
                    "number": 1
                },
                {
                    "asset": "a146",
                    "number": 3
                },
                {
                    "asset": "a153",
                    "number": 0
                }
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
            "title": "Order item 171",
            "startDate": "2022-11-15T04:40:00.000Z",
            "endDate": "2022-11-15T07:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    130.0699,
                                    -12.4965
                                ],
                                [
                                    150.06,
                                    -11.11
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
                            "startDate": "2022-11-15T05:30:00.000Z",
                            "endDate": "2022-11-15T05:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668490200000,
                            "endTime": 1668490200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.7747556504323,
                                        -7.348134837530006
                                    ],
                                    [
                                        146.7747556504323,
                                        -14.049849266969686
                                    ],
                                    [
                                        153.6081256243998,
                                        -14.049849266969686
                                    ],
                                    [
                                        153.6081256243998,
                                        -7.348134837530006
                                    ],
                                    [
                                        146.7747556504323,
                                        -7.348134837530006
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
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    140.21,
                                    -11.83
                                ],
                                [
                                    129.76,
                                    -12.47
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
            "activity": "land-area-strike",
            "ownAssets": [
                {
                    "asset": "a153",
                    "number": 1
                },
                {
                    "asset": "a118",
                    "number": 0
                }
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
            "title": "Order item 174",
            "startDate": "2022-11-15T04:55:00.000Z",
            "endDate": "2022-11-15T09:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T04:55:00.000Z",
                            "endDate": "2022-11-15T05:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668488100000,
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
                                    143.66,
                                    -9.21
                                ],
                                [
                                    143.81,
                                    -12.65
                                ],
                                [
                                    143.25,
                                    -14.8
                                ],
                                [
                                    142.97,
                                    -17.67
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T05:45:00.000Z",
                            "endDate": "2022-11-15T07:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668491100000,
                            "endTime": 1668497700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        141.39773750450675,
                                        -16.463267197007895
                                    ],
                                    [
                                        141.39773750450675,
                                        -19.71345755586143
                                    ],
                                    [
                                        144.81877346562595,
                                        -19.71345755586143
                                    ],
                                    [
                                        144.81877346562595,
                                        -16.463267197007895
                                    ],
                                    [
                                        141.39773750450675,
                                        -16.463267197007895
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
                            "startDate": "2022-11-15T07:35:00.000Z",
                            "endDate": "2022-11-15T09:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668497700000,
                            "endTime": 1668504300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    143.0924,
                                    -18.0959
                                ],
                                [
                                    143.51,
                                    -12.45
                                ],
                                [
                                    144.47,
                                    -7.29
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
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a199",
                    "number": 5
                }
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
            "title": "Order item 177",
            "startDate": "2022-11-15T04:55:00.000Z",
            "endDate": "2022-11-15T08:45:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T04:55:00.000Z",
                            "endDate": "2022-11-15T05:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668488100000,
                            "endTime": 1668491100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    146.66,
                                    -5.09
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T05:45:00.000Z",
                            "endDate": "2022-11-15T07:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668491100000,
                            "endTime": 1668498900000
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
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
                            "startDate": "2022-11-15T07:55:00.000Z",
                            "endDate": "2022-11-15T08:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668498900000,
                            "endTime": 1668501900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    137.24,
                                    -10.07
                                ],
                                [
                                    127.11,
                                    -15.92
                                ],
                                [
                                    117.25,
                                    -21.49
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
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a139",
                    "number": 3
                },
                {
                    "asset": "a145",
                    "number": 0
                },
                {
                    "asset": "a110",
                    "number": 5
                }
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
            "title": "Order item 180",
            "startDate": "2022-11-15T05:00:00.000Z",
            "endDate": "2022-11-15T09:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    142.9303,
                                    -18.4403
                                ],
                                [
                                    137.78,
                                    -2.72
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
                            "startDate": "2022-11-15T05:50:00.000Z",
                            "endDate": "2022-11-15T07:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668491400000,
                            "endTime": 1668498000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        135.10483747688434,
                                        -0.6041428904840515
                                    ],
                                    [
                                        135.10483747688434,
                                        -4.963018017658292
                                    ],
                                    [
                                        139.4720473131607,
                                        -4.963018017658292
                                    ],
                                    [
                                        139.4720473131607,
                                        -0.6041428904840515
                                    ],
                                    [
                                        135.10483747688434,
                                        -0.6041428904840515
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
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668498000000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    139.11,
                                    -7.06
                                ],
                                [
                                    139.84,
                                    -10.44
                                ],
                                [
                                    141.86,
                                    -14.54
                                ],
                                [
                                    143.15,
                                    -18.36
                                ],
                                [
                                    142.9303,
                                    -18.4403
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-area-strike",
            "ownAssets": [
                {
                    "asset": "a150",
                    "number": 4
                },
                {
                    "asset": "a148",
                    "number": 2
                },
                {
                    "asset": "a101",
                    "number": 5
                },
                {
                    "asset": "a136",
                    "number": 5
                }
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
            "title": "Order item 183",
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
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    126.44,
                                    -14.68
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
                                126.839,
                                -14.6533
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
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    138.16,
                                    -12.23
                                ],
                                [
                                    149.85,
                                    -10.44
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
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a185",
                    "number": 4
                },
                {
                    "asset": "a176",
                    "number": 3
                }
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
            "title": "Order item 186",
            "startDate": "2022-11-15T05:20:00.000Z",
            "endDate": "2022-11-15T10:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    122.0714,
                                    -17.8384
                                ],
                                [
                                    149.61,
                                    -9.97
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
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T06:10:00.000Z",
                            "endDate": "2022-11-15T08:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668492600000,
                            "endTime": 1668499200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.3719,
                                -10.3237
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
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    122.08,
                                    -17.44
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
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a151",
                    "number": 4
                },
                {
                    "asset": "a133",
                    "number": 0
                }
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
            "title": "Order item 189",
            "startDate": "2022-11-15T05:25:00.000Z",
            "endDate": "2022-11-15T07:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    145.35,
                                    -13.91
                                ],
                                [
                                    149.19,
                                    -10.34
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
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T06:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668492900000,
                            "endTime": 1668492900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.16345341624253,
                                        -7.124053078327275
                                    ],
                                    [
                                        146.16345341624253,
                                        -13.491029164318803
                                    ],
                                    [
                                        152.6459897800774,
                                        -13.491029164318803
                                    ],
                                    [
                                        152.6459897800774,
                                        -7.124053078327275
                                    ],
                                    [
                                        146.16345341624253,
                                        -7.124053078327275
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
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    141.21,
                                    -16.93
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
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a143",
                    "number": 0
                }
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
            "title": "Order item 192",
            "startDate": "2022-11-15T05:40:00.000Z",
            "endDate": "2022-11-15T09:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T05:40:00.000Z",
                            "endDate": "2022-11-15T06:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668490800000,
                            "endTime": 1668493800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.4415,
                                    -20.0229
                                ],
                                [
                                    142.45,
                                    -16.18
                                ],
                                [
                                    144.5,
                                    -13.31
                                ],
                                [
                                    147.83,
                                    -10.15
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
                            "id": "Air Reconnaisance//Flight box",
                            "startDate": "2022-11-15T06:30:00.000Z",
                            "endDate": "2022-11-15T07:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668493800000,
                            "endTime": 1668496800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.1091021453654,
                                        -7.491342499203879
                                    ],
                                    [
                                        145.1091021453654,
                                        -12.251409457162179
                                    ],
                                    [
                                        149.94529673814972,
                                        -12.251409457162179
                                    ],
                                    [
                                        149.94529673814972,
                                        -7.491342499203879
                                    ],
                                    [
                                        145.1091021453654,
                                        -7.491342499203879
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
                            "startDate": "2022-11-15T07:20:00.000Z",
                            "endDate": "2022-11-15T09:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668496800000,
                            "endTime": 1668503400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.58549892767172,
                                        -7.968893843306223
                                    ],
                                    [
                                        145.58549892767172,
                                        -11.780056027281296
                                    ],
                                    [
                                        149.45632725272736,
                                        -11.780056027281296
                                    ],
                                    [
                                        149.45632725272736,
                                        -7.968893843306223
                                    ],
                                    [
                                        145.58549892767172,
                                        -7.968893843306223
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
                            "startDate": "2022-11-15T09:10:00.000Z",
                            "endDate": "2022-11-15T09:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668503400000,
                            "endTime": 1668504600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    143.67,
                                    -14.99
                                ],
                                [
                                    139.19,
                                    -19.77
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
            "activity": "air-air-recce",
            "ownAssets": [
                {
                    "asset": "a107",
                    "number": 3
                },
                {
                    "asset": "a129",
                    "number": 5
                }
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
            "title": "Order item 195",
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
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    145.42,
                                    -12.74
                                ],
                                [
                                    142.3,
                                    -14.31
                                ],
                                [
                                    138.48,
                                    -16.6
                                ],
                                [
                                    134.93,
                                    -18.61
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
                                        133.12105125087325,
                                        -16.29643939031686
                                    ],
                                    [
                                        133.12105125087325,
                                        -20.740424617614718
                                    ],
                                    [
                                        137.81255531022256,
                                        -20.740424617614718
                                    ],
                                    [
                                        137.81255531022256,
                                        -16.29643939031686
                                    ],
                                    [
                                        133.12105125087325,
                                        -16.29643939031686
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
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    142.82,
                                    -14.6
                                ],
                                [
                                    149.51,
                                    -10.37
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
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a200",
                    "number": 3
                }
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
            "title": "Order item 198",
            "startDate": "2022-11-15T05:55:00.000Z",
            "endDate": "2022-11-15T08:05:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a133",
                    "number": 1
                },
                {
                    "asset": "a136",
                    "number": 2
                },
                {
                    "asset": "a155",
                    "number": 4
                }
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
            "title": "Order item 201",
            "startDate": "2022-11-15T05:55:00.000Z",
            "endDate": "2022-11-15T08:15:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a135",
                    "number": 3
                },
                {
                    "asset": "a130",
                    "number": 5
                }
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
            "title": "Order item 204",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T09:25:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a167",
                    "number": 5
                },
                {
                    "asset": "a196",
                    "number": 2
                },
                {
                    "asset": "a197",
                    "number": 1
                },
                {
                    "asset": "a172",
                    "number": 4
                }
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
            "title": "Order item 207",
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
                            "force": "F-Red",
                            "startTime": 1668492900000,
                            "endTime": 1668495900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    143.59,
                                    -13.51
                                ],
                                [
                                    140.11,
                                    -7.78
                                ],
                                [
                                    137.92,
                                    -1.76
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
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a116",
                    "number": 2
                },
                {
                    "asset": "a152",
                    "number": 0
                },
                {
                    "asset": "a146",
                    "number": 1
                },
                {
                    "asset": "a156",
                    "number": 0
                }
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
            "title": "Order item 210",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T06:15:00.000Z",
            "location": [],
            "activity": "maritime-cyber",
            "ownAssets": [
                {
                    "asset": "a198",
                    "number": 5
                },
                {
                    "asset": "a176",
                    "number": 3
                }
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
            "title": "Order item 213",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T12:25:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    139.9287,
                                    -3.3935
                                ],
                                [
                                    140.69,
                                    -9.15
                                ],
                                [
                                    141.51,
                                    -14.86
                                ],
                                [
                                    142.61,
                                    -20.28
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
                            "startDate": "2022-11-15T07:05:00.000Z",
                            "endDate": "2022-11-15T09:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668495900000,
                            "endTime": 1668503700000
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
                            "startDate": "2022-11-15T09:15:00.000Z",
                            "endDate": "2022-11-15T12:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668503700000,
                            "endTime": 1668515100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    141.46,
                                    -12.14
                                ],
                                [
                                    140.42,
                                    -3.14
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
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a168",
                    "number": 3
                },
                {
                    "asset": "a179",
                    "number": 0
                }
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
            "title": "Order item 216",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T12:55:00.000Z",
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
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    137.16,
                                    -12.72
                                ],
                                [
                                    138.32,
                                    -9.83
                                ],
                                [
                                    139.77,
                                    -7.65
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
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
                                        136.86817604972427,
                                        -5.618838384174132
                                    ],
                                    [
                                        136.86817604972427,
                                        -10.493050508793527
                                    ],
                                    [
                                        141.79572567045648,
                                        -10.493050508793527
                                    ],
                                    [
                                        141.79572567045648,
                                        -5.618838384174132
                                    ],
                                    [
                                        136.86817604972427,
                                        -5.618838384174132
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
                            "startDate": "2022-11-15T10:15:00.000Z",
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668507300000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        136.95304238080342,
                                        -5.704142969613468
                                    ],
                                    [
                                        136.95304238080342,
                                        -10.408753494832391
                                    ],
                                    [
                                        141.70882596363305,
                                        -10.408753494832391
                                    ],
                                    [
                                        141.70882596363305,
                                        -5.704142969613468
                                    ],
                                    [
                                        136.95304238080342,
                                        -5.704142969613468
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
                            "startDate": "2022-11-15T12:15:00.000Z",
                            "endDate": "2022-11-15T12:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668514500000,
                            "endTime": 1668516900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    138.17,
                                    -10.66
                                ],
                                [
                                    137.23,
                                    -12.07
                                ],
                                [
                                    136.57,
                                    -14.2
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
            "activity": "maritime-area-recce",
            "ownAssets": [
                {
                    "asset": "a156",
                    "number": 2
                }
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
            "title": "Order item 219",
            "startDate": "2022-11-15T06:25:00.000Z",
            "endDate": "2022-11-15T10:45:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    122.8959,
                                    -18.5925
                                ],
                                [
                                    144.8,
                                    -9.4
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
                            "startDate": "2022-11-15T07:15:00.000Z",
                            "endDate": "2022-11-15T07:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668496500000,
                            "endTime": 1668498900000
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
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    133.92,
                                    -14.45
                                ],
                                [
                                    122.72,
                                    -18.76
                                ],
                                [
                                    122.8959,
                                    -18.5925
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a117",
                    "number": 2
                },
                {
                    "asset": "a118",
                    "number": 0
                }
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
            "title": "Order item 222",
            "startDate": "2022-11-15T06:45:00.000Z",
            "endDate": "2022-11-15T08:15:00.000Z",
            "location": [],
            "activity": "maritime-cyber",
            "ownAssets": [
                {
                    "asset": "a168",
                    "number": 2
                },
                {
                    "asset": "a200",
                    "number": 0
                },
                {
                    "asset": "a172",
                    "number": 1
                },
                {
                    "asset": "a185",
                    "number": 2
                }
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
            "title": "Order item 225",
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
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    145.55,
                                    -8.33
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
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a136",
                    "number": 5
                },
                {
                    "asset": "a118",
                    "number": 1
                }
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
            "title": "Order item 228",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T12:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    139.19,
                                    -13.15
                                ],
                                [
                                    129.56,
                                    -16.65
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
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T09:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668498300000,
                            "endTime": 1668503700000
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
                            "startDate": "2022-11-15T09:15:00.000Z",
                            "endDate": "2022-11-15T12:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668503700000,
                            "endTime": 1668515100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.3162,
                                    -16.1699
                                ],
                                [
                                    135.99,
                                    -14.51
                                ],
                                [
                                    142.76,
                                    -11.77
                                ],
                                [
                                    148.81,
                                    -9.75
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
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a181",
                    "number": 1
                }
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
            "title": "Order item 231",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T09:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    122.8959,
                                    -18.5925
                                ],
                                [
                                    127.4,
                                    -12.73
                                ],
                                [
                                    132.95,
                                    -6.83
                                ],
                                [
                                    137.78,
                                    -1.64
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
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T09:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668498300000,
                            "endTime": 1668506100000
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
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    122.97,
                                    -18.38
                                ],
                                [
                                    122.8959,
                                    -18.5925
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a106",
                    "number": 0
                },
                {
                    "asset": "a131",
                    "number": 1
                }
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
            "title": "Order item 234",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T10:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    139.34,
                                    -20.32
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
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
                                        136.23773789330278,
                                        -16.928725193961146
                                    ],
                                    [
                                        136.23773789330278,
                                        -23.057157598488676
                                    ],
                                    [
                                        142.77267783998113,
                                        -23.057157598488676
                                    ],
                                    [
                                        142.77267783998113,
                                        -16.928725193961146
                                    ],
                                    [
                                        136.23773789330278,
                                        -16.928725193961146
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
                            "endDate": "2022-11-15T10:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668504300000,
                            "endTime": 1668508500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.4415,
                                    -20.0229
                                ],
                                [
                                    138.6,
                                    -12.86
                                ],
                                [
                                    138.23,
                                    -6.23
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
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a168",
                    "number": 3
                },
                {
                    "asset": "a176",
                    "number": 2
                }
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
            "title": "Order item 237",
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
                                    139.9287,
                                    -3.3935
                                ],
                                [
                                    116.99,
                                    -20.82
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
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a192",
                    "number": 3
                },
                {
                    "asset": "a195",
                    "number": 3
                },
                {
                    "asset": "a171",
                    "number": 1
                },
                {
                    "asset": "a197",
                    "number": 5
                }
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
            "title": "Order item 240",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T09:05:00.000Z",
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
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    118.12,
                                    -21.09
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T08:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668498300000,
                            "endTime": 1668500700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                117.7434,
                                -21.0232
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
                            "startDate": "2022-11-15T08:25:00.000Z",
                            "endDate": "2022-11-15T09:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668500700000,
                            "endTime": 1668503100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    146.3,
                                    -6.27
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
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a197",
                    "number": 2
                },
                {
                    "asset": "a196",
                    "number": 1
                },
                {
                    "asset": "a167",
                    "number": 3
                },
                {
                    "asset": "a188",
                    "number": 2
                }
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
            "title": "Order item 243",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T10:35:00.000Z",
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
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    137.72,
                                    -13.48
                                ],
                                [
                                    134.97,
                                    -18.09
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
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T08:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668498300000,
                            "endTime": 1668502500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        132.6403692071461,
                                        -15.822097691548398
                                    ],
                                    [
                                        132.6403692071461,
                                        -21.201273233495062
                                    ],
                                    [
                                        138.32166418093271,
                                        -21.201273233495062
                                    ],
                                    [
                                        138.32166418093271,
                                        -15.822097691548398
                                    ],
                                    [
                                        132.6403692071461,
                                        -15.822097691548398
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
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T09:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502500000,
                            "endTime": 1668506100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        132.58461204568144,
                                        -15.766861151725685
                                    ],
                                    [
                                        132.58461204568144,
                                        -21.254772657098787
                                    ],
                                    [
                                        138.38108007611555,
                                        -21.254772657098787
                                    ],
                                    [
                                        138.38108007611555,
                                        -15.766861151725685
                                    ],
                                    [
                                        132.58461204568144,
                                        -15.766861151725685
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
                            "startDate": "2022-11-15T09:55:00.000Z",
                            "endDate": "2022-11-15T10:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668506100000,
                            "endTime": 1668508500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    137.99,
                                    -13.85
                                ],
                                [
                                    139.96,
                                    -8.76
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
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a188",
                    "number": 3
                },
                {
                    "asset": "a178",
                    "number": 3
                }
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
            "title": "Order item 246",
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
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    146.48,
                                    -13.04
                                ],
                                [
                                    143.81,
                                    -14.55
                                ],
                                [
                                    141.41,
                                    -16.78
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
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a197",
                    "number": 5
                },
                {
                    "asset": "a185",
                    "number": 0
                },
                {
                    "asset": "a180",
                    "number": 5
                }
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
            "title": "Order item 249",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T12:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    126.579,
                                    -14.574
                                ],
                                [
                                    136.01,
                                    -11.7
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T08:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668498300000,
                            "endTime": 1668501300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        142.00245674433845,
                                        -6.988681706113007
                                    ],
                                    [
                                        142.00245674433845,
                                        -12.240269941818067
                                    ],
                                    [
                                        147.33500013100988,
                                        -12.240269941818067
                                    ],
                                    [
                                        147.33500013100988,
                                        -6.988681706113007
                                    ],
                                    [
                                        142.00245674433845,
                                        -6.988681706113007
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
                            "startDate": "2022-11-15T08:35:00.000Z",
                            "endDate": "2022-11-15T10:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668501300000,
                            "endTime": 1668506700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.08533693804233,
                                        -8.074002027209827
                                    ],
                                    [
                                        143.08533693804233,
                                        -11.168308287221867
                                    ],
                                    [
                                        146.22504202084852,
                                        -11.168308287221867
                                    ],
                                    [
                                        146.22504202084852,
                                        -8.074002027209827
                                    ],
                                    [
                                        143.08533693804233,
                                        -8.074002027209827
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
                            "startDate": "2022-11-15T10:05:00.000Z",
                            "endDate": "2022-11-15T12:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668506700000,
                            "endTime": 1668516900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    139.69,
                                    -11.21
                                ],
                                [
                                    135.56,
                                    -11.98
                                ],
                                [
                                    130.7,
                                    -13.46
                                ],
                                [
                                    126.14,
                                    -14.67
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
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a144",
                    "number": 1
                }
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
            "title": "Order item 252",
            "startDate": "2022-11-15T07:00:00.000Z",
            "endDate": "2022-11-15T11:40:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T07:00:00.000Z",
                            "endDate": "2022-11-15T07:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668495600000,
                            "endTime": 1668498600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.878,
                                    -8.4283
                                ],
                                [
                                    144.19,
                                    -13.11
                                ],
                                [
                                    143,
                                    -18.3
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T11:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668498600000,
                            "endTime": 1668510000000
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
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
                            "startDate": "2022-11-15T11:00:00.000Z",
                            "endDate": "2022-11-15T11:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668510000000,
                            "endTime": 1668512400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    143.0924,
                                    -18.0959
                                ],
                                [
                                    144.9,
                                    -13.43
                                ],
                                [
                                    146.02,
                                    -8.47
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
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a166",
                    "number": 3
                },
                {
                    "asset": "a178",
                    "number": 5
                }
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
            "title": "Order item 255",
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
                                    123.6516,
                                    -16.579
                                ],
                                [
                                    131.78,
                                    -12.71
                                ],
                                [
                                    139.38,
                                    -8.38
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
                                        135.665430123685,
                                        -4.406135312974358
                                    ],
                                    [
                                        135.665430123685,
                                        -11.687564870581424
                                    ],
                                    [
                                        143.03515512375282,
                                        -11.687564870581424
                                    ],
                                    [
                                        143.03515512375282,
                                        -4.406135312974358
                                    ],
                                    [
                                        135.665430123685,
                                        -4.406135312974358
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    134.29,
                                    -11.35
                                ],
                                [
                                    129.32,
                                    -13.59
                                ],
                                [
                                    123.63,
                                    -16.55
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
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a159",
                    "number": 3
                }
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
            "title": "Order item 258",
            "startDate": "2022-11-15T07:10:00.000Z",
            "endDate": "2022-11-15T08:50:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a130",
                    "number": 5
                },
                {
                    "asset": "a133",
                    "number": 4
                }
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
            "title": "Order item 261",
            "startDate": "2022-11-15T07:20:00.000Z",
            "endDate": "2022-11-15T10:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    143.72,
                                    -11.18
                                ],
                                [
                                    145.92,
                                    -4.87
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
                            "id": "Area Reconnaisance//Flight Box",
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668499800000,
                            "endTime": 1668502800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.01160274383602,
                                        -4.77599564557963
                                    ],
                                    [
                                        146.01160274383602,
                                        -5.594139304360817
                                    ],
                                    [
                                        146.83312952753383,
                                        -5.594139304360817
                                    ],
                                    [
                                        146.83312952753383,
                                        -4.77599564557963
                                    ],
                                    [
                                        146.01160274383602,
                                        -4.77599564557963
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
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        142.56733243477723,
                                        -1.3197183071760485
                                    ],
                                    [
                                        142.56733243477723,
                                        -9.027061110774147
                                    ],
                                    [
                                        150.32424764022528,
                                        -9.027061110774147
                                    ],
                                    [
                                        150.32424764022528,
                                        -1.3197183071760485
                                    ],
                                    [
                                        142.56733243477723,
                                        -1.3197183071760485
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T10:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668505800000,
                            "endTime": 1668509400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    140.95,
                                    -16.62
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
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a130",
                    "number": 0
                },
                {
                    "asset": "a125",
                    "number": 4
                }
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
            "title": "Order item 264",
            "startDate": "2022-11-15T07:40:00.000Z",
            "endDate": "2022-11-15T10:00:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    130.23,
                                    -13.27
                                ],
                                [
                                    119.83,
                                    -19.03
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T08:30:00.000Z",
                            "endDate": "2022-11-15T09:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668501000000,
                            "endTime": 1668503400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                119.7138,
                                -18.9116
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
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    140.55,
                                    -8.46
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
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a200",
                    "number": 1
                },
                {
                    "asset": "a192",
                    "number": 0
                },
                {
                    "asset": "a193",
                    "number": 5
                },
                {
                    "asset": "a167",
                    "number": 2
                }
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
            "title": "Order item 267",
            "startDate": "2022-11-15T07:40:00.000Z",
            "endDate": "2022-11-15T10:40:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a109",
                    "number": 2
                },
                {
                    "asset": "a145",
                    "number": 2
                },
                {
                    "asset": "a138",
                    "number": 0
                }
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
            "title": "Order item 270",
            "startDate": "2022-11-15T07:50:00.000Z",
            "endDate": "2022-11-15T08:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
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
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    139.96,
                                    -12.72
                                ],
                                [
                                    130.47,
                                    -15.89
                                ],
                                [
                                    121.27,
                                    -17.77
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
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a192",
                    "number": 4
                }
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
            "title": "Order item 273",
            "startDate": "2022-11-15T07:50:00.000Z",
            "endDate": "2022-11-15T08:20:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a158",
                    "number": 4
                },
                {
                    "asset": "a118",
                    "number": 3
                }
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
            "title": "Order item 276",
            "startDate": "2022-11-15T07:50:00.000Z",
            "endDate": "2022-11-15T08:00:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a145",
                    "number": 0
                },
                {
                    "asset": "a153",
                    "number": 3
                },
                {
                    "asset": "a120",
                    "number": 5
                },
                {
                    "asset": "a101",
                    "number": 0
                }
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
            "title": "Order item 279",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T14:40:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    139.99,
                                    -21.65
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T11:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668502800000,
                            "endTime": 1668511800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                139.571,
                                -21.941
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
                                    139.571,
                                    -21.941
                                ],
                                [
                                    139.36,
                                    -18.3
                                ],
                                [
                                    140.07,
                                    -14.74
                                ],
                                [
                                    140.06,
                                    -11.9
                                ],
                                [
                                    139.34,
                                    -8.77
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
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a161",
                    "number": 4
                }
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
            "title": "Order item 282",
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
                                    132.21,
                                    -12.47
                                ],
                                [
                                    136.57,
                                    -11.3
                                ],
                                [
                                    141.21,
                                    -9.85
                                ],
                                [
                                    147.14,
                                    -8.11
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
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
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
                                    146.6751,
                                    -7.7565
                                ],
                                [
                                    141.51,
                                    -9.3
                                ],
                                [
                                    136.29,
                                    -10.91
                                ],
                                [
                                    131.35,
                                    -13.23
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
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a153",
                    "number": 2
                },
                {
                    "asset": "a145",
                    "number": 3
                },
                {
                    "asset": "a152",
                    "number": 3
                }
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
            "title": "Order item 285",
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
                                    142.9303,
                                    -18.4403
                                ],
                                [
                                    143.82,
                                    -15.11
                                ],
                                [
                                    144.53,
                                    -11.97
                                ],
                                [
                                    145.52,
                                    -9.54
                                ],
                                [
                                    146.79,
                                    -5.84
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
                                        143.62465831322663,
                                        -3.1381993546964644
                                    ],
                                    [
                                        143.62465831322663,
                                        -9.29292420554417
                                    ],
                                    [
                                        149.82508173196788,
                                        -9.29292420554417
                                    ],
                                    [
                                        149.82508173196788,
                                        -3.1381993546964644
                                    ],
                                    [
                                        143.62465831322663,
                                        -3.1381993546964644
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
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    142.84,
                                    -18.03
                                ],
                                [
                                    142.9303,
                                    -18.4403
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a118",
                    "number": 4
                },
                {
                    "asset": "a158",
                    "number": 2
                },
                {
                    "asset": "a157",
                    "number": 2
                },
                {
                    "asset": "a115",
                    "number": 5
                }
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
            "title": "Order item 288",
            "startDate": "2022-11-15T08:35:00.000Z",
            "endDate": "2022-11-15T13:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    143.0924,
                                    -18.0959
                                ],
                                [
                                    143.92,
                                    -15.74
                                ],
                                [
                                    145.67,
                                    -14.48
                                ],
                                [
                                    146.7,
                                    -11.93
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
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
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
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
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
                                    145.43,
                                    -14.17
                                ],
                                [
                                    142.8,
                                    -18.01
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
            "activity": "land-precis-strike",
            "ownAssets": [
                {
                    "asset": "a115",
                    "number": 3
                },
                {
                    "asset": "a147",
                    "number": 1
                },
                {
                    "asset": "a138",
                    "number": 5
                },
                {
                    "asset": "a144",
                    "number": 4
                }
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
            "title": "Order item 291",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T14:50:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    140.88,
                                    -13.08
                                ],
                                [
                                    130.89,
                                    -15.17
                                ],
                                [
                                    121.18,
                                    -17.97
                                ],
                                [
                                    121.6797,
                                    -18.0415
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
                            "endDate": "2022-11-15T12:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505200000,
                            "endTime": 1668516600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                121.6797,
                                -18.0415
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
                                    121.6797,
                                    -18.0415
                                ],
                                [
                                    149.66,
                                    -10.48
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
            "activity": "maritime-point-recce",
            "ownAssets": [
                {
                    "asset": "a190",
                    "number": 1
                }
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
            "title": "Order item 294",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T13:00:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    137.56,
                                    -9.43
                                ],
                                [
                                    134.88,
                                    -11.72
                                ],
                                [
                                    132.48,
                                    -12.74
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
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505200000,
                            "endTime": 1668513600000
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
                            "startDate": "2022-11-15T12:00:00.000Z",
                            "endDate": "2022-11-15T13:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513600000,
                            "endTime": 1668517200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    135.83,
                                    -10.53
                                ],
                                [
                                    139.21,
                                    -8.32
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
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a192",
                    "number": 3
                },
                {
                    "asset": "a200",
                    "number": 4
                },
                {
                    "asset": "a181",
                    "number": 5
                },
                {
                    "asset": "a175",
                    "number": 4
                }
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
            "title": "Order item 297",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T11:40:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a175",
                    "number": 0
                },
                {
                    "asset": "a178",
                    "number": 3
                }
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
            "title": "Order item 300",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T12:40:00.000Z",
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
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    144.34,
                                    -13.28
                                ],
                                [
                                    139.72,
                                    -16.84
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T12:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505200000,
                            "endTime": 1668514800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        138.3906475763545,
                                        -15.460448643139454
                                    ],
                                    [
                                        138.3906475763545,
                                        -18.640798776437226
                                    ],
                                    [
                                        141.71889775751728,
                                        -18.640798776437226
                                    ],
                                    [
                                        141.71889775751728,
                                        -15.460448643139454
                                    ],
                                    [
                                        138.3906475763545,
                                        -15.460448643139454
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
                            "endDate": "2022-11-15T12:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668514800000,
                            "endTime": 1668516000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    149.45,
                                    -10.11
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
            "activity": "land-area-strike",
            "ownAssets": [
                {
                    "asset": "a180",
                    "number": 4
                },
                {
                    "asset": "a178",
                    "number": 3
                }
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
            "title": "Order item 303",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T08:50:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a169",
                    "number": 5
                },
                {
                    "asset": "a199",
                    "number": 5
                },
                {
                    "asset": "a165",
                    "number": 3
                },
                {
                    "asset": "a177",
                    "number": 5
                }
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
            "title": "Order item 306",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T15:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    146.4245,
                                    -19.9708
                                ],
                                [
                                    144.44,
                                    -16.67
                                ],
                                [
                                    143.33,
                                    -13.52
                                ],
                                [
                                    141.51,
                                    -11.07
                                ],
                                [
                                    138.96,
                                    -8.35
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
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
                                        136.11538816250345,
                                        -4.860595177883915
                                    ],
                                    [
                                        136.11538816250345,
                                        -11.240767914143731
                                    ],
                                    [
                                        142.569747624653,
                                        -11.240767914143731
                                    ],
                                    [
                                        142.569747624653,
                                        -4.860595177883915
                                    ],
                                    [
                                        136.11538816250345,
                                        -4.860595177883915
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
                            "startDate": "2022-11-15T12:20:00.000Z",
                            "endDate": "2022-11-15T13:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668514800000,
                            "endTime": 1668518400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.95100830869802,
                                        -6.704282236148068
                                    ],
                                    [
                                        137.95100830869802,
                                        -9.417763967196569
                                    ],
                                    [
                                        140.69238885617835,
                                        -9.417763967196569
                                    ],
                                    [
                                        140.69238885617835,
                                        -6.704282236148068
                                    ],
                                    [
                                        137.95100830869802,
                                        -6.704282236148068
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
                            "startDate": "2022-11-15T13:20:00.000Z",
                            "endDate": "2022-11-15T15:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668518400000,
                            "endTime": 1668527400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    142.09,
                                    -11.89
                                ],
                                [
                                    144.03,
                                    -15.57
                                ],
                                [
                                    146.24,
                                    -19.97
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
            "activity": "maritime-area-recce",
            "ownAssets": [
                {
                    "asset": "a129",
                    "number": 3
                }
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
            "title": "Order item 309",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T17:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    145.7545,
                                    -5.607
                                ],
                                [
                                    142.91,
                                    -18.53
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
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
                                        139.8168171631296,
                                        -14.902465162225106
                                    ],
                                    [
                                        139.8168171631296,
                                        -21.232019342649675
                                    ],
                                    [
                                        146.48845688836573,
                                        -21.232019342649675
                                    ],
                                    [
                                        146.48845688836573,
                                        -14.902465162225106
                                    ],
                                    [
                                        139.8168171631296,
                                        -14.902465162225106
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
                            "startDate": "2022-11-15T12:50:00.000Z",
                            "endDate": "2022-11-15T14:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668516600000,
                            "endTime": 1668522600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        139.1993905547205,
                                        -14.283531175508367
                                    ],
                                    [
                                        139.1993905547205,
                                        -21.826750305952054
                                    ],
                                    [
                                        147.15668374930178,
                                        -21.826750305952054
                                    ],
                                    [
                                        147.15668374930178,
                                        -14.283531175508367
                                    ],
                                    [
                                        139.1993905547205,
                                        -14.283531175508367
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
                            "startDate": "2022-11-15T14:30:00.000Z",
                            "endDate": "2022-11-15T17:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668522600000,
                            "endTime": 1668531600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    143.0924,
                                    -18.0959
                                ],
                                [
                                    144,
                                    -15.01
                                ],
                                [
                                    144.74,
                                    -12.11
                                ],
                                [
                                    144.76,
                                    -8.93
                                ],
                                [
                                    146.07,
                                    -5.46
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
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a170",
                    "number": 4
                },
                {
                    "asset": "a190",
                    "number": 1
                },
                {
                    "asset": "a179",
                    "number": 3
                }
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
            "title": "Order item 312",
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
                                    135.6686,
                                    -14.5464
                                ],
                                [
                                    139.78,
                                    -13.08
                                ],
                                [
                                    145.02,
                                    -11.49
                                ],
                                [
                                    149.54,
                                    -10.62
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
                                149.3719,
                                -10.3237
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
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    146.43,
                                    -11.62
                                ],
                                [
                                    142.3,
                                    -12.12
                                ],
                                [
                                    139.45,
                                    -13.34
                                ],
                                [
                                    135.88,
                                    -14.27
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
            "activity": "maritime-point-recce",
            "ownAssets": [
                {
                    "asset": "a135",
                    "number": 1
                },
                {
                    "asset": "a154",
                    "number": 3
                },
                {
                    "asset": "a134",
                    "number": 1
                },
                {
                    "asset": "a129",
                    "number": 5
                }
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
            "title": "Order item 315",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T13:00:00.000Z",
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
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    140.85,
                                    -16.58
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
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T11:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505200000,
                            "endTime": 1668511200000
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
                            "startDate": "2022-11-15T11:20:00.000Z",
                            "endDate": "2022-11-15T13:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668511200000,
                            "endTime": 1668517200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    139.37,
                                    -8.36
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
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a178",
                    "number": 0
                },
                {
                    "asset": "a187",
                    "number": 5
                },
                {
                    "asset": "a166",
                    "number": 1
                }
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
            "title": "Order item 318",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T15:20:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    147.4089,
                                    -10.3741
                                ],
                                [
                                    135.11,
                                    -18.66
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
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T11:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505200000,
                            "endTime": 1668511800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        132.56089305784693,
                                        -15.743350203109207
                                    ],
                                    [
                                        132.56089305784693,
                                        -21.27753373287814
                                    ],
                                    [
                                        138.4063783860921,
                                        -21.27753373287814
                                    ],
                                    [
                                        138.4063783860921,
                                        -15.743350203109207
                                    ],
                                    [
                                        132.56089305784693,
                                        -15.743350203109207
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
                            "startDate": "2022-11-15T11:30:00.000Z",
                            "endDate": "2022-11-15T14:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668511800000,
                            "endTime": 1668522600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        132.74897455554057,
                                        -15.929561419054954
                                    ],
                                    [
                                        132.74897455554057,
                                        -21.097090045127143
                                    ],
                                    [
                                        138.20614871983636,
                                        -21.097090045127143
                                    ],
                                    [
                                        138.20614871983636,
                                        -15.929561419054954
                                    ],
                                    [
                                        132.74897455554057,
                                        -15.929561419054954
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
                            "startDate": "2022-11-15T14:30:00.000Z",
                            "endDate": "2022-11-15T15:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668522600000,
                            "endTime": 1668525600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    147.61,
                                    -9.93
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
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a195",
                    "number": 0
                },
                {
                    "asset": "a197",
                    "number": 0
                },
                {
                    "asset": "a171",
                    "number": 2
                },
                {
                    "asset": "a178",
                    "number": 4
                }
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
            "title": "Order item 321",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T10:10:00.000Z",
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
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    139.53,
                                    -11.16
                                ],
                                [
                                    149.61,
                                    -10.39
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T10:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668505200000,
                            "endTime": 1668507000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        147.55702637481056,
                                        -8.46065706475206
                                    ],
                                    [
                                        147.55702637481056,
                                        -11.907418332387905
                                    ],
                                    [
                                        151.06071692610257,
                                        -11.907418332387905
                                    ],
                                    [
                                        151.06071692610257,
                                        -8.46065706475206
                                    ],
                                    [
                                        147.55702637481056,
                                        -8.46065706475206
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
                            "startDate": "2022-11-15T10:10:00.000Z",
                            "endDate": "2022-11-15T10:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668507000000,
                            "endTime": 1668507000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    130.12,
                                    -12.61
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
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a151",
                    "number": 3
                },
                {
                    "asset": "a146",
                    "number": 4
                },
                {
                    "asset": "a155",
                    "number": 2
                }
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
            "title": "Order item 324",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T13:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    140.53,
                                    -12.83
                                ],
                                [
                                    132.36,
                                    -15.38
                                ],
                                [
                                    124.46,
                                    -18.65
                                ],
                                [
                                    116.85,
                                    -20.64
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
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
                                        114.88431239696956,
                                        -19.151544586800675
                                    ],
                                    [
                                        114.88431239696956,
                                        -22.680059054286396
                                    ],
                                    [
                                        118.66440225202159,
                                        -22.680059054286396
                                    ],
                                    [
                                        118.66440225202159,
                                        -19.151544586800675
                                    ],
                                    [
                                        114.88431239696956,
                                        -19.151544586800675
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
                            "startDate": "2022-11-15T10:45:00.000Z",
                            "endDate": "2022-11-15T13:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509100000,
                            "endTime": 1668519300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    127.5,
                                    -16.93
                                ],
                                [
                                    138.36,
                                    -13.83
                                ],
                                [
                                    148.5,
                                    -10.45
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
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a176",
                    "number": 1
                }
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
            "title": "Order item 327",
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
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    143.29,
                                    -15.25
                                ],
                                [
                                    144.69,
                                    -11.92
                                ],
                                [
                                    145.39,
                                    -8.31
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
            "activity": "land-transit",
            "ownAssets": [
                {
                    "asset": "a130",
                    "number": 5
                }
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
            "title": "Order item 330",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T13:25:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    145.7545,
                                    -5.607
                                ],
                                [
                                    136.18,
                                    -11.04
                                ],
                                [
                                    126.65,
                                    -15.44
                                ],
                                [
                                    116.41,
                                    -20.55
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
                            "startDate": "2022-11-15T09:45:00.000Z",
                            "endDate": "2022-11-15T12:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505500000,
                            "endTime": 1668515700000
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
                            "startDate": "2022-11-15T12:35:00.000Z",
                            "endDate": "2022-11-15T13:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668515700000,
                            "endTime": 1668518700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    146.03,
                                    -5.44
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
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a166",
                    "number": 3
                },
                {
                    "asset": "a181",
                    "number": 2
                },
                {
                    "asset": "a172",
                    "number": 0
                }
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
            "title": "Order item 333",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T15:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    129.9751,
                                    -12.5154
                                ],
                                [
                                    134.34,
                                    -10.73
                                ],
                                [
                                    139.91,
                                    -8.75
                                ],
                                [
                                    144.75,
                                    -6.5
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
                            "startDate": "2022-11-15T09:45:00.000Z",
                            "endDate": "2022-11-15T12:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668505500000,
                            "endTime": 1668515100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.73882648635617,
                                        -6.221994599793555
                                    ],
                                    [
                                        143.73882648635617,
                                        -7.548877559206284
                                    ],
                                    [
                                        145.07544261275535,
                                        -7.548877559206284
                                    ],
                                    [
                                        145.07544261275535,
                                        -6.221994599793555
                                    ],
                                    [
                                        143.73882648635617,
                                        -6.221994599793555
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
                            "startDate": "2022-11-15T12:25:00.000Z",
                            "endDate": "2022-11-15T15:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668515100000,
                            "endTime": 1668525900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    139.91,
                                    -8.48
                                ],
                                [
                                    134.55,
                                    -10.95
                                ],
                                [
                                    129.47,
                                    -12.14
                                ],
                                [
                                    129.9751,
                                    -12.5154
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a117",
                    "number": 5
                },
                {
                    "asset": "a135",
                    "number": 5
                },
                {
                    "asset": "a110",
                    "number": 4
                }
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
            "title": "Order item 336",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T09:25:00.000Z",
            "location": [],
            "activity": "maritime-cyber",
            "ownAssets": [
                {
                    "asset": "a199",
                    "number": 5
                }
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
            "title": "Order item 339",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T09:25:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a172",
                    "number": 5
                }
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
            "title": "Order item 342",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T09:55:00.000Z",
            "location": [],
            "activity": "maritime-cyber",
            "ownAssets": [
                {
                    "asset": "a107",
                    "number": 2
                },
                {
                    "asset": "a155",
                    "number": 1
                },
                {
                    "asset": "a105",
                    "number": 2
                },
                {
                    "asset": "a130",
                    "number": 4
                }
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
            "title": "Order item 345",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T13:20:00.000Z",
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
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    132,
                                    -7.78
                                ],
                                [
                                    126.8,
                                    -14.69
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T12:30:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505800000,
                            "endTime": 1668515400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        124.696820078302,
                                        -12.552452914977462
                                    ],
                                    [
                                        124.696820078302,
                                        -16.734168951770727
                                    ],
                                    [
                                        129.02246289452123,
                                        -16.734168951770727
                                    ],
                                    [
                                        129.02246289452123,
                                        -12.552452914977462
                                    ],
                                    [
                                        124.696820078302,
                                        -12.552452914977462
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
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    137.41,
                                    -1.6
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
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a178",
                    "number": 0
                }
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
            "title": "Order item 348",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T12:20:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    128.1529,
                                    -17.0936
                                ],
                                [
                                    130.21,
                                    -13.46
                                ],
                                [
                                    132.28,
                                    -9.83
                                ],
                                [
                                    134.64,
                                    -5.91
                                ],
                                [
                                    137.28,
                                    -2.7
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668505800000,
                            "endTime": 1668505800000
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T12:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668505800000,
                            "endTime": 1668514800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    134.76,
                                    -6.1
                                ],
                                [
                                    133.16,
                                    -9.5
                                ],
                                [
                                    130.84,
                                    -13.63
                                ],
                                [
                                    127.8,
                                    -17.47
                                ],
                                [
                                    128.1529,
                                    -17.0936
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a126",
                    "number": 5
                },
                {
                    "asset": "a155",
                    "number": 0
                },
                {
                    "asset": "a145",
                    "number": 0
                },
                {
                    "asset": "a151",
                    "number": 4
                }
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
            "title": "Order item 351",
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
                            "force": "F-Blue",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    135.38,
                                    -4.5
                                ],
                                [
                                    133.33,
                                    -8.35
                                ],
                                [
                                    130.57,
                                    -11.91
                                ],
                                [
                                    130.7986,
                                    -11.9046
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-transit",
            "ownAssets": [
                {
                    "asset": "a195",
                    "number": 0
                }
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
            "title": "Order item 354",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T11:50:00.000Z",
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
                                    147.171,
                                    -8.2398
                                ],
                                [
                                    129.36,
                                    -12.64
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T11:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505800000,
                            "endTime": 1668512400000
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
                            "startDate": "2022-11-15T11:40:00.000Z",
                            "endDate": "2022-11-15T11:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512400000,
                            "endTime": 1668513000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    138.92,
                                    -10.07
                                ],
                                [
                                    147.61,
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
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a195",
                    "number": 3
                }
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
            "title": "Order item 357",
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
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    138.93,
                                    -12.93
                                ],
                                [
                                    130.39,
                                    -14.88
                                ],
                                [
                                    122.14,
                                    -17.54
                                ],
                                [
                                    121.6797,
                                    -18.0415
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
                                        118.51123875191148,
                                        -14.954206107209476
                                    ],
                                    [
                                        118.51123875191148,
                                        -21.07537442983104
                                    ],
                                    [
                                        124.96041881816107,
                                        -21.07537442983104
                                    ],
                                    [
                                        124.96041881816107,
                                        -14.954206107209476
                                    ],
                                    [
                                        118.51123875191148,
                                        -14.954206107209476
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
                                    121.6797,
                                    -18.0415
                                ],
                                [
                                    147.97,
                                    -9.61
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
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a177",
                    "number": 2
                },
                {
                    "asset": "a180",
                    "number": 1
                }
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
            "title": "Order item 360",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T14:40:00.000Z",
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
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    137.24,
                                    -9.85
                                ],
                                [
                                    133.97,
                                    -11.11
                                ],
                                [
                                    129.98,
                                    -13.08
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
                                        126.89357228799821,
                                        -9.816730530687892
                                    ],
                                    [
                                        126.89357228799821,
                                        -15.428978634713282
                                    ],
                                    [
                                        132.6528996757924,
                                        -15.428978634713282
                                    ],
                                    [
                                        132.6528996757924,
                                        -9.816730530687892
                                    ],
                                    [
                                        126.89357228799821,
                                        -9.816730530687892
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
                            "endDate": "2022-11-15T12:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512400000,
                            "endTime": 1668516000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        128.1367912634076,
                                        -11.058469430628051
                                    ],
                                    [
                                        128.1367912634076,
                                        -14.208415539365307
                                    ],
                                    [
                                        131.36631693049083,
                                        -14.208415539365307
                                    ],
                                    [
                                        131.36631693049083,
                                        -11.058469430628051
                                    ],
                                    [
                                        128.1367912634076,
                                        -11.058469430628051
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
                            "startDate": "2022-11-15T12:40:00.000Z",
                            "endDate": "2022-11-15T14:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668516000000,
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
                                    135.98,
                                    -10.64
                                ],
                                [
                                    141.57,
                                    -8.31
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
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a181",
                    "number": 2
                },
                {
                    "asset": "a179",
                    "number": 1
                }
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
            "title": "Order item 363",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T11:20:00.000Z",
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
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    142.56,
                                    -13.09
                                ],
                                [
                                    146.86,
                                    -20.54
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
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T10:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668505800000,
                            "endTime": 1668507600000
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
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
                            "startDate": "2022-11-15T10:20:00.000Z",
                            "endDate": "2022-11-15T11:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668507600000,
                            "endTime": 1668511200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.5324,
                                    -20.2695
                                ],
                                [
                                    143.68,
                                    -16.02
                                ],
                                [
                                    141.06,
                                    -10.55
                                ],
                                [
                                    138.72,
                                    -6.8
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
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a170",
                    "number": 1
                },
                {
                    "asset": "a200",
                    "number": 4
                },
                {
                    "asset": "a165",
                    "number": 0
                },
                {
                    "asset": "a177",
                    "number": 1
                }
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
            "title": "Order item 366",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T11:50:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    146.4245,
                                    -19.9708
                                ],
                                [
                                    144.16,
                                    -15.57
                                ],
                                [
                                    142.06,
                                    -12.01
                                ],
                                [
                                    139.24,
                                    -8.18
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
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T11:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668505800000,
                            "endTime": 1668511200000
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    146.54,
                                    -20.31
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
            "activity": "maritime-point-recce",
            "ownAssets": [
                {
                    "asset": "a128",
                    "number": 5
                }
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
            "title": "Order item 369",
            "startDate": "2022-11-15T09:05:00.000Z",
            "endDate": "2022-11-15T14:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    137.28,
                                    -13.84
                                ],
                                [
                                    140.35,
                                    -12.29
                                ],
                                [
                                    143.7,
                                    -11.45
                                ],
                                [
                                    147.34,
                                    -10.33
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
                            "startDate": "2022-11-15T09:55:00.000Z",
                            "endDate": "2022-11-15T12:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668506100000,
                            "endTime": 1668513900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.27377533079925,
                                        -7.656596151026755
                                    ],
                                    [
                                        145.27377533079925,
                                        -12.088455653224639
                                    ],
                                    [
                                        149.77595872184702,
                                        -12.088455653224639
                                    ],
                                    [
                                        149.77595872184702,
                                        -7.656596151026755
                                    ],
                                    [
                                        145.27377533079925,
                                        -7.656596151026755
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
                            "endDate": "2022-11-15T14:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668513900000,
                            "endTime": 1668521100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.98690057596085,
                                        -9.363763113123863
                                    ],
                                    [
                                        146.98690057596085,
                                        -10.395427981324369
                                    ],
                                    [
                                        148.0341415533329,
                                        -10.395427981324369
                                    ],
                                    [
                                        148.0341415533329,
                                        -9.363763113123863
                                    ],
                                    [
                                        146.98690057596085,
                                        -9.363763113123863
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
                            "startDate": "2022-11-15T14:05:00.000Z",
                            "endDate": "2022-11-15T14:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668521100000,
                            "endTime": 1668522300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    133.97,
                                    -15.83
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
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a112",
                    "number": 1
                },
                {
                    "asset": "a141",
                    "number": 2
                },
                {
                    "asset": "a129",
                    "number": 5
                }
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
            "title": "Order item 372",
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
                                    146.5324,
                                    -20.2695
                                ],
                                [
                                    147.84,
                                    -15.26
                                ],
                                [
                                    149.62,
                                    -10.8
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
                                        146.26571889181585,
                                        -7.227234118760606
                                    ],
                                    [
                                        146.26571889181585,
                                        -13.389894759405719
                                    ],
                                    [
                                        152.5395705356498,
                                        -13.389894759405719
                                    ],
                                    [
                                        152.5395705356498,
                                        -7.227234118760606
                                    ],
                                    [
                                        146.26571889181585,
                                        -7.227234118760606
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
                                        147.81286064666423,
                                        -8.77917309300141
                                    ],
                                    [
                                        147.81286064666423,
                                        -11.860674300445478
                                    ],
                                    [
                                        150.94629007464104,
                                        -11.860674300445478
                                    ],
                                    [
                                        150.94629007464104,
                                        -8.77917309300141
                                    ],
                                    [
                                        147.81286064666423,
                                        -8.77917309300141
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
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    148.39,
                                    -14.82
                                ],
                                [
                                    146.87,
                                    -19.84
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
            "activity": "maritime-area-recce",
            "ownAssets": [
                {
                    "asset": "a132",
                    "number": 1
                },
                {
                    "asset": "a150",
                    "number": 2
                },
                {
                    "asset": "a129",
                    "number": 4
                },
                {
                    "asset": "a121",
                    "number": 1
                }
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
            "title": "Order item 375",
            "startDate": "2022-11-15T09:40:00.000Z",
            "endDate": "2022-11-15T13:50:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    142.99,
                                    -7.91
                                ],
                                [
                                    139.79,
                                    -11.4
                                ],
                                [
                                    135.88,
                                    -14.6
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T10:30:00.000Z",
                            "endDate": "2022-11-15T11:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668508200000,
                            "endTime": 1668513000000
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
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
                            "startDate": "2022-11-15T11:50:00.000Z",
                            "endDate": "2022-11-15T13:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513000000,
                            "endTime": 1668520200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    139.91,
                                    -11.3
                                ],
                                [
                                    142.91,
                                    -7.92
                                ],
                                [
                                    146.2,
                                    -5.25
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
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a175",
                    "number": 0
                },
                {
                    "asset": "a181",
                    "number": 0
                },
                {
                    "asset": "a200",
                    "number": 4
                }
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
            "title": "Order item 378",
            "startDate": "2022-11-15T09:40:00.000Z",
            "endDate": "2022-11-15T15:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T10:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668505200000,
                            "endTime": 1668508200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.9751,
                                    -12.5154
                                ],
                                [
                                    135.58,
                                    -12
                                ],
                                [
                                    141.42,
                                    -10.26
                                ],
                                [
                                    147.54,
                                    -10.24
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
                            "startDate": "2022-11-15T10:30:00.000Z",
                            "endDate": "2022-11-15T12:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668508200000,
                            "endTime": 1668514800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.6071416673975,
                                        -7.990550439689706
                                    ],
                                    [
                                        145.6071416673975,
                                        -11.758648004799312
                                    ],
                                    [
                                        149.4341801825386,
                                        -11.758648004799312
                                    ],
                                    [
                                        149.4341801825386,
                                        -7.990550439689706
                                    ],
                                    [
                                        145.6071416673975,
                                        -7.990550439689706
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
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668514800000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    141.56,
                                    -10.98
                                ],
                                [
                                    135.71,
                                    -12
                                ],
                                [
                                    130.14,
                                    -12.74
                                ],
                                [
                                    129.9751,
                                    -12.5154
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-strike",
            "ownAssets": [
                {
                    "asset": "a146",
                    "number": 3
                },
                {
                    "asset": "a148",
                    "number": 0
                },
                {
                    "asset": "a108",
                    "number": 3
                },
                {
                    "asset": "a144",
                    "number": 2
                }
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
            "title": "Order item 381",
            "startDate": "2022-11-15T09:45:00.000Z",
            "endDate": "2022-11-15T14:15:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    137.21,
                                    -3.15
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
                            "startDate": "2022-11-15T10:35:00.000Z",
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668508500000,
                            "endTime": 1668514500000
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
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    138.17,
                                    -6.32
                                ],
                                [
                                    138.87,
                                    -10.05
                                ],
                                [
                                    138.86,
                                    -13.5
                                ],
                                [
                                    140.12,
                                    -16.67
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
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a144",
                    "number": 2
                },
                {
                    "asset": "a137",
                    "number": 4
                },
                {
                    "asset": "a146",
                    "number": 1
                }
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
            "title": "Order item 384",
            "startDate": "2022-11-15T10:05:00.000Z",
            "endDate": "2022-11-15T16:45:00.000Z",
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
                                    137.4298,
                                    -1.926
                                ],
                                [
                                    133.09,
                                    -8.34
                                ],
                                [
                                    128.27,
                                    -14.24
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Flight box",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668509700000,
                            "endTime": 1668511500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        125.03484205938175,
                                        -10.704788419135053
                                    ],
                                    [
                                        125.03484205938175,
                                        -16.9763313049364
                                    ],
                                    [
                                        131.50558933243292,
                                        -16.9763313049364
                                    ],
                                    [
                                        131.50558933243292,
                                        -10.704788419135053
                                    ],
                                    [
                                        125.03484205938175,
                                        -10.704788419135053
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
                            "startDate": "2022-11-15T11:25:00.000Z",
                            "endDate": "2022-11-15T13:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668511500000,
                            "endTime": 1668519900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        125.25776459419035,
                                        -10.928842478374273
                                    ],
                                    [
                                        125.25776459419035,
                                        -16.758073293068392
                                    ],
                                    [
                                        131.27074673868543,
                                        -16.758073293068392
                                    ],
                                    [
                                        131.27074673868543,
                                        -10.928842478374273
                                    ],
                                    [
                                        125.25776459419035,
                                        -10.928842478374273
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
                            "startDate": "2022-11-15T13:45:00.000Z",
                            "endDate": "2022-11-15T16:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668519900000,
                            "endTime": 1668530700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    131.76,
                                    -9.64
                                ],
                                [
                                    134.36,
                                    -6.35
                                ],
                                [
                                    137.25,
                                    -1.78
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
            "activity": "air-air-recce",
            "ownAssets": [
                {
                    "asset": "a170",
                    "number": 5
                },
                {
                    "asset": "a198",
                    "number": 1
                },
                {
                    "asset": "a199",
                    "number": 3
                },
                {
                    "asset": "a172",
                    "number": 5
                }
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
            "title": "Order item 387",
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
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    124.76,
                                    -18.24
                                ],
                                [
                                    132.58,
                                    -15.75
                                ],
                                [
                                    139.68,
                                    -12.98
                                ],
                                [
                                    147.06,
                                    -9.93
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
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668509700000,
                            "endTime": 1668514500000
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
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    117.02,
                                    -20.76
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
            "activity": "maritime-point-recce",
            "ownAssets": [
                {
                    "asset": "a117",
                    "number": 5
                },
                {
                    "asset": "a151",
                    "number": 5
                },
                {
                    "asset": "a144",
                    "number": 3
                },
                {
                    "asset": "a152",
                    "number": 0
                }
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
            "title": "Order item 390",
            "startDate": "2022-11-15T10:05:00.000Z",
            "endDate": "2022-11-15T12:55:00.000Z",
            "location": [],
            "activity": "maritime-cyber",
            "ownAssets": [
                {
                    "asset": "a195",
                    "number": 3
                },
                {
                    "asset": "a173",
                    "number": 4
                }
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
            "title": "Order item 393",
            "startDate": "2022-11-15T10:05:00.000Z",
            "endDate": "2022-11-15T14:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    139.571,
                                    -21.941
                                ],
                                [
                                    147.49,
                                    -9.45
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
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668509700000,
                            "endTime": 1668511500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.758311125403,
                                        -6.129095998604908
                                    ],
                                    [
                                        143.758311125403,
                                        -13.58844434911724
                                    ],
                                    [
                                        151.34718651924354,
                                        -13.58844434911724
                                    ],
                                    [
                                        151.34718651924354,
                                        -6.129095998604908
                                    ],
                                    [
                                        143.758311125403,
                                        -6.129095998604908
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
                            "startDate": "2022-11-15T11:25:00.000Z",
                            "endDate": "2022-11-15T14:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668511500000,
                            "endTime": 1668522300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    143.91,
                                    -16.16
                                ],
                                [
                                    139.68,
                                    -22.08
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
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a160",
                    "number": 5
                },
                {
                    "asset": "a118",
                    "number": 1
                }
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
            "title": "Order item 396",
            "startDate": "2022-11-15T10:15:00.000Z",
            "endDate": "2022-11-15T10:25:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a144",
                    "number": 2
                },
                {
                    "asset": "a151",
                    "number": 0
                },
                {
                    "asset": "a116",
                    "number": 2
                },
                {
                    "asset": "a157",
                    "number": 2
                }
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
            "title": "Order item 399",
            "startDate": "2022-11-15T10:25:00.000Z",
            "endDate": "2022-11-15T17:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:25:00.000Z",
                            "endDate": "2022-11-15T11:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668507900000,
                            "endTime": 1668510900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    121.1967,
                                    -18.1747
                                ],
                                [
                                    126.65,
                                    -15.19
                                ],
                                [
                                    133.12,
                                    -12.18
                                ],
                                [
                                    138.87,
                                    -9.9
                                ],
                                [
                                    143.91,
                                    -7.33
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Flight box",
                            "startDate": "2022-11-15T11:15:00.000Z",
                            "endDate": "2022-11-15T12:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668510900000,
                            "endTime": 1668516300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        142.39429502534455,
                                        -4.877060445767004
                                    ],
                                    [
                                        142.39429502534455,
                                        -8.886260059316498
                                    ],
                                    [
                                        146.43518171803854,
                                        -8.886260059316498
                                    ],
                                    [
                                        146.43518171803854,
                                        -4.877060445767004
                                    ],
                                    [
                                        142.39429502534455,
                                        -4.877060445767004
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
                            "startDate": "2022-11-15T12:45:00.000Z",
                            "endDate": "2022-11-15T14:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668516300000,
                            "endTime": 1668524100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.86498525959755,
                                        -6.347698810034667
                                    ],
                                    [
                                        143.86498525959755,
                                        -7.423491306938682
                                    ],
                                    [
                                        144.9486433404452,
                                        -7.423491306938682
                                    ],
                                    [
                                        144.9486433404452,
                                        -6.347698810034667
                                    ],
                                    [
                                        143.86498525959755,
                                        -6.347698810034667
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
                            "startDate": "2022-11-15T14:55:00.000Z",
                            "endDate": "2022-11-15T17:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668524100000,
                            "endTime": 1668534300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    138.19,
                                    -9.23
                                ],
                                [
                                    132.87,
                                    -12.69
                                ],
                                [
                                    126.84,
                                    -14.87
                                ],
                                [
                                    121.09,
                                    -17.76
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
            "activity": "air-air-recce",
            "ownAssets": [
                {
                    "asset": "a157",
                    "number": 5
                },
                {
                    "asset": "a156",
                    "number": 5
                },
                {
                    "asset": "a114",
                    "number": 2
                },
                {
                    "asset": "a146",
                    "number": 2
                }
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
            "title": "Order item 402",
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
                                    138.44,
                                    -14.19
                                ],
                                [
                                    127.1,
                                    -17.35
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
                            "startDate": "2022-11-15T11:35:00.000Z",
                            "endDate": "2022-11-15T14:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512100000,
                            "endTime": 1668522300000
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
                                    126.8957,
                                    -17.0157
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
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a191",
                    "number": 1
                },
                {
                    "asset": "a186",
                    "number": 4
                },
                {
                    "asset": "a190",
                    "number": 3
                }
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
            "title": "Order item 405",
            "startDate": "2022-11-15T10:45:00.000Z",
            "endDate": "2022-11-15T14:15:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    126.3983,
                                    -14.6078
                                ],
                                [
                                    149.26,
                                    -9.69
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
                            "startDate": "2022-11-15T11:35:00.000Z",
                            "endDate": "2022-11-15T12:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668512100000,
                            "endTime": 1668515100000
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
                            "startDate": "2022-11-15T12:25:00.000Z",
                            "endDate": "2022-11-15T14:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668515100000,
                            "endTime": 1668521700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3998,
                                    -10.1238
                                ],
                                [
                                    143.22,
                                    -10.79
                                ],
                                [
                                    137.97,
                                    -12.56
                                ],
                                [
                                    131.99,
                                    -13.03
                                ],
                                [
                                    126.3,
                                    -14.23
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
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a108",
                    "number": 4
                },
                {
                    "asset": "a148",
                    "number": 1
                },
                {
                    "asset": "a146",
                    "number": 1
                },
                {
                    "asset": "a159",
                    "number": 2
                }
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
            "title": "Order item 408",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T15:25:00.000Z",
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
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    144.78,
                                    -11.63
                                ],
                                [
                                    139.34,
                                    -12.62
                                ],
                                [
                                    134.19,
                                    -13.32
                                ],
                                [
                                    128.33,
                                    -13.74
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        126.0136886475944,
                                        -11.684836907813997
                                    ],
                                    [
                                        126.0136886475944,
                                        -16.018511736344724
                                    ],
                                    [
                                        130.4810113645494,
                                        -16.018511736344724
                                    ],
                                    [
                                        130.4810113645494,
                                        -11.684836907813997
                                    ],
                                    [
                                        126.0136886475944,
                                        -11.684836907813997
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
                            "endDate": "2022-11-15T15:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668514500000,
                            "endTime": 1668525900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    133.68,
                                    -13.06
                                ],
                                [
                                    139.06,
                                    -12.33
                                ],
                                [
                                    144.73,
                                    -11.32
                                ],
                                [
                                    149.69,
                                    -11.02
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
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a200",
                    "number": 5
                },
                {
                    "asset": "a181",
                    "number": 2
                },
                {
                    "asset": "a174",
                    "number": 1
                }
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
            "title": "Order item 411",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T12:25:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a178",
                    "number": 2
                },
                {
                    "asset": "a194",
                    "number": 1
                },
                {
                    "asset": "a179",
                    "number": 3
                },
                {
                    "asset": "a177",
                    "number": 2
                }
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
            "title": "Order item 414",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T17:35:00.000Z",
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
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    144.8,
                                    -9.77
                                ],
                                [
                                    143.38,
                                    -14.17
                                ],
                                [
                                    142.25,
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
                            "id": "Area Reconnaisance//Flight Box",
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T14:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668522900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        139.07964260344235,
                                        -14.933393251291717
                                    ],
                                    [
                                        139.07964260344235,
                                        -21.06171657147017
                                    ],
                                    [
                                        145.5357523865909,
                                        -21.06171657147017
                                    ],
                                    [
                                        145.5357523865909,
                                        -14.933393251291717
                                    ],
                                    [
                                        139.07964260344235,
                                        -14.933393251291717
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
                            "startDate": "2022-11-15T14:35:00.000Z",
                            "endDate": "2022-11-15T16:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668522900000,
                            "endTime": 1668529500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        140.85493391234766,
                                        -16.681472844675834
                                    ],
                                    [
                                        140.85493391234766,
                                        -19.356957977913805
                                    ],
                                    [
                                        143.6694502057668,
                                        -19.356957977913805
                                    ],
                                    [
                                        143.6694502057668,
                                        -16.681472844675834
                                    ],
                                    [
                                        140.85493391234766,
                                        -16.681472844675834
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
                            "startDate": "2022-11-15T16:25:00.000Z",
                            "endDate": "2022-11-15T17:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668529500000,
                            "endTime": 1668533700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    146.42,
                                    -5.51
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
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a177",
                    "number": 1
                },
                {
                    "asset": "a188",
                    "number": 2
                },
                {
                    "asset": "a169",
                    "number": 4
                }
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
            "title": "Order item 417",
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
                                    148.2461,
                                    -10.1388
                                ],
                                [
                                    139.15,
                                    -20.13
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
                                        135.64196010146756,
                                        -16.335490343771024
                                    ],
                                    [
                                        135.64196010146756,
                                        -23.625412486028488
                                    ],
                                    [
                                        143.42150068834312,
                                        -23.625412486028488
                                    ],
                                    [
                                        143.42150068834312,
                                        -16.335490343771024
                                    ],
                                    [
                                        135.64196010146756,
                                        -16.335490343771024
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
                                        138.62992346760768,
                                        -19.254866935846668
                                    ],
                                    [
                                        138.62992346760768,
                                        -20.787198689251635
                                    ],
                                    [
                                        140.2610252699075,
                                        -20.787198689251635
                                    ],
                                    [
                                        140.2610252699075,
                                        -19.254866935846668
                                    ],
                                    [
                                        138.62992346760768,
                                        -19.254866935846668
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
                                    139.4415,
                                    -20.0229
                                ],
                                [
                                    141.89,
                                    -17.75
                                ],
                                [
                                    144.24,
                                    -14.58
                                ],
                                [
                                    145.88,
                                    -12.13
                                ],
                                [
                                    147.8,
                                    -10.4
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
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a199",
                    "number": 3
                }
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
            "title": "Order item 420",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T14:45:00.000Z",
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
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    140.74,
                                    -6.29
                                ],
                                [
                                    139.39,
                                    -8.94
                                ],
                                [
                                    139.32,
                                    -12.31
                                ],
                                [
                                    138.53,
                                    -16.4
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T12:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668513900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                138.7422,
                                -15.9904
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
                            "endDate": "2022-11-15T14:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513900000,
                            "endTime": 1668523500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    140.25,
                                    -9.74
                                ],
                                [
                                    141.17,
                                    -3.1
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
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a165",
                    "number": 1
                },
                {
                    "asset": "a199",
                    "number": 3
                },
                {
                    "asset": "a169",
                    "number": 1
                },
                {
                    "asset": "a189",
                    "number": 5
                }
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
            "title": "Order item 423",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T15:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    143.0924,
                                    -18.0959
                                ],
                                [
                                    143.63,
                                    -15.4
                                ],
                                [
                                    144.04,
                                    -12.85
                                ],
                                [
                                    144.74,
                                    -11.01
                                ],
                                [
                                    145.71,
                                    -8.89
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
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T13:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668512700000,
                            "endTime": 1668517500000
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
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
                            "startDate": "2022-11-15T13:05:00.000Z",
                            "endDate": "2022-11-15T15:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668517500000,
                            "endTime": 1668524700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.878,
                                    -8.4283
                                ],
                                [
                                    145.34,
                                    -11.51
                                ],
                                [
                                    143.96,
                                    -14.44
                                ],
                                [
                                    142.87,
                                    -18.08
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
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a143",
                    "number": 1
                },
                {
                    "asset": "a131",
                    "number": 0
                }
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
            "title": "Order item 426",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T18:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
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
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    139.37,
                                    -10.29
                                ],
                                [
                                    140.28,
                                    -13.14
                                ],
                                [
                                    140.48,
                                    -16.7
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Flight box",
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T14:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668522900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        140.62375056422187,
                                        -16.70850414306345
                                    ],
                                    [
                                        140.62375056422187,
                                        -17.37310510227047
                                    ],
                                    [
                                        141.31888518835927,
                                        -17.37310510227047
                                    ],
                                    [
                                        141.31888518835927,
                                        -16.70850414306345
                                    ],
                                    [
                                        140.62375056422187,
                                        -16.70850414306345
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
                            "startDate": "2022-11-15T14:35:00.000Z",
                            "endDate": "2022-11-15T15:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668522900000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        139.52835424981635,
                                        -15.647092095021302
                                    ],
                                    [
                                        139.52835424981635,
                                        -18.424782358846944
                                    ],
                                    [
                                        142.43464109998968,
                                        -18.424782358846944
                                    ],
                                    [
                                        142.43464109998968,
                                        -15.647092095021302
                                    ],
                                    [
                                        139.52835424981635,
                                        -15.647092095021302
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
                            "startDate": "2022-11-15T15:55:00.000Z",
                            "endDate": "2022-11-15T18:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668527700000,
                            "endTime": 1668537300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    138.96,
                                    -6.12
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
            "activity": "air-air-recce",
            "ownAssets": [
                {
                    "asset": "a196",
                    "number": 2
                },
                {
                    "asset": "a180",
                    "number": 4
                }
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
            "title": "Order item 429",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T15:35:00.000Z",
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
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    141.17,
                                    -7.75
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
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
                                        139.48529453121287,
                                        -6.68670838172795
                                    ],
                                    [
                                        139.48529453121287,
                                        -9.654368833206382
                                    ],
                                    [
                                        142.48446239650315,
                                        -9.654368833206382
                                    ],
                                    [
                                        142.48446239650315,
                                        -6.68670838172795
                                    ],
                                    [
                                        139.48529453121287,
                                        -6.68670838172795
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
                            "startDate": "2022-11-15T13:35:00.000Z",
                            "endDate": "2022-11-15T15:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668519300000,
                            "endTime": 1668526500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    141.14,
                                    -12.87
                                ],
                                [
                                    140.77,
                                    -17.1
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
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a138",
                    "number": 5
                }
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
            "title": "Order item 432",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T14:05:00.000Z",
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
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    143.74,
                                    -13.19
                                ],
                                [
                                    140.25,
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T11:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668513300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        138.35989550429315,
                                        -15.430320935723671
                                    ],
                                    [
                                        138.35989550429315,
                                        -18.670412102312845
                                    ],
                                    [
                                        141.75072538675553,
                                        -18.670412102312845
                                    ],
                                    [
                                        141.75072538675553,
                                        -15.430320935723671
                                    ],
                                    [
                                        138.35989550429315,
                                        -15.430320935723671
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
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    144.18,
                                    -13.09
                                ],
                                [
                                    147.86,
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
            "activity": "air-area-strike",
            "ownAssets": [
                {
                    "asset": "a196",
                    "number": 4
                }
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
            "title": "Order item 435",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T13:05:00.000Z",
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
                                    145.878,
                                    -8.4283
                                ],
                                [
                                    144.87,
                                    -11.08
                                ],
                                [
                                    142.81,
                                    -12.78
                                ],
                                [
                                    141.03,
                                    -15.21
                                ],
                                [
                                    139.54,
                                    -17.35
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        136.8291830743547,
                                        -13.914660229162195
                                    ],
                                    [
                                        136.8291830743547,
                                        -20.147955750882822
                                    ],
                                    [
                                        143.3610833221875,
                                        -20.147955750882822
                                    ],
                                    [
                                        143.3610833221875,
                                        -13.914660229162195
                                    ],
                                    [
                                        136.8291830743547,
                                        -13.914660229162195
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T12:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668512700000,
                            "endTime": 1668516300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.18575269291225,
                                        -14.270476241818628
                                    ],
                                    [
                                        137.18575269291225,
                                        -19.803238085645674
                                    ],
                                    [
                                        142.9813351722934,
                                        -19.803238085645674
                                    ],
                                    [
                                        142.9813351722934,
                                        -14.270476241818628
                                    ],
                                    [
                                        137.18575269291225,
                                        -14.270476241818628
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
                            "startDate": "2022-11-15T12:45:00.000Z",
                            "endDate": "2022-11-15T13:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668516300000,
                            "endTime": 1668517500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    141.89,
                                    -15.01
                                ],
                                [
                                    142.53,
                                    -13.18
                                ],
                                [
                                    144.45,
                                    -11.07
                                ],
                                [
                                    145.66,
                                    -8.68
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
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a190",
                    "number": 5
                },
                {
                    "asset": "a196",
                    "number": 1
                },
                {
                    "asset": "a175",
                    "number": 1
                },
                {
                    "asset": "a166",
                    "number": 3
                }
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
            "title": "Order item 438",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T16:05:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    130.0699,
                                    -12.4965
                                ],
                                [
                                    146.36,
                                    -7.75
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T13:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668512700000,
                            "endTime": 1668519900000
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
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
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
                                    146.6751,
                                    -7.7565
                                ],
                                [
                                    138.77,
                                    -10.32
                                ],
                                [
                                    130.2,
                                    -12.57
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
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a108",
                    "number": 0
                }
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
            "title": "Order item 441",
            "startDate": "2022-11-15T11:05:00.000Z",
            "endDate": "2022-11-15T16:05:00.000Z",
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    137.63,
                                    -11.22
                                ],
                                [
                                    136.39,
                                    -14.94
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
                                        133.9670070136287,
                                        -12.376688326196097
                                    ],
                                    [
                                        133.9670070136287,
                                        -16.584319536847293
                                    ],
                                    [
                                        138.31627425260112,
                                        -16.584319536847293
                                    ],
                                    [
                                        138.31627425260112,
                                        -12.376688326196097
                                    ],
                                    [
                                        133.9670070136287,
                                        -12.376688326196097
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
                            "force": "F-Blue",
                            "startTime": 1668520500000,
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
                                    137.26,
                                    -12.72
                                ],
                                [
                                    138.47,
                                    -9.88
                                ],
                                [
                                    138.97,
                                    -7.75
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
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a161",
                    "number": 2
                },
                {
                    "asset": "a197",
                    "number": 0
                },
                {
                    "asset": "a165",
                    "number": 4
                },
                {
                    "asset": "a180",
                    "number": 1
                }
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
            "title": "Order item 444",
            "startDate": "2022-11-15T11:05:00.000Z",
            "endDate": "2022-11-15T17:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    138.31,
                                    -6.29
                                ],
                                [
                                    139.83,
                                    -10.29
                                ],
                                [
                                    140.63,
                                    -15.01
                                ],
                                [
                                    141.72,
                                    -19.44
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
                            "startDate": "2022-11-15T11:55:00.000Z",
                            "endDate": "2022-11-15T14:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668513300000,
                            "endTime": 1668522900000
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
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    140.79,
                                    -14.55
                                ],
                                [
                                    140.33,
                                    -9.91
                                ],
                                [
                                    139.15,
                                    -5.98
                                ],
                                [
                                    137.25,
                                    -1.77
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
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a180",
                    "number": 5
                }
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
            "title": "Order item 447",
            "startDate": "2022-11-15T11:05:00.000Z",
            "endDate": "2022-11-15T13:25:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a134",
                    "number": 0
                }
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
            "title": "Order item 450",
            "startDate": "2022-11-15T11:10:00.000Z",
            "endDate": "2022-11-15T14:10:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a166",
                    "number": 3
                },
                {
                    "asset": "a181",
                    "number": 0
                },
                {
                    "asset": "a171",
                    "number": 2
                }
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
            "title": "Order item 453",
            "startDate": "2022-11-15T11:10:00.000Z",
            "endDate": "2022-11-15T16:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    129.9751,
                                    -12.5154
                                ],
                                [
                                    136.18,
                                    -12.07
                                ],
                                [
                                    142.59,
                                    -11.41
                                ],
                                [
                                    149.29,
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
                            "startDate": "2022-11-15T12:00:00.000Z",
                            "endDate": "2022-11-15T13:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668513600000,
                            "endTime": 1668519600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        147.84786885882394,
                                        -8.750853947897342
                                    ],
                                    [
                                        147.84786885882394,
                                        -11.62008621073624
                                    ],
                                    [
                                        150.76405556680902,
                                        -11.62008621073624
                                    ],
                                    [
                                        150.76405556680902,
                                        -8.750853947897342
                                    ],
                                    [
                                        147.84786885882394,
                                        -8.750853947897342
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
                            "startDate": "2022-11-15T13:40:00.000Z",
                            "endDate": "2022-11-15T16:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668519600000,
                            "endTime": 1668531000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    144.29,
                                    -10.54
                                ],
                                [
                                    139.18,
                                    -11
                                ],
                                [
                                    134.36,
                                    -12.18
                                ],
                                [
                                    129.82,
                                    -12.07
                                ],
                                [
                                    129.9751,
                                    -12.5154
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a115",
                    "number": 0
                },
                {
                    "asset": "a133",
                    "number": 3
                }
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
            "title": "Order item 456",
            "startDate": "2022-11-15T11:10:00.000Z",
            "endDate": "2022-11-15T15:50:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    139.75,
                                    -12.28
                                ],
                                [
                                    139.03,
                                    -8.04
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
                            "startDate": "2022-11-15T12:00:00.000Z",
                            "endDate": "2022-11-15T13:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668513600000,
                            "endTime": 1668517800000
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    140.59,
                                    -17.15
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
            "activity": "maritime-point-recce",
            "ownAssets": [
                {
                    "asset": "a154",
                    "number": 2
                }
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
            "title": "Order item 459",
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
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    140.56,
                                    -7.12
                                ],
                                [
                                    139.4,
                                    -11.25
                                ],
                                [
                                    138.51,
                                    -16.1
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
                                        136.29736355596546,
                                        -13.600179810253298
                                    ],
                                    [
                                        136.29736355596546,
                                        -18.35233152727301
                                    ],
                                    [
                                        141.24585938076814,
                                        -18.35233152727301
                                    ],
                                    [
                                        141.24585938076814,
                                        -13.600179810253298
                                    ],
                                    [
                                        136.29736355596546,
                                        -13.600179810253298
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
                                        138.45350598164836,
                                        -15.71230064199024
                                    ],
                                    [
                                        138.45350598164836,
                                        -16.268113074245303
                                    ],
                                    [
                                        139.03169767542428,
                                        -16.268113074245303
                                    ],
                                    [
                                        139.03169767542428,
                                        -15.71230064199024
                                    ],
                                    [
                                        138.45350598164836,
                                        -15.71230064199024
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
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    141.38,
                                    -2.68
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
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a167",
                    "number": 2
                }
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
            "title": "Order item 462",
            "startDate": "2022-11-15T11:25:00.000Z",
            "endDate": "2022-11-15T12:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
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
                                    122.8959,
                                    -18.5925
                                ],
                                [
                                    130.71,
                                    -14.5
                                ],
                                [
                                    138.77,
                                    -11.17
                                ],
                                [
                                    147.11,
                                    -7.56
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
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a154",
                    "number": 4
                },
                {
                    "asset": "a144",
                    "number": 4
                },
                {
                    "asset": "a150",
                    "number": 0
                }
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
            "title": "Order item 465",
            "startDate": "2022-11-15T11:25:00.000Z",
            "endDate": "2022-11-15T16:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    135.6686,
                                    -14.5464
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
                            "startDate": "2022-11-15T12:15:00.000Z",
                            "endDate": "2022-11-15T12:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668514500000,
                            "endTime": 1668516900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.7799674675181,
                                        -4.544762396222771
                                    ],
                                    [
                                        145.7799674675181,
                                        -5.824988562931601
                                    ],
                                    [
                                        147.0655359063596,
                                        -5.824988562931601
                                    ],
                                    [
                                        147.0655359063596,
                                        -4.544762396222771
                                    ],
                                    [
                                        145.7799674675181,
                                        -4.544762396222771
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
                            "startDate": "2022-11-15T12:55:00.000Z",
                            "endDate": "2022-11-15T15:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668516900000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.66365680286842,
                                        -4.428569010185264
                                    ],
                                    [
                                        145.66365680286842,
                                        -5.940925201379469
                                    ],
                                    [
                                        147.18236213666114,
                                        -5.940925201379469
                                    ],
                                    [
                                        147.18236213666114,
                                        -4.428569010185264
                                    ],
                                    [
                                        145.66365680286842,
                                        -4.428569010185264
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
                            "startDate": "2022-11-15T15:55:00.000Z",
                            "endDate": "2022-11-15T16:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668527700000,
                            "endTime": 1668530700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    143.31,
                                    -7.06
                                ],
                                [
                                    141.11,
                                    -10.03
                                ],
                                [
                                    138.18,
                                    -11.72
                                ],
                                [
                                    135.55,
                                    -14.13
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
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a114",
                    "number": 2
                },
                {
                    "asset": "a153",
                    "number": 3
                },
                {
                    "asset": "a151",
                    "number": 2
                },
                {
                    "asset": "a107",
                    "number": 0
                }
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
            "title": "Order item 468",
            "startDate": "2022-11-15T11:40:00.000Z",
            "endDate": "2022-11-15T15:20:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    146.6,
                                    -14.88
                                ],
                                [
                                    146.16,
                                    -10.49
                                ],
                                [
                                    146.02,
                                    -4.81
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T12:30:00.000Z",
                            "endDate": "2022-11-15T14:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668515400000,
                            "endTime": 1668520800000
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
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route out",
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
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    146.35,
                                    -19.71
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
            "activity": "maritime-point-recce",
            "ownAssets": [
                {
                    "asset": "a107",
                    "number": 3
                },
                {
                    "asset": "a138",
                    "number": 3
                },
                {
                    "asset": "a127",
                    "number": 0
                }
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
            "title": "Order item 471",
            "startDate": "2022-11-15T11:55:00.000Z",
            "endDate": "2022-11-15T15:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    137.4298,
                                    -1.926
                                ],
                                [
                                    138.12,
                                    -9.14
                                ],
                                [
                                    138.32,
                                    -15.86
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
                            "startDate": "2022-11-15T12:45:00.000Z",
                            "endDate": "2022-11-15T12:45:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668516300000,
                            "endTime": 1668516300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        138.2557873252182,
                                        -15.521178367865545
                                    ],
                                    [
                                        138.2557873252182,
                                        -16.45852295907057
                                    ],
                                    [
                                        139.23089841527238,
                                        -16.45852295907057
                                    ],
                                    [
                                        139.23089841527238,
                                        -15.521178367865545
                                    ],
                                    [
                                        138.2557873252182,
                                        -15.521178367865545
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
                            "startDate": "2022-11-15T12:45:00.000Z",
                            "endDate": "2022-11-15T15:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668516300000,
                            "endTime": 1668526500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    137.55,
                                    -2.32
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
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a180",
                    "number": 3
                },
                {
                    "asset": "a195",
                    "number": 0
                },
                {
                    "asset": "a165",
                    "number": 4
                },
                {
                    "asset": "a178",
                    "number": 5
                }
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
            "title": "Order item 474",
            "startDate": "2022-11-15T11:55:00.000Z",
            "endDate": "2022-11-15T17:45:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T11:55:00.000Z",
                            "endDate": "2022-11-15T12:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668513300000,
                            "endTime": 1668516300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.0301,
                                    -15.4829
                                ],
                                [
                                    139.35,
                                    -13.64
                                ],
                                [
                                    140.7,
                                    -12.78
                                ],
                                [
                                    142.34,
                                    -10.63
                                ],
                                [
                                    144.26,
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T12:45:00.000Z",
                            "endDate": "2022-11-15T15:15:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668516300000,
                            "endTime": 1668525300000
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
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T17:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668525300000,
                            "endTime": 1668534300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    136.67,
                                    -15.56
                                ],
                                [
                                    137.0301,
                                    -15.4829
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a130",
                    "number": 0
                },
                {
                    "asset": "a142",
                    "number": 2
                },
                {
                    "asset": "a112",
                    "number": 1
                }
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
            "title": "Order item 477",
            "startDate": "2022-11-15T12:00:00.000Z",
            "endDate": "2022-11-15T17:50:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    130.7986,
                                    -11.9046
                                ],
                                [
                                    145.76,
                                    -7.96
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
                            "startDate": "2022-11-15T12:50:00.000Z",
                            "endDate": "2022-11-15T15:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668516600000,
                            "endTime": 1668524400000
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
                            "startDate": "2022-11-15T15:00:00.000Z",
                            "endDate": "2022-11-15T17:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668524400000,
                            "endTime": 1668534600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.878,
                                    -8.4283
                                ],
                                [
                                    142.18,
                                    -9.23
                                ],
                                [
                                    138.34,
                                    -10.17
                                ],
                                [
                                    134.78,
                                    -10.84
                                ],
                                [
                                    130.51,
                                    -12.22
                                ],
                                [
                                    130.7986,
                                    -11.9046
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a158",
                    "number": 2
                }
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
            "title": "Order item 480",
            "startDate": "2022-11-15T12:20:00.000Z",
            "endDate": "2022-11-15T16:20:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    135.17,
                                    -6.71
                                ],
                                [
                                    130.35,
                                    -10.69
                                ],
                                [
                                    124.82,
                                    -15.38
                                ],
                                [
                                    118.56,
                                    -19.79
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
                            "startDate": "2022-11-15T13:10:00.000Z",
                            "endDate": "2022-11-15T15:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668517800000,
                            "endTime": 1668527400000
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
                            "startDate": "2022-11-15T15:50:00.000Z",
                            "endDate": "2022-11-15T16:20:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668527400000,
                            "endTime": 1668529200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.0578,
                                    -19.4518
                                ],
                                [
                                    126.5,
                                    -14.38
                                ],
                                [
                                    134.05,
                                    -8.22
                                ],
                                [
                                    140.89,
                                    -2.78
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
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a161",
                    "number": 3
                },
                {
                    "asset": "a198",
                    "number": 5
                },
                {
                    "asset": "a168",
                    "number": 4
                },
                {
                    "asset": "a188",
                    "number": 2
                }
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
            "title": "Order item 483",
            "startDate": "2022-11-15T12:20:00.000Z",
            "endDate": "2022-11-15T15:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    116.4863,
                                    -21.3267
                                ],
                                [
                                    131.05,
                                    -14.5
                                ],
                                [
                                    145.92,
                                    -8.38
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
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T13:10:00.000Z",
                            "endDate": "2022-11-15T15:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668517800000,
                            "endTime": 1668525600000
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
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
                            "startDate": "2022-11-15T15:20:00.000Z",
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668525600000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.878,
                                    -8.4283
                                ],
                                [
                                    116.39,
                                    -20.93
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
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a140",
                    "number": 3
                },
                {
                    "asset": "a127",
                    "number": 5
                }
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
            "title": "Order item 486",
            "startDate": "2022-11-15T12:25:00.000Z",
            "endDate": "2022-11-15T13:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
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
                                    142.0832,
                                    -17.7937
                                ],
                                [
                                    145.5,
                                    -13.87
                                ],
                                [
                                    149.37,
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
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a148",
                    "number": 0
                },
                {
                    "asset": "a128",
                    "number": 0
                }
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
            "title": "Order item 489",
            "startDate": "2022-11-15T12:45:00.000Z",
            "endDate": "2022-11-15T13:25:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a133",
                    "number": 2
                },
                {
                    "asset": "a158",
                    "number": 4
                },
                {
                    "asset": "a145",
                    "number": 1
                },
                {
                    "asset": "a146",
                    "number": 2
                }
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
            "title": "Order item 492",
            "startDate": "2022-11-15T13:00:00.000Z",
            "endDate": "2022-11-15T13:30:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a192",
                    "number": 4
                }
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
            "title": "Order item 495",
            "startDate": "2022-11-15T13:00:00.000Z",
            "endDate": "2022-11-15T13:50:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a185",
                    "number": 0
                },
                {
                    "asset": "a191",
                    "number": 3
                },
                {
                    "asset": "a169",
                    "number": 1
                }
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
            "title": "Order item 498",
            "startDate": "2022-11-15T13:00:00.000Z",
            "endDate": "2022-11-15T19:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    144.23,
                                    -15.44
                                ],
                                [
                                    139.31,
                                    -20.02
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
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Target Location",
                            "startDate": "2022-11-15T13:50:00.000Z",
                            "endDate": "2022-11-15T17:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668520200000,
                            "endTime": 1668531600000
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
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route out",
                            "startDate": "2022-11-15T17:00:00.000Z",
                            "endDate": "2022-11-15T19:50:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668531600000,
                            "endTime": 1668541800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.4415,
                                    -20.0229
                                ],
                                [
                                    148.63,
                                    -10.88
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
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a197",
                    "number": 0
                },
                {
                    "asset": "a198",
                    "number": 3
                },
                {
                    "asset": "a171",
                    "number": 0
                },
                {
                    "asset": "a194",
                    "number": 3
                }
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
            "title": "Order item 501",
            "startDate": "2022-11-15T13:00:00.000Z",
            "endDate": "2022-11-15T19:00:00.000Z",
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
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    141.76,
                                    -13.57
                                ],
                                [
                                    133.21,
                                    -15.64
                                ],
                                [
                                    125.95,
                                    -18.42
                                ],
                                [
                                    117.97,
                                    -20.92
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
                            "startDate": "2022-11-15T13:50:00.000Z",
                            "endDate": "2022-11-15T15:10:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668520200000,
                            "endTime": 1668525000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        114.14978927303336,
                                        -17.558621888449313
                                    ],
                                    [
                                        114.14978927303336,
                                        -24.408756472820944
                                    ],
                                    [
                                        121.50610512337563,
                                        -24.408756472820944
                                    ],
                                    [
                                        121.50610512337563,
                                        -17.558621888449313
                                    ],
                                    [
                                        114.14978927303336,
                                        -17.558621888449313
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
                            "startDate": "2022-11-15T15:10:00.000Z",
                            "endDate": "2022-11-15T17:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668525000000,
                            "endTime": 1668531600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        114.88816353966548,
                                        -18.28803366556619
                                    ],
                                    [
                                        114.88816353966548,
                                        -23.7089568475202
                                    ],
                                    [
                                        120.70441667427394,
                                        -23.7089568475202
                                    ],
                                    [
                                        120.70441667427394,
                                        -18.28803366556619
                                    ],
                                    [
                                        114.88816353966548,
                                        -18.28803366556619
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
                            "startDate": "2022-11-15T17:00:00.000Z",
                            "endDate": "2022-11-15T19:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668531600000,
                            "endTime": 1668538800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    133.41,
                                    -15.7
                                ],
                                [
                                    149.47,
                                    -10.99
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
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a194",
                    "number": 5
                },
                {
                    "asset": "a189",
                    "number": 1
                },
                {
                    "asset": "a197",
                    "number": 3
                }
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
            "title": "Order item 504",
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
                                    130.7986,
                                    -11.9046
                                ],
                                [
                                    146.81,
                                    -4.96
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
                            "startDate": "2022-11-15T13:50:00.000Z",
                            "endDate": "2022-11-15T14:10:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668520200000,
                            "endTime": 1668521400000
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
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    138.8,
                                    -8.46
                                ],
                                [
                                    130.48,
                                    -11.46
                                ],
                                [
                                    130.7986,
                                    -11.9046
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a117",
                    "number": 2
                },
                {
                    "asset": "a159",
                    "number": 1
                },
                {
                    "asset": "a150",
                    "number": 5
                },
                {
                    "asset": "a142",
                    "number": 0
                }
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
            "title": "Order item 507",
            "startDate": "2022-11-15T13:05:00.000Z",
            "endDate": "2022-11-15T15:25:00.000Z",
            "location": [],
            "activity": "maritime-cyber",
            "ownAssets": [
                {
                    "asset": "a117",
                    "number": 5
                },
                {
                    "asset": "a151",
                    "number": 1
                },
                {
                    "asset": "a142",
                    "number": 2
                },
                {
                    "asset": "a150",
                    "number": 5
                }
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
            "title": "Order item 510",
            "startDate": "2022-11-15T13:25:00.000Z",
            "endDate": "2022-11-15T16:05:00.000Z",
            "location": [],
            "activity": "maritime-cyber",
            "ownAssets": [
                {
                    "asset": "a150",
                    "number": 3
                }
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
            "title": "Order item 513",
            "startDate": "2022-11-15T13:40:00.000Z",
            "endDate": "2022-11-15T16:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    147.171,
                                    -8.2398
                                ],
                                [
                                    116.74,
                                    -21.37
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
                            "startDate": "2022-11-15T14:30:00.000Z",
                            "endDate": "2022-11-15T16:00:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668522600000,
                            "endTime": 1668528000000
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
                            "startDate": "2022-11-15T16:00:00.000Z",
                            "endDate": "2022-11-15T16:40:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668528000000,
                            "endTime": 1668530400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    146.73,
                                    -8.48
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
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a197",
                    "number": 1
                }
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
            "title": "Order item 516",
            "startDate": "2022-11-15T13:40:00.000Z",
            "endDate": "2022-11-15T18:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    146.51,
                                    -15.56
                                ],
                                [
                                    150.43,
                                    -11.06
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
                            "startDate": "2022-11-15T14:30:00.000Z",
                            "endDate": "2022-11-15T16:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668522600000,
                            "endTime": 1668530400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        148.7308602126388,
                                        -9.3103639467337
                                    ],
                                    [
                                        148.7308602126388,
                                        -12.118320733305817
                                    ],
                                    [
                                        151.5895995670792,
                                        -12.118320733305817
                                    ],
                                    [
                                        151.5895995670792,
                                        -9.3103639467337
                                    ],
                                    [
                                        148.7308602126388,
                                        -9.3103639467337
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
                            "startDate": "2022-11-15T16:40:00.000Z",
                            "endDate": "2022-11-15T18:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668530400000,
                            "endTime": 1668537600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        149.07556638364179,
                                        -9.652971955647123
                                    ],
                                    [
                                        149.07556638364179,
                                        -11.778495734064139
                                    ],
                                    [
                                        151.2392300397927,
                                        -11.778495734064139
                                    ],
                                    [
                                        151.2392300397927,
                                        -9.652971955647123
                                    ],
                                    [
                                        149.07556638364179,
                                        -9.652971955647123
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
                            "startDate": "2022-11-15T18:40:00.000Z",
                            "endDate": "2022-11-15T18:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668537600000,
                            "endTime": 1668538200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    148.55,
                                    -13.2
                                ],
                                [
                                    146.78,
                                    -15.86
                                ],
                                [
                                    144.29,
                                    -18.24
                                ],
                                [
                                    143.09,
                                    -20.33
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
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a136",
                    "number": 0
                },
                {
                    "asset": "a142",
                    "number": 0
                },
                {
                    "asset": "a106",
                    "number": 0
                }
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
            "title": "Order item 519",
            "startDate": "2022-11-15T13:45:00.000Z",
            "endDate": "2022-11-15T20:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    130.7986,
                                    -11.9046
                                ],
                                [
                                    132.69,
                                    -10.68
                                ],
                                [
                                    135.5,
                                    -9.55
                                ],
                                [
                                    137.59,
                                    -9.13
                                ],
                                [
                                    138.96,
                                    -8.43
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
                            "startDate": "2022-11-15T14:35:00.000Z",
                            "endDate": "2022-11-15T17:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668522900000,
                            "endTime": 1668531900000
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    134.89,
                                    -9.8
                                ],
                                [
                                    130.89,
                                    -12.13
                                ],
                                [
                                    130.7986,
                                    -11.9046
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a146",
                    "number": 0
                },
                {
                    "asset": "a144",
                    "number": 2
                },
                {
                    "asset": "a158",
                    "number": 0
                }
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
            "title": "Order item 522",
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
                                    149.3998,
                                    -10.1238
                                ],
                                [
                                    133.41,
                                    -15.97
                                ],
                                [
                                    116.74,
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
                            "startDate": "2022-11-15T14:55:00.000Z",
                            "endDate": "2022-11-15T15:35:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668524100000,
                            "endTime": 1668526500000
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
                                    116.4863,
                                    -21.3267
                                ],
                                [
                                    149.8,
                                    -9.88
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
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a180",
                    "number": 0
                },
                {
                    "asset": "a173",
                    "number": 0
                }
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
            "title": "Order item 525",
            "startDate": "2022-11-15T14:05:00.000Z",
            "endDate": "2022-11-15T17:05:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    134.6604,
                                    -21.138
                                ],
                                [
                                    140.49,
                                    -7.99
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
                            "startDate": "2022-11-15T14:55:00.000Z",
                            "endDate": "2022-11-15T15:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668524100000,
                            "endTime": 1668524700000
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
                            "startDate": "2022-11-15T15:05:00.000Z",
                            "endDate": "2022-11-15T17:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668524700000,
                            "endTime": 1668531900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    137.37,
                                    -14.99
                                ],
                                [
                                    135.09,
                                    -21.5
                                ],
                                [
                                    134.6604,
                                    -21.138
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a148",
                    "number": 2
                },
                {
                    "asset": "a130",
                    "number": 5
                }
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
            "title": "Order item 528",
            "startDate": "2022-11-15T14:10:00.000Z",
            "endDate": "2022-11-15T15:40:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a139",
                    "number": 3
                }
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
            "title": "Order item 531",
            "startDate": "2022-11-15T14:25:00.000Z",
            "endDate": "2022-11-15T19:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    128.1529,
                                    -17.0936
                                ],
                                [
                                    131.49,
                                    -12.31
                                ],
                                [
                                    134.87,
                                    -6.49
                                ],
                                [
                                    137.54,
                                    -1.39
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
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T17:35:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668525300000,
                            "endTime": 1668533700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        133.8508710675139,
                                        2.268768818258561
                                    ],
                                    [
                                        133.8508710675139,
                                        -5.230386756780656
                                    ],
                                    [
                                        141.36868358556347,
                                        -5.230386756780656
                                    ],
                                    [
                                        141.36868358556347,
                                        2.268768818258561
                                    ],
                                    [
                                        133.8508710675139,
                                        2.268768818258561
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
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    127.8,
                                    -17.16
                                ],
                                [
                                    128.1529,
                                    -17.0936
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-area-strike",
            "ownAssets": [
                {
                    "asset": "a160",
                    "number": 4
                },
                {
                    "asset": "a126",
                    "number": 1
                }
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
            "title": "Order item 534",
            "startDate": "2022-11-15T14:40:00.000Z",
            "endDate": "2022-11-15T16:30:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a198",
                    "number": 5
                }
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
            "title": "Order item 537",
            "startDate": "2022-11-15T14:40:00.000Z",
            "endDate": "2022-11-15T15:50:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    147.16,
                                    -10.37
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
                            "startDate": "2022-11-15T15:30:00.000Z",
                            "endDate": "2022-11-15T15:40:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668526200000,
                            "endTime": 1668526800000
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
                            "startDate": "2022-11-15T15:40:00.000Z",
                            "endDate": "2022-11-15T15:50:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668526800000,
                            "endTime": 1668527400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.4089,
                                    -10.3741
                                ],
                                [
                                    143.58,
                                    -12.59
                                ],
                                [
                                    139.86,
                                    -15.73
                                ],
                                [
                                    135.41,
                                    -18.58
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
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a129",
                    "number": 5
                },
                {
                    "asset": "a132",
                    "number": 1
                }
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
            "title": "Order item 540",
            "startDate": "2022-11-15T14:40:00.000Z",
            "endDate": "2022-11-15T20:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    144.87,
                                    -11.72
                                ],
                                [
                                    147.03,
                                    -5.9
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
                            "startDate": "2022-11-15T15:30:00.000Z",
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668526200000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.69290538087964,
                                        -5.214032140413696
                                    ],
                                    [
                                        145.69290538087964,
                                        -7.233226963000817
                                    ],
                                    [
                                        147.7243991190991,
                                        -7.233226963000817
                                    ],
                                    [
                                        147.7243991190991,
                                        -5.214032140413696
                                    ],
                                    [
                                        145.69290538087964,
                                        -5.214032140413696
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
                            "startDate": "2022-11-15T15:30:00.000Z",
                            "endDate": "2022-11-15T17:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668526200000,
                            "endTime": 1668532800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.71066296012012,
                                        -5.231777969579032
                                    ],
                                    [
                                        145.71066296012012,
                                        -7.215548656425887
                                    ],
                                    [
                                        147.70650571526627,
                                        -7.215548656425887
                                    ],
                                    [
                                        147.70650571526627,
                                        -5.231777969579032
                                    ],
                                    [
                                        145.71066296012012,
                                        -5.231777969579032
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
                            "startDate": "2022-11-15T17:20:00.000Z",
                            "endDate": "2022-11-15T20:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668532800000,
                            "endTime": 1668542400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    145.44,
                                    -9.87
                                ],
                                [
                                    143.35,
                                    -14.35
                                ],
                                [
                                    142.55,
                                    -17.55
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
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a131",
                    "number": 5
                },
                {
                    "asset": "a126",
                    "number": 0
                }
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
            "title": "Order item 543",
            "startDate": "2022-11-15T14:55:00.000Z",
            "endDate": "2022-11-15T20:15:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    139.9287,
                                    -3.3935
                                ],
                                [
                                    132.88,
                                    -8.93
                                ],
                                [
                                    126.37,
                                    -14.93
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
                            "startDate": "2022-11-15T15:45:00.000Z",
                            "endDate": "2022-11-15T17:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668527100000,
                            "endTime": 1668534900000
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
                                    126.3983,
                                    -14.6078
                                ],
                                [
                                    133.02,
                                    -8.66
                                ],
                                [
                                    139.97,
                                    -3.39
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
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a165",
                    "number": 5
                },
                {
                    "asset": "a194",
                    "number": 1
                },
                {
                    "asset": "a195",
                    "number": 4
                },
                {
                    "asset": "a169",
                    "number": 5
                }
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
            "title": "Order item 546",
            "startDate": "2022-11-15T14:55:00.000Z",
            "endDate": "2022-11-15T18:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    130.8443,
                                    -12.0462
                                ],
                                [
                                    134.93,
                                    -10.87
                                ],
                                [
                                    139.03,
                                    -8.69
                                ],
                                [
                                    142.4,
                                    -7.23
                                ],
                                [
                                    147.06,
                                    -6.49
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
                            "startDate": "2022-11-15T15:45:00.000Z",
                            "endDate": "2022-11-15T16:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668527100000,
                            "endTime": 1668531300000
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
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    143.19,
                                    -8.14
                                ],
                                [
                                    138.61,
                                    -9.13
                                ],
                                [
                                    134.31,
                                    -10.84
                                ],
                                [
                                    131.29,
                                    -12.26
                                ],
                                [
                                    130.8443,
                                    -12.0462
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a113",
                    "number": 2
                },
                {
                    "asset": "a148",
                    "number": 1
                },
                {
                    "asset": "a143",
                    "number": 1
                },
                {
                    "asset": "a152",
                    "number": 0
                }
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
            "title": "Order item 549",
            "startDate": "2022-11-15T14:55:00.000Z",
            "endDate": "2022-11-15T21:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    139.127,
                                    -8.1642
                                ],
                                [
                                    143.04,
                                    -14.18
                                ],
                                [
                                    146.26,
                                    -19.9
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Flight Box",
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
                                        144.25575783583716,
                                        -18.090550292792436
                                    ],
                                    [
                                        144.25575783583716,
                                        -22.418220379499804
                                    ],
                                    [
                                        148.87345953493286,
                                        -22.418220379499804
                                    ],
                                    [
                                        148.87345953493286,
                                        -18.090550292792436
                                    ],
                                    [
                                        144.25575783583716,
                                        -18.090550292792436
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
                                        143.4012993632688,
                                        -17.25104678000487
                                    ],
                                    [
                                        143.4012993632688,
                                        -23.23016406960142
                                    ],
                                    [
                                        149.78659024868858,
                                        -23.23016406960142
                                    ],
                                    [
                                        149.78659024868858,
                                        -17.25104678000487
                                    ],
                                    [
                                        143.4012993632688,
                                        -17.25104678000487
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
                                    146.5324,
                                    -20.2695
                                ],
                                [
                                    144.31,
                                    -16.07
                                ],
                                [
                                    141.31,
                                    -12.65
                                ],
                                [
                                    139.59,
                                    -7.95
                                ],
                                [
                                    139.127,
                                    -8.1642
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-recce",
            "ownAssets": [
                {
                    "asset": "a195",
                    "number": 3
                },
                {
                    "asset": "a174",
                    "number": 3
                }
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
            "title": "Order item 552",
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
                                    146.6751,
                                    -7.7565
                                ],
                                [
                                    141.81,
                                    -19.68
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
                                        138.77957145307417,
                                        -16.089852851011702
                                    ],
                                    [
                                        138.77957145307417,
                                        -22.517663015906432
                                    ],
                                    [
                                        145.60544096126745,
                                        -22.517663015906432
                                    ],
                                    [
                                        145.60544096126745,
                                        -16.089852851011702
                                    ],
                                    [
                                        138.77957145307417,
                                        -16.089852851011702
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
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    142.81,
                                    -16.71
                                ],
                                [
                                    144.28,
                                    -13.3
                                ],
                                [
                                    145.04,
                                    -10.61
                                ],
                                [
                                    147.08,
                                    -7.64
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
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a166",
                    "number": 0
                },
                {
                    "asset": "a177",
                    "number": 1
                }
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
            "title": "Order item 555",
            "startDate": "2022-11-15T14:55:00.000Z",
            "endDate": "2022-11-15T17:05:00.000Z",
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
                                    142.0832,
                                    -17.7937
                                ],
                                [
                                    145.26,
                                    -14.31
                                ],
                                [
                                    147.86,
                                    -9.39
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
                            "startDate": "2022-11-15T15:45:00.000Z",
                            "endDate": "2022-11-15T15:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668527100000,
                            "endTime": 1668527100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.7929204100282,
                                        -8.176306432434874
                                    ],
                                    [
                                        145.7929204100282,
                                        -11.574908247631047
                                    ],
                                    [
                                        149.24431045530105,
                                        -11.574908247631047
                                    ],
                                    [
                                        149.24431045530105,
                                        -8.176306432434874
                                    ],
                                    [
                                        145.7929204100282,
                                        -8.176306432434874
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
                            "startDate": "2022-11-15T15:45:00.000Z",
                            "endDate": "2022-11-15T17:05:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668527100000,
                            "endTime": 1668531900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    144.71,
                                    -13.75
                                ],
                                [
                                    142.35,
                                    -18.2
                                ],
                                [
                                    142.0832,
                                    -17.7937
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a153",
                    "number": 1
                }
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
            "title": "Order item 558",
            "startDate": "2022-11-15T15:05:00.000Z",
            "endDate": "2022-11-15T20:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
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
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    141.35,
                                    -6.8
                                ],
                                [
                                    141.73,
                                    -10.83
                                ],
                                [
                                    142.4,
                                    -14.57
                                ],
                                [
                                    142.36,
                                    -18.03
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Target Area",
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
                                        141.12795399067812,
                                        -16.946284890225392
                                    ],
                                    [
                                        141.12795399067812,
                                        -19.09575289912871
                                    ],
                                    [
                                        143.38884614542405,
                                        -19.09575289912871
                                    ],
                                    [
                                        143.38884614542405,
                                        -16.946284890225392
                                    ],
                                    [
                                        141.12795399067812,
                                        -16.946284890225392
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
                            "endDate": "2022-11-15T20:05:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668538500000,
                            "endTime": 1668542700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    141.45,
                                    -13.09
                                ],
                                [
                                    141.83,
                                    -7.97
                                ],
                                [
                                    140.5,
                                    -2.57
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
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a170",
                    "number": 2
                }
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
            "title": "Order item 561",
            "startDate": "2022-11-15T15:05:00.000Z",
            "endDate": "2022-11-15T18:15:00.000Z",
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
                                    145.878,
                                    -8.4283
                                ],
                                [
                                    141.94,
                                    -18.11
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Target Area",
                            "startDate": "2022-11-15T15:55:00.000Z",
                            "endDate": "2022-11-15T17:25:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668527700000,
                            "endTime": 1668533100000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                142.2515,
                                -18.0243
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
                            "startDate": "2022-11-15T17:25:00.000Z",
                            "endDate": "2022-11-15T18:15:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668533100000,
                            "endTime": 1668536100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    144.52,
                                    -13.48
                                ],
                                [
                                    146.13,
                                    -8.62
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
            "activity": "maritime-point-recce",
            "ownAssets": [
                {
                    "asset": "a165",
                    "number": 4
                },
                {
                    "asset": "a198",
                    "number": 5
                },
                {
                    "asset": "a170",
                    "number": 1
                },
                {
                    "asset": "a180",
                    "number": 4
                }
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
            "title": "Order item 564",
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
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    123.89,
                                    -16.86
                                ],
                                [
                                    132.26,
                                    -12.57
                                ],
                                [
                                    138.92,
                                    -8
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
                                        138.02175286478737,
                                        -6.774959623964688
                                    ],
                                    [
                                        138.02175286478737,
                                        -9.347547422782375
                                    ],
                                    [
                                        140.62071367307297,
                                        -9.347547422782375
                                    ],
                                    [
                                        140.62071367307297,
                                        -6.774959623964688
                                    ],
                                    [
                                        138.02175286478737,
                                        -6.774959623964688
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    116.85,
                                    -21.37
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
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a132",
                    "number": 4
                }
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
            "title": "Order item 567",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T17:05:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a179",
                    "number": 3
                }
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
            "title": "Order item 570",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T20:05:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
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
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    132.98,
                                    -12.01
                                ],
                                [
                                    140.37,
                                    -9.11
                                ],
                                [
                                    147.04,
                                    -5.94
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T16:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668528300000,
                            "endTime": 1668531300000
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
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    126.4,
                                    -14.75
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
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a159",
                    "number": 0
                },
                {
                    "asset": "a127",
                    "number": 2
                }
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
            "title": "Order item 573",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T17:45:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a165",
                    "number": 5
                },
                {
                    "asset": "a174",
                    "number": 2
                }
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
            "title": "Order item 576",
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
                                    146.6751,
                                    -7.7565
                                ],
                                [
                                    138.58,
                                    -10.35
                                ],
                                [
                                    129.93,
                                    -12.52
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
                                        128.40942638237377,
                                        -10.860661618696794
                                    ],
                                    [
                                        128.40942638237377,
                                        -14.12204392707712
                                    ],
                                    [
                                        131.7514572253829,
                                        -14.12204392707712
                                    ],
                                    [
                                        131.7514572253829,
                                        -10.860661618696794
                                    ],
                                    [
                                        128.40942638237377,
                                        -10.860661618696794
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
                                    130.0699,
                                    -12.4965
                                ],
                                [
                                    146.82,
                                    -7.42
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
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a189",
                    "number": 2
                },
                {
                    "asset": "a193",
                    "number": 4
                },
                {
                    "asset": "a169",
                    "number": 4
                },
                {
                    "asset": "a195",
                    "number": 0
                }
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
            "title": "Order item 579",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T22:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
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
                                    139.127,
                                    -8.1642
                                ],
                                [
                                    139.54,
                                    -11.33
                                ],
                                [
                                    138.82,
                                    -13.65
                                ],
                                [
                                    139.38,
                                    -16.68
                                ],
                                [
                                    139.23,
                                    -20.43
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
                    "uniqid": "aa9a",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Flight box",
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
                                        136.3862031995963,
                                        -17.075716336112514
                                    ],
                                    [
                                        136.3862031995963,
                                        -22.915690662723243
                                    ],
                                    [
                                        142.61247585257283,
                                        -22.915690662723243
                                    ],
                                    [
                                        142.61247585257283,
                                        -17.075716336112514
                                    ],
                                    [
                                        136.3862031995963,
                                        -17.075716336112514
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
                                        139.00119724076225,
                                        -19.60758382924912
                                    ],
                                    [
                                        139.00119724076225,
                                        -20.43712190734941
                                    ],
                                    [
                                        139.8841320371749,
                                        -20.43712190734941
                                    ],
                                    [
                                        139.8841320371749,
                                        -19.60758382924912
                                    ],
                                    [
                                        139.00119724076225,
                                        -19.60758382924912
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
                                    139.4415,
                                    -20.0229
                                ],
                                [
                                    139.23,
                                    -16.18
                                ],
                                [
                                    139.05,
                                    -12.31
                                ],
                                [
                                    139.16,
                                    -8.15
                                ],
                                [
                                    139.127,
                                    -8.1642
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-air-recce",
            "ownAssets": [
                {
                    "asset": "a195",
                    "number": 0
                },
                {
                    "asset": "a193",
                    "number": 1
                },
                {
                    "asset": "a161",
                    "number": 5
                },
                {
                    "asset": "a185",
                    "number": 4
                }
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
            "title": "Order item 582",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T19:05:00.000Z",
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
                                    130.8443,
                                    -12.0462
                                ],
                                [
                                    134.14,
                                    -10.85
                                ],
                                [
                                    136.69,
                                    -9.4
                                ],
                                [
                                    139.53,
                                    -7.67
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
                            "endDate": "2022-11-15T17:55:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668528300000,
                            "endTime": 1668534900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        138.12805744634412,
                                        -6.881105004865757
                                    ],
                                    [
                                        138.12805744634412,
                                        -9.242048048891336
                                    ],
                                    [
                                        140.51310449800775,
                                        -9.242048048891336
                                    ],
                                    [
                                        140.51310449800775,
                                        -6.881105004865757
                                    ],
                                    [
                                        138.12805744634412,
                                        -6.881105004865757
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
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    130.99,
                                    -11.71
                                ],
                                [
                                    130.8443,
                                    -12.0462
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a136",
                    "number": 1
                },
                {
                    "asset": "a125",
                    "number": 5
                }
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
            "title": "Order item 585",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T18:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
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
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    135.84,
                                    -14.58
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T17:55:00.000Z",
                            "force": "F-Blue",
                            "startTime": 1668528300000,
                            "endTime": 1668534900000
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
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    137.76,
                                    -12.44
                                ],
                                [
                                    138.38,
                                    -11.42
                                ],
                                [
                                    139.29,
                                    -10.12
                                ],
                                [
                                    140.48,
                                    -8.53
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
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a194",
                    "number": 5
                },
                {
                    "asset": "a179",
                    "number": 4
                }
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
            "title": "Order item 588",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T19:25:00.000Z",
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
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    141.78,
                                    -15.14
                                ],
                                [
                                    141.46,
                                    -11.12
                                ],
                                [
                                    141.43,
                                    -7.81
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
                            "startDate": "2022-11-15T16:05:00.000Z",
                            "endDate": "2022-11-15T16:45:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668528300000,
                            "endTime": 1668530700000
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
                            "startDate": "2022-11-15T16:45:00.000Z",
                            "endDate": "2022-11-15T19:25:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668530700000,
                            "endTime": 1668540300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    141.03,
                                    -11.43
                                ],
                                [
                                    142.18,
                                    -14.6
                                ],
                                [
                                    142.62,
                                    -18.48
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
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a140",
                    "number": 1
                }
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
            "title": "Order item 591",
            "startDate": "2022-11-15T15:20:00.000Z",
            "endDate": "2022-11-15T16:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
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
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    127.07,
                                    -12.01
                                ],
                                [
                                    116.33,
                                    -20.77
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
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a200",
                    "number": 0
                },
                {
                    "asset": "a175",
                    "number": 4
                }
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
            "title": "Order item 594",
            "startDate": "2022-11-15T15:20:00.000Z",
            "endDate": "2022-11-15T16:50:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a155",
                    "number": 5
                }
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
            "title": "Order item 597",
            "startDate": "2022-11-15T15:30:00.000Z",
            "endDate": "2022-11-15T20:20:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
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
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    140.24,
                                    -13.58
                                ],
                                [
                                    139.46,
                                    -7.72
                                ],
                                [
                                    136.97,
                                    -1.58
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
                                        133.47856853859648,
                                        2.027339454964231
                                    ],
                                    [
                                        133.47856853859648,
                                        -5.870147844473044
                                    ],
                                    [
                                        141.39940306203533,
                                        -5.870147844473044
                                    ],
                                    [
                                        141.39940306203533,
                                        2.027339454964231
                                    ],
                                    [
                                        133.47856853859648,
                                        2.027339454964231
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
                            "startDate": "2022-11-15T19:20:00.000Z",
                            "endDate": "2022-11-15T20:00:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668540000000,
                            "endTime": 1668542400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        136.6602056007426,
                                        -1.1563886631020666
                                    ],
                                    [
                                        136.6602056007426,
                                        -2.6952638060375356
                                    ],
                                    [
                                        138.20008982239614,
                                        -2.6952638060375356
                                    ],
                                    [
                                        138.20008982239614,
                                        -1.1563886631020666
                                    ],
                                    [
                                        136.6602056007426,
                                        -1.1563886631020666
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
                            "startDate": "2022-11-15T20:00:00.000Z",
                            "endDate": "2022-11-15T20:20:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668542400000,
                            "endTime": 1668543600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.4298,
                                    -1.926
                                ],
                                [
                                    139.46,
                                    -10.24
                                ],
                                [
                                    141.88,
                                    -19.16
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
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a126",
                    "number": 4
                },
                {
                    "asset": "a129",
                    "number": 4
                }
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
            "title": "Order item 600",
            "startDate": "2022-11-15T15:40:00.000Z",
            "endDate": "2022-11-15T16:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T15:40:00.000Z",
                            "endDate": "2022-11-15T16:30:00.000Z",
                            "force": "F-Red",
                            "startTime": 1668526800000,
                            "endTime": 1668529800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    123.6516,
                                    -16.579
                                ],
                                [
                                    129.96,
                                    -14.81
                                ],
                                [
                                    137.2,
                                    -14.11
                                ],
                                [
                                    143.72,
                                    -12.12
                                ],
                                [
                                    150.53,
                                    -10.86
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
            "activity": "land-transit",
            "ownAssets": [
                {
                    "asset": "a126",
                    "number": 4
                },
                {
                    "asset": "a118",
                    "number": 5
                }
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
            "title": "Order item 603",
            "startDate": "2022-11-15T16:00:00.000Z",
            "endDate": "2022-11-15T16:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
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
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    142.96,
                                    -12.14
                                ],
                                [
                                    141.98,
                                    -17.95
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
            "activity": "land-transit",
            "ownAssets": [
                {
                    "asset": "a198",
                    "number": 3
                },
                {
                    "asset": "a189",
                    "number": 2
                },
                {
                    "asset": "a191",
                    "number": 1
                }
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