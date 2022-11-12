
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
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
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
                    "uniqid": "EW Attack-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//EW Target",
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
                    "uniqid": "EW Attack-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route back",
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
            "activity": "f-blue-Land-EW Attack",
            "ownAssets": [
                {
                    "asset": "a1051",
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
            "endDate": "2022-11-15T04:55:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Clearance-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Route out",
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
                },
                {
                    "uniqid": "Mine Clearance-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Mine Clearance Area Area",
                            "startDate": "2022-11-15T00:55:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668473700000,
                            "endTime": 1668482100000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        29.15840483022792,
                                        52.9443995916477
                                    ],
                                    [
                                        29.15840483022792,
                                        46.723815534190415
                                    ],
                                    [
                                        38.8845413598033,
                                        46.723815534190415
                                    ],
                                    [
                                        38.8845413598033,
                                        52.9443995916477
                                    ],
                                    [
                                        29.15840483022792,
                                        52.9443995916477
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
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T04:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668482100000,
                            "endTime": 1668488100000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.3353,
                                    49.9355
                                ],
                                [
                                    48.18,
                                    36.36
                                ],
                                [
                                    62.12,
                                    23.89
                                ],
                                [
                                    75.35,
                                    10.7
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
            "activity": "f-red-Maritime-Mine Clearance",
            "ownAssets": [
                {
                    "asset": "a1143",
                    "number": 5
                },
                {
                    "asset": "a1196",
                    "number": 4
                },
                {
                    "asset": "a1178",
                    "number": 4
                },
                {
                    "asset": "a1189",
                    "number": 4
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
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
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
                    "uniqid": "EW Attack-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//EW Target",
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
                    "uniqid": "EW Attack-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route back",
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
            "activity": "f-blue-Maritime-EW Attack",
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
            "endDate": "2022-11-15T07:15:00.000Z",
            "location": [
                {
                    "uniqid": "Stand Off Strike-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route out",
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
                    "uniqid": "Stand Off Strike-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Asset Location",
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
                    "uniqid": "Stand Off Strike-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Strike Target",
                            "startDate": "2022-11-15T03:05:00.000Z",
                            "endDate": "2022-11-15T05:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668481500000,
                            "endTime": 1668490500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        27.302112514595674,
                                        23.623500069185827
                                    ],
                                    [
                                        27.302112514595674,
                                        17.5375175783472
                                    ],
                                    [
                                        33.81651350279774,
                                        17.5375175783472
                                    ],
                                    [
                                        33.81651350279774,
                                        23.623500069185827
                                    ],
                                    [
                                        27.302112514595674,
                                        23.623500069185827
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Stand Off Strike-3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route back",
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T07:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668490500000,
                            "endTime": 1668496500000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.6244,
                                    20.611
                                ],
                                [
                                    35.23,
                                    25.13
                                ],
                                [
                                    40.08,
                                    28.9
                                ],
                                [
                                    44.22,
                                    32.95
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
            "activity": "f-blue-Air-Stand Off Strike",
            "ownAssets": [
                {
                    "asset": "a1090",
                    "number": 3
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
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
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
                    "uniqid": "Suppression of Air Defences (SEAD)-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//TST Area",
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
                    "uniqid": "Suppression of Air Defences (SEAD)-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route back",
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
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a1048",
                    "number": 3
                },
                {
                    "asset": "a1057",
                    "number": 0
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
            "endDate": "2022-11-15T06:55:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
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
                    "uniqid": "ISTAR-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Observation Area",
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
                    "uniqid": "ISTAR-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route back",
                            "startDate": "2022-11-15T04:05:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668485100000,
                            "endTime": 1668495300000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.995,
                                    13.1216
                                ],
                                [
                                    47.96,
                                    33.55
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
            "activity": "f-blue-Maritime-ISTAR",
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
            "endDate": "2022-11-15T03:45:00.000Z",
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
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
                                    49.48,
                                    52.1008
                                ],
                                [
                                    64.95,
                                    29.55
                                ],
                                [
                                    79.87,
                                    7.44
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
                    "uniqid": "Resupply-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Resupply Destingation",
                            "startDate": "2022-11-15T00:55:00.000Z",
                            "endDate": "2022-11-15T02:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668473700000,
                            "endTime": 1668479700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        76.48687036865644,
                                        10.927453560354575
                                    ],
                                    [
                                        76.48687036865644,
                                        4.005601700424044
                                    ],
                                    [
                                        83.48142078858656,
                                        4.005601700424044
                                    ],
                                    [
                                        83.48142078858656,
                                        10.927453560354575
                                    ],
                                    [
                                        76.48687036865644,
                                        10.927453560354575
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
                            "startDate": "2022-11-15T02:35:00.000Z",
                            "endDate": "2022-11-15T03:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668479700000,
                            "endTime": 1668483900000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    80.0119,
                                    7.4803
                                ],
                                [
                                    65.15,
                                    29.43
                                ],
                                [
                                    49.69,
                                    51.78
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
            "activity": "f-blue-Maritime-Resupply",
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
                    "uniqid": "SAM MEZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SAM MEZ//SAM MEZ Location",
                            "startDate": "2022-11-15T00:05:00.000Z",
                            "endDate": "2022-11-15T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668470700000,
                            "endTime": 1668473700000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                48.1087,
                                50.9161
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-SAM MEZ",
            "ownAssets": [
                {
                    "asset": "a1148",
                    "number": 1
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
            "endDate": "2022-11-15T04:00:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-15T00:10:00.000Z",
                            "endDate": "2022-11-15T01:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668471000000,
                            "endTime": 1668474000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.5068,
                                    12.4807
                                ],
                                [
                                    51.84,
                                    18.67
                                ],
                                [
                                    45.46,
                                    24.14
                                ],
                                [
                                    38.36,
                                    29.89
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
                    "uniqid": "ISTAR-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Observation Area",
                            "startDate": "2022-11-15T01:00:00.000Z",
                            "endDate": "2022-11-15T01:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668474000000,
                            "endTime": 1668477000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        35.606298108929764,
                                        32.605051898440365
                                    ],
                                    [
                                        35.606298108929764,
                                        27.8768699391252
                                    ],
                                    [
                                        41.089239145974524,
                                        27.8768699391252
                                    ],
                                    [
                                        41.089239145974524,
                                        32.605051898440365
                                    ],
                                    [
                                        35.606298108929764,
                                        32.605051898440365
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
                            "id": "ISTAR//Route back",
                            "startDate": "2022-11-15T01:50:00.000Z",
                            "endDate": "2022-11-15T04:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668477000000,
                            "endTime": 1668484800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.4138,
                                    30.2695
                                ],
                                [
                                    43.8,
                                    25.73
                                ],
                                [
                                    47.98,
                                    20.97
                                ],
                                [
                                    53.44,
                                    16.5
                                ],
                                [
                                    58.19,
                                    12.31
                                ],
                                [
                                    58.5068,
                                    12.4807
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a1124",
                    "number": 1
                },
                {
                    "asset": "a1172",
                    "number": 4
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
            "endDate": "2022-11-15T02:50:00.000Z",
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
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
                },
                {
                    "uniqid": "Resupply-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Resupply Destingation",
                            "startDate": "2022-11-15T01:20:00.000Z",
                            "endDate": "2022-11-15T01:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668475200000,
                            "endTime": 1668475200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        46.66052193452122,
                                        36.82936529877206
                                    ],
                                    [
                                        46.66052193452122,
                                        34.84359918793611
                                    ],
                                    [
                                        49.1110027807306,
                                        34.84359918793611
                                    ],
                                    [
                                        49.1110027807306,
                                        36.82936529877206
                                    ],
                                    [
                                        46.66052193452122,
                                        36.82936529877206
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
                            "startDate": "2022-11-15T01:20:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668475200000,
                            "endTime": 1668480600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    47.9011,
                                    35.8427
                                ],
                                [
                                    42.48,
                                    28.02
                                ],
                                [
                                    36.94,
                                    20.09
                                ],
                                [
                                    31.69,
                                    11.43
                                ],
                                [
                                    26.72,
                                    4.06
                                ],
                                [
                                    26.621,
                                    3.8406
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-Resupply",
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
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
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-15T01:35:00.000Z",
                            "endDate": "2022-11-15T02:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668476100000,
                            "endTime": 1668479700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        52.01712739527629,
                                        26.8682167799648
                                    ],
                                    [
                                        52.01712739527629,
                                        21.190585119394967
                                    ],
                                    [
                                        58.24622296365434,
                                        21.190585119394967
                                    ],
                                    [
                                        58.24622296365434,
                                        26.8682167799648
                                    ],
                                    [
                                        52.01712739527629,
                                        26.8682167799648
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
            "activity": "f-blue-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a1041",
                    "number": 4
                },
                {
                    "asset": "a1059",
                    "number": 4
                },
                {
                    "asset": "a1007",
                    "number": 1
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
                    "uniqid": "Cruise Missile Strike-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Cruise Missile Strike//Route out",
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
                    "uniqid": "Cruise Missile Strike-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Cruise Missile Strike//Asset Location",
                            "startDate": "2022-11-15T01:35:00.000Z",
                            "endDate": "2022-11-15T03:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668476100000,
                            "endTime": 1668482700000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        60.19738147111859,
                                        53.300625019217954
                                    ],
                                    [
                                        60.19738147111859,
                                        52.24902087003423
                                    ],
                                    [
                                        61.93621264496292,
                                        52.24902087003423
                                    ],
                                    [
                                        61.93621264496292,
                                        53.300625019217954
                                    ],
                                    [
                                        60.19738147111859,
                                        53.300625019217954
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Cruise Missile Strike-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Cruise Missile Strike//Strike Target",
                            "startDate": "2022-11-15T03:25:00.000Z",
                            "endDate": "2022-11-15T03:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668482700000,
                            "endTime": 1668484500000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        55.73699434486373,
                                        9.841427682226943
                                    ],
                                    [
                                        55.73699434486373,
                                        2.4499489462205393
                                    ],
                                    [
                                        63.187315253638836,
                                        2.4499489462205393
                                    ],
                                    [
                                        63.187315253638836,
                                        9.841427682226943
                                    ],
                                    [
                                        55.73699434486373,
                                        9.841427682226943
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Cruise Missile Strike",
            "ownAssets": [
                {
                    "asset": "a1180",
                    "number": 3
                },
                {
                    "asset": "a1184",
                    "number": 4
                },
                {
                    "asset": "a1117",
                    "number": 0
                },
                {
                    "asset": "a1176",
                    "number": 0
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
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
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-15T01:40:00.000Z",
                            "endDate": "2022-11-15T02:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668476400000,
                            "endTime": 1668479400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.46124368789339,
                                        48.604531616582314
                                    ],
                                    [
                                        71.46124368789339,
                                        43.02693404305649
                                    ],
                                    [
                                        79.50723394797326,
                                        43.02693404305649
                                    ],
                                    [
                                        79.50723394797326,
                                        48.604531616582314
                                    ],
                                    [
                                        71.46124368789339,
                                        48.604531616582314
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
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a1176",
                    "number": 0
                },
                {
                    "asset": "a1165",
                    "number": 2
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
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
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
                    "uniqid": "ISTAR-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Observation Area",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668477600000,
                            "endTime": 1668477600000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.11150451533517,
                                        11.873429018051441
                                    ],
                                    [
                                        71.11150451533517,
                                        10.008034826895912
                                    ],
                                    [
                                        73.01171487489022,
                                        10.008034826895912
                                    ],
                                    [
                                        73.01171487489022,
                                        11.873429018051441
                                    ],
                                    [
                                        71.11150451533517,
                                        11.873429018051441
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
                            "id": "ISTAR//Route back",
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
            "activity": "f-blue-Air-ISTAR",
            "ownAssets": [
                {
                    "asset": "a1028",
                    "number": 3
                },
                {
                    "asset": "a1099",
                    "number": 4
                },
                {
                    "asset": "a1101",
                    "number": 5
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
                    "uniqid": "SAM MEZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SAM MEZ//SAM MEZ Location",
                            "startDate": "2022-11-15T01:10:00.000Z",
                            "endDate": "2022-11-15T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668474600000,
                            "endTime": 1668477600000
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                70.7031,
                                51.6309
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-SAM MEZ",
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
                    "number": 4
                },
                {
                    "asset": "a1191",
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
            "endDate": "2022-11-15T05:10:00.000Z",
            "location": [
                {
                    "uniqid": "ASW Barrier-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route out",
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
                },
                {
                    "uniqid": "ASW Barrier-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//ASW Area",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T03:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668477600000,
                            "endTime": 1668483000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        74.412270555753,
                                        23.78079417634819
                                    ],
                                    [
                                        74.412270555753,
                                        18.47679040296372
                                    ],
                                    [
                                        80.10769810068828,
                                        18.47679040296372
                                    ],
                                    [
                                        80.10769810068828,
                                        23.78079417634819
                                    ],
                                    [
                                        74.412270555753,
                                        23.78079417634819
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ASW Barrier-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route back",
                            "startDate": "2022-11-15T03:30:00.000Z",
                            "endDate": "2022-11-15T05:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668483000000,
                            "endTime": 1668489000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    77.311,
                                    21.1526
                                ],
                                [
                                    69.52,
                                    24.77
                                ],
                                [
                                    61.07,
                                    28.71
                                ],
                                [
                                    60.901,
                                    28.8402
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "a1091",
                    "number": 4
                },
                {
                    "asset": "a1036",
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
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
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
                    "uniqid": "Suppression of Air Defences (SEAD)-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//TST Area",
                            "startDate": "2022-11-15T02:00:00.000Z",
                            "endDate": "2022-11-15T04:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668477600000,
                            "endTime": 1668486000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        53.41906981851119,
                                        35.93885242875955
                                    ],
                                    [
                                        53.41906981851119,
                                        29.649135639650318
                                    ],
                                    [
                                        60.928319041844624,
                                        29.649135639650318
                                    ],
                                    [
                                        60.928319041844624,
                                        35.93885242875955
                                    ],
                                    [
                                        53.41906981851119,
                                        35.93885242875955
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
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a1109",
                    "number": 5
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
                    "uniqid": "Ballistic Missile Strike-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Ballistic Missile Strike//Route out",
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
                    "uniqid": "Ballistic Missile Strike-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Ballistic Missile Strike//Asset Location",
                            "startDate": "2022-11-15T02:10:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668478200000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        57.64513656752298,
                                        31.575573673273436
                                    ],
                                    [
                                        57.64513656752298,
                                        26.030701253301284
                                    ],
                                    [
                                        63.98781182641845,
                                        26.030701253301284
                                    ],
                                    [
                                        63.98781182641845,
                                        31.575573673273436
                                    ],
                                    [
                                        57.64513656752298,
                                        31.575573673273436
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Ballistic Missile Strike-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Ballistic Missile Strike//Strike Target",
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668488400000,
                            "endTime": 1668488400000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        72.35817558436615,
                                        23.77512740402039
                                    ],
                                    [
                                        72.35817558436615,
                                        21.199681133193824
                                    ],
                                    [
                                        75.14667168956052,
                                        21.199681133193824
                                    ],
                                    [
                                        75.14667168956052,
                                        23.77512740402039
                                    ],
                                    [
                                        72.35817558436615,
                                        23.77512740402039
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-Ballistic Missile Strike",
            "ownAssets": [
                {
                    "asset": "a1177",
                    "number": 2
                },
                {
                    "asset": "a1190",
                    "number": 0
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
            "endDate": "2022-11-15T07:50:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-15T01:30:00.000Z",
                            "endDate": "2022-11-15T02:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668475800000,
                            "endTime": 1668478800000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.3292,
                                    3.2162
                                ],
                                [
                                    68.4,
                                    16.76
                                ],
                                [
                                    61.79,
                                    30.63
                                ],
                                [
                                    62.0847,
                                    30.2727
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
                            "id": "ISTAR//Observation Area",
                            "startDate": "2022-11-15T02:20:00.000Z",
                            "endDate": "2022-11-15T05:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668478800000,
                            "endTime": 1668489000000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        58.43771396905418,
                                        33.27225450623784
                                    ],
                                    [
                                        58.43771396905418,
                                        27.17815079033486
                                    ],
                                    [
                                        65.51201401732413,
                                        27.17815079033486
                                    ],
                                    [
                                        65.51201401732413,
                                        33.27225450623784
                                    ],
                                    [
                                        58.43771396905418,
                                        33.27225450623784
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
                            "id": "ISTAR//Route back",
                            "startDate": "2022-11-15T05:10:00.000Z",
                            "endDate": "2022-11-15T07:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668489000000,
                            "endTime": 1668498600000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.0847,
                                    30.2727
                                ],
                                [
                                    64.95,
                                    23.7
                                ],
                                [
                                    67.74,
                                    17.06
                                ],
                                [
                                    70.82,
                                    9.7
                                ],
                                [
                                    74.18,
                                    3.62
                                ],
                                [
                                    74.3292,
                                    3.2162
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-ISTAR",
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
                    "number": 1
                },
                {
                    "asset": "a1181",
                    "number": 2
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
            "endDate": "2022-11-15T06:50:00.000Z",
            "location": [
                {
                    "uniqid": "SOF Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Route out",
                            "startDate": "2022-11-15T01:50:00.000Z",
                            "endDate": "2022-11-15T02:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668477000000,
                            "endTime": 1668480000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.5025,
                                    29.6841
                                ],
                                [
                                    28.44,
                                    26.83
                                ],
                                [
                                    25.73,
                                    24.33
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
                    "uniqid": "SOF Activity-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Activity Location",
                            "startDate": "2022-11-15T02:40:00.000Z",
                            "endDate": "2022-11-15T03:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668480000000,
                            "endTime": 1668481200000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.76881180009192,
                                        27.745243367866227
                                    ],
                                    [
                                        21.76881180009192,
                                        20.107479655443466
                                    ],
                                    [
                                        30.155556486463347,
                                        20.107479655443466
                                    ],
                                    [
                                        30.155556486463347,
                                        27.745243367866227
                                    ],
                                    [
                                        21.76881180009192,
                                        27.745243367866227
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
                            "id": "SOF Activity//Efect Location",
                            "startDate": "2022-11-15T03:00:00.000Z",
                            "endDate": "2022-11-15T04:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668481200000,
                            "endTime": 1668487800000
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        23.963449353000215,
                                        25.87905975220446
                                    ],
                                    [
                                        23.963449353000215,
                                        22.05917608412145
                                    ],
                                    [
                                        28.147689344346926,
                                        22.05917608412145
                                    ],
                                    [
                                        28.147689344346926,
                                        25.87905975220446
                                    ],
                                    [
                                        23.963449353000215,
                                        25.87905975220446
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
                            "startDate": "2022-11-15T04:50:00.000Z",
                            "endDate": "2022-11-15T06:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668487800000,
                            "endTime": 1668495000000
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.0866,
                                    23.9833
                                ],
                                [
                                    27.98,
                                    26.37
                                ],
                                [
                                    30.19,
                                    30.07
                                ],
                                [
                                    30.5025,
                                    29.6841
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a1081",
                    "number": 2
                },
                {
                    "asset": "a1065",
                    "number": 2
                },
                {
                    "asset": "a1076",
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
        "_id": "m_f-blue_63",
        "_rev": "2"
    }
]