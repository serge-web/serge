
import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'

export const planningMessages: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> = [
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
                    "number": 1
                },
                {
                    "asset": "a1189",
                    "number": 1
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
                    "number": 0
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
                    "number": 5
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
                    "number": 4
                },
                {
                    "asset": "a1057",
                    "number": 5
                },
                {
                    "asset": "a1093",
                    "number": 4
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
                    "number": 2
                },
                {
                    "asset": "a1054",
                    "number": 2
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
                    "number": 5
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
                    "number": 5
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
                    "number": 5
                },
                {
                    "asset": "a1187",
                    "number": 3
                },
                {
                    "asset": "a1150",
                    "number": 0
                },
                {
                    "asset": "a1141",
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
                    "number": 3
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
                    "number": 3
                },
                {
                    "asset": "a1184",
                    "number": 1
                },
                {
                    "asset": "a1117",
                    "number": 1
                },
                {
                    "asset": "a1176",
                    "number": 5
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
                    "number": 4
                },
                {
                    "asset": "a1165",
                    "number": 1
                },
                {
                    "asset": "a1181",
                    "number": 5
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
                    "number": 3
                },
                {
                    "asset": "a1099",
                    "number": 1
                },
                {
                    "asset": "a1101",
                    "number": 2
                },
                {
                    "asset": "a1033",
                    "number": 2
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
                    "number": 1
                },
                {
                    "asset": "a1190",
                    "number": 3
                },
                {
                    "asset": "a1177",
                    "number": 2
                },
                {
                    "asset": "a1191",
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
                    "number": 4
                },
                {
                    "asset": "a1036",
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
                    "number": 3
                },
                {
                    "asset": "a1136",
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
                    "number": 3
                },
                {
                    "asset": "a1190",
                    "number": 4
                },
                {
                    "asset": "a1133",
                    "number": 2
                },
                {
                    "asset": "a1201",
                    "number": 0
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
                    "number": 1
                },
                {
                    "asset": "a1199",
                    "number": 4
                },
                {
                    "asset": "a1128",
                    "number": 0
                },
                {
                    "asset": "a1181",
                    "number": 0
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
                    "number": 0
                },
                {
                    "asset": "a1065",
                    "number": 3
                },
                {
                    "asset": "a1076",
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
        "_id": "m_f-blue_63",
        "_rev": "2"
    }
]