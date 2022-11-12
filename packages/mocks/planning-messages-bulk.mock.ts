import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'

export const planningMessagesBulk: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> = [
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.28,
                                    46.1877
                                ],
                                [
                                    46.62,
                                    32.24
                                ],
                                [
                                    29.33,
                                    17.66
                                ],
                                [
                                    29.0435,
                                    17.988
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
                            "force": "f-blue",
                            "startTime": 1668473700000,
                            "endTime": 1668480900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        28.367387679692264,
                                        18.627525248611477
                                    ],
                                    [
                                        28.367387679692264,
                                        17.3461482813807
                                    ],
                                    [
                                        29.714720463770398,
                                        17.3461482813807
                                    ],
                                    [
                                        29.714720463770398,
                                        18.627525248611477
                                    ],
                                    [
                                        28.367387679692264,
                                        18.627525248611477
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
                            "force": "f-blue",
                            "startTime": 1668480900000,
                            "endTime": 1668486900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    29.0435,
                                    17.988
                                ],
                                [
                                    40.53,
                                    27.01
                                ],
                                [
                                    52.25,
                                    37.28
                                ],
                                [
                                    64.26,
                                    45.83
                                ],
                                [
                                    64.28,
                                    46.1877
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1051",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_6",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T21:06:20.164Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-9",
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
                            "force": "f-red",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.8406,
                                    10.308
                                ],
                                [
                                    65.77,
                                    19.95
                                ],
                                [
                                    54.6,
                                    30.49
                                ],
                                [
                                    44.72,
                                    40.32
                                ],
                                [
                                    34.12,
                                    49.43
                                ],
                                [
                                    34.3353,
                                    49.9355
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a1143",
                    "number": 4
                },
                {
                    "asset": "a1196",
                    "number": 1
                },
                {
                    "asset": "a1178",
                    "number": 2
                },
                {
                    "asset": "a1189",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_9",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.28,
                                    46.1877
                                ],
                                [
                                    54.16,
                                    35.96
                                ],
                                [
                                    43.14,
                                    24.82
                                ],
                                [
                                    32.39,
                                    14.96
                                ],
                                [
                                    32.8935,
                                    14.5164
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
                            "force": "f-blue",
                            "startTime": 1668473700000,
                            "endTime": 1668480900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.63737930410726,
                                        14.76392581681878
                                    ],
                                    [
                                        32.63737930410726,
                                        14.268596989337718
                                    ],
                                    [
                                        33.14904802947544,
                                        14.268596989337718
                                    ],
                                    [
                                        33.14904802947544,
                                        14.76392581681878
                                    ],
                                    [
                                        32.63737930410726,
                                        14.76392581681878
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
                            "force": "f-blue",
                            "startTime": 1668480900000,
                            "endTime": 1668482100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.8935,
                                    14.5164
                                ],
                                [
                                    48.82,
                                    30.21
                                ],
                                [
                                    64.13,
                                    46.28
                                ],
                                [
                                    64.28,
                                    46.1877
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-strike",
            "ownAssets": [
                {
                    "asset": "a1089",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_12",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.709,
                                    32.8352
                                ],
                                [
                                    37.62,
                                    27.01
                                ],
                                [
                                    30.83,
                                    20.49
                                ],
                                [
                                    30.6244,
                                    20.611
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
                            "force": "f-blue",
                            "startTime": 1668473700000,
                            "endTime": 1668481500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        26.584330939556477,
                                        24.248322671982233
                                    ],
                                    [
                                        26.584330939556477,
                                        16.884255644744094
                                    ],
                                    [
                                        34.47367778042762,
                                        16.884255644744094
                                    ],
                                    [
                                        34.47367778042762,
                                        24.248322671982233
                                    ],
                                    [
                                        26.584330939556477,
                                        24.248322671982233
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
                            "force": "f-blue",
                            "startTime": 1668481500000,
                            "endTime": 1668490500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.6244,
                                    20.611
                                ],
                                [
                                    35.8,
                                    24.98
                                ],
                                [
                                    40.01,
                                    28.38
                                ],
                                [
                                    44.51,
                                    33.07
                                ],
                                [
                                    44.709,
                                    32.8352
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a1090",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_15",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.4422,
                                    36.9091
                                ],
                                [
                                    42.8,
                                    25.27
                                ],
                                [
                                    23.5,
                                    13.97
                                ],
                                [
                                    23.7553,
                                    13.721
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
                            "force": "f-blue",
                            "startTime": 1668473700000,
                            "endTime": 1668474300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.705907345377852,
                                        15.685667352689917
                                    ],
                                    [
                                        21.705907345377852,
                                        11.739724421190198
                                    ],
                                    [
                                        25.770512396434057,
                                        11.739724421190198
                                    ],
                                    [
                                        25.770512396434057,
                                        15.685667352689917
                                    ],
                                    [
                                        21.705907345377852,
                                        15.685667352689917
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
                            "force": "f-blue",
                            "startTime": 1668474300000,
                            "endTime": 1668482700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.7553,
                                    13.721
                                ],
                                [
                                    42.77,
                                    25.29
                                ],
                                [
                                    61.13,
                                    37.22
                                ],
                                [
                                    61.4422,
                                    36.9091
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a1048",
                    "number": 3
                },
                {
                    "asset": "a1057",
                    "number": 5
                },
                {
                    "asset": "a1093",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_18",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "Sub-Surface",
                "roleId": "blue-sub",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.3127,
                                    33.5107
                                ],
                                [
                                    42.32,
                                    26.67
                                ],
                                [
                                    36.38,
                                    19.88
                                ],
                                [
                                    30.73,
                                    13.38
                                ],
                                [
                                    30.995,
                                    13.1216
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
                            "force": "f-blue",
                            "startTime": 1668473700000,
                            "endTime": 1668485100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.14446233788403,
                                        13.945674982621519
                                    ],
                                    [
                                        30.14446233788403,
                                        12.294752251695162
                                    ],
                                    [
                                        31.83984380136141,
                                        12.294752251695162
                                    ],
                                    [
                                        31.83984380136141,
                                        13.945674982621519
                                    ],
                                    [
                                        30.14446233788403,
                                        13.945674982621519
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
                            "force": "f-blue",
                            "startTime": 1668485100000,
                            "endTime": 1668495300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.00202608143307,
                                        14.082832319542877
                                    ],
                                    [
                                        30.00202608143307,
                                        12.15659271261305
                                    ],
                                    [
                                        31.98022220971949,
                                        12.15659271261305
                                    ],
                                    [
                                        31.98022220971949,
                                        14.082832319542877
                                    ],
                                    [
                                        30.00202608143307,
                                        14.082832319542877
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
                            "force": "f-blue",
                            "startTime": 1668495300000,
                            "endTime": 1668506700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.995,
                                    13.1216
                                ],
                                [
                                    35.73,
                                    18.65
                                ],
                                [
                                    39.47,
                                    23.18
                                ],
                                [
                                    43.5,
                                    28
                                ],
                                [
                                    47.81,
                                    33.1
                                ],
                                [
                                    48.3127,
                                    33.5107
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a1060",
                    "number": 0
                },
                {
                    "asset": "a1054",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_21",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "asset": "a1027",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_24",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T14:58:50.204Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-27",
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
                            "force": "f-red",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    69.0615,
                                    12.8821
                                ],
                                [
                                    48.22,
                                    50.56
                                ],
                                [
                                    48.1087,
                                    50.9161
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1148",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_27",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T03:21:37.977Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-30",
            "title": "Order item 30",
            "startDate": "2022-11-15T00:10:00.000Z",
            "endDate": "2022-11-15T03:20:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1124",
                    "number": 3
                },
                {
                    "asset": "a1172",
                    "number": 2
                },
                {
                    "asset": "a1149",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_30",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T05:28:26.541Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-33",
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
                            "force": "f-red",
                            "startTime": 1668472200000,
                            "endTime": 1668475200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.621,
                                    3.8406
                                ],
                                [
                                    33.83,
                                    14.9
                                ],
                                [
                                    41.2,
                                    25.14
                                ],
                                [
                                    47.86,
                                    35.66
                                ],
                                [
                                    47.9011,
                                    35.8427
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1154",
                    "number": 1
                },
                {
                    "asset": "a1187",
                    "number": 0
                },
                {
                    "asset": "a1150",
                    "number": 0
                },
                {
                    "asset": "a1141",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_33",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668473100000,
                            "endTime": 1668476100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.2069,
                                    50.3752
                                ],
                                [
                                    47.44,
                                    44.2
                                ],
                                [
                                    50.53,
                                    36.88
                                ],
                                [
                                    52.91,
                                    30.84
                                ],
                                [
                                    55.56,
                                    24.09
                                ],
                                [
                                    55.2006,
                                    24.0609
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
                            "force": "f-blue",
                            "startTime": 1668476100000,
                            "endTime": 1668479700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                55.2006,
                                24.0609
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
                            "force": "f-blue",
                            "startTime": 1668479700000,
                            "endTime": 1668480300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.2006,
                                    24.0609
                                ],
                                [
                                    51.65,
                                    32.39
                                ],
                                [
                                    48.35,
                                    41.97
                                ],
                                [
                                    45.34,
                                    50.84
                                ],
                                [
                                    45.2069,
                                    50.3752
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a1041",
                    "number": 0
                },
                {
                    "asset": "a1059",
                    "number": 5
                },
                {
                    "asset": "a1007",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_36",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T02:54:06.041Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-39",
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
                            "force": "f-red",
                            "startTime": 1668473100000,
                            "endTime": 1668476100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.4881,
                                    6.1586
                                ],
                                [
                                    60.49,
                                    21.62
                                ],
                                [
                                    60.72,
                                    37.31
                                ],
                                [
                                    61.23,
                                    52.29
                                ],
                                [
                                    61.0773,
                                    52.778
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
                            "force": "f-red",
                            "startTime": 1668476100000,
                            "endTime": 1668482700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                61.0773,
                                52.778
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
                            "force": "f-red",
                            "startTime": 1668482700000,
                            "endTime": 1668484500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.0773,
                                    52.778
                                ],
                                [
                                    60.29,
                                    40.63
                                ],
                                [
                                    60.37,
                                    29.34
                                ],
                                [
                                    59.73,
                                    17.35
                                ],
                                [
                                    59.38,
                                    6.63
                                ],
                                [
                                    59.4881,
                                    6.1586
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a1180",
                    "number": 5
                },
                {
                    "asset": "a1184",
                    "number": 3
                },
                {
                    "asset": "a1117",
                    "number": 1
                },
                {
                    "asset": "a1176",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_39",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T06:12:56.977Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-42",
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
                            "force": "f-red",
                            "startTime": 1668473400000,
                            "endTime": 1668476400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.8536,
                                    16.4273
                                ],
                                [
                                    74.05,
                                    26.01
                                ],
                                [
                                    75.49,
                                    35.84
                                ],
                                [
                                    75.22,
                                    45.96
                                ],
                                [
                                    75.6862,
                                    45.8862
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
                            "force": "f-red",
                            "startTime": 1668476400000,
                            "endTime": 1668479400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                75.6862,
                                45.8862
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
                            "force": "f-red",
                            "startTime": 1668479400000,
                            "endTime": 1668486600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.6862,
                                    45.8862
                                ],
                                [
                                    74.76,
                                    31.02
                                ],
                                [
                                    74.34,
                                    16.65
                                ],
                                [
                                    73.8536,
                                    16.4273
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1176",
                    "number": 1
                },
                {
                    "asset": "a1165",
                    "number": 5
                },
                {
                    "asset": "a1181",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_42",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668474600000,
                            "endTime": 1668477600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.5352,
                                    50.4091
                                ],
                                [
                                    72.1,
                                    10.59
                                ],
                                [
                                    72.0646,
                                    10.9422
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
                            "force": "f-blue",
                            "startTime": 1668477600000,
                            "endTime": 1668477600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                72.0646,
                                10.9422
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
                            "force": "f-blue",
                            "startTime": 1668477600000,
                            "endTime": 1668484800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.0646,
                                    10.9422
                                ],
                                [
                                    78.97,
                                    30.65
                                ],
                                [
                                    85.23,
                                    50.71
                                ],
                                [
                                    85.5352,
                                    50.4091
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a1028",
                    "number": 2
                },
                {
                    "asset": "a1099",
                    "number": 3
                },
                {
                    "asset": "a1101",
                    "number": 3
                },
                {
                    "asset": "a1033",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_45",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T14:02:41.219Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-48",
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
                            "force": "f-red",
                            "startTime": 1668474600000,
                            "endTime": 1668477600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.9463,
                                    21.4275
                                ],
                                [
                                    41.2,
                                    28.79
                                ],
                                [
                                    51.32,
                                    37.01
                                ],
                                [
                                    60.72,
                                    44.52
                                ],
                                [
                                    70.4,
                                    51.31
                                ],
                                [
                                    70.7031,
                                    51.6309
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1133",
                    "number": 5
                },
                {
                    "asset": "a1190",
                    "number": 0
                },
                {
                    "asset": "a1177",
                    "number": 0
                },
                {
                    "asset": "a1191",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_48",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668474600000,
                            "endTime": 1668477600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.901,
                                    28.8402
                                ],
                                [
                                    64.82,
                                    27.26
                                ],
                                [
                                    69.58,
                                    24.53
                                ],
                                [
                                    73.63,
                                    23.08
                                ],
                                [
                                    76.96,
                                    20.91
                                ],
                                [
                                    77.311,
                                    21.1526
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-ballistic-strike",
            "ownAssets": [
                {
                    "asset": "a1091",
                    "number": 3
                },
                {
                    "asset": "a1036",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_51",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T04:48:28.624Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-54",
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
                            "force": "f-red",
                            "startTime": 1668474600000,
                            "endTime": 1668477600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.7654,
                                    22.4934
                                ],
                                [
                                    67.86,
                                    25.7
                                ],
                                [
                                    63.21,
                                    29.17
                                ],
                                [
                                    56.85,
                                    32.91
                                ],
                                [
                                    57.3068,
                                    32.85
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
                            "force": "f-red",
                            "startTime": 1668477600000,
                            "endTime": 1668486000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                57.3068,
                                32.85
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
                            "force": "f-red",
                            "startTime": 1668486000000,
                            "endTime": 1668487200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.3068,
                                    32.85
                                ],
                                [
                                    65.32,
                                    27.86
                                ],
                                [
                                    73.77,
                                    22.31
                                ],
                                [
                                    73.7654,
                                    22.4934
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1109",
                    "number": 0
                },
                {
                    "asset": "a1136",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_54",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T04:47:23.512Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-57",
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
                            "force": "f-red",
                            "startTime": 1668475200000,
                            "endTime": 1668478200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.7654,
                                    22.4934
                                ],
                                [
                                    69.97,
                                    24.57
                                ],
                                [
                                    65.37,
                                    26.84
                                ],
                                [
                                    61.06,
                                    28.4
                                ],
                                [
                                    60.901,
                                    28.8402
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
                            "force": "f-red",
                            "startTime": 1668478200000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                60.901,
                                28.8402
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
                            "force": "f-red",
                            "startTime": 1668488400000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.901,
                                    28.8402
                                ],
                                [
                                    67.43,
                                    25.42
                                ],
                                [
                                    73.46,
                                    22.5
                                ],
                                [
                                    73.7654,
                                    22.4934
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1177",
                    "number": 0
                },
                {
                    "asset": "a1190",
                    "number": 5
                },
                {
                    "asset": "a1133",
                    "number": 5
                },
                {
                    "asset": "a1201",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_57",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T18:30:19.191Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-60",
            "title": "Order item 60",
            "startDate": "2022-11-15T01:30:00.000Z",
            "endDate": "2022-11-15T02:00:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a1201",
                    "number": 4
                },
                {
                    "asset": "a1199",
                    "number": 3
                },
                {
                    "asset": "a1128",
                    "number": 5
                },
                {
                    "asset": "a1181",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_60",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "asset": "a1081",
                    "number": 2
                },
                {
                    "asset": "a1065",
                    "number": 1
                },
                {
                    "asset": "a1076",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_63",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T15:08:12.920Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-66",
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
                            "force": "f-red",
                            "startTime": 1668477000000,
                            "endTime": 1668480000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    79.9526,
                                    24.9493
                                ],
                                [
                                    54.19,
                                    32.02
                                ],
                                [
                                    27.83,
                                    39.49
                                ],
                                [
                                    27.4354,
                                    39.9928
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
                            "force": "f-red",
                            "startTime": 1668480000000,
                            "endTime": 1668487800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                27.4354,
                                39.9928
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
                            "force": "f-red",
                            "startTime": 1668487800000,
                            "endTime": 1668492000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    27.4354,
                                    39.9928
                                ],
                                [
                                    79.48,
                                    25.06
                                ],
                                [
                                    79.9526,
                                    24.9493
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1117",
                    "number": 3
                },
                {
                    "asset": "a1183",
                    "number": 5
                },
                {
                    "asset": "a1180",
                    "number": 3
                },
                {
                    "asset": "a1107",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_66",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.7386,
                                    48.605
                                ],
                                [
                                    61,
                                    33.2
                                ],
                                [
                                    61.74,
                                    18.29
                                ],
                                [
                                    62.1004,
                                    18.2047
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1007",
                    "number": 2
                },
                {
                    "asset": "a1059",
                    "number": 3
                },
                {
                    "asset": "a1041",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_69",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.544,
                                    41.833
                                ],
                                [
                                    37.65,
                                    32.22
                                ],
                                [
                                    52.95,
                                    21.81
                                ],
                                [
                                    67.54,
                                    11.68
                                ],
                                [
                                    67.8945,
                                    11.6152
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-ballistic-strike",
            "ownAssets": [
                {
                    "asset": "a1050",
                    "number": 1
                },
                {
                    "asset": "a1087",
                    "number": 5
                },
                {
                    "asset": "a1054",
                    "number": 4
                },
                {
                    "asset": "a1049",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_72",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.2069,
                                    50.3752
                                ],
                                [
                                    50.01,
                                    35.33
                                ],
                                [
                                    54.86,
                                    21.35
                                ],
                                [
                                    59,
                                    6.65
                                ],
                                [
                                    59.4881,
                                    6.1586
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
                            "force": "f-blue",
                            "startTime": 1668480600000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        57.85926206346196,
                                        7.770017294400644
                                    ],
                                    [
                                        57.85926206346196,
                                        4.54227391145489
                                    ],
                                    [
                                        61.10706538805579,
                                        4.54227391145489
                                    ],
                                    [
                                        61.10706538805579,
                                        7.770017294400644
                                    ],
                                    [
                                        57.85926206346196,
                                        7.770017294400644
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
                            "force": "f-blue",
                            "startTime": 1668488400000,
                            "endTime": 1668496200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        57.62009206998878,
                                        8.005162414168037
                                    ],
                                    [
                                        57.62009206998878,
                                        4.305587256152936
                                    ],
                                    [
                                        61.34313588809645,
                                        4.305587256152936
                                    ],
                                    [
                                        61.34313588809645,
                                        8.005162414168037
                                    ],
                                    [
                                        57.62009206998878,
                                        8.005162414168037
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
                            "force": "f-blue",
                            "startTime": 1668496200000,
                            "endTime": 1668499800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.4881,
                                    6.1586
                                ],
                                [
                                    55.16,
                                    21.11
                                ],
                                [
                                    49.94,
                                    35.16
                                ],
                                [
                                    45,
                                    50.5
                                ],
                                [
                                    45.2069,
                                    50.3752
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a1049",
                    "number": 4
                },
                {
                    "asset": "a1071",
                    "number": 5
                },
                {
                    "asset": "a1024",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_75",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.527,
                                    42.8189
                                ],
                                [
                                    65.38,
                                    32.36
                                ],
                                [
                                    78.63,
                                    22.3
                                ],
                                [
                                    78.948,
                                    22.0942
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
                            "force": "f-blue",
                            "startTime": 1668480600000,
                            "endTime": 1668484200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        77.9965727504409,
                                        22.96746229229606
                                    ],
                                    [
                                        77.9965727504409,
                                        21.21549955654248
                                    ],
                                    [
                                        79.88768999183914,
                                        21.21549955654248
                                    ],
                                    [
                                        79.88768999183914,
                                        22.96746229229606
                                    ],
                                    [
                                        77.9965727504409,
                                        22.96746229229606
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
                            "force": "f-blue",
                            "startTime": 1668484200000,
                            "endTime": 1668490800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        77.43856190264445,
                                        23.47185417716987
                                    ],
                                    [
                                        77.43856190264445,
                                        20.702956472662517
                                    ],
                                    [
                                        80.42811180326025,
                                        20.702956472662517
                                    ],
                                    [
                                        80.42811180326025,
                                        23.47185417716987
                                    ],
                                    [
                                        77.43856190264445,
                                        23.47185417716987
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
                            "force": "f-blue",
                            "startTime": 1668490800000,
                            "endTime": 1668490800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.948,
                                    22.0942
                                ],
                                [
                                    51.5,
                                    42.43
                                ],
                                [
                                    51.527,
                                    42.8189
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a1101",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_78",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "asset": "a1013",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_81",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T14:38:13.080Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-84",
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
                            "force": "f-red",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    69.0615,
                                    12.8821
                                ],
                                [
                                    70.18,
                                    42.26
                                ],
                                [
                                    70.047,
                                    41.9775
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
                            "force": "f-red",
                            "startTime": 1668480600000,
                            "endTime": 1668487800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        66.28607605636824,
                                        44.59579178309957
                                    ],
                                    [
                                        66.28607605636824,
                                        39.246293104165474
                                    ],
                                    [
                                        73.50471694207626,
                                        39.246293104165474
                                    ],
                                    [
                                        73.50471694207626,
                                        44.59579178309957
                                    ],
                                    [
                                        66.28607605636824,
                                        44.59579178309957
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
                            "force": "f-red",
                            "startTime": 1668487800000,
                            "endTime": 1668493200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    70.047,
                                    41.9775
                                ],
                                [
                                    69.58,
                                    32.08
                                ],
                                [
                                    69.2,
                                    22.28
                                ],
                                [
                                    69.1,
                                    12.77
                                ],
                                [
                                    69.0615,
                                    12.8821
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1175",
                    "number": 0
                },
                {
                    "asset": "a1153",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_84",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.0563,
                                    47.6749
                                ],
                                [
                                    41.02,
                                    38.95
                                ],
                                [
                                    47.19,
                                    30.42
                                ],
                                [
                                    53.65,
                                    21.17
                                ],
                                [
                                    53.8323,
                                    21.2712
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
                            "force": "f-blue",
                            "startTime": 1668480600000,
                            "endTime": 1668483600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        51.402127793471905,
                                        23.482839195775924
                                    ],
                                    [
                                        51.402127793471905,
                                        19.025755417125552
                                    ],
                                    [
                                        56.18995861342008,
                                        19.025755417125552
                                    ],
                                    [
                                        56.18995861342008,
                                        23.482839195775924
                                    ],
                                    [
                                        51.402127793471905,
                                        23.482839195775924
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
                            "force": "f-blue",
                            "startTime": 1668483600000,
                            "endTime": 1668485400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        52.322683653176156,
                                        22.657625523181412
                                    ],
                                    [
                                        52.322683653176156,
                                        19.87158015796362
                                    ],
                                    [
                                        55.31360461205798,
                                        19.87158015796362
                                    ],
                                    [
                                        55.31360461205798,
                                        22.657625523181412
                                    ],
                                    [
                                        52.322683653176156,
                                        22.657625523181412
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
                            "force": "f-blue",
                            "startTime": 1668485400000,
                            "endTime": 1668485400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    53.8323,
                                    21.2712
                                ],
                                [
                                    43.47,
                                    34.96
                                ],
                                [
                                    34.53,
                                    48.06
                                ],
                                [
                                    34.0563,
                                    47.6749
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-air-recce",
            "ownAssets": [
                {
                    "asset": "a1093",
                    "number": 1
                },
                {
                    "asset": "a1057",
                    "number": 3
                },
                {
                    "asset": "a1048",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_87",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T23:00:19.457Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-90",
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
                            "force": "f-red",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.4124,
                                    18.6004
                                ],
                                [
                                    44.25,
                                    24.77
                                ],
                                [
                                    45.04,
                                    30.87
                                ],
                                [
                                    45.1,
                                    37.26
                                ],
                                [
                                    46.45,
                                    43.93
                                ],
                                [
                                    46.3078,
                                    43.851
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
                            "force": "f-red",
                            "startTime": 1668480600000,
                            "endTime": 1668492000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                46.3078,
                                43.851
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
                            "force": "f-red",
                            "startTime": 1668492000000,
                            "endTime": 1668496200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.3078,
                                    43.851
                                ],
                                [
                                    45.38,
                                    34.99
                                ],
                                [
                                    44.58,
                                    27.25
                                ],
                                [
                                    43.07,
                                    18.8
                                ],
                                [
                                    43.4124,
                                    18.6004
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1167",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_90",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.1087,
                                    50.9161
                                ],
                                [
                                    48.74,
                                    43.69
                                ],
                                [
                                    49.27,
                                    36.37
                                ],
                                [
                                    50.09,
                                    28.33
                                ],
                                [
                                    51.18,
                                    21.57
                                ],
                                [
                                    51.2056,
                                    21.2464
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
                            "force": "f-blue",
                            "startTime": 1668480600000,
                            "endTime": 1668483000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        49.76066206048317,
                                        22.57450957201144
                                    ],
                                    [
                                        49.76066206048317,
                                        19.90620393882531
                                    ],
                                    [
                                        52.624607233434595,
                                        19.90620393882531
                                    ],
                                    [
                                        52.624607233434595,
                                        22.57450957201144
                                    ],
                                    [
                                        49.76066206048317,
                                        22.57450957201144
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
                            "force": "f-blue",
                            "startTime": 1668483000000,
                            "endTime": 1668485400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.2056,
                                    21.2464
                                ],
                                [
                                    49.97,
                                    28.37
                                ],
                                [
                                    49.53,
                                    36.3
                                ],
                                [
                                    48.38,
                                    43.51
                                ],
                                [
                                    48.51,
                                    51.01
                                ],
                                [
                                    48.1087,
                                    50.9161
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-area-strike",
            "ownAssets": [
                {
                    "asset": "a1095",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_93",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T14:18:28.996Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-96",
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
                            "force": "f-red",
                            "startTime": 1668477600000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.7767,
                                    28.2931
                                ],
                                [
                                    49.66,
                                    33.86
                                ],
                                [
                                    61.83,
                                    38.72
                                ],
                                [
                                    73.29,
                                    43.86
                                ],
                                [
                                    73.3476,
                                    44.2583
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
                            "force": "f-red",
                            "startTime": 1668480600000,
                            "endTime": 1668489600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                73.3476,
                                44.2583
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
                            "force": "f-red",
                            "startTime": 1668489600000,
                            "endTime": 1668501000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.3476,
                                    44.2583
                                ],
                                [
                                    55.4,
                                    36.45
                                ],
                                [
                                    37.87,
                                    28.07
                                ],
                                [
                                    37.7767,
                                    28.2931
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1178",
                    "number": 1
                },
                {
                    "asset": "a1195",
                    "number": 1
                },
                {
                    "asset": "a1143",
                    "number": 0
                },
                {
                    "asset": "a1118",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_96",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T06:33:34.952Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-99",
            "title": "Order item 99",
            "startDate": "2022-11-15T02:10:00.000Z",
            "endDate": "2022-11-15T03:40:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a1118",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_99",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668478800000,
                            "endTime": 1668481800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.6788,
                                    42.8519
                                ],
                                [
                                    66.89,
                                    34.37
                                ],
                                [
                                    55.23,
                                    27.03
                                ],
                                [
                                    43.87,
                                    18.98
                                ],
                                [
                                    43.4124,
                                    18.6004
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1011",
                    "number": 4
                },
                {
                    "asset": "a1096",
                    "number": 3
                },
                {
                    "asset": "a1015",
                    "number": 2
                },
                {
                    "asset": "a1058",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_102",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "Sub-Surface",
                "roleId": "blue-sub",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668478800000,
                            "endTime": 1668481800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.28,
                                    46.1877
                                ],
                                [
                                    34.27,
                                    8.95
                                ],
                                [
                                    33.9936,
                                    8.934
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
                            "force": "f-blue",
                            "startTime": 1668481800000,
                            "endTime": 1668483600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                33.9936,
                                8.934
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
                            "force": "f-blue",
                            "startTime": 1668483600000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.9936,
                                    8.934
                                ],
                                [
                                    41.89,
                                    18.02
                                ],
                                [
                                    48.67,
                                    27.98
                                ],
                                [
                                    56.72,
                                    37.22
                                ],
                                [
                                    64.07,
                                    45.75
                                ],
                                [
                                    64.28,
                                    46.1877
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1058",
                    "number": 4
                },
                {
                    "asset": "a1031",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_105",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T17:42:57.562Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-108",
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
                            "force": "f-red",
                            "startTime": 1668478800000,
                            "endTime": 1668481800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    49.0649,
                                    8.7186
                                ],
                                [
                                    44.75,
                                    21.12
                                ],
                                [
                                    39.65,
                                    33.75
                                ],
                                [
                                    34.84,
                                    45.66
                                ],
                                [
                                    35.2513,
                                    45.5705
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a1160",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_108",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668479100000,
                            "endTime": 1668482100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.7429,
                                    52.768
                                ],
                                [
                                    64.85,
                                    40.14
                                ],
                                [
                                    71.1,
                                    26.66
                                ],
                                [
                                    76.64,
                                    13.46
                                ],
                                [
                                    76.8599,
                                    13.4246
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
                            "force": "f-blue",
                            "startTime": 1668482100000,
                            "endTime": 1668486300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                76.8599,
                                13.4246
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
                            "force": "f-blue",
                            "startTime": 1668486300000,
                            "endTime": 1668497700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.8599,
                                    13.4246
                                ],
                                [
                                    71.15,
                                    26.84
                                ],
                                [
                                    64.55,
                                    39.37
                                ],
                                [
                                    59.24,
                                    53.18
                                ],
                                [
                                    58.7429,
                                    52.768
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1019",
                    "number": 0
                },
                {
                    "asset": "a1060",
                    "number": 4
                },
                {
                    "asset": "a1032",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_111",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T05:49:16.588Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-114",
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
                            "force": "f-red",
                            "startTime": 1668479100000,
                            "endTime": 1668482100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    65.9443,
                                    28.2336
                                ],
                                [
                                    35.2,
                                    45.23
                                ],
                                [
                                    35.2513,
                                    45.5705
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
                            "force": "f-red",
                            "startTime": 1668482100000,
                            "endTime": 1668486300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.005597839509626,
                                        47.709659544237965
                                    ],
                                    [
                                        32.005597839509626,
                                        43.346257099902445
                                    ],
                                    [
                                        38.25428221039477,
                                        43.346257099902445
                                    ],
                                    [
                                        38.25428221039477,
                                        47.709659544237965
                                    ],
                                    [
                                        32.005597839509626,
                                        47.709659544237965
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
                            "force": "f-red",
                            "startTime": 1668486300000,
                            "endTime": 1668493500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    35.2513,
                                    45.5705
                                ],
                                [
                                    66.23,
                                    28.26
                                ],
                                [
                                    65.9443,
                                    28.2336
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1131",
                    "number": 5
                },
                {
                    "asset": "a1158",
                    "number": 4
                },
                {
                    "asset": "a1115",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_114",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T00:28:27.286Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-117",
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
                            "force": "f-red",
                            "startTime": 1668479100000,
                            "endTime": 1668482100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.8151,
                                    25.7048
                                ],
                                [
                                    52.4,
                                    27.96
                                ],
                                [
                                    63.15,
                                    29.38
                                ],
                                [
                                    73.18,
                                    31.09
                                ],
                                [
                                    73.2222,
                                    31.2635
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
                            "force": "f-red",
                            "startTime": 1668482100000,
                            "endTime": 1668492300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                73.2222,
                                31.2635
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
                            "force": "f-red",
                            "startTime": 1668492300000,
                            "endTime": 1668493500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.2222,
                                    31.2635
                                ],
                                [
                                    41.41,
                                    25.52
                                ],
                                [
                                    41.8151,
                                    25.7048
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1196",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_117",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668480000000,
                            "endTime": 1668483000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.3068,
                                    32.85
                                ],
                                [
                                    55.52,
                                    24.31
                                ],
                                [
                                    55.2006,
                                    24.0609
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
                            "force": "f-blue",
                            "startTime": 1668483000000,
                            "endTime": 1668491400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                55.2006,
                                24.0609
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
                            "force": "f-blue",
                            "startTime": 1668491400000,
                            "endTime": 1668495600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.2006,
                                    24.0609
                                ],
                                [
                                    56.17,
                                    27.16
                                ],
                                [
                                    56.34,
                                    29.47
                                ],
                                [
                                    56.8,
                                    33.06
                                ],
                                [
                                    57.3068,
                                    32.85
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1021",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_120",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T14:58:51.055Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-123",
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
                            "force": "f-red",
                            "startTime": 1668480000000,
                            "endTime": 1668483000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.9679,
                                    18.0351
                                ],
                                [
                                    42.59,
                                    29.86
                                ],
                                [
                                    43.64,
                                    41.11
                                ],
                                [
                                    43.4885,
                                    41.4004
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1195",
                    "number": 1
                },
                {
                    "asset": "a1178",
                    "number": 1
                },
                {
                    "asset": "a1188",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_123",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T18:50:04.125Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-126",
            "title": "Order item 126",
            "startDate": "2022-11-15T02:40:00.000Z",
            "endDate": "2022-11-15T02:50:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a1129",
                    "number": 2
                },
                {
                    "asset": "a1194",
                    "number": 4
                },
                {
                    "asset": "a1190",
                    "number": 2
                },
                {
                    "asset": "a1116",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_126",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T04:25:17.986Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-129",
            "title": "Order item 129",
            "startDate": "2022-11-15T02:55:00.000Z",
            "endDate": "2022-11-15T05:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T02:55:00.000Z",
                            "endDate": "2022-11-15T03:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668480900000,
                            "endTime": 1668483900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.278,
                                    20.6496
                                ],
                                [
                                    61.62,
                                    24.4
                                ],
                                [
                                    61.29,
                                    28.48
                                ],
                                [
                                    60.901,
                                    28.8402
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
                            "startDate": "2022-11-15T03:45:00.000Z",
                            "endDate": "2022-11-15T05:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668483900000,
                            "endTime": 1668488700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                60.901,
                                28.8402
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
                            "startDate": "2022-11-15T05:05:00.000Z",
                            "endDate": "2022-11-15T05:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668488700000,
                            "endTime": 1668489300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.901,
                                    28.8402
                                ],
                                [
                                    61.8,
                                    26.52
                                ],
                                [
                                    61.61,
                                    25.11
                                ],
                                [
                                    62.69,
                                    22.99
                                ],
                                [
                                    63.07,
                                    20.15
                                ],
                                [
                                    63.278,
                                    20.6496
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1116",
                    "number": 3
                },
                {
                    "asset": "a1167",
                    "number": 1
                },
                {
                    "asset": "a1148",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_129",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "Sub-Surface",
                "roleId": "blue-sub",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T19:44:32.637Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-132",
            "title": "Order item 132",
            "startDate": "2022-11-15T03:10:00.000Z",
            "endDate": "2022-11-15T05:20:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T03:10:00.000Z",
                            "endDate": "2022-11-15T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668481800000,
                            "endTime": 1668484800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.1078,
                                    40.5031
                                ],
                                [
                                    26.5,
                                    14.85
                                ],
                                [
                                    26.6546,
                                    15.2578
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
                            "startDate": "2022-11-15T04:00:00.000Z",
                            "endDate": "2022-11-15T04:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668484800000,
                            "endTime": 1668487200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        26.117870147926002,
                                        15.77368095009706
                                    ],
                                    [
                                        26.117870147926002,
                                        14.740648795721443
                                    ],
                                    [
                                        27.18869658827326,
                                        14.740648795721443
                                    ],
                                    [
                                        27.18869658827326,
                                        15.77368095009706
                                    ],
                                    [
                                        26.117870147926002,
                                        15.77368095009706
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
                            "startDate": "2022-11-15T04:40:00.000Z",
                            "endDate": "2022-11-15T05:20:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668487200000,
                            "endTime": 1668489600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.6546,
                                    15.2578
                                ],
                                [
                                    38.85,
                                    21.71
                                ],
                                [
                                    50.98,
                                    28.11
                                ],
                                [
                                    63.39,
                                    33.78
                                ],
                                [
                                    76.09,
                                    40.74
                                ],
                                [
                                    76.1078,
                                    40.5031
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1057",
                    "number": 0
                },
                {
                    "asset": "a1093",
                    "number": 1
                },
                {
                    "asset": "a1059",
                    "number": 0
                },
                {
                    "asset": "a1053",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_132",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T00:47:48.079Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-135",
            "title": "Order item 135",
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
                            "force": "f-red",
                            "startTime": 1668481800000,
                            "endTime": 1668484800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.7112,
                                    4.8574
                                ],
                                [
                                    26.82,
                                    18.22
                                ],
                                [
                                    23.99,
                                    30.64
                                ],
                                [
                                    22.44,
                                    43.35
                                ],
                                [
                                    22.1245,
                                    43.657
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a1153",
                    "number": 4
                },
                {
                    "asset": "a1175",
                    "number": 1
                },
                {
                    "asset": "a1126",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_135",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T11:35:04.312Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-138",
            "title": "Order item 138",
            "startDate": "2022-11-15T03:15:00.000Z",
            "endDate": "2022-11-15T04:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T04:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668482100000,
                            "endTime": 1668485100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.5575,
                                    26.8124
                                ],
                                [
                                    70.46,
                                    42.25
                                ],
                                [
                                    70.047,
                                    41.9775
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a1103",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_138",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T04:06:21.334Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-141",
            "title": "Order item 141",
            "startDate": "2022-11-15T03:35:00.000Z",
            "endDate": "2022-11-15T04:25:00.000Z",
            "location": [
                {
                    "uniqid": "ab1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Ballistic Strike//Route to target",
                            "startDate": "2022-11-15T03:35:00.000Z",
                            "endDate": "2022-11-15T04:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668483300000,
                            "endTime": 1668486300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.0449,
                                    48.9989
                                ],
                                [
                                    60.41,
                                    30.01
                                ],
                                [
                                    47.06,
                                    10.32
                                ],
                                [
                                    46.7462,
                                    10.5287
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-ballistic-strike",
            "ownAssets": [
                {
                    "asset": "a1012",
                    "number": 0
                },
                {
                    "asset": "a1101",
                    "number": 1
                },
                {
                    "asset": "a1024",
                    "number": 1
                },
                {
                    "asset": "a1071",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_141",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T18:21:39.148Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-144",
            "title": "Order item 144",
            "startDate": "2022-11-15T03:35:00.000Z",
            "endDate": "2022-11-15T06:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T03:35:00.000Z",
                            "endDate": "2022-11-15T04:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668483300000,
                            "endTime": 1668486300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.851,
                                    18.4216
                                ],
                                [
                                    52.55,
                                    36.55
                                ],
                                [
                                    40.61,
                                    54.05
                                ],
                                [
                                    40.3006,
                                    54.3846
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
                            "endDate": "2022-11-15T06:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668486300000,
                            "endTime": 1668492300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                40.3006,
                                54.3846
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
                            "endDate": "2022-11-15T06:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668492300000,
                            "endTime": 1668494700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.3006,
                                    54.3846
                                ],
                                [
                                    52.47,
                                    36.43
                                ],
                                [
                                    65.1,
                                    17.95
                                ],
                                [
                                    64.851,
                                    18.4216
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1171",
                    "number": 5
                },
                {
                    "asset": "a1149",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_144",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T06:20:57.752Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-147",
            "title": "Order item 147",
            "startDate": "2022-11-15T03:40:00.000Z",
            "endDate": "2022-11-15T07:20:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T03:40:00.000Z",
                            "endDate": "2022-11-15T04:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668483600000,
                            "endTime": 1668486600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.017,
                                    18.0384
                                ],
                                [
                                    49.08,
                                    51.82
                                ],
                                [
                                    49.48,
                                    52.1008
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
                            "startDate": "2022-11-15T04:30:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668486600000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                49.48,
                                52.1008
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
                            "endDate": "2022-11-15T07:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668488400000,
                            "endTime": 1668496800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    49.48,
                                    52.1008
                                ],
                                [
                                    52.28,
                                    43.49
                                ],
                                [
                                    55.09,
                                    34.9
                                ],
                                [
                                    58.19,
                                    26.59
                                ],
                                [
                                    60.56,
                                    17.56
                                ],
                                [
                                    61.017,
                                    18.0384
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a1186",
                    "number": 3
                },
                {
                    "asset": "a1150",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_147",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T08:04:17.146Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-150",
            "title": "Order item 150",
            "startDate": "2022-11-15T04:00:00.000Z",
            "endDate": "2022-11-15T08:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T04:00:00.000Z",
                            "endDate": "2022-11-15T04:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668484800000,
                            "endTime": 1668487800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.5286,
                                    21.5062
                                ],
                                [
                                    71.15,
                                    32.31
                                ],
                                [
                                    71.4223,
                                    32.3436
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
                            "startDate": "2022-11-15T04:50:00.000Z",
                            "endDate": "2022-11-15T07:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668487800000,
                            "endTime": 1668498600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                71.4223,
                                32.3436
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
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T08:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668498600000,
                            "endTime": 1668499200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    71.4223,
                                    32.3436
                                ],
                                [
                                    73.05,
                                    21.32
                                ],
                                [
                                    73.5286,
                                    21.5062
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1158",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_150",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T15:31:37.331Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-153",
            "title": "Order item 153",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T05:35:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1083",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_153",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "Sub-Surface",
                "roleId": "blue-sub",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T12:42:58.307Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-156",
            "title": "Order item 156",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T05:55:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a1064",
                    "number": 4
                },
                {
                    "asset": "a1080",
                    "number": 0
                },
                {
                    "asset": "a1027",
                    "number": 4
                },
                {
                    "asset": "a1098",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_156",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668485700000,
                            "endTime": 1668488700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    67.8042,
                                    42.6292
                                ],
                                [
                                    67.1,
                                    33.56
                                ],
                                [
                                    67.42,
                                    24.52
                                ],
                                [
                                    67.03,
                                    14.77
                                ],
                                [
                                    65.92,
                                    5.29
                                ],
                                [
                                    66.4099,
                                    5.7494
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
                            "force": "f-blue",
                            "startTime": 1668488700000,
                            "endTime": 1668488700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        65.4731382782119,
                                        6.679041582973542
                                    ],
                                    [
                                        65.4731382782119,
                                        4.818236864309897
                                    ],
                                    [
                                        67.34360343862977,
                                        4.818236864309897
                                    ],
                                    [
                                        67.34360343862977,
                                        6.679041582973542
                                    ],
                                    [
                                        65.4731382782119,
                                        6.679041582973542
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
                            "force": "f-blue",
                            "startTime": 1668488700000,
                            "endTime": 1668499500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.4099,
                                    5.7494
                                ],
                                [
                                    67.05,
                                    14.74
                                ],
                                [
                                    67.59,
                                    24.62
                                ],
                                [
                                    67.4,
                                    33.79
                                ],
                                [
                                    67.51,
                                    42.24
                                ],
                                [
                                    67.8042,
                                    42.6292
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-area-strike",
            "ownAssets": [
                {
                    "asset": "a1098",
                    "number": 1
                },
                {
                    "asset": "a1100",
                    "number": 5
                },
                {
                    "asset": "a1032",
                    "number": 1
                },
                {
                    "asset": "a1089",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_159",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T16:17:42.629Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-162",
            "title": "Order item 162",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T06:45:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T04:15:00.000Z",
                            "endDate": "2022-11-15T05:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668485700000,
                            "endTime": 1668488700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.1221,
                                    49.8195
                                ],
                                [
                                    61.2,
                                    16.54
                                ],
                                [
                                    61.0408,
                                    16.1755
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
                            "endDate": "2022-11-15T06:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668488700000,
                            "endTime": 1668493500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                61.0408,
                                16.1755
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
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668493500000,
                            "endTime": 1668494700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.0408,
                                    16.1755
                                ],
                                [
                                    68.39,
                                    27
                                ],
                                [
                                    75.87,
                                    38.94
                                ],
                                [
                                    82.63,
                                    50.17
                                ],
                                [
                                    83.1221,
                                    49.8195
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1089",
                    "number": 0
                },
                {
                    "asset": "a1076",
                    "number": 0
                },
                {
                    "asset": "a1091",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_162",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T14:41:05.976Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-165",
            "title": "Order item 165",
            "startDate": "2022-11-15T04:15:00.000Z",
            "endDate": "2022-11-15T08:35:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T04:15:00.000Z",
                            "endDate": "2022-11-15T05:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668485700000,
                            "endTime": 1668488700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    27.8619,
                                    22.6553
                                ],
                                [
                                    60.43,
                                    29.05
                                ],
                                [
                                    60.901,
                                    28.8402
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
                            "endDate": "2022-11-15T08:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668488700000,
                            "endTime": 1668499500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                60.901,
                                28.8402
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
                            "endDate": "2022-11-15T08:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668499500000,
                            "endTime": 1668501300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.901,
                                    28.8402
                                ],
                                [
                                    52.63,
                                    27.34
                                ],
                                [
                                    44.26,
                                    25.74
                                ],
                                [
                                    36.18,
                                    24.43
                                ],
                                [
                                    27.39,
                                    22.41
                                ],
                                [
                                    27.8619,
                                    22.6553
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1136",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_165",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T18:48:30.114Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-168",
            "title": "Order item 168",
            "startDate": "2022-11-15T04:20:00.000Z",
            "endDate": "2022-11-15T08:00:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T04:20:00.000Z",
                            "endDate": "2022-11-15T05:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668486000000,
                            "endTime": 1668489000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    60.4067,
                                    11.5024
                                ],
                                [
                                    60.18,
                                    25.16
                                ],
                                [
                                    61.16,
                                    39.01
                                ],
                                [
                                    61.42,
                                    53.15
                                ],
                                [
                                    61.0773,
                                    52.778
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
                            "startDate": "2022-11-15T05:10:00.000Z",
                            "endDate": "2022-11-15T07:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668489000000,
                            "endTime": 1668497400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                61.0773,
                                52.778
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
                            "startDate": "2022-11-15T07:30:00.000Z",
                            "endDate": "2022-11-15T08:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668497400000,
                            "endTime": 1668499200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.0773,
                                    52.778
                                ],
                                [
                                    60.91,
                                    39.36
                                ],
                                [
                                    60.98,
                                    25.17
                                ],
                                [
                                    60.32,
                                    11.26
                                ],
                                [
                                    60.4067,
                                    11.5024
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a1136",
                    "number": 2
                },
                {
                    "asset": "a1191",
                    "number": 0
                },
                {
                    "asset": "a1176",
                    "number": 5
                },
                {
                    "asset": "a1189",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_168",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T20:39:55.042Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-171",
            "title": "Order item 171",
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
                            "force": "f-red",
                            "startTime": 1668487200000,
                            "endTime": 1668490200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.5569,
                                    4.6915
                                ],
                                [
                                    27.34,
                                    39.59
                                ],
                                [
                                    27.4354,
                                    39.9928
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
                            "force": "f-red",
                            "startTime": 1668490200000,
                            "endTime": 1668490200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                27.4354,
                                39.9928
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
                            "force": "f-red",
                            "startTime": 1668490200000,
                            "endTime": 1668496200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    27.4354,
                                    39.9928
                                ],
                                [
                                    30.6,
                                    22.11
                                ],
                                [
                                    33.25,
                                    4.71
                                ],
                                [
                                    33.5569,
                                    4.6915
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a1189",
                    "number": 4
                },
                {
                    "asset": "a1132",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_171",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668488100000,
                            "endTime": 1668491100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    27.874,
                                    30.4214
                                ],
                                [
                                    36.7,
                                    27.89
                                ],
                                [
                                    46.43,
                                    24.26
                                ],
                                [
                                    55.44,
                                    21.91
                                ],
                                [
                                    64.73,
                                    18.84
                                ],
                                [
                                    64.851,
                                    18.4216
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
                            "force": "f-blue",
                            "startTime": 1668491100000,
                            "endTime": 1668497700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        63.12107553181869,
                                        20.039009416956564
                                    ],
                                    [
                                        63.12107553181869,
                                        16.788824500952103
                                    ],
                                    [
                                        66.54854112797334,
                                        16.788824500952103
                                    ],
                                    [
                                        66.54854112797334,
                                        20.039009416956564
                                    ],
                                    [
                                        63.12107553181869,
                                        20.039009416956564
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
                            "force": "f-blue",
                            "startTime": 1668497700000,
                            "endTime": 1668504300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.851,
                                    18.4216
                                ],
                                [
                                    46.13,
                                    24.45
                                ],
                                [
                                    27.93,
                                    30.01
                                ],
                                [
                                    27.874,
                                    30.4214
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a1098",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_174",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T09:34:47.270Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-177",
            "title": "Order item 177",
            "startDate": "2022-11-15T04:55:00.000Z",
            "endDate": "2022-11-15T07:35:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a1164",
                    "number": 2
                },
                {
                    "asset": "a1175",
                    "number": 5
                },
                {
                    "asset": "a1117",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_177",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T12:38:14.569Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-180",
            "title": "Order item 180",
            "startDate": "2022-11-15T05:00:00.000Z",
            "endDate": "2022-11-15T11:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T05:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668488400000,
                            "endTime": 1668491400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.5575,
                                    26.8124
                                ],
                                [
                                    76.18,
                                    45.94
                                ],
                                [
                                    75.6862,
                                    45.8862
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
                            "startDate": "2022-11-15T05:50:00.000Z",
                            "endDate": "2022-11-15T07:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668491400000,
                            "endTime": 1668498000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        72.42677107596226,
                                        48.02110093368428
                                    ],
                                    [
                                        72.42677107596226,
                                        43.665579244149484
                                    ],
                                    [
                                        78.69971218962708,
                                        43.665579244149484
                                    ],
                                    [
                                        78.69971218962708,
                                        48.02110093368428
                                    ],
                                    [
                                        72.42677107596226,
                                        48.02110093368428
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
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668498000000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        70.20020250378256,
                                        49.3349161689661
                                    ],
                                    [
                                        70.20020250378256,
                                        42.20629845156379
                                    ],
                                    [
                                        80.51067448387222,
                                        42.20629845156379
                                    ],
                                    [
                                        80.51067448387222,
                                        49.3349161689661
                                    ],
                                    [
                                        70.20020250378256,
                                        49.3349161689661
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
                            "endDate": "2022-11-15T11:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668505800000,
                            "endTime": 1668512400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.6862,
                                    45.8862
                                ],
                                [
                                    30.83,
                                    26.97
                                ],
                                [
                                    30.5575,
                                    26.8124
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-area-recce",
            "ownAssets": [
                {
                    "asset": "a1183",
                    "number": 4
                },
                {
                    "asset": "a1179",
                    "number": 2
                },
                {
                    "asset": "a1103",
                    "number": 2
                },
                {
                    "asset": "a1158",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_180",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "Sub-Surface",
                "roleId": "blue-sub",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T21:25:42.659Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-183",
            "title": "Order item 183",
            "startDate": "2022-11-15T05:20:00.000Z",
            "endDate": "2022-11-15T06:30:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a1058",
                    "number": 3
                },
                {
                    "asset": "a1040",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_183",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T11:57:11.540Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-186",
            "title": "Order item 186",
            "startDate": "2022-11-15T05:20:00.000Z",
            "endDate": "2022-11-15T11:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T05:20:00.000Z",
                            "endDate": "2022-11-15T06:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668489600000,
                            "endTime": 1668492600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.6166,
                                    24.3767
                                ],
                                [
                                    48.14,
                                    36.19
                                ],
                                [
                                    47.9011,
                                    35.8427
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
                            "startDate": "2022-11-15T06:10:00.000Z",
                            "endDate": "2022-11-15T08:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668492600000,
                            "endTime": 1668499200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        44.14880280551451,
                                        38.71354171165858
                                    ],
                                    [
                                        44.14880280551451,
                                        32.86347387917198
                                    ],
                                    [
                                        51.3864376134955,
                                        32.86347387917198
                                    ],
                                    [
                                        51.3864376134955,
                                        38.71354171165858
                                    ],
                                    [
                                        44.14880280551451,
                                        38.71354171165858
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
                            "startDate": "2022-11-15T08:00:00.000Z",
                            "endDate": "2022-11-15T10:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668499200000,
                            "endTime": 1668508800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        47.385718931908016,
                                        36.25719155577484
                                    ],
                                    [
                                        47.385718931908016,
                                        35.426030831450106
                                    ],
                                    [
                                        48.411108590873866,
                                        35.426030831450106
                                    ],
                                    [
                                        48.411108590873866,
                                        36.25719155577484
                                    ],
                                    [
                                        47.385718931908016,
                                        36.25719155577484
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
                            "startDate": "2022-11-15T10:40:00.000Z",
                            "endDate": "2022-11-15T11:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668508800000,
                            "endTime": 1668510000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    47.9011,
                                    35.8427
                                ],
                                [
                                    46.83,
                                    31.74
                                ],
                                [
                                    45.82,
                                    28.69
                                ],
                                [
                                    45.08,
                                    23.92
                                ],
                                [
                                    44.6166,
                                    24.3767
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-area-recce",
            "ownAssets": [
                {
                    "asset": "a1186",
                    "number": 4
                },
                {
                    "asset": "a1153",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_186",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T16:12:41.211Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-189",
            "title": "Order item 189",
            "startDate": "2022-11-15T05:25:00.000Z",
            "endDate": "2022-11-15T07:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T06:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668489900000,
                            "endTime": 1668492900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.6546,
                                    15.2578
                                ],
                                [
                                    36.66,
                                    29.31
                                ],
                                [
                                    46.12,
                                    43.83
                                ],
                                [
                                    46.3078,
                                    43.851
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
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T06:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668492900000,
                            "endTime": 1668492900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                46.3078,
                                43.851
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
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T07:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668492900000,
                            "endTime": 1668497100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.3078,
                                    43.851
                                ],
                                [
                                    26.9,
                                    15.36
                                ],
                                [
                                    26.6546,
                                    15.2578
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1171",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_189",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T02:12:11.673Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-192",
            "title": "Order item 192",
            "startDate": "2022-11-15T05:40:00.000Z",
            "endDate": "2022-11-15T09:10:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T05:40:00.000Z",
                            "endDate": "2022-11-15T06:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668490800000,
                            "endTime": 1668493800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.2626,
                                    6.7671
                                ],
                                [
                                    54.73,
                                    22.17
                                ],
                                [
                                    62.23,
                                    36.62
                                ],
                                [
                                    71.02,
                                    51.35
                                ],
                                [
                                    70.7031,
                                    51.6309
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
                            "startDate": "2022-11-15T06:30:00.000Z",
                            "endDate": "2022-11-15T07:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668493800000,
                            "endTime": 1668496800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                70.7031,
                                51.6309
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
                            "startDate": "2022-11-15T07:20:00.000Z",
                            "endDate": "2022-11-15T09:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668496800000,
                            "endTime": 1668503400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    70.7031,
                                    51.6309
                                ],
                                [
                                    58.46,
                                    29.39
                                ],
                                [
                                    46.56,
                                    6.49
                                ],
                                [
                                    46.2626,
                                    6.7671
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a1111",
                    "number": 5
                },
                {
                    "asset": "a1147",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_192",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668491700000,
                            "endTime": 1668494700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.675,
                                    43.0926
                                ],
                                [
                                    57.5,
                                    35.91
                                ],
                                [
                                    64.17,
                                    29.57
                                ],
                                [
                                    70.13,
                                    22.51
                                ],
                                [
                                    76.37,
                                    15.74
                                ],
                                [
                                    76.872,
                                    15.8303
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
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T09:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668494700000,
                            "endTime": 1668504300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                76.872,
                                15.8303
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
                            "startDate": "2022-11-15T09:25:00.000Z",
                            "endDate": "2022-11-15T10:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668504300000,
                            "endTime": 1668506700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.872,
                                    15.8303
                                ],
                                [
                                    64.69,
                                    29.28
                                ],
                                [
                                    51.81,
                                    43.04
                                ],
                                [
                                    51.675,
                                    43.0926
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1102",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_195",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T07:23:14.968Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-198",
            "title": "Order item 198",
            "startDate": "2022-11-15T05:55:00.000Z",
            "endDate": "2022-11-15T08:05:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a1153",
                    "number": 4
                },
                {
                    "asset": "a1159",
                    "number": 3
                },
                {
                    "asset": "a1192",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_198",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T02:34:47.802Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-201",
            "title": "Order item 201",
            "startDate": "2022-11-15T05:55:00.000Z",
            "endDate": "2022-11-15T06:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668491700000,
                            "endTime": 1668494700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.4881,
                                    6.1586
                                ],
                                [
                                    51.13,
                                    21.96
                                ],
                                [
                                    42.26,
                                    38.26
                                ],
                                [
                                    42.5706,
                                    38.2463
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a1156",
                    "number": 5
                },
                {
                    "asset": "a1147",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_201",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T03:30:21.425Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-204",
            "title": "Order item 204",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T11:05:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T07:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668492900000,
                            "endTime": 1668495900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.675,
                                    43.0926
                                ],
                                [
                                    45.08,
                                    36.15
                                ],
                                [
                                    37.51,
                                    28.25
                                ],
                                [
                                    30.23,
                                    20.62
                                ],
                                [
                                    24.23,
                                    13.28
                                ],
                                [
                                    23.7553,
                                    13.721
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
                            "endDate": "2022-11-15T09:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668495900000,
                            "endTime": 1668503100000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                23.7553,
                                13.721
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
                            "startDate": "2022-11-15T09:05:00.000Z",
                            "endDate": "2022-11-15T11:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668503100000,
                            "endTime": 1668510300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.7553,
                                    13.721
                                ],
                                [
                                    33.4,
                                    23.82
                                ],
                                [
                                    42.14,
                                    33.02
                                ],
                                [
                                    52.17,
                                    43.51
                                ],
                                [
                                    51.675,
                                    43.0926
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a1016",
                    "number": 0
                },
                {
                    "asset": "a1089",
                    "number": 3
                },
                {
                    "asset": "a1094",
                    "number": 0
                },
                {
                    "asset": "a1028",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_204",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T18:09:55.840Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-207",
            "title": "Order item 207",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T10:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T07:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668492900000,
                            "endTime": 1668495900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.4275,
                                    19.0741
                                ],
                                [
                                    28.53,
                                    25.34
                                ],
                                [
                                    30.67,
                                    30.64
                                ],
                                [
                                    34.1,
                                    36.23
                                ],
                                [
                                    33.7796,
                                    36.5243
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
                            "endDate": "2022-11-15T07:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668495900000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.223368800824424,
                                        37.7448761588305
                                    ],
                                    [
                                        32.223368800824424,
                                        35.284139100979566
                                    ],
                                    [
                                        35.28710384190951,
                                        35.284139100979566
                                    ],
                                    [
                                        35.28710384190951,
                                        37.7448761588305
                                    ],
                                    [
                                        32.223368800824424,
                                        37.7448761588305
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
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T10:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668498300000,
                            "endTime": 1668509700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.7796,
                                    36.5243
                                ],
                                [
                                    31.19,
                                    31.75
                                ],
                                [
                                    29.49,
                                    27.86
                                ],
                                [
                                    27.06,
                                    23.25
                                ],
                                [
                                    24.92,
                                    18.92
                                ],
                                [
                                    25.4275,
                                    19.0741
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1128",
                    "number": 3
                },
                {
                    "asset": "a1188",
                    "number": 1
                },
                {
                    "asset": "a1177",
                    "number": 2
                },
                {
                    "asset": "a1194",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_207",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T14:33:31.045Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-210",
            "title": "Order item 210",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T13:15:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T07:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668492900000,
                            "endTime": 1668495900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.3476,
                                    44.2583
                                ],
                                [
                                    77.78,
                                    21.25
                                ],
                                [
                                    77.311,
                                    21.1526
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
                            "endDate": "2022-11-15T10:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668495900000,
                            "endTime": 1668506700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                77.311,
                                21.1526
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
                            "startDate": "2022-11-15T10:05:00.000Z",
                            "endDate": "2022-11-15T13:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668506700000,
                            "endTime": 1668518100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.311,
                                    21.1526
                                ],
                                [
                                    73,
                                    44.3
                                ],
                                [
                                    73.3476,
                                    44.2583
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-point-recce",
            "ownAssets": [
                {
                    "asset": "a1094",
                    "number": 4
                },
                {
                    "asset": "a1042",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_210",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T16:41:07.040Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-213",
            "title": "Order item 213",
            "startDate": "2022-11-15T06:15:00.000Z",
            "endDate": "2022-11-15T12:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T07:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668492900000,
                            "endTime": 1668495900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.8094,
                                    31.5977
                                ],
                                [
                                    54.71,
                                    25.12
                                ],
                                [
                                    53.67,
                                    18.7
                                ],
                                [
                                    52.92,
                                    12.57
                                ],
                                [
                                    53.2887,
                                    12.1901
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
                            "endDate": "2022-11-15T09:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668495900000,
                            "endTime": 1668503700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        49.49778217991143,
                                        15.81185643272979
                                    ],
                                    [
                                        49.49778217991143,
                                        8.517993467236364
                                    ],
                                    [
                                        56.97671413474416,
                                        8.517993467236364
                                    ],
                                    [
                                        56.97671413474416,
                                        15.81185643272979
                                    ],
                                    [
                                        49.49778217991143,
                                        15.81185643272979
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
                            "startDate": "2022-11-15T09:15:00.000Z",
                            "endDate": "2022-11-15T12:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668503700000,
                            "endTime": 1668515100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        51.88959680195172,
                                        13.546763922950026
                                    ],
                                    [
                                        51.88959680195172,
                                        10.82645688328194
                                    ],
                                    [
                                        54.67352511710586,
                                        10.82645688328194
                                    ],
                                    [
                                        54.67352511710586,
                                        13.546763922950026
                                    ],
                                    [
                                        51.88959680195172,
                                        13.546763922950026
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
                            "startDate": "2022-11-15T12:25:00.000Z",
                            "endDate": "2022-11-15T12:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668515100000,
                            "endTime": 1668516300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    53.2887,
                                    12.1901
                                ],
                                [
                                    56.22,
                                    31.87
                                ],
                                [
                                    55.8094,
                                    31.5977
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a1020",
                    "number": 2
                },
                {
                    "asset": "a1050",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_213",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T08:32:43.826Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-216",
            "title": "Order item 216",
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
                            "force": "f-red",
                            "startTime": 1668492900000,
                            "endTime": 1668495900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.5286,
                                    21.5062
                                ],
                                [
                                    76.88,
                                    29.05
                                ],
                                [
                                    80.37,
                                    37.72
                                ],
                                [
                                    84.14,
                                    45.67
                                ],
                                [
                                    83.6848,
                                    45.2723
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
                            "force": "f-red",
                            "startTime": 1668495900000,
                            "endTime": 1668507300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        80.06537042134296,
                                        47.65471014149539
                                    ],
                                    [
                                        80.06537042134296,
                                        42.78491380048731
                                    ],
                                    [
                                        87.00644028127321,
                                        42.78491380048731
                                    ],
                                    [
                                        87.00644028127321,
                                        47.65471014149539
                                    ],
                                    [
                                        80.06537042134296,
                                        47.65471014149539
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
                            "force": "f-red",
                            "startTime": 1668507300000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.6848,
                                    45.2723
                                ],
                                [
                                    79.92,
                                    37.13
                                ],
                                [
                                    77.39,
                                    29.21
                                ],
                                [
                                    73.13,
                                    21.58
                                ],
                                [
                                    73.5286,
                                    21.5062
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1195",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_216",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T06:08:21.403Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-219",
            "title": "Order item 219",
            "startDate": "2022-11-15T06:25:00.000Z",
            "endDate": "2022-11-15T06:35:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a1130",
                    "number": 5
                },
                {
                    "asset": "a1131",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_219",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "asset": "a1018",
                    "number": 1
                },
                {
                    "asset": "a1101",
                    "number": 1
                },
                {
                    "asset": "a1030",
                    "number": 1
                },
                {
                    "asset": "a1059",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_222",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T18:31:38.927Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-225",
            "title": "Order item 225",
            "startDate": "2022-11-15T06:45:00.000Z",
            "endDate": "2022-11-15T11:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T07:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668494700000,
                            "endTime": 1668497700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.851,
                                    18.4216
                                ],
                                [
                                    75.36,
                                    45.98
                                ],
                                [
                                    75.6862,
                                    45.8862
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
                            "startDate": "2022-11-15T07:35:00.000Z",
                            "endDate": "2022-11-15T08:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668497700000,
                            "endTime": 1668501300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        69.99101589401296,
                                        49.452710097347236
                                    ],
                                    [
                                        69.99101589401296,
                                        42.07164624369299
                                    ],
                                    [
                                        80.67183485683454,
                                        42.07164624369299
                                    ],
                                    [
                                        80.67183485683454,
                                        49.452710097347236
                                    ],
                                    [
                                        69.99101589401296,
                                        49.452710097347236
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
                            "startDate": "2022-11-15T08:35:00.000Z",
                            "endDate": "2022-11-15T11:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668501300000,
                            "endTime": 1668510900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.6862,
                                    45.8862
                                ],
                                [
                                    72.53,
                                    38.63
                                ],
                                [
                                    70.22,
                                    32.22
                                ],
                                [
                                    67.19,
                                    25.09
                                ],
                                [
                                    64.44,
                                    18.25
                                ],
                                [
                                    64.851,
                                    18.4216
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1159",
                    "number": 3
                },
                {
                    "asset": "a1131",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_225",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "Sub-Surface",
                "roleId": "blue-sub",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T17:19:18.875Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-228",
            "title": "Order item 228",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T09:45:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1056",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_228",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T05:50:59.614Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-231",
            "title": "Order item 231",
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
                            "force": "f-red",
                            "startTime": 1668495300000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.872,
                                    15.8303
                                ],
                                [
                                    72.27,
                                    26.1
                                ],
                                [
                                    68.72,
                                    36.42
                                ],
                                [
                                    64.46,
                                    46.02
                                ],
                                [
                                    64.28,
                                    46.1877
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a1110",
                    "number": 2
                },
                {
                    "asset": "a1150",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_231",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668495300000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    47.9011,
                                    35.8427
                                ],
                                [
                                    62.05,
                                    24.67
                                ],
                                [
                                    62.1483,
                                    24.9734
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
                            "endDate": "2022-11-15T09:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668498300000,
                            "endTime": 1668504300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                62.1483,
                                24.9734
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
                            "startDate": "2022-11-15T09:25:00.000Z",
                            "endDate": "2022-11-15T10:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668504300000,
                            "endTime": 1668508500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.1483,
                                    24.9734
                                ],
                                [
                                    54.61,
                                    30.71
                                ],
                                [
                                    47.55,
                                    35.93
                                ],
                                [
                                    47.9011,
                                    35.8427
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1017",
                    "number": 3
                },
                {
                    "asset": "a1042",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_234",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T16:06:23.462Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-237",
            "title": "Order item 237",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T08:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668495300000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.8094,
                                    31.5977
                                ],
                                [
                                    30.86,
                                    20.71
                                ],
                                [
                                    30.6244,
                                    20.611
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
                            "endDate": "2022-11-15T08:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668498300000,
                            "endTime": 1668499500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        27.62303915562261,
                                        23.341107102782907
                                    ],
                                    [
                                        27.62303915562261,
                                        17.830933701713043
                                    ],
                                    [
                                        33.519097638694284,
                                        17.830933701713043
                                    ],
                                    [
                                        33.519097638694284,
                                        23.341107102782907
                                    ],
                                    [
                                        27.62303915562261,
                                        23.341107102782907
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
                            "endDate": "2022-11-15T08:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668499500000,
                            "endTime": 1668499500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.6244,
                                    20.611
                                ],
                                [
                                    36.67,
                                    23.68
                                ],
                                [
                                    43.6,
                                    25.64
                                ],
                                [
                                    49.82,
                                    28.89
                                ],
                                [
                                    55.31,
                                    31.41
                                ],
                                [
                                    55.8094,
                                    31.5977
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1077",
                    "number": 1
                },
                {
                    "asset": "a1087",
                    "number": 1
                },
                {
                    "asset": "a1028",
                    "number": 3
                },
                {
                    "asset": "a1093",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_237",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668495300000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.2069,
                                    50.3752
                                ],
                                [
                                    26.46,
                                    23.91
                                ],
                                [
                                    26.0866,
                                    23.9833
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
                            "force": "f-blue",
                            "startTime": 1668498300000,
                            "endTime": 1668500700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                26.0866,
                                23.9833
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
                            "force": "f-blue",
                            "startTime": 1668500700000,
                            "endTime": 1668503100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.0866,
                                    23.9833
                                ],
                                [
                                    44.8,
                                    50.32
                                ],
                                [
                                    45.2069,
                                    50.3752
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a1093",
                    "number": 5
                },
                {
                    "asset": "a1089",
                    "number": 5
                },
                {
                    "asset": "a1015",
                    "number": 2
                },
                {
                    "asset": "a1066",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_240",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "Sub-Surface",
                "roleId": "blue-sub",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668495300000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.5561,
                                    52.9523
                                ],
                                [
                                    49.36,
                                    30.98
                                ],
                                [
                                    33.53,
                                    9.37
                                ],
                                [
                                    33.9936,
                                    8.934
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
                            "force": "f-blue",
                            "startTime": 1668498300000,
                            "endTime": 1668502500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        31.247412290637687,
                                        11.613901396707774
                                    ],
                                    [
                                        31.247412290637687,
                                        6.234204889660237
                                    ],
                                    [
                                        36.69953553614508,
                                        6.234204889660237
                                    ],
                                    [
                                        36.69953553614508,
                                        11.613901396707774
                                    ],
                                    [
                                        31.247412290637687,
                                        11.613901396707774
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
                            "force": "f-blue",
                            "startTime": 1668502500000,
                            "endTime": 1668506100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        31.1913399166075,
                                        11.667878346698691
                                    ],
                                    [
                                        31.1913399166075,
                                        6.179413580584038
                                    ],
                                    [
                                        36.75396118528692,
                                        6.179413580584038
                                    ],
                                    [
                                        36.75396118528692,
                                        11.667878346698691
                                    ],
                                    [
                                        31.1913399166075,
                                        11.667878346698691
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
                            "force": "f-blue",
                            "startTime": 1668506100000,
                            "endTime": 1668508500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.9936,
                                    8.934
                                ],
                                [
                                    49.63,
                                    30.61
                                ],
                                [
                                    64.68,
                                    52.7
                                ],
                                [
                                    64.5561,
                                    52.9523
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a1066",
                    "number": 2
                },
                {
                    "asset": "a1047",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_243",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T02:29:35.164Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-246",
            "title": "Order item 246",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T11:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668495300000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.675,
                                    43.0926
                                ],
                                [
                                    54.19,
                                    30.29
                                ],
                                [
                                    56.92,
                                    18.71
                                ],
                                [
                                    59.93,
                                    6.41
                                ],
                                [
                                    59.4881,
                                    6.1586
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
                            "endDate": "2022-11-15T08:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668498300000,
                            "endTime": 1668500700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        59.17197258769971,
                                        6.472619379639859
                                    ],
                                    [
                                        59.17197258769971,
                                        5.844394798883375
                                    ],
                                    [
                                        59.803853614955635,
                                        5.844394798883375
                                    ],
                                    [
                                        59.803853614955635,
                                        6.472619379639859
                                    ],
                                    [
                                        59.17197258769971,
                                        6.472619379639859
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
                            "startDate": "2022-11-15T08:25:00.000Z",
                            "endDate": "2022-11-15T11:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668500700000,
                            "endTime": 1668510900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.4881,
                                    6.1586
                                ],
                                [
                                    55.4,
                                    24.69
                                ],
                                [
                                    51.8,
                                    42.7
                                ],
                                [
                                    51.675,
                                    43.0926
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-area-strike",
            "ownAssets": [
                {
                    "asset": "a1091",
                    "number": 3
                },
                {
                    "asset": "a1058",
                    "number": 3
                },
                {
                    "asset": "a1052",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_246",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T01:25:20.646Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-249",
            "title": "Order item 249",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T10:05:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668495300000,
                            "endTime": 1668498300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.8151,
                                    25.7048
                                ],
                                [
                                    60.05,
                                    37.36
                                ],
                                [
                                    77.83,
                                    48.55
                                ],
                                [
                                    77.5085,
                                    48.239
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
                            "endDate": "2022-11-15T08:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668498300000,
                            "endTime": 1668501300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                77.5085,
                                48.239
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
                            "startDate": "2022-11-15T08:35:00.000Z",
                            "endDate": "2022-11-15T10:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668501300000,
                            "endTime": 1668506700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.5085,
                                    48.239
                                ],
                                [
                                    59.75,
                                    36.87
                                ],
                                [
                                    41.42,
                                    25.93
                                ],
                                [
                                    41.8151,
                                    25.7048
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1173",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_249",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T06:05:06.918Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-252",
            "title": "Order item 252",
            "startDate": "2022-11-15T07:00:00.000Z",
            "endDate": "2022-11-15T12:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T07:00:00.000Z",
                            "endDate": "2022-11-15T07:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668495600000,
                            "endTime": 1668498600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.3006,
                                    54.3846
                                ],
                                [
                                    58.28,
                                    34.05
                                ],
                                [
                                    76.77,
                                    13.21
                                ],
                                [
                                    76.8599,
                                    13.4246
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
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T11:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668498600000,
                            "endTime": 1668510000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        76.15196787571341,
                                        14.110187041250951
                                    ],
                                    [
                                        76.15196787571341,
                                        12.737048971717257
                                    ],
                                    [
                                        77.56379397820784,
                                        12.737048971717257
                                    ],
                                    [
                                        77.56379397820784,
                                        14.110187041250951
                                    ],
                                    [
                                        76.15196787571341,
                                        14.110187041250951
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
                            "startDate": "2022-11-15T11:00:00.000Z",
                            "endDate": "2022-11-15T11:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668510000000,
                            "endTime": 1668512400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        74.74986618457224,
                                        15.449655998793661
                                    ],
                                    [
                                        74.74986618457224,
                                        11.38229240568162
                                    ],
                                    [
                                        78.93447448473589,
                                        11.38229240568162
                                    ],
                                    [
                                        78.93447448473589,
                                        15.449655998793661
                                    ],
                                    [
                                        74.74986618457224,
                                        15.449655998793661
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
                            "startDate": "2022-11-15T11:40:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668512400000,
                            "endTime": 1668513600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.8599,
                                    13.4246
                                ],
                                [
                                    58.76,
                                    33.62
                                ],
                                [
                                    40.14,
                                    54.29
                                ],
                                [
                                    40.3006,
                                    54.3846
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-air-recce",
            "ownAssets": [
                {
                    "asset": "a1012",
                    "number": 4
                },
                {
                    "asset": "a1046",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_252",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T00:28:53.981Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-255",
            "title": "Order item 255",
            "startDate": "2022-11-15T07:00:00.000Z",
            "endDate": "2022-11-15T12:40:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T07:00:00.000Z",
                            "endDate": "2022-11-15T07:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668495600000,
                            "endTime": 1668498600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.1633,
                                    17.3515
                                ],
                                [
                                    60.22,
                                    30.91
                                ],
                                [
                                    83.75,
                                    44.95
                                ],
                                [
                                    83.6848,
                                    45.2723
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
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T10:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668498600000,
                            "endTime": 1668508800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                83.6848,
                                45.2723
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
                            "startDate": "2022-11-15T10:40:00.000Z",
                            "endDate": "2022-11-15T12:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668508800000,
                            "endTime": 1668516000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.6848,
                                    45.2723
                                ],
                                [
                                    68.04,
                                    35.5
                                ],
                                [
                                    52.45,
                                    26.8
                                ],
                                [
                                    36.15,
                                    17.37
                                ],
                                [
                                    36.1633,
                                    17.3515
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1200",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_255",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T00:36:41.834Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-258",
            "title": "Order item 258",
            "startDate": "2022-11-15T07:10:00.000Z",
            "endDate": "2022-11-15T08:50:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a1148",
                    "number": 5
                },
                {
                    "asset": "a1153",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_258",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T14:28:30.478Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-261",
            "title": "Order item 261",
            "startDate": "2022-11-15T07:20:00.000Z",
            "endDate": "2022-11-15T08:50:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1148",
                    "number": 4
                },
                {
                    "asset": "a1139",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_261",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T10:04:19.913Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-264",
            "title": "Order item 264",
            "startDate": "2022-11-15T07:40:00.000Z",
            "endDate": "2022-11-15T11:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T08:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668498000000,
                            "endTime": 1668501000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.0676,
                                    37.5598
                                ],
                                [
                                    52.89,
                                    33.16
                                ],
                                [
                                    66.06,
                                    28.11
                                ],
                                [
                                    65.9443,
                                    28.2336
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
                            "startDate": "2022-11-15T08:30:00.000Z",
                            "endDate": "2022-11-15T09:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668501000000,
                            "endTime": 1668503400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        64.4625958789629,
                                        29.515093685493685
                                    ],
                                    [
                                        64.4625958789629,
                                        26.93651709392398
                                    ],
                                    [
                                        67.39062370220701,
                                        26.93651709392398
                                    ],
                                    [
                                        67.39062370220701,
                                        29.515093685493685
                                    ],
                                    [
                                        64.4625958789629,
                                        29.515093685493685
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
                            "startDate": "2022-11-15T09:10:00.000Z",
                            "endDate": "2022-11-15T10:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668503400000,
                            "endTime": 1668506400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        65.71435694988186,
                                        28.435608998311313
                                    ],
                                    [
                                        65.71435694988186,
                                        28.031207838169575
                                    ],
                                    [
                                        66.17337324329088,
                                        28.031207838169575
                                    ],
                                    [
                                        66.17337324329088,
                                        28.435608998311313
                                    ],
                                    [
                                        65.71435694988186,
                                        28.435608998311313
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
                            "startDate": "2022-11-15T10:00:00.000Z",
                            "endDate": "2022-11-15T11:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668506400000,
                            "endTime": 1668511800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    65.9443,
                                    28.2336
                                ],
                                [
                                    57.66,
                                    31.65
                                ],
                                [
                                    48.47,
                                    34.17
                                ],
                                [
                                    39.56,
                                    37.98
                                ],
                                [
                                    40.0676,
                                    37.5598
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a1102",
                    "number": 0
                },
                {
                    "asset": "a1078",
                    "number": 0
                },
                {
                    "asset": "a1082",
                    "number": 3
                },
                {
                    "asset": "a1016",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_264",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T19:24:10.137Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-267",
            "title": "Order item 267",
            "startDate": "2022-11-15T07:40:00.000Z",
            "endDate": "2022-11-15T10:40:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a1116",
                    "number": 1
                },
                {
                    "asset": "a1174",
                    "number": 4
                },
                {
                    "asset": "a1163",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_267",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T10:28:01.153Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-270",
            "title": "Order item 270",
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
                            "force": "f-blue",
                            "startTime": 1668498600000,
                            "endTime": 1668501600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.482,
                                    40.1729
                                ],
                                [
                                    37.73,
                                    35.97
                                ],
                                [
                                    52.11,
                                    30.9
                                ],
                                [
                                    66.77,
                                    27.11
                                ],
                                [
                                    67.1817,
                                    26.8514
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
                            "force": "f-blue",
                            "startTime": 1668501600000,
                            "endTime": 1668513000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        63.31490096178783,
                                        30.143616394400016
                                    ],
                                    [
                                        63.31490096178783,
                                        23.460047468188833
                                    ],
                                    [
                                        70.82660164496782,
                                        23.460047468188833
                                    ],
                                    [
                                        70.82660164496782,
                                        30.143616394400016
                                    ],
                                    [
                                        63.31490096178783,
                                        30.143616394400016
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
                            "force": "f-blue",
                            "startTime": 1668513000000,
                            "endTime": 1668517800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    67.1817,
                                    26.8514
                                ],
                                [
                                    52.06,
                                    30.98
                                ],
                                [
                                    37.13,
                                    35.31
                                ],
                                [
                                    22.48,
                                    39.91
                                ],
                                [
                                    22.482,
                                    40.1729
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1079",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_270",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T07:15:52.959Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-273",
            "title": "Order item 273",
            "startDate": "2022-11-15T07:50:00.000Z",
            "endDate": "2022-11-15T08:20:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a1199",
                    "number": 4
                },
                {
                    "asset": "a1131",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_273",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T17:47:45.555Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-276",
            "title": "Order item 276",
            "startDate": "2022-11-15T07:50:00.000Z",
            "endDate": "2022-11-15T08:00:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a1175",
                    "number": 0
                },
                {
                    "asset": "a1189",
                    "number": 3
                },
                {
                    "asset": "a1134",
                    "number": 0
                },
                {
                    "asset": "a1107",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_276",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T18:03:38.942Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-279",
            "title": "Order item 279",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T17:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668499800000,
                            "endTime": 1668502800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.5561,
                                    52.9523
                                ],
                                [
                                    34.98,
                                    27.52
                                ],
                                [
                                    34.5638,
                                    27.2426
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
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T11:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668502800000,
                            "endTime": 1668511800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        34.29491042013108,
                                        27.480892939715535
                                    ],
                                    [
                                        34.29491042013108,
                                        27.003795685201055
                                    ],
                                    [
                                        34.83153923738021,
                                        27.003795685201055
                                    ],
                                    [
                                        34.83153923738021,
                                        27.480892939715535
                                    ],
                                    [
                                        34.29491042013108,
                                        27.480892939715535
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
                            "startDate": "2022-11-15T11:30:00.000Z",
                            "endDate": "2022-11-15T14:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668511800000,
                            "endTime": 1668523200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.519776916214738,
                                        30.664128553676342
                                    ],
                                    [
                                        30.519776916214738,
                                        23.711934523755758
                                    ],
                                    [
                                        38.3627243684895,
                                        23.711934523755758
                                    ],
                                    [
                                        38.3627243684895,
                                        30.664128553676342
                                    ],
                                    [
                                        30.519776916214738,
                                        30.664128553676342
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
                            "startDate": "2022-11-15T14:40:00.000Z",
                            "endDate": "2022-11-15T17:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668523200000,
                            "endTime": 1668533400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.5638,
                                    27.2426
                                ],
                                [
                                    44.64,
                                    35.32
                                ],
                                [
                                    54.85,
                                    44.53
                                ],
                                [
                                    64.34,
                                    53.02
                                ],
                                [
                                    64.5561,
                                    52.9523
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-air-recce",
            "ownAssets": [
                {
                    "asset": "a1007",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_279",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T16:03:33.120Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-282",
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
                            "force": "f-red",
                            "startTime": 1668499800000,
                            "endTime": 1668502800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.3702,
                                    28.1412
                                ],
                                [
                                    42.44,
                                    31.94
                                ],
                                [
                                    40.51,
                                    34.74
                                ],
                                [
                                    38.87,
                                    37.82
                                ],
                                [
                                    38.5,
                                    41.18
                                ],
                                [
                                    38.0374,
                                    41.5472
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
                            "force": "f-red",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                38.0374,
                                41.5472
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
                            "force": "f-red",
                            "startTime": 1668505800000,
                            "endTime": 1668513000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0374,
                                    41.5472
                                ],
                                [
                                    39.17,
                                    38.37
                                ],
                                [
                                    40.24,
                                    35.13
                                ],
                                [
                                    41.59,
                                    31.18
                                ],
                                [
                                    43.22,
                                    28.51
                                ],
                                [
                                    43.3702,
                                    28.1412
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1189",
                    "number": 4
                },
                {
                    "asset": "a1175",
                    "number": 1
                },
                {
                    "asset": "a1187",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_282",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T11:47:28.088Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-285",
            "title": "Order item 285",
            "startDate": "2022-11-15T08:15:00.000Z",
            "endDate": "2022-11-15T11:55:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T08:15:00.000Z",
                            "endDate": "2022-11-15T09:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668500100000,
                            "endTime": 1668503100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.5575,
                                    26.8124
                                ],
                                [
                                    34.17,
                                    32.97
                                ],
                                [
                                    37.59,
                                    38.95
                                ],
                                [
                                    41.3,
                                    44.21
                                ],
                                [
                                    45.29,
                                    50.75
                                ],
                                [
                                    45.2069,
                                    50.3752
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
                            "startDate": "2022-11-15T09:05:00.000Z",
                            "endDate": "2022-11-15T09:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668503100000,
                            "endTime": 1668503100000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                45.2069,
                                50.3752
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
                            "startDate": "2022-11-15T09:05:00.000Z",
                            "endDate": "2022-11-15T11:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668503100000,
                            "endTime": 1668513300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.2069,
                                    50.3752
                                ],
                                [
                                    30.47,
                                    27.21
                                ],
                                [
                                    30.5575,
                                    26.8124
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1131",
                    "number": 0
                },
                {
                    "asset": "a1199",
                    "number": 5
                },
                {
                    "asset": "a1197",
                    "number": 0
                },
                {
                    "asset": "a1126",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_285",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T13:15:23.846Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-288",
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
                            "force": "f-red",
                            "startTime": 1668501300000,
                            "endTime": 1668504300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.9463,
                                    21.4275
                                ],
                                [
                                    43.52,
                                    23.7
                                ],
                                [
                                    57.01,
                                    24.88
                                ],
                                [
                                    69.78,
                                    27.35
                                ],
                                [
                                    81.84,
                                    29.1
                                ],
                                [
                                    82.3356,
                                    29.3382
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
                            "force": "f-red",
                            "startTime": 1668504300000,
                            "endTime": 1668515700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                82.3356,
                                29.3382
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
                            "force": "f-red",
                            "startTime": 1668515700000,
                            "endTime": 1668520500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    82.3356,
                                    29.3382
                                ],
                                [
                                    56.77,
                                    25.19
                                ],
                                [
                                    30.65,
                                    21.5
                                ],
                                [
                                    30.9463,
                                    21.4275
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1126",
                    "number": 1
                },
                {
                    "asset": "a1179",
                    "number": 5
                },
                {
                    "asset": "a1163",
                    "number": 4
                },
                {
                    "asset": "a1174",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_288",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.9499,
                                    52.8708
                                ],
                                [
                                    53.24,
                                    44.27
                                ],
                                [
                                    59.82,
                                    35.95
                                ],
                                [
                                    66.68,
                                    26.91
                                ],
                                [
                                    67.1817,
                                    26.8514
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
                            "force": "f-blue",
                            "startTime": 1668505200000,
                            "endTime": 1668516600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                67.1817,
                                26.8514
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
                            "force": "f-blue",
                            "startTime": 1668516600000,
                            "endTime": 1668523800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    67.1817,
                                    26.8514
                                ],
                                [
                                    45.45,
                                    53.1
                                ],
                                [
                                    45.9499,
                                    52.8708
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-point-recce",
            "ownAssets": [
                {
                    "asset": "a1074",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_291",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air Reconnaisance//Route in",
                            "startDate": "2022-11-15T08:50:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.7957,
                                    33.7266
                                ],
                                [
                                    74.24,
                                    26.48
                                ],
                                [
                                    72.76,
                                    18.3
                                ],
                                [
                                    71.56,
                                    11.41
                                ],
                                [
                                    72.0646,
                                    10.9422
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
                            "force": "f-blue",
                            "startTime": 1668505200000,
                            "endTime": 1668513600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        70.75689073603756,
                                        12.217517138744299
                                    ],
                                    [
                                        70.75689073603756,
                                        9.66136832172179
                                    ],
                                    [
                                        73.3610775088531,
                                        9.66136832172179
                                    ],
                                    [
                                        73.3610775088531,
                                        12.217517138744299
                                    ],
                                    [
                                        70.75689073603756,
                                        12.217517138744299
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
                            "endDate": "2022-11-15T13:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668513600000,
                            "endTime": 1668517200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        70.87939039989135,
                                        12.09880404196949
                                    ],
                                    [
                                        70.87939039989135,
                                        9.78106250379906
                                    ],
                                    [
                                        73.24057584605698,
                                        9.78106250379906
                                    ],
                                    [
                                        73.24057584605698,
                                        12.09880404196949
                                    ],
                                    [
                                        70.87939039989135,
                                        12.09880404196949
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
                            "startDate": "2022-11-15T13:00:00.000Z",
                            "endDate": "2022-11-15T13:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668517200000,
                            "endTime": 1668517200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.0646,
                                    10.9422
                                ],
                                [
                                    73.44,
                                    22.22
                                ],
                                [
                                    75.28,
                                    33.98
                                ],
                                [
                                    74.7957,
                                    33.7266
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-air-recce",
            "ownAssets": [
                {
                    "asset": "a1078",
                    "number": 3
                },
                {
                    "asset": "a1102",
                    "number": 4
                },
                {
                    "asset": "a1056",
                    "number": 5
                },
                {
                    "asset": "a1038",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_294",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T20:03:15.865Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-297",
            "title": "Order item 297",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T12:30:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T08:50:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.4138,
                                    30.2695
                                ],
                                [
                                    51.99,
                                    29.31
                                ],
                                [
                                    66.06,
                                    27.84
                                ],
                                [
                                    65.9443,
                                    28.2336
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
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668505200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                65.9443,
                                28.2336
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
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T12:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668505200000,
                            "endTime": 1668515400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    65.9443,
                                    28.2336
                                ],
                                [
                                    56.48,
                                    28.49
                                ],
                                [
                                    47.29,
                                    30.03
                                ],
                                [
                                    38.39,
                                    29.85
                                ],
                                [
                                    38.4138,
                                    30.2695
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a1038",
                    "number": 3
                },
                {
                    "asset": "a1048",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_297",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T08:50:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.3078,
                                    43.851
                                ],
                                [
                                    40.89,
                                    24.34
                                ],
                                [
                                    35.88,
                                    4.23
                                ],
                                [
                                    36.2015,
                                    4.0232
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
                            "force": "f-blue",
                            "startTime": 1668505200000,
                            "endTime": 1668514800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                36.2015,
                                4.0232
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
                            "force": "f-blue",
                            "startTime": 1668514800000,
                            "endTime": 1668516000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.2015,
                                    4.0232
                                ],
                                [
                                    46.38,
                                    44.05
                                ],
                                [
                                    46.3078,
                                    43.851
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1052",
                    "number": 5
                },
                {
                    "asset": "a1047",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_300",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T02:35:14.497Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-303",
            "title": "Order item 303",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T12:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T08:50:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.675,
                                    43.0926
                                ],
                                [
                                    52.76,
                                    16.42
                                ],
                                [
                                    52.361,
                                    16.4527
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
                            "endDate": "2022-11-15T12:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668505200000,
                            "endTime": 1668513600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        51.664808469450435,
                                        17.116908204292667
                                    ],
                                    [
                                        51.664808469450435,
                                        15.786209741760644
                                    ],
                                    [
                                        53.05243276374649,
                                        15.786209741760644
                                    ],
                                    [
                                        53.05243276374649,
                                        17.116908204292667
                                    ],
                                    [
                                        51.664808469450435,
                                        17.116908204292667
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
                            "startDate": "2022-11-15T12:00:00.000Z",
                            "endDate": "2022-11-15T12:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668513600000,
                            "endTime": 1668514200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        51.47483466216266,
                                        17.296933740767706
                                    ],
                                    [
                                        51.47483466216266,
                                        15.604775743452578
                                    ],
                                    [
                                        53.239469707815154,
                                        15.604775743452578
                                    ],
                                    [
                                        53.239469707815154,
                                        17.296933740767706
                                    ],
                                    [
                                        51.47483466216266,
                                        17.296933740767706
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
                            "startDate": "2022-11-15T12:10:00.000Z",
                            "endDate": "2022-11-15T12:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668514200000,
                            "endTime": 1668516600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.361,
                                    16.4527
                                ],
                                [
                                    51.29,
                                    42.84
                                ],
                                [
                                    51.675,
                                    43.0926
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a1022",
                    "number": 5
                },
                {
                    "asset": "a1099",
                    "number": 0
                },
                {
                    "asset": "a1010",
                    "number": 2
                },
                {
                    "asset": "a1045",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_303",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T14:27:14.998Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-306",
            "title": "Order item 306",
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
                            "force": "f-red",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.9463,
                                    21.4275
                                ],
                                [
                                    37.33,
                                    24.59
                                ],
                                [
                                    44.59,
                                    27.63
                                ],
                                [
                                    51.13,
                                    29.95
                                ],
                                [
                                    56.95,
                                    32.56
                                ],
                                [
                                    57.3068,
                                    32.85
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1145",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_306",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T00:03:16.290Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-309",
            "title": "Order item 309",
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
                            "force": "f-blue",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.3068,
                                    32.85
                                ],
                                [
                                    76.68,
                                    12.98
                                ],
                                [
                                    76.8599,
                                    13.4246
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-transit",
            "ownAssets": [
                {
                    "asset": "a1024",
                    "number": 4
                },
                {
                    "asset": "a1072",
                    "number": 4
                },
                {
                    "asset": "a1051",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_309",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T07:23:18.373Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-312",
            "title": "Order item 312",
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
                            "force": "f-red",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.621,
                                    3.8406
                                ],
                                [
                                    29.21,
                                    19.2
                                ],
                                [
                                    32.94,
                                    34.69
                                ],
                                [
                                    35.94,
                                    49.47
                                ],
                                [
                                    35.7766,
                                    49.776
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1157",
                    "number": 1
                },
                {
                    "asset": "a1190",
                    "number": 4
                },
                {
                    "asset": "a1154",
                    "number": 4
                },
                {
                    "asset": "a1146",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_312",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T20:27:21.246Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-315",
            "title": "Order item 315",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T10:50:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1046",
                    "number": 5
                },
                {
                    "asset": "a1065",
                    "number": 2
                },
                {
                    "asset": "a1014",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_315",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T15:15:24.910Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-318",
            "title": "Order item 318",
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
                            "force": "f-blue",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.5352,
                                    50.4091
                                ],
                                [
                                    33.67,
                                    8.8
                                ],
                                [
                                    33.9936,
                                    8.934
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-transit",
            "ownAssets": [
                {
                    "asset": "a1088",
                    "number": 0
                },
                {
                    "asset": "a1092",
                    "number": 5
                },
                {
                    "asset": "a1027",
                    "number": 4
                },
                {
                    "asset": "a1086",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_318",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T23:47:29.364Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-321",
            "title": "Order item 321",
            "startDate": "2022-11-15T08:50:00.000Z",
            "endDate": "2022-11-15T10:10:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T08:50:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668502200000,
                            "endTime": 1668505200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.2056,
                                    21.2464
                                ],
                                [
                                    60.63,
                                    31.86
                                ],
                                [
                                    70.36,
                                    41.77
                                ],
                                [
                                    70.047,
                                    41.9775
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
                            "force": "f-red",
                            "startTime": 1668505200000,
                            "endTime": 1668507000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                70.047,
                                41.9775
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
                            "endDate": "2022-11-15T10:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668507000000,
                            "endTime": 1668507000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    70.047,
                                    41.9775
                                ],
                                [
                                    51.59,
                                    21.26
                                ],
                                [
                                    51.2056,
                                    21.2464
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1186",
                    "number": 4
                },
                {
                    "asset": "a1176",
                    "number": 5
                },
                {
                    "asset": "a1193",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_321",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T09:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668502500000,
                            "endTime": 1668505500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.7799,
                                    52.5172
                                ],
                                [
                                    26.25,
                                    42.88
                                ],
                                [
                                    27.58,
                                    33.1
                                ],
                                [
                                    29.19,
                                    22.61
                                ],
                                [
                                    31.09,
                                    13.4
                                ],
                                [
                                    30.995,
                                    13.1216
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
                            "endDate": "2022-11-15T10:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668505500000,
                            "endTime": 1668509100000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                30.995,
                                13.1216
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
                            "startDate": "2022-11-15T10:45:00.000Z",
                            "endDate": "2022-11-15T13:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668509100000,
                            "endTime": 1668519300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.995,
                                    13.1216
                                ],
                                [
                                    29.06,
                                    26.74
                                ],
                                [
                                    27.24,
                                    39.47
                                ],
                                [
                                    24.71,
                                    52.49
                                ],
                                [
                                    24.7799,
                                    52.5172
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1041",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_324",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T10:03:40.645Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-327",
            "title": "Order item 327",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T12:25:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T09:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668502500000,
                            "endTime": 1668505500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.9936,
                                    8.934
                                ],
                                [
                                    47.8,
                                    21.69
                                ],
                                [
                                    61.86,
                                    33.7
                                ],
                                [
                                    75.2,
                                    46
                                ],
                                [
                                    75.6862,
                                    45.8862
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
                            "endDate": "2022-11-15T09:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668505500000,
                            "endTime": 1668506100000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                75.6862,
                                45.8862
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
                            "endDate": "2022-11-15T12:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668506100000,
                            "endTime": 1668515100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.6862,
                                    45.8862
                                ],
                                [
                                    62.07,
                                    33.77
                                ],
                                [
                                    47.64,
                                    20.83
                                ],
                                [
                                    33.49,
                                    9.18
                                ],
                                [
                                    33.9936,
                                    8.934
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a1148",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_327",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T19:47:47.470Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-330",
            "title": "Order item 330",
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
                            "force": "f-blue",
                            "startTime": 1668502500000,
                            "endTime": 1668505500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.266,
                                    35.7984
                                ],
                                [
                                    35.27,
                                    27.9
                                ],
                                [
                                    33.32,
                                    21.05
                                ],
                                [
                                    30.65,
                                    13.48
                                ],
                                [
                                    30.995,
                                    13.1216
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-transit",
            "ownAssets": [
                {
                    "asset": "a1012",
                    "number": 1
                },
                {
                    "asset": "a1055",
                    "number": 4
                },
                {
                    "asset": "a1028",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_330",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T19:15:55.087Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-333",
            "title": "Order item 333",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T15:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T09:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668502500000,
                            "endTime": 1668505500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.6194,
                                    5.225
                                ],
                                [
                                    70.51,
                                    15.71
                                ],
                                [
                                    56.6,
                                    26.38
                                ],
                                [
                                    41.98,
                                    37.34
                                ],
                                [
                                    41.632,
                                    36.9596
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
                            "endDate": "2022-11-15T12:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668505500000,
                            "endTime": 1668515100000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                41.632,
                                36.9596
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
                            "startDate": "2022-11-15T12:25:00.000Z",
                            "endDate": "2022-11-15T15:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668515100000,
                            "endTime": 1668525900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.632,
                                    36.9596
                                ],
                                [
                                    56.61,
                                    26.66
                                ],
                                [
                                    70.72,
                                    15.48
                                ],
                                [
                                    85.12,
                                    5.59
                                ],
                                [
                                    85.6194,
                                    5.225
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1129",
                    "number": 5
                },
                {
                    "asset": "a1157",
                    "number": 3
                },
                {
                    "asset": "a1116",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_333",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "asset": "a1100",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_336",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "asset": "a1029",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_339",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T12:04:22.679Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-342",
            "title": "Order item 342",
            "startDate": "2022-11-15T08:55:00.000Z",
            "endDate": "2022-11-15T12:35:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T09:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668502500000,
                            "endTime": 1668505500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.1795,
                                    13.965
                                ],
                                [
                                    40.87,
                                    24.07
                                ],
                                [
                                    42.7,
                                    33.32
                                ],
                                [
                                    45.81,
                                    42.86
                                ],
                                [
                                    45.505,
                                    43.3292
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
                            "endDate": "2022-11-15T10:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668505500000,
                            "endTime": 1668509700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                45.505,
                                43.3292
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
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T12:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668509700000,
                            "endTime": 1668515700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.505,
                                    43.3292
                                ],
                                [
                                    38.19,
                                    14.43
                                ],
                                [
                                    38.1795,
                                    13.965
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1112",
                    "number": 4
                },
                {
                    "asset": "a1193",
                    "number": 4
                },
                {
                    "asset": "a1108",
                    "number": 2
                },
                {
                    "asset": "a1148",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_342",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.7796,
                                    36.5243
                                ],
                                [
                                    46.02,
                                    26.61
                                ],
                                [
                                    58.65,
                                    16.09
                                ],
                                [
                                    58.6933,
                                    16.1374
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
                            "force": "f-blue",
                            "startTime": 1668505800000,
                            "endTime": 1668515400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                58.6933,
                                16.1374
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
                            "force": "f-blue",
                            "startTime": 1668515400000,
                            "endTime": 1668518400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.6933,
                                    16.1374
                                ],
                                [
                                    33.59,
                                    36.4
                                ],
                                [
                                    33.7796,
                                    36.5243
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1048",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_345",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T14:36:45.027Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-348",
            "title": "Order item 348",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T10:00:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1140",
                    "number": 2
                },
                {
                    "asset": "a1192",
                    "number": 0
                },
                {
                    "asset": "a1175",
                    "number": 0
                },
                {
                    "asset": "a1186",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_348",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T00:28:57.386Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-351",
            "title": "Order item 351",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T12:50:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.3218,
                                    35.5135
                                ],
                                [
                                    50.93,
                                    26.62
                                ],
                                [
                                    65.72,
                                    16.9
                                ],
                                [
                                    79.79,
                                    7.46
                                ],
                                [
                                    80.0119,
                                    7.4803
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
                            "endDate": "2022-11-15T10:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668505800000,
                            "endTime": 1668508200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                80.0119,
                                7.4803
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
                            "startDate": "2022-11-15T10:30:00.000Z",
                            "endDate": "2022-11-15T12:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668508200000,
                            "endTime": 1668516600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    80.0119,
                                    7.4803
                                ],
                                [
                                    58.1,
                                    21.59
                                ],
                                [
                                    36.59,
                                    35.12
                                ],
                                [
                                    36.3218,
                                    35.5135
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1086",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_351",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.2127,
                                    36.3453
                                ],
                                [
                                    62.9,
                                    20.64
                                ],
                                [
                                    63.278,
                                    20.6496
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
                            "force": "f-blue",
                            "startTime": 1668505800000,
                            "endTime": 1668512400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                63.278,
                                20.6496
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
                            "force": "f-blue",
                            "startTime": 1668512400000,
                            "endTime": 1668513000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.278,
                                    20.6496
                                ],
                                [
                                    71.21,
                                    28.85
                                ],
                                [
                                    78.65,
                                    36.58
                                ],
                                [
                                    78.2127,
                                    36.3453
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1087",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_354",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.0449,
                                    48.9989
                                ],
                                [
                                    71.76,
                                    41.3
                                ],
                                [
                                    69.56,
                                    34.68
                                ],
                                [
                                    67.64,
                                    27.34
                                ],
                                [
                                    67.1817,
                                    26.8514
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
                            "force": "f-blue",
                            "startTime": 1668505800000,
                            "endTime": 1668517200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        63.651172518813155,
                                        29.869798057603333
                                    ],
                                    [
                                        63.651172518813155,
                                        23.74994620214618
                                    ],
                                    [
                                        70.52627736216421,
                                        23.74994620214618
                                    ],
                                    [
                                        70.52627736216421,
                                        29.869798057603333
                                    ],
                                    [
                                        63.651172518813155,
                                        29.869798057603333
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
                            "force": "f-blue",
                            "startTime": 1668517200000,
                            "endTime": 1668526800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    67.1817,
                                    26.8514
                                ],
                                [
                                    74.48,
                                    49.3
                                ],
                                [
                                    74.0449,
                                    48.9989
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a1045",
                    "number": 5
                },
                {
                    "asset": "a1054",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_357",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "Sub-Surface",
                "roleId": "blue-sub",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T16:29:39.208Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-360",
            "title": "Order item 360",
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
                            "force": "f-blue",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    49.48,
                                    52.1008
                                ],
                                [
                                    49.59,
                                    41.79
                                ],
                                [
                                    50.88,
                                    31.65
                                ],
                                [
                                    51.44,
                                    20.79
                                ],
                                [
                                    51.2056,
                                    21.2464
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-transit",
            "ownAssets": [
                {
                    "asset": "a1056",
                    "number": 1
                },
                {
                    "asset": "a1050",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_360",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T09:17:54.729Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-363",
            "title": "Order item 363",
            "startDate": "2022-11-15T09:00:00.000Z",
            "endDate": "2022-11-15T09:20:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1023",
                    "number": 2
                },
                {
                    "asset": "a1100",
                    "number": 0
                },
                {
                    "asset": "a1010",
                    "number": 1
                },
                {
                    "asset": "a1044",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_363",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T15:50:11.042Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-366",
            "title": "Order item 366",
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
                            "force": "f-red",
                            "startTime": 1668502800000,
                            "endTime": 1668505800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.1444,
                                    20.0128
                                ],
                                [
                                    39.3,
                                    24.72
                                ],
                                [
                                    48.62,
                                    28.58
                                ],
                                [
                                    57.23,
                                    32.72
                                ],
                                [
                                    57.3068,
                                    32.85
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1144",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_366",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T20:06:28.144Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-369",
            "title": "Order item 369",
            "startDate": "2022-11-15T09:05:00.000Z",
            "endDate": "2022-11-15T11:45:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1121",
                    "number": 4
                },
                {
                    "asset": "a1168",
                    "number": 1
                },
                {
                    "asset": "a1146",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_369",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T22:06:46.037Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-372",
            "title": "Order item 372",
            "startDate": "2022-11-15T09:25:00.000Z",
            "endDate": "2022-11-15T10:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T09:25:00.000Z",
                            "endDate": "2022-11-15T10:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668504300000,
                            "endTime": 1668507300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    65.0776,
                                    26.035
                                ],
                                [
                                    58.27,
                                    34.59
                                ],
                                [
                                    51.92,
                                    42.61
                                ],
                                [
                                    51.675,
                                    43.0926
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1151",
                    "number": 1
                },
                {
                    "asset": "a1183",
                    "number": 4
                },
                {
                    "asset": "a1146",
                    "number": 4
                },
                {
                    "asset": "a1137",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_372",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T05:51:04.721Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-375",
            "title": "Order item 375",
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
                            "force": "f-blue",
                            "startTime": 1668505200000,
                            "endTime": 1668508200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.7386,
                                    48.605
                                ],
                                [
                                    55.41,
                                    36.28
                                ],
                                [
                                    51.32,
                                    23.2
                                ],
                                [
                                    46.51,
                                    10.4
                                ],
                                [
                                    46.7462,
                                    10.5287
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
                            "force": "f-blue",
                            "startTime": 1668508200000,
                            "endTime": 1668513000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.77646361929384,
                                        14.350000672087733
                                    ],
                                    [
                                        42.77646361929384,
                                        6.659220835238556
                                    ],
                                    [
                                        50.61805163961382,
                                        6.659220835238556
                                    ],
                                    [
                                        50.61805163961382,
                                        14.350000672087733
                                    ],
                                    [
                                        42.77646361929384,
                                        14.350000672087733
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
                            "force": "f-blue",
                            "startTime": 1668513000000,
                            "endTime": 1668520200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        44.27655062502478,
                                        12.92624211533388
                                    ],
                                    [
                                        44.27655062502478,
                                        8.112332572919788
                                    ],
                                    [
                                        49.177572670081716,
                                        8.112332572919788
                                    ],
                                    [
                                        49.177572670081716,
                                        12.92624211533388
                                    ],
                                    [
                                        44.27655062502478,
                                        12.92624211533388
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
                            "force": "f-blue",
                            "startTime": 1668520200000,
                            "endTime": 1668529800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.7462,
                                    10.5287
                                ],
                                [
                                    59.39,
                                    48.54
                                ],
                                [
                                    59.7386,
                                    48.605
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a1037",
                    "number": 0
                },
                {
                    "asset": "a1055",
                    "number": 4
                },
                {
                    "asset": "a1100",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_375",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T19:19:24.195Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-378",
            "title": "Order item 378",
            "startDate": "2022-11-15T09:40:00.000Z",
            "endDate": "2022-11-15T15:30:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T10:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668505200000,
                            "endTime": 1668508200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.6194,
                                    5.225
                                ],
                                [
                                    80.41,
                                    20.32
                                ],
                                [
                                    75.43,
                                    36.65
                                ],
                                [
                                    70.73,
                                    51.26
                                ],
                                [
                                    70.7031,
                                    51.6309
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
                            "endDate": "2022-11-15T12:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668508200000,
                            "endTime": 1668514800000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                70.7031,
                                51.6309
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
                            "startDate": "2022-11-15T12:20:00.000Z",
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668514800000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    70.7031,
                                    51.6309
                                ],
                                [
                                    75.57,
                                    35.93
                                ],
                                [
                                    80.54,
                                    20.32
                                ],
                                [
                                    85.79,
                                    4.99
                                ],
                                [
                                    85.6194,
                                    5.225
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a1176",
                    "number": 4
                },
                {
                    "asset": "a1180",
                    "number": 0
                },
                {
                    "asset": "a1114",
                    "number": 2
                },
                {
                    "asset": "a1172",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_378",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T22:31:44.460Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-381",
            "title": "Order item 381",
            "startDate": "2022-11-15T09:45:00.000Z",
            "endDate": "2022-11-15T11:35:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a1172",
                    "number": 2
                },
                {
                    "asset": "a1161",
                    "number": 0
                },
                {
                    "asset": "a1177",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_381",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668506700000,
                            "endTime": 1668509700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.3552,
                                    44.1199
                                ],
                                [
                                    76.1,
                                    32.18
                                ],
                                [
                                    77.36,
                                    20.76
                                ],
                                [
                                    77.311,
                                    21.1526
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
                            "force": "f-blue",
                            "startTime": 1668509700000,
                            "endTime": 1668511500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        73.87096733003415,
                                        24.25464246740276
                                    ],
                                    [
                                        73.87096733003415,
                                        17.983936655564985
                                    ],
                                    [
                                        80.6083203972461,
                                        17.983936655564985
                                    ],
                                    [
                                        80.6083203972461,
                                        24.25464246740276
                                    ],
                                    [
                                        73.87096733003415,
                                        24.25464246740276
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
                            "force": "f-blue",
                            "startTime": 1668511500000,
                            "endTime": 1668519900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        74.11908391079675,
                                        24.038114729565812
                                    ],
                                    [
                                        74.11908391079675,
                                        18.209555763998956
                                    ],
                                    [
                                        80.37966061717731,
                                        18.209555763998956
                                    ],
                                    [
                                        80.37966061717731,
                                        24.038114729565812
                                    ],
                                    [
                                        74.11908391079675,
                                        24.038114729565812
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
                            "force": "f-blue",
                            "startTime": 1668519900000,
                            "endTime": 1668530700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.311,
                                    21.1526
                                ],
                                [
                                    76.79,
                                    29.04
                                ],
                                [
                                    75.34,
                                    36
                                ],
                                [
                                    74.18,
                                    44.25
                                ],
                                [
                                    74.3552,
                                    44.1199
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-air-recce",
            "ownAssets": [
                {
                    "asset": "a1024",
                    "number": 5
                },
                {
                    "asset": "a1095",
                    "number": 1
                },
                {
                    "asset": "a1097",
                    "number": 3
                },
                {
                    "asset": "a1029",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_384",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T06:08:27.361Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-387",
            "title": "Order item 387",
            "startDate": "2022-11-15T10:05:00.000Z",
            "endDate": "2022-11-15T10:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T10:05:00.000Z",
                            "endDate": "2022-11-15T10:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668506700000,
                            "endTime": 1668509700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.995,
                                    13.1216
                                ],
                                [
                                    44.15,
                                    17.09
                                ],
                                [
                                    57.11,
                                    20.87
                                ],
                                [
                                    69.36,
                                    24.93
                                ],
                                [
                                    81.89,
                                    29.28
                                ],
                                [
                                    82.3356,
                                    29.3382
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1129",
                    "number": 2
                },
                {
                    "asset": "a1186",
                    "number": 2
                },
                {
                    "asset": "a1173",
                    "number": 1
                },
                {
                    "asset": "a1187",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_387",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "asset": "a1087",
                    "number": 1
                },
                {
                    "asset": "a1032",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_390",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T20:41:13.424Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-393",
            "title": "Order item 393",
            "startDate": "2022-11-15T10:05:00.000Z",
            "endDate": "2022-11-15T14:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T10:05:00.000Z",
                            "endDate": "2022-11-15T10:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668506700000,
                            "endTime": 1668509700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    84.4385,
                                    23.1228
                                ],
                                [
                                    38.4,
                                    30.68
                                ],
                                [
                                    38.4138,
                                    30.2695
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
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668509700000,
                            "endTime": 1668511500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                38.4138,
                                30.2695
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
                            "startDate": "2022-11-15T11:25:00.000Z",
                            "endDate": "2022-11-15T14:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668511500000,
                            "endTime": 1668522300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.4138,
                                    30.2695
                                ],
                                [
                                    61.8,
                                    26.44
                                ],
                                [
                                    84.55,
                                    22.97
                                ],
                                [
                                    84.4385,
                                    23.1228
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1202",
                    "number": 3
                },
                {
                    "asset": "a1132",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_393",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T20:33:37.642Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-396",
            "title": "Order item 396",
            "startDate": "2022-11-15T10:15:00.000Z",
            "endDate": "2022-11-15T10:25:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a1173",
                    "number": 2
                },
                {
                    "asset": "a1185",
                    "number": 3
                },
                {
                    "asset": "a1129",
                    "number": 2
                },
                {
                    "asset": "a1197",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_396",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T10:10:02.650Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-399",
            "title": "Order item 399",
            "startDate": "2022-11-15T10:25:00.000Z",
            "endDate": "2022-11-15T14:55:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:25:00.000Z",
                            "endDate": "2022-11-15T11:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668507900000,
                            "endTime": 1668510900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.0646,
                                    10.9422
                                ],
                                [
                                    64.1,
                                    17.6
                                ],
                                [
                                    57.17,
                                    24.29
                                ],
                                [
                                    49.51,
                                    30.26
                                ],
                                [
                                    41.14,
                                    36.51
                                ],
                                [
                                    41.632,
                                    36.9596
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
                            "startDate": "2022-11-15T11:15:00.000Z",
                            "endDate": "2022-11-15T12:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668510900000,
                            "endTime": 1668516300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                41.632,
                                36.9596
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
                            "startDate": "2022-11-15T12:45:00.000Z",
                            "endDate": "2022-11-15T14:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668516300000,
                            "endTime": 1668524100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    41.632,
                                    36.9596
                                ],
                                [
                                    72.47,
                                    11
                                ],
                                [
                                    72.0646,
                                    10.9422
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a1197",
                    "number": 3
                },
                {
                    "asset": "a1195",
                    "number": 3
                },
                {
                    "asset": "a1124",
                    "number": 4
                },
                {
                    "asset": "a1177",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_399",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668509100000,
                            "endTime": 1668512100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.6343,
                                    51.7468
                                ],
                                [
                                    49.34,
                                    28.87
                                ],
                                [
                                    46.47,
                                    6.42
                                ],
                                [
                                    46.2626,
                                    6.7671
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
                            "force": "f-blue",
                            "startTime": 1668512100000,
                            "endTime": 1668522300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                46.2626,
                                6.7671
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
                            "force": "f-blue",
                            "startTime": 1668522300000,
                            "endTime": 1668532500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.2626,
                                    6.7671
                                ],
                                [
                                    51.75,
                                    52.03
                                ],
                                [
                                    51.6343,
                                    51.7468
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1077",
                    "number": 4
                },
                {
                    "asset": "a1060",
                    "number": 2
                },
                {
                    "asset": "a1072",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_402",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T06:34:55.037Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-405",
            "title": "Order item 405",
            "startDate": "2022-11-15T10:45:00.000Z",
            "endDate": "2022-11-15T11:55:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a1113",
                    "number": 0
                },
                {
                    "asset": "a1179",
                    "number": 2
                },
                {
                    "asset": "a1176",
                    "number": 5
                },
                {
                    "asset": "a1200",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_405",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.9499,
                                    52.8708
                                ],
                                [
                                    53.9,
                                    44.8
                                ],
                                [
                                    61.78,
                                    36.67
                                ],
                                [
                                    69.96,
                                    28.83
                                ],
                                [
                                    77.41,
                                    21.27
                                ],
                                [
                                    77.311,
                                    21.1526
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
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668512700000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                77.311,
                                21.1526
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
                            "startDate": "2022-11-15T12:15:00.000Z",
                            "endDate": "2022-11-15T15:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668514500000,
                            "endTime": 1668525900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.311,
                                    21.1526
                                ],
                                [
                                    69.44,
                                    29.09
                                ],
                                [
                                    61.5,
                                    36.96
                                ],
                                [
                                    53.85,
                                    45.12
                                ],
                                [
                                    45.48,
                                    52.56
                                ],
                                [
                                    45.9499,
                                    52.8708
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1100",
                    "number": 5
                },
                {
                    "asset": "a1054",
                    "number": 3
                },
                {
                    "asset": "a1036",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_408",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "asset": "a1046",
                    "number": 1
                },
                {
                    "asset": "a1083",
                    "number": 3
                },
                {
                    "asset": "a1050",
                    "number": 2
                },
                {
                    "asset": "a1045",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_411",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T04:12:19.547Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-414",
            "title": "Order item 414",
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
                            "force": "f-blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.7386,
                                    48.605
                                ],
                                [
                                    58,
                                    40.1
                                ],
                                [
                                    56.45,
                                    31.8
                                ],
                                [
                                    55.2,
                                    23.78
                                ],
                                [
                                    55.2006,
                                    24.0609
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-transit",
            "ownAssets": [
                {
                    "asset": "a1045",
                    "number": 4
                },
                {
                    "asset": "a1067",
                    "number": 3
                },
                {
                    "asset": "a1020",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_414",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T20:12:49.298Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-417",
            "title": "Order item 417",
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
                            "force": "f-blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.1078,
                                    40.5031
                                ],
                                [
                                    61.86,
                                    24.85
                                ],
                                [
                                    62.1483,
                                    24.9734
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-transit",
            "ownAssets": [
                {
                    "asset": "a1097",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_417",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.156,
                                    43.4625
                                ],
                                [
                                    48.7,
                                    35.7
                                ],
                                [
                                    56.12,
                                    28.81
                                ],
                                [
                                    64.81,
                                    21.2
                                ],
                                [
                                    72.79,
                                    12.87
                                ],
                                [
                                    73.008,
                                    13.2894
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
                            "force": "f-blue",
                            "startTime": 1668512700000,
                            "endTime": 1668513900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                73.008,
                                13.2894
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
                            "force": "f-blue",
                            "startTime": 1668513900000,
                            "endTime": 1668523500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.008,
                                    13.2894
                                ],
                                [
                                    56.98,
                                    28
                                ],
                                [
                                    40.36,
                                    43.13
                                ],
                                [
                                    40.156,
                                    43.4625
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1009",
                    "number": 3
                },
                {
                    "asset": "a1099",
                    "number": 4
                },
                {
                    "asset": "a1022",
                    "number": 0
                },
                {
                    "asset": "a1070",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_420",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T13:25:51.172Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-423",
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
                            "force": "f-red",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.9463,
                                    21.4275
                                ],
                                [
                                    30.64,
                                    28.27
                                ],
                                [
                                    30.2,
                                    34.98
                                ],
                                [
                                    30.04,
                                    40.98
                                ],
                                [
                                    30.16,
                                    47.26
                                ],
                                [
                                    30.3313,
                                    47.734
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
                            "force": "f-red",
                            "startTime": 1668512700000,
                            "endTime": 1668517500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                30.3313,
                                47.734
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
                            "force": "f-red",
                            "startTime": 1668517500000,
                            "endTime": 1668524700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.3313,
                                    47.734
                                ],
                                [
                                    30.93,
                                    39.09
                                ],
                                [
                                    30.68,
                                    30.62
                                ],
                                [
                                    30.73,
                                    21.43
                                ],
                                [
                                    30.9463,
                                    21.4275
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1170",
                    "number": 2
                },
                {
                    "asset": "a1149",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_423",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T06:38:23.294Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-426",
            "title": "Order item 426",
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
                            "force": "f-blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    82.8963,
                                    29.1149
                                ],
                                [
                                    75.08,
                                    21.06
                                ],
                                [
                                    67.4,
                                    14.13
                                ],
                                [
                                    59,
                                    6.49
                                ],
                                [
                                    59.4881,
                                    6.1586
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a1088",
                    "number": 2
                },
                {
                    "asset": "a1052",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_426",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T13:34:56.207Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-429",
            "title": "Order item 429",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T15:35:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.5978,
                                    3.938
                                ],
                                [
                                    43.68,
                                    41.81
                                ],
                                [
                                    43.4885,
                                    41.4004
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
                            "endDate": "2022-11-15T13:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668512700000,
                            "endTime": 1668519300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                43.4885,
                                41.4004
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
                            "startDate": "2022-11-15T13:35:00.000Z",
                            "endDate": "2022-11-15T15:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668519300000,
                            "endTime": 1668526500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.4885,
                                    41.4004
                                ],
                                [
                                    49.7,
                                    22.4
                                ],
                                [
                                    55.4,
                                    3.87
                                ],
                                [
                                    55.5978,
                                    3.938
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1162",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_429",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.0435,
                                    37.9075
                                ],
                                [
                                    40.07,
                                    21.25
                                ],
                                [
                                    36.41,
                                    3.9
                                ],
                                [
                                    36.2015,
                                    4.0232
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
                            "force": "f-blue",
                            "startTime": 1668512700000,
                            "endTime": 1668513300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                36.2015,
                                4.0232
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
                            "force": "f-blue",
                            "startTime": 1668513300000,
                            "endTime": 1668521100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.2015,
                                    4.0232
                                ],
                                [
                                    40.51,
                                    21.35
                                ],
                                [
                                    44.36,
                                    38.21
                                ],
                                [
                                    44.0435,
                                    37.9075
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1090",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_432",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T04:40:04.405Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-435",
            "title": "Order item 435",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T12:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T10:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668509700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.3006,
                                    54.3846
                                ],
                                [
                                    41.81,
                                    46.9
                                ],
                                [
                                    42.27,
                                    40.36
                                ],
                                [
                                    43.02,
                                    33.1
                                ],
                                [
                                    44.04,
                                    26.13
                                ],
                                [
                                    44.5474,
                                    26.4284
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
                            "endDate": "2022-11-15T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668512700000,
                            "endTime": 1668512700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        40.96537043971996,
                                        29.502059978743024
                                    ],
                                    [
                                        40.96537043971996,
                                        23.27017949934122
                                    ],
                                    [
                                        47.940815245016715,
                                        23.27017949934122
                                    ],
                                    [
                                        47.940815245016715,
                                        29.502059978743024
                                    ],
                                    [
                                        40.96537043971996,
                                        29.502059978743024
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
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T12:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668512700000,
                            "endTime": 1668516300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.5474,
                                    26.4284
                                ],
                                [
                                    42.84,
                                    35.67
                                ],
                                [
                                    41.24,
                                    45.02
                                ],
                                [
                                    39.92,
                                    54.65
                                ],
                                [
                                    40.3006,
                                    54.3846
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a1074",
                    "number": 5
                },
                {
                    "asset": "a1091",
                    "number": 1
                },
                {
                    "asset": "a1038",
                    "number": 5
                },
                {
                    "asset": "a1013",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_435",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T20:48:39.690Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-438",
            "title": "Order item 438",
            "startDate": "2022-11-15T10:55:00.000Z",
            "endDate": "2022-11-15T11:45:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a1113",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_438",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668510300000,
                            "endTime": 1668513300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.1087,
                                    50.9161
                                ],
                                [
                                    47.34,
                                    30.77
                                ],
                                [
                                    47.02,
                                    10.07
                                ],
                                [
                                    46.7462,
                                    10.5287
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
                            "force": "f-blue",
                            "startTime": 1668513300000,
                            "endTime": 1668520500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        44.59013220750389,
                                        12.625372988775506
                                    ],
                                    [
                                        44.59013220750389,
                                        8.417650166810258
                                    ],
                                    [
                                        48.873032595997415,
                                        8.417650166810258
                                    ],
                                    [
                                        48.873032595997415,
                                        12.625372988775506
                                    ],
                                    [
                                        44.59013220750389,
                                        12.625372988775506
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
                            "force": "f-blue",
                            "startTime": 1668520500000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.7462,
                                    10.5287
                                ],
                                [
                                    47.27,
                                    23.61
                                ],
                                [
                                    47.88,
                                    37.77
                                ],
                                [
                                    47.77,
                                    51.22
                                ],
                                [
                                    48.1087,
                                    50.9161
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1003",
                    "number": 5
                },
                {
                    "asset": "a1091",
                    "number": 1
                },
                {
                    "asset": "a1010",
                    "number": 4
                },
                {
                    "asset": "a1053",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_441",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T22:17:52.631Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-444",
            "title": "Order item 444",
            "startDate": "2022-11-15T11:05:00.000Z",
            "endDate": "2022-11-15T11:55:00.000Z",
            "location": [
                {
                    "uniqid": "ab1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Ballistic Strike//Route to target",
                            "startDate": "2022-11-15T11:05:00.000Z",
                            "endDate": "2022-11-15T11:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668510300000,
                            "endTime": 1668513300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.5706,
                                    38.2463
                                ],
                                [
                                    40.02,
                                    31.11
                                ],
                                [
                                    38.28,
                                    24.79
                                ],
                                [
                                    35.82,
                                    17.75
                                ],
                                [
                                    33.65,
                                    10.99
                                ],
                                [
                                    34.0549,
                                    11.1092
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-ballistic-strike",
            "ownAssets": [
                {
                    "asset": "a1053",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_444",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T07:38:30.287Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-447",
            "title": "Order item 447",
            "startDate": "2022-11-15T11:05:00.000Z",
            "endDate": "2022-11-15T11:55:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T11:05:00.000Z",
                            "endDate": "2022-11-15T11:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668510300000,
                            "endTime": 1668513300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.4099,
                                    5.7494
                                ],
                                [
                                    67.85,
                                    17.88
                                ],
                                [
                                    68.57,
                                    30.29
                                ],
                                [
                                    69.58,
                                    41.99
                                ],
                                [
                                    70.047,
                                    41.9775
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a1155",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_447",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T11:10:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668510600000,
                            "endTime": 1668513600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.6848,
                                    45.2723
                                ],
                                [
                                    82.84,
                                    34.51
                                ],
                                [
                                    81.45,
                                    25.18
                                ],
                                [
                                    81.0946,
                                    24.7228
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
                            "force": "f-blue",
                            "startTime": 1668513600000,
                            "endTime": 1668518400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                81.0946,
                                24.7228
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
                            "force": "f-blue",
                            "startTime": 1668518400000,
                            "endTime": 1668521400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    81.0946,
                                    24.7228
                                ],
                                [
                                    81.98,
                                    31.28
                                ],
                                [
                                    82.92,
                                    38.9
                                ],
                                [
                                    84.15,
                                    44.8
                                ],
                                [
                                    83.6848,
                                    45.2723
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a1014",
                    "number": 5
                },
                {
                    "asset": "a1055",
                    "number": 0
                },
                {
                    "asset": "a1027",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_450",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T19:31:47.971Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-453",
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
                            "force": "f-red",
                            "startTime": 1668510600000,
                            "endTime": 1668513600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.6194,
                                    5.225
                                ],
                                [
                                    80.19,
                                    17.14
                                ],
                                [
                                    74.97,
                                    29.27
                                ],
                                [
                                    70.04,
                                    41.68
                                ],
                                [
                                    70.047,
                                    41.9775
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
                            "force": "f-red",
                            "startTime": 1668513600000,
                            "endTime": 1668519600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        68.07244676155955,
                                        43.39559164092592
                                    ],
                                    [
                                        68.07244676155955,
                                        40.52705891001391
                                    ],
                                    [
                                        71.93456985649217,
                                        40.52705891001391
                                    ],
                                    [
                                        71.93456985649217,
                                        43.39559164092592
                                    ],
                                    [
                                        68.07244676155955,
                                        43.39559164092592
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
                            "force": "f-red",
                            "startTime": 1668519600000,
                            "endTime": 1668531000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    70.047,
                                    41.9775
                                ],
                                [
                                    73.76,
                                    33.01
                                ],
                                [
                                    77.38,
                                    23.94
                                ],
                                [
                                    81.28,
                                    14.16
                                ],
                                [
                                    85.46,
                                    5.66
                                ],
                                [
                                    85.6194,
                                    5.225
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1126",
                    "number": 2
                },
                {
                    "asset": "a1152",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_453",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T14:04:27.999Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-456",
            "title": "Order item 456",
            "startDate": "2022-11-15T11:10:00.000Z",
            "endDate": "2022-11-15T12:00:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T11:10:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668510600000,
                            "endTime": 1668513600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.5978,
                                    3.938
                                ],
                                [
                                    56.06,
                                    18.66
                                ],
                                [
                                    57.02,
                                    32.86
                                ],
                                [
                                    57.3068,
                                    32.85
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1191",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_456",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668511500000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.3297,
                                    40.4652
                                ],
                                [
                                    52.9,
                                    33.04
                                ],
                                [
                                    56.7,
                                    25.84
                                ],
                                [
                                    60.79,
                                    17.92
                                ],
                                [
                                    61.017,
                                    18.0384
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
                            "force": "f-blue",
                            "startTime": 1668514500000,
                            "endTime": 1668515700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        58.48167673672801,
                                        20.398352275886293
                                    ],
                                    [
                                        58.48167673672801,
                                        15.646298566892781
                                    ],
                                    [
                                        63.48473966879139,
                                        15.646298566892781
                                    ],
                                    [
                                        63.48473966879139,
                                        20.398352275886293
                                    ],
                                    [
                                        58.48167673672801,
                                        20.398352275886293
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
                            "force": "f-blue",
                            "startTime": 1668515700000,
                            "endTime": 1668524700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        60.72426251963572,
                                        18.316086645004567
                                    ],
                                    [
                                        60.72426251963572,
                                        17.76027436924908
                                    ],
                                    [
                                        61.308814132384335,
                                        17.76027436924908
                                    ],
                                    [
                                        61.308814132384335,
                                        18.316086645004567
                                    ],
                                    [
                                        60.72426251963572,
                                        18.316086645004567
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
                            "force": "f-blue",
                            "startTime": 1668524700000,
                            "endTime": 1668526500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.017,
                                    18.0384
                                ],
                                [
                                    48.75,
                                    40.55
                                ],
                                [
                                    48.3297,
                                    40.4652
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a1015",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_459",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T04:21:50.427Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-462",
            "title": "Order item 462",
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
                            "force": "f-red",
                            "startTime": 1668511500000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    29.0435,
                                    17.988
                                ],
                                [
                                    32.61,
                                    24.98
                                ],
                                [
                                    36.41,
                                    31.22
                                ],
                                [
                                    40.51,
                                    37.75
                                ],
                                [
                                    40.0676,
                                    37.5598
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
                            "force": "f-red",
                            "startTime": 1668514500000,
                            "endTime": 1668520500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        35.83739804143812,
                                        40.693671813981005
                                    ],
                                    [
                                        35.83739804143812,
                                        34.287378034023064
                                    ],
                                    [
                                        43.9490066386566,
                                        34.287378034023064
                                    ],
                                    [
                                        43.9490066386566,
                                        40.693671813981005
                                    ],
                                    [
                                        35.83739804143812,
                                        40.693671813981005
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
                            "force": "f-red",
                            "startTime": 1668520500000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.0676,
                                    37.5598
                                ],
                                [
                                    36.56,
                                    31.21
                                ],
                                [
                                    32.3,
                                    24.12
                                ],
                                [
                                    29.33,
                                    18.31
                                ],
                                [
                                    29.0435,
                                    17.988
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1190",
                    "number": 1
                },
                {
                    "asset": "a1173",
                    "number": 1
                },
                {
                    "asset": "a1183",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_462",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T08:06:32.826Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-465",
            "title": "Order item 465",
            "startDate": "2022-11-15T11:25:00.000Z",
            "endDate": "2022-11-15T15:55:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T11:25:00.000Z",
                            "endDate": "2022-11-15T12:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668511500000,
                            "endTime": 1668514500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.2618,
                                    11.3066
                                ],
                                [
                                    59.66,
                                    48.23
                                ],
                                [
                                    59.7386,
                                    48.605
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
                            "startDate": "2022-11-15T12:15:00.000Z",
                            "endDate": "2022-11-15T12:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668514500000,
                            "endTime": 1668516900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                59.7386,
                                48.605
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
                            "startDate": "2022-11-15T12:55:00.000Z",
                            "endDate": "2022-11-15T15:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668516900000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.7386,
                                    48.605
                                ],
                                [
                                    43.91,
                                    11.23
                                ],
                                [
                                    44.2618,
                                    11.3066
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1124",
                    "number": 1
                },
                {
                    "asset": "a1189",
                    "number": 5
                },
                {
                    "asset": "a1185",
                    "number": 3
                },
                {
                    "asset": "a1111",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_465",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T17:35:16.016Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-468",
            "title": "Order item 468",
            "startDate": "2022-11-15T11:40:00.000Z",
            "endDate": "2022-11-15T12:30:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T11:40:00.000Z",
                            "endDate": "2022-11-15T12:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668512400000,
                            "endTime": 1668515400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.4275,
                                    19.0741
                                ],
                                [
                                    37.86,
                                    22.61
                                ],
                                [
                                    49.37,
                                    25.23
                                ],
                                [
                                    61.16,
                                    29.13
                                ],
                                [
                                    61.5673,
                                    28.7684
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-transit",
            "ownAssets": [
                {
                    "asset": "a1111",
                    "number": 5
                },
                {
                    "asset": "a1162",
                    "number": 2
                },
                {
                    "asset": "a1143",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_468",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T11:55:00.000Z",
                            "endDate": "2022-11-15T12:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668513300000,
                            "endTime": 1668516300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.9796,
                                    45.3915
                                ],
                                [
                                    61.03,
                                    29.15
                                ],
                                [
                                    72.58,
                                    13.41
                                ],
                                [
                                    73.008,
                                    13.2894
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
                            "startDate": "2022-11-15T12:45:00.000Z",
                            "endDate": "2022-11-15T12:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668516300000,
                            "endTime": 1668516300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                73.008,
                                13.2894
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
                            "startDate": "2022-11-15T12:45:00.000Z",
                            "endDate": "2022-11-15T15:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668516300000,
                            "endTime": 1668526500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.008,
                                    13.2894
                                ],
                                [
                                    49.1,
                                    44.99
                                ],
                                [
                                    48.9796,
                                    45.3915
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1051",
                    "number": 1
                },
                {
                    "asset": "a1087",
                    "number": 4
                },
                {
                    "asset": "a1054",
                    "number": 2
                },
                {
                    "asset": "a1048",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_471",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T13:44:44.767Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-474",
            "title": "Order item 474",
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
                            "force": "f-red",
                            "startTime": 1668513300000,
                            "endTime": 1668516300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.2015,
                                    4.0232
                                ],
                                [
                                    39.94,
                                    16.41
                                ],
                                [
                                    42.7,
                                    27.83
                                ],
                                [
                                    45.76,
                                    40.53
                                ],
                                [
                                    49.09,
                                    52.52
                                ],
                                [
                                    49.48,
                                    52.1008
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a1148",
                    "number": 3
                },
                {
                    "asset": "a1169",
                    "number": 1
                },
                {
                    "asset": "a1121",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_474",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T00:25:30.329Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-477",
            "title": "Order item 477",
            "startDate": "2022-11-15T12:00:00.000Z",
            "endDate": "2022-11-15T13:30:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1197",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_477",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668514800000,
                            "endTime": 1668517800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.0337,
                                    53.6592
                                ],
                                [
                                    38.18,
                                    43.45
                                ],
                                [
                                    45.3,
                                    33.21
                                ],
                                [
                                    51.7,
                                    22.26
                                ],
                                [
                                    57.39,
                                    11.59
                                ],
                                [
                                    57.8808,
                                    11.9371
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
                            "force": "f-blue",
                            "startTime": 1668517800000,
                            "endTime": 1668527400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                57.8808,
                                11.9371
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
                            "force": "f-blue",
                            "startTime": 1668527400000,
                            "endTime": 1668529200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.8808,
                                    11.9371
                                ],
                                [
                                    49.41,
                                    25.34
                                ],
                                [
                                    41.04,
                                    39.85
                                ],
                                [
                                    31.96,
                                    53.64
                                ],
                                [
                                    32.0337,
                                    53.6592
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1003",
                    "number": 3
                },
                {
                    "asset": "a1096",
                    "number": 2
                },
                {
                    "asset": "a1018",
                    "number": 4
                },
                {
                    "asset": "a1065",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_480",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T06:59:03.824Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-483",
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
                            "force": "f-red",
                            "startTime": 1668514800000,
                            "endTime": 1668517800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.6244,
                                    20.611
                                ],
                                [
                                    32.35,
                                    35.64
                                ],
                                [
                                    34.38,
                                    49.97
                                ],
                                [
                                    34.3353,
                                    49.9355
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
                            "force": "f-red",
                            "startTime": 1668517800000,
                            "endTime": 1668525600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                34.3353,
                                49.9355
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
                            "force": "f-red",
                            "startTime": 1668525600000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.3353,
                                    49.9355
                                ],
                                [
                                    30.53,
                                    21
                                ],
                                [
                                    30.6244,
                                    20.611
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1165",
                    "number": 0
                },
                {
                    "asset": "a1143",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_483",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T18:51:51.757Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-486",
            "title": "Order item 486",
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
                            "force": "f-red",
                            "startTime": 1668515100000,
                            "endTime": 1668518100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.9578,
                                    22.4723
                                ],
                                [
                                    46.41,
                                    33.34
                                ],
                                [
                                    46.31,
                                    43.65
                                ],
                                [
                                    46.3078,
                                    43.851
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
                            "force": "f-red",
                            "startTime": 1668518100000,
                            "endTime": 1668519900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                46.3078,
                                43.851
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
                            "force": "f-red",
                            "startTime": 1668519900000,
                            "endTime": 1668521100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.3078,
                                    43.851
                                ],
                                [
                                    46.47,
                                    33.34
                                ],
                                [
                                    47.05,
                                    22.24
                                ],
                                [
                                    46.9578,
                                    22.4723
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a1181",
                    "number": 1
                },
                {
                    "asset": "a1144",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_486",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T20:28:40.480Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-489",
            "title": "Order item 489",
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
                            "force": "f-red",
                            "startTime": 1668516300000,
                            "endTime": 1668519300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    79.6806,
                                    5.7111
                                ],
                                [
                                    69.33,
                                    14.84
                                ],
                                [
                                    58.79,
                                    23.78
                                ],
                                [
                                    48.53,
                                    33
                                ],
                                [
                                    37.56,
                                    41.51
                                ],
                                [
                                    38.0374,
                                    41.5472
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
                            "force": "f-red",
                            "startTime": 1668519300000,
                            "endTime": 1668522900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                38.0374,
                                41.5472
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
                            "force": "f-red",
                            "startTime": 1668522900000,
                            "endTime": 1668525900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0374,
                                    41.5472
                                ],
                                [
                                    51.5,
                                    29.72
                                ],
                                [
                                    66.04,
                                    17.97
                                ],
                                [
                                    79.85,
                                    5.51
                                ],
                                [
                                    79.6806,
                                    5.7111
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1152",
                    "number": 5
                },
                {
                    "asset": "a1198",
                    "number": 2
                },
                {
                    "asset": "a1174",
                    "number": 2
                },
                {
                    "asset": "a1177",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_489",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T11:49:29.994Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-492",
            "title": "Order item 492",
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
                            "force": "f-blue",
                            "startTime": 1668517200000,
                            "endTime": 1668520200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    82.3356,
                                    29.3382
                                ],
                                [
                                    76.66,
                                    28.75
                                ],
                                [
                                    70.23,
                                    28.42
                                ],
                                [
                                    64.08,
                                    27.36
                                ],
                                [
                                    64.2691,
                                    27.553
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
                            "force": "f-blue",
                            "startTime": 1668520200000,
                            "endTime": 1668528000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                64.2691,
                                27.553
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
                            "force": "f-blue",
                            "startTime": 1668528000000,
                            "endTime": 1668535800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.2691,
                                    27.553
                                ],
                                [
                                    72.96,
                                    28.79
                                ],
                                [
                                    82.07,
                                    29.45
                                ],
                                [
                                    82.3356,
                                    29.3382
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a1077",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_492",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "Sub-Surface",
                "roleId": "blue-sub",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T00:54:20.299Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-495",
            "title": "Order item 495",
            "startDate": "2022-11-15T13:00:00.000Z",
            "endDate": "2022-11-15T15:30:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T13:00:00.000Z",
                            "endDate": "2022-11-15T13:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668517200000,
                            "endTime": 1668520200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.3068,
                                    32.85
                                ],
                                [
                                    55.82,
                                    26.91
                                ],
                                [
                                    54.41,
                                    22.05
                                ],
                                [
                                    52.29,
                                    16.47
                                ],
                                [
                                    52.361,
                                    16.4527
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
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668520200000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                52.361,
                                16.4527
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
                            "startDate": "2022-11-15T15:30:00.000Z",
                            "endDate": "2022-11-15T15:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668526200000,
                            "endTime": 1668526200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.361,
                                    16.4527
                                ],
                                [
                                    56.83,
                                    32.97
                                ],
                                [
                                    57.3068,
                                    32.85
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a1058",
                    "number": 1
                },
                {
                    "asset": "a1075",
                    "number": 5
                },
                {
                    "asset": "a1021",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_495",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T11:43:11.394Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-498",
            "title": "Order item 498",
            "startDate": "2022-11-15T13:00:00.000Z",
            "endDate": "2022-11-15T15:00:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1093",
                    "number": 3
                },
                {
                    "asset": "a1094",
                    "number": 1
                },
                {
                    "asset": "a1026",
                    "number": 5
                },
                {
                    "asset": "a1083",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_498",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668517200000,
                            "endTime": 1668520200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.6993,
                                    42.8877
                                ],
                                [
                                    47.55,
                                    33.25
                                ],
                                [
                                    53.3,
                                    24.5
                                ],
                                [
                                    60.32,
                                    15.03
                                ],
                                [
                                    66.63,
                                    5.84
                                ],
                                [
                                    66.4099,
                                    5.7494
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
                            "force": "f-blue",
                            "startTime": 1668520200000,
                            "endTime": 1668525000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        62.93956867254606,
                                        9.16496600124583
                                    ],
                                    [
                                        62.93956867254606,
                                        2.313140005035076
                                    ],
                                    [
                                        69.83867252724215,
                                        2.313140005035076
                                    ],
                                    [
                                        69.83867252724215,
                                        9.16496600124583
                                    ],
                                    [
                                        62.93956867254606,
                                        9.16496600124583
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
                            "force": "f-blue",
                            "startTime": 1668525000000,
                            "endTime": 1668531600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        63.669188149400576,
                                        8.453809499860315
                                    ],
                                    [
                                        63.669188149400576,
                                        3.0320494849081965
                                    ],
                                    [
                                        69.12461399631462,
                                        3.0320494849081965
                                    ],
                                    [
                                        69.12461399631462,
                                        8.453809499860315
                                    ],
                                    [
                                        63.669188149400576,
                                        8.453809499860315
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
                            "force": "f-blue",
                            "startTime": 1668531600000,
                            "endTime": 1668538800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.4099,
                                    5.7494
                                ],
                                [
                                    53.49,
                                    24.43
                                ],
                                [
                                    40.97,
                                    42.51
                                ],
                                [
                                    40.6993,
                                    42.8877
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-recce",
            "ownAssets": [
                {
                    "asset": "a1083",
                    "number": 5
                },
                {
                    "asset": "a1070",
                    "number": 5
                },
                {
                    "asset": "a1085",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_501",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T02:32:55.956Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-504",
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
                            "force": "f-red",
                            "startTime": 1668517200000,
                            "endTime": 1668520200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.7553,
                                    13.721
                                ],
                                [
                                    61.95,
                                    28.98
                                ],
                                [
                                    61.5673,
                                    28.7684
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
                            "force": "f-red",
                            "startTime": 1668520200000,
                            "endTime": 1668521400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                61.5673,
                                28.7684
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
                            "force": "f-red",
                            "startTime": 1668521400000,
                            "endTime": 1668525000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.5673,
                                    28.7684
                                ],
                                [
                                    42.85,
                                    21.32
                                ],
                                [
                                    23.43,
                                    14.16
                                ],
                                [
                                    23.7553,
                                    13.721
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1130",
                    "number": 4
                },
                {
                    "asset": "a1199",
                    "number": 5
                },
                {
                    "asset": "a1183",
                    "number": 3
                },
                {
                    "asset": "a1170",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_504",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T14:33:49.423Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-507",
            "title": "Order item 507",
            "startDate": "2022-11-15T13:05:00.000Z",
            "endDate": "2022-11-15T14:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T13:05:00.000Z",
                            "endDate": "2022-11-15T13:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668517500000,
                            "endTime": 1668520500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.9463,
                                    21.4275
                                ],
                                [
                                    83.18,
                                    49.37
                                ],
                                [
                                    83.1221,
                                    49.8195
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
                            "startDate": "2022-11-15T13:55:00.000Z",
                            "endDate": "2022-11-15T14:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668520500000,
                            "endTime": 1668523500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                83.1221,
                                49.8195
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
                            "startDate": "2022-11-15T14:45:00.000Z",
                            "endDate": "2022-11-15T14:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668523500000,
                            "endTime": 1668523500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.1221,
                                    49.8195
                                ],
                                [
                                    31.01,
                                    21.12
                                ],
                                [
                                    30.9463,
                                    21.4275
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1130",
                    "number": 5
                },
                {
                    "asset": "a1185",
                    "number": 4
                },
                {
                    "asset": "a1170",
                    "number": 1
                },
                {
                    "asset": "a1183",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_507",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T08:18:43.680Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-510",
            "title": "Order item 510",
            "startDate": "2022-11-15T13:25:00.000Z",
            "endDate": "2022-11-15T16:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T13:25:00.000Z",
                            "endDate": "2022-11-15T14:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668518700000,
                            "endTime": 1668521700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.0646,
                                    10.9422
                                ],
                                [
                                    64.6,
                                    17.77
                                ],
                                [
                                    57.96,
                                    23.42
                                ],
                                [
                                    50.61,
                                    30.36
                                ],
                                [
                                    42.53,
                                    36.57
                                ],
                                [
                                    43.0279,
                                    36.6258
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
                            "startDate": "2022-11-15T14:15:00.000Z",
                            "endDate": "2022-11-15T14:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668521700000,
                            "endTime": 1668522300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                43.0279,
                                36.6258
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
                            "startDate": "2022-11-15T14:25:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668522300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.0279,
                                    36.6258
                                ],
                                [
                                    50.05,
                                    30.55
                                ],
                                [
                                    57.94,
                                    23.35
                                ],
                                [
                                    65.11,
                                    17.43
                                ],
                                [
                                    71.57,
                                    10.79
                                ],
                                [
                                    72.0646,
                                    10.9422
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1183",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_510",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T07:47:38.728Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-513",
            "title": "Order item 513",
            "startDate": "2022-11-15T13:40:00.000Z",
            "endDate": "2022-11-15T14:00:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a1092",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_513",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T21:00:34.566Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-516",
            "title": "Order item 516",
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
                            "force": "f-red",
                            "startTime": 1668519600000,
                            "endTime": 1668522600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.8406,
                                    10.308
                                ],
                                [
                                    50.11,
                                    23.9
                                ],
                                [
                                    24.76,
                                    36.88
                                ],
                                [
                                    24.4823,
                                    37.2372
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
                            "force": "f-red",
                            "startTime": 1668522600000,
                            "endTime": 1668530400000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                24.4823,
                                37.2372
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
                            "force": "f-red",
                            "startTime": 1668530400000,
                            "endTime": 1668537600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.4823,
                                    37.2372
                                ],
                                [
                                    75.67,
                                    10.21
                                ],
                                [
                                    75.8406,
                                    10.308
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1158",
                    "number": 5
                },
                {
                    "asset": "a1169",
                    "number": 2
                },
                {
                    "asset": "a1110",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_516",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T23:57:31.195Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-519",
            "title": "Order item 519",
            "startDate": "2022-11-15T13:45:00.000Z",
            "endDate": "2022-11-15T22:15:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T13:45:00.000Z",
                            "endDate": "2022-11-15T14:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668519900000,
                            "endTime": 1668522900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.5581,
                                    19.5568
                                ],
                                [
                                    66.85,
                                    26.24
                                ],
                                [
                                    73.06,
                                    32.84
                                ],
                                [
                                    78.56,
                                    38.73
                                ],
                                [
                                    83.33,
                                    44.89
                                ],
                                [
                                    83.6848,
                                    45.2723
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
                            "startDate": "2022-11-15T14:35:00.000Z",
                            "endDate": "2022-11-15T17:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668522900000,
                            "endTime": 1668531900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        78.51463680482928,
                                        48.580351688864866
                                    ],
                                    [
                                        78.51463680482928,
                                        41.757188772264016
                                    ],
                                    [
                                        88.26864255239516,
                                        41.757188772264016
                                    ],
                                    [
                                        88.26864255239516,
                                        48.580351688864866
                                    ],
                                    [
                                        78.51463680482928,
                                        48.580351688864866
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
                            "startDate": "2022-11-15T17:05:00.000Z",
                            "endDate": "2022-11-15T20:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668531900000,
                            "endTime": 1668542700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        81.3494994283317,
                                        46.84618335743043
                                    ],
                                    [
                                        81.3494994283317,
                                        43.65341891922742
                                    ],
                                    [
                                        85.89231948690131,
                                        43.65341891922742
                                    ],
                                    [
                                        85.89231948690131,
                                        46.84618335743043
                                    ],
                                    [
                                        81.3494994283317,
                                        46.84618335743043
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
                            "startDate": "2022-11-15T20:05:00.000Z",
                            "endDate": "2022-11-15T22:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668542700000,
                            "endTime": 1668550500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.6848,
                                    45.2723
                                ],
                                [
                                    77.7,
                                    39.24
                                ],
                                [
                                    72.67,
                                    32.16
                                ],
                                [
                                    66.93,
                                    26.36
                                ],
                                [
                                    61.46,
                                    19.84
                                ],
                                [
                                    61.5581,
                                    19.5568
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-area-recce",
            "ownAssets": [
                {
                    "asset": "a1177",
                    "number": 3
                },
                {
                    "asset": "a1173",
                    "number": 4
                },
                {
                    "asset": "a1197",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_519",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668521100000,
                            "endTime": 1668524100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.0279,
                                    36.6258
                                ],
                                [
                                    62.53,
                                    30.42
                                ],
                                [
                                    81.35,
                                    24.53
                                ],
                                [
                                    81.0946,
                                    24.7228
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
                            "force": "f-blue",
                            "startTime": 1668524100000,
                            "endTime": 1668526500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                81.0946,
                                24.7228
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
                            "force": "f-blue",
                            "startTime": 1668526500000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    81.0946,
                                    24.7228
                                ],
                                [
                                    43.43,
                                    36.86
                                ],
                                [
                                    43.0279,
                                    36.6258
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-point-recce",
            "ownAssets": [
                {
                    "asset": "a1052",
                    "number": 4
                },
                {
                    "asset": "a1034",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_522",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T23:03:26.824Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-525",
            "title": "Order item 525",
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
                            "force": "f-red",
                            "startTime": 1668521100000,
                            "endTime": 1668524100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.0408,
                                    16.1755
                                ],
                                [
                                    43,
                                    41.57
                                ],
                                [
                                    43.4885,
                                    41.4004
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a1180",
                    "number": 2
                },
                {
                    "asset": "a1147",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_525",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T03:12:25.825Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-528",
            "title": "Order item 528",
            "startDate": "2022-11-15T14:10:00.000Z",
            "endDate": "2022-11-15T15:40:00.000Z",
            "location": [],
            "activity": "air-cyber",
            "ownAssets": [
                {
                    "asset": "a1164",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_528",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T13:05:25.616Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-531",
            "title": "Order item 531",
            "startDate": "2022-11-15T14:25:00.000Z",
            "endDate": "2022-11-15T21:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T14:25:00.000Z",
                            "endDate": "2022-11-15T15:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668522300000,
                            "endTime": 1668525300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    53.2887,
                                    12.1901
                                ],
                                [
                                    46.97,
                                    19.87
                                ],
                                [
                                    40.7,
                                    28.6
                                ],
                                [
                                    33.71,
                                    36.61
                                ],
                                [
                                    33.7796,
                                    36.5243
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
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T17:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668525300000,
                            "endTime": 1668533700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        28.86953935543542,
                                        40.1780719412321
                                    ],
                                    [
                                        28.86953935543542,
                                        32.68775673360139
                                    ],
                                    [
                                        38.23607722799752,
                                        32.68775673360139
                                    ],
                                    [
                                        38.23607722799752,
                                        40.1780719412321
                                    ],
                                    [
                                        28.86953935543542,
                                        40.1780719412321
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
                            "startDate": "2022-11-15T17:35:00.000Z",
                            "endDate": "2022-11-15T19:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668533700000,
                            "endTime": 1668539700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.821344030664804,
                                        37.28293222577887
                                    ],
                                    [
                                        32.821344030664804,
                                        35.75815206093829
                                    ],
                                    [
                                        34.71915315530987,
                                        35.75815206093829
                                    ],
                                    [
                                        34.71915315530987,
                                        37.28293222577887
                                    ],
                                    [
                                        32.821344030664804,
                                        37.28293222577887
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
                            "startDate": "2022-11-15T19:15:00.000Z",
                            "endDate": "2022-11-15T21:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668539700000,
                            "endTime": 1668546300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.7796,
                                    36.5243
                                ],
                                [
                                    40.68,
                                    28.75
                                ],
                                [
                                    46.63,
                                    20.04
                                ],
                                [
                                    52.87,
                                    12.61
                                ],
                                [
                                    53.2887,
                                    12.1901
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-area-recce",
            "ownAssets": [
                {
                    "asset": "a1202",
                    "number": 4
                },
                {
                    "asset": "a1140",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_531",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "asset": "a1096",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_534",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T18:03:27.569Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-537",
            "title": "Order item 537",
            "startDate": "2022-11-15T14:40:00.000Z",
            "endDate": "2022-11-15T16:00:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a1146",
                    "number": 5
                },
                {
                    "asset": "a1152",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_537",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T13:08:29.732Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-540",
            "title": "Order item 540",
            "startDate": "2022-11-15T14:40:00.000Z",
            "endDate": "2022-11-15T16:10:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1149",
                    "number": 2
                },
                {
                    "asset": "a1141",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_540",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T13:57:32.685Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-543",
            "title": "Order item 543",
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
                            "force": "f-blue",
                            "startTime": 1668524100000,
                            "endTime": 1668527100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    71.4223,
                                    32.3436
                                ],
                                [
                                    62.34,
                                    26.87
                                ],
                                [
                                    53.8,
                                    20.93
                                ],
                                [
                                    53.8323,
                                    21.2712
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
                            "endDate": "2022-11-15T17:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668527100000,
                            "endTime": 1668534900000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        52.9389328840826,
                                        22.096604069495847
                                    ],
                                    [
                                        52.9389328840826,
                                        20.441139490477344
                                    ],
                                    [
                                        54.71567415975087,
                                        20.441139490477344
                                    ],
                                    [
                                        54.71567415975087,
                                        22.096604069495847
                                    ],
                                    [
                                        52.9389328840826,
                                        22.096604069495847
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
                            "startDate": "2022-11-15T17:55:00.000Z",
                            "endDate": "2022-11-15T20:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668534900000,
                            "endTime": 1668543300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        51.739193326431526,
                                        23.182478217622993
                                    ],
                                    [
                                        51.739193326431526,
                                        19.334739367591265
                                    ],
                                    [
                                        55.87138202262571,
                                        19.334739367591265
                                    ],
                                    [
                                        55.87138202262571,
                                        23.182478217622993
                                    ],
                                    [
                                        51.739193326431526,
                                        23.182478217622993
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
                            "startDate": "2022-11-15T20:15:00.000Z",
                            "endDate": "2022-11-15T21:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668543300000,
                            "endTime": 1668548100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    53.8323,
                                    21.2712
                                ],
                                [
                                    62.6,
                                    26.63
                                ],
                                [
                                    71.89,
                                    32.52
                                ],
                                [
                                    71.4223,
                                    32.3436
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-recce",
            "ownAssets": [
                {
                    "asset": "a1009",
                    "number": 4
                },
                {
                    "asset": "a1083",
                    "number": 4
                },
                {
                    "asset": "a1087",
                    "number": 3
                },
                {
                    "asset": "a1022",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_543",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T04:30:36.428Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-546",
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
                            "force": "f-red",
                            "startTime": 1668524100000,
                            "endTime": 1668527100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.7777,
                                    15.7985
                                ],
                                [
                                    45.01,
                                    24.16
                                ],
                                [
                                    45.24,
                                    33.52
                                ],
                                [
                                    44.76,
                                    42.17
                                ],
                                [
                                    45.56,
                                    50.1
                                ],
                                [
                                    45.2069,
                                    50.3752
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
                            "force": "f-red",
                            "startTime": 1668527100000,
                            "endTime": 1668531300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                45.2069,
                                50.3752
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
                            "force": "f-red",
                            "startTime": 1668531300000,
                            "endTime": 1668537300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.2069,
                                    50.3752
                                ],
                                [
                                    45.55,
                                    41.26
                                ],
                                [
                                    44.82,
                                    33.08
                                ],
                                [
                                    44.38,
                                    24.19
                                ],
                                [
                                    45.23,
                                    15.57
                                ],
                                [
                                    44.7777,
                                    15.7985
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1122",
                    "number": 5
                },
                {
                    "asset": "a1181",
                    "number": 0
                },
                {
                    "asset": "a1171",
                    "number": 2
                },
                {
                    "asset": "a1188",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_546",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668524100000,
                            "endTime": 1668527100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.4091,
                                    36.1884
                                ],
                                [
                                    38.6,
                                    26.35
                                ],
                                [
                                    52.09,
                                    16.81
                                ],
                                [
                                    52.361,
                                    16.4527
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
                            "force": "f-blue",
                            "startTime": 1668527100000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        50.07757113234542,
                                        18.604525255981567
                                    ],
                                    [
                                        50.07757113234542,
                                        14.276703129023817
                                    ],
                                    [
                                        54.594044369954624,
                                        14.276703129023817
                                    ],
                                    [
                                        54.594044369954624,
                                        18.604525255981567
                                    ],
                                    [
                                        50.07757113234542,
                                        18.604525255981567
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
                            "force": "f-blue",
                            "startTime": 1668527700000,
                            "endTime": 1668538500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        49.19033781728766,
                                        19.419356222408283
                                    ],
                                    [
                                        49.19033781728766,
                                        13.439837310574662
                                    ],
                                    [
                                        55.43538673889883,
                                        13.439837310574662
                                    ],
                                    [
                                        55.43538673889883,
                                        19.419356222408283
                                    ],
                                    [
                                        49.19033781728766,
                                        19.419356222408283
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
                            "force": "f-blue",
                            "startTime": 1668538500000,
                            "endTime": 1668548100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.361,
                                    16.4527
                                ],
                                [
                                    43.29,
                                    23.19
                                ],
                                [
                                    33.44,
                                    29.14
                                ],
                                [
                                    24.87,
                                    36.39
                                ],
                                [
                                    24.4091,
                                    36.1884
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-recce",
            "ownAssets": [
                {
                    "asset": "a1088",
                    "number": 5
                },
                {
                    "asset": "a1035",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_549",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668524100000,
                            "endTime": 1668527100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.01,
                                    38.7791
                                ],
                                [
                                    33.74,
                                    10.76
                                ],
                                [
                                    34.0549,
                                    11.1092
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
                            "force": "f-blue",
                            "startTime": 1668527100000,
                            "endTime": 1668537300000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.737386853895085,
                                        14.305774960337272
                                    ],
                                    [
                                        30.737386853895085,
                                        7.8771063098755345
                                    ],
                                    [
                                        37.30008289606416,
                                        7.8771063098755345
                                    ],
                                    [
                                        37.30008289606416,
                                        14.305774960337272
                                    ],
                                    [
                                        30.737386853895085,
                                        14.305774960337272
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
                            "force": "f-blue",
                            "startTime": 1668537300000,
                            "endTime": 1668538500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.0549,
                                    11.1092
                                ],
                                [
                                    43.09,
                                    17.75
                                ],
                                [
                                    52.91,
                                    25.18
                                ],
                                [
                                    62.02,
                                    31.89
                                ],
                                [
                                    72.41,
                                    38.89
                                ],
                                [
                                    72.01,
                                    38.7791
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a1013",
                    "number": 0
                },
                {
                    "asset": "a1043",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_552",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T18:33:52.402Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-555",
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
                            "force": "f-red",
                            "startTime": 1668524100000,
                            "endTime": 1668527100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.9578,
                                    22.4723
                                ],
                                [
                                    59.29,
                                    36.57
                                ],
                                [
                                    71.06,
                                    52.11
                                ],
                                [
                                    70.7031,
                                    51.6309
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
                            "force": "f-red",
                            "startTime": 1668527100000,
                            "endTime": 1668527100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        67.859078755941,
                                        53.297140902575855
                                    ],
                                    [
                                        67.859078755941,
                                        49.900881410415344
                                    ],
                                    [
                                        73.3418889747548,
                                        49.900881410415344
                                    ],
                                    [
                                        73.3418889747548,
                                        53.297140902575855
                                    ],
                                    [
                                        67.859078755941,
                                        53.297140902575855
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
                            "force": "f-red",
                            "startTime": 1668527100000,
                            "endTime": 1668531900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    70.7031,
                                    51.6309
                                ],
                                [
                                    58.75,
                                    37.13
                                ],
                                [
                                    47.22,
                                    22.05
                                ],
                                [
                                    46.9578,
                                    22.4723
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-strike",
            "ownAssets": [
                {
                    "asset": "a1188",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_555",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                            "force": "f-blue",
                            "startTime": 1668524700000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.0337,
                                    53.6592
                                ],
                                [
                                    37.89,
                                    46.04
                                ],
                                [
                                    43.74,
                                    38.42
                                ],
                                [
                                    49.88,
                                    31.09
                                ],
                                [
                                    55.31,
                                    24.04
                                ],
                                [
                                    55.2006,
                                    24.0609
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
                            "force": "f-blue",
                            "startTime": 1668527700000,
                            "endTime": 1668538500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        54.01345493752878,
                                        25.131113830942645
                                    ],
                                    [
                                        54.01345493752878,
                                        22.981681189016747
                                    ],
                                    [
                                        56.368024135416206,
                                        22.981681189016747
                                    ],
                                    [
                                        56.368024135416206,
                                        25.131113830942645
                                    ],
                                    [
                                        54.01345493752878,
                                        25.131113830942645
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
                            "force": "f-blue",
                            "startTime": 1668538500000,
                            "endTime": 1668542700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.2006,
                                    24.0609
                                ],
                                [
                                    47.1,
                                    33.77
                                ],
                                [
                                    40.2,
                                    43.67
                                ],
                                [
                                    31.57,
                                    53.85
                                ],
                                [
                                    32.0337,
                                    53.6592
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-area-strike",
            "ownAssets": [
                {
                    "asset": "a1023",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_558",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T03:16:07.004Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-561",
            "title": "Order item 561",
            "startDate": "2022-11-15T15:05:00.000Z",
            "endDate": "2022-11-15T20:25:00.000Z",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Reconnaisance//Route in",
                            "startDate": "2022-11-15T15:05:00.000Z",
                            "endDate": "2022-11-15T15:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668524700000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.3313,
                                    47.734
                                ],
                                [
                                    43.1,
                                    18.5
                                ],
                                [
                                    43.4124,
                                    18.6004
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
                            "startDate": "2022-11-15T15:55:00.000Z",
                            "endDate": "2022-11-15T17:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668527700000,
                            "endTime": 1668533100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.96207318018289,
                                        19.025592722074652
                                    ],
                                    [
                                        42.96207318018289,
                                        18.174142631050348
                                    ],
                                    [
                                        43.86048021679423,
                                        18.174142631050348
                                    ],
                                    [
                                        43.86048021679423,
                                        19.025592722074652
                                    ],
                                    [
                                        42.96207318018289,
                                        19.025592722074652
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
                            "startDate": "2022-11-15T17:25:00.000Z",
                            "endDate": "2022-11-15T18:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668533100000,
                            "endTime": 1668536100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        41.33408576297491,
                                        20.535333121204246
                                    ],
                                    [
                                        41.33408576297491,
                                        16.643192975234278
                                    ],
                                    [
                                        45.44372947202392,
                                        16.643192975234278
                                    ],
                                    [
                                        45.44372947202392,
                                        20.535333121204246
                                    ],
                                    [
                                        41.33408576297491,
                                        20.535333121204246
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
                            "startDate": "2022-11-15T18:15:00.000Z",
                            "endDate": "2022-11-15T20:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668536100000,
                            "endTime": 1668543900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.4124,
                                    18.6004
                                ],
                                [
                                    36.95,
                                    32.96
                                ],
                                [
                                    29.98,
                                    47.81
                                ],
                                [
                                    30.3313,
                                    47.734
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-area-recce",
            "ownAssets": [
                {
                    "asset": "a1011",
                    "number": 1
                },
                {
                    "asset": "a1094",
                    "number": 1
                },
                {
                    "asset": "a1023",
                    "number": 5
                },
                {
                    "asset": "a1052",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_561",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T04:13:15.491Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-564",
            "title": "Order item 564",
            "startDate": "2022-11-15T15:05:00.000Z",
            "endDate": "2022-11-15T20:45:00.000Z",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T15:05:00.000Z",
                            "endDate": "2022-11-15T15:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668524700000,
                            "endTime": 1668527700000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.278,
                                    20.6496
                                ],
                                [
                                    69.7,
                                    28.63
                                ],
                                [
                                    77.35,
                                    36.84
                                ],
                                [
                                    83.28,
                                    45.33
                                ],
                                [
                                    83.6848,
                                    45.2723
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
                            "startDate": "2022-11-15T15:55:00.000Z",
                            "endDate": "2022-11-15T19:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668527700000,
                            "endTime": 1668539100000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                83.6848,
                                45.2723
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
                            "startDate": "2022-11-15T19:05:00.000Z",
                            "endDate": "2022-11-15T20:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668539100000,
                            "endTime": 1668545100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.6848,
                                    45.2723
                                ],
                                [
                                    63.37,
                                    20.2
                                ],
                                [
                                    63.278,
                                    20.6496
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1152",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_564",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T02:54:24.768Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-567",
            "title": "Order item 567",
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
                            "force": "f-blue",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.3313,
                                    47.734
                                ],
                                [
                                    46.74,
                                    6.79
                                ],
                                [
                                    46.2626,
                                    6.7671
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
                            "force": "f-blue",
                            "startTime": 1668528300000,
                            "endTime": 1668537300000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                46.2626,
                                6.7671
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
                            "force": "f-blue",
                            "startTime": 1668537300000,
                            "endTime": 1668543300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.2626,
                                    6.7671
                                ],
                                [
                                    30.51,
                                    48.11
                                ],
                                [
                                    30.3313,
                                    47.734
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a1049",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_567",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T15:19:34.836Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-570",
            "title": "Order item 570",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T17:05:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1200",
                    "number": 3
                },
                {
                    "asset": "a1142",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_570",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "asset": "a1010",
                    "number": 4
                },
                {
                    "asset": "a1035",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_573",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "Sub-Surface",
                "roleId": "blue-sub",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
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
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Precision Strike//Route in",
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.01,
                                    38.7791
                                ],
                                [
                                    48.93,
                                    28.69
                                ],
                                [
                                    25.29,
                                    19.04
                                ],
                                [
                                    25.4275,
                                    19.0741
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
                            "endDate": "2022-11-15T18:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668528300000,
                            "endTime": 1668538500000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                25.4275,
                                19.0741
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
                            "startDate": "2022-11-15T18:55:00.000Z",
                            "endDate": "2022-11-15T22:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668538500000,
                            "endTime": 1668549900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.4275,
                                    19.0741
                                ],
                                [
                                    72.15,
                                    39.11
                                ],
                                [
                                    72.01,
                                    38.7791
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "maritime-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1070",
                    "number": 0
                },
                {
                    "asset": "a1080",
                    "number": 0
                },
                {
                    "asset": "a1021",
                    "number": 5
                },
                {
                    "asset": "a1086",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_576",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T22:59:09.782Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-579",
            "title": "Order item 579",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T16:05:00.000Z",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route",
                            "startDate": "2022-11-15T15:15:00.000Z",
                            "endDate": "2022-11-15T16:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    67.8042,
                                    42.6292
                                ],
                                [
                                    64.05,
                                    36.59
                                ],
                                [
                                    59.17,
                                    31.41
                                ],
                                [
                                    55.56,
                                    25.52
                                ],
                                [
                                    51.24,
                                    18.91
                                ],
                                [
                                    51.46,
                                    19.3191
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-transit",
            "ownAssets": [
                {
                    "asset": "a1086",
                    "number": 4
                },
                {
                    "asset": "a1082",
                    "number": 1
                },
                {
                    "asset": "a1008",
                    "number": 5
                },
                {
                    "asset": "a1058",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_579",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T02:20:23.012Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-582",
            "title": "Order item 582",
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
                            "force": "f-red",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.1004,
                                    18.2047
                                ],
                                [
                                    62.23,
                                    29.59
                                ],
                                [
                                    61.62,
                                    41.23
                                ],
                                [
                                    61.29,
                                    53.16
                                ],
                                [
                                    61.0773,
                                    52.778
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
                            "force": "f-red",
                            "startTime": 1668528300000,
                            "endTime": 1668534900000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                61.0773,
                                52.778
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
                            "force": "f-red",
                            "startTime": 1668534900000,
                            "endTime": 1668539100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.0773,
                                    52.778
                                ],
                                [
                                    62.24,
                                    18.53
                                ],
                                [
                                    62.1004,
                                    18.2047
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1158",
                    "number": 5
                },
                {
                    "asset": "a1140",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_582",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T11:25:37.032Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-585",
            "title": "Order item 585",
            "startDate": "2022-11-15T15:15:00.000Z",
            "endDate": "2022-11-15T16:35:00.000Z",
            "location": [],
            "activity": "land-cyber",
            "ownAssets": [
                {
                    "asset": "a1084",
                    "number": 4
                },
                {
                    "asset": "a1051",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a1116"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_585",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T10:14:51.843Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-588",
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
                            "force": "f-red",
                            "startTime": 1668525300000,
                            "endTime": 1668528300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.7462,
                                    10.5287
                                ],
                                [
                                    49.56,
                                    22.36
                                ],
                                [
                                    52.53,
                                    35.34
                                ],
                                [
                                    55.78,
                                    47.6
                                ],
                                [
                                    55.3328,
                                    47.2523
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
                            "force": "f-red",
                            "startTime": 1668528300000,
                            "endTime": 1668530700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                55.3328,
                                47.2523
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
                            "force": "f-red",
                            "startTime": 1668530700000,
                            "endTime": 1668540300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.3328,
                                    47.2523
                                ],
                                [
                                    52.09,
                                    35.02
                                ],
                                [
                                    49.96,
                                    22.9
                                ],
                                [
                                    47.11,
                                    10.07
                                ],
                                [
                                    46.7462,
                                    10.5287
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-precis-strike",
            "ownAssets": [
                {
                    "asset": "a1166",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_588",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T14:48:07.445Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-591",
            "title": "Order item 591",
            "startDate": "2022-11-15T15:20:00.000Z",
            "endDate": "2022-11-15T17:20:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T15:20:00.000Z",
                            "endDate": "2022-11-15T16:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668525600000,
                            "endTime": 1668528600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.2222,
                                    31.2635
                                ],
                                [
                                    51.97,
                                    25.77
                                ],
                                [
                                    30.21,
                                    20.76
                                ],
                                [
                                    30.6244,
                                    20.611
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
                            "startDate": "2022-11-15T16:10:00.000Z",
                            "endDate": "2022-11-15T16:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668528600000,
                            "endTime": 1668531000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        29.26479558247659,
                                        21.86749033344484
                                    ],
                                    [
                                        29.26479558247659,
                                        19.344054182246374
                                    ],
                                    [
                                        31.961667307338416,
                                        19.344054182246374
                                    ],
                                    [
                                        31.961667307338416,
                                        21.86749033344484
                                    ],
                                    [
                                        29.26479558247659,
                                        21.86749033344484
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
                            "startDate": "2022-11-15T16:50:00.000Z",
                            "endDate": "2022-11-15T17:20:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668531000000,
                            "endTime": 1668532800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.6244,
                                    20.611
                                ],
                                [
                                    41.04,
                                    23.53
                                ],
                                [
                                    52.36,
                                    26.36
                                ],
                                [
                                    62.98,
                                    28.48
                                ],
                                [
                                    72.87,
                                    30.88
                                ],
                                [
                                    73.2222,
                                    31.2635
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "air-area-strike",
            "ownAssets": [
                {
                    "asset": "a1101",
                    "number": 1
                },
                {
                    "asset": "a1038",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_591",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T09:05:23.837Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-594",
            "title": "Order item 594",
            "startDate": "2022-11-15T15:20:00.000Z",
            "endDate": "2022-11-15T16:50:00.000Z",
            "location": [],
            "activity": "other-cyber",
            "ownAssets": [
                {
                    "asset": "a1192",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_594",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T09:06:41.019Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-597",
            "title": "Order item 597",
            "startDate": "2022-11-15T15:30:00.000Z",
            "endDate": "2022-11-15T20:00:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T15:30:00.000Z",
                            "endDate": "2022-11-15T16:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668526200000,
                            "endTime": 1668529200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    69.5126,
                                    12.2432
                                ],
                                [
                                    62.34,
                                    23.23
                                ],
                                [
                                    56.29,
                                    34.34
                                ],
                                [
                                    48.52,
                                    45.73
                                ],
                                [
                                    48.9796,
                                    45.3915
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
                            "startDate": "2022-11-15T16:20:00.000Z",
                            "endDate": "2022-11-15T19:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668529200000,
                            "endTime": 1668540000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                48.9796,
                                45.3915
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
                            "startDate": "2022-11-15T19:20:00.000Z",
                            "endDate": "2022-11-15T20:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668540000000,
                            "endTime": 1668542400000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.9796,
                                    45.3915
                                ],
                                [
                                    69.89,
                                    12.44
                                ],
                                [
                                    69.5126,
                                    12.2432
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "other-point-recce",
            "ownAssets": [
                {
                    "asset": "a1140",
                    "number": 3
                },
                {
                    "asset": "a1145",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_597",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T22:51:58.992Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-600",
            "title": "Order item 600",
            "startDate": "2022-11-15T15:40:00.000Z",
            "endDate": "2022-11-15T19:00:00.000Z",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Point Reconnaisance//Route in",
                            "startDate": "2022-11-15T15:40:00.000Z",
                            "endDate": "2022-11-15T16:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668526800000,
                            "endTime": 1668529800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.8808,
                                    11.9371
                                ],
                                [
                                    54.58,
                                    22.47
                                ],
                                [
                                    52.21,
                                    31.94
                                ],
                                [
                                    49.12,
                                    42.69
                                ],
                                [
                                    46.32,
                                    52.72
                                ],
                                [
                                    45.9499,
                                    52.8708
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
                            "startDate": "2022-11-15T16:30:00.000Z",
                            "endDate": "2022-11-15T16:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668529800000,
                            "endTime": 1668531000000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                45.9499,
                                52.8708
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
                            "endDate": "2022-11-15T19:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668531000000,
                            "endTime": 1668538800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.9499,
                                    52.8708
                                ],
                                [
                                    51.44,
                                    32
                                ],
                                [
                                    58.29,
                                    11.5
                                ],
                                [
                                    57.8808,
                                    11.9371
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-point-recce",
            "ownAssets": [
                {
                    "asset": "a1141",
                    "number": 0
                },
                {
                    "asset": "a1131",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a1018",
                "a1098",
                "a1014"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_600",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T18:21:17.756Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-603",
            "title": "Order item 603",
            "startDate": "2022-11-15T16:00:00.000Z",
            "endDate": "2022-11-15T17:10:00.000Z",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Strike//Route in",
                            "startDate": "2022-11-15T16:00:00.000Z",
                            "endDate": "2022-11-15T16:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668528000000,
                            "endTime": 1668531000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.9059,
                                    53.2799
                                ],
                                [
                                    50.69,
                                    38.98
                                ],
                                [
                                    54.92,
                                    24.13
                                ],
                                [
                                    55.2006,
                                    24.0609
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
                            "startDate": "2022-11-15T16:50:00.000Z",
                            "endDate": "2022-11-15T17:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668531000000,
                            "endTime": 1668531600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        54.84182224519391,
                                        24.387248529603163
                                    ],
                                    [
                                        54.84182224519391,
                                        23.733719343604857
                                    ],
                                    [
                                        55.5575551625849,
                                        23.733719343604857
                                    ],
                                    [
                                        55.5575551625849,
                                        24.387248529603163
                                    ],
                                    [
                                        54.84182224519391,
                                        24.387248529603163
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
                            "startDate": "2022-11-15T17:00:00.000Z",
                            "endDate": "2022-11-15T17:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668531600000,
                            "endTime": 1668532200000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.2006,
                                    24.0609
                                ],
                                [
                                    53.17,
                                    31.51
                                ],
                                [
                                    50.97,
                                    38.78
                                ],
                                [
                                    49.06,
                                    46.34
                                ],
                                [
                                    46.43,
                                    53.19
                                ],
                                [
                                    46.9059,
                                    53.2799
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "land-area-strike",
            "ownAssets": [
                {
                    "asset": "a1095",
                    "number": 3
                },
                {
                    "asset": "a1071",
                    "number": 3
                },
                {
                    "asset": "a1074",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a1116",
                "a1197",
                "a1113"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_603",
        "_rev": "2"
    }
]