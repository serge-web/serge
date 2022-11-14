
import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'

export const planningMessages: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> = [
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
            "messageType": "Land--EWAttack",
            "timestamp": "2022-09-22T15:47:41.086Z",
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
                                    73.7335,
                                    43.5688
                                ],
                                [
                                    48.58,
                                    35.27
                                ],
                                [
                                    23.8,
                                    26.34
                                ],
                                [
                                    23.5101,
                                    26.6663
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
                                        22.78906268214402,
                                        27.30518334623726
                                    ],
                                    [
                                        22.78906268214402,
                                        26.02381814069331
                                    ],
                                    [
                                        24.22308411185446,
                                        26.02381814069331
                                    ],
                                    [
                                        24.22308411185446,
                                        27.30518334623726
                                    ],
                                    [
                                        22.78906268214402,
                                        27.30518334623726
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
                                    23.5101,
                                    26.6663
                                ],
                                [
                                    39.99,
                                    31.92
                                ],
                                [
                                    56.71,
                                    38.42
                                ],
                                [
                                    73.72,
                                    43.21
                                ],
                                [
                                    73.7335,
                                    43.5688
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Land-EW Attack",
            "ownAssets": [
                {
                    "asset": "a49",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a109",
                "a189",
                "a107"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_6",
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
            "messageType": "Maritime--Duration",
            "timestamp": "2022-09-27T19:41:04.380Z",
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
                                    27.75,
                                    23.6603
                                ],
                                [
                                    39.25,
                                    30.11
                                ],
                                [
                                    49.65,
                                    37.47
                                ],
                                [
                                    61.34,
                                    44.12
                                ],
                                [
                                    72.31,
                                    50.04
                                ],
                                [
                                    72.5266,
                                    50.5454
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
                                        67.27548585052453,
                                        53.55177613180756
                                    ],
                                    [
                                        67.27548585052453,
                                        47.33177205640518
                                    ],
                                    [
                                        77.12806529699637,
                                        47.33177205640518
                                    ],
                                    [
                                        77.12806529699637,
                                        53.55177613180756
                                    ],
                                    [
                                        67.27548585052453,
                                        53.55177613180756
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
                                    72.5266,
                                    50.5454
                                ],
                                [
                                    57.61,
                                    41.22
                                ],
                                [
                                    42.79,
                                    33
                                ],
                                [
                                    27.26,
                                    24.06
                                ],
                                [
                                    27.75,
                                    23.6603
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Mine Clearance",
            "ownAssets": [
                {
                    "asset": "a141",
                    "number": 1
                },
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
                    "number": 4
                }
            ],
            "otherAssets": [
                "a10"
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
            "messageType": "Maritime--EWAttack",
            "timestamp": "2022-09-29T05:18:28.464Z",
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
                                    73.7335,
                                    43.5688
                                ],
                                [
                                    57.99,
                                    35.04
                                ],
                                [
                                    41.33,
                                    25.6
                                ],
                                [
                                    24.95,
                                    17.44
                                ],
                                [
                                    25.4577,
                                    16.9954
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
                                        25.19838068598645,
                                        17.242900747382723
                                    ],
                                    [
                                        25.19838068598645,
                                        16.747572041961114
                                    ],
                                    [
                                        25.716335011928884,
                                        16.747572041961114
                                    ],
                                    [
                                        25.716335011928884,
                                        17.242900747382723
                                    ],
                                    [
                                        25.19838068598645,
                                        17.242900747382723
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
                                    25.4577,
                                    16.9954
                                ],
                                [
                                    49.83,
                                    30.14
                                ],
                                [
                                    73.58,
                                    43.66
                                ],
                                [
                                    73.7335,
                                    43.5688
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-EW Attack",
            "ownAssets": [
                {
                    "asset": "a87",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a109",
                "a189"
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
            "messageType": "Air--Transit",
            "timestamp": "2022-09-26T20:39:53.339Z",
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
                                    34.5795,
                                    38.5097
                                ],
                                [
                                    54.39,
                                    21.44
                                ],
                                [
                                    74.51,
                                    3.68
                                ],
                                [
                                    74.3035,
                                    3.7946
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
                                        70.58881724690697,
                                        7.469799355662781
                                    ],
                                    [
                                        70.58881724690697,
                                        0.10363757236208751
                                    ],
                                    [
                                        77.98662053971228,
                                        0.10363757236208751
                                    ],
                                    [
                                        77.98662053971228,
                                        7.469799355662781
                                    ],
                                    [
                                        70.58881724690697,
                                        7.469799355662781
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
                                        71.23810719564835,
                                        6.832805844255046
                                    ],
                                    [
                                        71.23810719564835,
                                        0.7456428679922057
                                    ],
                                    [
                                        77.34735842856306,
                                        0.7456428679922057
                                    ],
                                    [
                                        77.34735842856306,
                                        6.832805844255046
                                    ],
                                    [
                                        71.23810719564835,
                                        6.832805844255046
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
                                    74.3035,
                                    3.7946
                                ],
                                [
                                    60.97,
                                    15.81
                                ],
                                [
                                    47.89,
                                    27.08
                                ],
                                [
                                    34.09,
                                    38.63
                                ],
                                [
                                    34.5795,
                                    38.5097
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Stand Off Strike",
            "ownAssets": [
                {
                    "asset": "a88",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a109",
                "a189"
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
            "messageType": "Air--Duration",
            "timestamp": "2022-09-29T01:45:19.005Z",
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
                                    51.9965,
                                    45.7005
                                ],
                                [
                                    39.99,
                                    34.35
                                ],
                                [
                                    27.33,
                                    23.35
                                ],
                                [
                                    27.581,
                                    23.1017
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
                                        25.402830519628,
                                        25.06001860913663
                                    ],
                                    [
                                        25.402830519628,
                                        21.114362297187355
                                    ],
                                    [
                                        29.696100406314063,
                                        21.114362297187355
                                    ],
                                    [
                                        29.696100406314063,
                                        25.06001860913663
                                    ],
                                    [
                                        25.402830519628,
                                        25.06001860913663
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
                                    27.581,
                                    23.1017
                                ],
                                [
                                    39.96,
                                    34.38
                                ],
                                [
                                    51.69,
                                    46.01
                                ],
                                [
                                    51.9965,
                                    45.7005
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a46",
                    "number": 3
                },
                {
                    "asset": "a55",
                    "number": 2
                },
                {
                    "asset": "a91",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a109",
                "a189"
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
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-27T12:34:45.461Z",
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
                                    48.344,
                                    31.3463
                                ],
                                [
                                    55.19,
                                    27.59
                                ],
                                [
                                    62.1,
                                    23.89
                                ],
                                [
                                    69.3,
                                    20.48
                                ],
                                [
                                    69.5602,
                                    20.2184
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
                                        68.6757545623389,
                                        21.041663960394256
                                    ],
                                    [
                                        68.6757545623389,
                                        19.39075516256376
                                    ],
                                    [
                                        70.43530903362823,
                                        19.39075516256376
                                    ],
                                    [
                                        70.43530903362823,
                                        21.041663960394256
                                    ],
                                    [
                                        68.6757545623389,
                                        21.041663960394256
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
                                    69.5602,
                                    20.2184
                                ],
                                [
                                    47.99,
                                    31.38
                                ],
                                [
                                    48.344,
                                    31.3463
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a58",
                    "number": 0
                },
                {
                    "asset": "a52",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a109"
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
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-22T05:08:12.707Z",
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
                                    83.3831,
                                    35.2241
                                ],
                                [
                                    75.7,
                                    29.73
                                ],
                                [
                                    67.47,
                                    24.68
                                ],
                                [
                                    67.6098,
                                    24.7249
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
                                        63.6842769906435,
                                        28.136266075156158
                                    ],
                                    [
                                        63.6842769906435,
                                        21.21688383638721
                                    ],
                                    [
                                        71.32283272238381,
                                        21.21688383638721
                                    ],
                                    [
                                        71.32283272238381,
                                        28.136266075156158
                                    ],
                                    [
                                        63.6842769906435,
                                        28.136266075156158
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
                                    67.6098,
                                    24.7249
                                ],
                                [
                                    75.9,
                                    29.62
                                ],
                                [
                                    83.6,
                                    34.91
                                ],
                                [
                                    83.3831,
                                    35.2241
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "a25",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a109",
                "a189",
                "a107"
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
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land--Standard",
            "timestamp": "2022-09-29T19:25:40.744Z",
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
                                34.4164,
                                41.0459
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-SAM MEZ",
            "ownAssets": [
                {
                    "asset": "a146",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a10",
                "a96"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_27",
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
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-25T07:27:09.572Z",
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
                                    80.6025,
                                    15.0499
                                ],
                                [
                                    63.77,
                                    28.33
                                ],
                                [
                                    47.22,
                                    40.89
                                ],
                                [
                                    29.96,
                                    53.73
                                ],
                                [
                                    30.0136,
                                    54.109
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
                                        25.737349478660413,
                                        56.402214288214
                                    ],
                                    [
                                        25.737349478660413,
                                        51.68036960902181
                                    ],
                                    [
                                        33.82920108746788,
                                        51.68036960902181
                                    ],
                                    [
                                        33.82920108746788,
                                        56.402214288214
                                    ],
                                    [
                                        25.737349478660413,
                                        56.402214288214
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
                                    30.0136,
                                    54.109
                                ],
                                [
                                    43.03,
                                    44.25
                                ],
                                [
                                    54.83,
                                    34.18
                                ],
                                [
                                    67.92,
                                    24.39
                                ],
                                [
                                    80.29,
                                    14.88
                                ],
                                [
                                    80.6025,
                                    15.0499
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a122",
                    "number": 3
                },
                {
                    "asset": "a170",
                    "number": 0
                },
                {
                    "asset": "a147",
                    "number": 2
                }
            ],
            "otherAssets": [
                "a10",
                "a96"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_30",
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
            "messageType": "Land--Standard",
            "timestamp": "2022-09-25T09:12:39.190Z",
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
                                    25.4577,
                                    16.9954
                                ],
                                [
                                    31.25,
                                    29.96
                                ],
                                [
                                    37.22,
                                    42.09
                                ],
                                [
                                    42.46,
                                    54.51
                                ],
                                [
                                    42.5027,
                                    54.6941
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
                                        40.74160514723924,
                                        55.67460511242284
                                    ],
                                    [
                                        40.74160514723924,
                                        53.68927822988416
                                    ],
                                    [
                                        44.179689815117605,
                                        53.68927822988416
                                    ],
                                    [
                                        44.179689815117605,
                                        55.67460511242284
                                    ],
                                    [
                                        40.74160514723924,
                                        55.67460511242284
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
                                    42.5027,
                                    54.6941
                                ],
                                [
                                    38.14,
                                    45.45
                                ],
                                [
                                    33.66,
                                    36.09
                                ],
                                [
                                    29.47,
                                    26.01
                                ],
                                [
                                    25.56,
                                    17.22
                                ],
                                [
                                    25.4577,
                                    16.9954
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "a152",
                    "number": 0
                },
                {
                    "asset": "a185",
                    "number": 3
                },
                {
                    "asset": "a148",
                    "number": 1
                },
                {
                    "asset": "a139",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a10",
                "a96",
                "a8"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_33",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-21T16:42:09.598Z",
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
                                    65.7332,
                                    36.4001
                                ],
                                [
                                    67.96,
                                    28.43
                                ],
                                [
                                    71.03,
                                    19.31
                                ],
                                [
                                    73.39,
                                    11.47
                                ],
                                [
                                    76.03,
                                    2.91
                                ],
                                [
                                    75.673,
                                    2.8865
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
                                        72.81925408663112,
                                        5.722448169563038
                                    ],
                                    [
                                        72.81925408663112,
                                        0.043440309434564055
                                    ],
                                    [
                                        78.51251363389763,
                                        0.043440309434564055
                                    ],
                                    [
                                        78.51251363389763,
                                        5.722448169563038
                                    ],
                                    [
                                        72.81925408663112,
                                        5.722448169563038
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
                                    75.673,
                                    2.8865
                                ],
                                [
                                    72.14,
                                    13.61
                                ],
                                [
                                    68.86,
                                    25.59
                                ],
                                [
                                    65.87,
                                    36.86
                                ],
                                [
                                    65.7332,
                                    36.4001
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a39",
                    "number": 0
                },
                {
                    "asset": "a57",
                    "number": 5
                },
                {
                    "asset": "a5",
                    "number": 0
                }
            ],
            "otherAssets": [
                "a109",
                "a189"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_36",
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
            "messageType": "Maritime--MissileStrike",
            "timestamp": "2022-09-22T13:55:40.797Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-39",
            "title": "Order item 39",
            "startDate": "2022-11-15T00:45:00.000Z",
            "endDate": "2022-11-15T03:25:00.000Z",
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
                                    71.2747,
                                    14.6686
                                ],
                                [
                                    70.17,
                                    23.74
                                ],
                                [
                                    68.29,
                                    33.03
                                ],
                                [
                                    66.69,
                                    41.61
                                ],
                                [
                                    66.5401,
                                    42.0968
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
                            "id": "Cruise Missile Strike//Strike Target",
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
                                        70.72981235830687,
                                        15.193807263913468
                                    ],
                                    [
                                        70.72981235830687,
                                        14.142129387806591
                                    ],
                                    [
                                        71.8169758833943,
                                        14.142129387806591
                                    ],
                                    [
                                        71.8169758833943,
                                        15.193807263913468
                                    ],
                                    [
                                        70.72981235830687,
                                        15.193807263913468
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
                    "asset": "a178",
                    "number": 3
                },
                {
                    "asset": "a182",
                    "number": 1
                },
                {
                    "asset": "a115",
                    "number": 5
                },
                {
                    "asset": "a174",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a10",
                "a96"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_39",
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
            "messageType": "Air--Patrol",
            "timestamp": "2022-09-28T00:53:12.787Z",
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
                                    66.8179,
                                    13.6797
                                ],
                                [
                                    68.3,
                                    25.73
                                ],
                                [
                                    71.04,
                                    38.03
                                ],
                                [
                                    72.07,
                                    50.62
                                ],
                                [
                                    72.5266,
                                    50.5454
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
                                        67.85637764726746,
                                        53.24975172108632
                                    ],
                                    [
                                        67.85637764726746,
                                        47.674900680143864
                                    ],
                                    [
                                        76.67559980865279,
                                        47.674900680143864
                                    ],
                                    [
                                        76.67559980865279,
                                        53.24975172108632
                                    ],
                                    [
                                        67.85637764726746,
                                        53.24975172108632
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
                                    72.5266,
                                    50.5454
                                ],
                                [
                                    69.67,
                                    31.98
                                ],
                                [
                                    67.3,
                                    13.91
                                ],
                                [
                                    66.8179,
                                    13.6797
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a174",
                    "number": 2
                },
                {
                    "asset": "a163",
                    "number": 0
                },
                {
                    "asset": "a179",
                    "number": 4
                }
            ],
            "otherAssets": [
                "a10"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_42",
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
            "messageType": "Air--ISTAR",
            "timestamp": "2022-09-29T17:34:45.567Z",
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
                                    49.9002,
                                    49.3109
                                ],
                                [
                                    49.99,
                                    21.04
                                ],
                                [
                                    49.9528,
                                    21.3991
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
                                        48.94448682229479,
                                        22.32880694375131
                                    ],
                                    [
                                        48.94448682229479,
                                        20.463441478454907
                                    ],
                                    [
                                        50.94832991602052,
                                        20.463441478454907
                                    ],
                                    [
                                        50.94832991602052,
                                        22.32880694375131
                                    ],
                                    [
                                        48.94448682229479,
                                        22.32880694375131
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
                                    49.9528,
                                    21.3991
                                ],
                                [
                                    50.1,
                                    35.33
                                ],
                                [
                                    49.59,
                                    49.61
                                ],
                                [
                                    49.9002,
                                    49.3109
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-ISTAR",
            "ownAssets": [
                {
                    "asset": "a26",
                    "number": 5
                },
                {
                    "asset": "a97",
                    "number": 0
                },
                {
                    "asset": "a99",
                    "number": 4
                },
                {
                    "asset": "a31",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a109",
                "a189"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_45",
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
            "messageType": "Land--Standard",
            "timestamp": "2022-09-27T16:00:19.138Z",
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
                                67.9125,
                                39.108
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-SAM MEZ",
            "ownAssets": [
                {
                    "asset": "a131",
                    "number": 0
                },
                {
                    "asset": "a188",
                    "number": 2
                },
                {
                    "asset": "a175",
                    "number": 3
                },
                {
                    "asset": "a189",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a10",
                "a96",
                "a8"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_48",
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
            "messageType": "Maritime--ASWBarrier",
            "timestamp": "2022-09-21T20:09:53.499Z",
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
                                    75.2086,
                                    42.1499
                                ],
                                [
                                    63.02,
                                    37.31
                                ],
                                [
                                    51.68,
                                    31.32
                                ],
                                [
                                    39.62,
                                    26.61
                                ],
                                [
                                    26.85,
                                    21.19
                                ],
                                [
                                    27.2049,
                                    21.4301
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
                                        24.29993943888643,
                                        24.057938347528843
                                    ],
                                    [
                                        24.29993943888643,
                                        18.753959348794424
                                    ],
                                    [
                                        30.006162532503456,
                                        18.753959348794424
                                    ],
                                    [
                                        30.006162532503456,
                                        24.057938347528843
                                    ],
                                    [
                                        24.29993943888643,
                                        24.057938347528843
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
                                    27.2049,
                                    21.4301
                                ],
                                [
                                    51.62,
                                    31.56
                                ],
                                [
                                    75.37,
                                    42.02
                                ],
                                [
                                    75.2086,
                                    42.1499
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "a89",
                    "number": 3
                },
                {
                    "asset": "a34",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a109",
                "a189",
                "a107"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_51",
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
            "messageType": "Air--Duration",
            "timestamp": "2022-09-28T22:03:28.651Z",
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
                                    85.8061,
                                    11.1361
                                ],
                                [
                                    76.94,
                                    20.38
                                ],
                                [
                                    69.33,
                                    29.88
                                ],
                                [
                                    60,
                                    39.66
                                ],
                                [
                                    60.4596,
                                    39.5973
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
                                        56.17797956454215,
                                        42.669092517241396
                                    ],
                                    [
                                        56.17797956454215,
                                        36.38192309149725
                                    ],
                                    [
                                        64.3693983260808,
                                        36.38192309149725
                                    ],
                                    [
                                        64.3693983260808,
                                        42.669092517241396
                                    ],
                                    [
                                        56.17797956454215,
                                        42.669092517241396
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
                                    60.4596,
                                    39.5973
                                ],
                                [
                                    72.91,
                                    25.55
                                ],
                                [
                                    85.81,
                                    10.95
                                ],
                                [
                                    85.8061,
                                    11.1361
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a107",
                    "number": 2
                },
                {
                    "asset": "a134",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a10",
                "a96",
                "a8"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_54",
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
            "messageType": "Land--MissileStrike",
            "timestamp": "2022-09-23T21:41:04.593Z",
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
                                    85.8061,
                                    11.1361
                                ],
                                [
                                    66.77,
                                    17.38
                                ],
                                [
                                    46.94,
                                    23.82
                                ],
                                [
                                    27.39,
                                    29.55
                                ],
                                [
                                    27.2352,
                                    29.9904
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
                            "id": "Ballistic Missile Strike//Strike Target",
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
                                        82.94898947997201,
                                        13.896155228880941
                                    ],
                                    [
                                        82.94898947997201,
                                        8.349559700666166
                                    ],
                                    [
                                        88.60925925183508,
                                        8.349559700666166
                                    ],
                                    [
                                        88.60925925183508,
                                        13.896155228880941
                                    ],
                                    [
                                        82.94898947997201,
                                        13.896155228880941
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
                    "asset": "a175",
                    "number": 0
                },
                {
                    "asset": "a188",
                    "number": 1
                },
                {
                    "asset": "a131",
                    "number": 5
                },
                {
                    "asset": "a199",
                    "number": 3
                }
            ],
            "otherAssets": [
                "a10",
                "a96"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_57",
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
            "messageType": "Air--ISTAR",
            "timestamp": "2022-09-23T11:02:41.326Z",
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
                                    74.3035,
                                    3.7946
                                ],
                                [
                                    54.63,
                                    21.17
                                ],
                                [
                                    34.28,
                                    38.86
                                ],
                                [
                                    34.5795,
                                    38.5097
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
                                        30.508209615214312,
                                        41.490697568077884
                                    ],
                                    [
                                        30.508209615214312,
                                        35.39912652834502
                                    ],
                                    [
                                        38.32028924693916,
                                        35.39912652834502
                                    ],
                                    [
                                        38.32028924693916,
                                        41.490697568077884
                                    ],
                                    [
                                        30.508209615214312,
                                        41.490697568077884
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
                                    34.5795,
                                    38.5097
                                ],
                                [
                                    44.32,
                                    30.03
                                ],
                                [
                                    53.98,
                                    21.47
                                ],
                                [
                                    63.92,
                                    12.19
                                ],
                                [
                                    74.15,
                                    4.19
                                ],
                                [
                                    74.3035,
                                    3.7946
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-ISTAR",
            "ownAssets": [
                {
                    "asset": "a199",
                    "number": 5
                },
                {
                    "asset": "a197",
                    "number": 1
                },
                {
                    "asset": "a126",
                    "number": 4
                },
                {
                    "asset": "a179",
                    "number": 1
                }
            ],
            "otherAssets": [
                "a10"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_60",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Other--SOFAttack",
            "timestamp": "2022-09-27T14:08:18.849Z",
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
                                    52.2775,
                                    43.778
                                ],
                                [
                                    44.78,
                                    31.41
                                ],
                                [
                                    36.63,
                                    19.39
                                ],
                                [
                                    36.9805,
                                    19.0458
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
                                        32.834909204057595,
                                        22.821181754393546
                                    ],
                                    [
                                        32.834909204057595,
                                        15.182073993649173
                                    ],
                                    [
                                        40.939453201270105,
                                        15.182073993649173
                                    ],
                                    [
                                        40.939453201270105,
                                        22.821181754393546
                                    ],
                                    [
                                        32.834909204057595,
                                        22.821181754393546
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
                                        34.935149686400194,
                                        20.94482108728698
                                    ],
                                    [
                                        34.935149686400194,
                                        17.12477005124668
                                    ],
                                    [
                                        38.979301012401045,
                                        17.12477005124668
                                    ],
                                    [
                                        38.979301012401045,
                                        20.94482108728698
                                    ],
                                    [
                                        34.935149686400194,
                                        20.94482108728698
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
                                    36.9805,
                                    19.0458
                                ],
                                [
                                    44.31,
                                    30.95
                                ],
                                [
                                    51.96,
                                    44.16
                                ],
                                [
                                    52.2775,
                                    43.778
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a79",
                    "number": 1
                },
                {
                    "asset": "a63",
                    "number": 4
                },
                {
                    "asset": "a74",
                    "number": 5
                }
            ],
            "otherAssets": [
                "a109",
                "a189",
                "a107"
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_63",
        "_rev": "2"
    }
]